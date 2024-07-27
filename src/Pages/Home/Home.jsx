import { useEffect, useState } from "react";
import "./styles.css";
import Header from "../../Components/Header/Header";
import SearchBar from "../../Components/SearchBar/SearchBar";
import EmptyList from "../../Components/Shared/EmptyList/EmptyList";
import BlogLIst from "../../Components/BlogList/BlogLIst";
import Sidebar from "../../Components/Sidebar/Sidebar";

const Home = () => {
  const [blogs, setBlogs] = useState([]);
  const [searchKey, setSearchKey] = useState("");
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/posts")
      .then((res) => res.json())
      .then((data) => {
        setBlogs(data);
        setLoading(false);
      });
  }, []);
  console.log(blogs);

  // Search submit
  const handleSearchBar = (e) => {
    e.preventDefault();
    handleSearchResults();
  };

  // Search for blog by title
  const handleSearchResults = () => {
    // const allBlogs = blogs;
    const filteredBlogs = blogs.filter((blog) =>
      blog.title.toLowerCase().includes(searchKey.toLowerCase().trim())
    );
    setBlogs(filteredBlogs);
    console.log(filteredBlogs);
  };

  // Clear search and show all blogs
  const handleClearSearch = () => {
    // setBlogs(blogs);
    setSearchKey("");
    fetch("https://jsonplaceholder.typicode.com/posts")
      .then((res) => res.json())
      .then((data) => {
        setBlogs(data);
        setLoading(false);
      });
  };
  return (
    <div>
      <Header></Header>

      {/* Search Bar */}
      <SearchBar
        value={searchKey}
        clearSearch={handleClearSearch}
        formSubmit={handleSearchBar}
        handleSearchKey={(e) => setSearchKey(e.target.value)}
      />

      <div style={{ maxWidth: "1280px", margin: "0 auto" }}>
        {/* Blog List & Empty View */}
        <div className="box">
        {loading ? (
          <div className="loading">Loading...</div>
        ) : (
          <>
          <div className="blogs">
            {blogs.length === 0 ? (
              <EmptyList />
            ) : (
              <>
                {blogs.map((blog) => (
                  <BlogLIst key={blog.id} blog={blog} />
                ))}
              </>
            )}
          </div>
          <div className="sidebar"><Sidebar></Sidebar></div>
          </>
        )}
        </div>
      </div>

      {/* {!blogs.length ? <EmptyList /> : <BlogLIst blogs={blogs} />}
       */}
    </div>
  );
};

export default Home;
