import './Drink.css'
import { Layer } from '../Layer/Layer'

export const Drink = ({ name, ordered, image, layers}) => {
  const buttonText = ordered === true ? "Zrušit" : "Objednat";
  const buttonClass = ordered === true ? "order-btn order-btn--ordered" : "order-btn";
  
  return (
    <div className="drinks-list">
      <div className="drink">
        <div className="drink__product">
          <div className="drink__cup">
            <img src={`http://localhost:4000${image}`} alt={name} />
          </div>
          <div className="drink__info">
            <h3>{name}</h3>
            {layers.map((layer, index)=> <Layer
                 key={index}
                 color = {layer.color}
                 label = {layer.label}
            /> )}
            <Layer color="#feeeca" label="mléčná pěna" />
          </div>
        </div>
        <div className="drink__controls">
          <button className={buttonClass}>
            {buttonText}
          </button>
        </div>
      </div>
        <div className="order-detail">
            <a href="/objednavka">Detail objednávky</a>
        </div>
    </div>
  )
}

