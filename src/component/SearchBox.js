import React from 'react'
import { Row, Col, Form, Button } from 'react-bootstrap'
import { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'

const SearchBox = () => {
  let [keyword, setKeyword] = useState("")
  let dispatch = useDispatch();
  let { contact } = useSelector((state) => state);
    const searchByName = (event) => {
      event.preventDefault();
      dispatch({type: "SEARCH_BY_USERNAME", payload: { keyword }});
    }

  return ( // lg를 통해 각각 비율 설정으로 너비 설정 가눙
  <Form onSubmit={searchByName} className='search-form'>
    <Row>
        <Col lg ={9}>
            <Form.Control 
              type="text" 
              placeholder="이름을 입력해주세요. "
              onChange={(event) => setKeyword(event.target.value)} />
        </Col>
        <Col lg={3}>
            <Button type='submit'>찾기</Button>
        </Col>
    </Row>
  </Form>
  )
}

export default SearchBox
