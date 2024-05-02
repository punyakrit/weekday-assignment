import { Zap } from "lucide-react";
import logo from "../../assets/logo.webp";
import p1 from "../../assets/p1.jpg";
import p2 from "../../assets/p2.jpeg";

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

function Card({ role, location, salary, details, link, expYear, nameC }: any) {
  const formattedSalary = formatSalaryRange(salary);
  const daysAgo = Math.floor(Math.random() * 10) + 1;

  return (
    <div className="w-full md:w-1/2 lg:w-1/3 md:p-4 py-2">
      <div className="border rounded-3xl hover:scale-105 transform duration-500 p-6 shadow-md ">
        <div className="border w-max shadow-md p-2 text-xs rounded-full">
          ⏳ Posted {daysAgo} days ago
        </div>
        <div className="my-4 flex">
          <div>
            <img src={logo} className="w-10 rounded-full" alt="Company Logo" />
          </div>
          <div className="ml-3">
            <div className="text-gray-500 text-sm">{nameC}</div>
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
              {details.slice(details.length / 1.2)}
            </div>
          </div>
          <a href={link} target="_blank" className="">
            <div className="flex justify-center z-30 -mt-2 text-[#4943db] cursor-pointer">
              View Job
            </div>
          </a>
        </div>
        <div>
          {expYear !== null ? (
            <div>
              <div className="text-sm font-medium pt-4 text-gray-500">
                Minimum Experience
              </div>
              <div>{expYear}</div>
            </div>
          ) : (
            <div></div>
          )}
        </div>
        <a href={link} target="_blank">
          <div className="flex items-center  bg-[#54efc3] justify-center font-medium text-xl py-3 mt-3 rounded-xl">
            <Zap className="text-yellow-500 mr-3" /> Easy Apply
          </div>
        </a>

        <div className="flex cursor-pointer items-center text-white  bg-[#4943db] justify-center font-light text-xl py-3 mt-3 rounded-xl">
          <img
            src={p1}
            className="w-8 rounded-full h-8 object-cover mr-3 blur-sm"
          ></img>
          <img
            src={p2}
            className="w-8 rounded-full h-8 object-cover mr-3 blur-sm"
          ></img>
          Unlock referral ask
        </div>
      </div>
    </div>
  );
}

export default Card;
