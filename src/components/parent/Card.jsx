import PropTypes from "prop-types";
const Card = ({card,cookingClickHandler}) => {
  return (
    <div >
      <div className="card border-2 h-[570px] max-w-[300px]">
  <figure className="px-2 py-3">
    <img 
    className="h-[200px] w-full rounded-2xl"
      src={card.image}
      alt={card.name} />
  </figure>
  <div className="card-body p-2">
    <h2 className="card-title text-lg font-bold">{card.name}</h2>
    <p className="text-sm font-semibold">{card.recipe_desc}</p>
    {/* ingredient-container */}
    <div>
      <h3 className="card-title text-lg font-bold">Ingredients : {card.ingredients.length}</h3>
      <ul className="pl-8 text-sm">
        {card.ingredients.map((ingredient,index)=> <li
         key={index} className="list-disc">
          {ingredient}
         </li>)}
      </ul>
    </div>
    {/* time-calories-container */}
    <div className="flex gap-4 items-center justify-between">
      <p className="text-xs font-semibold"><i className="fas fa-clock"></i> {card.preparing_time} Minutes</p>
      <p className="text-xs font-semibold"><i className="fa-solid fa-fire"> {card.calories} calories</i></p>
    </div>
    <div className="card-actions">
      <button onClick={()=>cookingClickHandler(card)} className="btn px-6 bg-green-700 text-white hover:text-black font-semibold">Want To Cook</button>
    </div>
  </div>
</div>
    </div>
  )
}

Card.propTypes ={
  card : PropTypes.object.isRequired,
  cookingClickHandler : PropTypes.func.isRequired,
}

export default Card
