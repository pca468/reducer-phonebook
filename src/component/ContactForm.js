import React, { useState } from 'react';
import { Form, Button } from 'react-bootstrap';
import {  useDispatch } from 'react-redux';


function BasicExample() {
  const [name,setName] = useState(''); // event target으로 이름에 저장
  const [phoneNumber, setPhoneNumber] = useState(0); // event target으로 번호에 저장
  const dispatch = useDispatch();

  const addContact= (event) => { // form은 계속 reload를 하기 때문에 event로 막아준다.
    event.preventDefault();
    dispatch({type: "ADD_CONTACT", payload:{name, phoneNumber}})
    
    
  }
  
  return (
    <div>
      <Form onSubmit={addContact}>
        <Form.Group className="mb-3" controlId="formName">
            <Form.Label>Name</Form.Label>
            <Form.Control 
              type="text" 
              placeholder="이름을 입력해주세요." 
              onChange={(event) => setName(event.target.value)} /> 
        </Form.Group>

        <Form.Group className="mb-3" controlId="formContact">
            <Form.Label>Phone Number</Form.Label>
            <Form.Control 
              type="number" 
              placeholder="전화번호를 입력해주세요."
              onChange={(event) => setPhoneNumber(event.target.value)} />
        </Form.Group>
        <Button variant="primary" type="submit">
            추가
        </Button>
      </Form>
    </div>
  );
}

export default BasicExample;