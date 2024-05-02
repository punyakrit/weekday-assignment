// SearchBar.js
import DropDown from "./ui/DropDown";

function SearchBar({ onRoleChange, onExpChange, onBasePay, onWork }: any) {

  const handleBasePayChange = (selectedBasePay: any) => {
    onBasePay(selectedBasePay.map((role: { value: any }) => role.value));
  };

  const handleWork = (selectWork: any) => {
    onWork(selectWork.map((role: { value: any }) => role.value));
  };

  const handleFilterChange = (filters: any) => {
    console.log(filters.value);
  };
  const handleRoleChange = (selectedRole: any) => {
    onRoleChange(selectedRole.map((role: { value: any }) => role.value));
    // Access the value property directly
  };
  const handleExpChange = (selectedExp: any) => {
    onExpChange(selectedExp.map((role: { value: any }) => role.value));
  };

  // const handleCompanyNameChange = (event: { target: { value: any; }; }) => {
  //   const { value } = event.target;
  //   setCompanyName(value);
  //   onCompanyNameChange(value);
  // };
  // Define options for each dropdown
  const rolesOptions = [
    { value: "tech lead", label: "tech lead" },
    { value: "frontend", label: "frontend" },
    { value: "ios", label: "ios" },
    { value: "backend", label: "backend" },
    { value: "android", label: "android" },
  ];

  const employeesOptions = [
    { value: "1-10", label: "1-10" },
    { value: "11-20", label: "11-20" },
    { value: "21-50", label: "21-50" },
    { value: "51-100", label: "51-100" },
    { value: "101-200", label: "101-200" },
    { value: "201-500", label: "201-500" },
    { value: "500+", label: "500+" },
  ];

  const experienceOptions = [
    { value: "1", label: "1" },
    { value: "2", label: "2" },
    { value: "3", label: "3" },
    { value: "4", label: "4" },
    { value: "5", label: "5" },
    { value: "6", label: "6" },
    { value: "7", label: "7" },
    { value: "8", label: "8" },
    { value: "9", label: "9" },
    { value: "10", label: "10" },
  ];

  const remoteOptions = [
    { value: "remote", label: "Remote" },
    { value: "Hybrid", label: "Hybrid" },
    { value: "In-office", label: "In-office" },
  ];

  const salaryOptions = [
    { value: "0", label: "0L" },
    { value: "10", label: "10L" },
    { value: "20", label: "20L" },
    { value: "30", label: "30L" },
    { value: "40", label: "40L" },
    { value: "50", label: "50L" },
    { value: "60", label: "60L" },
    { value: "70", label: "70L" },
  ];
  return (
    <div className="m-8">
      <div className="flex flex-wrap md:space-x-3 space-y-2 md:space-y-0 justify-start">
        <DropDown
          placeholder="Roles"
          options={rolesOptions}
          onFilterChange={handleRoleChange}
        />
        <DropDown
          placeholder="Number Of Employees"
          options={employeesOptions}
          onFilterChange={handleFilterChange}
        />
        <DropDown
          placeholder="Experience"
          options={experienceOptions}
          onFilterChange={handleExpChange}
        />
        <DropDown
          placeholder="Remote"
          options={remoteOptions}
          onFilterChange={handleWork}
        />
        <DropDown
          placeholder="Minimum Base Pay Salary"
          onFilterChange={handleBasePayChange}
          options={salaryOptions}
        />
      </div>
      <div className="flex flex-col">
        Company Name
        <input
          // onChange={handleCompanyNameChange}
          placeholder="Search Company Name"
          className="border w-min border-gray-300 text-md p-1 rounded-md"
        ></input>
      </div>
    </div>
  );
}

export default SearchBar;
