import { useEffect, useState } from "react";
import SearchBar from "../components/SearchBar";
import axios from "axios";
import Card from "../components/ui/Card";
import { RotateCcwIcon } from "lucide-react";


function Home() {
  
  const [show, setShow] = useState(10)
  const [data, setData] = useState<any[]>([]);
  useEffect(() => {
    axios
      .post("https://api.weekday.technology/adhoc/getSampleJdJSON", {
        limit: show,
        offset: 0,
      })
      .then((res) => setData(res.data.jdList));
  }, [show]);
  console.log(data);

  function handleIncrease(){
    setShow(show+10)
  }

 

  return (
    <div className="h-full w-full ">
      {/* Searchbar component */}
      <SearchBar />
      <div className="flex flex-wrap px-4 pt-10">
        {/* Mapping over api data */}
        {data.map((job, index) => (
          <Card
            key={index}
            role={job.jobRole}
            location={job.location}
            salary={job.maxJdSalary}
            details={job.jobDetailsFromCompany}
            link={job.jdLink}
            expYear={job.minExp || 0}
          />
        ))}
      </div>

      <div onClick={handleIncrease} className="flex items-center justify-center font-bold cursor-pointer text-xl py-4 mb-8">
        <RotateCcwIcon className="mr-4" /> Load More
      </div>
    </div>
  );
}

export default Home;
