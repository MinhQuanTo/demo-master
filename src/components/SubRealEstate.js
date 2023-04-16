import React, { useState } from "react";

export const MyForm = () => {
  const [formData, setFormData] = useState({
    id: "",
    name: "",
    type: ""
  });
  const [tableData, setTableData] = useState([]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleAddData = () => {
    // Thêm thông tin từ formData vào mảng tableData
    setTableData([...tableData, formData]);
    // Reset formData về giá trị ban đầu
    setFormData({ id: "", name: "", type: "" });
  };

  return (
    <div>
      <div style={{ display: "flex", justifyContent: "center", gap: "100px" }}>
        <div>
          <label>
            ID:
            <input
              type="text"
              name="id"
              value={formData.id}
              onChange={handleChange}
            />
          </label>
        </div>
        <div>
          <label>
            Name:
            <input
              type="text"
              name="name"
              value={formData.name}
              onChange={handleChange}
            />
          </label>
        </div>
        <div>
          <label>
            Type:
            <input
              type="text"
              name="type"
              value={formData.type}
              onChange={handleChange}
            />
          </label>
        </div>
        <div>
          <button onClick={handleAddData}>ADD</button>
        </div>
      </div>
      <table style={{ margin: "20px auto" }}>
      <thead>
        <tr>
         <th style={{ paddingRight: "100px" }}>ID</th>
         <th style={{ paddingRight: "100px" }}>Name</th>
         <th style={{ paddingRight: "100px" }}>Type</th>
         </tr>
      </thead>

        <tbody>
          {tableData.map((data, index) => (
            <tr key={index}>
              <td style={{ paddingRight: "100px" }}>{data.id}</td>
              <td style={{ paddingRight: "100px" }}>{data.name}</td>
              <td style={{ paddingRight: "100px" }}>{data.type}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};
