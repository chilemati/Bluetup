import React from 'react'
import { Col, Container, Row } from 'react-bootstrap'
import './veriDetails.scss';

const VeriDetails = ({ setDetails, info }) => {
  return (
    <Container fluid className='veriDetails'>
      <Row>
        <Col className="row1">
          <h1>USERS KYC UPLOAD DETAILS</h1>
        </Col>
      </Row>
      <Row>
        <Col className="row2">
          <button onClick={(e)=> setDetails(false) } >Back</button>
        </Col>
      </Row>
      <Row>
        <Col className="row3">
          <form onSubmit={(e)=> e.preventDefault(e)}>
          <div className="box1">
            <div className="line1">
                <h3>User information</h3>
                <div className="cell">
                  <label htmlFor="address">Address</label>
                  <input type="text" name="address" id="address" value={'123 gang road aboniky estate'} />
                </div>
                <div className="cell">
                  <label htmlFor="country">Country</label>
                  <input type="text" name="country" id="country" value={'Nigeria'} />
                </div>
                <div className="cell">
                  <label htmlFor="state">State of Origin</label>
                  <input type="text" name="state" id="state" value={'Rivers State'} />
                </div>
                <div className="cell">
                  <label htmlFor="city">City</label>
                  <input type="text" name="city" id="city" value={'Port Harcourt'} />
                </div>
            </div>
          </div>
            <div className="box2">
              <h3>User uploads</h3>
              <h6><span>Document Type:</span> International Passport</h6>
              <div className="cell">
                <div className="img"><span>UPLOADED IMAGE</span></div>
                <div className="btns">
                  <button className='download'>Download</button>
                  <span>or</span>
                  <button className='view'>View</button>
                </div>
              </div>
          </div>
            <div className="box3">
              <div className="cell">
                <span className="last">User Last Login ip: </span>
                <span className="end">123.234.456</span>
              </div>
              <div className="cell">
                <span className="last">User Last Login country:  </span>
                <span className="end">Nigeria</span>
              </div>
              <div className="btns">
                <button className='accept'>Accept</button>
                <button className='reject'>Reject</button>
              </div>
          </div>
            <div className="box4">
              <h3>Reason for rejection of document<span>*</span></h3>
              <div className="text">
                <p>Lorem ipsum dolor sit amet consectetur. Urna habitasse 
                    sed ut neque tortor. Mauris ornare amet placerat non 
                    et amet amet integer vitae. Felis mauris neque enim 
                    tortor diam massa purus egestas volutpat. Pretium 
                    vel mauris est nulla pellentesque semper mollis at. 
                    Ullamcorper vivamus mattis metus.
                </p>
              </div>
          </div>
          </form>
        </Col>
      </Row>
      
      </Container>
  )
}

export default VeriDetails