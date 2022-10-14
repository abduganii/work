import CompaniesStatis from "../../components/companiesStatis/companiesStatis";
import Footer from "../../components/footer/footer";
import Header from "../../components/header/header";
import Navbar from "../../components/navbar/navbar";
import Posts from "../../components/posts/posts";
import Stories from "../../components/stories/stories";

const Post = () => {
    return (
        <>
            <Header />
            <CompaniesStatis />
            <Stories />
            <Navbar />
            <Posts />
            <Footer />
        </>
    )
}

export default Post;