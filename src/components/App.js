import '../styles/App.scss';
import {useState} from 'react';

 
function App() {
  const [word, setWord]= useState ('Katakroker');
  const [userLetters, setUserLetters] = useState ([]);
  const [numberOfErrors, setNumberOfErrors] = useState(0);
  const [lastLetter, setLastLetter] = useState('');
   
  const renderSolutionLetters = () => {
  const wordLetters = word.split('') //convertirlo en array
  return wordLetters.map ((word , index) =>{
    return <li key ={index} className="letter"></li>;
  });
  }

  /*const renderErrorLetters = (event) => {
    setUserLetters = event.target.value;
    /*return word.filter ((eachLetter) => eachLetter !== userLetters {
       return <li className="letter"></li>;
    });*/

 
  const handleClickButton = (event) => {
    event.preventDefault();
    setNumberOfErrors(numberOfErrors+1);
  };

  const handleLastLetter = (event) => {
  const letterValue = event.target.value;
  const regExp = /^[A-Za-zñÑáéíóúüçÁÉÍÓÚ\s\u00f1\u00d1]*$/
  const test = regExp.test(letterValue);
   if (test) {
  setLastLetter(letterValue);
  setUserLetters ([...userLetters, letterValue]); //lo clonamos porque queremos quedarnos con el array anterior + lo nuevo
    };  
  }

  return <div className="App">
    <div className="page">
      <header>
        <h1 className="header__title">Juego del ahorcado</h1>
      </header>
      <main className="main">
        <section>
          <div className="solution">
            <h2 className="title">Solución:</h2>
            <ul className="letters">{renderSolutionLetters()}</ul>  
         </div>
          <div className="error">
            <h2 className="title">Letras falladas:</h2>
            <ul className="letters"></ul>
          </div>
          <form className="form">
            <label className="title" htmlFor="last-letter">Escribe una letra:</label>
            <input
              autoComplete="off"
              className="form__input"
              maxLength="1"
              type="text"
              name="last-letter"
              id="last-letter"
              value={lastLetter}
              onChange={handleLastLetter}
            />
          </form>
        </section>
        <section className={"dummy error-" + numberOfErrors}>
          <span className="error-13 eye"></span>
          <span className="error-12 eye"></span>
          <span className="error-11 line"></span>
          <span className="error-10 line"></span>
          <span className="error-9 line"></span>
          <span className="error-8 line"></span>
          <span className="error-7 line"></span>
          <span className="error-6 head"></span>
          <span className="error-5 line"></span>
          <span className="error-4 line"></span>
          <span className="error-3 line"></span>
          <span className="error-2 line"></span>
          <span className="error-1 line"></span>
        </section>
        <button onClick={handleClickButton} value=''>Incrementar</button>
      </main>
    </div>
  </div>
};

export default App;
