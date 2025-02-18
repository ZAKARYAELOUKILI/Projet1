
import React from 'react';
import { useLocation } from 'react-router-dom';
import './PersonDetails.css';

const PersonDetails = () => {
  const location = useLocation();
  const person = location.state;

  return (
    <div className="person-details">
      <h2>Details Personne </h2>
      <p>Votre Prenom est : {person.nom}</p>
      <p>Le Nom du Personne est  : {person.prenom}</p>
      <p>L'age  du personne est :  {person.age}</p>
      <p>L'age  du personne est :  {person.ville}</p> 
    </div>
  );
};

export default PersonDetails;