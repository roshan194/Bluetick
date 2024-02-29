import React from 'react';
import './css/WhatWeOfferSection.css';

const WhatWeOfferSection = () => {
    return (
        <div className="what-we-offer-container">
            <div className="offer-cards">
                <div className="offer-card">
                    <h3>Explore AI Opportunities for Your Enterprise</h3>
                    <p>Unlock the potential of generative AI by identifying tailored opportunities for integration within
                        your organization, ensuring a strategic and efficient approach to AI implementation.</p>
                </div>
                <div className="offer-card">
                    <h3>Design AI Trust Layer</h3>
                    <p>Prioritize data security and build trust in generative AI applications with a dedicated trust
                        layer, emphasizing privacy-focused solutions that safeguard both organizational and
                        customer data.</p>
                </div>
                <div className="offer-card">
                    <h3>Scalability-Focused Solutions</h3>
                    <p>Streamline and optimize business processes with comprehensive workflow automation,
                        ensuring seamless integration of AI technologies from inception to execution for increased
                        efficiency and productivity.</p>
                </div>
                <div className="offer-card">
                    <h3>End-to-End Workflow Automation</h3>
                    <p>Implement cutting-edge, scalable generative AI solutions that not only meet current
                        organizational needs but also adapt and grow with the evolving demands of your enterprise,
                        providing a future-proof approach to AI integration.</p>
                </div>
            </div>
        </div>
    );
}

export default WhatWeOfferSection;