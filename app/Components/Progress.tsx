import React, { useState } from "react";
import { ProgressBar, Button } from "@shopify/polaris";

function ProgressBarExample() {
  const [progress, setProgress] = useState(0);
  const handleClick = () => {
    setProgress(progress + 10);
  };

  return (
    <div style={{ marginTop: "20px" }}>
      <h1 style={{ fontSize: "20px",fontWeight:"bold" }}> Your Current Order Count</h1>

      <h3 style={{ margin: "5px" }}>Amount of the order value</h3>

      <div
        style={{
          display: "flex",
          alignItems: "center",
          width: "90vw",
          maxWidth: "1800",
        }}
      >
        {/* Render the ProgressBar with dynamic progress value */}
        <div style={{ width: "100%", marginRight: "10px" }}>
          <ProgressBar progress={progress} tone="primary" />
        </div>
        {/* Render a button to update progress */}
        <div style={{ width: "fit-content" }}>
          <Button onClick={handleClick}>Upgrade</Button>
        </div>
      </div>

      <div
        style={{
          display: "flex",
          alignItems: "end",
          justifyContent: "flex-end",
        }}
      >
        <p>{progress}%(0 out of the 1000 order)</p>
      </div>
    </div>
  );
}

export default ProgressBarExample;
