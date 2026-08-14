# Job Portal Assignment

This is a full-stack Job Portal application featuring a React Native mobile frontend and a Node.js/Express backend.

## Concepts & Technologies Used
* **Frontend:** React Native, Expo, Expo Router (for navigation), Redux Toolkit (for state management), Axios (for API requests).
* **Backend:** Node.js, Express.js, MongoDB (with Mongoose), JWT (JSON Web Tokens for Authentication).
* **Architecture:** RESTful API design, MVC-like structure on the backend (Routes, Controllers, Services, Repositories, Models).

## Prerequisites
Before you begin, ensure you have the following installed:
* [Node.js](https://nodejs.org/) (which comes with `npm`)
* [MongoDB](https://www.mongodb.com/) (running locally on `mongodb://localhost:27017`)
* [Expo CLI](https://docs.expo.dev/) (optional, can just use npx)

## Getting Started

### 1. Backend Setup (`jobPortalAssignment`)
1. Navigate to the backend directory:
   ```bash
   cd jobPortalAssignment
   ```
2. Install the dependencies:
   ```bash
   npm install
   ```
3. Start the backend server:
   ```bash
   npm start
   # or, if you use nodemon:
   nodemon server.js
   ```
   *The server will start on port 3000.*

### 2. Frontend Setup (`jobPortalFrontend`)
1. Navigate to the frontend directory:
   ```bash
   cd jobPortalFrontend
   ```
2. Install the dependencies:
   ```bash
   npm install
   ```

### 3. Important: Update the API IP Address
Since you will likely be running the React Native app on a physical device or emulator via Expo, the app cannot use `localhost` to connect to your backend. It needs the local IP address of your computer.

1. Find your computer's local IP address (e.g., `192.168.x.x` or `10.x.x.x`). You can find this by running `ipconfig` (Windows) or `ifconfig` (Mac/Linux) in your terminal.
2. Open the file: `jobPortalFrontend/utils/axios.js`
3. Update the `baseURL` to use your computer's IP address:
   ```javascript
   const api = axios.create({
       // Replace the IP below with your actual local IP address!
       baseURL: "http://192.168.1.5:3000/jobportal" 
   })
   ```

### 4. Run the Mobile App
1. Inside the `jobPortalFrontend` directory, start Expo:
   ```bash
   npx expo start
   ```
2. Scan the QR code with the Expo Go app on your phone, or press `a` to run it on an Android Emulator, or `i` to run it on an iOS Simulator.
