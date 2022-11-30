// SPDX-License-Identifier: MIT
pragma solidity ^0.8.8;

import "@openzeppelin/contracts/access/Ownable.sol";

contract PeerExpress is Ownable {
    enum OrderStatus {
        CREATED,
        PAID,
        PAYMENT_CONFIRMED,
        RELEASED,
        COMPLETED
    }

    struct Order {
        string sender_country;
        string sender_name;
        string sender_email;
        string sender_phone_number;
        uint256 sender_amount;
        uint256 recipient_amount;
        string recipient_country;
        string recipient_name;
        string recipient_email;
        string recipient_phone_number;
        string recipient_bank_name;
        string recipient_account_number;
        bytes32 order_id;
        bytes32 private_key;
        OrderStatus order_status;
        address receiving_merchant;
        address sending_merchant;
    }

    struct Merchant {
        string country;
        string name;
        string email;
        string phone_number;
        string bank_name;
        string account_number;
        uint256 buy_rate;
        uint256 sell_rate;
        uint256 balance;
        address wallet_address;
        bytes32[] buying;
        bytes32[] selling;
    }

    mapping(bytes32 => Order) public orders;
    mapping(address => Merchant) public merchantInfo;

    address[] public merchants;

    address immutable USDTAddress;

    constructor(address _USDTAddress) {
        USDTAddress = _USDTAddress;
    }

    function createOrder(
        string memory sender_country,
        string memory sender_name,
        string memory sender_email,
        string memory sender_phone_number,
        uint256 amount,
        string memory recipient_country,
        string memory recipient_name,
        string memory recipient_email,
        string memory recipient_phone_number,
        string memory recipient_bank_name,
        string memory recipient_account_number
    ) public {
        bytes32 order_id = keccak256(abi.encodePacked(block.timestamp));
        bytes32 private_key = keccak256(abi.encodePacked(block.number));
        address receiving_merchant;
        address sending_merchant;
        uint256 amountInUSD;
        uint256 recipient_amount;

        for (uint index = 0; index < merchants.length; index++) {
            Merchant memory merchant = merchantInfo[merchants[index]];
            if (
                keccak256(abi.encodePacked(merchant.country)) ==
                keccak256(abi.encodePacked(sender_country))
            ) {
                amountInUSD = amount / merchant.buy_rate;
                if (merchant.balance >= amountInUSD) {
                    receiving_merchant = merchants[index];
                    merchantInfo[receiving_merchant].buying.push(order_id);
                    break;
                }
            }
        }

        for (uint index = 0; index < merchants.length; index++) {
            Merchant memory merchant = merchantInfo[merchants[index]];
            if (
                keccak256(abi.encodePacked(merchant.country)) ==
                keccak256(abi.encodePacked(recipient_country))
            ) {
                recipient_amount = merchant.sell_rate * amountInUSD;
                sending_merchant = merchants[index];
                merchantInfo[sending_merchant].selling.push(order_id);
                break;
            }
        }

        orders[order_id] = Order(
            sender_country,
            sender_name,
            sender_email,
            sender_phone_number,
            amount,
            recipient_amount,
            recipient_country,
            recipient_name,
            recipient_email,
            recipient_phone_number,
            recipient_bank_name,
            recipient_account_number,
            order_id,
            private_key,
            OrderStatus.CREATED,
            receiving_merchant,
            sending_merchant
        );
    }

    function updateOrder(OrderStatus status, bytes32 transaction_id) public {
        orders[transaction_id].order_status = status;
    }

    function createMerchant(
        string memory country,
        string memory name,
        string memory email,
        string memory phone_number,
        string memory bank_name,
        string memory account_number
    ) public {
        uint256 buy_rate;
        uint256 sell_rate;
        uint256 balance;
        address wallet_address = msg.sender;
        bytes32[] memory buying;
        bytes32[] memory selling;

        merchantInfo[wallet_address] = Merchant(
            country,
            name,
            email,
            phone_number,
            bank_name,
            account_number,
            buy_rate,
            sell_rate,
            balance,
            wallet_address,
            buying,
            selling
        );
    }

    function depositCrypto(uint256 deposit_amount, uint256 buy_rate, uint256 sell_rate) public {
        merchantInfo[msg.sender].buy_rate = buy_rate;
        merchantInfo[msg.sender].sell_rate = sell_rate;
        merchantInfo[msg.sender].balance += deposit_amount;
    }

    function completeOrder(bytes32 transaction_id, bytes32 private_key) public {
        if (orders[transaction_id].private_key != private_key) {
            revert("Wrong Private Key");
        }
        orders[transaction_id].order_status = OrderStatus.COMPLETED;
    }


    function getOrder(
        bytes32 transaction_id
    ) public view returns (Order memory) {
        return orders[transaction_id];
    }

    function getMultipleOrders(
        bytes32[] memory transaction_ids
    ) public view returns (Order[] memory) {
        Order[] memory multipleOrder = new Order[](transaction_ids.length);
        for (uint index = 0; index < transaction_ids.length; index++) {
            multipleOrder[index] = orders[transaction_ids[index]];
        }
        return multipleOrder;
    }

    function getMerchant(
        address wallet_address
    ) public view returns (Merchant memory) {
        return merchantInfo[wallet_address];
    }

    receive() external payable {}

    fallback() external payable {}
}
