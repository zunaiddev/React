import Header from "./components/Header.jsx";
import Sidebar from "./components/Sidebar.jsx";
import Footer from "./components/Footer.jsx";
import Posts from "./components/Posts.jsx";
import Form from "./components/Form.jsx";
import {useState} from "react";
import PostListProvider from "./store/PostListProvider.jsx";

function App() {
    const [postsMenu, setPostsMenu] = useState(true);

    return <div className="flex w-screen h-screen">
        <section>
            <Sidebar isPosts={postsMenu} setPosts={setPostsMenu}/>
        </section>
        <section className="w-full overflow-auto">
            <Header/>
            <PostListProvider>
                {postsMenu ? <Posts/> : <Form/>}
            </PostListProvider>
            <Footer/>
        </section>
    </div>;
}

export default App
