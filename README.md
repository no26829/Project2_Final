Virtual Pet Microservices Project

This project is a microservices version of my pet app from Project 1.

Services:
- access-gatekeeper: login and JWT token
- critter-core-1 and critter-core-2: pet hunger logic
- xp-tracker: XP and coins
- command-router: API gateway, handles routing and tokens
- pet-portal: frontend (port 3000)

To run:
1. Make sure Docker is running
2. Open terminal in project folder
3. Run: docker-compose up --build

Main links:
- Frontend: http://localhost:3000
- API Gateway: http://localhost:8000

Token route:
- POST /auth/token (returns JWT)
- Use token in Authorization header to access protected routes
