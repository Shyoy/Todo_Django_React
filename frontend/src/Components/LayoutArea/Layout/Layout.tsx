import Footer from "../Footer/Footer";
import Header from "../Header/Header";
import Array from "../../HomeArea/Array/Array";
import Main from "../Main/Main";
import Menu from "../Menu/Menu";
import "./Layout.css";
import Routing from "../Routing/Routing";

function Layout(): JSX.Element {
    return (
        <div className="Layout">
			<header><Header></Header></header>
            <aside><Menu></Menu></aside>
            <main><Routing></Routing></main>
            <footer><Footer></Footer></footer>
        </div>
    );
}

export default Layout;
