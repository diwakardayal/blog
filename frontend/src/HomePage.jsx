/** @format */

import { useState } from "react";
import { Button, Container, Row, Col, Card } from "react-bootstrap";
import { Link } from "react-router-dom";

export default function HomePage() {
  // eslint-disable-next-line no-unused-vars
  const [blogs, setBlogs] = useState(new Array(28).fill(""));
  return (
    <>
      <Container style={{ maxWidth: "80%" }}>
        <Row className="w-100">
          <Col className="d-flex align-items-center justify-content-between flex-wrap">
            {blogs.map((blog, index) => (
              <Card style={{ width: "18rem" }} key={index} className="mt-5">
                <Card.Img variant="top" src={image} />
                <Card.Body>
                  <Card.Title>Card Title</Card.Title>
                  <Card.Subtitle style={{ fontSize: "0.8rem", opacity: ".7" }}>
                    27 May, 2012
                  </Card.Subtitle>
                  <Card.Subtitle
                    style={{ fontSize: "0.8rem", opacity: ".7" }}
                    className="mt-1"
                  >
                    Author: james
                  </Card.Subtitle>

                  <Card.Text className="mt-3">
                    Some quick example text to build on the card title and make
                    up the bulk of the cards content.
                  </Card.Text>

                  <Link to="/blog/12312">
                    <Button variant="secondary">Read More</Button>
                  </Link>
                </Card.Body>
              </Card>
            ))}
          </Col>
        </Row>
      </Container>
    </>
  );
}

const image =
  "data:image/svg+xml;charset=UTF-8,%3Csvg%20width%3D%22286%22%20height%3D%22180%22%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%20viewBox%3D%220%200%20286%20180%22%20preserveAspectRatio%3D%22none%22%3E%3Cdefs%3E%3Cstyle%20type%3D%22text%2Fcss%22%3E%23holder_18fc4bdd370%20text%20%7B%20fill%3A%23999%3Bfont-weight%3Anormal%3Bfont-family%3AArial%2C%20Helvetica%2C%20Open%20Sans%2C%20sans-serif%2C%20monospace%3Bfont-size%3A14pt%20%7D%20%3C%2Fstyle%3E%3C%2Fdefs%3E%3Cg%20id%3D%22holder_18fc4bdd370%22%3E%3Crect%20width%3D%22286%22%20height%3D%22180%22%20fill%3D%22%23373940%22%3E%3C%2Frect%3E%3Cg%3E%3Ctext%20x%3D%22107.18637466430664%22%20y%3D%2296.24000034332275%22%3E286x180%3C%2Ftext%3E%3C%2Fg%3E%3C%2Fg%3E%3C%2Fsvg%3E";
