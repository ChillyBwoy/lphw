/* generated using openapi-typescript-codegen -- do no edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
export const $Robot = {
  properties: {
    name: {
      type: "string",
      isRequired: true,
    },
    model: {
      type: "string",
      isRequired: true,
    },
    software_version: {
      type: "string",
      isRequired: true,
    },
    serial_number: {
      type: "string",
      isRequired: true,
    },
    ip_address: {
      type: "any-of",
      contains: [
        {
          type: "string",
        },
        {
          type: "null",
        },
      ],
      isRequired: true,
    },
    system_status: {
      type: "RobotStatus",
      isRequired: true,
    },
    id: {
      type: "string",
      isRequired: true,
      format: "uuid",
    },
    created_at: {
      type: "string",
      isRequired: true,
      format: "date-time",
    },
    updated_at: {
      type: "string",
      isRequired: true,
      format: "date-time",
    },
    battery_health: {
      type: "number",
      isReadOnly: true,
      isRequired: true,
    },
    remaining_battery: {
      type: "number",
      isReadOnly: true,
      isRequired: true,
    },
    connected: {
      type: "boolean",
      isReadOnly: true,
      isRequired: true,
    },
  },
} as const;
