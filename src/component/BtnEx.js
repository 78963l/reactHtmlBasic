export default function BtnTest() {
    function showName(name) {
        console.log(name);
    }
    function showAge(age) {
        console.log(age);
    }
    return (
        <div>
            <h1>Hello</h1>
            <button onClick={() => showName("sungmin.kim")}>Show Name</button>
            <button onClick={() => showAge("29")}>Show age</button>
            <input type="text" onChange={e => console.log(e.target.value)}></input>
        </div>
    );
}
