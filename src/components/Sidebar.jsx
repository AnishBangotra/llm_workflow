import React from "react";
import { useDrag } from "react-dnd";
import { ReactComponent as InputIcon } from "../icons/InputIcon.svg"; // Replace with actual SVG paths
import { ReactComponent as LLMIcon } from '../icons/LLMIcon.svg';
import { ReactComponent as OutputIcon } from "../icons/OutputIcon.svg";

const SidebarItem = ({ type, label, Icon }) => {
  const [{ isDragging }, drag] = useDrag(() => ({
    type: "node",
    item: { type },
    collect: (monitor) => ({
      isDragging: !!monitor.isDragging(),
    }),
  }));

  return (
    <div
      ref={drag}
      style={{
        display: "flex",
        alignItems: "center",
        justifyContent: "space-between",
        padding: "8px 12px",
        marginBottom: "10px",
        border: "1px solid #dcdcdc",
        borderRadius: "8px",
        backgroundColor: isDragging ? "#f0f0f0" : "#ffffff",
        boxShadow: "0px 2px 4px rgba(0, 0, 0, 0.1)",
        cursor: "grab",
      }}
    >
      <div style={{ display: "flex", alignItems: "center", gap: "8px" }}>
        <Icon />
        <span style={{ fontSize: "14px", fontWeight: "400", color: "#333" }}>
          {label}
        </span>
      </div>
      <div style={{ fontSize: "16px", color: "#999" }}>☰</div>
    </div>
  );
};

const Sidebar = () => {
  return (
    <aside
      style={{
        width: "251px",
        padding: "16px",
        height: "90%",
        borderRight: "1px solid #e0e0e0",
        backgroundColor: "#f8f8f8",
        borderRadius: "20px",
        fontFamily: "'Inter', sans-serif",
        boxShadow: "0px 4px 6px rgba(0, 0, 0, 0.1)",
      }}
    >
      <h3 style={{ fontSize: "18px", marginBottom: "16px", fontWeight: "500", color: "#333" }}>
        Components
      </h3>
      <hr style={{ color: "#44444480", marginBottom: "16px" }} />
      <p style={{ fontSize: "14px", color: "#44444480", marginBottom: "16px", fontWeight: "400" }}>Drag and Drop</p>
      <SidebarItem type="first" label="Input" Icon={InputIcon} />
      <SidebarItem type="llm" label="LLM Engine" Icon={LLMIcon} />
      <SidebarItem type="last" label="Output" Icon={OutputIcon} />
    </aside>
  );
};


export default Sidebar;
