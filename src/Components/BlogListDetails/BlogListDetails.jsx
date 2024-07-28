import { Link, useLoaderData, useNavigate } from "react-router-dom";
import "./blogDetailsStyles.css";
import { IoArrowBackSharp } from "react-icons/io5";
const BlogListDetails = () => {
  const blogs = useLoaderData();
  const {id, title, body } = blogs;
  const navigate = useNavigate();
  console.log(blogs);
  return (
    <div className="return">
      <Link to="#" onClick={() => navigate(-1)}>
        <h2>
          <IoArrowBackSharp className="icon" />
          Back to Home
        </h2>
      </Link>
      <div className="contained">
        <h3 className="blog-title">Blog No: {id}</h3>
        <h1>{title}</h1>
        <h3>{body}</h3>
      </div>
    </div>
  );
};

export default BlogListDetails;
