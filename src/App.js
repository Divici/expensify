import React from 'react'

const App = () => {
  return (
    <div className='h-screen bg-blue-drk text-txt-grey'>
      <div className='py-8 flex justify-around'>
        <h1 className='text-xl'>Expensify</h1>
        <div>
          <button className='custom-button'>Add Budget</button>
          <button className='ml-4 ml:ml-8 custom-button'>Add Expense</button>
        </div>
      </div>

      <div className='grid grid-cols-[repeat_auto-fill_minmax(300px,_1fr)] gap-4 items-start'>

      </div>
      
    </div>
  )
}

export default App
