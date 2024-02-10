import React from 'react'
import { ExternalLink, MoveUpRight, Plus, ChevronDown, Search, SatelliteDish, User, Check, Circle } from "lucide-react"

const Navbar = () => {
    return (
        <div className="w-screen h-fit pl-14 pt-12  bg-slate-900 border-t-2 border-yellow-500 text-white">
            <div className="absolute left-[42%] rounded-b-md bg-yellow-500 py-2 px-4 top-0 text-black cursor-pointer">
                <span className="flex items-center gap-2 top-0 text-sm font-semibold">GO BACK TO ONBOARDING <ExternalLink /></span>
            </div>
            <div className="flex items-center justify-between ml-10 pb-4 text-sm">

                <span className="flex items-center gap-1">
                    <MoveUpRight className="bg-slate-800 rounded-md p-1 w-7 h-7 mr-2 cursor-pointer" />Payouts /
                    <span className="text-blue-500 bg-slate-800 py-2 px-3 mx-2 rounded-md cursor-pointer">Single</span>
                    <span className="mx-2 cursor-pointer">Bulk</span>
                    <span className="rounded-3xl bg-green-500 px-2 py-0.5 text-sm mx-2">NEW</span>
                    <span className="mx-4 cursor-pointer">Tally</span>
                    <span className="mx-4 cursor-pointer">Payout Links</span>
                </span>
                <span className="flex items-center text-blue-500 gap-4 justify-evenly mr-4">
                    <span className="flex ring-1 ring-blue-500 rounded-sm py-2 px-2">
                        <span className="flex items-center gap-2 border-r-2 border-blue-500 mx-1 pr-4 cursor-pointer">
                            <Plus />
                            PAYOUT
                        </span>
                        <ChevronDown className="text-md cursor-pointer" />
                    </span>
                    <Search className="cursor-pointer" />
                    <SatelliteDish className="text-orange-500 cursor-pointer" />
                    <span className="flex items-center cursor-pointer">
                        <User />
                        <ChevronDown />
                    </span>
                </span>
            </div>
            <div className="flex items-center bg-slate-800 ml-2 px-8 py-4 text-sm justify-between">
                <div className="flex items-center">
                    Quick Filters:
                    <div className="relative w-1 h-5 bg-white left rounded-lg left-[1.3rem]" />
                    <span className="bg-slate-700 flex items-center py-3 px-4 mx-2 ml-4 rounded-md text-blue-500 gap-2 cursor-pointer">
                        <span className="text-white rounded-full bg-blue-500 p-1">
                            <Check className="h-4 w-4 font-bold" />
                        </span> All Payouts</span>
                    <div className="relative w-1 h-5 bg-orange-400 left rounded-lg left-[0.8rem]" />
                    <span className="bg-slate-700 flex items-center py-3 px-4 mx-2 rounded-md text-blue-500 gap-2 cursor-pointer">
                        <Circle />
                        Scheduled for next 2 days
                    </span>
                    <div className="relative w-1 h-5 bg-orange-400 left rounded-lg left-[0.8rem]" />
                    <span className="bg-slate-700 flex items-center py-3 px-4 mx-2 rounded-md text-blue-500 gap-2 cursor-pointer">
                        <Circle /> Queued (RazorpayX A/c)<span className="text-white">1</span>
                    </span>
                </div>
                <div className="flex items-center text-blue-500 cursor-pointer">
                    View More Filters <ChevronDown />
                </div>
            </div>
        </div>
    )
}

export default Navbar