import ProductPrice from '../../components/ProductPrice/ProductPrice';
import ProductInfo from '../../components/ProductInfo/ProductInfo';
import Path from '../../components/path/Path';
import ProductImages from '../../components/ProductImages/ProductImages';
const ProductPage = () => {
      return(
            <>
            <Path secondPath={'Products'} thirdPath={'Laptops'}/>
            <div className="container">
           <div className='d-flex flex-row justify-content-between'>
            <ProductImages/>
            <ProductInfo/>
           <ProductPrice/>
           </div>
            </div> 
            </>     
      )
}

export default ProductPage;