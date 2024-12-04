import React from "react";
import { useDispatch } from "react-redux";
import { changeStatus } from "../features/memberSlice";

const ChangeStatus = ({ memberId, currentStatus }) => {
  const dispatch = useDispatch();

  const handleChangeStatus = () => {
    const newStatus = !currentStatus;
    dispatch(changeStatus({ id: memberId, status: newStatus }));
  };

  return (
    <div>
      <button onClick={handleChangeStatus}>
        {currentStatus ? "Deactivate" : "Activate"}
      </button>
    </div>
  );
};

export default ChangeStatus;