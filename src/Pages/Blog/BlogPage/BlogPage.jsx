import Path from '../../../components/path/Path';
import Recent from '../../../components/blogs/recent/Recent';
import Comment from '../../../components/Comment/Comment';
import Tag from '../../../components/Tag/Tag';
const BlogPage = () => {
      return(
            <div className="blog-page">
                  <div className="container">
                  <Path secondPath={'Blog'}/>
                  <div className="blog-page-wrapper d-flex flex-row justify-content-between">
                        <div className="blog-page-content">
                              <div className="blog-title">5 Things You Probably Didn’t Know About Headphones</div>
                              <div className="blog-author">By Geaorge larens on March , 28 , 2023</div>
                              <img className="blog-img" src="/src/assets/images/blog-img.svg" alt="" />
                              <div className="blog-text">
                                    Headphones have become an integral part of our daily lives, allowing us to enjoy music, podcasts, and calls with convenience and privacy.
                                    While most of us are familiar with their basic functions, there are several intriguing facts about headphones that might surprise you.
                                    In this article, we ll delve into eight things you probably didn t know about headphones, shedding light on their history, technology,
                                    and unique features. <br /><span>1-Stereo Sound Perception <br /></span>Ever wondered how headphones manage to create a three-dimensional sound experience? This
                                    phenomenon is called binaural perception, which utilizes the slight time differences it takes for sound to reach each ear, thus tricking 
                                    the brain into perceiving depth and direction in audio. <br /> <span>2-Noise-Canceling Magic <br /></span> Noise-canceling headphones use a sophisticated technology 
                                    that analyzes external sounds and emits an anti-noise signal to counteract them. This process results in the suppression of unwanted 
                                    background noise, offering a peaceful listening experience even in bustling environments. <br /><span>3-Bone Conduction Technology </span> <br />Some headphones, 
                                    particularly designed for sports and outdoor activities, employ bone conduction technology. Instead of covering or inserting into the ears,
                                    these headphones sit on your cheekbones and transmit sound vibrations through your bones directly to the inner ear, leaving your ears open 
                                    to hear ambient sounds.<br/><span>4-Virtual Surround Sound</span> <br />High-end headphones offer virtual surround sound, which simulates a multi-speaker setup for a
                                    cinema-like experience. This is achieved by using advanced algorithms to manipulate audio signals, creating the illusion that sound is coming
                                    from various directions. <br /><span>5-Wired vs. Wireless</span> <br />While wireless headphones are incredibly convenient, wired headphones can still offer superior audio
                                          quality due to the lack of data compression and transmission loss associated with wireless technology.
                                          <div className="blog-feedback d-flex flex-row justify-content-end gap-2">
                                                <div className="blog-comment">
                                                      <img src="/src/assets/icons/edit-black.svg" alt="comments" /> 3 Comments
                                                </div>
                                                <div className="blog-like"><img src="/src/assets/icons/like-black.svg" alt="like" />2 Likes</div>
                                                
                                          
                                          
                                          </div>
                              </div>
                              <div className='comments'>
                              <h5>Comments</h5>
                              <div className="comments-content d-flex flex-column gap-2 mt-4">
                                    <Comment/>
                                    <Comment/>
                                    <Comment/>
                                    <div className="leave-comment d-flex flex-column gap-2 ">
                                          <h5>Leave a Comment</h5>
                                          <input type="text" id='comment' placeholder='Share your thoughts about this product here' />
                                          <div className='d-flex flex-row justify-content-end'>
                                                <input type="submit" className='submit d-flex flex-row justify-content-center' />
                                          </div>
                                    </div>

                                    
                              </div>
                  </div>
                        </div>
                        <div className="aside d-flex flex-column">
                        <Recent size={'padding-small'} height={'height-small'} fontSize={'fs-5'} subtitleSize={'fs-6'} />
                        <div className="tags">
                        <h5 className='mt-5'>Tags</h5>
                        <div className="tag-items d-flex flex-row flex-wrap mt-3">
                              <Tag text={'Technology'}/>
                              <Tag text={'Headset'}/>
                              <Tag text={'Phone'}/>
                              <Tag text={'Wireless'}/>
                              <Tag text={'Apple'}/>
                        </div>
                        </div>
                        <h5 className='mt-5'>Share</h5>
  
                        </div>
                        
                  </div>

                  </div>
            </div>
      )
}

export default BlogPage;