from flask import Blueprint, jsonify
from sqlalchemy import text

from backend.app import db

api = Blueprint("api", __name__)

@api.get("/health")
def health():
    return jsonify({
        "status": "success",
        "message": "SkillPath AI backend is running"
    }), 200


@api.get("/health/db")
def database_health():
    try:
        db.session.execute(text("SELECT 1"))
        return jsonify({
            "status": "success",
            "message": "MySQL connection successful"
        }), 200

    except Exception:
        db.session.rollback()
        return jsonify({
            "status": "error",
            "message": "MySQL connection failed"
        }), 503