import Title from "/src/components/title/Title";
import BlogHorizontal from "./BlogHorizontal/BlogHorizontal";
import BlogVertical from "./BlogVertical";
export default function Blogs(){

      return(
            <section className="blogs">
                  <div className="container">
                  <Title name = {'Our Blogs'}/>
                  <div className="blogs-content d-flex flex-row">
                        <BlogVertical img={'/src/assets/images/blog-img1.svg'} title={'Meta Platforms plans to release fre...'} subtitle={'The parent company of Facebook, Meta '} date={'August , 8 , 2023'} readtime={'3 min read'}/>
                        <div className="blogs-small d-flex flex-column justify-content-between gap-2">
                        <BlogHorizontal title={'8 Things You Probably Didn’t Know About Headphones'} subtitle={'Owning a headphone could mean a different thing for different'} date={'March , 28 , 2023'} img={'/src/assets/images/blog-img6.svg'}/>
                        <BlogHorizontal title={'8 Things You Probably Didn’t Know About Headphones'} subtitle={'Owning a headphone could mean a different thing for different'} date={'March , 28 , 2023'} img={'/src/assets/images/blog-img6.svg'}/>
                        </div>
            </div>
                  </div>
            </section>

            

      )
}