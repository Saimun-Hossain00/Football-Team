import React from 'react';
import { useHistory } from 'react-router';
import './Team.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faArrowRight } from '@fortawesome/free-solid-svg-icons'

const Team = (props) => {
    const { idTeam, strTeam, strSport, strTeamBadge } = props.team;
    const history = useHistory();
    const showTeam = (idTeam) => {
        const url = `team/${idTeam}`
        history.push(url);
    }
    return (
        <div className='main-detail' >
            <div className="header-container">
                <img src={strTeamBadge} alt="" />
                <h3>{strTeam}</h3>
                <p>Sports type:{strSport}</p>
                <button variant="primary" className="main-button" onClick={() => showTeam(idTeam)}>
                    Explore <FontAwesomeIcon icon={faArrowRight} />
                </button>
            </div>
        </div>
    );
};

export default Team;