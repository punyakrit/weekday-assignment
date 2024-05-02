import { useEffect, useState } from "react";
import SearchBar from "../components/SearchBar";
import axios from "axios";
import Card from "../components/ui/Card";

function Home() {
  const [data, setData] = useState<any[]>([]);
  const [loading, setLoading] = useState(false);
  const [page, setPage] = useState(1);
  const [hasMore, setHasMore] = useState(true);

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
  // console.log(data)

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

      {loading && <div>Loading...</div>}
      {!loading && !hasMore && <div>No more data</div>}
    </div>
  );
}

export default Home;
