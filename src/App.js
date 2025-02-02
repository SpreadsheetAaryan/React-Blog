import Layout from './Layout';
import Home from './Home';
import EditPost from './EditPost';
import PostPage from './PostPage';
import NewPost from './NewPost';
import About from './About';
import Missing from './Missing';
import { Route, Routes } from 'react-router-dom';
import { useEffect } from 'react';
import useAxios from './hooks/useAxios';
import { useStoreActions } from 'easy-peasy';

function App() {

    const setPosts = useStoreActions((actions) => actions.setPosts);

    const { data, fetchError, isLoading } = useAxios('http://localhost:3500/posts');

    useEffect(() => {
        setPosts(data)
    }, [data, setPosts])
    
    return (
    
        <Routes>

            <Route path="/" element={<Layout/>}>

                <Route index element={
                    <Home
                        isLoading={isLoading}
                        fetchError={fetchError}
                    />
                }/>

                <Route path="post">
                    <Route index element={<NewPost />}/>
                    <Route path=":id" element={<PostPage />}/>
                </Route>

                <Route path="edit">
                    <Route path=":id" element={<EditPost/>} />
                </Route>

                <Route path="about" element={<About />} />
                <Route path="*" element={<Missing />} />

            </Route>

        </Routes>

    );
}

export default App;