import Button from "./Button.jsx";
import backspace from "../assets/backspace.png";
import {useState} from "react";

function Calculator() {
    const [value, setValue] = useState('');

    function buttonClick(e) {
        let value = e.target.value;
        setValue(prev => prev + value);
    }

    function arithmeticButton(e) {
        console.log(e.target.value);
    }

    function clearValue() {
        setValue('');
    }

    function cut() {
        setValue(prev => prev.slice(0, -1));
    }

    return (
        <div className="h-screen w-screen flex justify-end items-center  md:pr-30 p-2 md:p-0">
            <div className="flex flex-col gap-3 w-80 p-2 bg-gray-900 rounded-lg">
                <div className="h-20 flex justify-end items-end">
                    <input
                        className="w-full h-13 text-3xl whitespace-nowrap overflow-x-auto font-bold text-right px-2 tracking-wider"
                        placeholder="0"
                        value={value}
                        disabled
                        readOnly/>
                </div>
                <div className="space-y-2">
                    <div className="grid grid-rows-1 grid-cols-4 gap-2">
                        <Button text=""/>
                        <Button text="%"/>
                        <Button text="C" onClick={clearValue}/>
                        <Button text={<img src={backspace} alt="cur" className="size-9"/>} onClick={cut}/>
                    </div>
                    <div className="grid grid-cols-4 gap-2">
                        <Button text={1} onClick={buttonClick}/>
                        <Button text={2} onClick={buttonClick}/>
                        <Button text={3} onClick={buttonClick}/>
                        <Button text='+' onClick={buttonClick}/>
                        <Button text={4} onClick={buttonClick}/>
                        <Button text={5} onClick={buttonClick}/>
                        <Button text={6} onClick={buttonClick}/>
                        <Button text='-' onClick={buttonClick}/>
                        <Button text={7} onClick={buttonClick}/>
                        <Button text={8} onClick={buttonClick}/>
                        <Button text={9} onClick={buttonClick}/>
                        <Button text='×' onClick={arithmeticButton}/>
                        <Button text={0} onClick={buttonClick}/>
                        <Button text='.' onClick={buttonClick}/>
                        <Button text='='/>
                        <Button text='÷' onClick={buttonClick}/>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Calculator;