import PropTypes from "prop-types";
import { useEffect, useState } from "react"
import Card from "./Card"
import CookingInfo from "./CookingInfo"
import CurrentCoking from "./CurrentCoking"

const CardContainer = ({cookingClickHandler,
                        cookingCount,
                        preparedClickHandler,
                        prepared,
                        calculation,
                        totalTime,
                        totalCalories       
                      }) => {
    const [storeCard,setStoreCard] =useState([])
    useEffect(()=>{
        const fetchData = async()=>{
            const res = await fetch('recipe.json')
            const data = await res.json()
            setStoreCard(data)
        }
        fetchData()
    },[])
  return (
    <div className="flex md:flex-row flex-col  gap-5 max-w-screen-xl mx-auto">
      {/* card-container */}
      <div className="md:w-2/3 w-full p-4 my-6 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 justify-items-center gap-4 rounded-2xl">
      {
        storeCard.map(card=><Card
             key={card.id}
             card ={card}
             cookingClickHandler = {cookingClickHandler}
             />)
      }
      </div>
      {/* cook-container */}
      <div className="border-2 p-4 md:w-1/3 w-full my-6 rounded-2xl">
        <h2 className="text-xl font-bold text-center border-b-2 p-4">Want To Cook : {cookingCount.length}</h2>
        <CookingInfo 
        cookingCount ={cookingCount}
        preparedClickHandler ={preparedClickHandler}
        calculation ={calculation}
        />
        {/* current-cook-container */}
        <div>
        <h3 className="text-xl font-bold text-center border-b-2 p-4">Currently Cooking : {prepared.length}</h3>
        <CurrentCoking prepared ={prepared}
                      totalCalories ={totalCalories}
                      totalTime ={totalTime}
        />
        </div>
      </div>
    </div>
  )
}
CardContainer.propTypes ={
  cookingClickHandler : PropTypes.func.isRequired,
  cookingCount : PropTypes.array.isRequired,
  preparedClickHandler : PropTypes.func.isRequired,
  calculation : PropTypes.func.isRequired,
  prepared : PropTypes.array.isRequired ,
  totalTime : PropTypes.number.isRequired,
  totalCalories : PropTypes.number.isRequired,

}

export default CardContainer
