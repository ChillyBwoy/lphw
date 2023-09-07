import argparse
import json
import sys

from uvicorn.importer import import_from_string

parser = argparse.ArgumentParser(prog="extract-openapi.py")
parser.add_argument("--app", help='App import string. Eg. "main:app"', default="api.main:app")
parser.add_argument("--app-dir", help="Directory containing the app", default="./")
parser.add_argument("--out", help="Output file ending in .json or .yaml", default="openapi.json")


if __name__ == "__main__":
    args = parser.parse_args()

    if args.app_dir is not None:
        sys.path.insert(0, args.app_dir)

    app = import_from_string(args.app)
    content = app.openapi()

    # remove tags from operationId for client generation
    for path_data in content["paths"].values():
        for operation in path_data.values():
            tag = operation["tags"][0]
            operation_id = operation["operationId"]
            to_remove = f"{tag}-"
            new_operation_id = operation_id[len(to_remove) :]
            operation["operationId"] = new_operation_id

    with open(args.out, "w") as f:
        json.dump(content, f, indent=2)
