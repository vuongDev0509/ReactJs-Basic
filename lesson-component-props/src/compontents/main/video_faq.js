import React from 'react';
class VideoFaq extends React.Component {
  render() {
    let video_faq = [
      {
        id: '1',
        name: 'Videos',
        excerpt: 'Enjoy our video tips to improve your team work.',
        button: 'Read More',
        image: '../../image/icon-001.png',
        link: '#!'
      },
      {
        id: '2',
        name: 'FAQ',
        excerpt: 'All your questions answered by our experts.',
        button: 'Read More',
        image: '../../image/icon-002.png',
        link: '#!'
      }
    ];
    let elementsVideoFaq = video_faq.map((items,  index) =>{
        return <div className="bt-items-video-faq" key={items.id}> 
            <div className="bt-thumbnail"> <div className="bt-image"> </div></div>
            <div className="bt-meta-video-faq"> 
              <h2 className="bt-title"> {items.name}</h2>
              <div className="bt-excerpt">{items.excerpt}</div>
              <div className="bt-btn"> <a >{items.button} </a></div>
            </div>
        </div>
    });
    return (
      <section className="bt-section bt-ss-video-faq">
      	<div className="container"> 
      		<div className="row"> 
      			<div className="bt-content-video_faq"> {elementsVideoFaq} </div>
      		</div>
      	</div>
      </section>
    );
  }
}
export default VideoFaq;