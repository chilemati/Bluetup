import React from 'react'
import { useState } from 'react';
import { Col, Container, Row } from 'react-bootstrap'
import { svgs } from '../nav/svgIcons';
import { allUsersData } from './allUsersData';
import ShowingVeri from './ShowingVeri';
import Userdetails from './userdetails/Userdetails';
import Usertable from './userTable/Usertable';
import VeriDetails from './VeriDetails/VeriDetails';
import './verifications.scss';
const Verifications = () => {
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
      <div className='verifications'>
      <Row>
        <Col className="row1">
          <h1>VERIFICATIONS</h1>
        </Col>
      </Row>
      <div className="parent">
      <Row>
        <Col className="row2">
            <h3 className="title">Verifications</h3>
            <div className="second">
              <div className="cell1">
              <span className="disc">List of all currently Active verifications</span>
              </div>
              <div className="cell2">
                <label htmlFor="search">Search</label>
                <input type="text" name='search' id='search' />
              </div>
              <div className="cell3">
                <span className="sho">Showing</span>
                      <span className='drop'>
                        <ShowingVeri
                        opt={numOptions}
                        icon={svgs.dropdown}
                         setShowing={setShowing}
                          showing={showing}
                          setShow={setShow}
                      />
                      </span>
                <span className="wing">Entries</span>
              </div>

            </div>
          </Col>
         </Row>  
          <Row>
            <Col className="row3">
              <h5>Active Verifications</h5>
              <div className="hori"> <div className="a"></div> <div className="b"></div> </div>
             </Col>
        </Row>
         
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
         <VeriDetails setDetails={setDetails} info={info && info} />
      }

    </Container>
  )
}

export default Verifications