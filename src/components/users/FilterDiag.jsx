import React from 'react'

const FilterDiag = ({toggle,setToggle, handleSubmit}) => {
    // function handleSubmit(e) {
    //     e.preventDefault(e);
    //     setToggle('none');
    // }
  return (
    <div style={{display: toggle}} className="filter-diag">
        <form onSubmit={(e)=> handleSubmit(e)}>
            <button>filter</button>
        </form>
    </div>
  )
}

export default FilterDiag