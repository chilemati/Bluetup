import React from 'react'
import './App.scss';
import { Col, Container, Row } from 'react-bootstrap';
import OffcanvasExample from './components/nav/Navcanvas';
import { Route, Routes } from 'react-router-dom';
import Dashbaord from './components/dashboard/Dashboard'
import All from './components/users/All';
import New from './components/users/New';
import Verifications from './components/users/Verifications';
import Inactive from './components/users/Inactive';
import Alltrans from './components/transactions/Alltrans';
import Witdrawals from './components/transactions/Witdrawals';
import Deposites from './components/transactions/Deposites';
import Pending from './components/transactions/Pending';
import Errors from './components/error/Error';
import WalletOverview from './components/wallets/WalletOverview';
import Bluevault from './components/wallets/Bluevault';
import Tupdollar from './components/wallets/Tupdollar';
import Flexynaira from './components/wallets/Flexynaira';
import SCOverview from './components/saving_challanges/SCOverview';
import SC_challange from './components/saving_challanges/SC_challange';
import SC_allsavers from './components/saving_challanges/SC_allsavers';
import Login from './components/Login/Login';
import { useState } from 'react';
import Newsavingcha from './components/saving_challanges/Newsavingcha';
const App = () => {
	let [isLoggedIn, setIsLoggedIn] = useState(false);
  return (
	  <Container fluid className='mx-0 px-0 app'>
		  {
			  isLoggedIn && 
		<Row>
			<Col  xs={12} md={3}  lg={3} className='mx-0 px-0 nav-width' >
			<OffcanvasExample />
			</Col>
			<Col  xs={12} md={9} lg={9} className='mx-0 px-0'>
				<Routes>
					<Route path='/' element={<Login />} />
					<Route path='/dashbaord' element={<Dashbaord />} />
					<Route path='/all' element={<All />} />
					<Route path='/new' element={<New />} />
					<Route path='/verifications' element={<Verifications />} />
					<Route path='/inactive' element={<Inactive />} />
					<Route path='/alltrans' element={<Alltrans />} />
					<Route path='/deposites' element={<Deposites />} />
					<Route path='/pending' element={<Pending />} />
					<Route path='/witdrawals' element={<Witdrawals />} />
					<Route path='/walletoverview' element={<WalletOverview />} />
					<Route path='/bluevault' element={<Bluevault />} />
					<Route path='/tupdollar' element={<Tupdollar />} />
					<Route path='/flexynaira' element={<Flexynaira />} />
					<Route path='/SC_overview' element={<SCOverview />} />
					<Route path='/SC_challange' element={<SC_challange />} />
					<Route path='/SC_allsavers' element={<SC_allsavers />} />
					<Route path='/SC_addChallange' element={<Newsavingcha />} />
					<Route path='*' element={<Errors />} />
				</Routes>
			</Col>
		</Row>
		  }

		  {
			  !isLoggedIn && 
			  <Login setIsLoggedIn={setIsLoggedIn} />
		  }
		
	</Container>
  )
}

export default App