import CanadianMap from "@/components/CanadianMap";
import React, { useState } from "react";
import json from "@/public/TestFile.json";
import mapImage from "@/public/image.png"; // Adjust the path as necessary
import Image from "next/image";
import TicketItem from "@/components/TicketItem";

const Home = () => {
    // Extract unique MOSID values
    const mosidList = [...new Set(json.map((item) => item.trade))];
    const [selectedMosid, setSelectedMosid] = useState(mosidList[0]);

    const handleMosidChange = (event) => {
        setSelectedMosid(event.target.value);
    };

    return (
        <div className="flex flex-col bg-gray-900 text-white min-h-screen p-6">
            <header className="w-full bg-gray-800 flex justify-between items-center p-8">
                <div className="flex-col">
                    <h1 className="font-bold text-3xl">VADI</h1>
                    <h2 className="font-bold text-md">
                        Commanders Critical Recruiting Report
                    </h2>
                </div>
                <div className="ticker-container overflow-hidden whitespace-nowrap">
                    <div className="ticker-content flex gap-6 justify-end w-2/3">
                        <TicketItem text="00341 - SIGNALS" direction="down" />
                        <TicketItem text="Ticker Item 1" />
                        <TicketItem text="Ticker Item 1" />
                        <TicketItem text="Ticker Item 1" />
                    </div>
                </div>
            </header>

            <div className="flex p-4 h-[80vh]">
                {/* Filters */}
                <div className="mt-4 grid grid-cols-1 gap-4 w-1/5 p-8">
                    {[
                        "MOSID",
                        "Quantity",
                        "Quality",
                        "Element",
                        "Bases",
                        "Programs",
                        "Event Impact",
                        "CFRCs",
                    ].map((filter) => (
                        <button
                            key={filter}
                            className="bg-gray-700 p-2 rounded-md hover:bg-gray-600"
                        >
                            {filter}
                        </button>
                    ))}
                </div>

                <div className="w-full">
                    {/* Map Section */}
                    <div className="mt-6">
                        <h2 className="text-xl font-semibold mb-4">
                            Percentage Members Recruited By Province in the
                            Past Year
                        </h2>
                        <div className="">
                            {/* Placeholder for Map */}
                            <div className="h-[54vh] rounded-md flex items-center justify-center">
                                <CanadianMap selectedMosid={selectedMosid} />
                            </div>
                        </div>
                    </div>

                    {/* Provinces Data */}
                    <div className="flex overflow-auto gap-4 mt-4">
                        {[
                            { name: "AB", percentage: 26, trend: "up" },
                            { name: "NL", percentage: 21, trend: "up" },
                            { name: "QC", percentage: 20, trend: "up" },
                            { name: "NS", percentage: 16, trend: "up" },
                            { name: "NB", percentage: 6, trend: "down" },
                            { name: "ON", percentage: 5, trend: "down" },
                            { name: "PEI", percentage: 3, trend: "down" },
                            { name: "SK", percentage: 2, trend: "down" },
                            { name: "MB", percentage: 1, trend: "down" },
                            { name: "BC", percentage: 0, trend: "down" },
                        ].map((province) => (
                            <div
                                key={province.name}
                                className={`flex flex-col items-center p-4 w-36 bg-gray-700 rounded-md ${
                                    province.trend === "up"
                                        ? "border-green-500"
                                        : "border-red-500"
                                } border-2`}
                            >
                                <span
                                    className={` ${
                                        province.trend === "up"
                                            ? "text-green-500"
                                            : "text-red-500"
                                    }`}
                                >
                                    {province.trend === "up" ? "▲" : "▼"}
                                </span>
                                <span className="text-xl font-bold">
                                    {province.name}
                                </span>
                                <span>{province.percentage}%</span>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Home;
