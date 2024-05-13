import Title from '/src/components/title/Title';
import NewProductsItems from '/src/components/newProducts/NewProductsItems';

export default function Bestsellers(){
      const bestsellersData = [
            {
                  id:1,
                    img: '/src/img/bestsellers/razer.svg',
                    name:'Iphone 14 promax 256GB',
                    price:'$930.00',
                    rating:'4.9',  
                },
                { 
                      id:2,
                      img: '/src/img/bestsellers/playstation4.svg',
                      name:'Iphone 14 promax 256GB',
                      price:'$930.00',
                      rating:'4.9',  
                  },
                  {
                      id:3,
                      img: '/src/img/bestsellers/laptop.svg',
                      name:'Iphone 14 promax 256GB',
                      price:'$930.00',
                      rating:'4.9',  
                  },
                  {
                      id:4,
                      img: '/src/img/bestsellers/airpods.svg',
                      name:'Iphone 14 promax 256GB',
                      price:'$930.00',
                      rating:'4.9',  
                  },
                  {
                        id:5,
                        img: '/src/img/bestsellers/airpods.svg',
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