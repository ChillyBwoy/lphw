/* generated using openapi-typescript-codegen -- do no edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
export const $RobotCreate = {
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
    },
    system_status: {
      type: "RobotStatus",
      isRequired: true,
    },
  },
} as const;
