import {useState} from "react";
import Post from "./Post";

const PostCatalog = () => {
    const [posts, setPosts] = useState([]);

    fetchPosts().then(posts => setPosts(posts));

    return <div className="posts">
        <ul className="posts__list">
            {posts.map((post) => {
                return <Post key={post.id} id={post.id} title={post.title} body={post.body}/>;
            })}
        </ul>
    </div>;
};

const fetchPosts = () => {
    return fetch("https://jsonplaceholder.typicode.com/posts")
        .then(res => res.json());
};


export default PostCatalog;