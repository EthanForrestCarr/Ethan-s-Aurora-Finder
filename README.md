# AuroraFinder

[![License Badge](https://img.shields.io/badge/License-MIT-blue.svg)](https://opensource.org/licenses/MIT)

## Description
Aurora Finder allows users to enter their location or enable geolocation services to receive aurora visibility predictions based on data from the Auroras.live API. Using the Google Maps API, the app also suggests nearby viewing spots, such as parks and elevated areas with low light pollution, for optimal viewing conditions. Additionally, users can maintain a personal aurora sightings log to record past experiences and track favorable conditions.

## Table of Contents
- [Features](#features)
- [Installation](#installation)
- [Usage](#usage)
- [Location-Based Aurora Visibility Forecasts](#location-based-aurora-visibility-forecasts)
- [Interactive Aurora Viewing Map](#interactive-aurora-viewing-map)
- [Personal Aurora Log](#personal-aurora-log)
- [User Authentication and Data Security](#user-authentication-and-data-security)
- [Contributing](#contributing)
- [License](#license)
- [Tests](#tests)
- [Questions?](#questions)

## Features
Location-Based Aurora Visibility Forecasts
- Users can input their address or use geolocation to receive real-time aurora predictions.
Interactive Aurora Viewing Map
- An interactive map displays nearby viewing locations, with filters for light pollution, elevation, and other conditions.
Personalized Aurora Log
- Users can log past aurora sightings, including date, location, notes, and photos.
User Authentication and Security
- Secure login with JWT ensures user data privacy and personalized access to logged sightings.
Mobile and Desktop Responsiveness
- Designed for both mobile and desktop for a seamless user experience across devices.

## Technologies Used
Frontend
- React: For building the interactive and responsive user interface.
Backend
- Node.js & Express.js: To create a RESTful API for handling requests.
- PostgreSQL & Sequelize: For the relational database and ORM, managing user data and sighting logs.
- JWT (JSON Web Tokens): For secure user authentication.
APIs
- Auroras.live DIY API: Provides real-time aurora visibility data based on user location.
- Google Maps API: Enables address auto-completion, geocoding, and an interactive map interface.

## Usage
Visit the site [here]().

## Location-Based Aurora Visibility Forecasts

As a user, I want to enter my location and receive information on aurora visibility, so I know if it’s a good time to plan an outing.

Location Input and Geocoding
- Users can enter their address or allow the app to access their location, and the address is auto-completed using Google’s Mapping API.
- The Google Mapping API converts the address into latitude and longitude coordinates for precise location-based data.

Real-Time Aurora Visibility Forecast
- The app calls the Auroras.live DIY API with the user’s geocode to retrieve visibility predictions specific to their location.
- Visibility data, including aurora intensity and probability of visibility, is displayed prominently, so users can quickly assess if viewing conditions are favorable.

Recommendation Output
- The app clearly states whether aurora visibility is “Good,” “Fair,” or “Poor” based on the retrieved data.
- Users are shown the estimated time windows for peak aurora visibility to help with planning.

## Interactive Aurora Viewing Map
As a user, I want to see a map of recommended viewing locations nearby, so I can find optimal spots for viewing auroras.

Location-Based Map Generation
- Once the user’s location is established, a Google Maps-powered interface displays nearby locations (e.g., parks, open spaces) suitable for aurora viewing.
- The map pinpoints the user’s current location alongside other recommended areas within a 50-mile radius, highlighting nearby parks, elevated areas, and regions with low light pollution.

Filters for Viewing Preferences
- Users can apply map filters to customize their search based on viewing conditions, such as light pollution level, elevation, or proximity.
- Clicking on a map pin provides details on each location’s suitability for aurora viewing, including distance from the user, accessibility, and ideal times based on aurora visibility data.

Mobile and Desktop Responsiveness
- The map is responsive, allowing users to interact easily on mobile and desktop devices, with zoom capabilities and seamless map navigation.

## Personal Aurora Log
As a user, I want to keep a record of my aurora sightings, so I can remember past experiences and note favorable conditions.

Adding a New Sighting Entry
- Users can add a new aurora sighting, entering details such as date, time, and location. Optional fields allow users to add notes and upload a photo.
- Each log entry is saved to the user’s profile, accessible only after user authentication with JWT.

Viewing and Editing the Aurora Log
- Users can view all recorded sightings on a dedicated “Aurora Log” page, with sorting options by date or location.
- Users can edit or delete past entries to update details or remove duplicates.

Notification for New Sightings
- The app sends an optional notification (e.g., a prompt) when new visibility data is favorable, encouraging users to check the forecast and log their next sighting if conditions are good.

## User Authentication and Data Security
As a user, I want my personal information and sighting records to be secure, so I can feel confident my data is protected.

JWT Authentication for Access Control
- Users are required to log in to access and modify their aurora log. The app uses JWT to verify authenticated sessions, ensuring only authorized users can access protected data.

Secure Environment Variable Management
- All API keys, JWT secrets, and sensitive information are stored securely in environment variables, keeping the app secure and safeguarding external API keys and user information.

Data Privacy Assurance
- User data is protected per best practices in data security, including the encryption of passwords and restriction of access to personal logs to authenticated sessions only.

## Contributing

Contributions are welcome! Feel free to open issues or submit pull requests to improve this project.

## License
This project is licensed under the MIT License.  
For more details, visit the [MIT License page](https://opensource.org/licenses/MIT).

## Tests
This section will include details of the tests we plan to implement in future iterations of this project.

## Questions?
Find me on GitHub: [EthanForrestCarr](https://github.com/EthanForrestCarr)  
For any additional questions: ethan@ethancarr.com