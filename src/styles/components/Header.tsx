import "../../components/homepage/header.scss"

export default function Header() {
    return (
        <div className="header">
            <div className="topnav">
                <a href="/App">La sophrologie</a>
                <a href="/App">L’hypnose</a>
                <a href="/App">Séances</a>
                <a href="/App">Contact</a>
            </div>
            <div className="title">
                <h2>Laure</h2>
                <h1>DAUVILLIERS</h1>
                <h3>Sophrologue</h3>
            </div>
        </div>
    );
}