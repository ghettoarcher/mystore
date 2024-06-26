import Title from '/src/components/title/Title';

export default function TopBrands(){
      return(
            <section className="top-brands">
                  <div className="container">
                        <Title name= {'Top Brands'}></Title>
                        <div className="top-brands-content d-flex flex-row justify-content-between align-items-center mb-5 flex-shrink-1 mt-1">
                              <div className="top-brands-item"><img src="/src/assets/images/apple.svg" alt="apple" className="top-brands-item" /></div>
                              <div className="top-brands-item"><img src="/src/assets/images/sony.svg" alt="apple" className="top-brands-item" /></div>
                              <div className="top-brands-item"><img src="/src/assets/images/samsung.svg" alt="apple" className="top-brands-item" /></div>
                              <div className="top-brands-item"><img src="/src/assets/images/canon.svg" alt="apple" className="top-brands-item" /></div>
                              <div className="top-brands-item hide"><img src="/src/assets/images/huawei.svg" alt="apple" className="top-brands-item" /></div>
                              <div className="top-brands-item hide"><img src="/src/assets/images/lenovo.svg" alt="apple" className="top-brands-item" /></div>

                        </div>
                  </div>
            </section>


      );
}