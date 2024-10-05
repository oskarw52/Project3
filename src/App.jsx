import './App.css'
import { useState } from 'react';

const App = () => {
  const questions = [["Spirit Rush", "Ahri"], ["Last Breath", "Yasuo"], ["Super Mega Death Rocket!", "Jinx"], ["The Box", "Thresh"], 
    ["Death Mark", "Zed"], ["Final Spark", "Lux"], ["Dragon's Rage", "Lee Sin"], ["Blade of the Exile", "Riven"], ["Death Lotus", "Katarina"],
    ["Demacian Justice", "Garen"], ["Final Hour", "Vayne"], ["Bullet Time", "Miss Fortune"], ["Perfect Execution", "Akali"], 
    ["Tidal Wave", "Nami"], ["Glacial Fissure", "Braum"], ["Noxian Guillotine", "Darius"], ["On the Hunt", "Sivir"]];
  const [card, setCard] = useState(0); 
  const [cardStatus, setCardStatus] = useState(0);
  const [answer, setAnswer] = useState("");
  const [correctGuess, setCorrectGuess] = useState("");
  

  const handleAnswer = (e) => {
    setAnswer(e.target.value);
  }
  
  const handleSubmit = (e) => {
    if (answer == questions[card][1]) {
      setCorrectGuess("correct");
    }
    else {
      setCorrectGuess("wrong");
    }
  }

  const nextCard = () => {
    if (card + 1 < questions.length) {
      setCard(card + 1);
    }
    setAnswer("");
    setCorrectGuess("");
    setCardStatus(0);
  }
  const previousCard = () => {
    if (card - 1 >= 0) {
      setCard(card - 1);
    }
    setAnswer("");
    setCorrectGuess("");
    setCardStatus(0);
  }
  
  const updateCardStatus = () => {
    setCardStatus(cardStatus ? 0: 1);
  }

  return (
    <div className='app'>
      <h1 className='text'>League of Legends Ultimate Guesser!</h1>
      <h2 className='text'>This set of flashcards will test your knowledge of the ultimate ability names of League of Legends champions</h2>
      <h2 className='text'>Total cards: {questions.length}</h2>
      <div className='card' onClick={updateCardStatus}>
      <h3 className='cardText'>{questions[card][cardStatus]}</h3>
      </div>
      <div className='question-container'>
        <form>
          <input type='text' value={answer} onChange={handleAnswer}></input>
        </form>
        <button className='submit' onClick={handleSubmit}>Submit</button>
        <div className='square' id={correctGuess}></div>
      </div>
      <div className='button-container'>
        <button className='next' onClick={previousCard}>Previous Card</button>
        <button className='next' onClick={nextCard}>Next Card</button>
      </div>
    </div>
  )
}
export default App
