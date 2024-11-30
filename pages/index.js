import CanadianMap from "@/components/CanadianMap";
import Layout from "@/components/layout";
import json from "@/public/TestFile.json";
import { useState } from "react";

export default function Home() {
    // Extract unique MOSID values
    const mosidList = [...new Set(json.map(item => item.trade))];
    const [selectedMosid, setSelectedMosid] = useState(mosidList[0]);

    const handleMosidChange = (event) => {
        setSelectedMosid(event.target.value);
    };

    return (
        <Layout>
            <div className="flex min-h-[83vh]">
                <div className="w-1/5 bg-blue-400">
                    <div className="text-3xl font-bold text-center p-3">
                        Filters
                    </div>
                    <div className="flex flex-col w-1/2 mx-auto">
                        <div className="flex justify-center p-2 bg-gray-200 m-2 rounded-sm">
                            <div className="text-xl">MOSID</div>
                        </div>
                        <div className="flex justify-center p-2 bg-gray-200 m-2 rounded-sm">
                            <select
                                className="text-xl p-2 rounded-sm"
                                value={selectedMosid}
                                onChange={handleMosidChange}
                            >
                                {mosidList.map((mosid, index) => (
                                    <option key={index} value={mosid}>
                                        {mosid}
                                    </option>
                                ))}
                            </select>
                        </div>
                    </div>
                </div>
                <div className="w-4/5 flex flex-col">
                    <div className="flex-1 bg-green-500">
                        <CanadianMap selectedMosid={selectedMosid} />
                    </div>
                    <div className="h-1/3 bg-gray-300 textbl">
                        <div className="flex">
                            {[
                                "Alberta",
                                "British Columbia",
                                "Manitoba",
                                "New Brunswick",
                                "Newfoundland and Labrador",
                                "Nova Scotia",
                                "Ontario",
                                "Prince Edward Island",
                                "Quebec",
                                "Saskatchewan",
                            ].map((item, index) => (
                                <div
                                    key={index}
                                    className="ticker-item bg-blue-300 p-2 m-2 "
                                >
                                    {item}
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </Layout>
    );
}
