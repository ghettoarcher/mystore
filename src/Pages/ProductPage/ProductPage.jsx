import ProductPrice from '../../components/ProductPrice/ProductPrice';
import ProductInfo from '../../components/ProductInfo/ProductInfo';
import Path from '../../components/path/Path';

const ProductPage = () => {
      return(
            <>
            <div className="container">
            <Path secondPath={'Products'} thirdPath={'Laptops'}/>
           <div className='d-flex flex-row justify-content-between'>
           <div className="product-image"><img src="/src/assets/images/product-image.svg" alt="" /></div>
            <ProductInfo/>
           <ProductPrice/>
           </div>
            </div>

           
           </>
      )
}

export default ProductPage;