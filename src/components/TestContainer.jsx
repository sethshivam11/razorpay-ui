import React from 'react'

const TestContainer = ({ payouts }) => {
    return (
        <div className="text-gray-300 py-2 border-b-2 border-gray-700">
            {payouts.map(({ createdAt, amount, status, contact, createdBy, utr }) => {
                return (
                    <ul className="flex items-center justify-around py-2">
                        <li className="w-36">{createdAt}</li>
                        <li className="w-12">{amount}</li>
                        <li className="text-orange-300 bg-orange-200/45 rounded-2xl py-1 px-1.5 ring-2 ring-orange-400 capitalize">{status}</li>
                        <li className="w-28">{contact}</li>
                        <li className="w-28">{createdBy}</li>
                        <li className="w-10">{utr || "--"}</li>
                    </ul>
                )
            })}
        </div>
    )
}

export default TestContainer