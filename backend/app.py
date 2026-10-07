import os
from flask import Flask, jsonify
from flask_cors import CORS
from dotenv import load_dotenv

load_dotenv()

app = Flask(__name__)
CORS(app)

app.config['SECRET_KEY'] = os.getenv('SECRET_KEY')
app.config['SQLALCHEMY_DATABASE_URI'] = os.getenv('DATABASE_URL')

@app.route("/", methods=["GET"])
def home():
    return jsonify({"status": "API Lupin rodando com sucesso!"})

if __name__ == "__main__":
    port = int(os.getenv('PORT', 5000))
    app.run(debug=True, port=port)