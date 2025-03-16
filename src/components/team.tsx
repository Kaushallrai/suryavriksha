"use client";

import { useState, useRef } from "react";
import { Button } from "./ui/button";

const members = [
  {
    name: "Suraj Ghimire",
    role: "Founder - CEO",
    avatar: "/assets/teams/ceo.png",
    description:
      "Mr. Ghimire oversees operations, sets strategic goals, and drives growth and profitability. With over 12 years of management experience, he provides leadership and direction to ensure the company's success in a competitive market. He balances global trade, supply chain management, and customer relationships while focusing on profitability and sustainability.",
  },
  {
    name: "Vikash Bohora",
    role: "Chief Operational Office",
    avatar: "/assets/teams/coo.png",
    description:
      "Mr. Bohora is a COO is the company who Oversees daily operations, ensuring efficiency across departments.  He looks operational activities of the company including guidance to procurement team, logistics and supply chain team. He also heads the trading activities including relationship with traders and market analysis. ",
  },
  {
    name: "Sagar Sharma",
    role: "Chief Finance Officer",
    avatar: "/assets/teams/cfo.jpg",
    description:
      "Mr. Sharma who is chartered Accountant by profession having more than 10 years of experience in the field of account and finance helps in managing financial planning, budgeting, and reporting.  He overlooks the finance managers and also helps in relationship with banks and financial institutions. ",
  },
  {
    name: "Ramesh Mangrati",
    role: "Chief Marketing Officer",
    avatar: "/assets/teams/cmo.jpg",
    description:
      "Mr. Mangrati is playing the role of CMO of the company who is having wide range of experience in the field of marketing. Mr. Mangrati plays a critical role in driving brand awareness, customer acquisition, and revenue growth by promoting the company's products and services. ",
  },
  {
    name: "Naren Ayer",
    role: "Customer Service Manager",
    avatar: "/assets/teams/csm.jpeg",
    description:
      "Mr. Ayer plays a crucial role in ensuring customer satisfaction and maintaining strong relationships with clients in our company. He plays a role in building trust, resolving issues, and ensuring smooth communication between the company and its customers, which can include farmers, suppliers, wholesalers, retailers, and international customers. ",
  },
  {
    name: "Kaushal Rai ",
    role: "Information Technology Officer",
    avatar: "/assets/teams/ito.jpeg",
    description:
      "Mr. Rai is IT officer of our company who manages IT infrastructure and systems of our company. He provides technical support and maintain systems and also analyse data to improve decision-making and operations.",
  },
];

export default function TeamSection() {
  const [flippedCards, setFlippedCards] = useState<Record<number, boolean>>({});
  const [hoveredCards, setHoveredCards] = useState<Record<number, boolean>>({});

  // Track if the card was flipped by button click
  const manualFlipRef = useRef<Record<number, boolean>>({});

  const flipCard = (index: number) => {
    // Mark this as a manual flip
    manualFlipRef.current[index] = true;

    setFlippedCards((prev) => ({
      ...prev,
      [index]: !prev[index],
    }));
  };

  const handleMouseEnter = (index: number) => {
    setHoveredCards((prev) => ({
      ...prev,
      [index]: true,
    }));
  };

  const handleMouseLeave = (index: number) => {
    setHoveredCards((prev) => ({
      ...prev,
      [index]: false,
    }));

    // If the card is flipped, flip it back to front
    if (flippedCards[index]) {
      // Reset the manual flip flag
      manualFlipRef.current[index] = false;

      // Flip back to front
      setFlippedCards((prev) => ({
        ...prev,
        [index]: false,
      }));
    }
  };

  return (
    <section className="bg-gray-50 pb-12 md:py-12 dark:bg-transparent">
      <div className="mx-auto max-w-5xl px-6">
        <div className="mt-12 gap-4 sm:grid sm:grid-cols-2 md:mt-24">
          <div className="sm:w-3/5">
            <h2 className="text-3xl font-bold sm:text-4xl">Meet Our Team</h2>
          </div>
          <div className="mt-6 sm:mt-0">
            <p>
              Get to Know the Passionate Individuals Behind SuryaVriksha, a Team
              Dedicated to Revolutionizing the Export Industry with Sustainable,
              High-Quality Products, Ethical Sourcing, and Seamless Global Trade
              Solutions.
            </p>
          </div>
        </div>
        <div className="mt-12 md:mt-24">
          <div className="grid gap-x-6 gap-y-12 sm:grid-cols-2 lg:grid-cols-3">
            {members.map((member, index) => (
              <div
                key={index}
                className="group perspective-1000"
                onMouseEnter={() => handleMouseEnter(index)}
                onMouseLeave={() => handleMouseLeave(index)}
              >
                <div
                  className={`relative h-[27rem] w-full transition-all duration-500 transform-style-3d ${
                    flippedCards[index] ? "rotate-y-180" : ""
                  }`}
                >
                  {/* Front of card */}
                  <div className="absolute inset-0 backface-hidden overflow-hidden">
                    <img
                      className="h-96 w-full rounded-md object-cover object-top grayscale transition-all duration-500 hover:grayscale-0 group-hover:h-[22.5rem] group-hover:rounded-xl"
                      src={member.avatar || "/placeholder.svg"}
                      alt="team member"
                      width="826"
                      height="1239"
                    />

                    {/* About button that appears on hover */}
                    <Button
                      className="absolute bottom-20 left-1/2 -translate-x-1/2   border text-white px-6  rounded-md 
                                opacity-0 transition-all duration-300 group-hover:opacity-100 hover:bg-primary/90"
                      onClick={(e) => {
                        e.stopPropagation();
                        flipCard(index);
                      }}
                    >
                      About
                    </Button>

                    <div className="px-2 pt-2 sm:pb-0 sm:pt-4">
                      <div className="flex justify-between">
                        <h3 className="text-title text-base font-medium transition-all duration-500 group-hover:tracking-wider">
                          {member.name}
                        </h3>
                      </div>
                      <div className="mt-1 flex items-center justify-between">
                        <span className="text-primary inline-block translate-y-6 text-sm opacity-0 transition duration-300 group-hover:translate-y-0 group-hover:opacity-100">
                          {member.role}
                        </span>
                      </div>
                    </div>
                  </div>

                  {/* Back of card */}
                  <div className="absolute inset-0 backface-hidden rotate-y-180 overflow-hidden">
                    {/* Same image as background */}
                    <div className="absolute inset-0">
                      <img
                        className="h-full w-full rounded-xl object-cover object-top"
                        src={member.avatar || "/placeholder.svg"}
                        alt=""
                        width="826"
                        height="1239"
                      />
                      {/* Overlay for better text readability */}
                      <div className="absolute inset-0 bg-black/70 rounded-xl"></div>
                    </div>

                    {/* Description content */}
                    <div className="relative z-10 h-full p-6 flex flex-col justify-center text-white overflow-y-auto">
                      <h3 className="text-xl font-bold mb-2">{member.name}</h3>
                      <p className="text-sm text-primary mb-4">{member.role}</p>
                      <p className="text-sm">{member.description}</p>
                      <button
                        className="mt-4 self-center bg-primary text-white px-4 py-2 rounded-md hover:bg-primary/90"
                        onClick={(e) => {
                          e.stopPropagation();
                          flipCard(index);
                        }}
                      >
                        Back
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
