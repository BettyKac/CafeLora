import './Menu.css';
import { Drink } from '../Drinks/Drink';

export const Menu = () => {
return (
  <div className="drinks-list">
  <section className="menu" id="menu">
  <div className="container">
    <h2>Naše nabídka</h2>
    <p className="menu-intro">
      Vyberte si z našeho interaktivního menu a nemusíte čekat na obsluhu
    </p>
    <Drink
            name="Romano"
            ordered={false}
            image="https://localhost:4000/assets/cups/romano.png"
            layers={[
              {
                color: '#fbdf5b',
                label: 'citrón',
              },
              {
                color: '#613916',
                label: 'espresso',
              },
            ]}
        />
  </div>
</section>
</div>
)}
