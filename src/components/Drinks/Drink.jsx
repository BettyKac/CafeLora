import './Drink.css'
import { Layer } from '../Layer/Layer'

export const Drink = ({ name, ordered, image, layers}) => {
  return (
    <div className="drinks-list">
      <div className="drink">
        <div className="drink__product">
          <div className="drink__cup">
            <img src={image} alt={name} />
          </div>
          <div className="drink__info">
            <h3>{name}</h3>
            <Layer color="#feeeca" label="mléčná pěna" />
          </div>
        </div>
        <div className="drink__controls">
          <button className="order-btn">
            Objednat
          </button>
        </div>
      </div>
        <div className="order-detail">
            <a href="/objednavka">Detail objednávky</a>
        </div>
    </div>
  )
}
