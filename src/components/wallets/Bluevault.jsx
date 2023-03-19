import React from 'react'
import { useState } from 'react';
import { allUsersData } from '../users/allUsersData';
import Userdetails from '../users/userdetails/Userdetails';
import Usertable from '../users/userTable/Usertable';
import VeriDetails from '../users/VeriDetails/VeriDetails';
import AddTransactions from './AddTransactions';
import './bluevault.scss';
const Bluevault = () => {
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
            <h1>BLUE VAULT</h1>
          </div>
        </div>
        <div className="parent">
          <div className="row3">
            <div className="line1"><h2>Blue Vault</h2></div>
            <div className="line2">
              <span className="gray">List of all currently Active savers, amount saved and payout dates</span>
              <button onClick={(e)=> setAddT(true)} className="green">Add New Savings</button>
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
                          { item: 'Saving Duration', style: 'three' },
                          { item: 'Amount Saved', style: 'four' },
                          { item: 'Payout Date', style: 'five'},
                          { item: <span>&nbsp;&nbsp;</span>, style: 'last'}
                         ]
                      }
              array={allUsersData}
             
                toShow={
                [
                    { item: 'userName', col: 2, icon: 'first',  },
                    { item: 'interestP', col: 1, icon:'two',  },
                    { item: 'savingDuration', col: 1, icon:'three', },
                    { item: 'amountSaved', col: 1, icon:'four', },
                    { item: 'payoutDate', col: 1, icon:'five',  },
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

export default Bluevault