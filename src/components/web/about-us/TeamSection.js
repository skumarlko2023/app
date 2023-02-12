import { useState } from "react";

const TeamSection = (props) => {
    console.log("team sections ==>", props.teamsData)
    const [teams, setTeams] = useState(props.teamsData);
    console.log("teamsteamsteamsteamsteamsteams=>", teams);
    return (
        <section className="section section-lg ">
            <div className="container">
                <div className="row justify-content-center">
                    <div className="col-lg-8">
                        <div className="section-heading text-center mb-5">
                            <h2>Meet our lovely team</h2>
                            <p className="lead">Dynamically pursue reliable convergence rather than 24/7 process improvements
                                develop end-to-end customer service.</p>
                        </div>
                    </div>
                </div>
                <div className="row">
                    {
                        teams.map((team, index) =>
                            <div key={index} className="col-12 col-md-6 col-lg-3 mb-md-4 mb-4">
                                <div className="profile-card">
                                    <div className="card bg-white shadow animate-hover border-variant-soft">
                                        <div className="bg-soft p-2 mb-4">
                                            <img src={team.profile_image} className="card-img-top" alt="Christopher Avatar" />
                                        </div>
                                        <div className="card-body text-center px-4 pb-4 pt-0">
                                            <h3 className="h6">{team.name}</h3>
                                            <span className="font-small font-weight-normal text-gray mb-3">{team.title}</span>
                                            <ul className="list-unstyled d-flex justify-content-center mt-3 mb-0">
                                                <li>
                                                    <a href="#" target="_blank" aria-label="facebook social link" className="icon icon-shape icon-xs bg-facebook-alt rounded-circle icon-facebook brand-facebook mx-1" data-toggle="tooltip" data-placement="top" title="" data-original-title="50k Like">
                                                        <span className="fab fa-facebook-f"></span>
                                                    </a>
                                                </li>
                                                <li>
                                                    <a href="#" target="_blank" aria-label="twitter social link" className="icon icon-shape icon-xs bg-twitch-alt rounded-circle brand-twitter icon-twitter mx-1" data-toggle="tooltip" data-placement="top" title="" data-original-title="40k Followers" aria-describedby="tooltip927904">
                                                        <span className="fab fa-twitter"></span>
                                                    </a>
                                                </li>
                                                <li>
                                                    <a href="#" target="_blank" aria-label="slack social link" className="icon icon-shape icon-xs bg-youtube-alt rounded-circle brand-youtube icon-youtube mx-1" data-toggle="tooltip" data-placement="top" title="" data-original-title="25k Subscribe">
                                                        <span className="fab fa-youtube"></span>
                                                    </a>
                                                </li>
                                                <li>
                                                    <a href="#" target="_blank" aria-label="dribbble social link" className="icon icon-shape icon-xs bg-dribbble-alt rounded-circle brand-dribbble icon-dribbble mx-1" data-toggle="tooltip" data-placement="top" title="" data-original-title="2k Project">
                                                        <span className="fab fa-dribbble"></span>
                                                    </a>
                                                </li>
                                            </ul>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        )}
                </div>
            </div>
        </section >
    )
}
export default TeamSection;