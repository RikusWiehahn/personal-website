import React from "react";

export const Heading = ({ style = {}, children }) => (
  <h1
    style={{
      fontFamily: "'Open Sans', sans-serif",
      fontSize: "24px",
      color: "#000",
      userSelect: "none",
      fontWeight: "600",
      ...style
    }}
  >
    {children}
  </h1>
);

export const Subheading = ({ style = {}, children }) => (
  <h1
    style={{
      fontFamily: "'Open Sans', sans-serif",
      fontSize: "16px",
      color: "#000",
      userSelect: "none",
      fontWeight: "600",
      ...style
    }}
  >
    {children}
  </h1>
);

export const CardHeading = ({ style = {}, children }) => (
  <h2
    style={{
      fontFamily: "'Open Sans', sans-serif",
      fontSize: "14px",
      color: "#000",
      paddingLeft: "10px",
      fontWeight: "600",
      ...style
    }}
  >
    {children}
  </h2>
);

export const Body = ({ style = {}, children }) => (
  <p
    style={{
      fontFamily: "'Times', serif",
      fontSize: "14px",
      color: "#000",
      fontWeight: "400",
      ...style
    }}
  >
    {children}
  </p>
);

export const SubBody = ({ style = {}, children }) => (
  <p
    style={{
      fontFamily: "'Open Sans', sans-serif",
      fontSize: "12px",
      color: "#000",
      fontWeight: "400",
      ...style
    }}
  >
    {children}
  </p>
);

export const Badge = ({ style = {}, children }) => (
  <p
    style={{
      fontFamily: "'Open Sans', sans-serif",
      fontSize: "8px",
      color: "#000",
      fontWeight: "400",
      ...style
    }}
  >
    {children}
  </p>
);
