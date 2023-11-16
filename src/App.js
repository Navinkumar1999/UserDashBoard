import React, { useState, useEffect } from "react";
import "./styles.css";

const userData = [
  {
    id: 1,
    username: "Navin",
    email: "navin@example.com",
    phone: "123-456-7890",
    creationDate: "2023-01-10"
  },
  {
    id: 2,
    username: "Kumar",
    email: "kumar@example.com",
    phone: "987-654-3210",
    creationDate: "2023-02-25"
  },
  {
    id: 3,
    username: "Pravin",
    email: "pravin@example.com",
    phone: "987-654-3210",
    creationDate: "2023-02-20"
  },
  {
    id: 4,
    username: "Pavan",
    email: "pavan@example.com",
    phone: "987-654-3210",
    creationDate: "2023-03-17"
  },
  {
    id: 5,
    username: "Rahul",
    email: "Rahul@example.com",
    phone: "987-654-3210",
    creationDate: "2023-04-15"
  },
  {
    id: 6,
    username: "Sagar",
    email: "sagar@example.com",
    phone: "987-654-3210",
    creationDate: "2023-05-01"
  },
  {
    id: 7,
    username: "Rohit",
    email: "rohit@example.com",
    phone: "987-654-3210",
    creationDate: "2023-05-29"
  },
  {
    id: 8,
    username: "Akshay",
    email: "akshay@example.com",
    phone: "987-654-3210",
    creationDate: "2023-06-04"
  },
  {
    id: 9,
    username: "Shree",
    email: "shree@example.com",
    phone: "987-654-3210",
    creationDate: "2023-07-11"
  },
  {
    id: 10,
    username: "Ramesh",
    email: "ramesh@example.com",
    phone: "987-654-3210",
    creationDate: "2023-11-16"
  }
];

const UserDetails = () => {
  const [searchUser, setSearchUser] = useState("");
  const [selectedUser, setSelectedUser] = useState(null);

  const filteredUsers = userData.filter((user) =>
    user.username.toLowerCase().includes(searchUser.toLowerCase())
  );

  const userClick = (user) => {
    setSelectedUser(user);
  };

  const closeDetail = () => {
    setSelectedUser(null);
  };

  return (
    <div className="userdetails">
      <input
        type="text"
        placeholder="Search by username"
        value={searchUser}
        onChange={(e) => setSearchUser(e.target.value)}
      />

      <table border="3px" className="user-table">
        <thead>
          <tr>
            <th>Username</th>
            <th>Email</th>
            <th>Phone</th>
            <th>ID</th>
            <th>Creation Date</th>
          </tr>
        </thead>
        <tbody>
          {filteredUsers.map((user) => (
            <tr key={user.id} onClick={() => userClick(user)}>
              <td>{user.username}</td>
              <td>{user.email}</td>
              <td>{user.phone}</td>
              <td>{user.id}</td>
              <td>{user.creationDate}</td>
            </tr>
          ))}
        </tbody>
      </table>

      {selectedUser && (
        <div>
          <h2>User Details</h2>
          <p>Username: {selectedUser.username}</p>
          <p>Email: {selectedUser.email}</p>
          <p>Phone: {selectedUser.phone}</p>
          <p>ID: {selectedUser.id}</p>
          <p>Creation Date: {selectedUser.creationDate}</p>
          <button onClick={closeDetail}>Close</button>
        </div>
      )}
    </div>
  );
};

const AccountCreation = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [errorMessage, setErrorMessage] = useState("");

  const formSubmit = (e) => {
    e.preventDefault();

    const trimmedUsername = username.trim();
    const trimmedPassword = password.trim();

    if (!trimmedUsername || !trimmedPassword) {
      setErrorMessage("Fill in both username and password fields.");
      return;
    }

    console.log("Form submitted!", {
      username: trimmedUsername,
      password: trimmedPassword
    });
    alert("Form is submitted");

    setUsername("");
    setPassword("");
    setErrorMessage("");
  };

  return (
    <div className="account-creation">
      <form className="account-form" onSubmit={formSubmit}>
        <label>
          Username:
          <input
            type="text"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            required
          />
        </label>
        <label>
          Password:
          <input
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />
        </label>
        <button type="submit">Create Account</button>
      </form>

      {errorMessage && <p style={{ color: "red" }}>{errorMessage}</p>}
    </div>
  );
};
const Dashboard = () => {
  const [activeTab, setActiveTab] = useState("userDetails");
  const [users, setUsers] = useState([]);

  useEffect(() => {
    setUsers(userData);
  }, []);

  return (
    <div className="container">
      <div className="buttonscontainer">
        <button onClick={() => setActiveTab("userDetails")}>
          User Details
        </button>
        <button onClick={() => setActiveTab("accountCreation")}>
          Account Creation
        </button>
      </div>
      {activeTab === "userDetails" ? (
        <UserDetails users={users} />
      ) : (
        <AccountCreation />
      )}
    </div>
  );
};

const App = () => {
  return (
    <div style={{ textAlign: "center" }}>
      <h1>Dashboard</h1>
      <Dashboard />
    </div>
  );
};

export default App;
