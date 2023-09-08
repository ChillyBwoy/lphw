/* generated using openapi-typescript-codegen -- do no edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
export const $Page_Robot_ = {
  properties: {
    items: {
      type: "array",
      contains: {
        type: "Robot",
      },
      isRequired: true,
    },
    total: {
      type: "number",
      isRequired: true,
    },
    page: {
      type: "any-of",
      contains: [
        {
          type: "number",
          minimum: 1,
        },
        {
          type: "null",
        },
      ],
      isRequired: true,
    },
    size: {
      type: "any-of",
      contains: [
        {
          type: "number",
          minimum: 1,
        },
        {
          type: "null",
        },
      ],
      isRequired: true,
    },
    pages: {
      type: "any-of",
      contains: [
        {
          type: "number",
        },
        {
          type: "null",
        },
      ],
      isRequired: true,
    },
  },
} as const;
