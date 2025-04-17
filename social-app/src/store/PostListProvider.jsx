import {useReducer} from "react";
import {PostsContext as PostsContext1} from "./PostsContext.jsx";

function PostsReducer(state, action) {
    switch (action.type) {
        case "ADD_POST":
            return [{
                id: action.payload.id,
                userId: action.payload.userId,
                title: action.payload.title,
                body: action.payload.body,
                reactions: action.payload.reactions,
                tags: action.payload.tags,
            }, ...state];
        case "ADD_POSTS":
            return action.payload.data;
        case "DELETE_POST":
            return state.filter(post => post.id !== action.payload.id);
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

// const DEFAULT_DATA = {
//     id: "1",
//     userId: "user-1",
//     title: "Learning React",
//     body: "Improving my frontend Development Skills",
//     reactions: "10",
//     tags: "Education Frontend Development".split(" "),
// }