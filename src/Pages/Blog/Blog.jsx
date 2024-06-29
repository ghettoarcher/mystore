import Path from '../../components/path/Path'
import BlogVertical  from '../../components/blogs/BlogVertical';
import BlogHorizontal from '../../components/blogs/BlogHorizontal/BlogHorizontal';

const Blog = () => {
      return(
            <>
            <Path secondPath={'Blog'}/>
            <section className="blog ">
                <div className="container d-flex flex-row">
                    <div className="blog-content">
                        <div className="blogs-wrapper d-flex flex-row flex-wrap gap-4">
                            <BlogVertical img={'/src/assets/images/blog-img1.svg'} title={'Meta Platforms plans to release fre...'} subtitle={'The parent company of Facebook, Meta '} date={'August , 8 , 2023'} readtime={'3 min read'}/>
                            <BlogVertical img={'/src/assets/images/blog-img2.svg'} title={'Mobile Users and Shopping Behavior'} subtitle={'80% of people never leave home without their..'} date={'August , 6 , 2023'} readtime={'2 min read'}/>
                            <BlogVertical img={'/src/assets/images/blog-img3.svg'} title={'The best gaming headsets'} subtitle={'Immerse yourself in unparalleled gaming... '} date={'August, 5 , 2023'} readtime={'4 min read'}/>
                            <BlogVertical img={'/src/assets/images/blog-img4.svg'} title={'South Korea s antitrust regulator fines'} subtitle={'The parent company of Facebook, Meta Platforms'} date={'August , 4 , 2023'} readtime={'5 min read'}/>
                        </div>
                        <div className="recent gap-4 d-flex flex-column mt-5">
                            <div className="h4">Recent posts</div>
                            <BlogHorizontal title={'8 Things You Probably Didn’t Know About Headphones'} subtitle={'Owning a headphone could mean a different thing for different'} date={'March , 28 , 2023'} img={'/src/assets/images/blog-img6.svg'}/>
                            <BlogHorizontal title={'8 Things You Probably Didn’t Know About Headphones'} subtitle={'Owning a headphone could mean a different thing for different'} date={'March , 28 , 2023'} img={'/src/assets/images/blog-img5.svg'}/>
                            <BlogHorizontal title={'8 Things You Probably Didn’t Know About Headphones'} subtitle={'Owning a headphone could mean a different thing for different'} date={'March , 28 , 2023'} img={'/src/assets/images/blog-img6.svg'}/>
                            <BlogHorizontal title={'8 Things You Probably Didn’t Know About Headphones'} subtitle={'Owning a headphone could mean a different thing for different'} date={'March , 28 , 2023'} img={'/src/assets/images/blog-img7.svg'}/>
                        </div>


                    </div>
                    <div className="blog-videos d-flex flex-column gap-4">
                        <img src="/src/assets/images/Videos card.svg" alt="" />
                        <img src="/src/assets/images/Videos card-1.svg" alt="" />
                        <img src="/src/assets/images/Videos card-2.svg" alt="" />
                        <img src="/src/assets/images/Videos card-3.svg" alt="" />
                        <img src="/src/assets/images/Videos card-4.svg" alt="" />
                        <img src="/src/assets/images/Videos card-5.svg" alt="" />
                    </div>
                </div>
            </section>
            </>
      )
}

export default Blog;