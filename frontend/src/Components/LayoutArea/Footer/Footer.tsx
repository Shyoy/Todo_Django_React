import "./Footer.css";


const date = new Date().toLocaleDateString();


function Footer(): JSX.Element {
    return (
        <div className="Footer">
			<p>All Right Reserved &copy;      &nbsp;  {date}</p> 
        </div>
    );
}

export default Footer;
