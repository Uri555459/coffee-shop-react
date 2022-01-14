import { Link } from "react-router-dom"
import './offer.scss'
import Decore from "../Decore/Decore";

const Offer = ({ offerClassesBig, offerBg, decoreImg, title }) => {
  return (
    <div className={`offer ${offerClassesBig ? offerClassesBig : ''}`}>
      <img className='offer__bg' src={offerBg} alt="images" />
      <div className="container">
        <div className="offer__content">
          <h1 className="offer__title">{title}</h1>
          {
            offerClassesBig &&
            <>
              <Decore decoreImg={decoreImg} />
              <p className="offer__description">We makes every day full of energy and taste</p>
              <p className="offer__description">Want to try our beans?</p>
              <Link className='offer__btn' to='/our-coffee'>More</Link>
            </>
          }
        </div>
      </div>
    </div>
  )
}

export default Offer