import { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

export default function Login() {
  const navigate = useNavigate();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  const login = async () => {
    try {
      const res = await axios.post("http://localhost:5000/login", {
        email,
        password
      });

      localStorage.setItem("token", res.data.token);
      navigate("/admin");
    } catch {
      setError("Invalid credentials");
    }
  };

  return (
    <div style={{
      minHeight: "100vh",
      display: "flex",
      justifyContent: "center",
      alignItems: "center"
    }}>

      <div style={{
        background: "rgba(255,255,255,.08)",
        padding: 40,
        borderRadius: 18,
        width: 340,
        backdropFilter: "blur(15px)"
      }}>

        <h2 style={{ marginBottom: 20 }}>Admin Login</h2>

        <input
          placeholder="Email"
          value={email}
          onChange={e => setEmail(e.target.value)}
          style={input}
        />

        <input
          type="password"
          placeholder="Password"
          value={password}
          onChange={e => setPassword(e.target.value)}
          style={input}
        />

        {error && <p style={{ color: "tomato" }}>{error}</p>}

        <button onClick={login} style={btn}>
          Login
        </button>

      </div>
    </div>
  );
}

const input = {
  width: "100%",
  padding: 12,
  marginBottom: 12,
  borderRadius: 10,
  border: "none"
};

const btn = {
  width: "100%",
  padding: 12,
  borderRadius: 10,
  border: "none",
  background: "linear-gradient(135deg,#3b82f6,#9333ea)",
  color: "white",
  fontWeight: 600,
  cursor: "pointer"
};
