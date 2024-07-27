/* eslint-disable react/prop-types */

import './styles.css'

const BlogLIst = ({blog}) => {
    console.log(blog);
    const {id, title, body}= blog;
    return (
        <div className='container'>
            <h2 className='id'>Blog No: {id}</h2>
           <h3 className="title">{
                title.length >40 ?(
                  <p>{title.slice(0,40)} <span>  ...</span></p>
                )
                :(<p>{title}</p>)
              }</h3>
           
           <p className="body">{
                body.length >90 ?(
                  <p>{body.slice(0,90)} <span>  ...</span></p>
                )
                :(<p>{body}</p>)
              }</p>

        </div>
    );
};

export default BlogLIst;