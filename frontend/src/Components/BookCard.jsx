import React from "react";
import { Card, Button } from "react-bootstrap";
import { Link } from "react-router-dom";

export default function BookCard({ book }) {
  return (
    <Card>
      <Card.Img variant="top" src={book.cover} />
      <Card.Body>
        <Card.Title>{book.title}</Card.Title>
        <Card.Text>By {book.author}</Card.Text>
        <Button as={Link} to={`/books/${book.id}`} variant="primary">View Details</Button>
      </Card.Body>
    </Card>
  );
}
