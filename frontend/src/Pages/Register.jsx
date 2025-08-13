import { useState } from "react";
import { registerAPI } from "../Services/allAPI";
import { useNavigate, Link } from "react-router-dom";

const Register = () => {
  const navigate = useNavigate();
  const [form, setForm] = useState({ name: "", email: "", password: "" });

  const handleChange = (e) => setForm({ ...form, [e.target.name]: e.target.value });

  const handleSubmit = async (e) => {
    e.preventDefault();
    const res = await registerAPI(form);
    if (res.status === 201) {
      alert("Registered successfully!");
      navigate("/login");
    } else {
      alert(res.data.message || "Registration failed");
    }
  };

  return (
    <div className="container mt-5">
      <h2>Register</h2>
      <form onSubmit={handleSubmit}>
        <input name="name" type="text" placeholder="Name" className="form-control mb-2" onChange={handleChange} required />
        <input name="email" type="email" placeholder="Email" className="form-control mb-2" onChange={handleChange} required />
        <input name="password" type="password" placeholder="Password" className="form-control mb-2" onChange={handleChange} required />
        <button className="btn btn-success">Register</button>
      </form>
      <p className="mt-2">Already have an account? <Link to="/login">Login</Link></p>
    </div>
  );
};

export default Register;
