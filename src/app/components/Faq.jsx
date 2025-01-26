"use client";
import React, { useState } from "react";
import { FiChevronDown, FiChevronUp } from "react-icons/fi";

const FaqItem = ({ title, content }) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="border border-gray-400 mb-2">
      <button
        className="w-full text-left font-medium py-3 px-5 flex justify-between items-center focus:outline-none transition-all bg-white rounded-lg hover:bg-gray-200"
        onClick={() => setIsOpen(!isOpen)}
        aria-expanded={isOpen}
        aria-controls={`content-${title.replace(/\s+/g, "-").toLowerCase()}`}
      >
        {title}
        {isOpen ? (
          <FiChevronUp className="text-gray-500 text-xl" />
        ) : (
          <FiChevronDown className="text-gray-500 text-xl" />
        )}
      </button>
      {isOpen && (
        <div
          className="py-3 px-5 bg-white text-blue-700"
          id={`content-${title.replace(/\s+/g, "-").toLowerCase()}`}
        >
          <p>{content}</p>
        </div>
      )}
    </div>
  );
};

const Faq = () => {
  const faqData = [
    {
      title: "What is Active People object?",
      content:
        "It is a community of active persons interested to get problems solving.",
    },
    {
      title: "What happens once I get register?",
      content: "You'll become member with full right on community activities.",
    },
    {
      title: "What should I expect during my log in?",
      content: "Once log in, you can share your ideas, opinions and concerns.",
    },
    {
      title: "There is financial contribution for members?",
      content: "The financial contribuition is voluntary and optional.",
    },
  ];

  return (
    <div className="mx-auto">
      <h2 className="text-2xl lg:text-3xl font-medium mb-6 text-center">
        Frequently Asked Questions
      </h2>
      {faqData.map((faq, index) => (
        <FaqItem key={index} title={faq.title} content={faq.content} />
      ))}
    </div>
  );
};

export default Faq;
