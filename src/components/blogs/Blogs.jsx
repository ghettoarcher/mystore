import Title from "/src/components/title/Title";
import BlogList from "/src/components/blogs/BlogList";
import MainBlog from "/src/components/blogs/MainBlog";
export default function Blogs(){
      const blogData = [
            {     
                  id:1,
                  img: '/src/assets/images/blog-image1.png',
                  title: '8 Things You Probably Didn’t Know About Headphones',
                  description: 'Owning a headphone could mean a different thing for different people. For some, it act as a fashion statement. It’s easy to spot these people, the headphone are a...',
                  date: 'March , 28 , 2023',
            },
            {
                  id:2,
                  img: '/src/assets/images/blog-image2.png',
                  title: 'Analyzing the August 17th Bitcoin Price Drop',
                  description: 'On August 17th at 9:30PM UTC, Bitcoin’s price dropped more than 8% in a 10-minute window, to a two-month low of under $26k. This pulled...',
                  date: 'August , 17 , 2023',
            },
      ]
      const mainBlogData = [
            {
                  img:'src/assets/images/image.png',
                  id:1,
                  date:'August , 8 , 2023',
                  title:'Meta Platforms plans to release free',
                  description:'The parent company of Facebook, Meta Platforms, is introducing software to help devel',
                  readTime:'3 min read',

      }
      ]
      return(
            <section className="blogs">
                  <div className="container">
                  <Title name = {'Our Blogs'}/>
                  <div className="blogs-content d-flex flex-row">
                        <MainBlog data ={mainBlogData}/>
                        <div className="blogs-small d-flex flex-column justify-content-between">
                              <BlogList data = {blogData}/>
                        </div>
            </div>
                  </div>
            </section>

            

      )
}