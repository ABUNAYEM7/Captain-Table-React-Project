import PropTypes from "prop-types";
const CookingInfo = ({cookingCount,preparedClickHandler,calculation}) => {
  return (
    <div>
      {cookingCount.map((recipe,index) => <div 
      key ={recipe.id}
      className="overflow-x-auto"
      >
  <table className="table table-zebra">
    {/* head */}
    <thead>
      <tr>
        <th></th>
        <th>Name</th>
        <th>Time</th>
        <th>Calories</th>
        <th></th>
      </tr>
    </thead>
    <tbody>
      {/* row 1 */}
      <tr>
        <th>{index + 1}</th>
        <td>{recipe.name}</td>
        <td>{recipe.preparing_time}</td>
        <td>{recipe.calories}</td>
        <td><button onClick={()=>{
            preparedClickHandler(recipe.id)
            calculation(recipe.preparing_time,recipe.calories)
            }} className="btn px-2 bg-green-700 text-white hover:text-black font-semibold">Preparing</button></td>
        </tr>
    </tbody>
  </table>
</div>)}
    </div>
  )
}
CookingInfo.propTypes ={
    calculation : PropTypes.func.isRequired,
    preparedClickHandler : PropTypes.func.isRequired,
    cookingCount : PropTypes.array.isRequired
}

export default CookingInfo
