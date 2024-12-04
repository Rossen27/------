import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { updateMember } from "../features/memberSlice";

const UpdateMember = ({ memberId, currentData }) => {
  const dispatch = useDispatch();
  const [formData, setFormData] = useState(currentData);

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(updateMember({ id: memberId, data: formData }));
  };

  return (
    <form onSubmit={handleSubmit}>
      <h2>Update Member</h2>
      <label>
        Level Name:
        <input
          type="text"
          value={formData.level_name}
          onChange={(e) => setFormData({ ...formData, level_name: e.target.value })}
          required
        />
      </label>
      <br />
      <label>
        Commission Rate:
        <input
          type="number"
          value={formData.commission_rate}
          onChange={(e) =>
            setFormData({ ...formData, commission_rate: parseFloat(e.target.value) })
          }
          required
        />
      </label>
      <br />
      <button type="submit">Update</button>
    </form>
  );
};

export default UpdateMember;