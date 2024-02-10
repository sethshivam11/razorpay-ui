import React from 'react'
import {Play} from "lucide-react"

const PageCount = () => {
  return (
    <div className="flex items-center float-right text-gray-300">
        <span className="flex items-center gap-2 bg-gray-600 py-2 px-3 mt-2 mx-2 rounded-sm cursor-pointer">
            10 
            <Play className="rotate-90 w-4 h-3 fill" />
        </span>
            rows/pages
    </div>
  )
}

export default PageCount