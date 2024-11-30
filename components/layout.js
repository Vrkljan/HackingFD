import TicketItem from "./TicketItem";

export default function Layout({ children }) {
    return (
        <div className="h-screen">
            <header className="w-full bg-blue-300 flex justify-between items-center p-8">
                <div className="flex-col">
                    <h1 className="font-bold text-5xl">
                        VADI
                    </h1>
                    <h2 className="font-bold text-2xl">
                        Commanders Critical Recruiting Report
                    </h2>
                </div>
                <div className="ticker-container overflow-hidden whitespace-nowrap">
                    <div className="ticker-content ">
                        <TicketItem text="00341 - SIGNALS" direction="down" />
                        <TicketItem text="Ticker Item 1" />
                        <TicketItem text="Ticker Item 1" />
                    </div>
                </div>
            </header>

            <div className="flex-row h-5/6 bg-blue-100 text-black">
                <main>{children}</main>
            </div>
        </div>
    );
}

