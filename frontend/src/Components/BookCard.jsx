import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";
import { Link } from "react-router-dom";

const BookCard = ({ book }) => {


  return (
    <Card style={{ width: "18rem" }} className="mb-3">
  <Card.Img variant="top" src={book.coverUrl || "placeholder.jpg"} alt={book.title} />
  <Card.Body>
    <Card.Title>Title: {book.title}</Card.Title>
    <Card.Text>Author: {book.author}</Card.Text>
    <Card.Text>
      Description: {book.description || "No description available"}
    </Card.Text>
    <Link to={`/books/${book._id}`}>
      <Button variant="primary">View Details</Button>
    </Link>
  </Card.Body>
</Card>

  );
};

export default BookCard;
