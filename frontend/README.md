# Frontend: Building a Robot Management Interface with Vue.

## Background

Your task is to create a Vue.js user interface for managing a fleet of robots in a robot management service. The service should allow users to view, add, edit, and delete robots. While the frontend implementation is your responsibility, you're also required to implement the backend API endpoints for retrieving and manipulating robot data.

## Backend API Endpoints

Create minimal implementation for the following API endpoints using a backend technology of your choice (e.g., Node.js, Flask, Django, fastapi etc.):

1. `GET /api/robots`: Retrieve a list of robots.
2. `GET /api/robots/:id`: Retrieve details of a specific robot.
3. `POST /api/robots`: Add a new robot to the list.
4. `PUT /api/robots/:id`: Update details of an existing robot.
5. `DELETE /api/robots/:id`: Delete a robot from the list.

Hint: the backend exists to support your frontend so only implement endpoints and functionality you need.
Frontend: Building a Robot Management Interface with Vue.

## Requirements

### 1. Robot List

- Display a list of robots with their names, statuses, and additional information.
- Fetch robot data from the provided API endpoints.

### 2. Robot Details

- Implement a page where users can view detailed information about a selected robot.
- Display all available data about the robot, including its specifications and status.
- Provide a button to navigate back to the robot list.

### 3. Add/Edit Robot

- Create a form for adding a new robot or editing an existing one.
- Include fields for robot name, specifications, and status.
- Validate form inputs and show appropriate error messages.

### 4. Delete Robot

- Implement a feature to delete a robot from the list.
- Display a confirmation modal before proceeding with the deletion.

### 5. Styling and Responsiveness

- Apply CSS to create a clean and visually appealing interface.
- Ensure the interface is responsive and functions well on both desktop and mobile devices.

### 6. Bonus (Optional)

- Allow users to sort and filter the robot list based on various criteria (e.g., status, name).

## Guidelines

- Utilize Vue.js for constructing the user interface and managing state.
- Organize your code in a modular and maintainable manner.
- Document your code and offer a brief explanation of your design choices in a README file.
- Implement the backend API endpoints according to the provided specifications.

## Submission

Provide a GitHub repository link to your project. Include clear instructions on running the project locally, and describe any extra steps required to test the functionality. Ensure that both the frontend and backend parts are included in your repository.
