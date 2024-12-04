import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { addMember, fetchMembers } from "../features/memberSlice";

const AddMember = () => {
  const dispatch = useDispatch();
  const [formData, setFormData] = useState({ level_name: "", commission_rate: 0 });

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(addMember(formData)); // 發送新增請求
    setFormData({ level_name: "", commission_rate: 0 }); // 重置表單
    dispatch(fetchMembers()); // 刷新列表
  };

  return (
    <form onSubmit={handleSubmit}>
      <h2>Add Member</h2>
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
      <button type="submit">Add</button>
    </form>
  );
};

export default AddMember;