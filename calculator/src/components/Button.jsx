function Button({text, onClick, disabled = false}) {
    return (
        <button type="button" onClick={onClick} value={text} disabled={disabled}
                className={`font-semibold py-4 text-white bg-gray-800 hover:bg-gray-900 rounded-md text-2xl dark:bg-gray-800 dark:hover:bg-gray-700 dark:border-gray-700 cursor-pointer flex justify-center`}>
            {text}
        </button>
    );
}

export default Button;