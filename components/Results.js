import React from 'react';
import { careers } from '../public/careerInfo.js'; // Adjust the import path as necessary

const Results = ({ result }) => {
    const careerId = parseInt(result, 10); // Convert result to a number
    const career = careers.find(career => career.id === careerId);

    if (!career) {
        return <div className="m-4">Career path not found.</div>;
    }

    return (
        <div className="m-16 bg-snow rounded-xl p-5">
            <div className="m-4">
                <h2 className="text-4xl font-bold mb-4 text-center">your recommended career path is... {career.name}!</h2>
                <div className="p-4 my-5 bg-dark-purple rounded-xl">
                    <h3 className="font-bold text-pink text-3xl mb-3 text-center">typical majors</h3>
                    <ul className="text-xl text-snow list-inside text-center">
                        {career.typicalMajors.map((major, index) => (
                            <li className="text-snow" key={index}>{major}</li>
                        ))}
                    </ul>
                </div>
                <div className="p-4 my-5 bg-amethyst rounded-xl">
                    <h3 className="font-bold text-snow text-3xl mb-3 text-center">roles</h3>
                    <div className="m-3 mx-5 flex flex-col lg:flex-row">
                        {career.roles.map((role, index) => (
                            <div key={index} className="m-6">
                                <h4 className="font-bold text-pink text-2xl">{role.title}</h4>
                                <p className="text-xl text-snow opacity-90 mb-3">{role.description}</p>
                                <h5 className="font-bold text-pink text-xl opacity-90">Day-to-Day:</h5>
                                <ul className="list-disc text-snow text-xl opacity-90 mb-3 mx-5">
                                    {role.dayToDay.map((task, i) => (
                                        <li key={i}>{task}</li>
                                    ))}
                                </ul>
                                <h5 className="font-bold text-pink text-xl opacity-90">Relevant Skills:</h5>
                                <ul className="list-disc list-inside text-xl text-snow opacity-90 mb-3">
                                    {role.relevantSkills.map((skill, i) => (
                                        <li key={i}>{skill}</li>
                                    ))}
                                </ul>
                                <p className="font-bold bg-pink text-dark-purple p-3 text-xl rounded-xl">Average Pay<br></br> (US): {role.averagePay.us}</p>
                            </div>
                        ))}
                    </div>
                </div>
                    <div className="p-4 my-5 bg-pink rounded-xl flex flex-col items-center">
                    <h3 className="font-bold text-amethyst text-2xl text-center">Notable Women:</h3>
                    <div className="flex flex-col lg:flex-row items-center justify-center">
                        <ul className="text-dark-purple text-xl text-center">
                            {career.notableWomen.map((woman, index) => (
                                <li key={index}>
                                    {woman.name}, {woman.title}
                                </li>
                            ))}
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Results;
