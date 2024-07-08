
import MainProduct from '../../components/mainProduct/MainProduct';
import Categories from '../../components/categories/Categories';
import Sale from '../../components/sale/Sale';
import NewProducts from '../../components/newProducts/NewProducts';
import HotDeals from '../../components/hotdeals/HotDeals';
import TopBrands from '../../components/topbrands/TopBrands';
import Advertisement from '../../components/advertisement/Advertisement';
import Blogs from '../../components/blogs/Blogs';
import Services from '../../components/services/Services';



function Homepage() {
  const categoriesItemsList = [
    {name: 'Accessories',img:'src/assets/images/accessories.svg',id:1}, 
    {name: 'Cameras',img:'src/assets/images/camera.svg', id: 2}, 
    {name: 'Laptops',img:'src/assets/images/laptop.svg', id: 3},  
    {name: 'Smartphones',img:'src/assets/images/smartphone.svg', id: 4}, 
    {name: 'Gaming',img:'src/assets/images/gaming.svg', id: 5}, 
    {name: 'Smartwatches',img:'src/assets/images/smartwatch.svg', id: 6}, 
  ]
  const bestsellersData = [
    {
          id:1,
            img: '/src/assets/images/razer.svg',
            name:'Iphone 14 Pro Max 256GB',
            price:'$930.00',
            rating:'4.9',  
        },
        { 
              id:2,
              img: '/src/assets/images/razer.svg',
              name:'Iphone 14 Pro Max 256GB',
              price:'$930.00',
              rating:'4.9',  
          },
          {
              id:3,
              img: '/src/assets/images/airpods.svg',
              name:'Iphone 14 Pro Max 256GB',
              price:'$930.00',
              rating:'4.9',  
          },
          {
              id:4,
              img: '/src/assets/images/airpods.svg',
              name:'Iphone 14 Pro Max 256GB',
              price:'$930.00',
              rating:'4.9',  
          },
          {
                id:5,
                img: '/src/assets/images/airpods.svg',
                name:'Iphone 14 Pro Max 256GB',
                price:'$930.00',
                rating:'4.9',  
            },
  ]
  const newproductsData = [
      {
        id:1,
          img: '/src/assets/images/razer.svg',
          name:'Iphone 14 Pro Max 256GB',
          price:'$930.00',
          rating:'4.9',  
      },
      { 
            id:2,
            img: '/src/assets/images/razer.svg',
            name:'Iphone 14 Pro Max 256GB',
            price:'$930.00',
            rating:'4.9',  
        },
        {
            id:3,
            img: '/src/assets/images/razer.svg',
            name:'Iphone 14 Pro Max 256GB',
            price:'$930.00',
            rating:'4.9',  
        },
        {
            id:4,
            img: '/src/assets/images/razer.svg',
            name:'Iphone 14 Pro Max 256GB',
            price:'$930.00',
            rating:'4.9',  
        },
        {
            id:5,
            img: '/src/assets/images/razer.svg',
            name:'Iphone 14 Pro Max 256GB',
            price:'$930.00',
            rating:'4.9',  
        },
  ]
  return (
    <>
    <MainProduct/>
    <Categories data={categoriesItemsList} />
    <Sale/>
    <NewProducts data={bestsellersData} title={'New Products'}/>
    <HotDeals/>
    <NewProducts data={newproductsData} title={'Best Sellers'}/>
    <TopBrands/>
    <Advertisement/>
    <Blogs/>
    <Services/> 
      </>
  )
}

export default Homepage;