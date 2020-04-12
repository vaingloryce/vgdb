# Vainglory Database Project
This is a project that makes possible to the players of Vainglory Community Edition version of the game to see the server's heroes statuses and changelogs of new patch notes. It will includes heroes list and heroes statuses and also heroes skills and all of its attributes containing the real values for every attribute.

# Instructions

## Database setup
You need first of all to install `postgresql` on your machine and create a database named `vgdb`.

After that, go to config folder and check the development configurations and change if needed.

Doing that you should be able to run the application and itself will connect to the postgresql database using the sequelize orm that is already configured.

## Back-end
To run the api server just navigate to the api folder and run `npm start`.
