# Gemini Chat Bot

This project is a React application configured to run inside a Docker container. It uses Vite for development and building, and integrates the Google Generative AI (Gemini) for chat functionality. 
## Test it out !! 

[GeminiChatBotNew](https://gemini-chat-bot-new.vercel.app/)
please dont send too many requests TT 
## Why did i build this 

I built this Gemini Chat Bot integration to dive into the Gemini API, Docker and try out some cool animations. This app has AI chat features with Google Generative AI, making chats super smart and interactive. I used Vite, React, and Tailwind CSS to try out some web animations and get the hang of the Gemini API. Plus, I learned Docker to make deploying and scaling the app a breeze. It was an awesome way to level up my skills and build something really cool. 

## Prerequisites

Before you begin, ensure you have the following installed on your machine:

- [Docker](https://www.docker.com/get-started)
- [Docker Compose](https://docs.docker.com/compose/install/)

## Getting Started

Follow these steps to get the project up and running:

### Clone the Repository

First, clone the repository to your local machine:

```bash
git clone https://github.com/yashwant1810/GeminiChatBotNew.git
cd GeminiChatBotNew
```
### Create a .env File

Create a .env file, add the following and save it in the root directory of the project. Add your gemini API key instead of the placeholder. If you need help with creating a gemini API key follow the [Documentation](https://ai.google.dev/gemini-api/docs/api-key).

```bash
VITE_API_KEY=your_api_key_here
```

### Build and Run the Docker Container

Build and run the Docker container using Docker Compose:

```bash
docker-compose up --build
```
This will build the Docker image and start the container. The React application will be available at http://localhost:5173.

### Stopping the Docker Container

To stop the running container, press Ctrl+C in the terminal where docker-compose up is running, or run the following command:

```bash
docker-compose down
```

### Rebuilding the Docker Container

If you make any changes to the source code or Docker configuration, you will need to rebuild the Docker container:

```bash
docker-compose up --build
```
## Screenshots 

<img width="1440" alt="1" src="https://github.com/yashwant1810/GeminiChatBotNew/assets/94227148/841fcf94-5ac7-44d8-a4fa-b4a28b4a18f5">
<img width="1440" alt="2" src="https://github.com/yashwant1810/GeminiChatBotNew/assets/94227148/eebddd06-1507-4cce-be64-7daf1ced3049">
<img width="1440" alt="3" src="https://github.com/yashwant1810/GeminiChatBotNew/assets/94227148/bba2635d-c877-4567-bcdb-4814892bfc41">
<img width="1440" alt="4" src="https://github.com/yashwant1810/GeminiChatBotNew/assets/94227148/e9cb8b5b-ea04-4e49-a01c-f346d66c6062">

## Help

If you encounter any issues or have questions, please feel free to open an issue in the GitHub repository.

## Contributing

If you want to contribute to this project, please fork the repository and create a pull request.

## License

This project is licensed under the Apache-2.0 License - see the LICENSE file for details.




