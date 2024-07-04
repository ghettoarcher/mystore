export default function BlogVertical({title,subtitle,readtime,date,img}){
      return(
            <div className="blog-vertical rounded-2">
                  <div className="card-img-top">
                        <img src={img} alt="" />
                  </div>
                  <div className="blog-vertical-content px-3 pb-3 pt-2">
                        <div className="blog-info d-flex flex-row justify-content-between ">
                                    <div className="blog-publish-date d-flex flex-row align-items-end">
                                          <img src="/src/assets/icons/calendar.svg" alt="" />
                                          <span>{date}</span>
                                    </div>
                                    <div className="blog-readtime d-flex flex-row align-items-end"><img src="/src/assets/icons/timer.svg" alt="" />{readtime}</div>
                              </div>
                        <div className="blog-title">{title}</div>
                        <div className="blog-subtitle">{subtitle}</div>
                  </div>

            </div>
      )
}