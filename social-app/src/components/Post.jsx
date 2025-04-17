import {useContext} from "react";

import {PostsContext} from "../store/PostsContext.jsx";
import {IoMdTrash} from "react-icons/io";

function Post({post}) {
    const {dispatchPostList} = useContext(PostsContext);

    function handleDelete() {
        dispatchPostList({type: "DELETE_POST", payload: {id: post.id}});
    }

    return (
        <div
            className="relative space-y-2 block max-w-sm p-6 bg-white border border-gray-200 rounded-lg shadow-sm dark:bg-gray-800 dark:border-gray-700 min-h-[200px] min-w-100">
            <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">{post.title}</h5>
            <p className="font-normal text-gray-700 dark:text-gray-400">{post.body}</p>
            {post.tags.map(tag => <Button key={tag} text={tag}/>)}
            <div className="p-4 mb-4 text-sm text-blue-800 rounded-lg bg-blue-50 dark:bg-gray-700 dark:text-blue-400"
                 role="alert">
                {post.reactions.likes} People Reacted on your Post
            </div>

            <IoMdTrash
                className="size-7 hover:text-red-500 absolute top-[-3%] right-[-3%]  cursor-pointer bg-gray-800 p-1 rounded-full"
                onClick={handleDelete}/>
        </div>
    );
}

export function Button({text, onClick}) {
    return <button type="button" onClick={onClick}
                   className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800 cursor-pointer">{text}</button>
}

export default Post;