import React from 'react';

const ExperienceSec = () => {
    const experiences = [
        {
            year: "2021-2025",
            title: "Communications Manager",
            company: "CiraConnect",
            type: "Fulltime",
            description: "Led communications, training, product adoption, and workflow improvement around enterprise SaaS systems. Built multi-format training and communications programs, collaborated across product, support, and leadership teams, and used analytics and user feedback to improve adoption and reduce friction."
        },
        {
            year: "2021-Present",
            title: "Product & Educational Content Lead",
            company: "Aya & Sura, LLC",
            type: "Remote",
            description: "Designed educational products and digital learning experiences spanning mobile applications, flashcards, structured learning systems, and children's content. Worked across content, UX, illustration, and development."
        },
        {
            year: "2009-Present",
            title: "Founder / Product & Content Lead",
            company: "MManga",
            type: "Remote",
            description: "Built and operated a digital content platform reaching 44K+ followers and 3.2M+ views. Developed web experiences, publishing workflows, creative production systems, community programs, and multilingual content."
        },
        {
            year: "2017-2020",
            title: "Instructor, JET Programme",
            company: "JET Programme",
            type: "Fulltime",
            description: "Instruction and program coordination in Tokyo, Japan—early evidence of the cross-cultural and communication foundation this work still draws on."
        }
    ];

    return (
        <section>
            <div className="py-16 md:py-32">
                <div className="container mx-auto px-4">
                    <div className="flex items-center justify-between gap-2 border-b border-black pb-7 mb-9 md:mb-16">
                        <h2>Experience</h2>
                        <p className="text-xl text-primary">( 02 )</p>
                    </div>

                    <div className="space-y-7 md:space-y-12">
                        {experiences.map((exp, index) => (
                            <div key={index} className="grid grid-cols-1 sm:grid-cols-3 gap-2.5 md:gap-4 xl:gap-8 items-start relative">
                                <div className="">
                                    <h3 className="font-bold mb-2 text-black">{exp.year}</h3>
                                    <h4 className="text-lg font-normal">{exp.title}</h4>
                                </div>

                                <div className=" relative">
                                    {index < experiences.length && (
                                        <div className={`absolute left-0 top-3 w-px ${index < experiences.length - 1 ? 'h-40' : 'h-30'} bg-softGray`}></div>
                                    )}

                                    <div className="no-print absolute left-0 top-0 transform -translate-x-1/2">
                                        <div className={`no-print w-3.5 h-3.5 rounded-full border-1 bg-white flex items-center justify-center ${index === 1 ? 'border-primary' : 'border-black'
                                            }`}>
                                            {index === 1 && (
                                                <div className="w-1.5 h-1.5 rounded-full bg-primary"></div>
                                            )}
                                        </div>
                                    </div>

                                    <div className="pl-4 lg:pl-7">
                                        <div className="flex items-center gap-2 mb-1">
                                            <span className="text-xl text-black font-normal">{exp.company}</span>
                                        </div>
                                        <p className="text-base font-normal">{exp.type}</p>
                                    </div>
                                </div>

                                <div className="pl-8 sm:pl-0">
                                    <p className="leading-relaxed text-base">{exp.description}</p>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
};

export default ExperienceSec;