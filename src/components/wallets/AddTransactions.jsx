import React from 'react'
import { svgs } from '../nav/svgIcons';
import ShowingVeri from '../users/ShowingVeri';
import './addTransactions.scss';

const AddTransactions = ({ setAddT }) => {
    
     const numOptions = [
  {
    label: 'select an account',
    value: "select",
    selected: true
  },
  {
    label: "Account 1",
    value: "1"
  },
  {
    label: "Account 2",
    value: "2"
  }
  ];
     const numOptions1 = [
  {
    label: 'Bluevault',
    value: "Bluevault",
    selected: true
  },
  {
    label: "Tupdollar",
    value: "tupdollar"
  },
  {
    label: "Flexynaira",
    value: "flexynaira"
  }
  ];
  return (
      <div className="container-fluid">
          <div className="addTransactions">
              <div className="row">
                  <div className="col row1">
                      <h1>Manually Add Transaction</h1>
                      <div className="hr"></div>
                      
                  </div>
              </div>
              <div className="form">
                  <form onSubmit={(e) => e.preventDefault(e)}>
                      <div className="row2">
                          <div className="cell1">
                              <label htmlFor="amount">Amount<span className="star">*</span> </label>
                              <input type="text" name="amount" id="amount" value={'5000'} />
                          </div>
                          <div className="cell2">
                              <label htmlFor="add">Add to Account</label>
                             <ShowingVeri opt={numOptions} icon={svgs.normalSelectIcon} />
                          </div>
                      </div>
                      <div className="row2 b">
                          <div className="cell1">
                              <label htmlFor="transaction">Transaction Type<span className="star">*</span> </label>
                              <input type="text" name="transaction" id="transaction" value={'Quick save'} />
                          </div>
                          <div className="cell2">
                              <label htmlFor="quick">Quick save</label>
                             <ShowingVeri opt={numOptions1} icon={svgs.normalSelectIcon} />
                          </div>
                      </div>
                      <div className="row2 b">
                          <div className="cell1">
                              <label htmlFor="remark">Note / Remarks </label>
                              <input type="text" name="remark" id="remark" value={''} />
                          </div>
                          <div className="cell2">
                              
                          </div>
                      </div>
                              <div className="gray">The note or remarks help to reminder. Only administrator can read from transaction details.</div>
                        <div className="btns">
                            <button className='save' onClick={(e)=> setAddT(false)}>Save Changes</button>
                            <button className='cancel' onClick={(e)=> setAddT(false)}>Cancel</button>
                      </div>
                      <div className="hr"></div>
                      <div className="text">
                          <p>
                                Add Charge: Amount will be deduct/debit from account balance.
                              
                          </p>
                          <p>
                                Add Bonus/Deposit: Amount will add/credit into account balance.
                              
                          </p>
                          <p>
                                Leaving blank description will add 'Debited Balance' or 'Credited Balance' based on type.
                              
                          </p>
                          <p>
                              
                                You can not undo this action once you confirmed to add.
                          </p>



                      </div>
                  </form>
              </div>
          </div>
    </div>
  )
}

export default AddTransactions