import React from 'react'
import { Loader2 } from 'lucide-react'

export default function Loader() {
  return (
    <div className="fixed inset-0 z-[99999] flex items-center justify-center bg-black">
      <div className="relative flex items-center justify-center">
        {/* Outer spinning circle */}
        <div className="absolute h-20 w-20 animate-spin rounded-full border-b-2 border-t-2 border-white"></div>
        
        {/* Inner spinning circle */}
        <div className="absolute h-16 w-16 animate-spin rounded-full border-r-2 border-l-2 border-white"></div>
        
        {/* Center loader icon */}
        <Loader2 className="h-8 w-8 animate-spin text-white" />
      </div>
    </div>
  )
}
