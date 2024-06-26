import {Link} from 'react-router-dom';
const Path = () => {
      return(
            <div className="path">
                  <div className="container">
                        <div className="path-content">
                        <Link className='link' to={'/'}>Home</Link> <img src="/src/assets/icons/path-arrow.svg" alt="" />
                  <p>Account</p> <img src="/src/assets/icons/path-arrow.svg" alt="" />
                  <p>Personal Data</p>
                        </div>

                  </div>

            </div>
      )
}

export default Path;