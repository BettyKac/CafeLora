import './Drink.css'

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
            <div className="layer">
              <div className="layer__color" style={{ backgroundColor: '#613916' }}></div>
              <div className="layer__label">espresso</div>
            </div>
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
