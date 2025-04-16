import Post from "./Post.jsx";
import {useContext} from "react";

import {PostsContext} from "../store/PostsContext.jsx";

function Posts() {
    const {postList} = useContext(PostsContext);
    return (
        <div className="w-full flex flex-wrap gap-3 p-6 overflow-auto">
            {postList.length === 0 && <h1 className="text-2xl font-bold">Could not found any post</h1>}
            {postList.map((post, i) => <Post key={i} title={post.title} bio={post.bio}/>)}
        </div>
    );
}

export default Posts;