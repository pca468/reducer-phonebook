import React from 'react'
import { Col, Row } from 'react-bootstrap'

const ContactItem = ({item}) => {
  return (
    <Row>
      <Col lg={1}>
        <img 
        width={50}
        src="data:image/jpeg;base64,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"/>
      </Col>
      <Col lg={4}>
      <div>
        {item.name}
      </div>
      <div>
       {item.phoneNumber}
      </div>
      </Col>
    </Row>
  )
}

export default ContactItem
