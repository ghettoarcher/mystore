import Title from '../title/Title';
import NewProductsItems from './NewProductsItems';
import Countdown from '../countdown/Countdown';
export default function NewProducts(){

      const newproductsData = [
      {
          img: '/src/img/sale/watch.png',
          name:'Iphone 14 promax 256GB',
          price:'$930.00',
          rating:'4.9',  
      },
      {
            img: '/src/img/sale/watch.png',
            name:'Iphone 14 promax 256GB',
            price:'$930.00',
            rating:'4.9',  
        },
        {
            img: '/src/img/sale/watch.png',
            name:'Iphone 14 promax 256GB',
            price:'$930.00',
            rating:'4.9',  
        },
        {
            img: '/src/img/sale/watch.png',
            name:'Iphone 14 promax 256GB',
            price:'$930.00',
            rating:'4.9',  
        },
      ]
      return(
            <section className="new-products">
                  <Title/>
                  <NewProductsItems data = {newproductsData} />
                  <div className="feature-blocks">
                        <div className="presale">
                              <div className="feature-title-wrapper">
                                    <div className="feature-title"> <span>Iphone</span> 15 Series</div>
                                    <div className="feature-img"><img src="/src/img/feature/iphone.png" alt="" /></div>
                              </div>
                              <div className="feature-info">
                              <Countdown/>
                              <div className="feature-subtitle">It feels good to be the first</div>
                              <div className="feature-description">Get ready for the future of smartphones.Experience innovation like never before. Stay tuned for the big iPhone 15 pre-sale.</div>
                              <div className="feature-button">Register Now</div>
                              </div>



                        </div>
                        <div className="buynow"></div>
                  </div>
            </section>
      )
}