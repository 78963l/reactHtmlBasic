import NameChangeEx from "./NameChangeEx";

export default function PropsEx() {
    return (
        <div>
            <h1>props: properties</h1>
            <NameChangeEx age={10} />
            <NameChangeEx age={20} />
            <NameChangeEx age={30} />
        </div>
    );
}
