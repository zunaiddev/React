export function PostsReducer(state, action) {
    switch (action.type) {
        case "ADD_POST":
            return [...state, {title: action.payload.title, bio: action.payload.bio}];
        case "DELETE_POST":
            return state.filter(post => post.title !== action.payload.title);
        default:
            return state;
    }
}