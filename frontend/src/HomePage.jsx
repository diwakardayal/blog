/** @format */

import { useEffect } from "react";
import { Button, Container, Row, Col, Card } from "react-bootstrap";
import { Link } from "react-router-dom";
import { useBlog } from "./hooks";
import { parseDate } from "./utils";

export default function HomePage() {
  // eslint-disable-next-line no-unused-vars
  const { blogs, getBlogs } = useBlog();

  async function fetchBlogs() {
    await getBlogs();
  }

  useEffect(() => {
    fetchBlogs();
  }, []);

  return (
    <>
      <Container style={{ maxWidth: "80%" }}>
        <Row className="w-100">
          <Col className="d-flex align-items-center justify-content-between flex-wrap">
            {blogs.map((blog, index) => (
              <Card
                style={{ width: "18rem", height: "13rem" }}
                key={index}
                className="mt-5"
              >
                <Card.Body
                  style={{
                    display: "flex",
                    flexDirection: "column",
                    justifyContent: "space-between",
                  }}
                >
                  <div>
                    <Card.Title>
                      {blog.title.length > 15
                        ? `${blog.title.slice(0, 20)}…`
                        : blog.title}
                    </Card.Title>
                    <Card.Subtitle
                      style={{ fontSize: "0.8rem", opacity: ".7" }}
                    >
                      {parseDate(blog.createdAt)}
                    </Card.Subtitle>
                    <Card.Subtitle
                      style={{ fontSize: "0.8rem", opacity: ".7" }}
                      className="mt-1"
                    >
                      Author: Diwakar
                    </Card.Subtitle>
                    <Card.Text className="mt-3">
                      {blog?.content?.length > 40
                        ? `${blog.content.slice(0, 40)}…`
                        : blog.content}
                    </Card.Text>
                  </div>
                  <div style={{ marginTop: "auto" }}>
                    <Link to={`/blog/${blog.id}`}>
                      <Button variant="secondary">Read More</Button>
                    </Link>
                  </div>
                </Card.Body>
              </Card>
            ))}
          </Col>
        </Row>
      </Container>
    </>
  );
}
 