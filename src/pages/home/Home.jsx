import React from 'react';
import Featured from "../../components/Featured/Featured";
import "./Home.scss";
import Slide from "../../components/slide/Slide";
import CatCard from "../../components/catCard/CatCard";
import TrustedBy from "../../components/trustedBy/TrustedBy";
import { cards, projects } from "../../data";

const Home = () => {
  return (
    <div className='home'>
      <Featured />
      <TrustedBy />
      <Slide slidesToShow={5} arrowsScroll={5}>
        {cards.map((card) => (
          <CatCard key={card.id} card={card} />
        ))}
      </Slide>
    </div>
  );
};

export default Home