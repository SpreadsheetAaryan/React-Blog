import { useParams, Link } from "react-router-dom";
import { useStoreState, useStoreActions } from 'easy-peasy';
import { useNavigate } from "react-router-dom";

const PostPage = () => {

    const {id} = useParams();
    const navigate = useNavigate();

    const deletePost = useStoreActions((actions) => actions.deletePost);
    const getPostById = useStoreState((state) => state.getPostById);
    const post = getPostById(id);

    const handleDelete = (id) => {
        deletePost(id);
        navigate('/');
    }

    return (
        <main className="PostPage">
            <article className="post">
                {post && 
                    <>
                        <h2>{post.title}</h2>
                        <p className="postDate">{post.datetime}</p>
                        <p className="postBody">{post.body}</p>
                        <Link to={`/edit/${post.id}`}><button className="edit">Edit</button></Link>
                        <button onClick={() => handleDelete(post.id)} className="delete">
                            Delete Post
                        </button>
                    </>
                }
                {!post &&
                    <>
                        <h2>Post Not Found</h2>
                        <p>Well, that's disappointing</p>
                        <p>
                            <Link to="/" >Visit Our Homepage</Link>
                        </p>
                    </>
                }
            </article>
        </main>
    )
}

export default PostPage