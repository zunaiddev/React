import {useReducer} from "react";
import {PostsContext as PostsContext1} from "./PostsContext.jsx";

function PostsReducer(state, action) {
    switch (action.type) {
        case "ADD_POST":
            return [...state, {title: action.payload.title, bio: action.payload.bio}];
        case "DELETE_POST":
            return state.filter(post => post.title !== action.payload.title);
        default:
            return state;
    }
}

export default function PostListProvider({children}) {
    const [postList, dispatchPostList] = useReducer(PostsReducer, []);

    return <PostsContext1 value={{postList, dispatchPostList}}>
        {children}
    </PostsContext1>
}