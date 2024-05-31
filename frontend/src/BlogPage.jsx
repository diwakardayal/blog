/** @format */
import { useParams } from "react-router-dom";
import { Container, Row, Button } from "react-bootstrap";
import { useEffect, useState } from "react";
import EditPostModalContainer from "./components/EditPostModal";
import CreatePostCard from "./admin/CreatePostCard";
import { useAuth, useBlog } from "./hooks";
import DeletePostConfirmationModal from "./components/DeletePostConfirmationModal";
import { fetchPostById } from "./services/blog";
import { parseDate } from "./utils";

export default function BlogPage() {
  const { user } = useAuth();
  const { id } = useParams();

  const [isEditBtnClicked, setIsEditBtnClicked] = useState(false);
  const [isDeleteBtnClicked, setIsDeleteBtnClicked] = useState(false);
  const [blog, setBlog] = useState({});

  async function getPost() {
    const res = await fetchPostById(id);
    setBlog(res);
  }

  useEffect(() => {
    getPost();
  }, []);

  function onClose() {
    setIsEditBtnClicked(false);
  }

  return (
    <>
      <Container style={{ maxWidth: "80%" }}>
        <Row className="w-100">
          <Container className="d-flex align-items-center justify-content-between">
            <h2>{blog?.title}</h2>{" "}
            {user && (
              <div style={{ display: "flex", gap: ".5rem" }}>
                <Button
                  size="sm"
                  variant="danger"
                  onClick={() => setIsDeleteBtnClicked(true)}
                >
                  Delete
                </Button>
                <Button
                  size="sm"
                  variant="secondary"
                  onClick={() => setIsEditBtnClicked(true)}
                >
                  <img src="/svg/editIcon.svg" /> Edit
                </Button>
              </div>
            )}
          </Container>

          <i className="bi bi-pencil-square"></i>
          <h4 style={{ fontSize: "1rem", opacity: ".7" }}>
            {parseDate(blog.createdAt)}
          </h4>
          <p>{blog && blog?.content}</p>
          <p>Author: diwakar</p>
        </Row>
      </Container>

      <EditPostModalContainer
        isModalVisible={isEditBtnClicked}
        onClose={onClose}
        postId={id}
        title={blog?.title}
        body={blog?.content}
        refresh={getPost}
      />

      <DeletePostConfirmationModal
        isModalVisible={isDeleteBtnClicked}
        onClose={() => setIsDeleteBtnClicked(false)}
        postId={id}
      />
    </>
  );
}
