import DataManager from './DataManager'
import './App.css';
import React, { useEffect, useState } from 'react';


function App() {

  const[questions, setQuestions] = useState([' '])
  const[currentQuestion, setCurrentQuestion] = useState([' '])
  const[currentAnswers, setCurrentAnswers] = useState([' '])
  const [isLoading, setIsLoading] = useState(true);
  let answerCount = 0
  let scoreCount = 0

   async function getQuestions() {
    await DataManager.getAll().then(array => {
      let answers = []
      setQuestions(array)
      setCurrentQuestion(array[0])
      let incorrect = array[0]["incorrect"]
      incorrect.forEach(answer => {
        answers.push(answer)
      })
      answers.push(array[0]["correct"])
      setCurrentAnswers(answers)
    })
  }

  useEffect(() => {
    setIsLoading(true)
    getQuestions()
    setIsLoading(false)
  }, [])

  const handleSubmit = (answer) => {
    

  }






  return (
    isLoading
    ? <div className='App'>
      <span>Loading Quiz...</span>
      </div>
    : <div className="App">
      <div className='question-container'>
        <div className='question-count'>
          <span>Question {answerCount + 1}</span>/{questions.length}
        </div>
  <div className='question-text'>{currentQuestion.question}</div>
      </div>
      <div className='answers-container'>
        {currentAnswers.map(answer => 
          <button id={answer}>{answer}</button>
        )}
      
      </div>

    </div>

  );
}

export default App;
