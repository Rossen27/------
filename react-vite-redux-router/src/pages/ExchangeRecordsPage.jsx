import React, { useState } from "react";
import ExchangeRecords from "../components/ExchangeRecords";

const ExchangeRecordsPage = () => {
  const [queryParams, setQueryParams] = useState({});

  const handleSearch = (e) => {
    e.preventDefault();
    // 假設從表單中獲取查詢條件
    setQueryParams({
      memberId: e.target.memberId.value,
      startDate: e.target.startDate.value,
      endDate: e.target.endDate.value,
    });
  };

  return (
    <div>
      <h1>Exchange Records</h1>
      <form onSubmit={handleSearch}>
        <label>
          Member ID: <input type="text" name="memberId" />
        </label>
        <br />
        <label>
          Start Date: <input type="date" name="startDate" />
        </label>
        <br />
        <label>
          End Date: <input type="date" name="endDate" />
        </label>
        <br />
        <button type="submit">Search</button>
      </form>
      <ExchangeRecords queryParams={queryParams} />
    </div>
  );
};

export default ExchangeRecordsPage;