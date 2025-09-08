import {useEffect, useState} from "react";

function About() {
    const [data, setData] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        (async function () {
            setLoading(true);
            let res = await fetch("https://jsonplaceholder.typicode.com/posts");
            setData(await res.json());
            setLoading(false);
        })();
    }, []);

    if (loading) {
        return <h1>Loading...</h1>;
    }

    return <div>
        <h1>Data Founded</h1>
        {data && data.slice(0, 5).map((d, i) => {
            return <div key={i} style={{
                marginBottom: '10px',
            }}>
                <h1>user id: {d.userId}</h1>
                <h1>id: {d.id}</h1>
                <h1>Title: {d.title}</h1>
                <h1>Body: {d.body}</h1>
            </div>
        })}
    </div>
}

export default About;