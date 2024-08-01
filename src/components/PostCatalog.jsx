import React from "react";
import Post from "./Post";

class PostCatalog extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            posts: []
        };

        this.fetchPosts();
    }

    async fetchPosts() {
        const request = await fetch("https://jsonplaceholder.typicode.com/posts");
        const data = await request.json();
        this.setState({posts: data});
    }

    render() {
        const {posts} = this.state;
        return <div className="posts">
            <ul className="posts__list">
                {posts.map((post) => {
                    return <Post key={post.id} id={post.id} title={post.title} body={post.body}/>;
                })}
            </ul>
        </div>;
    }
}

export default PostCatalog;