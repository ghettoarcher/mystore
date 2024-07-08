import BlogHorizontal from "../BlogHorizontal/BlogHorizontal";

const Recent = ({size,height,fontSize,subtitleSize}) => {
      return(
            <div className={`recent gap-4 d-flex flex-column`}>
                  <div className={`${fontSize}`}>Recent posts</div>
                  <BlogHorizontal title={'8 Things You Probably Didn’t Know'} subtitle={'Owning a headphone could mean a'} date={'March , 28 , 2023'} img={'/src/assets/images/blog-img6.svg'} size={size} height={height} subtitleSize={'fs-6'} />
                  <BlogHorizontal title={'8 Things You Probably Didn’t Know'} subtitle={'Owning a headphone could mean a'} date={'March , 28 , 2023'} img={'/src/assets/images/blog-img5.svg'} size={size} height={height} subtitleSize={'fs-6'}/>
                  <BlogHorizontal title={'8 Things You Probably Didn’t Know'} subtitle={'Owning a headphone could mean a'} date={'March , 28 , 2023'} img={'/src/assets/images/blog-img6.svg'} size={size} height={height} subtitleSize={'fs-6'}/>
                  <BlogHorizontal title={'8 Things You Probably Didn’t Know'} subtitle={'Owning a headphone could mean a'} date={'March , 28 , 2023'} img={'/src/assets/images/blog-img7.svg'} size={size} height={height} subtitleSize={'fs-6'}/>
            </div>
      )
}

export default Recent;