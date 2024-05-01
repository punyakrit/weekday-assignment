import logo from "../../assets/logo.webp";

//  determining user salary range
function formatSalaryRange(salary: number): string {
  if (salary > 100) {
    return "1+ CR";
  } else {
    const min = Math.floor(salary / 10) * 10;
    const max = min + 10;
    return `${min} to ${max} LPA`;
  }
}

function Card({ role, location, salary, details, link, expYear }: any) {
  const formattedSalary = formatSalaryRange(salary);

  return (
    <div className="w-full md:w-1/3 p-4">
      <div className="border rounded-3xl p-6 shadow-md ">
        <div className="border w-max shadow-md p-2 text-xs rounded-full">
          ⏳ Posted 10 days ago
        </div>
        <div className="my-4 flex">
          <div>
            <img src={logo} className="w-10 rounded-full" alt="Company Logo" />
          </div>
          <div className="ml-3">
            <div className="text-gray-500 text-sm">WeekDay</div>
            <div>{role}</div>
            <div className="text-xs">{location}</div>
          </div>
        </div>
        <div className="text-sm text-gray-600 font-extralight">
          Estimated Salary:{" "}
          <span className="font-medium">₹{formattedSalary}</span> ✅
        </div>
        <div>About Company:</div>
        <div className="font-bold text-sm">About us</div>
        <div>
          <div className="text-sm font-extralight  ">
            {details.slice(0, details.length / 2)}
            <div className="blur-sm select-none">
            {details.slice(details.length/1.2)}
            </div>
          </div>
          <a href={link} target="_blank" className="">
            <div className="flex justify-center z-30 -mt-2 text-[#4943db] cursor-pointer">
              View Job
            </div>
          </a>
        </div>
        <div className="text-sm font-medium pt-4 text-gray-500">
          Minimum Experience
        </div>
        <div>{expYear}</div>
      </div>
    </div>
  );
}

export default Card;
