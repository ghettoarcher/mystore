
import MainProduct from '../../components/mainProduct/MainProduct';
import Categories from '../../components/categories/Categories';
import Sale from '../../components/sale/Sale';
import NewProducts from '../../components/newProducts/NewProducts';
import HotDeals from '../../components/hotdeals/HotDeals';
import Bestsellers from '../../components/bestsellers/BestSellers';
import TopBrands from '../../components/topbrands/TopBrands';
import Advertisement from '../../components/advertisement/Advertisement';
import Blogs from '../../components/blogs/Blogs';
import Services from '../../components/services/Services';



function Homepage() {
  const categoriesItemsList = [
    {name: 'Accessories',img:'src/img/categories/accessories.svg',id:1}, 
    {name: 'Cameras',img:'src/img/categories/camera.svg', id: 2}, 
    {name: 'Laptops',img:'src/img/categories/laptop.svg', id: 3},  
    {name: 'Smartphones',img:'src/img/categories/smartphone.svg', id: 4}, 
    {name: 'Gaming',img:'src/img/categories/gaming.svg', id: 5}, 
    {name: 'Smartwatches',img:'src/img/categories/smartwatch.svg', id: 6}, 
  ]
  return (
    <>
    <MainProduct/>
    <Categories data={categoriesItemsList}/>
    <Sale/>
    <NewProducts/>
    <HotDeals/>
    <Bestsellers/>
    <TopBrands/>
    <Advertisement/>
    <Blogs/>
    <Services/> 
      </>
  )
}

export default Homepage;