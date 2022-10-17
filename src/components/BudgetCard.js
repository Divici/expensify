const BudgetCard = () => {
  return (
    <div className="w-80 m-4 p-4 bg-blue-mid rounded-lg">
        <div className="flex justify-between">
            <div className="">Title</div>
            <div className="">
                $250 / <span className="">$1000</span>
            </div>
        </div>
        <div className="progress">
        
        </div> 
        <div className="tasks">

        </div>
    </div>
  )
}

export default BudgetCard