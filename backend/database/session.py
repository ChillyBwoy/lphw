from sqlalchemy import create_engine
from sqlalchemy.orm import sessionmaker

from ..config import get_config

config = get_config()

engine = create_engine(str(config.db.url), echo=True)

SessionLocal = sessionmaker(engine)


def get_db():
    db = SessionLocal()

    try:
        yield db
    finally:
        db.close()
