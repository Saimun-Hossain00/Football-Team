import React from "react";
import { useHistory } from "react-router";
import "./Teams.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowRight } from "@fortawesome/free-solid-svg-icons";

const Teams = (props) => {
  const { idTeam, strSport, strAlternate, strTeamBadge } = props.team;
  const history = useHistory();
  const showTeam = (idTeam) => {
    const url = `team/${idTeam}`;
    history.push(url);
  };

  return (
    <div className="container">
      <div className="team-container">
        <div className="cart-container">
          <img src={strTeamBadge} alt="" />
          <h2>{strAlternate}</h2>
          <p>Sports Type: {strSport}</p>
        </div>
        <div className="main-btn">
          <button onClick={() => showTeam(idTeam)}>
            Explore
            <FontAwesomeIcon icon={faArrowRight} />
          </button>
        </div>
      </div>
    </div>
  );
};

export default Teams;
