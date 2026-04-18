import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { PlayCircle, MessageCircle, Clock, BarChart2, CheckCircle, BookOpen, Star } from 'lucide-react';
import videoThumb from '../assets/video_thumbnail.png';
// Add this near your other imports at the top
import EleganteButton from '../components/EleganteButton';
import Card from '../components/card.jsx'



import img1 from '../images/bac1.jpg';
import img2 from '../images/bac2.jpg';
import img3 from '../images/bac3.jpg';
import img4 from '../images/bac4.jpg';

import iconBook from '../assets/icons/book.png';
import iconOpenBook from '../assets/icons/open-book.png';
import iconStackOfBooks from '../assets/icons/stack-of-books.png';

import "./home.css"



const images = [img1, img2, img3, img4];

const Home = () => {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [animationKey, setAnimationKey] = useState(0);
   const titleText = "අතීතයට යන මාර්ගගත ගමන";
  const segmenter = new Intl.Segmenter('si-LK', { granularity: 'grapheme' });
  const titleLetters = Array.from(segmenter.segment(titleText)).map(s => s.segment);
 useEffect(() => {
    // Top background image interval
    const interval = setInterval(() => {
      setCurrentImageIndex((prevIndex) => (prevIndex + 1) % images.length);
    }, 30000);


    // Refresh the animation key every 30 seconds to restart the keyframe animation
    const animationInterval = setInterval(() => {
      setAnimationKey((prevKey) => prevKey + 1);
    }, 3000);
    // ---------------------------------

    return () => {
      clearInterval(interval);
      clearInterval(animationInterval); // <-- DON'T FORGET TO CLEAR IT
    };
  }, []);
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImageIndex((prevIndex) => (prevIndex + 1) % images.length);
    }, 5000);
    return () => clearInterval(interval);
  }, []);

  const featuredCourses = [
    {
      id: 1,
      title: "මානව ඉතිහාසය",
      description: "Master complex historical concepts with our expert-led advanced placement course.",
      actionText: "Explore Course",
      iconSrc: iconStackOfBooks,
      link: "/classes/history"
    },
    {
      id: 2,
      title: "සමාජ විධි",
      description: "Discover the laws of society through interactive and practical social lessons.",
      actionText: "Explore Course",
      iconSrc: iconOpenBook,
      link: "/classes/social"
    },
    {
      id: 3,
      title: "සිතියම් ලකුණු කිරිම නිවරදිව",
      description: "Enhance your map marking skills and explore geography with precision.",
      actionText: "Explore Course",
      iconSrc: iconBook,
      link: "/classes/maps"
    }
  ];


  return (
    <div style={{ minHeight: '100vh' }}>
      {/* Hero Section */}
      <section style={{
        minHeight: '100vh',
        backgroundImage: `url(${images[currentImageIndex]})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        position: 'relative',
        paddingTop: '80px',
        transition: 'background-image 1s ease-in-out'
      }}>
        {/* Overlay */}
        <div style={{ position: 'absolute', top: 0, left: 0, right: 0, bottom: 0, background: 'rgba(26, 26, 46, 0.75)' }} />
        
        <div className="container hero-panel" style={{ position: 'relative', textAlign: 'center', maxWidth: '800px', textShadow: '0 2px 4px rgba(0,0,0,0.5)' }}>
              <h1 className="hero-title" key={animationKey}>
                {titleLetters.map((letter, index) => (
                  <span
                    key={index}
                    style={{
                      display: 'inline-block',
                      opacity: 0,
                      animation: `revealLetter 0.3s forwards`,
                      animationDelay: `${index * 0.1}s` /* Adjust 0.1s to make typing faster/slower */
                    }}
                  >
                    {/* CORRECTED: Check for a single space, not the whole sentence */}
                    {letter === ' ' ? '\u00A0' : letter}
                  </span>
                ))}
              </h1>

          <p className="hero-subtitle">
            A Journey to the Past Online
          </p>
          <div style={{ display: 'flex', gap: '1.5rem', justifyContent: 'center', marginTop: '2rem' }}>
            <Link to="/login" style={{ textDecoration: 'none' }}>
              <EleganteButton>Register Now</EleganteButton>
            </Link>

            <Link to="/classes" style={{ textDecoration: 'none' }}>
              <EleganteButton>Explore Courses</EleganteButton>
            </Link>
          </div>

        </div>
      </section>

      {/* Featured Courses Section */}
      <section id="courses" className="container section-padding">
        <h2 className="section-title">Featured Courses</h2>

        {/* 2. Map over the data and generate Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 justify-items-center items-stretch">
          {featuredCourses.map((course) => (
            <Card
              key={course.id}
              title={course.title}
              description={course.description}
              actionText={course.actionText}
              iconSrc={course.iconSrc}
              link={course.link}
            />
          ))}
        </div>
      </section>

      {/* Enroll Section */}
      <section className="container section-padding">
        <h2 className="section-title">How to Enroll?</h2>
        <div className="grid-2-col">
          
          <div className="glass-panel" style={{ position: 'relative', overflow: 'hidden', padding: 0 }}>
            <img src={videoThumb} alt="Enrollment Video" style={{ width: '100%', display: 'block', opacity: 0.8 }} />
            <div style={{ position: 'absolute', top: '50%', left: '50%', transform: 'translate(-50%, -50%)', cursor: 'pointer' }}>
              <PlayCircle size={64} color="white" />
            </div>
          </div>
          
          <div className="glass-panel" style={{ padding: '3rem' }}>
            <h3 style={{ fontSize: '1.8rem', marginBottom: '1rem' }}>Quick Steps</h3>
            <ul style={{ listStyle: 'none', display: 'flex', flexDirection: 'column', gap: '1.5rem', fontSize: '1.1rem' }}>
              <li style={{ display: 'flex', alignItems: 'center', gap: '1rem' }}>
                <div style={{ background: 'var(--primary-color)', minWidth: '32px', height: '32px', borderRadius: '50%', display: 'flex', alignItems: 'center', justifyContent: 'center', fontWeight: 'bold' }}>1</div>
                Sign up for an account
              </li>
              <li style={{ display: 'flex', alignItems: 'center', gap: '1rem' }}>
                <div style={{ background: 'var(--primary-color)', minWidth: '32px', height: '32px', borderRadius: '50%', display: 'flex', alignItems: 'center', justifyContent: 'center', fontWeight: 'bold' }}>2</div>
                Choose your grade
              </li>
              <li style={{ display: 'flex', alignItems: 'center', gap: '1rem' }}>
                <div style={{ background: 'var(--primary-color)', minWidth: '32px', height: '32px', borderRadius: '50%', display: 'flex', alignItems: 'center', justifyContent: 'center', fontWeight: 'bold' }}>3</div>
                Join the WhatsApp group for updates
              </li>
              <li style={{ display: 'flex', alignItems: 'center', gap: '1rem' }}>
                <div style={{ background: 'var(--primary-color)', minWidth: '32px', height: '32px', borderRadius: '50%', display: 'flex', alignItems: 'center', justifyContent: 'center', fontWeight: 'bold' }}>4</div>
                Start taking online MCQs
              </li>
            </ul>
          </div>
        </div>
      </section>
      
      {/* Features Section */}
      <section className="container section-padding">
        <h2 className="section-title">Online MCQs</h2>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: '2rem', marginBottom: '3rem' }}>
          
          <div className="glass-panel" style={{ padding: '2.5rem', textAlign: 'center' }}>
            <Clock size={48} color="var(--primary-color)" style={{ marginBottom: '1.5rem' }} />
            <h3 style={{ fontSize: '1.5rem', marginBottom: '1rem' }}>Timed Mock Exams</h3>
            <p style={{ opacity: 0.8, lineHeight: '1.6' }}>Simulate extreme exam conditions with strict time limits to improve your time management skills.</p>
          </div>

          <div className="glass-panel" style={{ padding: '2.5rem', textAlign: 'center' }}>
            <BarChart2 size={48} color="var(--primary-color)" style={{ marginBottom: '1.5rem' }} />
            <h3 style={{ fontSize: '1.5rem', marginBottom: '1rem' }}>Instant Analytics</h3>
            <p style={{ opacity: 0.8, lineHeight: '1.6' }}>Get immediate feedback on your performance indicating strong points and areas needed for improvement.</p>
          </div>

          <div className="glass-panel" style={{ padding: '2.5rem', textAlign: 'center' }}>
            <CheckCircle size={48} color="var(--primary-color)" style={{ marginBottom: '1.5rem' }} />
            <h3 style={{ fontSize: '1.5rem', marginBottom: '1rem' }}>Verified Answers</h3>
            <p style={{ opacity: 0.8, lineHeight: '1.6' }}>Review your mock exam with thoroughly explained answers crafted by professional educators.</p>
          </div>

        </div>
        
        <div style={{ textAlign: 'center' }}>
          <Link to="/quiz">
            <button className="glass-btn" style={{ fontSize: '1.2rem', padding: '1rem 3rem', background: 'var(--primary-color)', color: 'white' }}>
              Attempt Quiz
            </button>
          </Link>
        </div>
      </section>
        

      {/* WhatsApp Groups Section */}
      <section className="container section-padding">
        <h2 className="section-title">Join Our WhatsApp Groups</h2>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: '2rem' }}>
          {[9, 10, 11].map(grade => (
            <div key={grade} className="glass-panel" style={{ padding: '2.5rem', textAlign: 'center', display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '1.5rem' }}>
              <MessageCircle size={48} color="#25D366" />
              <h3 style={{ fontSize: '1.5rem' }}>Grade {grade} Community</h3>
              <p style={{ opacity: 0.8 }}>Get instant updates, papers, and discuss with peers.</p>
              <button className="glass-btn" style={{ width: '100%', borderColor: '#25D366', color: '#25D366', display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '0.5rem' }}>
                <MessageCircle size={20} /> Join Group
              </button>
            </div>
          ))}
        </div>
      </section>

      {/* Online Teachers Panel */}
      <section className="container section-padding">
        <h2 className="section-title">Our Expert Educators</h2>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(220px, 1fr))', gap: '2rem' }}>
          
          {[
            { id: 1, name: 'Dr. Sarah Jenkins', subject: 'Mathematics', img: img1 },
            { id: 2, name: 'Prof. Mark Davis', subject: 'Physics', img: img2 },
            { id: 3, name: 'Ms. Clara Reed', subject: 'Biology', img: img3 },
            { id: 4, name: 'Mr. James Lee', subject: 'Computer Science', img: img4 }
          ].map(teacher => (
            <div key={teacher.id} className="glass-panel" style={{ padding: '2rem 1.5rem', textAlign: 'center' }}>
              <div style={{ 
                width: '120px', height: '120px', margin: '0 auto 1.5rem auto', borderRadius: '50%', 
                backgroundImage: `url(${teacher.img})`, backgroundSize: 'cover', backgroundPosition: 'center',
                border: '4px solid var(--primary-color)'
              }} />
              <h3 style={{ fontSize: '1.3rem', marginBottom: '0.5rem' }}>{teacher.name}</h3>
              <p style={{ opacity: 0.8, display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '0.5rem' }}>
                <BookOpen size={16} /> {teacher.subject}
              </p>
            </div>
          ))}

        </div>
      </section>

      <section className="payment-details container section-padding">
        <h2 className="section-title" style={{ color: '#D4AF37' }}>Banking Details</h2>

        <div style={{ display: 'flex', flexWrap: 'wrap', gap: '2rem', alignItems:"flex-end" }}>
          {[
            {
              id: 1,
              bankName: "People's Bank",
              bankNumber: "045xxxx-xxx-xxxx"
            },
              {
              id: 2,
              bankName: "Commersel Bank",
              bankNumber: "045xxxx-xxx-xxxx"
            },
              {
              id: 3,
              bankName: "Bank of ceyloan",
              bankNumber: "045xxxx-xxx-xxxx"
            }
          ].map((bank) => (
            <div key={bank.id} className="glass-panel" style={{ padding: '4rem', textAlign: 'center', minWidth: '300px' }}>
              <h3 style={{ fontSize: '1.5rem', marginBottom: '1rem', color: 'var(--primary-color)' }}>{bank.bankName}</h3>
              <p style={{ fontSize: '1.2rem', letterSpacing: '2px', fontFamily: 'monospace' }}>{bank.bankNumber}</p>

              <div style={{ marginTop: '1.5rem', opacity: 0.8 }}>
                {/* Fallback styling in case Wallert is missing */}

              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Student Feedback Section */}
      <section className="section-padding" style={{ paddingBottom: '6rem', overflow: 'hidden' }}>
        <h2 className="section-title">Student Feedback</h2>
        <div className="feedback-scroller">
          <div className="feedback-track">
          {[
            { id: 1, name: 'Alice M.', grade: 'Grade 11', feedback: 'The online MCQs helped me improve my timing and confidence before the actual exams. The analytics are spot on!', rating: 5 },
            { id: 2, name: 'David K.', grade: 'Grade 10', feedback: 'I love how quickly I can see my results and review the explanations. Dr. Jenkins mathematics course is amazing.', rating: 5 },
            { id: 3, name: 'Sophia L.', grade: 'Grade 11', feedback: 'Joined the grade 11 WhatsApp group and found great study materials and peer support. Highly recommended.', rating: 4 },
            { id: 4, name: 'John D.', grade: 'Grade 9', feedback: 'The best platform for checking my exam readiness. The questions simulate real exams perfectly!', rating: 5 }
          ].map(review => (
            <div key={review.id} className="feedback-item">
              <span className="feedback-quote">"{review.feedback}"</span>
              <span className="feedback-author">— {review.name}</span>
            </div>
          ))}
          </div>
        </div>
      </section>

    </div>
  );
};

export default Home;
