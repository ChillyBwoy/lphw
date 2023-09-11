from typing import TypedDict
from collections import defaultdict

from fastapi.exceptions import RequestValidationError


class FieldError(TypedDict):
    type: str
    message: str


FormErrors = dict[str, list[FieldError]]


def map_validation_error(exc: RequestValidationError) -> FormErrors:
    errors: FormErrors = defaultdict(list)

    for err in exc.errors():
        err_loc, err_msg, err_type = err["loc"], err["msg"], err["type"]
        short_loc = err_loc[1:] if err_loc[0] in ("body") else err_loc
        err_key = ".".join(short_loc)
        errors[err_key].append({"type": err_type, "message": err_msg})

    return errors
