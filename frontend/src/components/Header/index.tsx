import logo from "../../assets/img/logo.svg";
import "./styles.css";

function Header() {
    return (
        <>
        <header>
            <div className="dsmeta-logo-container">
                <img src={logo} alt="DSMeta" />
                <h1>DSMeta</h1>
                <p>
                    Desenvolvido por
                    <a target="_blank" href="https://www.linkedin.com/in/fernando-souza-499579149/"> @Fernando Souza</a>
                </p>
            </div>
        </header>
        </>
    )
}

export default Header;