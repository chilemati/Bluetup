import React, { useState } from 'react'
import './togglebutton.scss';
const ToggleButton = ({setState, init,offParent,offChild, onParent,onChild}) => {
    let [toggleState, setTogglestate] = useState(init);
    let [clicks, setClicks] = useState(toggleState? 1 : 0);
    let [parent, setParent] = useState(offParent);
    let [child, setChild] = useState(offChild);
  

    function handleToggle() {
        setClicks(clicks += 1);
        if (clicks % 2 === 1) {
            setTogglestate(toggleState);
            setChild({...onChild});
            setParent({ ...onParent });
            setState(toggleState);
        }
        if (clicks % 2 === 0) {
            setTogglestate(!toggleState);
            setChild({...offChild});
            setParent({ ...offParent });
            setState(toggleState);
        }
       

    }
  return (
      <div>
          <button className="toggle"
              style={parent}
              onClick={(e) => handleToggle()}>
                      <span style={child}  className="cir"></span>
          </button>
    </div>
  )
}

export default ToggleButton