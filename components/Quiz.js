import React, { useState } from 'react';
import { questions } from '../public/questions.js'; // Adjust path as necessary
import axios from 'axios';
import Results from './Results';
import './custom.css';

const next = "/next.png";
const previous = "/previous.png";

const Quiz = () => {
    const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
    const [answers, setAnswers] = useState({});
    const [result, setResult] = useState('');

    // Function to handle changes in selected answers
    const handleAnswerChange = (questionText, option, careerPaths) => {
        setAnswers(prevAnswers => ({
            ...prevAnswers,
            [questionText]: { answer: option, careerPaths }
        }));
    };

    // Function to handle form submission
    const handleSubmit = async () => {
        console.log('Submitting answers:', answers); // Debugging line
        try {
            const response = await axios.post('http://localhost:5001/api/submit-quiz', { answers });
            console.log('Response:', response); // Debugging line
            setResult(response.data.careerPath); // Adjust based on API response structure
        } catch (error) {
            console.error('Error submitting quiz:', error);
        }
    };

    const handlePrevious = () => {
        if (currentQuestionIndex > 0) {
            setCurrentQuestionIndex(currentQuestionIndex - 1);
        }
    };

    const handleNext = () => {
        if (currentQuestionIndex < questions.length - 1) {
            setCurrentQuestionIndex(currentQuestionIndex + 1);
        }
    };

    const handleSliderChange = (event) => {
        setCurrentQuestionIndex(Number(event.target.value));
    };

    const currentQuestion = questions[currentQuestionIndex];
    const userAnswer = answers[currentQuestion.question]?.answer;

    // Determine if all questions have been answered
    const allQuestionsAnswered = questions.every(question => answers[question.question]);

    return (
        <div className="bg-pink p-5 flex justify-center items-center h-fit">
                {!result ? (
                    <>
                        <div className="p-6 rounded-lg bg-snow m-5 w-11/12 max-w-4xl md-h-[700px] lg-h-[900px]">
                            <div className="m-1 h-auto flex flex-col justify-center text-dark-purple">
                                <p className="text-3xl font-normal text-dark-purple m-5">{currentQuestion.question}</p>
                                <div className="space-y-1">
                                    {Object.entries(currentQuestion.options).map(([option, careerPaths]) => (
                                        <div key={option} className="flex items-center">
                                            <input
                                                type="radio"
                                                id={`${currentQuestion.id}-${option}`}
                                                name={currentQuestion.id}
                                                value={option}
                                                checked={userAnswer === option} // Highlight previously selected answer
                                                onChange={() => handleAnswerChange(currentQuestion.question, option, careerPaths)}
                                                className="hidden peer"
                                            />
                                            <label
                                                htmlFor={`${currentQuestion.id}-${option}`}
                                                className="flex items-center text-xl font-normal m-3 cursor-pointer peer-checked:text-amethyst"
                                            >
                                                <span className="radio-custom mr-2"></span>
                                                {option}
                                            </label>
                                        </div>
                                    ))}
                                </div>
                                <div className="flex items-start my-4">
                                    <button
                                        onClick={handlePrevious}
                                        disabled={currentQuestionIndex === 0}
                                        className="p-2">
                                        <img
                                            src={previous}
                                            alt="Previous"
                                            width={20} // Adjust width as needed
                                            height={20} // Adjust height as needed
                                            className={currentQuestionIndex === 0 ? 'opacity-50 cursor-not-allowed' : ''}
                                        />
                                    </button>
                                    <button
                                        onClick={handleNext}
                                        disabled={currentQuestionIndex === questions.length - 1}
                                        className="p-2"
                                    >
                                        <img
                                            src={next}
                                            alt="Next"
                                            width={20} // Adjust width as needed
                                            height={20} // Adjust height as needed
                                            className={currentQuestionIndex === questions.length - 1 ? 'opacity-50 cursor-not-allowed' : ''}
                                        />
                                    </button>
                                </div>
                                <input
                                    type="range"
                                    min="0"
                                    max={questions.length - 1}
                                    value={currentQuestionIndex}
                                    onChange={handleSliderChange}
                                    className="w-full my-4 slider"
                                />
                            </div>
                            {currentQuestionIndex === questions.length - 1 && (
                                <button
                                    onClick={handleSubmit}
                                    disabled={!allQuestionsAnswered} // Disable if not all questions are answered
                                    className={`bg-dark-purple font-normal text-snow text-normal px-4 py-2 rounded-full mt-4 hover:bg-amethyst ${!allQuestionsAnswered ? 'opacity-50 cursor-not-allowed' : ''}`}
                                >
                                    Submit
                                </button>
                            )}
                        </div>
                    </>
                ) : (
                    <Results result={result} />
                )}
            </div>
    );    
};

export default Quiz;
