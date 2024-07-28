/* eslint-disable react/prop-types */
import { useEffect, useState } from "react";
import "./styles.css";
import LatestDetails from "../LatestDetails/LatestDetails";
import { useMyContext } from "../../Pages/ContextBlog/ContextBLog";

const LatestBlog = () => {
  const [latest, setLatest] = useState([]);
  // context api latest blog
  const { latestBlog, setLatestBlog } = useMyContext();

  const handleRemoveItem = (itemId) => {
    setLatestBlog(latest.filter((item) => item.id !== itemId));
  };

  useEffect(() => {
    fetch("./latestBlog.json")
      .then((res) => res.json())
      .then((data) => {
        setLatest(data);
      });
  }, []);
   
  const onRemoveItem = (itemId) => {
    setLatest(latest.filter((item) => item.id !== itemId));
  };
  console.log(latest);
  console.log(latestBlog);
  return (
    <div style={{ padding: "4px" }}>
      <h2 className="blog-title">Latest Blog</h2>
      <hr className="line" />
      <div>
        <>
          {latestBlog.map((latest) => (
            <>
              <div style={{ padding: "10px", marginBottom: "5px"}}>
                <h3>{latest.title}</h3>
                <p className="body">
                  {latest.body.length > 50 ? (
                    <p>
                      {latest.body.slice(0, 50)} <span> ...</span>
                    </p>
                  ) : (
                    <p>{latest.body}</p>
                  )}
                </p>
                <p>publish:{latest.date}</p>
                <button className="btn" onClick={() => handleRemoveItem(latest.id)}>Remove</button>
                <hr />
              </div>
            </>
          ))}
        </>

        {latest.map((latests) => (
          <LatestDetails key={latests.id} latests={latests} onRemoveItem={onRemoveItem}></LatestDetails>
        ))}
      </div>
    </div>
  );
};

export default LatestBlog;
