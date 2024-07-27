import { useEffect, useState } from "react";
import Header from "../../Components/Header/Header";
import SearchBar from "../../Components/SearchBar/SearchBar";
// import EmptyList from "../../Components/Shared/EmptyList/EmptyList";
import BlogLIst from "../../Components/BlogList/BlogLIst";

const Home = () => {
    const [blogs, setBlogs] = useState([]);
  const [searchKey, setSearchKey] = useState('');

  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/posts")
      .then((res) => res.json())
      .then((data) => setBlogs(data));
  },[]);
  console.log(blogs);

  // Search submit
  const handleSearchBar = (e) => {
    e.preventDefault();
    handleSearchResults();
  };

  // Search for blog by category
  const handleSearchResults = () => {
   
    const allBlogs = blogs;
    const filteredBlogs = allBlogs.filter((blog) =>
      blog.category.toLowerCase().includes(searchKey.toLowerCase().trim())
    );
    setBlogs(filteredBlogs);
  };

  // Clear search and show all blogs
  const handleClearSearch = () => {
    // setBlogs(blogs);
    setSearchKey('');
    fetch("https://jsonplaceholder.typicode.com/posts")
    .then((res) => res.json())
    .then((data) => setBlogs(data));
  };
    return (
        <div style={{ maxWidth: "1280px", margin: "0 auto" }}>
            <Header></Header>
            
            {/* Search Bar */}
      <SearchBar
        value={searchKey}
        clearSearch={handleClearSearch}
        formSubmit={handleSearchBar}
        handleSearchKey={(e) => setSearchKey(e.target.value)}
      />
      {
        blogs.map(blog =><BlogLIst
        key={blog.id}
        blog={blog}
        ></BlogLIst>)
      }

      {/* Blog List & Empty View */}
      {/* {!blogs.length ? <EmptyList /> : <BlogLIst blogs={blogs} />}
         */}
        </div>
    );
};

export default Home;