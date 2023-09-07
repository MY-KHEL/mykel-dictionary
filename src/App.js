// import { useState } fr/om "react";
import { useEffect, useState } from "react";
import axios from "axios";
import Header from "./components/Header";
import Definition from "./components/Definition";
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.min.js';
import Voicing from "./components/Audio";

const App = () => {
  const [word, setWord] = useState(" ");
  const [meaning, setMeaning] = useState("");

  const dictionaryApi = async () => {
    try {
      const data = await axios.get(
        `https://api.dictionaryapi.dev/api/v2/entries/en/${word}`
      );
      setMeaning(data.data);
      // console.log(data);
    } catch (error) {
      console.log(error);
    }
  };
  //console.log(meaning);
  useEffect(() => {
    dictionaryApi();
  }, [ word ]);

  return (
    <div className="bg-black text-white fs-4">
    <div className="container pt-5 ">
      <p>Dictionary by <a href="https://github.com/MY-KHEL/" target="_blank" rel="noreferrer"> mykhel</a> </p>
      {meaning && <Voicing word={word} meaning={meaning} />}

      <Header word={word} setWord={setWord} meaning={meaning} />

      {meaning && <Definition word={word} meaning={meaning} />}
    </div>
    </div>
  );
};

export default App;
