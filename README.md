# Song of the Day

This is a Codecademy Group project named Mixed Messages in the Full-Stack Engineer Career Path.

## Prompt

For this project, you will build a message generator program. Every time a user runs a program, they should get a new, randomized output. To make your program truly random, the message that it outputs should be made up of at least three different pieces of data. Take what you know of JavaScript syntax so far to build the program and customize it to your liking.

## Steps

1. Plan your project
    + I'll have a list of over 100 different songs.
    + Each time the program is run, a new song will be offered to the user.

2. Come Up with a Topic
    + The program will output a song title and artist, and a link to a youtube search with that information.
    + Songs consist of the top 10 of the Billboard 100 hits from each year from 2000-2019.
    + These songs can be found in songs.js

3. Create script and run it locally
    + Script will be called main.js.

4. Set up version control
    + A git repository has been made and put on github.

5. Store message components
    + Message components are being stored in a js file called songs.js.

6. Create the message
    + An object factory to turn a song array into a song object, with getters for each key in the object, and a method to make the url for the youtube search
    + A method to read the array from songs.js and parse it into song objects
    + A method to randomly pick a song object and log the object's details

7. Put the program together
    + 3 functions found in main.js
    + 1 array found in songs.js
