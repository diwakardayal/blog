/** @format */

import { useState } from "react";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
import Form from "react-bootstrap/Form";
import { createPost, deletePost } from "../services/blog";
import { toast } from "react-toastify";
import { useBlog } from "../hooks";
import { useNavigate } from "react-router-dom";

// eslint-disable-next-line react/prop-types
export default function DeletePostConfirmationModal({
  isModalVisible,
  onClose,
  postId,
}) {
  if (!isModalVisible) return null;

  // eslint-disable-next-line react-hooks/rules-of-hooks
  const { getBlogs } = useBlog();

  // eslint-disable-next-line react-hooks/rules-of-hooks
  const navigate = useNavigate();

  async function handlerDeletePost() {
    const res = await toast.promise(deletePost({ postId }), {
      pending: "Processing…",
      success: "Post Deleted",
      error: "Failed to delete Post",
    });

    if (res) {
      onClose();
      getBlogs();
    }

    navigate("/admin");
  }

  return (
    <>
      <Modal show={isModalVisible} onHide={onClose}>
        <Modal.Header closeButton>
          <Modal.Title>Are You sure?</Modal.Title>
        </Modal.Header>

        <Modal.Footer>
          <Button variant="secondary" onClick={onClose}>
            Close
          </Button>
          <Button variant="primary" onClick={handlerDeletePost}>
            Delete Post
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
}
