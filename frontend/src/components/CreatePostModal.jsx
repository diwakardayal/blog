/** @format */

import { useState } from "react";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
import Form from "react-bootstrap/Form";
import { createPost } from "../services/blog";
import { toast } from "react-toastify";
import { useBlog } from "../hooks";

// eslint-disable-next-line react/prop-types
export default function CreatePostModal({ isModalVisible, onClose }) {
  if (!isModalVisible) return null;

  // eslint-disable-next-line react-hooks/rules-of-hooks
  const { getBlogs } = useBlog();

  // eslint-disable-next-line react-hooks/rules-of-hooks
  const [title, setTitle] = useState("");
  // eslint-disable-next-line react-hooks/rules-of-hooks
  const [content, setContent] = useState("");

  async function handleCreatePost(e) {
    console.log(title, content);
    e.preventDefault();

    if (!title || !content) {
      toast.error("Please enter the details");
      return;
    }

    const res = await toast.promise(
      createPost({ title, content, authorId: 1 }),
      {
        pending: "Processing…",
        success: "Post Created",
        error: "Failed to create Post",
      }
    );

    if (res) {
      onClose();
      getBlogs();
    }
  }

  return (
    <>
      <Modal show={isModalVisible} onHide={onClose}>
        <Modal.Header closeButton>
          <Modal.Title>Create Post</Modal.Title>
        </Modal.Header>
        <Form className="p-3" onSubmit={handleCreatePost}>
          <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
            <Form.Label>Title</Form.Label>
            <Form.Control
              type="text"
              onChange={(e) => setTitle(e.target.value)}
            />
          </Form.Group>
          <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
            <Form.Label>Content</Form.Label>
            <Form.Control
              as="textarea"
              rows={3}
              onChange={(e) => setContent(e.target.value)}
            />
          </Form.Group>
          <Modal.Footer>
            <Button variant="secondary" onClick={onClose}>
              Close
            </Button>
            <Button variant="primary" type="submit">
              Create Post
            </Button>
          </Modal.Footer>
        </Form>
      </Modal>
    </>
  );
}
