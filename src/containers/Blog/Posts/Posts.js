import React, { Component } from 'react';
import axios from 'axios';
import { Route } from 'react-router-dom';
// import { Link } from 'react-router-dom';

import './Posts.scss';

import Post from '../../../components/Post/Post';
import FullPost from '../FullPost/FullPost';

class Posts extends Component {

    state = {
        posts: [],
        /* selectedPostId: null,
        error: false, */
    }

    componentDidMount() {
        console.log(this.props);
        axios.get('/posts')
            .then(response => {
                const posts = response.data.slice(0, 4);
                const updatedPosts = posts.map(post => {
                    return {
                        ...post,
                        author: 'Rui',
                    };
                });
                this.setState({
                    posts: updatedPosts,
                });
                // console.log(response);
            })
            .catch(error => {
                console.log(error);
                // this.setState({ error: true });
            });
    }

    postSelectedHandler = (id) => {
        this.props.history.push({ pathname: '/posts/' + id });
        // this.props.history.push('/posts' + id);
        /*         this.setState({
                    selectedPostId: id,
                });
         */
    }

    render() {
        const posts = this.state.posts.map(
            post => {
                return (
                    // <Link to={'/' + post.id} >
                    <Post
                        key={post.id}
                        title={post.title}
                        author={post.author}
                        clicked={() => this.postSelectedHandler(post.id)}
                    />
                    // </Link>
                );
            }
        );
        return (
            <div>
                <Route path={this.props.match.url + "/:id"} component={FullPost} />
                <section className="Posts">
                    {/* {this.state.error ? error : posts} */}
                    {posts}
                </section>
            </div>
        );
    }
}

export default Posts;