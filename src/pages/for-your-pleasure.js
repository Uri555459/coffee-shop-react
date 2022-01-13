import Offer from "../components/Offer/Offer";
import Info from "../components/Info/Info";
import Card from "../components/Card/Card";

import offerBg from '../assets/images/for-your-pleasure/for-your-pleasure-bg.jpg'
import images from '../assets/images/for-your-pleasure/for-your-pleasure-img.jpg'

import data from '../db.json'

const ForYourPleasure = () => {
  const textDescription = [
    'Extremity sweetness difficult behaviour he of. On disposal of as landlord horrible.',
    'Afraid at highly months do things on at. Situation recommend objection do intention so questions.',
    'As greatly removed calling pleased improve an. Last ask him cold feel met spot shy want.'
  ]

  return (
    <>
      <Offer offerBg={offerBg} title='For your pleasure' />
      <Info textDescription={textDescription} images={images} />
      <div className="cards">
        {data.goods.map(item => <Card key={item.name} {...item} />)}
      </div>
    </>
  )
}

export default ForYourPleasure