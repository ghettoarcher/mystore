import Header from './components/header/Header'
import MainProduct from './components/mainProduct/MainProduct';
import CategoriesList from './components/categories/Categories';
import Sale from './components/sale/Sale';
import NewProducts from './components/newProducts/NewProducts';



function App() {
  const categoriesItemsList = [
    {name: 'Accessories',img:'src/img/categories/accessories.png',id:1}, 
    {name: 'Cameras',img:'src/img/categories/camera.png', id: 2}, 
    {name: 'Laptops',img:'src/img/categories/laptop.png', id: 3},  
    {name: 'Smartphones',img:'src/img/categories/smartphone.png', id: 4}, 
    {name: 'Gaming',img:'src/img/categories/gaming.png', id: 5}, 
    {name: 'Smartwatches',img:'src/img/categories/gaming.png', id: 6}, 
  ]
  return (
    <>

    <Header/>
    <MainProduct/>
    <CategoriesList data={categoriesItemsList}/>
    <Sale/>
    <NewProducts/>
    </>
  )
}

export default App;
