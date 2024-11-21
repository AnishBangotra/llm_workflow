import React from "react";
import { List, ListItem, ListItemText } from "@mui/material";
import { FaKeyboard, FaCog, FaTerminal } from "react-icons/fa";

const Sidebar = () => {
  const nodes = [
    { id: "input", label: "Input", icon: <FaKeyboard /> },
    { id: "llm", label: "LLM Engine", icon: <FaCog /> },
    { id: "output", label: "Output", icon: <FaTerminal /> },
  ];

  return (
    <div style={{ width: 250, padding: 16, background: "#f9f9f9" }}>
      <h3>Components</h3>
      <List>
        {nodes.map((node) => (
          <ListItem key={node.id} style={{ cursor: "grab" }}>
            {node.icon} &nbsp; <ListItemText primary={node.label} />
          </ListItem>
        ))}
      </List>
    </div>
  );
};

export default Sidebar;
