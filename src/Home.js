import { useStoreState } from 'easy-peasy';
import Post from './Post';

const Home = ({isLoading, fetchError}) => {

    const searchResults = useStoreState((state) => state.searchResults);

    return (
        <main className="Home">
            {isLoading && <p className='statusMsg'>Loading Posts...</p>}

            {!isLoading && fetchError && <p className='statusMsg' style={{color: "red"}}>{fetchError}</p>}

            {!isLoading && !fetchError && (searchResults.length ? 
                 
                 (searchResults.map((post => <Post key={post.id} post={post} />)))
                 
                 : <p className='statusMsg'>No Posts To Display</p>
            )}
        </main>
    )
}

export default Home;