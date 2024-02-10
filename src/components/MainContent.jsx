import React from 'react'
import TestPayouts from './TestPayouts'
import TestContainer from './TestContainer'
import PageCount from './PageCount'

const MainContent = () => {
    const payouts = [
        {
            createdAt: "Fri, 9 Feb, 2:32 PM",
            amount: "10000",
            status: "queued",
            contact: "Shivam Arora",
            createdBy: "Aditya Sharma",
            utr: ""
        },
        {
            createdAt: "Fri, 9 Feb, 1:25 PM",
            amount: "10000",
            status: "queued",
            contact: "Ujjwal",
            createdBy: "Aditya Sharma",
            utr: ""
        },
        {
            createdAt: "Fri, 9 Feb, 12:04 PM",
            amount: "10000",
            status: "queued",
            contact: "Amit Kumar",
            createdBy: "Aditya Sharma",
            utr: ""
        },
        {
            createdAt: "Fri, 9 Feb, 3:52 PM",
            amount: "50000",
            status: "queued",
            contact: "Harsh",
            createdBy: "Aditya Sharma",
            utr: ""
        },
        {
            createdAt: "Fri, 9 Feb, 4:09 PM",
            amount: "10000",
            status: "queued",
            contact: "Random Verma",
            createdBy: "Aditya Sharma",
            utr: ""
        }
    ]
    return (
        <main className="ml-16 p-4">
            <TestPayouts />
            <TestContainer payouts={payouts} />
            <PageCount/>
        </main>
    )
}

export default MainContent