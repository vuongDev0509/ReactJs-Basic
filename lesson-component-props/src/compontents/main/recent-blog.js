import React from 'react';
class RecentBlog extends React.Component {
  render() {
    let blog =[
      {
        id: '1',
        title: 'Are you wasting time &',
        date: 'Feb 6, 2020',
        view: '8 Views',
        Comment:'Write A Comment',
        image: '..../image/image-post-001.jpg'
      },
      {
        id: '2',
        title: '5 Tips to make the best of your.',
        date: 'Feb 6, 2020',
        view: '10 Views',
        Comment:'Write A Comment',
        image: '../../image/image-post-002.jpg'
      },
      {
        id: '3',
        title: 'Know your company’s DNA',
        date: 'Feb 6, 2020',
        view: '20 Views',
        Comment:'Write A Comment',
        image: '../../image/image-post-003.jpg'
      }
    ];
    let elementsBlog = blog.map((blogs, index) =>{
      return <div className="bt-items-blogs" key={blogs.id}> 
        <div className="bt-container-blog"> 
          <div className="bt-thumbnail-post"> <img src={blogs.image} alt="image-blog" /> </div>
          <div className="bt-content-post"> 
            <div className="bt-date-post">{blogs.date}</div>
            <h3 className="bt-title"> {blogs.title}</h3>
          </div>
          <ul className="bt-meta-post">
            <li>{blogs.view}</li> 
            <li>{blogs.Comment}</li> 
          </ul>
        </div>
      </div>
    });
    return (
      <section className="bt-section bt-ss-recent-blog">
      	<div className="container"> 
      		<div className="row"> 
      			<div className="bt-grid-recent-blog"> 
             <h2 className="bt-title"> Recent Posts </h2>
              <div className="bt-content-grid-recent-blog"> 
                {elementsBlog}
              </div>
            </div>
      		</div>
      	</div>
      </section>
    );
  }
}
export default RecentBlog;