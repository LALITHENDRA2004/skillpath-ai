import os
import pytest

from backend.app import create_app, db
from backend.app.models import User, LearningGoal, Roadmap, Task


@pytest.fixture()
def app():
    test_database_url = os.getenv("TEST_DATABASE_URL")

    if not test_database_url:
        pytest.fail("TEST_DATABASE_URL is not configured")

    app = create_app({
        "TESTING": True,
        "SQLALCHEMY_DATABASE_URI": test_database_url,
    })

    with app.app_context():
        db.create_all()
        yield app
        db.session.remove()
        db.drop_all()


def test_user_goal_roadmap_task_relationships(app):
    with app.app_context():
        user = User(
            name="Test User",
            email="model-test@example.com",
        )

        goal = LearningGoal(
            title="Learn Python",
            user=user,
        )

        roadmap = Roadmap(
            title="Python Roadmap",
            user=user,
            goal=goal,
        )

        task = Task(
            title="Learn Flask",
            roadmap=roadmap,
        )

        db.session.add(user)
        db.session.commit()

        saved_user = db.session.get(User, user.id)

        assert saved_user.name == "Test User"
        assert len(saved_user.goals) == 1
        assert len(saved_user.roadmaps) == 1
        assert saved_user.roadmaps[0].tasks[0].title == "Learn Flask"
        assert task.status == "pending"
        assert task.priority == "medium"
