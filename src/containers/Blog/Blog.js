import React, { Component } from 'react';
// import axios from 'axios';

// import Post from '../../components/Post/Post';
// import FullPost from './FullPost/FullPost';
import NewPost from './NewPost/NewPost';

import './Blog.scss';

import Posts from './Posts/Posts';
// import FullPost from './FullPost/FullPost';

import { Route, NavLink, Switch, Redirect } from 'react-router-dom';

class Blog extends Component {
    state = {
        auth: false,
    };

    render() {
        // const error = <p>something went wrong...</p>;
        return (
            <div className='Blog'>
                <header>
                    <nav>
                        <ul>
                            <li><NavLink to="/posts" exact activeStyle={{ color: 'blue' }}>Home</NavLink></li>
                            {/* <li><NavLink to="/" exact activeClassName="my-active">Home</NavLink></li> */}
                            <li><NavLink to={{
                                pathname: '/new-post',
                                hash: '#submit',
                                search: 'quick-submit=true',
                            }}>New Post</NavLink></li>
                            {/* <li><a href="/">Home</a></li> */}
                            {/* <li><a href="/new-post">New Post</a></li> */}
                        </ul>
                    </nav>
                </header>

                {/* <Posts /> */}

                {/* <Route path="/" exact render={() => <h1>home</h1>} /> */}
                {/* <Route path="/" exact render={() => <Posts />} /> */}
                <Switch>
                    {/* <Route path="/new-post" component={NewPost} /> */}
                    {this.state.auth ? <Route path="/new-post" component={NewPost} /> : null}
                    <Route path="/posts" component={Posts} />
                    <Route render={() => <h1>not found</h1>} />
                    {/* <Redirect from='/' to='/posts' /> */}
                    {/* <Route path="/" component={Posts} /> */}
                </Switch>
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