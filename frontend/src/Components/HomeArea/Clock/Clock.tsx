import { useEffect, useState } from "react";
import "./Clock.css";

function Clock(): JSX.Element {
    const [now, setNow] = useState<string>(new Date().toLocaleTimeString());
    useEffect(() =>{

        const intervalId = setInterval(()=>{
            let nowTime = new Date().toLocaleTimeString();
            setNow(nowTime);
            console.log(nowTime);
        }, 1000);

        return ()=> clearInterval(intervalId);

    }, [])

    
    return (
        <div className="Clock Box">
			{now}
        </div>
    );
}

export default Clock;
