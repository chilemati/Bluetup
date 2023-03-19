import React, { useState } from "react";
import { useEffect } from "react";
import Select, { components } from "react-select";
import { svgs } from "../nav/svgIcons";


const Placeholder = props => {
//   return <components.Placeholder {...props} />;
};



function NumberSelectIcon({opt,icon,state,setState,reset,setReset,setShowing,showing,setShow}) {
  let [selectedOption, setSelectedOption] = useState(opt[0]);
  
  const CaretDownIcon = () => {
    return icon;
  };
  const DropdownIndicator = props => {
    return (
      <components.DropdownIndicator {...props}>
        <CaretDownIcon />
      </components.DropdownIndicator>
    );
  };
  function handleDate(e) {
    let role = ['anyRole', 'admin', 'user'];
    let status = ['anyStatus', 'new', 'active', 'verified'];
    let show = ['10', '20', '30'];
        let upt;
        let upd = opt.map(sele=> {
            if(sele.value === e.value) {
                upt=sele;
            }
        })
      setSelectedOption(upt);
      // console.log(upt);
      if (role.includes(upt.value)) {
            setState(Object.assign(state, { role: e.value }));
          }
          if (status.includes(upt.value)) {
            setState(Object.assign(state, { status: e.value }));
          }
          if (show.includes(upt.value)) {
            // console.log('first');
            setShowing(upt.value);
            setShow({
              start: 0,
              end: upt.value,
            })
          } 
    
        //get data from server using axios
      }
      // console.log(showing);
  useEffect(() => {
    if (reset) {
      setSelectedOption(opt[0]);
    }
  }, [reset,]);
  return (
    <div  className='dash-select'>
      <Select
        closeMenuOnSelect={true}
        components={{ Placeholder, DropdownIndicator }}
        onChange={(e) => {
          handleDate(e);
          // console.log(e.value);
          
        }}
        value={selectedOption}
        options={opt}
      />
    </div>
  );
}

export default NumberSelectIcon


