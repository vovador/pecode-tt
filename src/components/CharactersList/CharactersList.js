import React, { useState } from 'react';
import {Pager} from '../Pagination/Pagination';
import './CharactersList.scss'

export const CharactersList = ({ charPage, characters, handleCharPegination }) => {

const [selectedChar, setSelectedChar] = useState('')

  return (
    <>
      <h2>CharactersList</h2>
      <div className="pager-container--top">
        <Pager page={charPage} handlePegination={handleCharPegination} postsPerPage={20} totalPosts={671} />
      </div>
      <div className='columns'>
        <div className='column characters'>
          {characters.map(character => (
            <div key={character.id} className="characters__card" onClick={() => {setSelectedChar(character)}}>
              <img src={character.image} alt='' />
              <h2>{character.name}</h2>
            </div>
          ))}
        </div>
      </div>
      <div className="pager-container">
        <Pager page={charPage} handlePegination={handleCharPegination} postsPerPage={20} totalPosts={671} />
      </div>
      {selectedChar && <ExtendedCharInfo character={selectedChar} switchVisibility={setSelectedChar} />}
    </>
  );
};

const ExtendedCharInfo = ({character, switchVisibility}) => {

  return(
    <div className="charecter-extended" onClick={() => { switchVisibility('')}}>
      <div className="charecter-extended__info" onClick={e => e.stopPropagation()}>
      <img src={character.image} alt='' />
      <h2>{character.name}</h2>
      </div>
    </div>
  )
}
