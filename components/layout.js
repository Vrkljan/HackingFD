import dynamic from "next/dynamic";
import { useEffect } from "react";

const CanadianMap = dynamic(() => import("./CanadianMap"), { ssr: false });
import Button from "./button";

export default function Layout({ children }) {
    useEffect(() => {
        if (typeof window !== "undefined") {
            // Code that uses window or leaflet
            const L = require("leaflet");
            // Initialize your map here if needed
        }
    }, []);

    return (
        <>
            <header className="h-24 bg-blue-400 flex items-center justify-center text-5xl">
                <h1 className="text-center">My Site</h1>
            </header>

            <Button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded ">
                Button 1
            </Button>

            <Button className="bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded ">
                Button 1
            </Button>

            <div className="absolute right-0 top-24 w-2/3 h-full bg-gray-700">
                <div id="map" className=" h-full">
                    <CanadianMap />
                </div>
            </div>

            <main>{children}</main>
        </>
    );
}
