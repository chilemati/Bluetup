import React from 'react'
import { useState } from 'react';
import { Form } from 'react-bootstrap';
import { svgs } from '../../nav/svgIcons';
import NumberSelectIcon from '../NumberSelectIcon';
import ReactDatepickers from '../ReactDatepicker';
import './advancefilterusers.scss';

const Advancefilterusers = ({toggle,setToggle}) => {
  let [email, setEmail] = useState(true);
  let [balance, setBalance] = useState(false);
  let [referral, setReferral] = useState(false);
  let [reset, setReset] = useState(false);
  let [filter, setFilter] = useState({
  hasBalance: false,
  emailVerified: true,
  referralJoin: false,
  date: new Date().toDateString(),
  role: 'anyRole',
  status: 'anyStatus'
  });
    
    const roleOptions = [
  {
    label: 'Any Role',
    value: "anyRole",
    selected: true
  },
  {
    label: "Admin",
    value: "admin"
  },
  {
    label: "User",
    value: "user"
  }
];
  const statusOptions = [
  {
    label: 'Any Status',
    value: "anyStatus",
    selected: true
  },
  {
    label: "New User",
    value: "new"
  },
  {
    label: "Active User",
    value: "active"
  },
  {
    label: "Verified User",
    value: "verified"
  },
  {
    label: "Un-Verified User",
    value: "unverified"
  }
];
    
function handleReset(e) {
    e.preventDefault(e);
    setFilter(Object.assign(filter, {
      hasBalance: false,
    emailVerified: true,
    referralJoin: false,
    date: new Date().toDateString(),
    role: 'anyRole',
    status: 'anyStatus'
    }))
    setToggle('flex');
    setReset(true);
    setEmail(true);
    setBalance(false);
    setReferral(false);
    }

      function handleSubmit(e) {
      e.preventDefault(e);
      setToggle(false);
  }


  return (
      <div style={{display: toggle}} className="Advancefilter-diag container-fluid">
            <div className="row11 col">
              <h1>Advance Filter</h1>
            </div>
                <Form className='forms' onSubmit={(e)=> handleSubmit(e)}>
                  <div className="forms-row1">
                    <div className="row1-boxa">
                        <label htmlFor="type">TYPE</label>
                        <div className="selectRole">
                      <NumberSelectIcon
                        opt={statusOptions}
                        icon={svgs.normalSelectIcon}
                        state={filter}
                        setState={setFilter}
                        reset={reset}
                        setReset={setReset}
                      />
                    </div>
                    </div>
                    <div className="row1-boxb">
                            <label htmlFor="date">DATE</label>
                            <div className="picker">
                            <ReactDatepickers state={filter} setState={setFilter}
                            reset={reset} setReset={setReset} />
                            </div>
                    </div>
                     </div>
                  <div className="forms-row2">
                    <div className="row2-boxa">
                        <label htmlFor="currency">PAY CURRENCY</label>
                        <div className="selectRole">
                      <NumberSelectIcon
                        opt={statusOptions}
                        icon={svgs.normalSelectIcon}
                        state={filter}
                        setState={setFilter}
                        reset={reset}
                        setReset={setReset}
                      />
                    </div>
                    </div>
                  <div className="row2-boxb">
                    <label htmlFor="status" className='status'>STATUS</label>
                    <div className="selectRole">
                      <NumberSelectIcon
                        opt={statusOptions}
                        icon={svgs.normalSelectIcon}
                        state={filter}
                        setState={setFilter}
                        reset={reset}
                        setReset={setReset}
                      />
                    </div>
                    </div>
                </div>
                <div className="forms-row3">
                  <div className="row3-boxa">
                    <label htmlFor="nothing"></label>
                    <div className="nothing">

                    </div>
                  </div>
                  <div className="row3-boxb">
                    <label htmlFor="method">METHOD</label>
                    <div className="selectRole">
                      <NumberSelectIcon
                        opt={statusOptions}
                        icon={svgs.normalSelectIcon}
                        state={filter}
                        setState={setFilter}
                        reset={reset}
                        setReset={setReset}
                      />
                    </div>
                  </div>
                </div>
                <div className="forms-row4">
                  <div className="row4-boxa">
                     Check Box: To select different filter options via checkbox. 
                      </div>
                  <div className="row4-boxb">
                     Drop down: To select different filter options via dropdown.
                      </div>
                    </div>
                    <div className="btns">
                    <button className='filter'>filter</button>
                    <button className='reset' onClick={(e)=> handleReset(e)} >Reset Filter</button>
                    </div>
                </Form>

              </div>
         
  )
}

export default Advancefilterusers