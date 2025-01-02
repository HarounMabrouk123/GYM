from flask import Flask, request, jsonify
import os
from groq import Groq
from flask_cors import CORS 
app = Flask(__name__)

# GROQ API endpoint and key (replace with actual API details)
GROQ_API_KEY = "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"
CORS(app, resources={r"/chat": {"origins": "http://localhost:5173"}})

# Initialize the Groq client once
client = Groq(api_key=GROQ_API_KEY)

@app.route("/chat", methods=["POST"])
def chat(): 
    # Parse incoming JSON request
    data = request.get_json()
    user_message = data.get("message")

    if not user_message:
        return jsonify({"error": "No message provided"}), 400

    # Generate a completion using the GROQ API with the user message
    try:
        chat_completion = client.chat.completions.create(
            messages=[ 
                 {
            "role": "system",
            "content": "you are a helpful Gym assistant. Answer as GymBro the humanized robot but don't talk too much."
                },
                {
                    "role": "user",
                    "content": user_message
                }
            ],
            model="llama3-70b-8192"
        )
        
        # Extract and return the response from the chat completion
        chatbot_response = chat_completion.choices[0].message.content
        return jsonify({"response": chatbot_response})

    except Exception as e:
        # Handle potential API errors
        return jsonify({"error": str(e)}), 500

if __name__ == "__main__":
    app.run(debug=True)
