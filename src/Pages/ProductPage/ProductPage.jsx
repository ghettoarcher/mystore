import Path from '../../components/path/Path';

const ProductPage = () => {
      return(
            <>
           <Path secondPath={'Products'} thirdPath={'Laptops'}/> 
           <div className="product-page d-flex flex-column justify-content-center align-items-start">
           <div className='d-flex flex-row justify-content'>
           <div className="product-price d-flex flex-column align-items-start">
                  <div className="product-current-price fw-medium">$1299</div>
                  <div className="product-last-price">last price $1410</div>
            </div>
            <div className="product-discount"><img src="/src/assets/icons/discount-shape.svg" alt="" />-12%</div>
           </div>
           <div className="d-flex flex-column">

            <div><input type="radio" />Pay now</div>
            <div><input type="radio"/>Buy in installments <br />choose your installments period </div>

            <div className="instalments-months d-flex flex-row justify-content-between gap-2">
                  <div className="instalments-month"><div>3</div> <div className='month-text'>Months</div></div>
                  <div className="instalments-month"><div>6</div> <div className='month-text'>Months</div></div>
                  <div className="instalments-month"><div>12</div> <div className='month-text'>Months</div></div>
                  <div className="instalments-month"><div>18</div> <div className='month-text'>Months</div></div>

            </div>
            <div className='monthly-rate fw-light'>$433 <span>/Month</span></div>
            <button className='product-page-btn blue-btn'>Buy now</button>
            <button className='product-page-btn white-btn'>Add to cart</button>
           </div>
           </div>
           
           


           </>
      )
}

export default ProductPage;