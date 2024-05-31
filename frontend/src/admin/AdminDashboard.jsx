/** @format */
import { Container, Row, Col, Card } from "react-bootstrap";
import CreatePostCard from "./CreatePostCard";
import { useEffect, useState } from "react";
import { fetchPosts } from "../services/blog";
import { useBlog } from "../hooks";
import { Link } from "react-router-dom";

export default function AdminDashBoard() {
  const { blogs, getBlogs } = useBlog();

  useEffect(() => {
    getBlogs();
  }, []);

  function parseDate(time) {
    const date = new Date(time);

    const options = { year: "numeric", month: "long", day: "numeric" };
    return date.toLocaleDateString("en-GB", options);
  }

  return (
    <>
      <Container style={{ maxWidth: "80%" }}>
        <Row className="w-100">
          <Col className="d-flex align-items-center justify-content-between flex-wrap">
            <CreatePostCard />
            {blogs.map((post, index) => (
              <Card
                style={{ width: "18rem", padding: "1rem", height: "11.5rem" }}
                key={index}
                className="mt-5"
              >
                <Card.Body>
                  <Card.Title>
                    {post.title.length > 15 ? `${post.title.slice(0,20)}…` : post.title}
                  </Card.Title>
                  <Card.Subtitle style={{ fontSize: "0.8rem", opacity: ".7" }}>
                    {parseDate(post.createdAt)}
                  </Card.Subtitle>
                  <Card.Subtitle
                    style={{ fontSize: "0.8rem", opacity: ".7" }}
                    className="mt-1"
                  >
                    Author: Diwakar
                  </Card.Subtitle>

                  <Card.Text className="mt-3">
                    {" "}
                    {post?.content?.length > 40
                      ? `${post.content.slice(0, 40)}…`
                      : post.content}
                  </Card.Text>
                </Card.Body>
                <Link to={`/blog/${post.id}`}>
                  <div className="hover-image">
                    <img src="/svg/pencilIcon.svg" />
                  </div>
                </Link>
              </Card>
            ))}
          </Col>
        </Row>
      </Container>
    </>
  );
}
