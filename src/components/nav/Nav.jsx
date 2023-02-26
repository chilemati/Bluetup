import React, { useState } from 'react'
import { Accordion, Card, Col, Container, Row } from 'react-bootstrap'
import CustomToggle from './CustomToggle'
import { navList } from './navList'
import {AiOutlineDown} from 'react-icons/ai'
import Navbars from './Navbar'
import { Link } from 'react-router-dom'
import { svgs } from './svgIcons'
const Navv = () => {
    let [nav,setNav] = useState(navList);
    let [show,setShow] = useState('d-sm-none d-md-flex');
    function handleActive(id) {
        let notActive = navList.map(item=>  {
            if(item.id === id) {
                item.active = 'active';
                
            }else{
                delete item.active;
            }

            if(item.body){
                item.body.map((l,i)=>{
                      delete  l.active;
                })
            }
            return item;
        });
        setNav(notActive);
        setShow('d-sm-none d-md-flex');
       }

       function handleShow() {
        setShow('d-sm-flex d-md-none');
       }

       function handleDrop(id) {
           let upd = nav.map(drop=> {
                if(drop.body){
                    drop.body.map((l,i)=>{
                        if(id === i) {
                            l.active='act';
                        }else{
                            delete l.active;
                        }
                    })
                }
                return drop;
            })
            // console.log(upd);
            setNav(upd);
       }
    
  return (
    <Container fluid className='nav mx-0 px-0' >
                    {/* <Navbars className='logo' /> */}
                    
                <Accordion defaultActiveKey="0">
                                
        {
            nav.map(item=> {
                return (
                <Card key={item.id} className={'d-none d-md-flex nav-card'}>
                    <Link to={!item.body?item.href:'#'}>
                    <Card.Header onClick={(e)=> handleActive(item.id)} 
                    className={item.active} id='inline' >
                    <CustomToggle eventKey={item.id}  >
                        {/* <div id="inline"> */}
                        <span className='left'>{item.icon1}</span>
                        <span className='middle'>{item.text}</span>
                        {!item.icon2 && <span className='d-none'></span>}
                        {item.icon2 && <span className='right'>{item.active?svgs.next270:item.icon2}</span>}

                        {/* </div> */}
                    </CustomToggle>
                    </Card.Header>
                    
                    </Link>

                    <Accordion.Collapse eventKey={item.id} className={item.hide}>
                    <Card.Body>{item.body && 
                      item.body.map((list,i)=> {
                        return (
                            <div key={i} className='ms-5' >
                                <Link className={list.active} onClick={()=> handleDrop(i)}  to={list.href}>{list.text}</Link>
                            </div>
                        )
                      })
                    }</Card.Body>
                    </Accordion.Collapse>
                </Card>
                
                
                )
            })
        }
        <div className="space d-none d-md-flex"></div>
    </Accordion>
    </Container>
  )
}

export default Navv