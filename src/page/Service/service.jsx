import BeautifulService from "../../components/BeautifulService/BeautifulService";
import Features from "../../components/features/features";
import Footer from "../../components/footer/footer";
import Header from "../../components/header/header";
import Integration from "../../components/integration/integration";
import Join from "../../components/join/join";
import OurService from "../../components/ourService/ourService";
import Pricing from "../../components/Pricing/pricing";
import Upleash from "../../components/upleash/upleash";

const Service = () => {
    return (
        <>
            <Header />
            <BeautifulService />
            <Features />
            <OurService />
            <Upleash />
            <Integration />
            <Join />
            <Pricing />
            <Footer />
        </>
    )
}

export default Service;