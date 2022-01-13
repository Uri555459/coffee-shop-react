import { useParams } from "react-router-dom";
import Decore from "../components/Decore/Decore";
import Offer from "../components/Offer/Offer"

import data from '../db.json'
import offerBg from "../assets/images/our-coffee/our-coffee-bg.jpg";

const Single = () => {
	const id = useParams().id.toString()
	const singleItem = data.coffee.filter(item => item.id.toString() === id ? item : null)

	const { name, country, description, price, url } = singleItem[0]


	return (
		<>
			<Offer offerBg={offerBg} title={name} />
			{singleItem.length &&
				<section className="about-product">
					<div className="container">
						<div className="about-product__inner">
							<div className="about-product__img-wrap">
								<img src={url} alt="coffe images" className="about-product__img" />
							</div>
							<div className="about-product__content">
								<Decore title='About it' />
								<div className="about-product__coutnry"><b>Country:</b> {country}</div>
								<div className="about-product__description"><b>Description:</b> {description}</div>
								<div className="about-product__price"><span>Price:</span> {price}</div>
							</div>
						</div>
					</div>
				</section>
			}
		</>
	)
}

export default Single