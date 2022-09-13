import React, { Component } from 'react'
import axios from 'axios';
import ParallaxBlog from './ParallaxBlog';
import ErrorBoundary from './ErrorBoundary';


class BlogPosts extends Component {
    constructor(props) {
        super(props)
        this.state = {
            posts: []
        }
    }

    componentDidMount() {
        axios.get('http://mohammadmohsin.altervista.org/blog/posts.php')
        //axios.get('http://mohammadmohsin.altervista.org/blog/wp-json/wp/v2/posts')
        .then(response => {
            //console.log(response)
            this.setState({posts: response.data})
        })
        .catch(error=> {
            console.log(error)
        })
    }

    render() {
        const { posts } = this.state
        return (
            <>
            <ErrorBoundary>
                <ParallaxBlog />
            </ErrorBoundary>
            <div className='w3-content w3-container w3-padding-64'>
              <div className='w3-row'>
                <div className='w3-ul w3-large'>
                {
                    posts.length ?
                    posts.map(post => 
                        <div key={post.post_id} className='w3-col m12 w3-container'>
                          <div className='w3-card-4' style={{marginBottom: '64px'}}>

                            <header className='w3-light-grey'>
                                <a className='w3-button w3-block w3-small' style={{padding: '16px'}} href={ post.post_url } target="_blank">
                                <span className='w3-text-gray' style={{}}><i className='fa fa-clock-o'></i> {formatDate(post.post_modified)} | </span>
                                    <span className='w3-text-gray' style={{}}><i className='fa fa-pencil-square-o' aria-hidden="true"></i> {post.auth_first_name} {post.auth_last_name}</span>
                                </a>
                            </header>

                            <hr/>
                            <div className='w3-container'>
                                <a href={ post.post_url } target="_blank">
                                   <img src={post.img_url} alt={post.post_title} className='w3-left' style={{width: 'auto', height: '220px', paddingRight: '16px'}} />
                                </a>
                                <a className='' href={ post.post_url } target="_blank">
                                    <h3 style={{paddingLeft: '16px'}}>{post.post_title}</h3>
                                </a>
                                {/* <p style={{maxHeight: '400px', overflow: 'hidden'}}>{post.post_content}</p> */}
                            </div>
                            <hr/>
                            <a href={ post.post_url } target="_blank" className='w3-button w3-block w3-teal w3-hover-teal w3-opacity w3-hover-opacity-off'>Read More <i className='fa fa-long-arrow-right' aria-hidden="true"></i></a>

                          </div>
                        </div>
                    ) :
                    //<li className='w3-border-0' key={post.post_id} ><a href={ post.post_url } target="_blank">{post.post_title} <img src={post.img_url} />
                    //posts.map(post => <li key={post.id}><a href={ post.guid.rendered } target="_blank">{post.id} {post.title.rendered} </a></li>) :
                    null
                }
                </div>
              </div>
            </div>
            </>
        );
    }
}

function formatDate(newDate) {
    const months = {
      0: 'January',
      1: 'February',
      2: 'March',
      3: 'April',
      4: 'May',
      5: 'June',
      6: 'July',
      7: 'August',
      8: 'September',
      9: 'October',
      10: 'November',
      11: 'December',
    }
    const days = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat']
    const d = new Date(newDate)
    const year = (d.getFullYear())
    const date = d.getDate()
    const monthIndex = d.getMonth()
    const monthName = months[d.getMonth()]
    const dayName = days[d.getDay()] // Thu
    const formatted = `${dayName}, ${date} ${monthName} ${year}`
    return formatted.toString()
  }
  

export default BlogPosts