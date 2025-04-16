import {FaTrash} from "react-icons/fa";
import {useContext} from "react";
import {PostsContext} from "./PostsContextProvider.jsx";

function Post({title, bio}) {
    const {method} = useContext(PostsContext);

    return (
        <div className="relative">
            <a href="#"
               className="block max-w-sm p-6 bg-white border border-gray-200 rounded-lg shadow-sm hover:bg-gray-100 dark:bg-gray-800 dark:border-gray-700 dark:hover:bg-gray-700 min-h-[200px]">

                <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">{title}</h5>
                <p className="font-normal text-gray-700 dark:text-gray-400">{bio}</p>
            </a>
            <FaTrash className="size-4 hover:text-red-700 absolute bottom-2 right-2 cursor-pointer"
                     onClick={() => method({type: "DELETE_POST", payload: {title}})}/>
        </div>
    );
}

export default Post;