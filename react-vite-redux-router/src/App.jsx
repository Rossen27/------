import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { Provider } from "react-redux";
import { store } from "./store";
import Home from "./pages/Home";
import MemberPage from "./pages/MemberPage";
import AddPage from "./pages/AddPage";
import UpdatePage from "./pages/UpdatePage";
import ExchangeRecordsPage from "./pages/ExchangeRecordsPage";

const App = () => {
  return (
    <Provider store={store}>
      <Router>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/members" element={<MemberPage />} />
          <Route path="/add" element={<AddPage />} />
          <Route path="/update/:id" element={<UpdatePage />} />
          <Route path="/exchange-records" element={<ExchangeRecordsPage />} />
        </Routes>
      </Router>
    </Provider>
  );
};

export default App;