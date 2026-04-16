import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { Clock, CheckCircle, AlertCircle } from 'lucide-react';

const DUMMY_QUESTIONS = [
  { id: 1, question: 'What does HTML stand for?', options: ['HyperText Markup Language', 'HighText Machine Language', 'HyperLoop Machine Language', 'HyperText Markdown Language'], answer: 0 },
  { id: 2, question: 'What is the primary purpose of CSS?', options: ['Data structure', 'Styling web pages', 'Database management', 'Server-side scripting'], answer: 1 },
  { id: 3, question: 'Which company developed React?', options: ['Google', 'Amazon', 'Facebook', 'Microsoft'], answer: 2 },
];

const StudentDashboard = () => {
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [selectedAnswers, setSelectedAnswers] = useState({});
  const [timeLeft, setTimeLeft] = useState(600); // 10 minutes
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [score, setScore] = useState(0);
  const navigate = useNavigate();

  useEffect(() => {
    if (localStorage.getItem('isStudentLoggedIn') !== 'true') {
      navigate('/login');
    }
  }, [navigate]);

  const handleSelect = (optionIndex) => {
    if (isSubmitted) return;
    setSelectedAnswers({ ...selectedAnswers, [currentQuestion]: optionIndex });
  };

  useEffect(() => {
    const handleSubmit = () => {
      let newScore = 0;
      DUMMY_QUESTIONS.forEach((q, index) => {
        if (selectedAnswers[index] === q.answer) {
          newScore += 1;
        }
      });
      setScore(newScore);
      setIsSubmitted(true);
    };

    if (timeLeft > 0 && !isSubmitted) {
      const timerId = setInterval(() => setTimeLeft(t => t - 1), 1000);
      return () => clearInterval(timerId);
    } else if (timeLeft === 0 && !isSubmitted) {
      handleSubmit();
    }
  }, [timeLeft, isSubmitted, selectedAnswers]);

  const manualSubmit = () => {
    let newScore = 0;
    DUMMY_QUESTIONS.forEach((q, index) => {
      if (selectedAnswers[index] === q.answer) {
        newScore += 1;
      }
    });
    setScore(newScore);
    setIsSubmitted(true);
  };

  const formatTime = (seconds) => {
    const m = Math.floor(seconds / 60);
    const s = seconds % 60;
    return `${m}:${s < 10 ? '0' : ''}${s}`;
  };

  const question = DUMMY_QUESTIONS[currentQuestion];

  return (
    <div className="container" style={{ paddingTop: '100px', paddingBottom: '5rem', minHeight: 'caLc(100vh - 80px)' }}>
      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '2rem' }}>
        <h2>Online MCQ Evaluation</h2>
        <div className="glass-panel" style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', padding: '0.5rem 1rem', color: timeLeft < 60 ? '#ef4444' : 'inherit' }}>
          <Clock size={20} />
          <span style={{ fontSize: '1.2rem', fontWeight: 'bold' }}>{formatTime(timeLeft)}</span>
        </div>
      </div>

      <div style={{ display: 'grid', gridTemplateColumns: '1fr 300px', gap: '2rem' }}>
        {/* Main Quiz Area */}
        <div className="glass-panel" style={{ padding: '3rem' }}>
          {isSubmitted ? (
            <div style={{ textAlign: 'center', padding: '2rem' }}>
              <CheckCircle size={64} color="#22c55e" style={{ margin: '0 auto 1rem auto' }} />
              <h3 style={{ fontSize: '2rem', marginBottom: '1rem' }}>Exam Completed!</h3>
              <p style={{ fontSize: '1.5rem', marginBottom: '2rem' }}>Your Score: {score} / {DUMMY_QUESTIONS.length}</p>
              <button onClick={() => window.location.reload()} className="glass-btn">Take Another Quiz</button>
            </div>
          ) : (
            <>
              <div style={{ marginBottom: '2rem' }}>
                <span style={{ opacity: 0.8, fontSize: '0.9rem', textTransform: 'uppercase', letterSpacing: '1px' }}>
                  Question {currentQuestion + 1} of {DUMMY_QUESTIONS.length}
                </span>
                <h3 style={{ fontSize: '1.5rem', marginTop: '0.5rem', lineHeight: 1.4 }}>{question.question}</h3>
              </div>

              <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
                {question.options.map((opt, idx) => {
                  const isSelected = selectedAnswers[currentQuestion] === idx;
                  return (
                    <button
                      key={idx}
                      onClick={() => handleSelect(idx)}
                      style={{
                        padding: '1rem 1.5rem',
                        borderRadius: '8px',
                        border: `1px solid ${isSelected ? 'var(--primary-color)' : 'var(--glass-border)'}`,
                        background: isSelected ? 'rgba(59, 130, 246, 0.2)' : 'var(--glass-bg)',
                        color: 'var(--text-color)',
                        textAlign: 'left',
                        fontSize: '1.1rem',
                        cursor: 'pointer',
                        transition: 'all 0.2s ease',
                      }}
                    >
                      {opt}
                    </button>
                  );
                })}
              </div>

              <div style={{ display: 'flex', justifyContent: 'space-between', marginTop: '3rem' }}>
                <button
                  className="glass-btn"
                  disabled={currentQuestion === 0}
                  onClick={() => setCurrentQuestion(c => c - 1)}
                  style={{ opacity: currentQuestion === 0 ? 0.5 : 1 }}
                >
                  Previous
                </button>
                {currentQuestion === DUMMY_QUESTIONS.length - 1 ? (
                  <button className="glass-btn" style={{ background: '#22c55e', borderColor: '#22c55e' }} onClick={manualSubmit}>
                    Submit Exam
                  </button>
                ) : (
                  <button className="glass-btn" onClick={() => setCurrentQuestion(c => c + 1)}>
                    Next Question
                  </button>
                )}
              </div>
            </>
          )}
        </div>

        {/* Sidebar Navigation */}
        <div className="glass-panel" style={{ padding: '2rem', height: 'fit-content' }}>
          <h4 style={{ marginBottom: '1.5rem' }}>Question Navigator</h4>
          <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.5rem' }}>
            {DUMMY_QUESTIONS.map((_, idx) => {
              const answered = selectedAnswers[idx] !== undefined;
              const isCurrent = currentQuestion === idx;
              return (
                <button
                  key={idx}
                  onClick={() => setIsSubmitted(false) || setCurrentQuestion(idx)}
                  style={{
                    width: '40px',
                    height: '40px',
                    borderRadius: '8px',
                    border: `1px solid ${isCurrent ? 'var(--primary-color)' : 'var(--glass-border)'}`,
                    background: answered ? 'rgba(59, 130, 246, 0.5)' : 'var(--glass-bg)',
                    color: 'white',
                    cursor: 'pointer',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    fontWeight: 'bold'
                  }}
                >
                  {idx + 1}
                </button>
              );
            })}
          </div>
          <div style={{ marginTop: '2rem', opacity: 0.8, fontSize: '0.9rem', display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
            <AlertCircle size={16} />
            Please answer all questions before submitting.
          </div>
        </div>
      </div>
    </div>
  );
};

export default StudentDashboard;
