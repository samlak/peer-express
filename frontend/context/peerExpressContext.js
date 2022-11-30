import React, { useReducer, createContext, useEffect } from "react";
import { reducer } from "./peerExpressReducer";

export const PeerExpressContext = createContext();

const initialState = [];

const PeerExpressProvider = ({ children }) => {
    const [peerExpresss, dispatch] = useReducer(reducer, initialState);


    async function getInitialState() {
        const getAllPeerExpressInfoFromCall = await getAllPeerExpressInfo();
        dispatch({ type: "FETCH_PROJECTS", data: getAllPeerExpressInfoFromCall });
    }

    useEffect(() => {
    }, []);

    return (
        <PeerExpressContext.Provider value={{ data: peerExpresss, dispatch: () => getInitialState() }}>
            {children}
        </PeerExpressContext.Provider>
    );
};

export default PeerExpressProvider;
