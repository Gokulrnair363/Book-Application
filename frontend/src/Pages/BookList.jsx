import { useEffect, useState } from "react";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
import BookCard from "../Components/BookCard";
import AddBookForm from "../Components/AddBookForm";
import { getAllBooksAPI } from "../Services/allAPI";
import Header from "../Components/Header";
import Footer from "../Components/Footer";

const BookList = () => {
  const [books, setBooks] = useState([]);
  const [showModal, setShowModal] = useState(false);

  const fetchBooks = async () => {
    const res = await getAllBooksAPI();
    if (res.status === 200) {
      setBooks(
        res.data.sort((a, b) => new Date(b.createdAt) - new Date(a.createdAt))
      );
    }
    console.log(res.data);

  };

  useEffect(() => {
    fetchBooks();
  }, []);

  return (
    <>
    <Header inside/>
     <Container className="mt-4">
      <div className="d-flex justify-content-between align-items-center">
        <h2>All Books</h2>

        <Button variant="primary" onClick={() => setShowModal(true)}>
          + Add New Book
        </Button>
      </div>

      <Modal show={showModal} onHide={() => setShowModal(false)}>
        <Modal.Header closeButton>
          <Modal.Title>Add a New Book</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <AddBookForm
            onBookAdded={() => {
              fetchBooks();
              setShowModal(false);
            }}
          />
        </Modal.Body>
      </Modal>

      <Row className="mt-3">
        {books.map((book) => (
          <Col key={book._id} sm={12} md={6} lg={4} xl={3}>
            <BookCard book={book} />
          </Col>
        ))}
      </Row>
    </Container>
    <Footer/>
    </>
   
  );
};

export default BookList;
