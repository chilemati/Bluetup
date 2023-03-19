import React from 'react'
import { useState } from 'react';
import { svgs } from '../nav/svgIcons';
import { allUsersData } from '../users/allUsersData';
import ShowingVeri from '../users/ShowingVeri';
import Userdetails from '../users/userdetails/Userdetails';
import Usertable from '../users/userTable/Usertable';
import VeriDetails from '../users/VeriDetails/VeriDetails';
import './walletoverview.scss';
const WalletOverview = () => {
    let [show, setShow] = useState({
    start: 0,
    end: 5,
  });
  let [showing, setShowing] = useState(5);
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

    const numOptions = [
  {
    label: 'This Month',
    value: "This Month",
    selected: true
  },
  {
    label: "Last Month",
    value: "Last Month"
  },
  
    ];
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
                end: 5
            })
            setHide('hide');
        
        }
    }
    
  return (
      <div className="container-fluid walletoverview">
              {
              !details &&
          <div className="walletoverview">
          <div className="row">
              <div className="col row1">
                  <h1>WALLETS</h1>
              </div>
          </div>
          <div className="row">
              <div className="col row2">
                  <div className="box one">
                      <div className="line1">
                          <span>General Wallet</span>
                          <span className='hori'> <span className='icon'></span> <span>View</span> </span>
                      </div>
                      <div className="line2">
                          <div className="price">3,200,000.00 <span>NGN</span> </div>
                          <div className="percent">
                              <span className="per">+45% </span>
                              <span className="last">than last week</span>
                          </div>
                      </div>
                  </div>
                  <div className="box two">
                      <div className="line1">
                          <span>Blue Vault</span>
                          <span className='hori'> <span className='icon'></span> <span>View</span> </span>
                      </div>
                      <div className="line2">
                          <div className="price">3,200,000.00 <span>NGN</span> </div>
                          <div className="percent">
                              <span className="per">+45% </span>
                              <span className="last">than last week</span>
                          </div>
                      </div>
                  </div>
                  <div className="box three">
                      <div className="line1">
                          <span>Flexy Naira</span>
                          <span className='hori'> <span className='icon'></span> <span>View</span> </span>
                      </div>
                      <div className="line2">
                          <div className="price">3,200,000.00 <span>NGN</span> </div>
                          <div className="percent">
                              <span className="per">+45% </span>
                              <span className="last">than last week</span>
                          </div>
                      </div>
                  </div>
                  <div className="box four">
                      <div className="line1">
                          <span>Tup Dollar</span>
                          <span className='hori'> <span className='icon'></span> <span>View</span> </span>
                      </div>
                      <div className="line2">
                          <div className="price">3,200,000.00 <span>NGN</span> </div>
                          <div className="percent">
                              <span className="per">+45% </span>
                              <span className="last">than last week</span>
                          </div>
                      </div>
                  </div>
              </div>
          </div>
          <div className="row">
              <div className="col row3">
                  <div className="box one">
                      <div className="line1">
                          <div className="cell1">
                              <span className="h">Total accumulated savings</span>
                              <span className="p">The amount of total accumulated savings</span>
                              <span className="l"></span>
                          </div>
                          <div className="cell2"> <ShowingVeri opt={numOptions} icon={''} /> </div>
                      </div>
                      <div className="line2">
                           <div className="price">5,200,000.00 <span>NGN</span> </div>
                          <div className="percent">
                              <span className="per">+45% </span>
                              <span className="last">than last week</span>
                          </div>
                      </div>
                      <div className="line3">
                          <div className="gray">INTERESTS TO PAY</div>
                          <div className="price">2,150,000.00 <span>NGN</span> </div>
                      </div>
                  </div>
                  <div className="box two">
                       <div className="line1">
                          <div className="cell1">
                              <span className="h">Top Savers</span>
                              <span className="p">Top users who saved in last 30 days.</span>
                              <span className="l"></span>
                          </div>
                      </div>
                      <div className="line2">
                          <span className="names">Name</span>
                          <span className="savings">Savings</span>
                          <span className="interests">Interest to pay</span>
                          <span className="name">Grant frank</span>
                          <span className="saving">5,200,000.00 <span className="gray">NGN</span> </span>
                          <span className="interest">2,200,000.00 <span className="gray">NGN</span></span>
                          <span className="name">Mickle wink</span>
                          <span className="saving">5,200,000.00 <span className="gray">NGN</span> </span>
                          <span className="interest">2,200,000.00 <span className="gray">NGN</span></span>
                          <span className="name">Ngozi Victory</span>
                          <span className="saving">5,200,000.00 <span className="gray">NGN</span> </span>
                          <span className="interest">2,200,000.00 <span className="gray">NGN</span></span>
                         
                      </div>
                  </div>
              </div>
          </div>
          <div className="row">
              <div className="col row4">
                  <div className="line1">
                      <span className="text">Recent  Locked Bluevault Savings</span>
                      <button onClick={(e)=> handleAll(e)}>View All</button>
                  </div>
                  <Usertable
                      header={[
                          { item: 'Name', style: 'one' },
                          { item: 'Plan', style: 'two'},
                          { item: 'Date', style: 'three' },
                          { item: 'Amount', style: 'four' },
                          { item: 'Interests', style: 'five'},
                          { item: <span>&nbsp;&nbsp;</span>, style: 'last'}
                         ]
                      }
              array={allUsersData}
             
                toShow={
                [
                    { item: 'userName', col: 2, icon: 'first',  },
                    { item: 'plan', col: 1, icon:'two',  },
                    { item: 'date', col: 1, icon:'three', },
                    { item: 'amount', col: 1, icon:'four', },
                    { item: 'interest', col: 1, icon:'five',  },
                    { item: 'Details', col: 2, icon:'last',}
                    
                    ]
                }
              showing={show}
              setDetails={setDetails}
              setInfo={setInfo}
                
             />
              </div>
                      </div>
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
              
          }
          
          {
        details && 
         <Userdetails setDetails={setDetails} info={info && info} />
      }
   </div>
  )
}

export default WalletOverview

