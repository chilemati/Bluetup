import React, { useState } from 'react'
import { svgs } from '../nav/svgIcons';
import { allUsersData } from '../users/allUsersData';
import Userdetails from '../users/userdetails/Userdetails';
import Usertable from '../users/userTable/Usertable';
import VeriDetails from '../users/VeriDetails/VeriDetails';
import './sc_overview.scss';

const SCOverview = () => {
     let [show, setShow] = useState({
    start: 0,
    end: 7,
  });
  let [showing, setShowing] = useState(7);
  let [details, setDetails] = useState(false);
    let [info, setInfo] = useState(null);
    let [hide, setHide] = useState('hide');
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
          <div className="sc_overview">
              <div className="row">
                  <div className="col row1">
                      <h1>SAVINGS CHANLLENGES</h1>
                  </div>
              </div>
              <div className="row2">
                  <div className="box boxa">
                      <div className="line1">
                          <h1>Total accumulated savings</h1>
                          <p className='gray'>The amount of total accumulated savings</p>
                          <div className="hr"></div>
                      </div>
                      <div className="line2">
                          <div className="total">5,200,000.00 <span className="gray">NGN</span></div>
                          <div className="per">
                              <span className="green">+45%</span>
                              <span className="gray">than last week</span>
                          </div>
                      </div>
                      <div className="line3">
                          <p className="gray">NUMBER OF USERS IN CHALLENGE</p>
                          <p className="numbar">157</p>
                      </div>
                  </div>
                  <div className="box boxb">
                      <div className="line1">
                          <h1>Top Savers</h1>
                          <p className='gray'>Top users who in saved by amount in last 30 days.</p>
                          <div className="hr"></div>
                      </div>
                      <div className="line2">
                          <table>
                              <tr className="title">
                                  <td className="gray">Name</td>
                                  <td className="green">Last saved</td>
                                  <td className="green">Total saved</td>
                              </tr>
                              <tr className="one">
                                  <td className='flez'>
                                      <span className="icon"></span>
                                      <span className="fname">Samantha William</span>
                                  </td>
                                  <td>
                                      <span className="gray">NGN </span>
                                      <span className="price">50,000.00  </span>
                                  </td>
                                  <td>
                                      <span className="gray">NGN </span>
                                      <span className="price">250,000.00  </span>
                                  </td>
                              </tr>
                              <tr className="one">
                                  <td className='flez'>
                                      <span className="icon"></span>
                                      <span className="fname">Samantha William</span>
                                  </td>
                                  <td>
                                      <span className="gray">NGN </span>
                                      <span className="price">50,000.00  </span>
                                  </td>
                                  <td>
                                      <span className="gray">NGN </span>
                                      <span className="price">250,000.00  </span>
                                  </td>
                              </tr>
                              <tr className="one">
                                  <td className='flez'>
                                      <span className="icon"></span>
                                      <span className="fname">Samantha William</span>
                                  </td>
                                  <td>
                                      <span className="gray">NGN </span>
                                      <span className="price">50,000.00  </span>
                                  </td>
                                  <td>
                                      <span className="gray">NGN </span>
                                      <span className="price">250,000.00  </span>
                                  </td>
                              </tr>
                          </table>
                      </div>
                      
                  </div>
              </div>
              <div className="row3">
                  <div className="line1">
                      <h1 className="recent">Recent Savings</h1>
                      <button onClick={(e)=> handleAll(e)} className="view">View All</button>
                  </div>
                  <Usertable

              header={[
                      { item: 'Name', style: 'one' },
                      { item: 'Date', style: 'two'},
                      { item: 'Amount Saved', style: 'three' },
                      { item: 'Total saved', style: 'four' },
                      { item: '', style: 'last'}
                      ]
                    }
                array={allUsersData}
                toShow={
                [
                    { item: 'userName', col: 2, icon:'first' },
                    { item: 'date', col: 1, icon:'two' },
                    { item: 'amount', col: 1, icon:'three' },
                    { item: 'totalAmountsaved', col: 1, icon:'four' },
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

export default SCOverview