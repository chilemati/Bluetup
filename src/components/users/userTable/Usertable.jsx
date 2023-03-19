import React from 'react';
import './usertable.scss';
import { Col, Container, Row } from 'react-bootstrap';

const Usertable = ({ header, array, cols, toShow, showing, setDetails, setInfo }) => {
  function handleInfo(each) {
    setDetails(true);
    setInfo(each);
   }
  return (
      <Container fluid className='userTable'>
           <Row>
        <Col className='.table' >
          <table>
          <tr className="header">
            {
              header.map(each=> {
                return (
                  <td className={each.style} key={each.id}> {each.item} </td>

                )
              })
            }

            </tr>
           
              {
              
                array.filter((max, i) => i >= showing.start && i < showing.end).map(user => {
                  return (
                    <tr className="list">
                       {
              toShow.map((each, i) => {
                if (each.col === 2) {
                  return (
                    <td className={`${each.icon} item${i + 1}`} key={i}
                       onClick={(e)=> (each.icon.includes('last')) && handleInfo(user) }>
                <span className={`icon`}>  </span>
                      <span onClick={(e)=> (each.icon.includes('last')) && handleInfo(user) } className={`text text${i+1} ${each.icon}`}> {user[each.item]}</span> </td> 

                  )
                } else {
                  return (
                    <td onClick={(e)=> (each.icon.includes('last')) && handleInfo(user) } className={`text text${i+1} ${each.icon}`} key={i}> {user[each.item]} {user.id}  </td>

                  )
                }
              })
             }
                    </tr>
                )
              })
              /* {
                      array.filter((max,i)=> i>= 0 && i< showing.val).map(user => {
        return (
            {
              toShow.map((each, i) => {
                if (each.col === 2) {
                  return (
                    <div className={`${each.icon} item${i + 1}`} key={i}
                       onClick={(e)=> (each.icon.includes('last')) && handleInfo(user) }>
                <span className={`icon`}>  </span>
                      <span className={`text text${i+1} ${each.icon}`}> {user[each.item]} </span> </div> 

                  )
                } else {
                  return (
                    <span className={`text text${i+1} ${each.icon}`} key={i}> {user[each.item]} </span>

                  )
                }
              })
             }

                
        )
    })
                } */}
           
              
          </table>
           </Col>
          </Row>
  </Container>
  )
}

export default Usertable