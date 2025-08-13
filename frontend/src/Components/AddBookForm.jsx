import { useState } from "react";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import { addBookAPI } from "../Services/allAPI";

const AddBookForm = ({ onBookAdded }) => {
  const [form, setForm] = useState({
    title: "",
    author: "",
    description: "",
    coverUrl: "",
  });

  const handleChange = (e) =>
    setForm({ ...form, [e.target.name]: e.target.value });

  const handleSubmit = async (e) => {
    e.preventDefault();

    const token = localStorage.getItem("token");
    const headers = { Authorization: `Bearer ${token}`, "Content-Type": "application/json" };

    const res = await addBookAPI(form, headers);
    if (res.status === 201) {
      alert("Book added successfully!");
      onBookAdded();
      setForm({ title: "", author: "", description: "", coverUrl: "" });
    } else {
      alert(res.data?.message || "Failed to add book");
    }
  };

  return (
    <Form onSubmit={handleSubmit}>
      <Form.Control
        name="title"
        placeholder="Title"
        className="mb-2"
        value={form.title}
        onChange={handleChange}
        required
      />
      <Form.Control
        name="author"
        placeholder="Author"
        className="mb-2"
        value={form.author}
        onChange={handleChange}
        required
      />
      <Form.Control
        name="coverUrl"
        placeholder="Cover URL"
        className="mb-2"
        value={form.coverUrl}
        onChange={handleChange}
        required
      />
      <Form.Control
        as="textarea"
        name="description"
        placeholder="Description"
        className="mb-2"
        value={form.description}
        onChange={handleChange}
        required
      />
      <Button type="submit" variant="success" className="w-100">
        Add Book
      </Button>
    </Form>
  );
};

export default AddBookForm;
