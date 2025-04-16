import {useContext, useRef} from "react";

import {PostsContext} from "../store/PostsContext.jsx";

function Form() {
    const userIdRef = useRef(null);
    const titleRef = useRef(null);
    const contentRef = useRef(null);
    const reactionsRef = useRef(null);
    const tagsRef = useRef(null);

    const {dispatchPostList} = useContext(PostsContext);

    function handleSubmit(e) {
        e.preventDefault();
        dispatchPostList({
            type: "ADD_POST",
            payload: {
                id: Date.now(),
                userId: userIdRef.current.value,
                title: titleRef.current.value,
                body: contentRef.current.value,
                reactions: reactionsRef.current.value,
                tags: tagsRef.current.value.toString().split(" "),
            }
        });
        userIdRef.current.value = titleRef.current.value = contentRef.current.value = reactionsRef.current.value = tagsRef.current.value = "";
    }

    return (
        <form className="w-full p-5 flex flex-col gap-4" onSubmit={handleSubmit}>
            <input
                className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                placeholder="User id" required ref={userIdRef}/>

            <input
                className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                placeholder="Post Title" required ref={titleRef}/>

            <textarea rows="4"
                      className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                      placeholder="Post Content" required ref={contentRef}/>

            <input
                className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                placeholder="Number of reactions" required ref={reactionsRef}/>

            <input
                className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                placeholder="Enter your tags here" required ref={tagsRef}/>

            <button
                className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800 cursor-pointer">Post
            </button>
        </form>);
}

export default Form;