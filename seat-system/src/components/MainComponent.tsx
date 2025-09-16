import Seat from "./Seat.tsx";
import {SeatType} from "./SeatType.ts";

function MainComponent() {
    return (
        <main className="h-screen w-full bg-gray-800">
            <header className="w-full pt-7 flex justify-center flex-col items-center gap-5">
                <h1 className="text-3xl font-semibold text-white">
                    Cinema Hall Booking
                </h1>
                <p className="text-gray-400 text-lg">Select Your Preferred seat</p>
            </header>
            <div className="px-4 py-5">
                <div className="w-full h-4 bg-gray-600 rounded-lg">

                </div>
            </div>
            <div>
                <center className="w-full">
                    <h2 className="text-gray-500 text-lg">SCREEN</h2>
                    <div className="space-x-2">
                        <Seat text={1} type={SeatType.REGULAR} disabled={false}
                              onClick={() => console.log("clicked")}/>
                        <Seat text={2} type={SeatType.PREMIUM} disabled={false}
                              onClick={() => console.log("clicked")}/>
                        <Seat text={3} type={SeatType.VIP} disabled={false}
                              onClick={() => console.log("clicked")}/>
                        <Seat text={4} type={SeatType.SELECTED} disabled={false}
                              onClick={() => console.log("clicked")}/>
                        <Seat text={5} type={SeatType.BOOKED} disabled={false}
                              onClick={() => console.log("clicked")}/>
                    </div>
                </center>
            </div>
        </main>
    );
}

export default MainComponent;