import Header from "./components/Header.jsx";
import Sidebar from "./components/Sidebar.jsx";
import Footer from "./components/Footer.jsx";
import Posts from "./components/Posts.jsx";
import Form from "./components/Form.jsx";
import {useReducer, useState} from "react";
import {PostsContext} from "./components/PostsContextProvider.jsx";
import {PostsReducer} from "./store/ReducerFunctions.jsx";

function App() {
    const [postsMenu, setPostsMenu] = useState(true);
    const [posts, dispatchPosts] = useReducer(PostsReducer, []);

    return <div className="flex w-screen h-screen">
        <section>
            <Sidebar isPosts={postsMenu} setPosts={setPostsMenu}/>
        </section>
        <section className="w-full overflow-auto">
            <Header/>
            <PostsContext.Provider value={{posts: posts, method: dispatchPosts}}>
                {
                    postsMenu ? <Posts/> : <Form/>
                }
            </PostsContext.Provider>
            <Footer/>
        </section>
    </div>;
}

export default App
