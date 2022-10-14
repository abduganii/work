import Footer from "../../components/footer/footer"
import Header from "../../components/header/header"
import Knowus from "../../components/Knowus/knowus"
import Navbar from "../../components/navbar/navbar"
import TeamMember from "../../components/teamMember/teamMember"
import Theteam from "../../components/Theteam/theteam"

const Team = () => {
    return (
        <>
            <Header />
            <Theteam />
            <Navbar />
            <TeamMember />
            <Knowus />
            <Footer />
        </>
    )
}

export default Team