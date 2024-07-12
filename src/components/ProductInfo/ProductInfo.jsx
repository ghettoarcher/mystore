const ProductInfo = () => {
      return(
            <div className="product-info d-flex flex-column">
            <div className="product-title">MacBook Pro M2 MNEJ3 2022 LLA 13.3 inch</div>
            <div className='d-flex flex-row gap-2 mt-2'>
                  <img src="/src/assets/icons/star.svg" alt="" />4.9
                  <div> sold 125</div>
            </div>
            <div className="product-availibilty d-flex flex-row justify-content-between align-items-center">
                  <div><img src="/src/assets/icons/shop.svg" alt="In Stock" /><span>In Stock</span></div>
                  <div><img src="/src/assets/icons/verify.svg" alt="Guaranteed" /><span>Guaranteed</span></div>
                  <div><img src="/src/assets/icons/truck-blue.svg" alt="Free Delivery" /><span>Free Delivery</span></div>
            </div>
            <div className="product-colors d-flex flex-row">
                  <span>Select Color</span>
                  <img src="/src/assets/icons/color.svg" alt="" />
                  <img src="/src/assets/icons/color.svg" alt="" />
            </div>
            <div className="product-description d-flex flex-row gap-5">
                  <ul>
                        <li className="description-item">brand</li>
                        <li className="description-item">Model Name</li>
                        <li className="description-item">Screen Size</li>
                        <li className="description-item">Hard disk Size</li>
                        <li className="description-item">CPU Model</li>
                  </ul>
                  <div className="product-specs d-flex flex-column">
                        <span>Apple</span>
                        <span>Macbook Pro</span>
                        <span>13.3 Inches</span>
                        <span>256 GB</span>
                        <span>core i5</span>
                  </div>
                  
            </div>
            <p>Show more <img src="/src/assets/icons/arrow-right.svg" alt="" /></p>
           </div>
      )
}

export default ProductInfo;