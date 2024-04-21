import Title from '/src/components/title/Title';
import NewProductsItems from '/src/components/newProducts/NewProductsItems';

export default function Bestsellers(){
      const bestsellersData = [
            {
                  id:1,
                    img: '/src/img/bestsellers/razer.png',
                    name:'Iphone 14 promax 256GB',
                    price:'$930.00',
                    rating:'4.9',  
                },
                { 
                      id:2,
                      img: '/src/img/bestsellers/ps4.png',
                      name:'Iphone 14 promax 256GB',
                      price:'$930.00',
                      rating:'4.9',  
                  },
                  {
                      id:3,
                      img: '/src/img/bestsellers/laptop.png',
                      name:'Iphone 14 promax 256GB',
                      price:'$930.00',
                      rating:'4.9',  
                  },
                  {
                      id:4,
                      img: '/src/img/bestsellers/airpods.png',
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