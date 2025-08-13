import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import Container from "react-bootstrap/Container";
import Card from "react-bootstrap/Card";
import ReviewForm from "../Components/ReviewForm";
import { getBookByIdAPI } from "../Services/allAPI";

const BookDetails = () => {
  const { id } = useParams();
  const [book, setBook] = useState(null);

  const fetchBook = async () => {
    const res = await getBookByIdAPI(id);
    if (res.status === 200) setBook(res.data);
  };

  useEffect(() => {
    fetchBook();
  }, [id]);

  if (!book) return <p>Loading...</p>;

  return (
    <Container className="mt-4">
      <Card className="mb-4">
        <Card.Img variant="top" src={book.cover} alt={book.title} />
        <Card.Body>
          <Card.Title>{book.title}</Card.Title>
          <Card.Subtitle className="mb-2 text-muted">By {book.author}</Card.Subtitle>
          <Card.Text>{book.description}</Card.Text>
        </Card.Body>
      </Card>

      <h4>Reviews</h4>
      {book.reviews && book.reviews.length > 0 ? (
        book.reviews.map((rev) => (
          <Card key={rev._id} className="mb-2 p-2">
            <Card.Text>
              <strong>{rev.userName}</strong>: {rev.text}
            </Card.Text>
          </Card>
        ))
      ) : (
        <p>No reviews yet.</p>
      )}

      <ReviewForm bookId={id} onReviewAdded={fetchBook} />
    </Container>
  );
};

export default BookDetails;
