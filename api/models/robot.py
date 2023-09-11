import uuid

from sqlalchemy import String, UUID, Enum
from sqlalchemy.orm import mapped_column, Mapped

from ..database import BaseModel, TimestampsMixin
from ..schemas.robot import RobotStatus


class Robot(BaseModel, TimestampsMixin):
    __tablename__ = "robots"

    id: Mapped[uuid.UUID] = mapped_column(UUID, primary_key=True, default=uuid.uuid4)
    name: Mapped[str] = mapped_column(String(100), nullable=False)
    model: Mapped[str] = mapped_column(String(100), nullable=False)
    software_version: Mapped[str] = mapped_column(String(100), nullable=False)
    serial_number: Mapped[str] = mapped_column(String(100), unique=True, nullable=False)
    ip_address: Mapped[str] = mapped_column(String(100), nullable=True)
    system_status: Mapped[RobotStatus] = mapped_column(
        Enum(RobotStatus), default=RobotStatus.IDLE.value, server_default=RobotStatus.IDLE.value, nullable=False
    )
