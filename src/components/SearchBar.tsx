// SearchBar.js
import DropDown from "./ui/DropDown";

function SearchBar() {
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
    { value: "Remote", label: "Remote" },
    { value: "Hybrid", label: "Hybrid" },
    { value: "In-office", label: "In-office" },

  ];

  const salaryOptions = [
    { value: "0L", label: "0L" },
    { value: "10L", label: "10L" },
    { value: "20L", label: "20L" },
    { value: "30L", label: "30L" },
    { value: "40L", label: "40L" },
    { value: "50L", label: "50L" },
    { value: "60L", label: "60L" },
    { value: "70L", label: "70L" },
  ];

  return (
    <div className="m-8">
      <div className="flex flex-wrap space-x-3 justify-start">
        <DropDown placeholder="Roles" options={rolesOptions} />
        <DropDown
          placeholder="Number Of Employees"
          options={employeesOptions}
        />
        <DropDown placeholder="Experience" options={experienceOptions} />
        <DropDown placeholder="Remote" options={remoteOptions} />
        <DropDown
          placeholder="Minimum Base Pay Salary"
          options={salaryOptions}
        />
      </div>
    </div>
  );
}

export default SearchBar;
