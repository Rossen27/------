import React from "react";
import { useParams } from "react-router-dom";
import UpdateMember from "../components/UpdateMember";

const UpdatePage = () => {
  const { id } = useParams();

  return (
    <div>
      <h1>Update Member</h1>
      <UpdateMember memberId={id} />
    </div>
  );
};

export default UpdatePage;