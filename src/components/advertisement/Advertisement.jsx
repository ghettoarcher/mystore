export default function Advertisement(){
      return(
            <section className="advertisement">
                  <div className="container">
                        <div className="advertisement-content  d-flex flex-row justify-content-around align-items-center rounded-2 text-center py-5 px-3 fw-normal fs-6s text-center">
                              <div className="advertisement-info">
                                    <div className="advertisement-title">SMART WATCH</div>
                                    <div className="advertisement-subtitle fw-light fs-4">Various designs and brands</div>
                                    <div className="advertisement-button"><a className='text-decoration-none rounded-2 d-inline-flex justify-content-center align-items-center' href="">View</a></div>
                              </div>
                              <div className="advertisement-img mt-5"><img src="/src/img/advertisement/smartwatches.svg" alt="" /></div>
                        </div>
                  </div>
            </section>
      );

}