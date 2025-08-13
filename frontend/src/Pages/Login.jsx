import { useState, useContext } from "react";
import { AuthContext } from "../Context/AuthContext";
import { loginAPI } from "../Services/allAPI";
import { useNavigate, Link } from "react-router-dom";

const Login = () => {
  const { login } = useContext(AuthContext);
  const navigate = useNavigate();
  const [form, setForm] = useState({ email: "", password: "" });

  const handleChange = (e) => setForm({ ...form, [e.target.name]: e.target.value });

  const handleSubmit = async (e) => {
    e.preventDefault();
    const res = await loginAPI(form);
    if (res.status === 200) {
      login(res.data.user, res.data.token);
      navigate("/books");
    } else {
      alert(res.data.message || "Login failed");
    }
  };

  return (
    <div className="container mt-5">
      <h2>Login</h2>
      <form onSubmit={handleSubmit}>
        <input name="email" type="email" placeholder="Email" className="form-control mb-2" onChange={handleChange} required />
        <input name="password" type="password" placeholder="Password" className="form-control mb-2" onChange={handleChange} required />
        <button className="btn btn-primary">Login</button>
      </form>
      <p className="mt-2">Don't have an account? <Link to="/register">Register</Link></p>
    </div>
  );
};

export default Login;
