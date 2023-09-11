import argparse
import random
from mimesis import Internet, Development, Transport, Food, Code
from mimesis.locales import Locale

from api.schemas import RobotCreate
from api.schemas.robot import RobotStatus
from api.database.session import SessionLocal
from api.repositories import robots as robot_repo

parser = argparse.ArgumentParser()
parser.add_argument("--count", type=int, default=10, help="Number of robots to generate")

args = parser.parse_args()


def main():
    food = Food(locale=Locale.JA)
    transport = Transport()
    development = Development()
    internet = Internet()
    code = Code()

    db = SessionLocal()

    for _ in range(args.count):
        robot_create = RobotCreate(
            name=food.dish(),
            software_version=development.version(),
            ip_address=internet.ip_v4(),
            model=transport.car(),
            serial_number=code.imei(),
            system_status=random.choice(list(RobotStatus)),
        )

        robot_repo.create(db, robot_create)


if __name__ == "__main__":
    main()
