import { Progress } from "@material-tailwind/react";

const BudgetCard = () => {
    let title = "Entertainment"
    let amount = 439
    let max = 1300
    let progressPercent = Math.round((amount/max)*100);

  return (
    <div className="w-80 m-4 p-4 bg-blue-mid rounded-lg">
        <div className="flex justify-between">
            <div className="">{title}</div>
            <div className="">
                ${amount} / <span className="text-txt-grey">${max}</span>
            </div>
        </div>
        
        <div className="h-4 ">
            <Progress value={progressPercent} label={`${progressPercent < 10 ? '' : ' '}`} color={`${progressPercent > 70 ? 'red' : 'blue'}`} className="h-6 my-2 bg-txt-grey" />
        </div>
         
        <div className="tasks">

        </div>
    </div>
  )
}

export default BudgetCard