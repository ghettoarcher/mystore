const SearchMenu = () =>{
      
      return(
            <>
                  <div className="search-menu rounded-2 z-1">

                  <div className="search-menu-input__wrapper d-flex flex-row justify-content-between">
                        <div className="search-menu__input d-flex flex-row justify-content-between align-items-center rounded-2 p-3">
                              <input type="text" placeholder='What we can help you to find?' />
                              <img src="src/assets/icons/search.svg" alt="search" />
                        </div>
                        <img className="search-menu__cancel" src="src/assets/icons/close-circle.svg" alt="cancel" />


                  </div>

                  <div className="search-menu__keywords d-flex flex-row align-items-start justify-content-start pt-5">
                        <div className="keywords__most-searched">
                              <p>The most searched Items</p>
                              <div className="keywords__wrapper d-flex flex-row">
                              <div className="keywords_most_searched__items">
                                    <a href="#"className="keywords_most_searched__item">Macbook Pro</a>
                                    <a href="#"className="keywords_most_searched__item">AirPods Pro</a>
                                    <a href="#"className="keywords_most_searched__item">Samsung S9</a>
                                    <a href="#"className="keywords_most_searched__item">Tablet</a>
                                    <a href="#"className="keywords_most_searched__item">Xiaomi </a>
                              </div>
                              <div className="keywords_most_searched__items">
                                    <a href="#"className="keywords_most_searched__item">JBL speaker</a>
                                    <a href="#"className="keywords_most_searched__item">Canon</a>
                                    <a href="#"className="keywords_most_searched__item">AirPods Max</a>
                                    <a href="#"className="keywords_most_searched__item">Asus </a>
                                    <a href="#"className="keywords_most_searched__item">MagSafe</a>
                              </div>
                              </div>
                              
                        </div>
                        <div className="keywords__most-searched">
                              <p>The most searched Items</p>
                              <div className="keywords__wrapper d-flex flex-row">
                              <div className="keywords_most_searched__items">
                                    <div className="keywords_most_searched__item">Tablets</div>
                                    <div className="keywords_most_searched__item">Headphones</div>
                                    <div className="keywords_most_searched__item">Smartphones</div>
                                    <div className="keywords_most_searched__item">Smartwatch</div>
                              </div>
                              <div className="keywords_most_searched__items">
                                    <div className="keywords_most_searched__item">Laptops</div>
                                    <div className="keywords_most_searched__item">USB Drive</div>
                                    <div className="keywords_most_searched__item">Phone Cases</div>
                              </div>
                              </div>
                              
                        </div>
                        
                        
                  </div>
                  </div>


            </>
      )
}

export default SearchMenu;

