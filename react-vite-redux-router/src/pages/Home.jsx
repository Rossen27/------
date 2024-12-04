import React from "react";
import { Link } from "react-router-dom";

const Home = () => {
  return (
    <div>
      <h1>Home</h1>
      <ul>
        <li><Link to="/members">View Members</Link></li>
        <li><Link to="/add">Add Member</Link></li>
        <li><Link to="/exchange-records">View Exchange Records</Link></li>
      </ul>
    </div>
  );
};

export default Home;