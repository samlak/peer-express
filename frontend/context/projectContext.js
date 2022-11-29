import React, { useReducer, createContext, useEffect } from "react";
import { reducer } from "./projectReducer";

export const ProjectContext = createContext();

const initialState = [];

const ProjectProvider = ({ children }) => {
    const [projects, dispatch] = useReducer(reducer, initialState);


    async function getInitialState() {
        const getAllProjectInfoFromCall = await getAllProjectInfo();
        dispatch({ type: "FETCH_PROJECTS", data: getAllProjectInfoFromCall });
    }

    useEffect(() => {
    }, []);

    return (
        <ProjectContext.Provider value={{ data: projects, dispatch: () => getInitialState() }}>
            {children}
        </ProjectContext.Provider>
    );
};

export default ProjectProvider;
