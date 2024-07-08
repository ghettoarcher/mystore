

const Comment = () => {
      return(
            <div className="comment-item d-flex flex-column ">
                  <div className="comment-title d-flex flex-row justify-content-between">
                  <div className="comment-left d-flex flex-row gap-3 align-items-center">
                        <img src="/src/assets/images/user-img.svg" alt="user image"/>
                        <div className="comment-info d-flex flex-column">
                              <div className="comment-name">Anna Ley</div>
                              <div className="comment-post-date">March 30, 2023</div>
                        </div>
                  </div>
                  <div className="comment-right d-flex flex-row align-items-center">
                        <div className="comment-rating d-flex flex-row jsutify-content-center"><img src="/src/assets/icons/star.svg" alt="" />4.6</div>
                  </div>
                  </div>
                  <div className="comment-text">This article deepened my appreciation for headphones as not only devices of entertainment but also as a blend of science and innovation that enrich our auditory experiences.</div>
                  <div className="comment-show-more d-flex flex-row align-items-center justify-content-end">Show more <img src="/src/assets/icons/arrow-down.svg" alt="" /></div>
                  <div className="comment-likes d-flex flex-row justify-content-end mt-2 gap-4">
                        <div className="like">
                        <img src="/src/assets/icons/like.svg" alt="like"/> 1
                        </div>
                        <div className="dislike">
                        <img src="/src/assets/icons/dislike.svg" alt="dislike" /> 2
                        </div>
                  </div>
                  
            </div>
      )
}

export default Comment;