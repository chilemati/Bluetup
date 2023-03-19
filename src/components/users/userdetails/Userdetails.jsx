import React from 'react'
import { Col, Container, Form, Row } from 'react-bootstrap'
import { svgs } from '../../nav/svgIcons';
import './userdetails.scss';
const Userdetails = ({setDetails}) => {
  return (
    <Container fluid className='userdetails'>
      <Row>
        <Col className='row1'>
          <h1>User Details</h1>
        </Col>
      </Row>
      <Row>
        <Col className="row2">
          <h1 onClick={(e)=> setDetails(false)} >Back</h1>
        </Col>
      </Row>
      <Row>
        <Col className="row33">
          <div className="box1 mycard">
            <div className="img"> <span>User Image</span> </div>
            <p className='middle'> <span className="name">Godwin</span>
              <span className="country"> Nigeria </span> </p>
            <p className='last'> <span className="gray">Joined At</span>
              <span className="time">02 Aug, 2022 03:38 AM</span> </p>
          </div>
          <div className="box2">
            <div className="deposite same">
              <div className="text">
              <p className="price">₦ 50,000.00</p>
              <p className="total">Total Deposited</p>
              </div>
            </div>
            <div className="witdrawal same">
              <div className="text">
              <p className="price">₦ 50,000.00</p>
              <p className="total">Total Witdrawn</p>
              </div>
            </div>
            <div className="invested same">
              <div className="text">
              <p className="price">₦ 50,000.00</p>
              <p className="total">Total Invested</p>
              </div>
            </div>
            <div className="saving same">
              <div className="text">
              <p className="price">₦ 50,000.00</p>
              <p className="total">Saving Chalange</p>
              </div>
            </div>
            <div className="wallet same">
              <div className="text">
              <p className="price">₦ 50,000.00</p>
              <p className="total">Wallet Balance</p>
              </div>
            </div>
            <div className="blue same">
              <div className="text">
              <p className="price">₦ 50,000.00</p>
              <p className="total">Blue Vault</p>
              </div>
            </div>
            <div className="flexy same">
              <div className="text">
              <p className="price">₦ 50,000.00</p>
              <p className="total">Flexy Naira</p>
              </div>
            </div>
            <div className="tup same">
              <div className="text">
              <p className="price">₦ 50,000.00</p>
              <p className="total">Tup Dollar</p>
              </div>
            </div>
          </div>
        </Col>
      </Row>
      <Row>
        <Col className="row44">
          <div className="box1">
            <div className="info same1">
              <h3 className='title'>User Information</h3>
              <div className="infos">
                <div className="id">
                  <span className="uid">User ID</span>
                  <span className="did">ID 123456789</span> </div>
                <div className="status">
                  <div className="st">
                    <span className="at">Status</span>
                    <span className="us">Active</span>
                  </div>
                </div>
              </div>
            </div>
            <div className="bal same1">
              <h3 className='title'>User Balance</h3>
              <div className="total">
                <span className="to">Total Bal.</span>
                <span className="tal">₦ 50,000.00</span>
              </div>
              <div className="add"> <button className="ad">Add Balance</button> </div>
              <div className="subtract"> <button className="sub">Substract Balance</button> </div>
            </div>
            <div className="login same1">
              <h3 className='title'>User Logins</h3>
              <div className="last">
                <span className="la">User Iast Login</span>
                <span className="st">24th Feb 2022</span>
              </div>
            </div>
          </div>
          <div className="box22 same22">
            <div className="title">Information of godwin from Nigeria</div>
            <div className="hr"></div>
            <Form className='forms'>
              <div className="form-row1">
                <div className="cell1">
                 <label htmlFor="firstName">First Name <span className='star'>*</span> </label>
                 <input type="text" name="firstName" id="firstName" value='godwin' /> 
                </div>
                <div className="cell2">
                 <label htmlFor="lastName">Last Name <span className='star'>*</span> </label>
                 <input type="text" name="lastName" id="lastName" value='Ojeiwa' /> 
                </div>
              </div>
              <div className="form-row1">
                <div className="cell1">
                 <label htmlFor="email">Email <span className='star'>*</span> </label>
                 <input type="text" name="email" id="email" value='godwin.ojeiwa@gmail.com' /> 
                </div>
                <div className="cell2">
                 <label htmlFor="phoneNumber">Phone Number <span className='star'>*</span> </label>
                 <input type="text" name="phoneNumber" id="phoneNumber" value='23407058882017' /> 
                </div>
              </div>
              <div className="form-row2">
                <div className="cell1">
                 <label htmlFor="country">Country  </label>
                 <input type="text" name="country" id="country" value='Nigeria' /> 
                </div>
                <div className="cell2">
                 <label htmlFor="city">City </label>
                 <input type="text" name="city" id="city" value='Port Harcourt' /> 
                </div>
              </div>
              <div className="form-row3">
                <div className="cell1">
                  <label htmlFor="address">Adress </label>
                 <input type="text" name="address" id="address" value='godwin.ojeiwa@gmail.com' />
                </div>
              </div>

              <div className="form-row4">
                <div className="kyc">
                  <label htmlFor="kyc">KYC Verification</label>
                    <button onClick={e=> e.preventDefault(e)}>Pending</button>
                </div>
                <div className="details">
                  <span className="det"></span>
                  <span className="ails">Details</span>
                </div>
              </div>
              <div className="form-row5">
                <div className="emailveri">
                  <label htmlFor="emailveri">KYC Verification</label>
                    <button onClick={e=> e.preventDefault(e)} >Unverified</button>
                </div>
                <div className="save">
                  <label htmlFor="save">&nbsp;</label>
                  <button onClick={e=> e.preventDefault(e)}>Save Changes</button>
                </div>
              </div>
             

            </Form>
          </div>
        </Col>
      </Row>
    </Container>
  )
}

export default Userdetails