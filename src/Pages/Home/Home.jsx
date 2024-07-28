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
  const [currentPage, setCurrentPage] = useState(1);
  const [itemsPerPage, setItemsParPage] = useState(10);
  const count = 100;

  const numberOfPages = Math.ceil(count / itemsPerPage);

  const pages = [...Array(numberOfPages).keys()];
  const handleItemPerPage = (e) => {
    const val = parseInt(e.target.value);
    setItemsParPage(val);
    setCurrentPage(0);
  };
  const handlePreviousPage = () => {
    if (currentPage > 0) {
      setCurrentPage(currentPage - 1);
    }
  };

  const handleNextPage = () => {
    if (currentPage < pages.length - 1) {
      setCurrentPage(currentPage + 1);
    }
  };

  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/posts")
      .then((res) => res.json())
      .then((data) => {
        setBlogs(data);
        setLoading(false);
      });
  }, [currentPage, itemsPerPage]);
  console.log(blogs);
  const currentBlogs = blogs.slice(
    (currentPage - 1) * itemsPerPage,
    currentPage * itemsPerPage
  );

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
            <div className="loader"></div>
          ) : (
            <>
              <div className="blogs">
                {currentBlogs.length === 0 ? (
                  <EmptyList />
                ) : (
                  <>
                    {currentBlogs.map((blog) => (
                      <BlogLIst key={blog.id} blog={blog} />
                    ))}
                  </>
                )}
              </div>

              <div className="sidebar">
                <Sidebar ></Sidebar>
              </div>
            </>
          )}
        </div>
        <div className="pagination">
          <button onClick={handlePreviousPage}>Prev</button>
          {pages.map((page) => (
            <button
              className={currentPage === page + 1 ? "selected" : undefined}
              onClick={() => setCurrentPage(page + 1)}
              key={page}
            >
              {page + 1}
            </button>
          ))}
          <button onClick={handleNextPage}>Next</button>
          <select
            value={itemsPerPage}
            onChange={handleItemPerPage}
            name=""
            id=""
          >
            <option value="10">10</option>
            <option value="20">20</option>
          </select>
        </div>
      </div>
    </div>
  );
};

export default Home;
