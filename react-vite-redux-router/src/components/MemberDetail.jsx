import React, { useEffect, useState } from "react";
import { getMemberLevel } from "../api/memberApi";

const MemberDetail = ({ memberId }) => {
  const [member, setMember] = useState(null);

  useEffect(() => {
    const fetchMember = async () => {
      const response = await getMemberLevel(memberId);
      setMember(response.data);
    };
    fetchMember();
  }, [memberId]);

  if (!member) return <p>Loading member details...</p>;

  return (
    <div>
      <h2>Member Details</h2>
      <p>Level Name: {member.level_name}</p>
      <p>Commission Rate: {member.commission_rate}%</p>
    </div>
  );
};

export default MemberDetail;