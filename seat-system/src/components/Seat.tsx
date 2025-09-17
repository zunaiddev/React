import {type SeatType} from "./SeatType.ts";
import {useEffect, useState} from "react";

type SeatProps = {
    text: number | null,
    type: SeatType,
    seatNo: string,
    add: (val: string) => void,
    remove: (val: string) => void,
    bookedSeats: string[],
    selectedSeats: string[],
}

function Seat({text, type, seatNo, add, remove, bookedSeats, selectedSeats}: SeatProps) {
    const [selected, setSelected] = useState<boolean>(false);
    const [booked, setBooked] = useState<boolean>(false);

    useEffect(() => {
        setBooked(bookedSeats?.includes(seatNo) ?? false);
    }, [seatNo, bookedSeats]);

    useEffect(() => {
        setSelected(selectedSeats?.includes(seatNo) ?? false);
    }, [selectedSeats, seatNo]);


    function handleOnClick(): void {
        if (selected) {
            remove(seatNo);
        } else {
            add(seatNo);
        }
    }

    return (
        <button
            className={`h-10 w-8 rounded-t-lg cursor-pointer text-white border-2 ${selected
                ? "bg-emerald-900 border-green-400" : booked
                    ? "bg-gray-400/20 border-gray-400" : type}`}
            disabled={booked} onClick={handleOnClick}>
            {text}
        </button>
    );
}

export default Seat;