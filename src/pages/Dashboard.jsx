import React, { useState } from "react";

function Dashboard() {
  const [customers, setCustomers] = useState([]);
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");

  const addCustomer = (e) => {
    e.preventDefault();

    if (!name || !email) {
      alert("Please fill all fields");
      return;
    }

    setCustomers([
      ...customers,
      { id: Date.now(), name, email }
    ]);

    setName("");
    setEmail("");
  };

  const deleteCustomer = (id) => {
    setCustomers(customers.filter((c) => c.id !== id));
  };

  return (
    <div className="dashboard-container">
      <div className="dashboard-card">
        <h2>CRM Dashboard</h2>

        <form onSubmit={addCustomer}>
          <input
            type="text"
            placeholder="Customer Name"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />

          <input
            type="email"
            placeholder="Customer Email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />

          <button type="submit">Add Customer</button>
        </form>

        <ul>
          {customers.map((c) => (
            <li key={c.id}>
              <span>
                <strong>{c.name}</strong><br />
                <small>{c.email}</small>
              </span>
              <button onClick={() => deleteCustomer(c.id)}>❌</button>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}

export default Dashboard;
