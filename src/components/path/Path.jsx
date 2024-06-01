import {Link} from 'react-router-dom';
const Path = () => {
      return(
            <div className="path">
                  <div className="container">
                        <div className="path-content">
                        <Link className='link' to={'/'}>Home</Link> <img src="src/icons/path/arrow-right.svg" alt="" />
                  <p>Account</p> <img src="src/icons/path/arrow-right.svg" alt="" />
                  <p>Personal Data</p>
                        </div>

                  </div>

            </div>
      )
}

export default Path;