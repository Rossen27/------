import React, { useEffect, useState } from "react";
import { fetchExchangeRecords } from "../features/memberSlice";

const ExchangeRecords = ({ queryParams }) => {
  const [records, setRecords] = useState([]);

  useEffect(() => {
    const fetchRecords = async () => {
      const response = await fetchExchangeRecords(queryParams);
      setRecords(response.data);
    };
    fetchRecords();
  }, [queryParams]);

  return (
    <div>
      <h2>Exchange Records</h2>
      <ul>
        {records.map((record) => (
          <li key={record.id}>
            {record.member_id} - {record.amount}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default ExchangeRecords;