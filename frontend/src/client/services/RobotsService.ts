/* generated using openapi-typescript-codegen -- do no edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { Page_Robot_ } from "../models/Page_Robot_";
import type { Robot } from "../models/Robot";
import type { RobotCreate } from "../models/RobotCreate";
import type { RobotUpdate } from "../models/RobotUpdate";

import type { CancelablePromise } from "../core/CancelablePromise";
import type { BaseHttpRequest } from "../core/BaseHttpRequest";

export class RobotsService {
  constructor(public readonly httpRequest: BaseHttpRequest) {}

  /**
   * List
   * @returns Page_Robot_ Successful Response
   * @throws ApiError
   */
  public list({
    page = 1,
    size = 50,
  }: {
    /**
     * Page number
     */
    page?: number;
    /**
     * Page size
     */
    size?: number;
  }): CancelablePromise<Page_Robot_> {
    return this.httpRequest.request({
      method: "GET",
      url: "/api/v1/robots/",
      query: {
        page: page,
        size: size,
      },
      errors: {
        422: `Validation Error`,
      },
    });
  }

  /**
   * Create
   * @returns Robot Successful Response
   * @throws ApiError
   */
  public create({ requestBody }: { requestBody: RobotCreate }): CancelablePromise<Robot> {
    return this.httpRequest.request({
      method: "POST",
      url: "/api/v1/robots/",
      body: requestBody,
      mediaType: "application/json",
      errors: {
        422: `Validation Error`,
      },
    });
  }

  /**
   * Show
   * @returns Robot Successful Response
   * @throws ApiError
   */
  public show({ robotId }: { robotId: string }): CancelablePromise<Robot> {
    return this.httpRequest.request({
      method: "GET",
      url: "/api/v1/robots/{id}",
      query: {
        robot_id: robotId,
      },
      errors: {
        422: `Validation Error`,
      },
    });
  }

  /**
   * Update
   * @returns Robot Successful Response
   * @throws ApiError
   */
  public update({ robotId, requestBody }: { robotId: string; requestBody: RobotUpdate }): CancelablePromise<Robot> {
    return this.httpRequest.request({
      method: "PUT",
      url: "/api/v1/robots/{id}",
      query: {
        robot_id: robotId,
      },
      body: requestBody,
      mediaType: "application/json",
      errors: {
        422: `Validation Error`,
      },
    });
  }

  /**
   * Destroy
   * @returns void
   * @throws ApiError
   */
  public destroy({ robotId }: { robotId: string }): CancelablePromise<void> {
    return this.httpRequest.request({
      method: "DELETE",
      url: "/api/v1/robots/{id}",
      query: {
        robot_id: robotId,
      },
      errors: {
        422: `Validation Error`,
      },
    });
  }
}
