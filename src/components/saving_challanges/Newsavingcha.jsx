import React from 'react'
import ShowingVeri from '../users/ShowingVeri';
import './newsavingcha.scss';
import {BsToggleOn, BsToggleOff,BsToggle2Off} from 'react-icons/bs'
import { useState } from 'react';
import { useRef } from 'react';
import ToggleButton from './toggleButton/ToggleButton';
const Newsavingcha = ({ setShownew, info }) => {
     let [btnState, setBtnstate] = useState(false);
     let [btnState2, setBtnstate2] = useState(false);
     let [btnState3, setBtnstate3] = useState(false);
    
      const numOptions = [
  {
    label: 'Percentage',
    value: "Percentage",
    selected: true
  },
  {
    label: "Normal",
    value: "Normal"
  },
  
  ];
      const numOptions2 = [
  {
    label: 'Fixed (Locked)',
    value: "Fixed",
    selected: true
  },
  {
    label: "Normal",
    value: "Normal"
  },
  
  ];
      const numOptions3 = [
  {
    label: 'Daily',
    value: "Daily",
    selected: true
  },
  {
    label: "Normal",
    value: "Normal"
  },
  
  ];
      const numOptions4 = [
  {
    label: 'Anytime',
    value: "Anytime",
    selected: true
  },
  {
    label: "Normal",
    value: "Normal"
  },
  
  ];
      const numOptions5 = [
  {
    label: 'After mature',
    value: "After mature",
    selected: true
  },
  {
    label: "Normal",
    value: "Normal"
  },
  
  ];
      const numOptions6 = [
  {
    label: 'Leadwell insurances',
    value: "Leadwell insurances",
    selected: true
  },
  {
    label: "Normal",
    value: "Normal"
  },
  
  ];
    return (
      <div className="container-fluid">
            <div className="newsavingcha">
                <h1 className="title">New Scheme / Plan</h1>
                <div className="hr1"></div>
                <div className="form">
                    <form onSubmit={(e) => e.preventDefault(e)}>
                        <div className="line1">
                            <div className="cell1">
                                <div className="boxa">
                                    <label htmlFor="newscheme">Scheme Name<span className="star">*</span> </label>
                                    <input type="text" name="newscheme" id="newscheme" placeholder='billionairs' />
                                </div>
                                <div className="boxb">
                                    <label htmlFor="newscheme">Scheme Short Description<span className="star">*</span> </label>
                                    <input type="text" name="newscheme" id="newscheme" placeholder='i love jesus and my hard work wont be in vain' />
                                </div>
                            </div>
                            <div className="cell2">
                                <label htmlFor="faq">Scheme FAQ/Term & Conditions</label>
                                <div className="textarea">
                                    Lorem ipsum dolor sit amet consectetur. Urna habitasse 
                                    sed ut neque tortor. Mauris ornare amet placerat non 
                                    et amet amet integer vitae. Felis mauris neque enim 
                                    tortor diam massa purus egestas volutpat. Pretium 
                                    vel mauris est nulla pellentesque semper mollis at. 
                                    Ullamcorper vivamus mattis metus.
                                 </div>
                            </div>
                        </div>
                        <div className="line2">
                            <div className="cell1">
                                <div className="boxa">
                                <label htmlFor="target">Target savings upgrade threshold amount<span className="star">*</span> </label>
                                <input type="text" name="target" id="target input" defaultValue={'250000'} />
                                <span className="note">NOTE: PER MEMBER / SLOT</span>
                                </div>
                                <div className="boxb">
                                    <label htmlFor="expected">Expected Returns / Profit Scheme<span className="star">*</span> </label>
                                    <span className="flez">
                                        <input type="text" name="expected" id="expected" defaultValue={'12'} />
                                        <span className="opt">
                                    <ShowingVeri opt={numOptions} icon={''} />
                                        </span>
                                    </span>
                                
                                </div>
                            </div>
                            <div className="cell2">
                                <div className="boxa">
                                <label htmlFor="target">Minimum Savings  Amount<span className="star">*</span> </label>
                                <input type="text" name="target" id="target input" defaultValue={''} />
                                <span className="note">NOTE: MIN. SAVING PER MEMBER </span>
                                </div>
                                <div className="boxb">
                                    <label htmlFor="target">Investment Type / Structure<span className="star">*</span> </label>
                                    <span className="inp">
                                    <ShowingVeri opt={numOptions2} icon={''} />
                                    </span>
                                
                                </div>
                            </div>
                            <div className="cell3">
                                <div className="boxa">
                                <div className="img"> <span>UPLOAD USER <br /> IMAGE / VIDEO</span> </div>
                                </div>
                                <div className="imgSize">IMAGE SIZE: </div>
                            </div>
                        </div>
                        <div className="line3">
                            <div className="cell1">
                                <div className="boxa">
                                    <label htmlFor="target">Interest calculation / Profit Adjust</label>
                                    <span className="inp">
                                    <ShowingVeri opt={numOptions3} icon={''} />
                                    </span>
                                </div>
                                <div className="boxb">
                                    <label htmlFor="freq">Term Duration<span className="star">*</span> </label>
                                    <input type="text" name="freq" id="freq" />
                                </div>
                                <div className="boxc">
                                    <label htmlFor="target">Saving Frequency<span className="star">*</span> </label>
                                    <span className="inp">
                                    <ShowingVeri opt={numOptions4} icon={''} />
                                    </span>
                                </div>

                            </div>
                            <div className="cell2">
                                <div className="boxa">
                                    <label htmlFor="target">Interest Payout frequency / structure<span className="star">*</span> </label>
                                    <span className="inp">
                                    <ShowingVeri opt={numOptions5} icon={''} />
                                    </span>
                                </div>
                                <div className="boxb">
                                    <label htmlFor="target"> </label>
                                    <span className="inp">
                                    <ShowingVeri opt={numOptions6} icon={''} />
                                    </span>
                                </div>
                                <div className="boxc">
                                    <label htmlFor="insurance">Investment insurance partner<span className="star">*</span> </label>
                                    <input type="text" name="insurance" id="insurance" />
                                </div>

                            </div>
                            <div className="cell3">
                                <div className="boxa">
                                    <label htmlFor="fakeInv">Fake active investors count </label>
                                     <input type="text" name="fakeInv" id="fakeInv" />
                                </div>
                                <div className="boxb">
                                    <label htmlFor="fakeGro">Fake group balance </label>
                                    <input type="text" name="fakeGro" id="fakeGro" />
                                </div>
                                <div className="boxc">
                                    <label htmlFor="target">Restrict New deposits<span className="star">*</span> </label>
                                    <span>
                                    </span>
                                </div>

                            </div>
                        </div>
                        <div className="line4">
                            <div className="cell1">
                                <div className="boxa">
                                    <span className="icon">
                                       <ToggleButton
                        init={btnState}
                        offParent={
                            {
                            
                                 borderColor: 'green',
                                backgroundColor: 'white',

                             }
                        }
                        onParent={
                                {
                           borderColor: 'red',
                                backgroundColor: 'white',
                             }
                        }
                        offChild={{
                                
                            translate: '25px',
                            transition: '0.4s ease-in',
                                backgroundColor: 'green',
                                borderColor: 'green'
                        }}
                        onChild={
                            {
                            
                            translate:  '0px',
                                transition: '0.4s ease-in',
                            backgroundColor: 'red',
                               border: '1px solid red',
                             }
                            }
                        setState={setBtnstate}
                    
                    />
                                    </span>
                                    <span className="label">Active</span>
                                </div>
                                <div className="boxb">
                                    <span className="icon">
                                        <ToggleButton
                        init={btnState2}
                        offParent={
                            {
                            borderColor: 'red',
                                backgroundColor: 'white',

                             }
                        }
                        onParent={
                                {
                            borderColor: 'green',
                                backgroundColor: 'white',
                             }
                        }
                        offChild={{
                                translate:  '0px',
                                transition: '0.4s ease-in',
                            backgroundColor: 'red',
                               border: '1px solid red',

                        }}
                        onChild={
                            {
                            translate: '25px',
                            transition: '0.4s ease-in',
                                backgroundColor: 'green',
                            borderColor: 'green'
                             }
                            }
                        setState={setBtnstate}
                    
                    />
                                    </span>
                                    <span className="label">Return capital at end of the term<span className="star">*</span> </span>
                                </div>
                                <div className="boxc">
                                    <span className="icon">
                                        <ToggleButton
                        init={btnState3}
                        offParent={
                            {
                            
                                 borderColor: 'green',
                                backgroundColor: 'white',

                             }
                        }
                        onParent={
                                {
                           borderColor: 'red',
                                backgroundColor: 'white',
                             }
                        }
                        offChild={{
                                
                            translate: '25px',
                            transition: '0.4s ease-in',
                                backgroundColor: 'green',
                                borderColor: 'green'
                        }}
                        onChild={
                            {
                            
                            translate:  '0px',
                                transition: '0.4s ease-in',
                            backgroundColor: 'red',
                               border: '1px solid red',
                             }
                            }
                        setState={setBtnstate}
                    
                    />
                                    </span>
                                    <span className="label">Restrict New deposits</span>
                                </div>
                            </div>
                            <div className="cell2">
                                <button onClick={(e)=> setShownew(false)} className="save">Save Changes</button>

                            </div>
                        </div>
                          
                    </form>
                    
                </div>
            </div>
    </div>
  )
}

export default Newsavingcha