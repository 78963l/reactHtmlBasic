import { useState } from "react";

export default function StateEx() {
    const [name, setName] = useState("Mike");
    function changeName() {
        setName(name === "Mike" ? "Jane" : "Mike");
    }

    return (
        <div>
            <h1>state</h1>
            <h2>{name}</h2>
            <button onClick={changeName}>Change</button>
            {/* <button onClick={() => setName(name === "Mike" ? "Jane" : "Mike")}>Change</button> */}
        </div>
    );
}
