import React from "react";

export const Emoji = ({ label = "sheep", symbol = "🐑", style = {} }) => (
  <span
    style={{
      fontSize: "12px",
      ...style
    }}
    className="emoji"
    role="img"
    aria-label={label || ""}
    aria-hidden={label ? "false" : "true"}
    alt={label}
  >
    {symbol}
  </span>
);
