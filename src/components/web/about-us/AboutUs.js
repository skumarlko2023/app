import WorkProcessSection from "../services/WorkProcessSection";
import AboutHeaderSection from "./AboutHeaderSection";
import AboutUsSection from "./AboutUsSection";
import CustomerSection from "./CustomerSection";
import TeamSection from "./TeamSection";

const AboutUs = () => {
    return (
        <div className="main">
            <AboutHeaderSection />
            <WorkProcessSection />
            <AboutUsSection />
            <TeamSection />
            <CustomerSection />
        </div>
    )
}
export default AboutUs;