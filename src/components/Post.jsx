import PropTypes from "prop-types";

const Post = ({id, title, body}) => {
    return <li className="posts_single-post" data-post-id={id}>
        <h3 className="posts__post-title">{title}</h3>
        <p className="posts__post-description">{body}</p>
    </li>;
};

Post.propTypes = {
    id: PropTypes.number.isRequired,
    title: PropTypes.string.isRequired,
    body: PropTypes.string.isRequired
};

export default Post;