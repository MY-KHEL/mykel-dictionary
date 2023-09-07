import React from "react";

const Definition = ({ word, meaning }) => {
  return (
    
   word === ""
    ? "Start by typing a word"
    : meaning.map((mean) =>
        mean.meanings.map((item) =>
          item.definitions.map((def) => (
            <>
              <div>
                
                
                <p>Meaning: {def.definition}</p>
                {def.example && <p className="fs-6"><i>Example : {def.example}</i></p>}
                {def.antonyms && <p className="fs-6">Antonyms : {def.antonyms.map((s) => `${s}, `)}</p>}
                {def.synonyms && <p className="fs-6">Synonyms : {def.synonyms.map((s) => `${s}, `)}</p>}
                
                <hr />
              </div>
            </>
          ))
        )
      )
  )
};

export default Definition;
