import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";
import { Link } from "react-router-dom";

const BookCard = ({ book }) => {


  return (
    <Card style={{ width: "18rem" }} className="mb-3">
  <Card.Img style={{ maxHeight: "170px", overflowY: "auto" }} variant="top" src={book.coverUrl || "placeholder.jpg"} alt={book.title} />
  <Card.Body>
    <Card.Title>Title: {book.title}</Card.Title>
    <Link to={`/books/${book._id}`}>
      <Button variant="primary">View Details</Button>
    </Link>
  </Card.Body>
</Card>

  );
};

export default BookCard;
