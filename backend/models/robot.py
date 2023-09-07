import uuid

from sqlalchemy import UUID
from sqlalchemy import String, SmallInteger
from sqlalchemy.orm import mapped_column, Mapped

from ..database import BaseModel, TimestampsMixin

# [
#   {
#     "id": 0,
#     "name": "string",
#     "uuid": "string",
#     "error": true,
#     "error_detail": "string",
#     "error_codes": [
#       0
#     ],
#     "execute_scenario": "string",
#     "ip_address": "string",
#     "model": "string",
#     "software_version": "string",
#     "serial_number": "string",
#     "group": "string",
#     "connected": true,
#     "battery_health": 0,
#     "remaining_battery": 0,
#     "system_status": "string",
#     "map_id": 0,
#     "is_finding_mode": true
#   }
# ]


class Robot(BaseModel, TimestampsMixin):
    __tablename__ = "robots"

    id: Mapped[uuid.UUID] = mapped_column(UUID, primary_key=True, init=False, default=uuid.uuid4)
    name: Mapped[str] = mapped_column(String(100), nullable=False)
    model: Mapped[str] = mapped_column(String(100), nullable=False)
    software_version: Mapped[str] = mapped_column(String(100), nullable=False)
    serial_number: Mapped[str] = mapped_column(String(100), nullable=False, unique=True)
    ip_address: Mapped[str] = mapped_column(String(100))
    battery_health: Mapped[int] = mapped_column(SmallInteger, nullable=False, default=0)
    remaining_battery: Mapped[int] = mapped_column(SmallInteger, nullable=False, default=0)
