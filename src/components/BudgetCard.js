import { Progress } from "@material-tailwind/react";

const BudgetCard = () => {
   
    let title = "Entertainment"
    let amount = 939
    let max = 1300
    let progressPercent = Math.round((amount/max)*100);

  return (
    <div className="w-80 m-4 p-4 bg-blue-mid rounded-lg">
        <div className="flex justify-between">
            <div className="">{title}</div>
            <div className={`${progressPercent > 70 ? 'text-red-hgh' : ''}`}>
                ${amount} / <span className="text-txt-grey">${max}</span>
            </div>
        </div>
        
        <div className="mb-4">
            <Progress value={progressPercent} label={`${progressPercent < 10 ? '' : ' '}`} color={`${progressPercent > 70 ? 'red' : 'light-blue'}`} className="h-6 bg-txt-grey" />
        </div>
         
        <div className="flex justify-between">
            <button className="py-2 px-6 border-none outline-none cursor-pointer text-txt-wht bg-blue-brt hover:bg-txt-wht hover:text-blue-brt  transition ease-in-out duration-200 rounded-xl text-xs">
                Add Expense
            </button>
            <button className="py-2 px-6 border-none outline-none cursor-pointer text-blue-brt bg-txt-wht hover:bg-blue-brt hover:text-txt-wht  transition ease-in-out duration-200 rounded-xl text-xs"> 
                View Expenses
            </button>
        </div>
    </div>
  )
}

export default BudgetCard