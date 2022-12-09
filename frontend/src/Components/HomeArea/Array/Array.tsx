import "./Array.css";

function Array(): JSX.Element {

    function getRandomPrice(min:number, max:number){
        const price = Math.floor(min + Math.random() * max)
        return price;
    }

    let arr = [
        {id: 1, name:"Chips", price:getRandomPrice(10, 20)},
        {id: 2, name:"Cheese", price:getRandomPrice(15, 20)},
        {id: 3, name:"Yogurt", price:getRandomPrice(15, 30)},
        {id: 4, name:"Milk", price:getRandomPrice(5, 10)},
        {id: 5, name:"Burger", price:getRandomPrice(30, 50)},
    ]

    return (
        <div className="Array">
            { arr.map(a=><span ><span className="Box" >Name: {a.name} <br/>Price: {a.price}</span><br/></span>)}
        </div>
    );
}

export default Array;
