import PropTypes from "prop-types";
const CurrentCoking = ({prepared,totalTime,totalCalories}) => {
  return (
    <div>
      {prepared.map((element,index)=>
      <table className="table table-zebra" key={element.id}>
    {/* head */}
    <thead>
      <tr>
        <th></th>
        <th className="text-xs w-11/12">Name</th>
        <th>Time</th>
        <th>Calories</th>
      </tr>
    </thead>
    <tbody>
      {/* row 1 */}
      <tr>
        <td>{index + 1}</td>
        <th>{element.name}</th>
        <td>{element.preparing_time}</td>
        <td>{element.calories}</td>
        </tr>
    </tbody>
  </table>)}
    <div className="my-4 border-t-2 space-y-2">
        <h3 className="text-xl font-semibold text-end">Total Time : {totalTime}</h3>
        <h3 className="text-xl font-semibold text-end">Total Calories : {totalCalories}</h3>
    </div>
    </div>
  )
}
CurrentCoking.propTypes ={
    prepared :PropTypes.array.isRequired,
    totalTime :PropTypes.number.isRequired,
    totalCalories :PropTypes.number.isRequired
}

export default CurrentCoking
