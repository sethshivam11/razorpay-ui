import React from 'react'
import Xlogo from "../assets/download.png"
import Razorpay from "../assets/RazorpayX.svg"
import { Home, MoveUpRight, FileText, User, BookText, Send, Stamp, BookMarked, MailOpen } from "lucide-react"

const SideBar = ({ navOpen, setNavOpen }) => {
  return (
    <div className={`${navOpen ? "w-52" : "w-16"} h-full bg-slate-900 p-2 fixed top-0 z-20 border-r-2 border-gray-600 transition-all duration-100 ease-in-out px-`} onMouseEnter={() => setNavOpen(true)} onMouseLeave={() => setNavOpen(false)}>
      <img src={Xlogo} alt="" className={`object-contain w-10 ${navOpen ? "hidden" : ""}`} />
      <img src={Razorpay} alt="" className={`object-contain py-3 w-32 ${navOpen ? "" : "hidden"}`} />
      <ul className={`icon-map text-white flex items-center justify-evenly flex-col gap-4 ${navOpen ? "mt-10" : "mt-12"}`}>
        <div className="bg-orange-400 w-0.5 h-6 rounded-r-sm absolute top-[6.5rem] left-0" />

        <li className="flex items-center justify-start gap-2 cursor-pointer bg-gray-600 w-full rounded-md">
          <Home className={`${navOpen ? "" : "bg-slate-600"} p-2 w-9 h-9 rounded-md`} />
          <span className={navOpen ? "" : "hidden"}>Home</span>
        </li>

        <li className="flex items-center justify-start gap-2 cursor-pointer hover:bg-gray-600 w-full rounded-md">
          <MoveUpRight className="p-2 w-9 h-9 rounded-md" />
          <span className={navOpen ? "" : "hidden"}>Payouts <span className="bg-green-400 rounded-2xl px-2 py-0.5 text-sm">NEW</span></span>
        </li>

        <li className="flex items-center justify-start gap-2 cursor-pointer hover:bg-gray-600 w-full rounded-md">
          <FileText className="p-2 w-9 h-9 rounded-md" />
          <span className={navOpen ? "" : "hidden"}>Account Statement</span>
        </li>
        
        <li className="flex items-center justify-start gap-2 cursor-pointer hover:bg-gray-600 w-full rounded-md">
          <User className="p-2 w-9 h-9 rounded-md" />
          <span className={navOpen ? "" : "hidden"}>Contacts</span>
        </li>

        &nbsp;

        <li className="flex items-center justify-start gap-2 cursor-pointer hover:bg-gray-600 w-full rounded-md">
          <BookText className="p-2 w-9 h-9 rounded-md" />
          <span className={navOpen ? "" : "hidden"}>Vendor Payments</span>
        </li>

        <li className="flex items-center justify-start gap-2 cursor-pointer hover:bg-gray-600 w-full rounded-md">
          <Send className="p-2 w-9 h-9 rounded-md" />
          <span className={navOpen ? "" : "hidden"}>Tax Payments</span>
        </li>

        <li className="flex items-center justify-start gap-2 cursor-pointer hover:bg-gray-600 w-full rounded-md">
          <Stamp className="p-2 w-9 h-9 rounded-md" />
          <span className={navOpen ? "" : "hidden"}>Payout Links</span>
        </li>

        <li className="flex items-center justify-start gap-2 cursor-pointer hover:bg-gray-600 w-full rounded-md">
          <MailOpen className="p-2 w-9 h-9 rounded-md" />
          <span className={navOpen ? "" : "hidden"}>Payroll</span>
        </li>

        <li className="flex items-center justify-start gap-2 cursor-pointer hover:bg-gray-600 w-full rounded-md">
          <BookMarked className="p-2 w-9 h-9 rounded-md" />
          <span className={navOpen ? "" : "hidden"}>Reports</span>
        </li>

      </ul>
    </div>
  )
}

export default SideBar