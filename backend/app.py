from flask import Flask, jsonify
import json
from flask_cors import CORS

app = Flask(__name__)
CORS(app)

@app.route('/api/streets', methods=['GET'])
def get_streets():
    try:
        with open('streets.json', 'r', encoding='utf-8') as f:
            streets = json.load(f)
        return jsonify(streets)
    except Exception as e:
        return jsonify({'error': str(e)}), 500


if __name__ == '__main__':
    app.run(debug=True, host='0.0.0.0', port=5000)
