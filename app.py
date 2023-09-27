from flask import Flask, request, jsonify
from flask_pymongo import PyMongo

app = Flask(__name__)

# Configure your MongoDB URI
app.config['MONGO_URI'] = 'mongodb://localhost:27017/livestream'  # Replace with your MongoDB URI

# Create a PyMongo instance
mongo = PyMongo(app)

# Define a MongoDB collection for overlay settings
overlay_collection = mongo.db.overlay_settings

# API endpoint to create a new overlay setting
@app.route('/overlay', methods=['POST'])
def create_overlay():
    data = request.json
    if not data:
        return jsonify({'message': 'Request data is empty'}), 400

    # Insert the overlay setting into the MongoDB collection
    overlay_id = overlay_collection.insert_one(data).inserted_id
    return jsonify({'message': 'Overlay created', 'id': str(overlay_id)}), 201

# API endpoint to retrieve an overlay setting by ID
@app.route('/overlay/<overlay_id>', methods=['GET'])
def get_overlay(overlay_id):
    overlay = overlay_collection.find_one({'_id': overlay_id})
    if not overlay:
        return jsonify({'message': 'Overlay not found'}), 404
    return jsonify(overlay)

# Add similar route handlers for updating and deleting overlay settings as needed

if __name__ == '__main__':
    app.run(debug=True)
