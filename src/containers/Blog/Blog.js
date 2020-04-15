import React, { Component } from 'react';
// import axios from 'axios';

// import Post from '../../components/Post/Post';
// import FullPost from './FullPost/FullPost';
// import NewPost from './NewPost/NewPost';

import './Blog.scss';

import Posts from './Posts/Posts';

import { Route } from 'react-router-dom';

class Blog extends Component {

    render() {
        // const error = <p>something went wrong...</p>;
        return (
            <div className='Blog'>
                <header>
                    <nav>
                        <ul>
                            <li><a href="/">Home</a></li>
                            <li><a href="/new-post">New Post</a></li>
                        </ul>
                    </nav>
                </header>

                {/* <Posts /> */}

                {/* <Route path="/" exact render={() => <h1>home</h1>} /> */}
                <Route path="/" exact render={() => <Posts />} />

            </div>
        );
    }
}

// <section>
//     <FullPost id={this.state.selectedPostId} />
// </section>
// <section>
//     <NewPost />
// </section> 

export default Blog;