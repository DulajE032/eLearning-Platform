import React, { useState, useEffect } from 'react';
import { CheckCircle, AlertCircle, Clock } from 'lucide-react';

const defaultQuizData = [
  {
    id: 1,
    question: "ශ්‍රී ලංකාවේ මුල් අගනුවර ලෙස සැලකෙන්නේ කුමක්ද?",
    options: ["පොළොන්නරු", "අනුරාධපුරය", "මහනුවර", "දඹදෙනිය"],
    answer: "අනුරාධපුරය"
  },
  {
    id: 2,
    question: "විජය රජු ශ්‍රී ලංකාවට පැමිණියේ කුමන රටෙන්ද?",
    options: ["චීනය", "තායිලන්තය", "ඉන්දියාවෙන්", "බුරුමය"],
    answer: "ඉන්දියාවෙන්"
  },
  {
    id: 3,
    question: "පොළොන්නරු යුගයේ ප්‍රසිද්ධ රජෙක් නම් කරන්න.",
    options: ["දෙවන පෑතිස් රජු", "පරාක්‍රමබාහු මහ රජු", "දුටුගැමුණු රජු", "කාශ්‍යප රජු"],
    answer: "පරාක්‍රමබාහු මහ රජු"
  },
  {
    id: 4,
    question: "“පොළොන්නරු යුගය” ආරම්භ වන්නේ කුමන සියවසේද?",
    options: ["10 වන සියවස", "11 වන සියවස", "12 වන සියවස", "13 වන සියවස"],
    answer: "11 වන සියවස"
  },
  {
    id: 5,
    question: "ශ්‍රී ලංකාවේ ප්‍රථම ලිඛිත ව්‍යවස්ථාව කුමක්ද?",
    options: ["දිපවංශය", "මහාවංශය", "චූලවංශය", "රාජාවලිය"],
    answer: "මහාවංශය"
  },
  {
    id: 6,
    question: "ඉතිහාසයේ “ඇතුල් රාජධානිය” ලෙස හැඳින්වෙන්නේ කුමක්ද?",
    options: ["අනුරාධපුර රාජධානිය", "පොළොන්නරු රාජධානිය", "රෝහණ රාජධානිය", "යාපහුව රාජධානිය"],
    answer: "අනුරාධපුර රාජධානිය"
  },
  {
    id: 7,
    question: "ශ්‍රී ලංකාවේ බුදුදහම ආගමික වශයෙන් හඳුන්වා දුන්නේ කවුද?",
    options: ["මහානාම තෙරුන්", "සංඝමිත්තා තෙරණිය", "මහින්ද තෙරුන්", "බුද්ධඝෝෂ හිමි"],
    answer: "මහින්ද තෙරුන්"
  },
  {
    id: 8,
    question: "ඩොලොස් රාජධානිය යනු කුමන නගරයද?",
    options: ["ගම්පොළ", "කුරුණෑගල", "දඹදෙනිය", "කෝට්ටේ"],
    answer: "දඹදෙනිය"
  },
  {
    id: 9,
    question: "පැරණි ශ්‍රී ලංකාවේ ප්‍රධාන ආර්ථික ක්‍රමය කුමක්ද?",
    options: ["කෘෂිකර්මය", "ධීවර කර්මාන්තය", "වෙළදාම", "පතල් කර්මාන්තය"],
    answer: "කෘෂිකර්මය"
  },
  {
    id: 10,
    question: "මහාවංශය ලියන ලද්දේ කවුද?",
    options: ["මහින්ද තෙරුන්", "මහානාම තෙරුන්", "තොටගමුවේ ශ්‍රී රාහුල හිමි", "වාදීභසිංහ හිමි"],
    answer: "මහානාම තෙරුන්"
  }
];

const Quiz = () => {
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [selectedOption, setSelectedOption] = useState('');
  const [score, setScore] = useState(0);
  const [showScore, setShowScore] = useState(false);
  const [isAnswered, setIsAnswered] = useState(false);
  
  const [quizData, setQuizData] = useState([]);
  const [timeLeft, setTimeLeft] = useState(600); // Default 10 minutes (600s)

  useEffect(() => {
    // Load questions from Admin's saved setting in localStorage, else load defaults
    const savedData = localStorage.getItem('quizData');
    if (savedData) {
      setQuizData(JSON.parse(savedData));
    } else {
      setQuizData(defaultQuizData);
    }

    // Load time limit from Admin's setting
    const savedTime = localStorage.getItem('quizTimeSeconds');
    if (savedTime) {
      setTimeLeft(parseInt(savedTime, 10));
    }
  }, []);

  useEffect(() => {
    // Timer Countdown logic
    if (timeLeft > 0 && !showScore && quizData.length > 0) {
      const timerId = setInterval(() => {
        setTimeLeft(prev => prev - 1);
      }, 1000);
      return () => clearInterval(timerId);
    } else if (timeLeft === 0 && !showScore) {
      setShowScore(true); // Auto-end if out of time
    }
  }, [timeLeft, showScore, quizData]);

  const handleAnswerOptionClick = (option) => {
    setSelectedOption(option);
    setIsAnswered(true);

    if (option === quizData[currentQuestion].answer) {
      setScore(score + 1);
    }
  };

  const handleNextQuestion = () => {
    const nextQuestion = currentQuestion + 1;
    if (nextQuestion < quizData.length) {
      setCurrentQuestion(nextQuestion);
      setSelectedOption('');
      setIsAnswered(false);
    } else {
      setShowScore(true);
    }
  };

  const restartQuiz = () => {
    setCurrentQuestion(0);
    setScore(0);
    setShowScore(false);
    setSelectedOption('');
    setIsAnswered(false);
    
    // Reset timer to original limit
    const savedTime = localStorage.getItem('quizTimeSeconds');
    setTimeLeft(savedTime ? parseInt(savedTime, 10) : 600);
  };

  // Format time as MM:SS
  const formatTime = (seconds) => {
    const min = Math.floor(seconds / 60);
    const sec = seconds % 60;
    return `${min}:${sec < 10 ? '0' : ''}${sec}`;
  };

  if (quizData.length === 0) return <div style={{ minHeight: '100vh', paddingTop: '100px', textAlign: 'center' }}>Loading Quiz...</div>;

  return (
    <div style={{ minHeight: '100vh', padding: '100px 20px 60px', display: 'flex', justifyContent: 'center', alignItems: 'flex-start' }}>
      <div className="glass-panel" style={{ width: '100%', maxWidth: '600px', padding: '30px', marginTop: '2rem', position: 'relative' }}>
        
        {/* Timer UI at Top */}
        {!showScore && (
          <div style={{ position: 'absolute', top: '-40px', right: '0', display: 'flex', alignItems: 'center', gap: '0.5rem', fontSize: '1.2rem', fontWeight: 'bold', color: timeLeft < 60 ? '#ef4444' : 'var(--text-color)' }}>
            <Clock size={20} />
            {formatTime(timeLeft)}
          </div>
        )}

        {showScore ? (
          <div style={{ textAlign: 'center' }}>
            <h2 style={{ fontSize: '2rem', marginBottom: '20px', color: 'var(--primary-color)' }}>Quiz Completed!</h2>
            <p style={{ fontSize: '1.2rem', marginBottom: '30px' }}>
              Your Scored {score} out of {quizData.length}
            </p>
            <button className="glass-btn" onClick={restartQuiz} style={{ background: 'var(--primary-color)', color: 'white' }}>
              Restart Quiz
            </button>
          </div>
        ) : (
          <>
            <div style={{ marginBottom: '20px' }}>
              <div style={{ fontSize: '1.2rem', opacity: 0.8, marginBottom: '10px' }}>
                Question {currentQuestion + 1} / {quizData.length}
              </div>
              <h2 style={{ fontSize: '1.5rem', lineHeight: '1.4' }}>
                {quizData[currentQuestion].question}
              </h2>
            </div>

            <div style={{ display: 'flex', flexDirection: 'column', gap: '15px', marginTop: '30px' }}>
              {quizData[currentQuestion].options.map((option, index) => {
                let buttonStyle = {
                  padding: '15px',
                  textAlign: 'left',
                  background: 'rgba(255, 255, 255, 0.05)',
                  border: '1px solid rgba(255, 255, 255, 0.2)',
                  fontSize: '1.1rem',
                  display: 'flex',
                  justifyContent: 'space-between',
                  alignItems: 'center'
                };

                let icon = null;

                if (isAnswered) {
                  if (option === quizData[currentQuestion].answer) {
                    buttonStyle.background = 'rgba(34, 197, 94, 0.2)'; // Green
                    buttonStyle.borderColor = '#22c55e';
                    icon = <CheckCircle color="#22c55e" />;
                  } else if (option === selectedOption) {
                    buttonStyle.background = 'rgba(239, 68, 68, 0.2)'; // Red
                    buttonStyle.borderColor = '#ef4444';
                    icon = <AlertCircle color="#ef4444" />;
                  }
                } else if (option === selectedOption) {
                   buttonStyle.borderColor = 'var(--primary-color)';
                }

                return (
                  <button
                    key={index}
                    className="quiz-option-btn"
                    style={{...buttonStyle, width: '100%', borderRadius: '12px', cursor: isAnswered ? 'default' : 'pointer'}}
                    onClick={() => handleAnswerOptionClick(option)}
                    disabled={isAnswered}
                  >
                    {option}
                    {icon}
                  </button>
                );
              })}
            </div>

            {isAnswered && (
              <div style={{ marginTop: '30px', textAlign: 'right' }}>
                <button className="glass-btn" onClick={handleNextQuestion} style={{ background: 'var(--primary-color)', color: 'white', padding: '10px 30px' }}>
                  {currentQuestion === quizData.length - 1 ? 'Finish' : 'Next'}
                </button>
              </div>
            )}
          </>
        )}
      </div>
    </div>
  );
};

export default Quiz;

