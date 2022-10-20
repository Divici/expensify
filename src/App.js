import BudgetCard from "./components/BudgetCard"
import AddBudgetModal from "./components/AddBudgetModal"

const App = () => {
  
  return (
    <div className='h-screen bg-blue-drk text-txt-wht'>
      <div className='py-8 flex justify-around'>
        <h1 className='text-xl uppercase font-bold'>Expensify</h1>
        <div>
          <button className='custom-button'>Add Budget</button>
          <button className='ml-4 ml:ml-8 custom-button'>Add Expense</button>
        </div>
      </div>

      <div className='flex justify-center flex-wrap'>
        <BudgetCard />
        <BudgetCard />
        <BudgetCard />
        <AddBudgetModal />
      </div>
      
    </div>
  )
}

export default App
