
from flask import Blueprint, request, jsonify

chat_bp = Blueprint("chat", __name__)

@chat_bp.route("/api/chat", methods=["POST"])
def chat():

    data = request.get_json()

    return jsonify({
        "success": True,
        "message": "Chat API Working Successfully",
        "userMessage": data.get("message"),
        "reply": "This is a dummy AI response."
    }), 200
