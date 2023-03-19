import React, { useState } from "react";
import Select, { components } from "react-select";
import { svgs } from "../nav/svgIcons";

const colourOptions = [
  {
    label: "March 2021",
    value: "march",
    selected: true
  },
  {
    label: "April 2021",
    value: "april"
  },
  {
    label: "May 2021",
    value: "may"
  }
];

const Placeholder = props => {
//   return <components.Placeholder {...props} />;
};

const CaretDownIcon = () => {
  return svgs.dropdown;
};

const DropdownIndicator = props => {
  return (
    <components.DropdownIndicator {...props}>
      <CaretDownIcon />
    </components.DropdownIndicator>
  );
};

function SelectIcon() {
    let [selectedOption,setSelectedOption] = useState(colourOptions[0]);
    function handleDate(e) {
        let upt;
        let upd = colourOptions.map(sele=> {
            if(sele.value === e.value) {
                upt=sele;
            }
        })
        setSelectedOption(upt);
        //get data from server using axios
      }
  return (
    <div  className='dash-select'>
      <Select
        closeMenuOnSelect={true}
        components={{ Placeholder, DropdownIndicator }}
        onChange={(e)=> handleDate(e)}
        // onChange={e => {
        //     this.setState({
        //     department: e.label,
        //     deptId: e.value
        //     });
        //  }}
        value={selectedOption}
        // placeholder={"This Month"}
        // styles={{
        //   placeholder: base => ({
        //     ...base,
        //     // fontFamily: 'Lato',
        //     // fontStyle: 'normal',
        //     // fontWeight: 400,
        //     // fontSize: '18px',
        //     // lineHeight: '22px',
        //     // color: '#303972',
        //   })
        // }}
        options={colourOptions}
      />
    </div>
  );
}

export default SelectIcon


