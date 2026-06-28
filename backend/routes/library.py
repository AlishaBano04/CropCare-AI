
from flask import Blueprint, jsonify

library_bp = Blueprint("library", __name__)

@library_bp.route("/api/library", methods=["GET"])
def library():

    return jsonify({
        "success": True,
        "message": "Library Loaded Successfully",

        "diseases":[
            "Tomato Early Blight",
            "Tomato Late Blight",
            "Potato Early Blight",
            "Corn Rust",
            "Rice Blast"
        ]
    }), 200
