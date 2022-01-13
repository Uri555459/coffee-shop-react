import Offer from "../components/Offer/Offer";

import offerBg from '../assets/images/home/offer-bg.jpg'
import Decore from "../components/Decore/Decore";
import Card from "../components/Card/Card";

import decoreImgWhite from '../assets/images/decore-white.svg'
import decoreImgBlack from '../assets/images/decore-black.svg'
import ourBestImgBg from '../assets/images/home/our-bast-bg.jpg'

import data from '../db.json'

const Home = () => {
  return (
    <>
      <Offer decoreImg={decoreImgWhite} offerBg={offerBg} offerClassesBig='offer--big' title='Everything You Love About Coffee'/>
      <section className="about">
        <div className="container">
          <div className="about__content">
            <Decore title='About Us'/>
            <p className="about__description">
              Extremity sweetness difficult behaviour he of. On disposal of as landlord horrible.
              Afraid at highly months do things on at. Situation recommend objection do intention
              so questions. As greatly removed calling pleased improve an. Last ask him cold feel
              met spot shy want. Children me laughing we prospect answered followed. At it went
              is song that held help face.
            </p>
            <p className="about__description">
              Now residence dashwoods she excellent you. Shade being under his bed her, Much
              read on as draw. Blessing for ignorant exercise any yourself unpacked. Pleasant
              horrible but confined day end marriage. Eagerness furniture set preserved far
              recommend. Did even but nor are most gave hope. Secure active living depend son
              repair day ladies now.
            </p>
          </div>
        </div>
      </section>

      <section className="our-best">
        <img className='our-best-bg' src={ourBestImgBg} alt="bg"/>
        <div className="container">
          <h2 className="our-best__title">Our best</h2>
          <div className="cards cards--our-best">
            {data.bestsellers.map(item => <Card key={item.name} {...item} />)}
          </div>
        </div>
      </section>
    </>
  )
}

export default Home