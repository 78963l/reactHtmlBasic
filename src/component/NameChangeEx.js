import { useState } from "react";
import UserName from "./UserName";

export default function NameChangeEx(props) {
    const [name, setName] = useState("Mike");
    const [age, setAge] = useState(props.age);
    const msg = age > 19 ? "성인입니다." : "미성년자 입니다.";
    return (
        <div>
            <UserName name={name} />
            <p>
                {name}({age}):{msg}
            </p>
            <button onClick={() => setName(name === "Mike" ? "Jane" : "Mike")}>change</button>
            <button onClick={() => setAge(age + 1)}>NumPlus</button>
        </div>
    );
}
