import React from "react";
import { FaLinkedin } from "react-icons/fa";
import { Helmet } from "react-helmet";

export const SocialLinks = () => {
  return (
    <div
      style={{
        width: "100%",
        display: "inline-block",
        padding: '8px'
      }}
    >
      <Helmet>
        <script async defer src="https://buttons.github.io/buttons.js" />
      </Helmet>
      <a
        class="twitter-follow-button"
        href="https://twitter.com/RikusWiehahn"
      >
        Follow @RikusWiehahn
      </a>
      <span
        style={{
          position: "relative",
          top: "-4px",
          display: "inline-flex"
        }}
      >
        <a
          href={`https://www.linkedin.com/in/rikusw/`}
          target="_blank"
          rel="noopener noreferrer"
          title="Find me on LinkedIn"
          style={{
            backgroundColor: "#0077B5",
            fontFamily: "'Roboto', sans-serif",
            color: "#fff",
            width: "130px",
            height: "20px",
            fontSize: "11px",
            textDecoration: "none",
            borderRadius: "3px",
            margin: "4px",
            display: "flex",
            alignItems: "center",
            paddingTop: "2px"
          }}
        >
          <FaLinkedin size={14} style={{ margin: "4px", marginTop: "2px" }} />
          Connect on LinkedIn
        </a>
      </span>
      <a
        class="github-button"
        href="https://github.com/rikuswiehahn"
        data-color-scheme="no-preference: light; light: dark; dark: dark;"
        data-show-count="true"
        aria-label="Follow @rikuswiehahn on GitHub"
      >
        Follow @rikuswiehahn
      </a>
    </div>
  );
};