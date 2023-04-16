import React, { useState, useEffect } from "react";
import Card from "react-bootstrap/Card";
import { MyForm  } from "./SubRealEstate";
import { ResetButton } from "./DeleteButton"

export const GroupMembersCard = ({group, actions}) => {
    const [title, setTitle] = useState('');

    useEffect(() => {
        setTitle(title);
    }, [title]);
    
    return (
        <Card>
            <Card.Header>
                <Card.Title>
                    <h1>REAL ESTATE APPLICATION</h1>
                    <input type = "text" value={title} onChange={e => setTitle(e.target.value)} />
                    <ResetButton/>
                </Card.Title>
            </Card.Header>
            <Card.Body>
                <MyForm/>
            </Card.Body>
        </Card>
    )
}
