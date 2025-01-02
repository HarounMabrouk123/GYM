import robot from "../assets/images/bot.png";
import { useState } from "react";
import axios from "axios";
import { motion } from 'framer-motion';

const Chatbot = () => {
  const [textToSend, setTextToSend] = useState("");
  const [generatedText, setGeneratedText] = useState("");

  async function handleSubmit() {
    try {
      console.log("Message to send:", textToSend);
      const response = await axios.post("http://127.0.0.1:5000/chat", { message: textToSend });
      console.log("Response:", response.data.response);
      
      document.getElementById("Text").innerHTML +=
        `<div class="text-xl w-[70%] p-3 mt-5 bg-black rounded-3xl text-yellow-400">${response.data.response}</div>`; 
      setTextToSend("");
    } catch (error) {
      console.error("Error reaching the chatbot API:", error);
      setGeneratedText("Error reaching the chatbot API.");
    }
  }

  const randomFacts = [
    "🏋️ Did you know? Weightlifting boosts your metabolism for up to 36 hours!",
    "💧 Hydration Tip: Drink at least 2 liters of water daily for optimal performance.",
    "🥗 Nutrition Fact: A balanced diet is 80% of your fitness success.",
    "🏃 Cardio Reminder: 150 minutes of moderate-intensity cardio weekly is ideal.",
    "📅 Consistency is key! Working out 4-5 times a week yields the best results."
  ];

  const getRandomFact = () => randomFacts[Math.floor(Math.random() * randomFacts.length)];

  return (
    <main className="w-full min-h-screen flex justify-center items-center relative pt-48 pb-20">
      <motion.div
        initial={{ scale: 1, y: 1000 }}
        animate={{ scale: 1, y: 0 }}
        transition={{
          duration: 0.25,
          type: "spring",
          stiffness: 100,
          damping: 9,
          mass: 1
        }}
        className="w-[90%] max-md:w-full h-[600px] bg-white flex shadow-lg rounded-lg"
      >
        {/* Chat Section */}
        <div className="w-[70%] flex flex-col justify-between p-4">
          <div
            id="Text"
            className="h-[500px] w-full overflow-y-auto bg-gray-100 rounded-lg p-4"
          ></div>
          <div className="flex items-center mt-4">
            <input
              value={textToSend}
              type="text"
              onChange={(e) => setTextToSend(e.target.value)}
              placeholder="Talk to GymBro"
              className="p-2 border-2 border-black w-[85%] rounded-md"
            />
            <button
              className="ml-4 text-black text-3xl bg-yellow-400 px-4 py-2 border-2 border-black rounded-md"
              onClick={() => {
                document.getElementById("Text").innerHTML +=
                  `<div class="text-xl w-[70%] p-2 bg-yellow-500 rounded-3xl mt-3 text-white self-end">${textToSend}</div>`;
                handleSubmit();
              }}
            >
              ⋙
            </button>
          </div>
        </div>

        {/* Random Fact Section */}
        <div className="w-[30%] bg-yellow-100 p-4 rounded-r-lg">
          <h2 className="text-2xl font-bold text-black mb-4">Daily Fitness Tip</h2>
          <p className="text-black text-lg italic">{getRandomFact()}</p>
        </div>
      </motion.div>
    </main>
  );
};

export default Chatbot;
