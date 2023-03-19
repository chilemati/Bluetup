import React from 'react'
import { useState } from 'react';
import { Form } from 'react-bootstrap';
import { svgs } from '../../nav/svgIcons';
import NumberSelectIcon from '../NumberSelectIcon';
import ReactDatepickers from '../ReactDatepicker';
import './filterusers.scss';

const FilterUsers = ({toggle,setToggle}) => {
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
      <div style={{display: toggle}} className="filter-diag w-50 container-fluid">
            <div className="row">
            <div className="row11 col">
              <h1>Filter Users</h1>
            </div>
            </div>
            <div className="row">
              <div className='col'>
                <Form className='forms' onSubmit={(e)=> handleSubmit(e)}>
                  <div className="forms-row1">
                    <div className="row1-boxa">
                    <input
                      type="checkbox"
                      // checked={filter.hasBalance}
                      checked={balance}
                      onChange={(e) => { setFilter(Object.assign(filter, { hasBalance: e.target.checked })); setBalance(filter.hasBalance) }} name="hasBalance" id="hasBalance" />
                      <label htmlFor="hasBalance">Has Balance</label>
                    </div>
                    <div className="row1-boxb">
                    <input
                      checked={email}
                      onChange={(e) => { setFilter(Object.assign(filter, { emailVerified: e.target.checked })); setEmail(filter.emailVerified); }}
                      type="checkbox"
                      name="verifiedEmail"
                      id="verifiedEmail" />
                      <label htmlFor="verifiedEmail">Email Verified</label>
                    </div>
                  </div>
                  <div className="forms-row2">
                    <div className="row2-boxa">
                    <input
                      type="checkbox"
                      // checked={filter.referralJoin}
                      checked={referral}
                      onChange={(e) => { setFilter(Object.assign(filter, { referralJoin: e.target.checked })); setReferral(filter.referralJoin); }}
                      name="referral"
                      id="referral" />
                      <label htmlFor="referral">Referral Join</label>
                    </div>
                  <div className="row2-boxb">
                    <label htmlFor="date" className='date'>Date</label>
                    <div className="picker">
                      <ReactDatepickers state={filter} setState={setFilter}
                        reset={reset} setReset={setReset} />

                    </div>
                    </div>
                </div>
                <div className="forms-row3">
                  <div className="row3-boxa">
                    <label htmlFor="role">Role</label>
                    <div className="selectRole">
                      <NumberSelectIcon
                        opt={roleOptions}
                        icon={svgs.normalSelectIcon}
                        state={filter}
                        setState={setFilter}
                        reset={reset}
                        setReset={setReset}
                      />

                    </div>
                  </div>
                  <div className="row3-boxb">
                    <label htmlFor="status">Status</label>
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

            </div>
        </div>
  )
}

export default FilterUsers