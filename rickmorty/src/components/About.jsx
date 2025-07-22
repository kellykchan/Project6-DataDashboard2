import React from 'react';

const About = () => (
  <div className="about-page">
    <h2>About This App</h2>
    <p>
      This app visualizes data from the Rick and Morty API. 
      The Rick and Morty API is a REST(ish) and GraphQL API based on the television show Rick and Morty. 
      You will have access to about hundreds of characters, images, locations and episodes. 
      The Rick and Morty API is filled with canonical information as seen on the TV show. 
      It helps you explore character information, species distribution, and much more.
    </p>
    <p>
      Use the dashboard to filter and analyze data, and check out the graphs for quick insights.
    </p>
    <p>
      Suggestions: try filtering by species or status to find interesting patterns!
    </p>
  </div>
);

export default About;
