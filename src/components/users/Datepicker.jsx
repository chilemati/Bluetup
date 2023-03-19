import { startOfYear } from 'date-fns'
import React, { useState } from 'react'
import DatePicker from 'react-multi-date-picker'
import InputIcon from "react-multi-date-picker/components/input_icon"
import weekends from "react-multi-date-picker/plugins/highlight_weekends"
// import {addMonths} from 'react-datepicker'
const Datepicker = () => {
    const [startDate, setStartDate] = useState(new Date().setYear(2021));
  return (
    <DatePicker
    //   showIcon
      selected={startDate}
      onChange={(date) => setStartDate(date)}
      placeholder='Any Date'
    //   minDate='2021/012/31'
    //     maxDate='2032/12/31'
    minDate={new Date().setFullYear(2021)}
  maxDate={new Date().setFullYear(2032)}
        closeOnScroll={false}
        startDate={startDate}
        showWeekNumbers={true}
        hideOnScroll 
        render={<InputIcon/>}
      plugins={[weekends([5, 6])]} 
      
    />
  )
}

export default Datepicker
