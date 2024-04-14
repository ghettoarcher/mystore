import './App.css'
import Header from './components/header/Header'
import MainProduct from './components/mainProduct/MainProduct';
import Categories from './components/categories/Categories';

function App() {
  const categoriesItemsList = [
    {name: 'Accessories',img:'src/img/categories/accessories.png'}, 
    {name: 'Cameras',img:'src/img/categories/camera.png'}, 
    {name: 'Laptops',img:'src/img/categories/laptop.png'},  
    {name: 'Smartphones',img:'src/img/categories/smartphone.png'}, 
    {name: 'Gaming',img:'src/img/categories/gaming.png'}, 
    {name: 'Smartwatches',img:'src/img/categories/smartwatch.png'}, 
  ]
  return (
    <>
    <Header/>
    <MainProduct/>
    <Categories data={categoriesItemsList}/>
    
    </>
  )
}

export default App;
