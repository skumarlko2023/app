import WorkProcessSection from "../services/WorkProcessSection";
import AboutHeaderSection from "./AboutHeaderSection";
import AboutUsSection from "./AboutUsSection";
import CustomerSection from "./CustomerSection";
import TeamSection from "./TeamSection";
import Teams from "./data/Team";
import { useState, useEffect  } from "react";
const AboutUs = () => {
    // const [portfolios, setPortfolios] = useState([]);
    // const [teams, setTeams] = useState(Teams);

    // useEffect(() => {
    //     setTeams(Teams);
    //     console.log("teams===>",teams);
    // }, []);
    return (
        <div className="main">
            <AboutHeaderSection />
            <WorkProcessSection />
            <AboutUsSection />
            <TeamSection teamsData={Teams} />
            <CustomerSection />
        </div>
    )
}
export default AboutUs;