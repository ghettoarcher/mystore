export default function BlogList({data}){
      return(
            <>
            {data.map(item => {
            return(
                  <div className="blog-item " key = {item.id}>
                  <div className="blog-item-content">
                        <a href=""></a>
                  <img className="blog-item-img" src="/src/img/blogs/blog-image1.png" alt="" />
                        <div className="blog-item-info">
                              <div className="blog-item-title"><a href=""></a>{item.title}</div>
                              <div className="blog-item-descr">{item.description}</div>
                              <div className="blog-item-date date">
                                    <img src="/src/icons/calendar.png" alt="date" className="blog-item-date-icon" />
                                    <div className="blog-item-date-text">{item.date}</div>
                              </div>
                        </div>

                  </div>
                  </div>                         
            )})}

           </>
      )
      
}