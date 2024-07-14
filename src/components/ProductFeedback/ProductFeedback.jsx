const ProductFeedback = () => {
      return(
            <div className="product-feedback">
                  <div className="feedback-content d-flex flex-column">
                  <h5>Comments</h5>
                  <p>leave your comments here for other customers</p>
                  <input type="text" placeholder="Share your thoughts about this product here" />
                  <button className="comment-btn white-btn">Comment</button>
                  
                  <div className="feedback-rating d-flex flex-column">
                  <h6 className="mt-2">By Feature</h6>
                        <div className="feedback-item d-flex flex-row">
                              <div className="feedback-name">Battery charge</div>
                              <div className="feedback-scale"><img src="/src/assets/icons/scale.svg" alt="" /></div>
                              <div className="feedback-score">4.8</div>
                        </div>
                        <div className="feedback-item d-flex flex-row">
                              <div className="feedback-name">Monitor</div>
                              <div className="feedback-scale"><img src="/src/assets/icons/scale.svg" alt="" /></div>
                              <div className="feedback-score">4.8</div>
                        </div>
                        <div className="feedback-item d-flex flex-row">
                              <div className="feedback-name">Lightness</div>
                              <div className="feedback-scale"><img src="/src/assets/icons/scale.svg" alt="" /></div>
                              <div className="feedback-score">4.8</div>
                        </div>

                  </div>
                  </div>

                  
            </div>
      )
}

export default ProductFeedback;