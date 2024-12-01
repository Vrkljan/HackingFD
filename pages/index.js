import Head from "next/head";
import CanadianMap from "@/components/CanadianMap";
import React, { useState } from "react";
import json from "@/public/TestFile.json";
import TicketItem from "@/components/TicketItem";
import Link from "next/link";


const Home = () => {
    // Extract unique MOSID values
    const mosidList = [...new Set(json.map((item) => item.trade))];
    const [selectedMosid, setSelectedMosid] = useState(mosidList[0]);

    const handleMosidChange = (event) => {
        setSelectedMosid(event.target.value);
    };

    return (
        <>
            {/* Add the font in the Head */}
            <Head>
                <link
                    href="https://fonts.googleapis.com/css2?family=Jost:wght@300;400;500;600;700&display=swap"
                    rel="stylesheet"
                />
            </Head>

            <div className="flex flex-col bg-gray-900 text-white min-h-screen p-6 font-sans">
                <header className="w-full bg-gray-800 flex justify-between items-center p-8">
                    <div className="flex-col">
                        <h1 className="font-bold text-3xl">VADI</h1>
                        <h2 className="font-normal text-md">
                            General Information
                        </h2>
                    </div>
                    <div className="ticker-container overflow-hidden whitespace-nowrap">
                        <div className="ticker-content flex gap-6 justify-end w-2/3">
                            <TicketItem text="Upcoming Airshow at CFB Trenton | Dec 15th, 2024" direction="down" />
                            <TicketItem text="Recruiters visiting UBC Vancouver | Dec 10th, 2024." />
                            <TicketItem text="Yearly Target: 5,000 recruits | Achieved: 3,200 (64%)" />
                            <TicketItem text="Signals Officer: 84% of 2024 target achieved" />
                            <TicketItem text="Alberta: Source of 26% of recruits FY 2023" />
                            <TicketItem text="50% of applications converted to recruits in Q4." direction="down"/>
                            <TicketItem text="Signals Officer attrition: Up by 3% in Q4" direction="down"/>
                            <TicketItem text="Airshow Event in Calgary: 220 additional applications submitted set against last month" />
                            <TicketItem text=" Top CFRC: Vancouver | 340 recruits in 2024" />
                            <TicketItem text=" Updated fitness requirements effective Jan 1st, 2024" />
                            <TicketItem text=" Sign-on bonuses for critical roles: $10,000 bonus for Avionic Techs" />
                            <TicketItem text="Upcoming Airshow at CFB Trenton | Dec 15th, 2024" direction="down" />
                            <TicketItem text="Recruiters visiting UBC Vancouver | Dec 10th, 2024." />
                            <TicketItem text="Yearly Target: 5,000 recruits | Achieved: 3,200 (64%)" />
                            <TicketItem text="Signals Officer: 84% of 2024 target achieved" />
                            <TicketItem text="Alberta: Source of 26% of recruits FY 2023" />
                            <TicketItem text="50% of applications converted to recruits in Q4." direction="down"/>
                            <TicketItem text="Signals Officer attrition: Up by 3% in Q4" direction="down"/>
                            <TicketItem text="Airshow Event in Calgary: 220 additional applications submitted set against last month" />
                            <TicketItem text=" Top CFRC: Vancouver | 340 recruits in 2024" />
                            <TicketItem text=" Updated fitness requirements effective Jan 1st, 2024" />
                            <TicketItem text=" Sign-on bonuses for critical roles: $10,000 bonus for Avionic Techs" />
                            <TicketItem text="Upcoming Airshow at CFB Trenton | Dec 15th, 2024" direction="down" />
                            <TicketItem text="Recruiters visiting UBC Vancouver | Dec 10th, 2024." />
                            <TicketItem text="Yearly Target: 5,000 recruits | Achieved: 3,200 (64%)" />
                            <TicketItem text="Signals Officer: 84% of 2024 target achieved" />
                            <TicketItem text="Alberta: Source of 26% of recruits FY 2023" />
                            <TicketItem text="50% of applications converted to recruits in Q4." direction="down"/>
                            <TicketItem text="Signals Officer attrition: Up by 3% in Q4" direction="down"/>
                            <TicketItem text="Airshow Event in Calgary: 220 additional applications submitted set against last month" />
                            <TicketItem text=" Top CFRC: Vancouver | 340 recruits in 2024" />
                            <TicketItem text=" Updated fitness requirements effective Jan 1st, 2024" />
                            <TicketItem text=" Sign-on bonuses for critical roles: $10,000 bonus for Avionic Techs" />
                            <TicketItem text="Upcoming Airshow at CFB Trenton | Dec 15th, 2024" direction="down" />
                            <TicketItem text="Recruiters visiting UBC Vancouver | Dec 10th, 2024." />
                            <TicketItem text="Yearly Target: 5,000 recruits | Achieved: 3,200 (64%)" />
                            <TicketItem text="Signals Officer: 84% of 2024 target achieved" />
                            <TicketItem text="Alberta: Source of 26% of recruits FY 2023" />
                            <TicketItem text="50% of applications converted to recruits in Q4." direction="down"/>
                            <TicketItem text="Signals Officer attrition: Up by 3% in Q4" direction="down"/>
                            <TicketItem text="Airshow Event in Calgary: 220 additional applications submitted set against last month" />
                            <TicketItem text=" Top CFRC: Vancouver | 340 recruits in 2024" />
                            <TicketItem text=" Updated fitness requirements effective Jan 1st, 2024" />
                            <TicketItem text=" Sign-on bonuses for critical roles: $10,000 bonus for Avionic Techs" />


                        </div>
                    </div>
                </header>

                <div className="flex p-4 h-[80vh]">
                    {/* Filters */}
                    <div className="mt-4 grid grid-cols-1 gap-4 w-1/5 p-8">
    {[
        { name: "Overview", href: "/00341" },
        { name: "MOSID", href: "/mosid" },
    ].map((filter) => (
        <Link key={filter.name} href={filter.href}>
<button className="bg-gray-700 h-40 hover:bg-gray-600 w-full text-white text-center rounded">
{filter.name}
            </button>
        </Link>
    ))}
</div>

                    <div className="w-full">
                        {/* Map Section */}
                        <div className="mt-6">
                            <div className="">
                                {/* Placeholder for Map */}
                                <div className="h-[54vh] flex items-center justify-center pt-[25px]">
                                    <CanadianMap selectedMosid={selectedMosid} />
                                </div>
                            </div>
                        </div>
                        <h2 className="text-xl font-semibold mb-4 pt-[35px]">
                            Percentage Members Recruited By Province in the
                            Past Year
                        </h2>
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
                                    className={`flex flex-col items-center p-4 w-36 bg-gray-700 ${
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
        </>
    );
};

export default Home;
