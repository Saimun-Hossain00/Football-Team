import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router';
import './TeamDetails.css'
import male from '../Photo/male.png'
import female from '../Photo/female.png'
import found from '../Icon/found 1.png'
import country from '../Icon/flag (1) 1.png'
import sport from '../Icon/football (1) 1.png'
import gender from '../Icon/male-gender-sign 1.png'
import Twitter from '../Icon/Twitter.png';
import Facebook from '../Icon/Facebook.png';
import YouTube from '../Icon/YouTube.png';
import Image from '../Photo/images.png'
import { Container, Jumbotron } from 'react-bootstrap';

const TeamDetails = () => {
    const { idTeam } = useParams();
    const [teamDetail, setTeamDetail] = useState([]);
    useEffect(() => {
        const url = `https://www.thesportsdb.com/api/v1/json/1/lookupteam.php?id=${idTeam}`
        fetch(url)
            .then(res => res.json())
            .then(data => setTeamDetail(data.teams[0]))
    }, [])
    const image = teamDetail.strGender === 'Male' ? male : female
    return (
        <div className="main-container">
            <Jumbotron>
            <img className="header-image" src={Image} alt="" />
                <Container>
                    <img className="team-logo" src={teamDetail.strTeamBadge} alt="" />
                </Container>
            </Jumbotron>
            
            

{/* Team Details card start         */}
            <div className="row detail-container">
                <div className="col-sm-12 col-lg-6">
                    <h2>{teamDetail.strAlternate}</h2>
                    <p><small>
                        <img src={found} alt="" />
                        Founded : {teamDetail.intFormedYear}
                    </small></p>
                    <p><small>
                        <img src={country} alt="" />
                        Country : {teamDetail.strCountry}
                    </small> </p>
                    <p><small>
                        <img src={sport} alt="" />
                        Sport Type : {teamDetail.strSport}
                    </small> </p>
                    <p><small>
                        <img src={gender} alt="" />
                        Gender : {teamDetail.strGender}
                    </small></p>
                </div>
                <div className="col-sm-12 col-lg-6  male-female-img">
                    <img src={image} alt="" />
                </div>
            </div>
{/* Team Details card end         */}

            <div className="description">
                <p>Description:{teamDetail.strDescriptionEN}</p>
            </div>
            <div className="footer">
                <a href="https://twitter.com/"><img src={Twitter} alt="" /></a>
                <a href="https://www.facebook.com/"><img src={Facebook} alt="" /></a>
                <a href="https://www.youtube.com/"><img src={YouTube} alt="" /></a>
            </div>
        </div>
    );
};

export default TeamDetails;