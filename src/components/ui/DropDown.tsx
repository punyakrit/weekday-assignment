import { useState } from "react"
import Select from "react-select"

function DropDown({placeholder, options}:any) {
    
    const [value , setValue ] = useState(null)
  return (
    <div className="min-w-min">
      <Select
      className="min-w-44"
      options={options}
      defaultValue={value}
      placeholder={placeholder}
      onChange={()=>{setValue}}
      isMulti
      isSearchable

      >
      </Select>
    </div>
  )
}



export default DropDown

