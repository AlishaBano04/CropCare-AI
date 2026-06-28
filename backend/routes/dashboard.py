
from flask import Blueprint, jsonify

dashboard_bp = Blueprint("dashboard", __name__)

@dashboard_bp.route("/api/dashboard", methods=["GET"])
def dashboard():

    return jsonify({
        "success": True,
        "message": "Dashboard Loaded",

        "totalDiseases":150,
        "supportedCrops":10,
        "aiQueries":325
    }), 200
