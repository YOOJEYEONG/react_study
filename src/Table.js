import './App.css';


function Table() {
    const obj = {
        header: ["품목", "가격(원)", "수량(개)"],
        data: [
            {
                fruit: "사과", price: "10000원", ea: "5"
            },
            {
                fruit: "딸기", price: "8000원", ea: "25"
            },
            {
                fruit: "복숭아", price: "15000원", ea: "6"
            },
            {
                fruit: "바나나", price: "3000", ea: "1"
            },
            {
                fruit: "메론", price: "30000원", ea: "1"
            },
            {
                fruit: "수박", price: "22000원", ea: "1"
            },
            {
                fruit: "참외", price: "4000원", ea: "2"
            },
            {
                fruit: "체리", price: "6000원", ea: "30"
            },
            {
                fruit: "포도", price: "7000원", ea: "3"
            },
            {
                fruit: "배", price: "4000원", ea: "1"
            },
        ]
    }

    return (
        <div className="Table">
            <table>
                <thead>
                <tr>
                    {obj.header.map((item) => {
                        return <th>{item}</th>;
                    })}
                </tr>
                </thead>
                <tbody>
                {obj.data.map((item) => {
                    return (
                        <tr>
                            <td>{item.fruit}</td>
                            <td>{item.price}</td>
                            <td>{item.ea}</td>
                        </tr>
                    )
                })}
                </tbody>
            </table>
        </div>
    );
}

export default Table;
