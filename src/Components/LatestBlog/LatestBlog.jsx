import { useEffect, useState } from "react";
import "./styles.css";
import LatestDetails from "../LatestDetails/LatestDetails";


const LatestBlog = () => {
    const [latest, setLatest] = useState([]);
  useEffect(() => {
    fetch("./latestBlog.json")
      .then((res) => res.json())
      .then((data) => {
        setLatest(data);
      });
  }, []);
  return (
    <div style={{ padding: "4px" }}>
      <h2 className="blog-title">Latest Blog</h2>
      <hr className="line" />
      <div>
        {
            latest.map(latests=><LatestDetails
            key={latests.id}
            latests={latests}
            ></LatestDetails>)
        }
      </div>
    </div>
  );
};

export default LatestBlog;
