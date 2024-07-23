import React from 'react';

const CareerDetails = ({ career, onClose }) => {
    if (!career) {
        return null; // Return nothing if no career is selected
    }

    return (
        <div className="fixed top-0 left-0 w-full h-full bg-black bg-opacity-50 flex justify-center items-center p-12">
            <div className="bg-snow rounded-xl p-5 max-w-4xl w-full h-full max-h-screen overflow-auto relative">
                <button
                    onClick={onClose}
                    className="absolute top-2 right-2 text-2xl font-bold text-dark-purple"
                >
                    &times;
                </button>
                <div className="m-4">
                    <h2 className="text-4xl font-bold mb-4 text-center">{career.name}!</h2>
                    <div className="p-4 my-5 bg-dark-purple rounded-xl">
                        <h3 className="font-bold text-pink text-3xl mb-3 text-center">Typical Majors</h3>
                        <ul className="text-xl text-snow list-inside text-center">
                            {career.typicalMajors.map((major, index) => (
                                <li className="text-snow" key={index}>{major}</li>
                            ))}
                        </ul>
                    </div>
                    <div className="p-4 my-5 bg-amethyst rounded-xl">
                        <h3 className="font-bold text-snow text-3xl mb-3 text-center">Roles</h3>
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
                                    <p className="font-bold bg-pink text-dark-purple p-3 text-xl rounded-xl">Average Pay<br /> (US): {role.averagePay.us}</p>
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
        </div>
    );
};

export default CareerDetails;
