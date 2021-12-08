import React from 'react';
import './Pokemon.css';

export default function Pokemon(props) {
  return (
    <div className="pokemon">
      <img src={props.url_image} alt={props.pokemon} />
      <span className="name">{props.pokemon}</span>
      <span>Type: {props.type_1}</span>
      <span>HP: {props.hp}</span>
      <span>Attack: {props.attack}</span>
      <span>Defense: {props.defense}</span>
    </div>
  );
}
