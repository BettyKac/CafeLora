import { render } from '@czechitas/render';
import '../global.css';
import './index.css';
import { Header } from '../components/Header/Header';
import { Banner } from '../components/Banner/Banner';
import { Menu } from '../components/Menu/Menu';
import { Gallery } from '../components/Gallery/Gallery';
import { Contact } from '../components/Contact/Contact';
import { Footer } from '../components/Footer/Footer';
import { Drink } from '../components/Drinks/Drink';

document.querySelector('#root').innerHTML = render(
  <div className="page">
    <Header />
    <main>
      <Banner />
      <Menu />
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
      <Gallery />
      <Contact />
    </main>
    <Footer />
  </div>
);

const nav = document.querySelector('.nav-btn')
const rolloutNav = document.querySelector('.rollout-nav')
nav.addEventListener('click', () => {
rolloutNav.classList.toggle('nav-closed')
})

 rolloutNav.addEventListener('click', () => {
 rolloutNav.classList.add('nav-closed')
 })
