import { useState, useContext } from "react";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import { AuthContext } from "../Context/AuthContext";
import { addReviewAPI } from "../Services/allAPI";

const ReviewForm = ({ bookId, onReviewAdded }) => {
  const { user } = useContext(AuthContext);
  const [review, setReview] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    const token = localStorage.getItem("token");
    const headers = { Authorization: `Bearer ${token}`, "Content-Type": "application/json" };
    const res = await addReviewAPI(bookId, { text: review }, headers);
    if (res.status === 201) {
      alert("Review added!");
      onReviewAdded();
      setReview("");
    } else {
      alert(res.data.message || "Failed to add review");
    }
  };

  if (!user) return null;

  return (
    <Form onSubmit={handleSubmit} className="mt-3 mb-3">
      <Form.Control
        as="textarea"
        placeholder="Write your review..."
        className="mb-2"
        value={review}
        onChange={(e) => setReview(e.target.value)}
        required
      />
      <Button type="submit" variant="primary">Add Review</Button>
    </Form>
  );
};

export default ReviewForm;
