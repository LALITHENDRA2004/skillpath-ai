from flask import Flask
from flask_sqlalchemy import SQLAlchemy
from flask_migrate import Migrate

from backend.config import Config

db = SQLAlchemy()
migrate = Migrate()


def create_app(test_config=None):
    app = Flask(__name__)
    app.config.from_object(Config)

    if test_config: 
        app.config.update(test_config)

    db.init_app(app)

    # Register all database models with SQLAlchemy.
    from backend.app import models
    migrate.init_app(app, db)

    from backend.app.routes import api
    app.register_blueprint(api, url_prefix="/api")

    return app
