import axios from "axios";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

type Lead = {
  _id: string;
  email: string;
  message: string;
  starred: boolean;
  status: "new" | "contacted" | "closed";
  createdAt: string;
};

const API = "http://localhost:5000";

export default function Admin() {
  const nav = useNavigate();
  const token = localStorage.getItem("token");

  useEffect(() => {
    if (!token) nav("/login");
  }, []);

  const authHeader = {
    headers: { Authorization: `Bearer ${token}` }
  };

  const [leads, setLeads] = useState<Lead[]>([]);
  const [search, setSearch] = useState("");
  const [onlyStarred, setOnlyStarred] = useState(false);
  const [page, setPage] = useState(1);

  const perPage = 5;

  const fetchLeads = async () => {
    const res = await axios.get(`${API}/leads`, authHeader);
    setLeads(res.data);
  };

  useEffect(() => {
    fetchLeads();
  }, []);

  const deleteLead = async (id: string) => {
    await axios.delete(`${API}/leads/${id}`, authHeader);
    fetchLeads();
  };

  const toggleStar = async (l: Lead) => {
    await axios.put(`${API}/leads/${l._id}`, { starred: !l.starred }, authHeader);
    fetchLeads();
  };

  const setLeadStatus = async (l: Lead, s: string) => {
    await axios.put(`${API}/leads/${l._id}`, { status: s }, authHeader);
    fetchLeads();
  };

  const cycleStatus = (l: Lead) => {
    const order = ["new", "contacted", "closed"];
    const next = order[(order.indexOf(l.status) + 1) % order.length];
    setLeadStatus(l, next);
  };

  const filtered = leads.filter(l =>
    l.email.toLowerCase().includes(search.toLowerCase()) &&
    (!onlyStarred || l.starred)
  );

  const paginated = filtered.slice((page - 1) * perPage, page * perPage);

  return (
    <div style={{ padding: "60px 10%", color: "white" }}>

      <h1>Admin Dashboard</h1>

      <div style={{ display: "flex", gap: 30, margin: "20px 0" }}>
        <b>Total: {leads.length}</b>
        <b>Starred: {leads.filter(l => l.starred).length}</b>
      </div>

      <div style={{ display: "flex", gap: 12, marginBottom: 25 }}>
        <input
          placeholder="Search leads..."
          value={search}
          onChange={e => setSearch(e.target.value)}
          style={{ padding: 12, borderRadius: 10, flex: 1 }}
        />

        <button onClick={() => setOnlyStarred(!onlyStarred)}>⭐</button>

        <button onClick={() => exportCSV(filtered)}>Export</button>

        <button onClick={() => {
          localStorage.removeItem("token");
          nav("/login");
        }}>
          Logout
        </button>
      </div>

      {paginated.map(l => (
        <div key={l._id} className="lead-card">

          <div>
            <b>{l.email}</b>
            <p>{l.message}</p>

            <div
              className={`status-pill ${l.status}`}
              onClick={() => cycleStatus(l)}
            >
              {l.status.toUpperCase()}
            </div>
          </div>

          <div className="admin-actions">
            <button className="icon-btn star" onClick={() => toggleStar(l)}>⭐</button>
            <button className="icon-btn delete" onClick={() => deleteLead(l._id)}>🗑</button>
          </div>

        </div>
      ))}

      <div style={{ marginTop: 25 }}>
        {page > 1 && <button onClick={() => setPage(p => p - 1)}>Prev</button>}
        {page * perPage < filtered.length &&
          <button onClick={() => setPage(p => p + 1)}>Next</button>}
      </div>

    </div>
  );
}

function exportCSV(data: Lead[]) {
  const rows = data.map(l =>
    `${l.email},${l.message},${l.status}`
  ).join("\n");

  const blob = new Blob([rows], { type: "text/csv" });
  const url = window.URL.createObjectURL(blob);

  const a = document.createElement("a");
  a.href = url;
  a.download = "leads.csv";
  a.click();
}
