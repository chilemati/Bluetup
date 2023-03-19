import React from 'react';
import { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import Checkbox from './checkbox/Checkbox';
import './login.scss';
import { GrStatusGood } from 'react-icons/gr';
import { GoPrimitiveDot } from 'react-icons/go'


const Login = ({setIsLoggedIn}) => {
    let [email, setEmail] = useState('godwin.ojeiwa@gmail.com');
    let [password, setPassword] = useState('0000000000');
    let [remember, setRemember] = useState(false);
    let navigate = useNavigate();


    function handleSubmit(e) {
        e.preventDefault(e);
        let upd = {
            email,
            password,
            remember
        };
        if (email === 'godwin.ojeiwa@gmail.com' && password === '0000000000') {
            setIsLoggedIn(true);
            navigate('/dashbaord');
        }
        console.log(upd);
    }
  return (
      <div className="container-fluid">
          <div className="login">
          <div className="row1">
              <h1>Login</h1>
          </div>
              <div className="row2">
                  <div className="boxa">
                      <form onSubmit={(e) => handleSubmit(e)} >
                          <div className="line1">
                              <label htmlFor="email">Email<span className="star">*</span> </label>
                              <input
                                  type="email"
                                  name="email"
                                  id="email"
                                  value={email}
                                  onChange={(e)=> setEmail(e.target.value) }

                              />
                          </div>
                          <div className="line2">
                              <label htmlFor="password">Password<span className="star">*</span> </label>
                              <input
                                  type="password"
                                  name="password"
                                  id="password"
                                  value={password}
                                  onChange={(e)=> setPassword(e.target.value)}

                              />
                          </div>
                          <div className="line3">
                              <div className="cell1">
                                  <Checkbox
                                    checkeState={remember}
                                    setCheckedState={setRemember}
                                    checkedIcon={<GoPrimitiveDot style={{ color: '#172774' }} />}
                                    boxCss={'mycheck'}
                                    
                                />
                                  <label htmlFor="remember">Remember me</label>
                              </div>
                              <div className="cell2"> <Link to={"#"} className="forgot">Forgot Password?</Link> </div>
                          </div>
                          <div className="line4">
                              <button>Login</button>
                          </div>
                      </form>
                  </div>
                  <div className="boxb">
                      <div className="logo"></div>
                      <div className="line1">
                          <h3>Login</h3>
                          <p>Welcome back</p>
                      </div>
                  </div>
              </div>
              <div className="row3">
                  <div className="boxa">
                      <span>© {new Date().toDateString().split(' ')[3]} Bluetup HQ limited</span>
                  </div>
                  <div className="boxb">
                      <div className="logo"></div>
                  </div>
              </div>
              
          </div>
    </div>
  )
}

export default Login