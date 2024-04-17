import Title from '/src/components/title/Title';
import NewProductsItems from '/src/components/newProducts/NewProductsItems';

export default function Bestsellers(){
      const bestsellersData = [
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
            <section className="bestsellers">
                  <div className="container">
                        <Title name= {'Best Sellers'}></Title>
                        <NewProductsItems data = {bestsellersData}></NewProductsItems>
                  </div>
            </section>
      )
}