import Post from "./Post.jsx";
import {useContext} from "react";
import {PostsContext} from "./PostsContextProvider.jsx";

function Posts() {
    const {posts} = useContext(PostsContext);
    return (
        <div className="w-full flex flex-wrap gap-3 p-6 overflow-auto">
            {posts.length === 0 && <h1 className="text-2xl font-bold">Could not found any post</h1>}
            {posts.map((post, i) => <Post key={i} title={post.title} bio={post.bio}/>)}
        </div>
    );
}

export default Posts;