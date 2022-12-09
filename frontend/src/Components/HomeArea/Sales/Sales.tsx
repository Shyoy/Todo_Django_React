import "./Sales.css";

function Sales(): JSX.Element {

    function isWeekend(): boolean {
        const day = new Date().getDay();
        return day > 5

    }

    function afterFive(): boolean {
        const hour = new Date().getHours();
        return hour > 17;
    }

    return (
        <div className="Sales">
			{afterFive() || isWeekend() ?
            <span>Weekend Sales 30% on all Products</span>:<span>Lame Weekly Sales 10% on all Products</span>
             }
            
        </div>
    );
}

export default Sales;
