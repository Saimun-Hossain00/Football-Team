import React, { useEffect, useState } from "react";
import { useParams } from "react-router";
import "./TeamsDetail.css";

const TeamsDetail = () => {
  const { idTeam } = useParams();
  const [teamDetail, setTeamDetail] = useState({});
  useEffect(() => {
    const url = `https://www.thesportsdb.com/api/v1/json/1/lookupteam.php?id= ${idTeam}`;
    fetch(url)
      .then((res) => res.json())
      .then((data) => setTeamDetail(data.teams[0]));
  }, [idTeam]);
  return (
    <div className="main-container">
      <div className="detail-container">
        <h2>{teamDetail.strAlternate}</h2>
        <p>Founded :{teamDetail.intFormedYear}</p>
        <p>
          <small>Country : {teamDetail.strCountry}</small>
        </p>
        <p>
          <small>Sport Type : {teamDetail.strSport}</small>
        </p>
        <p>
          <small>Gender : {teamDetail.strGender}</small>
        </p>
      </div>
      <div className="description">
        <p>{teamDetail.strDescriptionEN}</p>
      </div>
    </div>
  );
};

export default TeamsDetail;
