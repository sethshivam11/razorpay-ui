import React from 'react'
import { Square, Circle, ChevronDown, RotateCcw, MoreVertical, Download, Plus, HelpCircle } from "lucide-react"

const TestPayouts = () => {
    return (
        <>
            <div className="text-gray-200 py-3 px-4 bg-gray-700 rounded-md text-sm">
                <span className="bg-orange-400 px-2 py-1 rounded-md text-black mr-2">TEST</span>
                These are test payouts and do not affect the actual balance. They are used only for the purpose of integrating events. <span className="text-blue-500 mx-2 cursor-pointer">
                    Learn More
                </span>
            </div>
            <div className="flex items-center py-5 text-gray-200 text-sm justify-between border-b-2 border-slate-500">
                <div className="flex items-center gap-4">
                    <Square className="text-gray-400 w-4 h-4 cursor-pointer" />
                    Show 1 - 5 payouts
                    <Circle className="h-3 w-3 bg-gray-200 rounded-full" />
                    Sort by
                    <span className="text-blue-500 flex items-center cursor-pointer">latest creation data <ChevronDown /> </span>
                </div>
                <div className="flex items-center gap-3 text-blue-500">
                    <RotateCcw className="cursor-pointer" />
                    <MoreVertical className="cursor-pointer" />
                    <span className="ring-1 ring-blue-500 flex items-center py-2 px-4 rounded-sm gap-2 cursor-pointer">
                        <Download />
                        Export
                    </span>
                    <span className="bg-blue-500 flex items-center py-2 px-3 rounded-sm gap-2 text-gray-200 cursor-pointer">

                        <Plus /> PAYOUT
                        <ChevronDown className="border-l-2 border-gray-200 pl-1.5 w-fit" />
                    </span>
                </div>
            </div>
            <ul className="flex items-center w-full justify-around py-2 text-gray-300">
                <li>CREATED AT</li>
                <li>AMOUNT</li>
                <li>STATUS</li>
                <li>CONTACT</li>
                <li>CREATED BY</li>
                <li className="flex items-center">
                    UTR <HelpCircle className="mx-1 text-gray-400 cursor-pointer" />
                </li>
            </ul>
        </>
    )
}

export default TestPayouts