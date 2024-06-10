export default function BlogList({data}){
      return(
            <>
            {data.map(item => {
            return(
                  <div className="blog-item  d-flex flex-row rounded-2 " key = {item.id}>
                  <div className="blog-item-content d-flex flex-row">
                        <a href=""></a>
                  <img className="blog-item-img" src="/src/img/blogs/blog-image1.png" alt="" />
                        <div className="blog-item-info d-flex flex-column ">
                              <div className="blog-item-title"><a href=""></a>{item.title}</div>
                              <div className="blog-item-descr fw-light mt-2">{item.description}</div>
                              <div className="blog-item-date d-flex flex-row align-items-center date pt-4">
                                    <img src="/src/assets/icons/calendar.svg" alt="date" className="blog-item-date-icon" />
                                    <div className="blog-item-date-text fw-light ">{item.date}</div>
                              </div>
                        </div>

                  </div>
                  </div>                         
            )})}

           </>
      )
      
}