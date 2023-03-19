
import React, { useState } from 'react'
import DatePicker from "react-datepicker";
import { getMonth, getYear } from 'date-fns';
import range from "lodash/range";
import "react-datepicker/dist/react-datepicker.css";
import { svgs } from '../nav/svgIcons';
import { useEffect } from 'react';


const ReactDatepickers = ({state,setState,reset,setReset}) => {
  const [startDate, setStartDate] = useState(null);
  const years = range(2021, getYear(new Date().setFullYear(2032)) + 1, 1);
  useEffect(() => {
    setStartDate(null);
    if (reset) {
      setTimeout(() => {
        setReset(false);
      }, 1000);
    }
    
  },[reset])

    const months = [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December",
  ];
  
  return (
    <DatePicker 
      renderCustomHeader={({
        date,
        changeYear,
        changeMonth,
        decreaseMonth,
        increaseMonth,
        prevMonthButtonDisabled,
        nextMonthButtonDisabled
      }) => (
        <div
          style={{
            // margin: 10,
            display: "flex",
            justifyContent: "space-between",
            alignContent: 'center',
            alignItems: 'center',
            
          }}
          className='date-diag'
        >
          <div className="boxOne">
            
          <select
            value={months[getMonth(date)]}
              onChange={
                ({ target: { value } }) => {
                  changeMonth(months.indexOf(value));
              
                }}
              className='monthSelect'
              
          >
            {months.map(option => (
              <option key={option} value={option}>
                {option}
              </option>
            ))}
          </select>
           <select
            value={getYear(date)}
            onChange={({ target: { value } }) => changeYear(value)}
            className='iconToYear'
          >
            {years.map((option) => (
              <option key={option} value={option}>
                {option}
              </option>
            ))}
          </select>
        
          </div>
          <div className="boxTwo">
              <button onClick={decreaseMonth} disabled={prevMonthButtonDisabled}>
            {svgs.lt}
          </button>
          <button onClick={increaseMonth} disabled={nextMonthButtonDisabled}>
            {svgs.gt}
          </button>

          </div>
        </div>
      )}
      selected={startDate}
      onChange={date => {
        setStartDate(date);
        setState(Object.assign(state, { date: date }));

      }}
      withPortal
      // showWeekNumbers
      fixedHeight
      useWeekdaysShort={true}
      placeholderText='Any Date'
      
    />
  );
}

export default ReactDatepickers