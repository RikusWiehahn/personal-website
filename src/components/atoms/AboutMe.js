import React from "react";
import styled from '@emotion/styled';
import { Heading, Body } from "./Fonts";
import { Card } from "./Card";

export const AboutMe = () => {
  return (
    <Card style={{ flexDirection: "column" }}>
      <ResponsiveContainer>
        <img
          src={'/images/mugshot.jpg'}
          style={{
            width: "180px",
            height: "180px",
            marginRight: "8px",
            objectFit: "cover"
          }}
        />
        <div style={{ flex: 1 }}>
          <Heading style={{ margin: "0px", padding: "0px" }}>
            Hi I'm Rikus!
          </Heading>
          <Body style={{ margin: "0px" }}>
            This is where I share my thoughts on the things I'm passionate
            about and document my journey ✌️.
          </Body>
        </div>
      </ResponsiveContainer>
    </Card>
  );
};

const ResponsiveContainer = styled.div({
  display: "flex",
  "@media screen and (max-width: 500px)": {
    flexDirection: 'column',
  }
});


