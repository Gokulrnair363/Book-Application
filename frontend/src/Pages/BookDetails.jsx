import { useEffect, useState, useContext } from "react";
import { useParams } from "react-router-dom";
import Container from "react-bootstrap/Container";
import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
import Form from "react-bootstrap/Form";
import { AuthContext } from "../Context/AuthContext";
import { getBookByIdAPI, addReviewAPI } from "../Services/allAPI";
import Header from "../Components/Header";
import Footer from "../Components/Footer";

const BookDetails = () => {
  const { id } = useParams();
  const { user } = useContext(AuthContext);

  const [book, setBook] = useState(null);
  const [showModal, setShowModal] = useState(false);
  const [form, setForm] = useState({ review: "", rating: 1 });

  const fetchBook = async () => {
    const res = await getBookByIdAPI(id);
    if (res.status === 200) setBook(res.data);
  };

  useEffect(() => {
        console.log("AuthContext user:", user);
    console.log("LocalStorage user:", localStorage.getItem("user"));
    fetchBook();
  }, [id]);

  const handleChange = (e) => setForm({ ...form, [e.target.name]: e.target.value });

  const handleSubmit = async (e) => {
    e.preventDefault();
    const token = localStorage.getItem("token");
    const headers = { Authorization: `Bearer ${token}`, "Content-Type": "application/json" };

    const res = await addReviewAPI(id, form, headers);
    if (res.status === 201) {
      alert("Review added successfully!");
      setForm({ review: "", rating: 1 });
      fetchBook();
      setShowModal(false);
    } else {
      alert(res.data?.message || "Failed to add review");
    }
  };

  if (!book) return <p>Loading...</p>;
console.log(user);

  return (
    <>
    <Header inside/>
    <Container className="mt-4">
     
      <Card className="mb-3 mx-auto" style={{ width: "100%", maxWidth: "400px" }}>
  {book.coverUrl && (
    <Card.Img
      variant="top"
      src={book.coverUrl}
      alt={book.title}
      style={{ height: "250px", objectFit: "cover" }}
    />
  )}
  <Card.Body style={{ maxHeight: "200px", overflowY: "auto" }}>
    <Card.Title>
      Title: <i className="text-primary">{book.title}</i>
    </Card.Title>
    <Card.Subtitle className="mb-1">
      Author: <i className="text-primary">{book.author}</i>
    </Card.Subtitle>
    <Card.Text>
      Description: <i className="text-primary">{book.description}</i>
    </Card.Text>
  </Card.Body>
</Card>
      <div className="d-flex justify-content-between align-items-center mb-2">
        <h4>Reviews</h4>
       
          <Button variant="info" onClick={() => setShowModal(true)}>
            Add Review
          </Button>
       
      </div>

   
      {book.reviews && book.reviews.length > 0 ? (
        book.reviews.map((rev) => (
          <Card key={rev._id} className="mb-2 p-2">
            <Card.Text><strong className="text-primary">{rev.name}</strong>: <i className="text-dark">{rev.review}</i></Card.Text>
            <Card.Text>Rating: <i className="text-primary">{rev.rating} </i>/ 5</Card.Text>
          </Card>
        ))
      ) : (
        <p>No reviews yet.</p>
      )}

   
      <Modal show={showModal} onHide={() => setShowModal(false)} size="md" centered backdrop="static">
        <Modal.Header closeButton>
          <Modal.Title>Add Your Review</Modal.Title>
        </Modal.Header>
        <Modal.Body style={{ padding: "1.5rem" }}>
          <Form onSubmit={handleSubmit}>
            <Form.Control
              as="textarea"
              placeholder="Write your review..."
              className="mb-2"
              name="review"
              value={form.review}
              onChange={handleChange}
              required
            />
            <Form.Label>Rating:</Form.Label>
            <Form.Control
              type="number"
              name="rating"
              min={1}
              max={5}
              value={form.rating}
              onChange={handleChange}
              className="mb-2"
              required
            />
            <Button type="submit" variant="success" className="w-100">
              Submit Review
            </Button>
          </Form>
        </Modal.Body>
      </Modal>
    </Container>
 <Footer/>
  </>
   );
};

export default BookDetails;
