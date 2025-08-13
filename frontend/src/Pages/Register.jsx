import { useState } from "react";
import { useNavigate } from "react-router-dom";
import Container from "react-bootstrap/Container";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import { registerAPI } from "../Services/allAPI";
import Headersss from "../Components/Headersss";
const Register = () => {
  const navigate = useNavigate();
  const [form, setForm] = useState({ name: "", email: "", password: "" });

  const handleChange = (e) => setForm({ ...form, [e.target.name]: e.target.value });

const handleSubmit = async (e) => {
  e.preventDefault();
  try {
    const res = await registerAPI(form);
    if (res.success) {
      alert(res.data?.message || "Registration successful!");
      navigate("/login");
    } else {
      alert(res.data?.message || "Registration failed");
      console.error("Register error:", res);
    }
  } catch (error) {
    console.error("Unexpected error:", error);
    alert("Something went wrong. Check console.");
  }
};


  return (
    <>
    <Headersss />
    <Container className="mt-5 bg-primary rounded p-3" style={{ maxWidth: "400px" }}>
      <h2 className=" text-center text-danger mb-4"><i>Register</i></h2>
      <Form onSubmit={handleSubmit}>
        <Form.Group className="mb-3 text-dark ">
          <Form.Label>Name</Form.Label>
          <Form.Control type="text" name="name" value={form.name} onChange={handleChange} required />
        </Form.Group>
        <Form.Group className="mb-3 text-dark ">
          <Form.Label>Email</Form.Label>
          <Form.Control type="email" name="email" value={form.email} onChange={handleChange} required />
        </Form.Group>
        <Form.Group className="mb-3 text-dark ">
          <Form.Label>Password</Form.Label>
          <Form.Control type="password" name="password" value={form.password} onChange={handleChange} required />
        </Form.Group>
        <Button type="submit" variant="success">Register</Button>
        <Link to='/login' className="ms-5 text-dark">Already Have Account register Here</Link>
      </Form>
    </Container>
    </>
  );
};

export default Register;
