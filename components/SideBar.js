import React from 'react';
import { 
    ShieldCheckIcon, 
    ServerIcon, 
    ChipIcon,
    CogIcon,
    LightningBoltIcon,
    AcademicCapIcon
} from '@heroicons/react/outline';

function SideBar(props) {
    return (
        <div className="fixed inset-y-0 left-0 bg-white w-40">
            <h1 className="flex items-center justify-center text-xl
            h-16 bg-[#0099FF] text-white font-bold px-2">NitroDynamics</h1>

            <ul className="flex flex-col text-lg h-full">
                <li className="flex justify-center items-center flex-col
                py-7 text-gray-500">
                    <ShieldCheckIcon className="w-7 h-7"/>
                    Defense
                </li>
                <li className="flex justify-center items-center flex-col
                py-7 border-l-4 border-[#0099FF] text-[#0099FF]
                font-bold">
                    <ServerIcon className="w-7 h-7 text-[#0099FF]"/>
                    Projects
                </li>
                <li className="flex justify-center items-center flex-col
                py-7 text-gray-500">
                    <LightningBoltIcon className="w-7 h-7"/>
                    Electronic
                </li>
                <li className="flex justify-center items-center flex-col
                py-7 text-gray-500">
                    <ChipIcon className="w-7 h-7"/>
                    AI/ML
                </li>
                <li className="flex justify-center items-center flex-col
                py-7 text-gray-500">
                    <AcademicCapIcon className="w-7 h-7"/>
                    R&D
                </li>

                <li className="flex justify-center items-center flex-col
                py-7 text-gray-500 mt-auto mb-16">
                    <CogIcon className="w-7 h-7"/>
                    Settings
                </li>
            </ul>
        </div>
    );
}

export default SideBar;