import React from 'react';
import { resources } from '../public/careerResources.js'; // Adjust the path if needed

const ResourcesList = () => {
    return (
        <div className="p-6 bg-snow min-h-screen ">
            <h1 className="text-5xl font-bold text-center mb-8 text-dark-purple">Resources</h1>
            <div className="space-y-8">
                {resources.length === 0 ? (
                    <p className="text-center text-gray-600">No resources available.</p>
                ) : (
                    resources.map((resource) => (
                        <div
                            key={resource.id}
                            className="bg-pink rounded-lg p-6 mb-6"
                        >
                            <h2 className="text-4xl font-bold mb-4 text-snow">{resource.name}</h2>
                            {resource.resources?.rolesAndOpps?.length > 0 && (
                                <div className="mb-4">
                                    <h3 className="text-2xl font-bold text-amethyst">Roles and Opportunities</h3>
                                    <ul className="list-disc mx-5 mt-2">
                                        {resource.resources.rolesAndOpps.map((item, index) => (
                                            <li key={index}>
                                                <a
                                                    href={item.url}
                                                    className="text-dark-purple hover:snow"
                                                    target="_blank"
                                                    rel="noopener noreferrer"
                                                >
                                                    {item.name}
                                                </a>
                                            </li>
                                        ))}
                                    </ul>
                                </div>
                            )}
                            {resource.resources?.relatedCourses?.length > 0 && (
                                <div className="mb-4">
                                    <h3 className="text-2xl font-bold text-amethyst">Related Courses</h3>
                                    <ul className="list-disc list-inside mt-2">
                                        {resource.resources.relatedCourses.map((item, index) => (
                                            <li key={index}>
                                                <a
                                                    href={item.url}
                                                    className="text-dark-purple hover:snow"
                                                    target="_blank"
                                                    rel="noopener noreferrer"
                                                >
                                                    {item.name}
                                                </a>
                                            </li>
                                        ))}
                                    </ul>
                                </div>
                            )}
                            {resource.resources?.organizations?.length > 0 && (
                                <div>
                                    <h3 className="text-2xl font-bold text-amethyst">Organizations</h3>
                                    <ul className="list-disc list-inside mt-2">
                                        {resource.resources.organizations.map((item, index) => (
                                            <li key={index}>
                                                <a
                                                    href={item.url}
                                                    className="text-dark-purple hover:snow"
                                                    target="_blank"
                                                    rel="noopener noreferrer"
                                                >
                                                    {item.name}
                                                </a>
                                            </li>
                                        ))}
                                    </ul>
                                </div>
                            )}
                        </div>
                    ))
                )}
            </div>
        </div>
    );
};

export default ResourcesList;
