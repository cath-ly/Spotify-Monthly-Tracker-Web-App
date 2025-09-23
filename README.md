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
![Spotify OAuth](/Images/Spotify-OAuth.PNG)

This is how our main page looks once users connect their account through Spotify's OAuth
![Nick's Webpage](/Images/webpage.png)
![Nakra's Webpage](/Images/Spotify_Profile1.png)
![Chantakrak's Webpage](/Images/Spotify-Snapshot-Chantakrak.PNG)

## Challenges
Biggest challenge I experienced in this project was integrating Typescript, Next, and React together. In this projected I wanted to write functions that were reusable and easy to factor but with TypeScript and the guidelines of React's Hook/State Rules, this became tedious pretty quickly and required guidance and constant brainstorming. Example is when the User would log in, we would need to use an async function to ensure that the data we grabbed from the user loaded first prior to the functions that would display their top categories. Initially we started with a LocalStorage method but then the issues of Tree Hydrations appeared and we would then have to brainstorm for better alternatives. These challenges help enforce my ability to rapidly research and understand modern frameworks more effectively. - Chantakrak Ath-Ly 

The most challenging part of the project was creating the initial connection between the web application and the API and navigating GET requests within the API. - Nick Wu

I relearned a lot of class content through this project. It was my first time using a developer kit as large as the Spotify API and attempting to store the data correctly in our API was exciting. I love listening to music and seeing my music tendencies. APIs can be really useful and allow us developers to create a fun collaborative project. We want to add more to the project to see how much music we listen to like add a component to see how many hours we listen to, that would be something to add further to implement. - Nakra Ath-Ly
## What did I learn
From this project, we learned a little more about the Software Development Life Cycle as we tried to mimic how a project would be done in a professional setting. We also learned more about APIs and how to incorporate them into web applications. With this project, we hope to expand on it by incorporating an extended listening history and analyzing listening habits throughout a year. We also look forward to implementing a song recommendation feature based off the user's listening trends. - Nick Wu

As I mentioned in the Challenges section, I learned about the versatility of these modern frameworks. I was able to get a deeper understanding of the code through TypeScript, further my knowledge of API integration, and understand best practices for industry standard programming. - Chantakrak Ath-Ly

The most challenging part of this project was re-integrating the Spotify API with TypeScript.I did not know how the Spotify API worked and never worked with TypeScript. I learned how the API can gather information just from the data we have stored to collect and display the most listened to artists and songs. Another challenge was Spotify's API itself since the monthly tracker is not as accurate as expected. An issue we encountered is that songs we may have listened to once still appear, even though we experimented and tried to change the results of our "most listened tracks" for the month. - Nakra Ath-Ly