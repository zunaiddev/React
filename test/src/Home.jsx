import {useState} from "react";

function Home() {
    const [count, setCount] = useState(0);

    return <div>
        <h1>Counter</h1>
        <h1>{count}</h1>
        <button onClick={() => setCount(c => c + 1)}>Increment</button>
        <button onClick={() => setCount(c => {
            if (c === 0) return c;
            return c - 1;
        })}>Decrement
        </button>
        <button onClick={() => setCount(0)}>Reset</button>
    </div>;
}

export default Home;