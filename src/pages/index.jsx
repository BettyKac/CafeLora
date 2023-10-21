import { render } from '@czechitas/render';
import '../global.css';
import './index.css';
import { Header } from '../components/Header/Header';
import { Banner } from '../components/Banner/Banner';
import { Menu } from '../components/Menu/Menu';
import { Gallery } from '../components/Gallery/Gallery';
import { Contact } from '../components/Contact/Contact';
import { Footer } from '../components/Footer/Footer';

const response = await fetch('http://localhost:4000/api/drinks')
const data = await response.json();
const drinks = data.result;

console.log(drinks)

document.querySelector('#root').innerHTML = render(
  <div className="page">
    <Header />
    <main>
      <Banner />
      <Menu drinks={drinks} />
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

 const buttons = document.querySelectorAll('.order-btn')
 buttons.forEach((button, index) => {
  button.addEventListener('click', async() => {
    const response = await fetch(`http://localhost:4000/api/drinks/${drinks[index].id}`, {
      method:'PATCH',
      headers: {
        'Content-Type':'application/json'
      },
      body: JSON.stringify([{ op: 'replace', path: '/ordered', value: true }])
    });
    const data = await response.json();
    window.location.reload()
  });
});
