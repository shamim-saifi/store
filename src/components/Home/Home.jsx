import React from 'react';
import SaleProducts from '../Products/SaleProducts';
import PromoSection from '../PromoSection/PromoSection';
import QuoteSection from '../QuoteSection/QuoteSection';
import FeaturedProducts from '../Products/FeaturedProducts';
import ContactForm from '../Contact/ContactForm';
import HomeSlider from './HomeSlider/HomeSlider';
import QuoteSlider from '../QuoteSlider/QuoteSlider';

const Home = () => {
	return (
		<>
			<HomeSlider />
			<SaleProducts />
			<PromoSection />
			<QuoteSection />
			<FeaturedProducts />
			<ContactForm />
			<QuoteSlider />
		</>
	);
};

export default Home;
