import {useContext} from "react";
import {ItemState} from "./store/ContextStore.jsx";

function DisplayName() {
    const name = useContext(ItemState);

    return (
        <h1>Name: {name}</h1>
    );
}

export default DisplayName;