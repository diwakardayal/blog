/**
 * eslint-disable no-undef
 *
 * @format
 */

/* eslint-disable react-hooks/rules-of-hooks */
/** @format */

import { useState, useEffect } from "react";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
import Form from "react-bootstrap/Form";
import { updatePost } from "../services/blog";
import { toast } from "react-toastify";
import { useBlog } from "../hooks";

// eslint-disable-next-line react/prop-types
export default function EditPostModalContainer({
  isModalVisible,
  onClose,
  postId,
  title,
  body,
  refresh,
}) {
  if (!isModalVisible) return null;

  // eslint-disable-next-line react-hooks/rules-of-hooks
  const { getBlogs, blogs } = useBlog();
  const [blog, setBlog] = useState({});

  useEffect(() => {
    const selectedBlog = blogs.filter((b) => b.id === postId);
    console.log(selectedBlog, "seletiveblog");
  }, [postId]);

  // eslint-disable-next-line react-hooks/rules-of-hooks
  const [blogTitle, setBlogTitle] = useState(title || "");
  // eslint-disable-next-line react-hooks/rules-of-hooks
  const [blogContent, setBlogContent] = useState(body || "");

  async function handleEdit(e) {
    e.preventDefault();

    if (!blogTitle || !blogContent) {
      toast.error("Please fill the form");
      return;
    }

    const res = await toast.promise(
      updatePost({ postId, title: blogTitle, content: blogContent }),
      {
        pending: "Processing…",
        success: "Post updated",
        error: "Failed to update Post",
      }
    );

    if (res) {
      onClose();
      refresh();
    }
  }

  return (
    <>
      <Modal show={isModalVisible} onHide={onClose}>
        <Modal.Header closeButton>
          <Modal.Title>Edit Post</Modal.Title>
        </Modal.Header>
        <Form className="p-3" onSubmit={handleEdit}>
          <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
            <Form.Label>Title</Form.Label>
            <Form.Control
              type="text"
              value={blogTitle}
              onChange={(e) => setBlogTitle(e.target.value)}
            />
          </Form.Group>
          <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
            <Form.Label>Content</Form.Label>
            <Form.Control
              as="textarea"
              rows={3}
              value={blogContent}
              onChange={(e) => setBlogContent(e.target.value)}
            />
          </Form.Group>
          <Modal.Footer>
            <Button variant="secondary" onClick={onClose}>
              Close
            </Button>
            <Button variant="primary" type="submit">
              Save Changes
            </Button>
          </Modal.Footer>
        </Form>
      </Modal>
    </>
  );
}
