import datetime

from sqlalchemy import DateTime
from sqlalchemy.sql import func
from sqlalchemy.orm import DeclarativeBase, mapped_column, Mapped


class TimestampsMixin:
    created_at: Mapped[datetime.datetime] = mapped_column(DateTime(timezone=True), insert_default=func.now())
    updated_at: Mapped[datetime.datetime] = mapped_column(
        DateTime(timezone=True), insert_default=func.now(), onupdate=func.now()
    )


class BaseModel(DeclarativeBase):
    pass
