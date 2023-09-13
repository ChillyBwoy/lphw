from typing import TypedDict
from collections import defaultdict

from fastapi.exceptions import RequestValidationError


class FieldError(TypedDict):
    type: str
    message: str


FormErrors = dict[str, list[FieldError]]


def map_validation_error(exc: RequestValidationError) -> FormErrors:
    """
    Maps a FastAPI RequestValidationError to a dictionary of form errors for ease of use in the frontend

    Args:
        exc (RequestValidationError): The validation error to map.

    Returns:
        FormErrors: A dictionary of form errors, where the keys are the field names and the values are lists of FieldError
        dictionaries containing the error type and message.
    """
    errors: FormErrors = defaultdict(list)

    for err in exc.errors():
        err_loc, err_msg, err_type = err["loc"], err["msg"], err["type"]
        short_loc = err_loc[1:] if err_loc[0] in ("body") else err_loc
        err_key = ".".join(short_loc)
        errors[err_key].append({"type": err_type, "message": err_msg})

    return errors
