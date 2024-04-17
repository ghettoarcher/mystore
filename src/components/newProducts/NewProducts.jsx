import Title from '../title/Title';
import NewProductsItems from './NewProductsItems';
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
                  <div className="container">
                  <Title name={'New Products'}/>
                  <NewProductsItems data = {newproductsData} />

                  </div>
            </section>
      )
}