import { useParams } from 'react-router-dom';
import React, { useEffect, useState } from 'react';

const DetailView = () => {
  const { id } = useParams();
  const [character, setCharacter] = useState(null);

  useEffect(() => {
    fetch(`https://rickandmortyapi.com/api/character/${id}`)
      .then(res => res.json())
      .then(data => setCharacter(data));
  }, [id]);

  if (!character) return <p>Loading...</p>;

  return (
    <div className="character-detail">
      <h2>{character.name}</h2>
      <img src={character.image} alt={character.name} className="character-img" />

      <table className="detail-table">
        <tbody>
          <tr>
            <td>Status</td>
            <td>{character.status}</td>
          </tr>
          <tr>
            <td>Species</td>
            <td>{character.species}</td>
          </tr>
          <tr>
            <td>Type</td>
            <td>{character.type || "Unknown"}</td>
          </tr>
          <tr>
            <td>Gender</td>
            <td>{character.gender}</td>
          </tr>
          <tr>
            <td>Origin</td>
            <td>{character.origin.name}</td>
          </tr>
          <tr>
            <td>Current Location</td>
            <td>{character.location.name}</td>
          </tr>
          <tr>
            <td>Episodes</td>
            <td>{character.episode.length}</td>
          </tr>
          <tr>
            <td>Created On</td>
            <td>{new Date(character.created).toLocaleDateString()}</td>
          </tr>
        </tbody>
      </table>
    </div>
  );
};

export default DetailView;
