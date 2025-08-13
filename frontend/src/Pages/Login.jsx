import { useState, useContext } from "react";
import { Link, useNavigate } from "react-router-dom";
import Container from "react-bootstrap/Container";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import { loginAPI } from "../Services/allAPI";
import { AuthContext } from "../Context/AuthContext";
import Headersss from "../Components/Headersss";

const Login = () => {
  const { login } = useContext(AuthContext);
  const navigate = useNavigate();
  const [form, setForm] = useState({ email: "", password: "" });

  const handleChange = (e) => setForm({ ...form, [e.target.name]: e.target.value });

  const handleSubmit = async (e) => {
    e.preventDefault();
    const res = await loginAPI(form);
    if (res.status === 200) {
      login(res.data.token, res.data.user);
      navigate("/books");
    } else {
      alert(res.data.message || "Login failed");
    }
  };

  return (
    <>
    <Headersss/>
     <Container className="mt-5 bg-primary rounded p-4" style={{ maxWidth: "400px" }}>
      <h2 className="mb-4 text-center text-danger"><i>Login</i></h2>
      <Form onSubmit={handleSubmit}>
        <Form.Group className="mb-3 text-dark">
          <Form.Label>Email</Form.Label>
          <Form.Control type="email" name="email" value={form.email} onChange={handleChange} required />
        </Form.Group>
        <Form.Group className="mb-3 text-dark">
          <Form.Label>Password</Form.Label>
          <Form.Control type="password" name="password" value={form.password} onChange={handleChange} required />
        </Form.Group>
        <Button type="submit" variant="warning">Login</Button>
        <Link to='/register' className="ms-5 text-dark">Register Here</Link>
      </Form>
    </Container>
    </>
   
  );
};

export default Login;
