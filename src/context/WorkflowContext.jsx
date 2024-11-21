import React, { createContext, useState } from "react";

export const WorkflowContext = createContext();

export const WorkflowProvider = ({ children }) => {
    const [workflow, setWorkflow] = useState({
        nodes: [],
        edges: []
    });

    return (
        <WorkflowContext.Provider value={{ workflow, setWorkflow }}>
            {children}
        </WorkflowContext.Provider>
    )
}