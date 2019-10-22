import React from "react";
import { navigate } from "gatsby";
import { Heading, Card, Body } from "../atoms/index";

var moment = require("moment");

class PostListing extends React.Component {
  getPostList() {
    const postList = [];
    this.props.postEdges.forEach(postEdge => {
      postList.push({
        path: postEdge.node.fields.slug,
        tags: postEdge.node.frontmatter.tags,
        cover: postEdge.node.frontmatter.cover,
        title: postEdge.node.frontmatter.title,
        date: postEdge.node.fields.date,
        excerpt: postEdge.node.excerpt,
        timeToRead: postEdge.node.timeToRead
      });
    });
    return postList;
  }

  render() {
    const postList = this.getPostList();
    return (
      <div>
        {/* Your post list here. */
        postList.map(post => (
          <Card
            onClick={() => {
              navigate(post.path);
            }}
          >
            <img
              src={post.cover}
              style={{
                width: "80px",
                height: "80px",
                marginRight: "8px",
                objectFit: "cover"
              }}
            />
            <div>
              <Heading style={{ margin: '0px' }}>{post.title}</Heading>
              <Body style={{ margin: '0px' }}>{moment(post.date).format("LL")}</Body>
            </div>
          </Card>
        ))}
      </div>
    );
  }
}

export default PostListing;
