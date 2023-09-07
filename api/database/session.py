from sqlalchemy import create_engine
from sqlalchemy.orm import sessionmaker

from ..settings import get_settings

config = get_settings()

engine = create_engine(str(config.db.url), echo=True)

SessionLocal = sessionmaker(engine)


def get_db():
    db = SessionLocal()

    try:
        yield db
    finally:
        db.close()
