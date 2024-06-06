export default function MainBlog(){
      return(
      <div className="main-blog-content d-flex flex-column rounded-2">
            <img src="src/img/blogs/image.png" alt="" className="blog-item-img main" />
            <div className="main-blog-info-wrapper d-flex flex-column pt-2 px-3 pb-2">
            <div className="main-blog-info d-flex flex-row align-items-center justify-content-between mt-2">
            <div className="blog-item-date d-flex">
                              <img src="/src/assets/icons/calendar.svg" alt="date" className="blog-item-date-icon" />
                              <div className="blog-item-date-text">August , 8 , 2023</div>
                        </div>
                  <div className="main-blog-read-time d-flex flex-row justify-content-center align-items-center fw-light"><img src="/src/assets/icons/timer.svg" alt="" className="timer-icon" />3 min read</div>
            </div>
            <div className="main-blog-text pt-1 pb-2">
                  <div className="main-blog-title">Meta Platforms plans to release free</div>
                  <div className="main-blog-subtitle fs-6 fw-300 mt-2">The parent company of Facebook, Meta Platforms, is introducing software to help devel</div>
            </div>
            </div>

      </div>
      )
}