import Button from "./Button.jsx";
import backspace from "../assets/backspace.png";
import {useState} from "react";

function Calculator() {
    const [calcVal, setCalcVal] = useState('');
    const buttonText = [
        "",
        "%",
        "C",
        <img src={backspace} alt="cur" className="size-9"/>,
        "1",
        "2",
        "3",
        "+",
        "4",
        "5",
        "6",
        "-",
        "7",
        "8",
        "9",
        "*",
        "0",
        ".",
        "=",
        "/"
    ];

    function buttonClick(e) {
        let value = e.target.value;

        if (value === "C") {
            setCalcVal("")
        } else if (value === "=") {
            let result = eval(calcVal);
            setCalcVal(result.toString());
        } else if (value === undefined) {
            setCalcVal(prev => prev.slice(0, -1));
        } else {
            if (value === "+" || value === "-" || value === "*" || value === "/") {
                if (calcVal[calcVal.length - 1] === value) {
                    return;
                }
            }
            setCalcVal(prev => prev + value);
        }
    }

    return (
        <div className="h-screen w-screen flex justify-end items-center  md:pr-30 p-2 md:p-0">
            <div className="flex flex-col gap-3 w-80 p-2 bg-gray-900 rounded-lg">
                <div className="h-20 flex justify-end items-end">
                    <input
                        className="w-full h-13 text-3xl whitespace-nowrap overflow-x-auto font-bold text-right px-2 tracking-wider"
                        placeholder="0"
                        value={calcVal}
                        readOnly/>
                </div>
                <div className="space-y-2">
                    <div className="grid grid-cols-4 gap-2">
                        {buttonText.map((item, i) => <Button key={i} text={item} onClick={buttonClick}/>)}
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Calculator;