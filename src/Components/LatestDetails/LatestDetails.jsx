/* eslint-disable react/prop-types */

const LatestDetails = ({latests, onRemoveItem}) => {
    console.log(latests);
    
  
    const {id, title, body, date} = latests;
    return (
        <div style={{padding: "10px"}}>
           <h3>{title}</h3>
           <p className="body">{
                body.length >50 ?(
                  <p>{body.slice(0,50)} <span>  ...</span></p>
                )
                :(<p>{body}</p>)
              }</p>
              <p>publish:{date}</p>
              <button className="btn" onClick={() => onRemoveItem(id)}>Remove</button>
              <hr />
        </div>
    );
};

export default LatestDetails;