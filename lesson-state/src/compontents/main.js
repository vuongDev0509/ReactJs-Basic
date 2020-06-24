import React from 'react';
import Slider from './main/slider.js'
import Services from './main/services.js'
import VideoFaq from './main/video_faq.js'
import RecentBlog from './main/recent-blog.js';
import Products from './main/product.js';
class Main extends React.Component {
  render() {
    return (
    <main id="main" className="site-main" role="main">
        <Slider />
        <Services />
        <VideoFaq />
        <RecentBlog />
        <Products />
    </main>
    );
  }
}
export default Main;