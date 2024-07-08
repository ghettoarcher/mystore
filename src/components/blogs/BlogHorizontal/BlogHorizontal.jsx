const BlogHorizontal = ({title,subtitle,date,img,size,height,subtitleSize}) => {
      
      const sizeClass = size === 'padding-large' ? 'padding-large' : 'padding-small';
      const heightClass = height === 'height-large' ? 'height-large' : 'height-small';
      return(

            <>
            <div className={`blog-horizontal d-flex flex-col ${heightClass}`}>
                  <img src={img} alt="" />
                  <div className={`blog-horizontal-content d-flex flex-column ${sizeClass}`}>
                        <div className="blog-horizontal-title multiline-ellipsis">{title}</div>
                        <div className={`blog-horizontal-subtitle d-flex flex-col ${subtitleSize}`}>{subtitle} </div>
                        <div className="blog-info d-flex flex-row justify-content-between ">
                        <div className="blog-publish-date d-flex flex-row align-items-end mt-3">
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