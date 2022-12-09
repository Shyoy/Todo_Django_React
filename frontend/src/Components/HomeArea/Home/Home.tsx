
import Clock from "../Clock/Clock";
import Sales from "../Sales/Sales";
import "./Home.css";

function Home(): JSX.Element {
    

    // let product = TodoModel()
    
    // useEffect(() =>{
    //     productService;
    // },[])
    // const [count, setCount] = useState<number>(0)

    return (
        <div className="Home">
			<Clock/>
            <Sales/>
        </div>
    );
}

export default Home;
