import React from 'react'
import { useState } from 'react';
import { allUsersData } from '../users/allUsersData';
import Usertable from '../users/userTable/Usertable';
import Newsavingcha from './Newsavingcha';
import './sc_challange.scss';
const SC_challange = () => {
   let [show, setShow] = useState({
    start: 0,
    end: 2,
  });
  let [showing, setShowing] = useState(show);
  let [details, setDetails] = useState(false);
  let [info, setInfo] = useState(null);
  let [showNew, setShownew] = useState(false);
  return (
    <div className="container-fluid body">
      {
        !details && 
      <div className="sc_challange">
        <div className="row1">
          <h1>SAVERS CHALLENGES</h1>
        </div>
        <div className="parent">
          <div className="line1"><h1>Add Saving Challenges</h1></div>
          <div className="line2">
            <span className="gray">Manage and add saving challenges that you want to offer.</span>
            <button onClick={(e)=> setDetails(true)} className="add">Add New Plans</button>
          </div>
          <div className="line3">
            <span className="plan">Scheme / Plan</span>
            <span className="inactive">Inactive</span>
          </div>
          <div className="hr">
            <span className="a"></span>
            <span className="b"></span>
          </div>
          <Usertable

              header={[
                      { item: 'Plan', style: 'one' },
                      { item: 'No. Investors', style: 'two'},
                      { item: 'Days (Term)', style: 'three' },
                      { item: 'Total Amount Saved', style: 'four' },
                      { item: '', style: 'last'}
                      ]
                    }
                array={allUsersData}
                toShow={
                [
                    { item: 'plan2', col: 1, icon:'first' },
                    { item: 'investors', col: 1, icon:'two' },
                    { item: 'days', col: 1, icon:'three' },
                    { item: 'totalAmountsaved2', col: 1, icon:'four' },
                    { item: 'editPlan', col: 1, icon:'last'}
                    
                    ]
                }
             
              showing={showing}
              setDetails={setDetails}
              setInfo={setInfo}
                
            />
        </div>
        <div className="ft"></div>
      </div>
      }
      {
        details && 
        <Newsavingcha setShownew={setDetails} info={info} />
      }
    </div>
  )
}

export default SC_challange