/* eslint-disable react/prop-types */

const LatestDetails = ({latests}) => {
    console.log(latests);
    const {title, body} = latests;
    return (
        <div style={{padding: "10px"}} className="">
           <h3>{title}</h3>
           <p className="body">{
                body.length >50 ?(
                  <p>{body.slice(0,50)} <span>  ...</span></p>
                )
                :(<p>{body}</p>)
              }</p>
              <hr />
        </div>
    );
};

export default LatestDetails;