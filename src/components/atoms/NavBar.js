import React, { Component } from 'react';
import styled from '@emotion/styled';
import { Subheading } from './Fonts';
import { Emoji } from './Emoji';
import { Link } from 'gatsby';

class Bar extends Component {
  render() {
    return (
      <div>
        <div style={{ height: "50px" }} />
        <Nav>
          <div
            style={{
              display: "flex",
              alignItems: "center",
              maxWidth: "800px",
              width: "100%"
            }}
          >
            <Emoji
              symbol="🤖"
              style={{ fontSize: "32px", margin: "16px" }}
            />
            <Link to="/" style={{ textDecoration: "none" }}>
              <Subheading>Rikus Wiehahn</Subheading>
            </Link>
          </div>
        </Nav>
      </div>
    );
  }
}

export const NavBar = Bar;

const Nav = styled.nav({
  position: "fixed",
  zIndex: 1,
  top: "0px",
  borderStyle: "solid",
  borderWidth: "0px",
  borderBottomWidth: "1px",
  boxShadow: "0px 0px 5px 5px rgba(0,0,0,0.03)",
  borderColor: "#eee",
  left: "0px",
  backgroundColor: "#fff",
  width: "100vw",
  height: "50px",
  display: "flex",
  padding: "8px",
  justifyContent: "center"
});