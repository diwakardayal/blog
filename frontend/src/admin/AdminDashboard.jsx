/** @format */
import { Container, Row, Col, Card } from "react-bootstrap";
import CreatePostCard from "./CreatePostCard";

export default function AdminDashBoard() {
  const blogs = new Array(7).fill("");

  return (
    <>
      <Container style={{ maxWidth: "80%" }}>
        <Row className="w-100">
          <Col className="d-flex align-items-center justify-content-between flex-wrap">
            <CreatePostCard />
            {blogs.map((blog, index) => (
              <Card style={{ width: "18rem" }} key={index} className="mt-5">
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
                </Card.Body>
              </Card>
            ))}
          </Col>
        </Row>
      </Container>
    </>
  );
}
