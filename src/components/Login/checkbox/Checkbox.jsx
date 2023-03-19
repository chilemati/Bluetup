import React from 'react'
import { useState } from 'react';
import './checkbox.scss';
const Checkbox = ({boxCss,checkedIcon,checkeState,setCheckedState}) => {
    let [checked, setChecked] = useState(checkeState);
  return (
      <div className="checkbox">
          <span
              className={`check ${boxCss}`}
              onClick={(e) => {
                  setChecked(!checked);
                  setCheckedState(!checked);
                 
              }}
          >
              <span className="icon">
                  {
                      checked &&  checkedIcon
                  }
                  </span>
              </span>
    </div>
  )
}

export default Checkbox