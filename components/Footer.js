import React from 'react';

const Footer = () => {
    return (
        <footer className="bg-darkest-purple py-4 space-y-1">
            <div className="container mx-auto flex justify-between items-left flex-col md:flex-row">
            {/* Footer section 1 */}
                <div className="flex-1 px-10 py-5"> 
                    <h3 className="text-lg font-bold text-pink font-normal">Created By</h3>
                    <p className="mt-2 font-normal text-snow">This website was created for the EmpowHER Hackathon 2024 by team SHEniusNetwork - <a href="https://www.linkedin.com/in/bratee-podder/">Bratee Podder</a>, <a href="https://www.linkedin.com/in/elif-candan/">Elif Candan</a>, Amesha Banjara and <a href="https://www.linkedin.com/in/ey101/">Elizabeth Yan</a>.</p>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
