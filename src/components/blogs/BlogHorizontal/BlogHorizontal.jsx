const BlogHorizontal = ({title,subtitle,readtime,date,img}) => {
      return(
            <>
            <div className="blog-horizontal d-flex flex-col">
                  <img src={img} alt="" />
                  <div className="blog-horizontal-content d-flex flex-column">
                        <div className="blog-horizontal-title">{title}</div>
                        <div className="blog-horizontal-subtitle">{subtitle} </div>
                        <div className="blog-info d-flex flex-row justify-content-between ">
                        <div className="blog-publish-date d-flex flex-row align-items-end">
                              <img src="/src/assets/icons/calendar.svg" alt="" />
                              <span>{date}</span>
                        </div>
                  </div>
                  </div>
                  
            </div>
            </>
      )
}

export default BlogHorizontal;