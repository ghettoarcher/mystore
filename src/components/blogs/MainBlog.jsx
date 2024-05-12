export default function MainBlog(){
      return(
      <div className="main-blog-content">
            <img src="src/img/blogs/image.png" alt="" className="blog-item-img main" />
            <div className="main-blog-info-wrapper">
            <div className="main-blog-info">
            <div className="blog-item-date">
                              <img src="/src/icons/blogs/calendar.svg" alt="date" className="blog-item-date-icon" />
                              <div className="blog-item-date-text">August , 8 , 2023</div>
                        </div>
                  <div className="main-blog-read-time"><img src="/src/icons/blogs/timer.svg" alt="" className="timer-icon" />3 min read</div>
            </div>
            <div className="main-blog-text">
                  <div className="main-blog-title">Meta Platforms plans to release free</div>
                  <div className="main-blog-subtitle">The parent company of Facebook, Meta Platforms, is introducing software to help devel</div>
            </div>
            </div>

      </div>
      )
}