import React from 'react';
import { careers } from '../public/careerInfo.js'; // Adjust the import path as necessary

const Results = ({ result }) => {
    const careerId = parseInt(result, 10); // Convert result to a number
    const career = careers.find(career => career.id === careerId);

    if (!career) {
        return <div className="m-4">Career path not found.</div>;
    }

    return (
        <div className="m-4">
            <h2 className="text-4xl font-bold mb-4">Your recommended career path is... {career.name}!</h2>
            <div className="text-2xl p-4 my-5 bg-dark-purple rounded-xl">
                <h3 className="font-bold text-pink">Typical Majors:</h3>
                <ul className="text-snow list-disc list-inside">
                    {career.typicalMajors.map((major, index) => (
                        <li className="text-pink" key={index}>{major}</li>
                    ))}
                </ul>
            </div>
            <div className="text-2xl mb-4">
                <h3 className="font-bold">Roles:</h3>
                {career.roles.map((role, index) => (
                    <div key={index} className="mb-4">
                        <h4 className="font-bold text-2xl">{role.title}</h4>
                        <p>{role.description}</p>
                        <h5 className="font-bold">Day-to-Day:</h5>
                        <ul className="list-disc list-inside">
                            {role.dayToDay.map((task, i) => (
                                <li key={i}>{task}</li>
                            ))}
                        </ul>
                        <h5 className="font-bold">Relevant Skills:</h5>
                        <ul className="list-disc list-inside">
                            {role.relevantSkills.map((skill, i) => (
                                <li key={i}>{skill}</li>
                            ))}
                        </ul>
                        <p className="font-bold">Average Pay (US): {role.averagePay.us}</p>
                    </div>
                ))}
            </div>
            <div className="text-2xl mb-4">
                <h3 className="font-bold">Notable Women:</h3>
                <ul className="list-disc list-inside">
                    {career.notableWomen.map((woman, index) => (
                        <li key={index}>
                            {woman.name}, {woman.title}
                        </li>
                    ))}
                </ul>
            </div>
        </div>
    );
};

export default Results;
