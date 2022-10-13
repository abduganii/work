import Analytics from "../../components/analytics/analytics";
import Build from "../../components/build/build";
import Cutting from "../../components/cutting/cutting";
import Footer from "../../components/footer/footer";
import Future from "../../components/future/future";
import Header from "../../components/header/header";
import Pricing from "../../components/Pricing/pricing";

const Products = () => {
    return (
        <>
            <Header />
            <Analytics />
            <Future />
            <Cutting />
            <Build />
            <Pricing />
            <Footer />
        </>

    )
}

export default Products;