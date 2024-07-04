import BlogHorizontal from "./BlogHorizontal/BlogHorizontal";

const Recent = () => {

      return(
            <div className="recent gap-4 d-flex flex-column mt-5">
                  <div className="h4">Recent posts</div>
                  <BlogHorizontal title={'8 Things You Probably Didn’t Know About Headphones'} subtitle={'Owning a headphone could mean a different thing for different'} date={'March , 28 , 2023'} img={'/src/assets/images/blog-img6.svg'} />
                  <BlogHorizontal title={'8 Things You Probably Didn’t Know About Headphones'} subtitle={'Owning a headphone could mean a different thing for different'} date={'March , 28 , 2023'} img={'/src/assets/images/blog-img5.svg'} />
                  <BlogHorizontal title={'8 Things You Probably Didn’t Know About Headphones'} subtitle={'Owning a headphone could mean a different thing for different'} date={'March , 28 , 2023'} img={'/src/assets/images/blog-img6.svg'} />
                  <BlogHorizontal title={'8 Things You Probably Didn’t Know About Headphones'} subtitle={'Owning a headphone could mean a different thing for different'} date={'March , 28 , 2023'} img={'/src/assets/images/blog-img7.svg'} />
            </div>
      )
}

export default Recent;