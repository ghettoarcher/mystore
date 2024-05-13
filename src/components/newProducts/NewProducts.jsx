import Title from '../title/Title';
import NewProductsItems from './NewProductsItems';

export default function NewProducts(){
      
      const newproductsData = [
      {
        id:1,
          img: '/src/img/newproduct/macbook.png',
          name:'Iphone 14 promax 256GB',
          price:'$930.00',
          rating:'4.9',  
      },
      { 
            id:2,
            img: '/src/img/newproduct/macbook.png',
            name:'Iphone 14 promax 256GB',
            price:'$930.00',
            rating:'4.9',  
        },
        {
            id:3,
            img: '/src/img/newproduct/macbook.png',
            name:'Iphone 14 promax 256GB',
            price:'$930.00',
            rating:'4.9',  
        },
        {
            id:4,
            img: '/src/img/newproduct/macbook.png',
            name:'Iphone 14 promax 256GB',
            price:'$930.00',
            rating:'4.9',  
        },
        {
            id:5,
            img: '/src/img/newproduct/macbook.png',
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