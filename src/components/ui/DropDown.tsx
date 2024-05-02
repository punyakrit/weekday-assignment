import  { SetStateAction, useState } from "react";
import Select from "react-select";

function DropDown({ placeholder, options, onFilterChange }: any) {
    const [value, setValue] = useState(null);

    const handleFilterChange = (selectedOption: SetStateAction<null>) => {
      setValue(selectedOption);
      onFilterChange(selectedOption);
    };
    
  return (
    <div className="min-w-min">
      <Select
        className="min-w-44"
        options={options}
        defaultValue={value}
        placeholder={placeholder}
        //@ts-ignore
        onChange={handleFilterChange}
        isMulti
        isSearchable
      />
    </div>
  );
}

export default DropDown;
