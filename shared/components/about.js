import React from 'react';
import { WrapperAbout, ProfilePicture } from '../theme/about';

export default function About() {
  return (
    <WrapperAbout>
      <div className="content">
        <ProfilePicture>
        </ProfilePicture>
        <div className="profile-content">
          <h2 className="light title-name">Eduardo F. Araya J.</h2>
          <span className="primary"> {'> Full-stack developer <'} </span>
          <p>
            Lorem ipsum dolor sit amet, consectetuer adipiscing elit,
            sed diam nonummy nibh euismod tincidunt ut laoreet
            dolore magna aliquam erat  volutpat.
            Ut  wisi  enim  ad  minim  veniam,  quis  nostrud
            exerci  tation  ullamcorper  suscipit
            lobortis  nisl  ut  aliquip  ex  ea  commodo  consequat.
            Duis autem vel eum iriure dolor
            in hendrerit in vulputate veli.  Lorem  ipsum  dolor  sit
            amet,  consectetuer  adipiscing  elit,
            sed  diam nonummy ni
        </p>
        </div>
      </div>
    </WrapperAbout>
  );
}
