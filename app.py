from flask import Flask, request, jsonify
import firebase_admin
from firebase_admin import credentials, firestore
from flask_cors import CORS  # Import CORS

# Initialize Firebase Admin SDK
cred = credentials.Certificate('relationship-status-4158-firebase.json')
firebase_admin.initialize_app(cred)

# Initialize Firestore
db = firestore.client()

# Initialize Flask
app = Flask(__name__)

# Enable CORS for all routes
CORS(app)

@app.route('/')
def index():
    return "Flask API is working!"

@app.route('/update-status', methods=['POST'])
def update_status():
    try:
        data = request.json
        print(f"Received data: {data}")  # Debugging: Check data received

        email = data.get('email')
        full_name = data.get('fullName')
        age = data.get('age')
        relationship_status = data.get('relationshipStatus')
        interested_in_relationship = data.get('interestedInRelationship')
        comfortable_for_coffee = data.get('comfortableForCoffee')

        if not email or not relationship_status:
            return jsonify({"message": "Invalid data"}), 400

        # Save the data to Firestore
        db.collection('users').document(email).set({
            'email': email,
            'fullName': full_name,
            'age': age,
            'relationshipStatus': relationship_status,
            'interestedInRelationship': interested_in_relationship,
            'comfortableForCoffee': comfortable_for_coffee,
        })
        return jsonify({"message": "Status updated successfully!"}), 200
    except Exception as e:
        return jsonify({"message": str(e)}), 500


@app.route('/get-statuses', methods=['GET'])
def get_statuses():
    try:
        users_ref = db.collection('users')
        docs = users_ref.stream()

        user_statuses = []
        for doc in docs:
            user_data = doc.to_dict()
            user_statuses.append(user_data)

        return jsonify(user_statuses), 200
    except Exception as e:
        return jsonify({"message": str(e)}), 500


if __name__ == '__main__':
    app.run(debug=True)

