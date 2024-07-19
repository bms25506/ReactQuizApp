import React, { useState, useMemo } from 'react';
import Button from './components/Button';
import TextField from './components/TextField';
import ChartComponent from './components/ChartComponent';
import ImageComponent from './components/ImageComponent';
import './App.css';

// Import images
import image1 from './images/france.png';
import image2 from './images/solarSystem.png';
import image3 from './images/moonLanding.png';

const questions = [
  { question: 'What is the capital of France?', answer: 'Paris', imgSrc: image1 },
  { question: 'What is 2 + 2?', answer: '4' },
  { question: 'What is the largest planet in our solar system?', answer: 'Jupiter', imgSrc: image2 },
  { question: 'Who wrote "To be, or not to be, that is the question"?', answer: 'Shakespeare'},
  { question: 'What is the chemical symbol for water?', answer: 'H2O'},
  { question: 'What year did the first man land on the moon?', answer: '1969', imgSrc: image3 },
  // Add more questions as needed
];

function App() {
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [textInput, setTextInput] = useState('');
  const [correctCount, setCorrectCount] = useState(0);
  const [incorrectCount, setIncorrectCount] = useState(0);
  const [feedbackMessage, setFeedbackMessage] = useState('');
  const [scoreMessage, setScoreMessage] = useState('');

  const currentQuestion = questions[currentQuestionIndex];

  const handleInputChange = (event) => {
    setTextInput(event.target.value);
  };

  const handleSubmit = () => {
    if (textInput.trim().toLowerCase() === currentQuestion.answer.toLowerCase()) {
      setCorrectCount(correctCount + 1);
      setFeedbackMessage('Correct!');
    } else {
      setIncorrectCount(incorrectCount + 1);
      setFeedbackMessage('Incorrect!');
    }
    setTextInput('');
    setCurrentQuestionIndex((currentQuestionIndex + 1) % questions.length);
  };

  const handleClear = () => {
    setTextInput('');
    setFeedbackMessage('');
    setScoreMessage('');
  };

  const handleCalculateScore = () => {
    const totalQuestions = correctCount + incorrectCount;
    const score = totalQuestions ? (correctCount / totalQuestions) * 100 : 0;
    setScoreMessage(`Your score: ${score.toFixed(2)}%`);
  };

  const chartData = useMemo(() => ({
    labels: ['Correct', 'Incorrect'],
    datasets: [
      {
        label: 'Answers',
        data: [
          { name: 'Correct', value: correctCount, fill: '#82ca9d' },
          { name: 'Incorrect', value: incorrectCount, fill: '#ff6961' }
        ],
      },
    ],
  }), [correctCount, incorrectCount]);

  return (
    <div className="App">
      <header className="App-header">
        <h1>Interactive Quiz App</h1>
        <p>{currentQuestion.question}</p>
      </header>
      <main>
        <ImageComponent src={currentQuestion.imgSrc} alt="Question related graphic" />
        <TextField value={textInput} onChange={handleInputChange} />
        <div className="button-container">
          <Button text="Submit" onClick={handleSubmit} />
          <Button text="Clear" onClick={handleClear} />
          <Button text="Calculate Score" onClick={handleCalculateScore} />
        </div>
        <div className="results">
          <p className="result-message">{feedbackMessage}</p>
          <p className="score-message">{scoreMessage}</p>
        </div>
        <div className="graphic-container">
          <ChartComponent data={chartData} />
        </div>
      </main>
      <footer className="footer">
        © Brianna Schneider
      </footer>
    </div>
  );
}

export default App;
