import ContactInformation from "./ContactInformation";
import ContactMap from "./ContactMap";
import ContactUsForm from "./ContactUsForm";
import ContactHeader from "./ContentHeader";

const ContactUs = () => {
    return (
        <div className="main">
            <ContactHeader />
            <ContactInformation />
            <ContactUsForm />
            <ContactMap />
        </div>
    )
}
export default ContactUs;