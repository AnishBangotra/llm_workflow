import React from "react";
import { ReactComponent as OpenAGI } from "../icons/OpenAGI.svg";
import { ReactComponent as PlayIcon } from "../icons/PlayIcon.svg";
const Header = ({ onRun }) => {
  return (
    <div
      style={{
        position: "fixed",
        top: 0,
        left: 0,
        width: "100%",
        height: "50px",
        backgroundColor: "#fff",
        boxShadow: "0 2px 5px rgba(0, 0, 0, 0.1)",
        display: "flex",
        alignItems: "center",
        justifyContent: "space-between",
        padding: "0 20px",
        marginRight: "10px",
        marginLeft: "10px",
        zIndex: 1000,
        borderBottom: "1px solid #eaeaea",
      }}
    >
      <div style={{ display: "flex", alignItems: "center", gap: "10px", marginLeft: "10px" }}>
        <OpenAGI />
      </div>

      <div style={{ display: "flex", alignItems: "center", gap: "10px", marginRight: "90px" }}>
        <button
          onClick={() => alert('Deploying functionality is not finished yet...')}
          style={{
            padding: "7px 15px",
            backgroundColor: "#000000",
            color: "#fff",
            border: "none",
            opacity: "0.5",
            borderRadius: "8px",
            fontWeight: "500",
            cursor: "pointer",
          }}
        >
          Deploy
        </button>
        <button
          onClick={onRun}
          style={{
            padding: "7px 15px",
            backgroundColor: "#44924C",
            color: "#fff",
            border: "1px solid #cce6d8",
            borderRadius: "8px",
            fontWeight: "500",
            cursor: "pointer",
            display: "flex",
            alignItems: "center",
            gap: "5px",
          }}
        >
          <PlayIcon />
          Run
        </button>
      </div>
    </div>
  );
};

export default Header;
