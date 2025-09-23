## Introduction
This project was made by Nakra Ath-Ly, Nick Wu, Chantakrak Ath-Ly, and Sarey Chek. This application focuses on using the Spotify API and the User's info to analyze their most listened to tracks and artists.


## Project Detail
In this project, we utilized Next.js, TailwindCSS, and Typescript to create the web application. We created a boilerplate webpage and then slowly replaced the components with the actual data extracted from the Spotify API using GET requests through fetch and then parsing the data as a JSON file. The Spotify API has a variety of different scopes, but we narrowed it down to only use the ones that extract the user's profile infromation and their listening history.

## Project Setup
Clone the repository 

Install the dependencies in the terminal using:
```bash
npm install
```

Create a file named '.env.local' in the root folder and include 

```
NEXT_PUBLIC_USER_ID=bbd6d5333456415ca8bad1bce919efad
```

To run the project, type in the terminal
```bash
npm run dev
```

## Project Process
We utilized JIRA to organize our project and evaluate our progress. Using the Agile methodology, we compiled a list of tasks to collaborate on and required a minimum of two other people to review for any changes necessary through a pull request. We would add every minute task as a JIRA task to proceed systematically and to ensure unanimous understanding before moving on to the next step.

## Project Screenshots
When user is opening the page, the page will redirect them to Spotify's OAuth page.
![Spotify OAuth](/public/image/Spotify-OAuth.PNG)

This is how our main page looks once users connect their account through Spotify's OAuth
![Nick's Webpage](/public/image/webpage.png)
![Nakra's Webpage](/public/image/Spotify_Profile1.png)
![Chantakrak's Webpage](/public/image/Spotify-Snapshot-Chantakrak.PNG)

## Challenges
Biggest challenge I experienced in this project was integrating Typescript, Next, and React together. In this projected I wanted to write functions that were reusable and easy to factor but with TypeScript and the guidelines of React's Hook/State Rules, this became tedious pretty quickly and required guidance and constant brainstorming. Example is when the User would log in, we would need to use an async function to ensure that the data we grabbed from the user loaded first prior to the functions that would display their top categories. Initially we started with a LocalStorage method but then the issues of Tree Hydrations appeared and we would then have to brainstorm for better alternatives. These challenges help enforce my ability to rapidly research and understand modern frameworks more effectively. - Chantakrak Ath-Ly 

The most challenging part of the project was creating the initial connection between the web application and the API and navigating GET requests within the API. - Nick Wu

Challenges for me was relearning to code and getting used to Typescript. Had to do research to learn and teach my self the process of using react. -Nakra Ath-Ly

## What did I learn
From this project, we learned a little more about the Software Development Life Cycle as we tried to mimic how a project would be done in a professional setting. We also learned more about APIs and how to incorporate them into web applications. With this project, we hope to expand on it by incorporating an extended listening history and analyzing listening habits throughout a year. We also look forward to implementing a song recommendation feature based off the user's listening trends. - Nick Wu

As I mentioned in the Challenges section, I learned about the versatility of these modern frameworks. I was able to get a deeper understanding of the code through TypeScript, further my knowledge of API integration, and understand best practices for industry standard programming. - Chantakrak Ath-Ly

I learned alot of information that i had to retain. I learned typescript  and gaining some API knowledge. From this project I can see how music taste changes in a monthly basis or stays the same. -Nakra Ath-Ly