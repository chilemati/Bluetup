import React from 'react'
import { Card, Col, Container, Row } from 'react-bootstrap'
import { Link } from 'react-router-dom'
import { dashbaordData } from './dashbaordData'

const Dashboard = () => {
  return (
    // <div className='dashboard'>
      <Container fluid className='dashboard'>
        <Row>
          <Col>
          <h1 className='text-center'>DASHBOARD</h1>
          </Col>
        </Row>
        <Row className='mt-5 mx-4'>
          <Col>
           <Card>
            <Card.Body>
             <div className="boxa box">
               <Card.Link href='/#all'> <Link to={'/all'}> {dashbaordData.row1.text1} </Link> </Card.Link>
               <Card.Link href='/#all'> <Link to={'/all'}>
                <span>{dashbaordData.row1.icon1}</span>
                <span>{dashbaordData.row1.text2}</span>
                </Link> </Card.Link>
             </div>
             <div className="boxb box text-start mt-3">
              <span>{dashbaordData.row1.total}</span>
              <span className='bg'>
                <span>{dashbaordData.row1.icon2}</span>
              </span>
             </div>
            </Card.Body>
           </Card>
          </Col>
          <Col>
           <Card>
            <Card.Body>
              card 2
            </Card.Body>
           </Card>
          </Col>
          <Col>
           <Card>
            <Card.Body>
              card 3
            </Card.Body>
           </Card>
          </Col>

        </Row>

      </Container>
    // </div>
  )
}

export default Dashboard