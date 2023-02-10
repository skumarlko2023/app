import ServiceHeader from "./ServicesHeader";
import ServicesSection from "./ServicesSection";
import TestimonialSection from "./TestimonialSection";
import WorkProcessSection from "./WorkProcessSection";

const Services = () => {
    return (
        <div className="main">
            <ServiceHeader />
            <WorkProcessSection />
            <TestimonialSection />
            <ServicesSection />
        </div>
    )
}
export default Services;