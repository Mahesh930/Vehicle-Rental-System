# Vehicle Rental System

This project is a MERN (MongoDB, Express, React, Node.js) stack application for a vehicle rental system. It allows users to register, login, browse available vehicles, book vehicles, and manage their bookings.

## Table of Contents

- [Features](#features)
- [Installation](#installation)
- [Usage](#usage)
- [Folder Structure](#folder-structure)
- [API Endpoints](#api-endpoints)
- [Technologies Used](#technologies-used)
- [Contributing](#contributing)
- [License](#license)

## Features

- User registration and login
- Browse available vehicles
- Book vehicles
- Manage bookings
- Admin panel to add, update, and delete vehicles

## Installation

1. Clone the repository:

```sh
git clone https://github.com/yourusername/vehicle-rental-system.git
cd vehicle-rental-system
```

2.Install dependencies for both backend and frontend:
```sh
# Backend
cd backend
npm install

# Frontend
cd ../frontend
npm install
```
3.Set up environment variables:
Create a .env file in the backend directory and add the following variables:
```sh
MONGO_URL=your_mongodb_connection_string
ACCESS_TOKEN_SECRET=your_access_token_secret
REFRESH_TOKEN_SECRET=your_refresh_token_secret
CLOUDINARY_CLOUD_NAME=your_cloudinary_cloud_name
CLOUDINARY_API_KEY=your_cloudinary_api_key
CLOUDINARY_API_SECRET=your_cloudinary_api_secret
PORT=5000
```
Create a .env file in the frontend directory and add the following variables:
```sh
VITE_API_URL=http://localhost:5000
```


4.Start the development servers:
```sh
# Backend
cd backend
npm run dev

# Frontend
cd ../frontend
npm run dev
```

# Technologies Used
-  MongoDB
-  Express
-  React
-  Node.js
-  Cloudinary
-  Tailwind CSS
-  Axios

















