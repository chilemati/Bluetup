import React from 'react'
import { Card, Col, Container, Form, Row } from 'react-bootstrap'
import { Link } from 'react-router-dom'
import { svgs } from '../nav/svgIcons'
import { dashbaordData } from './dashbaordData'
import SelectIcon from './SelectIcon'
import './dashboard.scss';
const Dashboard = () => {

  return (
    // <div className='dashboard'>
      <Container fluid className='dashboard justify-content-center align-content-center'>
        <Row>
          <Col className='dash-top'>
          <h1 className='text-center'>DASHBOARD</h1>
          </Col>
        </Row>
        <Row className='mt-4 mx-4'>
          {
            dashbaordData.row1.map((card,i)=> {
              return (
                <Col xs={12}  lg={4} className='g-3 cards' key={i} >
           <div style={{backgroundColor:card.card_bg,borderRadius:card.card_br,borderBottom:card.card_bb}}>
            <div>
             <div className="boxa card-box"> 
               <Link className='tcol' to={'/all'}> {card.text1} </Link>  
               <Link to={'/all'}>
                <span className='tcol'>{card.icon1}</span>
                <span className='tcol'>{card.text2}</span>
                </Link> 
             </div>
             <div className="boxb card-box text-start mt-3">
              <span className='total'>{card.total}</span>
              <span className='bg'style={{backgroundColor:card.icon_bg}} >
                <span>{card.icon2}</span>
              </span>
             </div>
            </div>
           </div>
          </Col>
              )
            })
          }
        </Row>
        <Row className='dash-last'>
          <Col xs={12} md={6} className='box a'>
            <div className='row1 row'>
              <div className="title col"> {dashbaordData.row2.boxa.title} </div>
              <div className="date col-sm-12 col-lg-6 g-2">
                 <SelectIcon />
              </div>
            </div>
            <div className="row2">
              <div className="boxa">
                <span style={{color:dashbaordData.row2.boxa.color}} > {dashbaordData.row2.boxa.icon1} </span>
                <span>{dashbaordData.row2.boxa.text}</span>
              </div>
              <div className="boxb">
                <span style={{color:dashbaordData.row2.boxb.color}}>{dashbaordData.row2.boxb.icon1}</span>
                <span>{dashbaordData.row2.boxb.text}</span>
              </div>
            </div>
            {/* <div className="last"> */}
            <div className='row3'>
              <div className="total">{dashbaordData.row2.boxa.total}</div>
              <div className="last-month">
                <span className="group">
                <span className="text">{dashbaordData.row2.boxa.text1}</span>
                <span className="price">{dashbaordData.row2.boxa.price}</span>
                </span>
                <span className="icon"> {svgs.arrow30} </span>
              </div>
              <div className="depo">
                <span className="icon"> {svgs.arrow30} </span>
                <span className="text">{dashbaordData.row2.boxa.text}</span>
              </div>
            </div>
            <div className='row4'>
            <div className="total">{dashbaordData.row2.boxb.total}</div>
              <div className="last-month">
                <span className='group'>
                <span className="text">{dashbaordData.row2.boxb.text1}</span>
                <span className="price">{dashbaordData.row2.boxb.price}</span>
                </span>
                <span className="icon"> {svgs.arrow120} </span>
              </div>
              <div className="depo">
                <span className="icon"> {svgs.arrow120} </span>
                <span className="text">{dashbaordData.row2.boxb.text}</span>
              </div>
            </div>

            {/* </div> */}
          </Col>
          <Col xs={12} md={6} className='b box'>
            <div className="top row">
              <div className="text col">{dashbaordData.row3.title}</div>
              <div className="row2 col-sm-12 g-3 col-lg-6">
              <div className="boxa">
                <span style={{color:dashbaordData.row2.boxa.color}} > {dashbaordData.row2.boxa.icon1} </span>
                <span>{dashbaordData.row3.text1}</span>
              </div>
              <div className="boxb">
                <span style={{color:dashbaordData.row2.boxb.color}}>{dashbaordData.row2.boxb.icon1}</span>
                <span>{dashbaordData.row3.text2}</span>
              </div>
            </div>
            </div>
            <div className="chart">
              {/* {svgs.liveBarchart}  */}
              <div className="livechart"></div>

            </div>
          </Col>
        </Row>

      </Container>
    // </div>
  )
}

export default Dashboard