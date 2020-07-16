import React from 'react';

const PlayerSingle = (props) => {
    return (<div className="row">
    <div className="col s12 ">
      <div className="card">
        <div className="card-image">
          <img src="soccer.jpeg" alt="Sample"/>
          <span className="card-title">{ props.player.firstName} { props.player.lastName}</span>
        </div>
        <div className="card-content">
          <p>Phone: { props.player.phone} &nbsp; &nbsp;      E-mail: { props.player.email}</p>
          <p>Strength: { props.player.strength}  &nbsp; &nbsp;     Endurance: { props.player.endurance}</p>
        </div>
        <div className="card-action">
          Team: {props.player.team}
        </div>
      </div>
    </div>
  </div>);
}
 
export default PlayerSingle;
