import React from "react";
import styled from "@emotion/styled";

export const Card = ({ children, style, onClick }) => {
  return (
    <Container
      style={style}
      onClick={() => {
        if (onClick) {
          onClick();
        }
      }}
      clickable={onClick}
    >
      {children}
    </Container>
  );
};

const Container = styled.div(({ style = {}, clickable }) => {
  const activeStyle = style.active ? style.active : {};
  return {
    flex: 1,
    borderWidth: '1px',
    borderStyle: "solid",
    borderRadius: "2px",
    borderColor: "#eee",
    backgroundColor: '#Fff',
    display: "flex",
    alignItems: "center",
    marginTop: "4px",
    boxShadow: "0px 0px 5px 5px rgba(0,0,0,0.03)",
    padding: "8px",
    margin: "8px",
    ":hover": {
      cursor: clickable ? "pointer" : "arrow",
      ...activeStyle
    },
    ...style
  };
});
