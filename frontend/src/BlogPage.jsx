/** @format */
import { useParams } from "react-router-dom";
import { Container, Row, Button } from "react-bootstrap";
import { useEffect, useState } from "react";
import EditPostModalContainer from "./components/EditPostModal";
import CreatePostCard from "./admin/CreatePostCard";

export default function BlogPage() {
  const { id } = useParams();

  const [isEditBtnClick, setIsEditBtnClick] = useState(false);

  useEffect(() => {}, [id]);

  function onClose() {
    setIsEditBtnClick(false);
  }

  return (
    <>
      <Container style={{ maxWidth: "80%" }}>
        <Row className="w-100">
          <Container className="d-flex align-items-center justify-content-between">
            <h2>TITLE</h2>{" "}
            <Button
              size="sm"
              variant="secondary"
              onClick={() => setIsEditBtnClick(true)}
            >
              <img src="/svg/editIcon.svg" /> Edit
            </Button>
          </Container>

          <i className="bi bi-pencil-square"></i>
          <h4 style={{ fontSize: "1rem", opacity: ".7" }}>22 May, 2012</h4>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Ut a amet
            harum possimus. Temporibus nihil accusantium, rem fugiat veritatis
            asperiores eos voluptatem, ullam impedit architecto reiciendis cum
            aperiam amet perspiciatis.
          </p>
          <p>Author: diwakar</p>
        </Row>
      </Container>
      {isEditBtnClick && (
        <EditPostModalContainer
          isModalVisible={isEditBtnClick}
          onClose={onClose}
          title={"helloo"}
          body={"nice"}
        />
      )}
    </>
  );
}
