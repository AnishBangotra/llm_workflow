import React from 'react';
import { IconButton } from "@mui/material";
import { ZoomIn, ZoomOut, Lock, LockOpen } from "@mui/icons-material";

const WorkflowControls = ({ onZoomIn, onZoomOut, onToggleLock }) => {
    return (
        <div style={{ position: "absolute", bottom: 16, right: 16 }}>
            <IconButton onClick={onZoomIn}>
                <ZoomIn />
            </IconButton>
            <IconButton onClick={onZoomOut}>
                <ZoomOut />
            </IconButton>
            <IconButton onClick={onToggleLock}>
                <Lock />
            </IconButton>
        </div>
    )
}

export default WorkflowControls;