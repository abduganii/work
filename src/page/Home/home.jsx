import Beautiful from '../../components/beautiful/beautiful';
import Features from '../../components/features/features';
import Footer from '../../components/footer/footer';
import Header from '../../components/header/header';
import Integration from '../../components/integration/integration';
import Join from '../../components/join/join';
import OurService from '../../components/ourService/ourService';
import Pricing from '../../components/Pricing/pricing';
import Question from '../../components/question/question';





function Home() {
    return (
        <>
            <Header />
            <Beautiful />
            <Features />
            <OurService />
            <Integration />
            <Join />
            <Pricing />
            <Question />
            <Footer />
        </>
    )
}

export default Home;
