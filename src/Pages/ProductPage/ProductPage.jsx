import ProductPrice from '../../components/ProductPrice/ProductPrice';
import ProductInfo from '../../components/ProductInfo/ProductInfo';
import Path from '../../components/path/Path';
import ProductImages from '../../components/ProductImages/ProductImages';
import NewProductsItems from '../../components/newProducts/NewProductsItems';
import ProductFeedback from '../../components/ProductFeedback/ProductFeedback';
import Comment from '../../components/Comment/Comment';

const ProductPage = () => {
      const similarData = [
            {
                  id:1,
                    img: '/src/assets/images/Desktop/image-1.svg',
                    name:'Iphone 14 Pro Max 256GB',
                    price:'$930.00',
                    rating:'4.9',  
                },
                { 
                      id:2,
                      img: '/src/assets/images/Desktop/image-2.svg',
                      name:'Iphone 14 Pro Max 256GB',
                      price:'$930.00',
                      rating:'4.9',  
                  },
                  {
                      id:3,
                      img: '/src/assets/images/Desktop/image-3.svg',
                      name:'Iphone 14 Pro Max 256GB',
                      price:'$930.00',
                      rating:'4.9',  
                  },
                  {
                      id:4,
                      img: '/src/assets/images/Desktop/image.svg',
                      name:'Iphone 14 Pro Max 256GB',
                      price:'$930.00',
                      rating:'4.9',  
                  },
      ]
      return(
            <>
            <Path secondPath={'Products'} thirdPath={'Laptops'}/>
            <div className="container">
           <div className='d-flex flex-row justify-content-between'>
            <ProductImages/>
            <ProductInfo/>
           <ProductPrice/>
           
           </div>
           
           <div className="tech-details">
           <h5>Technical Details</h5>
           <div className="details-items d-flex flex-column">
                  <div className="details-item">
                        <span>Display</span>
                        <span>13.3-inch LED-backlit display with IPS technology</span>
                  </div>
                  <div className="details-item">
                        <span>Graphics</span>
                        <span>Apple 10-core GPU</span>
                  </div>
                  <div className="details-item">
                        <span>Processor</span>
                        <span>Apple M2 chip</span>
                  </div>
                  <div className="details-item">
                        <span>In the box</span>
                        <span>67W USB-C Power Adapter, USB-C Charge Cable (2 m)</span>
                  </div>
                  <div className="details-item">
                        <span>Height</span>
                        <span>0.61 inch (1.56 cm)</span>
                  </div>
                  <div className="details-item">
                        <span>Width</span>
                        <span>11.97 inches (30.41 cm)</span>
                  </div>
            <span>Show More</span>
           </div>
           </div>
           <div className="similar-products">
            <h5>Similar Products</h5>
            <NewProductsItems data={similarData}/>
           </div>
            <div className='d-flex flex-row gap-3 mt-5'>
                  <ProductFeedback></ProductFeedback>
                  <div className='d-flex flex-column'>
                        <Comment/>
                        <Comment/>
                        <Comment/>
                  </div>
            </div>
            <div className="similar-products">
                  <h5>Frequently bought Products</h5>
                  <NewProductsItems data={similarData}/>
           </div>
           <div className="reviews">
            <h5>Reviews</h5>
            <div className="review-items d-flex flex-row gap-4">
                  <img src="/src/assets/images/review-img1.svg" alt="" />
                  <img src="/src/assets/images/review-img2.svg" alt="" />
                  <img src="/src/assets/images/review-img3.svg" alt="" />
           </div>
           </div>

            </div> 
            </>     
      )
}

export default ProductPage;