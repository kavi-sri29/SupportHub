import React from 'react';

const Header = () => (
  <div>
    <div className="header">
      <img
        src="https://uat-supporthub.experian.co.uk/assets/images/supporthub_beta_logo.png"
        height="70px"
      />
      <img
        src="https://uat-supporthub.experian.co.uk/assets/images/experian_logo.png"
        height="70px"
      />
    </div>
    <div className="beta">
      <b>Support Hub</b> is currently in <b>beta.</b>{' '}
      <a
        href="https://uat-supporthub.experian.co.uk/betanotice/welcome"
        target="_blank"
      >
        What does this mean?
      </a>
    </div>
  </div>
);

export default Header;
