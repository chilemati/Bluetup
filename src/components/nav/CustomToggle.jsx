import React from 'react'
import Accordion from 'react-bootstrap/Accordion';
import { useAccordionButton } from 'react-bootstrap/AccordionButton';
import Card from 'react-bootstrap/Card';

const CustomToggle=({ children, eventKey })=> {
  const decoratedOnClick = useAccordionButton(eventKey, () =>
   false && console.log('totally custom!'),
    
  );
  function handleActive(e) {
    // console.log(e.target.parentElement.parentElement.nextElementSibling.classList);
    let show = e.target.parentElement.parentElement.nextElementSibling.classList;
    show = Array.from(show);
    // console.log(show);
    if(show.includes('show')) {
      console.log(true);
    }
}

  return (
    <div
      type="button"
      // style={{ backgroundColor: 'pink' }}
      onClick={decoratedOnClick}
      
    >
      {children}
    </div>
  );
}

export default CustomToggle