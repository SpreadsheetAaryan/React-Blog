import { useEffect } from "react";
import { useParams, Link, useNavigate } from "react-router-dom";
import { useStoreState, useStoreActions } from "easy-peasy";
import { format } from "date-fns";

const EditPost = () => {

    const navigate = useNavigate();
    const { id } = useParams();

    const editPostTitle = useStoreState((state) => state.editPostTitle);
    const editBody = useStoreState((state) => state.editPostBody);

    const editPost = useStoreActions((actions) => actions.editPost);
    const setEditPostTitle = useStoreActions((actions) => actions.setEditPostTitle);
    const setEditPostBody = useStoreActions((actions) => actions.setEditPostBody);

    const getPostById = useStoreState((state) => state.getPostById);
    const post = getPostById(id);

    useEffect(() => {
        if (post) {
            setEditPostTitle(post.title);
            setEditPostBody(post.body);
        }
    }, [post, setEditPostBody, setEditPostTitle])

    const handleEdit = (id) => {
        const datetime = format(new Date(), 'MMMM dd, yyyy pp');
    
        const post = {
            id: id,
            title: editPostTitle,
            datetime: datetime,
            body: editBody
        }

        editPost(post);

        navigate(`/post/${id}`);
    }

    return (
        <main className="NewPost">
            {editPostTitle &&
                <>
                    <h2>Edit Post</h2>
                    <form className="newPostForm" onSubmit={(e) => e.preventDefault()}>
                        <label htmlFor="postTitle">Title:</label>
                        <input 
                            id="postTitle"
                            type="text"
                            required
                            value={editPostTitle}
                            onChange={(e) => setEditPostTitle(e.target.value)}
                        />
                        <label htmlFor="postBody">Body:</label>
                        <textarea 
                            id="postBody"
                            required
                            value={editBody}
                            onChange={(e) => setEditPostBody(e.target.value)}
                        />
                        <button type="button" onClick={() => handleEdit(post.id)}>Submit</button>
                    </form>
                </>
            }
            {!editPostTitle &&
                <>
                    <h2>Post Not Found</h2>
                    <p>Well, that's disappointing</p>
                    <p>
                        <Link to="/" >Visit Our Homepage</Link>
                    </p>
                </>
            }
        </main>
    )
}

export default EditPost