import React from 'react';
import { socialMediaLinks } from '../../PortfolioData';
import libery from '../../FontAwsomeLibery'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

libery();

const SocialMediaIcons = () => {
    return (
        <div className="icons d-flex">
            {
                socialMediaLinks.github && <a className="text-dark" id="githubs" href={socialMediaLinks.github}
                    target="_blank"
                >
                    <FontAwesomeIcon icon={['fab', 'github']} />
                </a>
            }
            {
                socialMediaLinks.facebook && <a id="facebook" href={socialMediaLinks.facebook}
                    target="_blank"
                >
                    <FontAwesomeIcon icon={['fab', 'facebook']} />
                </a>
            }
            {
                socialMediaLinks.instagram && <a className="text-dark" id="instagram" href={socialMediaLinks.instagram}
                    target="_blank"
                >
                    <FontAwesomeIcon icon={['fab', 'instagram']} />
                </a>
            }
            {
                socialMediaLinks.linkedin && <a className="text-success" id="linkedin" href={socialMediaLinks.linkedin}
                    target="_blank"
                >
                    <FontAwesomeIcon icon={['fab', 'linkedin']} />
                </a>
            }

            {
                socialMediaLinks.twitter && <a id="twitter" href={socialMediaLinks.twitter}>
                    <FontAwesomeIcon icon={['fab', 'twitter']} />
                </a>
            }
            {
                socialMediaLinks.stackoverflow && <a className="text-warning" id="stackOverflow" href={socialMediaLinks.stackoverflow}>
                    <FontAwesomeIcon icon={['fab', 'stack-overflow']} />
                </a>
            }
            {
                socialMediaLinks.gmail && <a className="text-success" id="gamil" href={`mailto:${socialMediaLinks.gmail}`}>
                    <FontAwesomeIcon icon={['fab', 'google']} />
                </a>
            }
            {
                socialMediaLinks.medium && <a className="text-dark" id="medium" href={socialMediaLinks.medium}>
                    <FontAwesomeIcon icon={['fab', 'medium']} />
                </a>
            }
        </div>
    );
};

export default SocialMediaIcons;