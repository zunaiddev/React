import Seat from "./Seat.tsx";
import {SeatType} from "./SeatType.ts";
import {useMemo, useState} from "react";

function MainComponent() {
    const [selected, setSelected] = useState<string[]>([]);
    const [booked, setBooked] = useState<string[]>([]);
    const list: number[] = useMemo(() => [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12], []);
    const charList: string[] = useMemo(() => ["A", "B", "C", "D", "E", "F", "G", "H"], []);

    function handleAdd(val: string): void {
        setSelected(prev => [...prev, val]);
    }

    function handleRemove(val: string): void {
        setSelected(prev => prev?.filter((ele) => ele !== val));
    }

    function handleBooking() {
        setBooked(prev => [...prev, ...selected]);
        setSelected([]);
    }

    return (
        <main className="h-screen w-full bg-gray-800">
            <header className="w-full pt-7 flex justify-center flex-col items-center gap-5">
                <h1 className="text-3xl font-semibold text-white">
                    Cinema Hall Booking
                </h1>
                <p className="text-gray-400 text-lg">Select Your Preferred seat</p>
            </header>
            <div>
                <center className="w-full space-y-2">
                    <h2 className="text-gray-500 text-lg">SCREEN</h2>
                    <div className="space-y-5">
                        {charList.map((char) => (
                            <div className="space-x-2" key={char}>
                                <span className="text-white text-xl mr-6">{char}</span>
                                {list.map((val, i) =>
                                    <Seat key={i} text={val} type={getType(char)}
                                          seatNo={char + val} add={handleAdd} remove={handleRemove}
                                          bookedSeats={booked} selectedSeats={selected}/>)}
                            </div>
                        ))}
                    </div>
                </center>
            </div>
            <div className="flex flex-col items-center gap-1 mt-8">
                <div className="flex items-center gap-3 text-white">
                    <span className="text-lg">Selected Seats: </span>
                    <div>{selected.length ? selected.map((val, idx) =>
                        <span className="mr-5 bg-green-600 px-2 py-1 rounded"
                              key={idx}>{val}</span>) : "No Selected Seats"}</div>
                </div>
                {selected.length > 0 && <div>
                    <span className="text-white text-xl">Total Amount: ${calculateAmount(selected)}</span>
                </div>}

                <button disabled={selected.length <= 0} onClick={handleBooking}
                        className={`w-lg py-1 rounded text-white cursor-pointer ${selected.length ? "bg-blue-700" : "bg-gray-600"}`}>
                    Buy
                </button>
            </div>

        </main>
    );
}

function getType(char: string): SeatType {
    if (char === "A" || char === "B" || char === "C") return SeatType.REGULAR;
    if (char === "D" || char === "E" || char === "F") return SeatType.PREMIUM;

    return SeatType.VIP;
}

function calculateAmount(list: string[]) {
    let total: number = 0;

    list.forEach((item) => {
        total += (item.startsWith("A") || item.startsWith("B") || item.startsWith("C")) ?
            100 : (item.startsWith("D") || item.startsWith("E") || item.startsWith("F")) ?
                150 : 200;
    });

    return total;
}

export default MainComponent;