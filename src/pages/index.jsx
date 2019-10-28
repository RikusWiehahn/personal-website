import React from "react";
import Helmet from "react-helmet";
import { graphql } from "gatsby";
import Layout from "../layout";
import PostListing from "../components/PostListing/PostListing";
import SEO from "../components/SEO/SEO";
import config from "../../data/SiteConfig";
import { NavBar, Heading, Card, Body, Subheading, AboutMe, SocialLinks } from "../components/atoms";

class Index extends React.Component {
  render() {
    const postEdges = this.props.data.allMarkdownRemark.edges;
    return (
      <Layout>
        <div>
          <Helmet title={config.siteTitle} />
          <SEO />
          <NavBar />
          <AboutMe />
          <SocialLinks />
          <Heading style={{ margin: "0px", marginLeft: "16px" }}>
            Current Work 💼
          </Heading>
          <CurrentJob />
          <Heading style={{ margin: "0px", marginLeft: "16px" }}>
            Current Side Hustle 🛠
          </Heading>
          <CurrentProjects />
          <Heading style={{ margin: "0px", marginLeft: "16px" }}>
            Essays 📜
          </Heading>
          <PostListing postEdges={postEdges} />
        </div>
      </Layout>
    );
  }
}

export default Index;

/* eslint no-undef: "off" */
export const pageQuery = graphql`
  query IndexQuery {
    allMarkdownRemark(
      limit: 2000
      sort: { fields: [fields___date], order: DESC }
    ) {
      edges {
        node {
          fields {
            slug
            date
          }
          excerpt
          timeToRead
          frontmatter {
            title
            tags
            cover
            date
          }
        }
      }
    }
  }
`;

const CurrentProjects= () => {
  return (
    <Card
      style={{ flexDirection: "column" }}
      onClick={() => window.open("https://cohabb.co.nz")}
    >
      <div style={{ display: "flex", width: "100%" }}>
        <img
          src={'/images/working_together.png'}
          style={{
            width: "180px",
            height: "180px",
            marginRight: "8px",
            objectFit: "cover"
          }}
        />
        <div style={{}}>
          <Heading style={{ margin: "0px", padding: "0px" }}>Cohabb</Heading>
          <Body style={{ margin: "0px" }}>
            A platform for listing and booking physical spaces
          </Body>
        </div>
      </div>
    </Card>
  );
}

const CurrentJob= () => {
  return (
    <Card
      style={{ flexDirection: "column" }}
      onClick={() => window.open("https://layerx.co.nz")}
    >
      <div style={{ display: "flex", width: "100%" }}>
        <img
          src={'/images/LayerX.jpg'}
          style={{
            width: "180px",
            height: "180px",
            marginRight: "8px",
            objectFit: "cover"
          }}
        />
        <div style={{}}>
          <Heading style={{ margin: "0px", padding: "0px" }}>LayerX</Heading>
          <Body style={{ margin: "0px" }}>
            Designer and Fullstack Developer 🔥
          </Body>
        </div>
      </div>
    </Card>
  );
};