
import './styles.css'

// eslint-disable-next-line react/prop-types
const BlogLIst = ({blog}) => {
    console.log(blog);
    // eslint-disable-next-line react/prop-types
    const {id, title, body}= blog;
    return (
        <div className='container'>
            <h2 className='id'>Blog No: {id}</h2>
           <h3 className="title">{title}</h3>
           <p className="body">{body}</p>

        </div>
    );
};

export default BlogLIst;