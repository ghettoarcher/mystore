import Path from '../../components/path/Path'
import BlogVertical  from '../../components/blogs/BlogVertical';
import {Link} from 'react-router-dom';
import Recent from '../../components/blogs/recent/Recent';
const Blog = () => {
      return(
        <>
        <Path secondPath={'Blog'} />
        <section className="blog ">
          <div className="container d-flex flex-row">
            <div className="blog-content">
              <div className="blogs-wrapper d-flex flex-row flex-wrap gap-4 mb-5">
                <Link to={'blog-page'}>
                  <BlogVertical
                    img={'/src/assets/images/blog-img1.svg'}
                    title={'Meta Platforms plans to release fre...'}
                    subtitle={'The parent company of Facebook, Meta '}
                    date={'August , 8 , 2023'}
                    readtime={'3 min read'}
                  />
                </Link>
                <Link to={'blog-page'}>
                  <BlogVertical
                    img={'/src/assets/images/blog-img2.svg'}
                    title={'Mobile Users and Shopping Behavior'}
                    subtitle={'80% of people never leave home without their..'}
                    date={'August , 6 , 2023'}
                    readtime={'2 min read'}
                  />
                </Link>
                <Link to={'blog-page'}>
                  <BlogVertical
                    img={'/src/assets/images/blog-img3.svg'}
                    title={'The best gaming headsets'}
                    subtitle={'Immerse yourself in unparalleled gaming... '}
                    date={'August, 5 , 2023'}
                    readtime={'4 min read'}
                  />
                </Link>
                <Link to={'blog-page'}>
                  <BlogVertical
                    img={'/src/assets/images/blog-img4.svg'}
                    title={'South Korea s antitrust regulator fines'}
                    subtitle={'The parent company of Facebook, Meta Platforms'}
                    date={'August , 4 , 2023'}
                    readtime={'5 min read'}
                  />
                </Link>

              </div>
              <Recent size={'padding-large'} height={'height-large'} fontSize={'fs-4'}/>
            </div>
            <div className="videos d-flex flex-column">
              <div className="h4">Videos</div>
                  <img src="src/assets/images/Videos card.svg" alt="" />
                  <img src="src/assets/images/Videos card-1.svg" alt="" />
                  <img src="src/assets/images/Videos card-2.svg" alt="" />
                  <img src="src/assets/images/Videos card-3.svg" alt="" />
                  <img src="src/assets/images/Videos card-4.svg" alt="" />
                  <img src="src/assets/images/Videos card-5.svg" alt="" />
                </div>
          </div>
        </section>
      </>
      )
}

export default Blog;