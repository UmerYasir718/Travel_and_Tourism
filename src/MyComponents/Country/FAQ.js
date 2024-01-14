import React from "react";
import { useState } from "react";
export default function FAQ() {
  const [selected, setselected] = useState(null);
  const handleClick = (index) => {
    if (selected === index) {
      setselected(null);
    }
    setselected(index);
  };

  return (
    <>
      <div className="container">
        <div className="card">
          <h3 className="card-header">FAQ's</h3>
          <div className="card-body">
            {data.map((item, index) => (
              <div className="item">
                <div className="question" onClick={() => handleClick(index)}>
                  <h5>{item.question}</h5>
                  <span>{selected === index ? "-" : "+"}</span>
                </div>
                <div className={selected === index ? "answerShow" : "answer"}>
                  {item.answer}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  );
}
const data = [
  {
    question: "How do I apply for tourist visa for Australia?",
    answer:
      "You can simply reach PLATFORM INTL customer care either by submitting the application online or by call us at +923 111 1233 59 or WhatsApp us at +923 111 1198 46.",
  },
  {
    question: "How much does the Australia visa cost?",
    answer: "The Australian Visa costs 190 AUD from Pakistan, per client.",
  },
  {
    question: "How long does it take to get an Australian tourist visa?",
    answer:
      "You can stay up to 30 days in Australia with a tourist visa, from Pakistan.",
  },
  {
    question: "Can I get a tourist visa for Australia now?",
    answer:
      "The tourist visa is no longer available. It has been replaced by the more convenient ETA and eVisitor visas.",
  },
  {
    question: "How long can I stay in Australia on a tourist visa?",
    answer:
      "You can stay up to 30 days in Australia with a tourist visa, from Pakistan.",
  },
];
