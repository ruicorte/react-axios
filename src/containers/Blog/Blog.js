import React, { Component } from 'react';
import axios from 'axios';

import Post from '../../components/Post/Post';
import FullPost from '../../components/FullPost/FullPost';
import NewPost from '../../components/NewPost/NewPost';
import './Blog.css';

class Blog extends Component {

    state = {
        posts: [],
        selectedPostId: null,
        error: false,
    }

    componentDidMount() {
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
            .catch(error => this.setState({ error: true }));
    }

    postSelectedHandler = (id) => {
        this.setState({
            selectedPostId: id,
        });
    }

    render() {
        const posts = this.state.posts.map(
            post => {
                return <Post
                    key={post.id}
                    title={post.title}
                    author={post.author}
                    clicked={() => this.postSelectedHandler(post.id)}
                />;
            }
        );
        const error = <p>something went wrong...</p>;
        return (
            <div>
                <section className="Posts">
                    {this.state.error ? error : posts}
                </section>
                <section>
                    <FullPost id={this.state.selectedPostId} />
                </section>
                <section>
                    <NewPost />
                </section>
            </div>
        );
    }
}

export default Blog;