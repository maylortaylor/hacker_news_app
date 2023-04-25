# Hacker News API app

This app is a .NETCore (7.0) C# application on the backend that uses server-side caching, pagination, better response models, unit tests, and has a Angular 15 front-end application.


# Getting Started
Install the following:

 - [Download .NET (Linux, macOS, and Windows) (microsoft.com)](https://dotnet.microsoft.com/en-us/download)
 - [Angular - CLI Overview and Command Reference](https://angular.io/cli)
 - [Downloading and installing Node.js and npm | npm Docs (npmjs.com)](https://docs.npmjs.com/downloading-and-installing-node-js-and-npm)

Go to the **hacker-news-app/ClientApp** folder and run 

    npm install
    
This project is setup with a **.vscode** folder with the proper **launch.json** file. So once you have installed all the items above and run the **npm install** command, you should be able to press **F5** to launch the app.

If that doesn't work, then you make sure you are in the **/hacker-news-app** folder and run

    dotnet run
    
This should start the .NET application. You could then go to 

    http://localhost:5173

and the SPA should start loading.
 
