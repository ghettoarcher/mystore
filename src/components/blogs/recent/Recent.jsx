import BlogHorizontal from "../BlogHorizontal/BlogHorizontal";

const Recent = ({size,height,fontSize}) => {
      return(
            <div className={`recent gap-4 d-flex flex-column`}>
                  <div className={`${fontSize}`}>Recent posts</div>
                  <BlogHorizontal title={'8 Things You Probably Didn’t Know About Headphones'} subtitle={'Owning a headphone could mean a different thing for different'} date={'March , 28 , 2023'} img={'/src/assets/images/blog-img6.svg'} size={size} height={height} />
                  <BlogHorizontal title={'8 Things You Probably Didn’t Know About Headphones'} subtitle={'Owning a headphone could mean a different thing for different'} date={'March , 28 , 2023'} img={'/src/assets/images/blog-img5.svg'} size={size} height={height}/>
                  <BlogHorizontal title={'8 Things You Probably Didn’t Know About Headphones'} subtitle={'Owning a headphone could mean a different thing for different'} date={'March , 28 , 2023'} img={'/src/assets/images/blog-img6.svg'} size={size} height={height}/>
                  <BlogHorizontal title={'8 Things You Probably Didn’t Know About Headphones'} subtitle={'Owning a headphone could mean a different thing for different'} date={'March , 28 , 2023'} img={'/src/assets/images/blog-img7.svg'} size={size} height={height}/>
            </div>
      )
}

export default Recent;