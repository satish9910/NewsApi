const NewsItems = ({ title, description, img, url }) => {
  return (
    
      <div
        className="card bg-dark text-light m-3 px-2 py-2 d-inline-block"
        style={{ maxWidth: "345px" }}
      >
        <img src={img} style={{height:"200px",width:"327px"}}  className="card-img-top" alt="..." />
        <div className="card-body">
          <h5 className="card-title">{title.slice(0,60)}</h5>
          <p className="card-text">{description? description.slice(0,90): 'This is the default description. Please check back later for the latest news updates.'}
          </p>
          <a href={url} className="btn btn-primary">
            Read More
          </a>
        </div>
      </div>
    
  );
};

export default NewsItems;
