import Offer from "../components/Offer/Offer";
import Info from "../components/Info/Info";
import Card from "../components/Card/Card";
import Filter from "../components/Filter/Filter";
import Spiner from "../components/Spiner/Spiner";
import { useState } from "react";

import data from '../db.json'

import offerBg from '../assets/images/our-coffee/our-coffee-bg.jpg'
import images from '../assets/images/our-coffee/about-beans-img.jpg'

const OurCoffee = () => {
  const [coffee, setCoffee] = useState(data.coffee)
  const [searchValue, setSearchValue] = useState('')

  const textDescription = [
    'Extremity sweetness difficult behaviour he of. On disposal of as landlord horrible.',
    'Afraid at highly months do things on at. Situation recommend objection do intention so questions.',
    'As greatly removed calling pleased improve an. Last ask him cold feel met spot shy want. Children me laughing we prospect answered followed. At it went is song that held help face.'
  ]

  const filterBtnHandler = (event) => {
    const eventTargetBtnBoolean = event.target.classList.contains('filter__btn')

    if (eventTargetBtnBoolean) {
      const eventTargetElem = event.target
      let country = eventTargetElem.dataset
      const countrys = document.querySelectorAll('[data-country]')
      country = country.country.toLowerCase()

      const coffee = data.coffee.filter(item =>
        item.country
          .toLowerCase()
          .toString() === country ? item : null)

      setCoffee(coffee)

      countrys.forEach(item => item.classList.remove('active'))
      eventTargetElem.classList.add('active')
    }
  }

  const searchHandler = (event) => {
    setSearchValue(event.target.value)
  }

  const enterHandler = (event) => {
    event.preventDefault()

    const coffee = data.coffee.filter(item => {
      const title = item.name.toLowerCase()
      if (title.indexOf(searchValue.toLowerCase()) !== -1) {
        return item
      }
      return null
    })

    setCoffee(coffee)

  }

  return (
    <>
      <Offer offerBg={offerBg} title='Our Coffee' />
      <Info textDescription={textDescription} images={images} />
      <Filter searchValue={searchValue} setSearchValue={setSearchValue} enterHandler={enterHandler} searchHandler={searchHandler} filterBtnHandler={filterBtnHandler} />
      <div className="cards">
        {coffee.length
          ? coffee.map(item => <Card key={item.id} {...item} />) : <Spiner />}
      </div>
    </>
  )
}

export default OurCoffee