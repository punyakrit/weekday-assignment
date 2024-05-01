import { useEffect, useState } from "react";
import SearchBar from "../components/SearchBar";
import axios from "axios";

function Home() {
  const [data, setData] = useState("");
  useEffect(() => {
    axios
      .post("https://api.weekday.technology/adhoc/getSampleJdJSON", {
        limit: 1,
        offset: 0,
      })
      .then((res) => setData(res.data.jdList));
  }, []);
  console.log(data);
  return (
    <div className="h-full ">
      <SearchBar />

      {JSON.stringify(data)}
    </div>
  );
}

export default Home;
