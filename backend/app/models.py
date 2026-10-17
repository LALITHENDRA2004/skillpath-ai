
from datetime import datetime

from backend.app import db


class User(db.Model):
    __tablename__ = "users"

    id = db.Column(db.Integer, primary_key=True)
    name = db.Column(db.String(100), nullable=False)
    email = db.Column(db.String(150), unique=True, nullable=False)
    created_at = db.Column(
        db.DateTime, default=datetime.utcnow, nullable=False
    )

    goals = db.relationship(
        "LearningGoal", back_populates="user",
        cascade="all, delete-orphan"
    )
    roadmaps = db.relationship(
        "Roadmap", back_populates="user",
        cascade="all, delete-orphan"
    )


class LearningGoal(db.Model):
    __tablename__ = "learning_goals"

    id = db.Column(db.Integer, primary_key=True)
    title = db.Column(db.String(150), nullable=False)
    description = db.Column(db.Text)
    target_date = db.Column(db.Date)
    status = db.Column(
        db.String(30), nullable=False, default="active"
    )
    user_id = db.Column(
        db.Integer, db.ForeignKey("users.id"), nullable=False
    )

    user = db.relationship("User", back_populates="goals")
    roadmaps = db.relationship(
        "Roadmap", back_populates="goal"
    )


class Roadmap(db.Model):
    __tablename__ = "roadmaps"

    id = db.Column(db.Integer, primary_key=True)
    title = db.Column(db.String(150), nullable=False)
    description = db.Column(db.Text)
    status = db.Column(
        db.String(30), nullable=False, default="active"
    )
    created_at = db.Column(
        db.DateTime, default=datetime.utcnow, nullable=False
    )
    user_id = db.Column(
        db.Integer, db.ForeignKey("users.id"), nullable=False
    )
    goal_id = db.Column(
        db.Integer, db.ForeignKey("learning_goals.id"),
        nullable=True
    )

    user = db.relationship("User", back_populates="roadmaps")
    goal = db.relationship(
        "LearningGoal", back_populates="roadmaps"
    )
    tasks = db.relationship(
        "Task", back_populates="roadmap",
        cascade="all, delete-orphan"
    )


class Task(db.Model):
    __tablename__ = "tasks"

    id = db.Column(db.Integer, primary_key=True)
    title = db.Column(db.String(150), nullable=False)
    description = db.Column(db.Text)
    status = db.Column(
        db.String(30), nullable=False, default="pending"
    )
    priority = db.Column(
        db.String(20), nullable=False, default="medium"
    )
    due_date = db.Column(db.Date)
    roadmap_id = db.Column(
        db.Integer, db.ForeignKey("roadmaps.id"), nullable=False
    )

    roadmap = db.relationship("Roadmap", back_populates="tasks")
