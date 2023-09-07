import React from 'react';
import Form from 'react-bootstrap/Form';
import InputGroup from 'react-bootstrap/InputGroup';

const Header =  ({word , setWord, meaning}) => {
    return(
        <div >
        <InputGroup className="mb-2 w-100 bg-secondary-subtle">
        
        <Form.Control
          size="sm"
          placeholder="Enter a word"
          aria-label=""
          aria-describedby="basic-addon1"
          onChange={
            (e) =>{setWord(e.target.value)}
        
          }
          className='bg-secondary-subtle rounded-lg'
        />
      </InputGroup>

           <p className='mb-4 fs-3'> <b>Word: {word}</b>  &nbsp;
         <span className='fs-4'>{meaning[0] && word &&
           (meaning[0].phonetics[0] && meaning[0].phonetics[0].text)}</span>  
                        
            </p>
           
        </div>
    )
}

export default Header