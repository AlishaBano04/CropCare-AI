
from flask import Blueprint, jsonify

detect_bp = Blueprint("detect", __name__)

@detect_bp.route("/api/detect", methods=["POST"])
def detect():

    return jsonify({
        "success": True,
        "message": "Disease Detection API Working",
        "disease": "Tomato Early Blight",
        "confidence": "95%"
    }), 200
