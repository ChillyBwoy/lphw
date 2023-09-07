import uuid

from sqlalchemy import String, UUID
from sqlalchemy.orm import mapped_column, Mapped

from ..database import BaseModel, TimestampsMixin


class Robot(BaseModel, TimestampsMixin):
    __tablename__ = "robots"

    id: Mapped[uuid.UUID] = mapped_column(UUID, primary_key=True, default=uuid.uuid4)
    name: Mapped[str] = mapped_column(String(100), nullable=False)
    model: Mapped[str] = mapped_column(String(100), nullable=False)
    software_version: Mapped[str] = mapped_column(String(100), nullable=False)
    serial_number: Mapped[str] = mapped_column(String(100), unique=True, nullable=False)
    ip_address: Mapped[str] = mapped_column(String(100), nullable=True)
