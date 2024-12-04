import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchMembers } from "../features/memberSlice";

const MemberList = () => {
  const dispatch = useDispatch();
  const { members, status, error } = useSelector((state) => state.member);

  const urlParams = new URLSearchParams(window.location.search);
  const f = urlParams.get("f") === "true"; // 從 URL 獲取 f

  useEffect(() => {
    dispatch(fetchMembers());
  }, [dispatch]);

  if (status === "loading") return <p>Loading...</p>;
  if (status === "failed") return <p>Error: {error}</p>;

  return (
    <div>
      <h1>Member List</h1>
      <ul>
        {members.map((member) => (
          <li key={member.id}>
            {member.level_name} - {f ? `${member.commission_rate}%` : "Hidden"}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default MemberList;