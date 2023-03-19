import { set } from 'date-fns';
import React, { useRef, useState } from 'react'
import { useEffect } from 'react';
import { Col, Container, Form, Row } from 'react-bootstrap'
import { svgs } from '../nav/svgIcons';
import './allusers.scss';
import { allUsersData } from './allUsersData';
import Datepicker from './Datepicker';
import FilterDiag from './FilterDiag';
import Advancefilterusers from './filterUsers/Advancefilterusers';
import FilterUsers from './filterUsers/FilterUsers';
import NumberSelectIcon from './NumberSelectIcon';
import ReactDatepickers from './ReactDatepicker';
import Userdetails from './userdetails/Userdetails';
import Usertable from './userTable/Usertable';
import VeriDetails from './VeriDetails/VeriDetails';
const All = () => {
  let [showDetails, setShowdetails] = useState(false);
  let [details, setDetails] = useState(false);
  let [info, setInfo] = useState(null);
  let [toggle, setToggle] = useState(false);
  let [show, setShow] = useState({
    start: 0,
    end: 10,
  });
  let [showing, setShowing] = useState(10);
  let [users, setUsers] = useState(allUsersData);
  
  let [more, setMore] = useState([
    { text: 1, style: { backgroundColor: '#172774', color: '#FFFFFF' }, id: 1 },
    { text: 2, style: { backgroundColor: '#FFFFFF', color: '#172774' }, id: 2 },
    { text: 3, style: { backgroundColor: '#FFFFFF', color: '#172774' }, id: 3 },
    
  ])
 
  const numOptions = [
  {
    label: '10',
    value: "10",
    selected: true
  },
  {
    label: "20",
    value: "20"
  },
  {
    label: "30",
    value: "30"
  }
];
  
  function handleShow(){
    setToggle(true);
  }

  
    function handleSearch(e) {
        if(e.key === 'Enter' || e.target.textContent === 'Search') {
          let inp = e.target.value || e.target.nextElementSibling.value;
          console.log(inp);

        }
  }

  function handleNext(prop) {
   
      setShow({
        start: (prop.text * showing) - showing,
        end:  prop.text * showing,
      });
  
    
    
    let upd = more.map((each, i) => {
      if (prop.id === i + 1) {
        each.style = { backgroundColor: '#172774', color: '#FFFFFF' };
      } else {
        each.style = { backgroundColor: '#FFFFFF', color: '#172774' };
      }
      return each;
    });
    // console.log(upd);
    setMore(upd);
  }

  function handleRight(e) {
      let upd = more.map((each, i) => {
        if (each.text >= 0 && each.text <= Math.ceil(allUsersData.length / showing)) {
          if (more[2].text !== Math.ceil(allUsersData.length / showing)) {
            if (Math.ceil(allUsersData.length / showing) > more[2].text) {
                each.text += 1; 
                
              }
            
          }
      }
      return each;
    });
    // console.log(upd);
    setMore(upd);
    }
  function handleLeft(e) {
      let upd = more.map((each, i) => {
        each.text = i + 1;
      return each;
    });
    // console.log(upd);
    setMore(upd);
    }

  function handleShowdetails(each) {
    console.log(each);
    setShowdetails(true);
    }

  return (
    <Container fluid>
        {
          !details && !toggle && 
      <div className="all-users">
    <Row className='row1'>
        <Col>
        <h1>Users</h1>
        </Col>
            </Row>
            <div className="parent">

      <Row className='row2'>
        <Col>
        <h2>All Users</h2>
        </Col>
      </Row>
      <Row className='row3'>
        <Col>
        <div className="numbers">
          <span>Showing</span>
            <NumberSelectIcon
              opt={numOptions}
              icon={svgs.dropdownDyn}
              setShowing={setShowing}
              showing={showing}
              setShow={setShow}
            />
          <span>Entries</span>

        </div>
        </Col>
        <Col>
          <div className="search-box">
          <label onClick={(e)=> handleSearch(e)} htmlFor="search">Search</label>
          <input type="text" name="search" id="search" onKeyUp={(e)=> handleSearch(e)} />

          </div>
        </Col>
        <Col>
          <div className="filter-users">
              <label htmlFor="filter">Filter Users</label>
                <div className="icon"></div>
              <input onClick={()=> handleShow()} type="text" name="filter" id="filter" placeholder='            Date' readOnly />
          </div>

        </Col>
              </Row>
              <Row>
                <Col>
                
                   <Usertable
                      header={[
                          { item: 'User', style: 'one' },
                          { item: 'User ID', style: 'two'},
                          { item: 'Total Balance', style: 'three' },
                          { item: 'Currency', style: 'four' },
                          { item: 'Phone Number', style: 'five'},
                          { item: <span>&nbsp;&nbsp;</span>, style: 'last'}
                         ]
                              }
                      array={allUsersData}
                    
                    toShow={
                        [
                    { item: 'userName', col: 1, icon:'first' },
                    { item: 'userId', col: 1, icon:'two' },
                    { item: 'totalBalance', col: 1, icon:'three' },
                    { item: 'currency', col: 1, icon:'four' },
                    { item: 'phoneNumber', col: 1, icon:'five' },
                    { item: 'Details', col: 2, icon:'last'}
                    
                    ]
                     }
                  showing={show}
                  setDetails={setDetails}
                    setInfo={setInfo}                
                    />
                </Col>
              </Row>
              <Row className="row6">
                      <Col className='next'>
                        <div className="showing"> Showing <span className='bolder'> {`${show.start}-${show.end}`} </span> of <span className='bolder'> {`${allUsersData.length}`} </span> data </div>
                        <div className="circles">
                    <div
                      className="icon1"
                        onClick={(e)=> handleLeft(e)}

                    > {svgs.dropdown} </div>
                  {
                    more.map((each, i) => {
                      return (
                          <div key={each.id} style={each.style} className="circle" onClick={(e) => { handleNext({text: e.target.textContent, id: each.id}) }}> {each.text} </div>
                        
                      )
                    })
                  }
                    <div
                      className="icon2"
                      onClick={(e)=> handleRight(e)}
                    > {svgs.dropdown} </div>
                </div>
              </Col>
            </Row>
            </div>

      </div>
      }
      
      {
        details && 
        <Userdetails setDetails={setDetails} info={info && info} />
      }
      {
        toggle && 
          // <FilterUsers toggle={toggle} setToggle={setToggle} />
          <Advancefilterusers toggle={toggle} setToggle={setToggle} />
      }
    </Container> 
              
  )
}

export default All