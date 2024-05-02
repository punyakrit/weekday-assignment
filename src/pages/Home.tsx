import { useEffect, useState } from "react";
import SearchBar from "../components/SearchBar";
import axios from "axios";
import Card from "../components/ui/Card";

function Home() {
  const [data, setData] = useState<any[]>([]);
  const [loading, setLoading] = useState(false);
  const [page, setPage] = useState(1);
  const [hasMore, setHasMore] = useState(true);
  const [selectedRole, setSelectedRole] = useState("");
  const [minExp, setMinExp] = useState("");
  const [minBasePay, setMinBasePay] = useState("");
  const [work, setWork] = useState("");
  const [companyName, setCompanyName] = useState("");

  const handleWork = (work: any) => {
    setWork(work);
  };

  const handleBasePayChange = (minBasePay: any) => {
    setMinBasePay(minBasePay);
  };

  const handleRoleChange = (selectedRole: any) => {
    // Update the selected role state
    setSelectedRole(selectedRole);
  };

  const handleExpChange = (minExp: any) => {
    setMinExp(minExp);
  };

  const handleCompanyNameChange = (value: string) => {
    // Receive input value from SearchBar
    setCompanyName(value);
  };

  // Array of company names
  const companyNames = ["Amazon", "Google", "Meta", "WeekDay", "Netflix"];

  useEffect(() => {
    loadData();
  }, []);

  useEffect(() => {
    const handleScroll = () => {
      if (
        window.innerHeight + document.documentElement.scrollTop ===
          document.documentElement.offsetHeight &&
        !loading &&
        hasMore
      ) {
        loadData();
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [loading, hasMore]);

  const loadData = () => {
    setLoading(true);
    axios
      .post(`https://api.weekday.technology/adhoc/getSampleJdJSON`, {
        limit: 10,
        offset: (page - 1) * 10,
      })
      .then((res) => {
        setData((prevData) => [...prevData, ...res.data.jdList]);
        setLoading(false);
        setPage((prevPage) => prevPage + 1);
        setHasMore(res.data.jdList.length > 0);
      })
      .catch((error) => {
        console.error("Error fetching data:", error);
        setLoading(false);
      });
  };

  // Filtered data based on search criteria
  const filteredData = data
    .filter((job) => {
      if (work.includes("remote")) {
        return job.location === "remote";
      } else if (work.includes("Hybrid")) {
        return true;
      } else if (work.includes("In-office")) {
        return job.location !== "remote";
      } else {
        return work.length === 0 || work.includes(job.location);
      }
    })
    .filter(
      (job) =>
        selectedRole.length == 0 || selectedRole.includes(job.jobRole)
    )
    .filter(
      (job) => minExp.length == 0 || parseInt(minExp) <= parseInt(job.minExp)
    )
    .filter(
      (job) =>
        minBasePay.length == 0 ||
        parseInt(minBasePay) <= parseInt(job.maxJdSalary)
    )
    // .filter((job) => {
    //   if (companyName !== "") {
    //     return companyNames.some((name) =>
    //       job.nameC &&
    //       job.nameC.toLowerCase().includes(name.toLowerCase())
    //     );
    //   }
    //   return true;
    // });

  return (
    <div className="h-full w-full ">
      {/* Searchbar component */}
      <SearchBar
        onRoleChange={handleRoleChange}
        onExpChange={handleExpChange}
        onBasePay={handleBasePayChange}
        onWork={handleWork}
        onCompanyNameChange={handleCompanyNameChange}
      />
      <div className="text-xl px-8">
        Total jobs:<span className="font-medium">{filteredData.length}</span> 
      </div>
      <div className="flex flex-wrap px-4 2xl:px-[400px] pt-10">
        {/* Mapping over filtered data */}
        {filteredData.map((job, index) => (
          <Card
            key={index}
            nameC={companyNames[index % companyNames.length]} // Use companyNames array cyclically
            role={job.jobRole}
            location={job.location}
            salary={job.maxJdSalary}
            details={job.jobDetailsFromCompany}
            link={job.jdLink}
            expYear={job.minExp}
          />
        ))}
      </div>

      {loading && <div>Loading...</div>}
      {!loading && !hasMore && <div>No more data</div>}
    </div>
  );
}

export default Home;
