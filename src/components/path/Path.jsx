import {Link} from 'react-router-dom';
const Path = ({secondPath,thirdPath}) => {
      return(
            <div className="path">
                  <div className="container">
                        <div className="path-content">
                        <Link className='link' to={'/'}>Home</Link> <img src="/src/assets/icons/path-arrow.svg" alt="" />
                  <p>{secondPath}</p> <img src="/src/assets/icons/path-arrow.svg" alt="" />
                  <p>{thirdPath}</p>
                        </div>

                  </div>

            </div>
      )
}

export default Path;