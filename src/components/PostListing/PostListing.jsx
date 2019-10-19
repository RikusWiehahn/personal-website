import React from "react";
import { Link } from "gatsby";
import { Heading, Card, Body } from "../atoms/index";

var moment = require('moment');

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
            style={{
              display: "flex",
              flex: 1,
              alignItems: "center",
              marginTop: "4px"
            }}
          >
            <img
              src={post.cover}
              style={{ width: "140px", height: "140px", marginRight: "8px", objectFit: 'cover' }}
            />
            <div>
              <Link
                to={post.path}
                key={post.title}
                style={{ textDecoration: "none" }}
              >
                <Heading>{post.title}</Heading>
              </Link>
              <Body>{moment(post.date).format("LL")}</Body>
            </div>
          </Card>
        ))}
      </div>
    );
  }
}

export default PostListing;
