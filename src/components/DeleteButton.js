import React, { useState } from "react";
import Card from "react-bootstrap/Card";
import { MyForm  } from "./SubRealEstate";

export const ResetButton = ({ handleReset }) => {
  return (
    <button onClick={handleReset}>
      RESET
    </button>
  );
};

export const GroupMembersCard1 = ({group, actions}) => {
    const [title, setTitle] = useState('');
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
    
    const handleReset = () => {
      // Reset giá trị của formData và tableData về giá trị ban đầu
      setFormData({ id: "", name: "", type: "" });
      setTableData([]);
    };

    return (
        <Card>
            <Card.Header>
                <Card.Title>
                    <h1>REAL ESTATE APPLICATION</h1>
                    <input type = "text" value={title} onChange={e => setTitle(e.target.value)} />
                </Card.Title>
            </Card.Header>
            <Card.Body>
                <MyForm
                  formData={formData}
                  tableData={tableData}
                  handleChange={handleChange}
                  handleAddData={handleAddData}
                />
                <ResetButton handleReset={handleReset} />
            </Card.Body>
        </Card>
    )
}
