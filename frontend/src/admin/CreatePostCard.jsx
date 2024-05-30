/** @format */
import { useState } from "react";
import { Button, Container, Row, Col, Card } from "react-bootstrap";
import CreatePostModal from "../components/CreatePostModal";

export default function CreatePostCard() {
  const [isCreatePostBtnClicked, setIsCreatePostBtnClicked] = useState(false);

  return (
    <>
      {" "}
      <Card
        style={{ width: "18rem", padding: "1rem", height: "11.5rem" }}
        className="mt-5 d-flex flex-column align-items-center"
      >
        <Card.Body
          className="d-flex flex-column align-items-center justify-content-md-center"
          style={{ gap: "20px" }}
        >
          <button
            style={{
              backgroundColor: "transparent",
              border: "none",
            }}
            onClick={() => setIsCreatePostBtnClicked(true)}
          >
            <img src="/svg/plusIcon.svg" width={45} style={{ opacity: ".7" }} />
          </button>
          <Card.Title>Create Post</Card.Title>
        </Card.Body>
      </Card>
      <CreatePostModal
        isModalVisible={isCreatePostBtnClicked}
        onClose={() => setIsCreatePostBtnClicked(false)}
        title={"SMAPE"}
        body={"body"}
      />
    </>
  );
}
