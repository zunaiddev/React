import type {SeatType} from "./SeatType.ts";
import type {MouseEventHandler} from "react";

type SeatProps = {
    text: number,
    type: SeatType,
    disabled: boolean,
    onClick: MouseEventHandler,
}

function Seat({text, type, disabled, onClick}: SeatProps) {
    return (
        <button className={`py-2 px-3 rounded-t-lg cursor-pointer text-white ${
            type === 0 ? "bg-green-400/40" : type === 1 ? "bg-pink-400/40" : type === 2 ? "bg-amber-400/40" :
                type === 3 ? "bg-blue-400/40" : "bg-gray-400/40"
        } `}
                disabled={disabled} onClick={onClick}>
            {text}
        </button>
    );
}

export default Seat;