import logo from "./logo.svg";
import "./App.css";
import PropsEx from "./component/PropsEx";

function App() {
    const name = "sungmin";
    const naver = {
        name: "네이버",
        url: "https://naver.com",
    };
    return (
        <div className="App">
            <p>{name}</p>
            <a href={naver.url}>{naver.name}</a>
            {/* <Hello /> */}
            <PropsEx />
        </div>
    );
}

export default App;
