import React from 'react'
import { useState } from 'react';
import { svgs } from '../nav/svgIcons';
import { allUsersData } from '../users/allUsersData';
import Userdetails from '../users/userdetails/Userdetails';
import Usertable from '../users/userTable/Usertable';
import VeriDetails from '../users/VeriDetails/VeriDetails';
import './sc_allsavers.scss';
const SC_allsavers = () => {
    let [show, setShow] = useState({
    start: 0,
    end: 15,
  });
  let [showing, setShowing] = useState(15);
  let [details, setDetails] = useState(false);
  let [info, setInfo] = useState(null);
  let [hide, setHide] = useState('show');
    let [clicks, setClicks] = useState(1);
    let [more, setMore] = useState([
        { text: 1, style: { backgroundColor: '#172774', color: '#FFFFFF' }, id: 1 },
        { text: 2, style: { backgroundColor: '#FFFFFF', color: '#172774' }, id: 2 },
        { text: 3, style: { backgroundColor: '#FFFFFF', color: '#172774' }, id: 3 },
    
    ]);
    
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
     function handleAll(e) {
        setClicks(clicks = clicks + 1);
        if (clicks % 2 === 0) {
            setHide('show');
            setShow({
                start: 0,
                end: allUsersData.length
            })
            
        } else {
            setShow({
                start: 0,
                end: 7
            })
            setHide('hide');
        
        }
    }
  return (
    <div className="container-fluid">
      {
        !details &&
      <div className="sc_allsavers">
        <div className="row1">
          <h1>TOTAL NO. OF INVESTORS </h1>
        </div>
        <div className="parent">
          <div className="line1">
            <h1>Recent Savings</h1>
          </div>
          <Usertable

              header={[
                      { item: 'User Name', style: 'one' },
                      { item: 'Challenge', style: 'two'},
                      { item: 'Date', style: 'three' },
                      { item: 'Amount', style: 'four' },
                      { item: 'Total saved', style: 'five' },
                      { item: '', style: 'last'}
                      ]
                    }
                array={allUsersData}
                toShow={
                [
                    { item: 'userName', col: 2, icon:'first' },
                    { item: 'challange', col: 1, icon:'two' },
                    { item: 'date', col: 1, icon:'three' },
                    { item: 'amount', col: 1, icon:'four' },
                    { item: 'totalAmountsaved2', col: 1, icon:'five' },
                    { item: 'Details', col: 2, icon:'last'}
                    
                    ]
                }
             
              showing={show}
              setDetails={setDetails}
              setInfo={setInfo}
                
            />
        </div>
            <div className="ft">
              <div className={`row6 ${hide}`}>
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
      </div>
      }
      {
        details && 
         <Userdetails setDetails={setDetails} info={info && info} />
      }
   </div>
  )
}

export default SC_allsavers