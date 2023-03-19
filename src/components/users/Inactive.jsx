import React from 'react'
import { useState } from 'react';
import { Col, Container, Row } from 'react-bootstrap'
import { svgs } from '../nav/svgIcons';
import { allUsersData } from './allUsersData';
import FilterUsers from './filterUsers/FilterUsers';
import Newtable from './NewTable';
import './newUser.scss';
import ShowingVeri from './ShowingVeri';
import Userdetails from './userdetails/Userdetails';
import Usertable from './userTable/Usertable';
import VeriDetails from './VeriDetails/VeriDetails';
const Inactive = () => {
  let [show, setShow] = useState({
    start: 0,
    end: 10,
  });
  let [showing, setShowing] = useState(10);
  let [more, setMore] = useState([
    { text: 1, style: { backgroundColor: '#172774', color: '#FFFFFF' }, id: 1 },
    { text: 2, style: { backgroundColor: '#FFFFFF', color: '#172774' }, id: 2 },
    { text: 3, style: { backgroundColor: '#FFFFFF', color: '#172774' }, id: 3 },
    
  ])
  let [details, setDetails] = useState(false);
  let [info, setInfo] = useState(null);
  let [toggle, setToggle] = useState('none');

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
    setToggle('flex');
  }

  
    

  return (
    <Container fluid >
      {
        !details &&
        <div className="newUser">
          <Row>
            <Col className="row1 d-flex align-items-center align-contents-center justify-content-center">
              <h1 className=''>INACTIVE USERS</h1>
            </Col>
          </Row>
          <div className=" parent">
      
            <div className="row">
              <div className="col row2">
                <div className="item1">
                  <span>Filter Users</span> <button onClick={()=> handleShow()}>Date</button>
                </div>
                <div className="item2">
                  <span>Search</span> <input onClick={(e)=> handleSearch(e)} type="text" />
                </div>
                <div className="item3 ">
                    <span>Showing</span> <span >
                      <ShowingVeri
                        opt={numOptions}
                        icon={svgs.dropdown}
                         setShowing={setShowing}
                          showing={showing}
                          setShow={setShow}
                      /> </span> <span>Entries</span>
                </div>

              </div>
              </div>
              <FilterUsers toggle={toggle} setToggle={setToggle} />
            <div className="row">
              <div className="col row3">
                <h1>List of new user</h1>
                <p>List of all new users registrations</p>
              </div>
            </div>
            <Usertable
             header={[
                      { item: 'User', style: 'one' },
                      { item: 'Email | Phone', style: 'two'},
                      { item: 'Joined At', style: 'three' },
                      { item: 'Wallet Balance', style: 'four' },
                      { item: '', style: 'last'}
                      ]
                    }
              array={allUsersData}
             toShow={
                [
                    { item: 'userName', col: 2, icon:'first' },
                    { item: 'phoneNumber', col: 1, icon:'two' },
                    { item: 'date', col: 1, icon:'three' },
                    { item: 'totalBalance', col: 1, icon:'four' },
                    { item: 'Details', col: 2, icon:'last'}
                    
                    ]
                }
              showing={show}
              setDetails={setDetails}
              setInfo={setInfo}
                
            />

            </div>
            <div className="row6">
                      <div className='next'>
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
              </div>
            </div>

        </div>
      }

       {
        details && 
        <Userdetails setDetails={setDetails} info={info && info} />
      }
    </Container>
  )
}

export default Inactive