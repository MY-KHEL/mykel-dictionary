import React from 'react';

const Voicing = ({word, meaning}) => {
    console.log(meaning[0]);
    return(
        <>
            <div>
                {
                    meaning[0] && word &&(
                        <audio src={meaning[0].phonetics[0] && meaning[0].phonetics[0].audio } controls>
                            Your browser doesn't support audio element
                        </audio>
                    )
                }
            </div>
        </>
    )
}
export default Voicing