import React from 'react'

function Spinner() {
  return (
    <div className='flex items-center w-full justify-center'>
        <div className='w-10 h-10 border-2 border-red-500 border-t-transparent rounded-full animate-spin'>

        </div>
    </div>
  )
}

export default Spinner