import './Menu.css';
import { Drink } from '../Drinks/Drink';

export const Menu = ({drinks}) => {
return (
  <div className="drinks-list">
  <section className="menu" id="menu">
  <div className="container">
    <h2>Naše nabídka</h2>
    <p className="menu-intro">
      Vyberte si z našeho interaktivního menu a nemusíte čekat na obsluhu
    </p>
    {drinks.map((drink) =>  <Drink 
            key={drink.id}
            name={drink.name}
            ordered={drink.ordered}
            image={drink.image}
            layers={drink.layers}
          />
          )}
  </div>
</section>
</div>
)}
