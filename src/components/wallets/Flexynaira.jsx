import React from 'react'
import { useState } from 'react';
import { allUsersData } from '../users/allUsersData';
import Userdetails from '../users/userdetails/Userdetails';
import Usertable from '../users/userTable/Usertable';
import VeriDetails from '../users/VeriDetails/VeriDetails';
import AddTransactions from './AddTransactions';
import './bluevault.scss';
const Flexynaira = () => {
   let [show, setShow] = useState({
    start: 0,
    end: 10,
  });
  let [showing, setShowing] = useState(show);
  let [details, setDetails] = useState(false);
  let [info, setInfo] = useState(null);
  let [addT, setAddT] = useState(false);
  return (
    <div className="container-fluid">
      {
        !details && !addT &&
      <div className="bluevault">
        <div className="row">
          <div className="col row1">
            <h1>FLEXY NAIRA</h1>
          </div>
        </div>
        <div className="parent">
          <div className="row3">
            <div className="line1"><h2>Flexy Naira</h2></div>
            <div className="line2">
              <span className="gray">List of all currently Active savers and amount saved </span>
                  <div className="cell1">
                  <button className="green">Savings interest rate</button>
                  <button className="green" onClick={(e)=> setAddT(true)}>Add New Savings</button>

                  </div>
            </div>
            <div className="line3">
              <h3>Active Savings</h3>
              <div className="hr">
                <span className="a"></span>
                <span className="b"></span>
              </div>
            </div>
          </div>
           <Usertable
                      header={[
                          { item: 'Name', style: 'one' },
                          { item: 'Interest (P)', style: 'two'},
                          { item: 'Last Amount Saved', style: 'three' },
                          { item: 'Total Amount Saved', style: 'four' },
                          { item: <span>&nbsp;&nbsp;</span>, style: 'last'}
                         ]
                      }
              array={allUsersData}
             
                toShow={
                [
                    { item: 'userName', col: 2, icon: 'first',  },
                    { item: 'interestP', col: 1, icon:'two',  },
                    { item: 'lastAmountsaved', col: 1, icon:'three', },
                    { item: 'totalAmountsaved', col: 1, icon:'four', },
                    { item: 'view', col: 1, icon:'last view',}
                    
                    ]
                }
              showing={showing}
              setDetails={setDetails}
              setInfo={setInfo}
                
             />
        </div>
      </div>

      }
      {
        details && 
          <Userdetails setDetails={setDetails} info={info && info} />
      }
      {
        addT && 
        <AddTransactions setAddT={setAddT} />

      }
    </div>
  )
}

export default Flexynaira