import { songs } from "./songs.js";

// Song Object Factory
const song = (songArray) => {
    return {
        _chartNumber: songArray[0],
        _title: songArray[1],
        _artist: songArray[2],
        _year: songArray[3],
        get chartNumber() {
            return this._chartNumber;
        },
        get title() {
            return this._title;
        },
        get artist() {
            return this._artist;
        },
        get year() {
            return this._year;
        },
        youtubeURL() {
            let query = this.title.replaceAll(' ', '+') + '+' + this.artist.replaceAll(' ', '+');
            return `https://www.youtube.com/results?search_query=${query}`;
        }
    };
}

// Function to read songs.csv and parse as an array
function parseSongs() {
    let arrayOfSongs = [];
    for (let s of songs) {
        arrayOfSongs.push(song(s));
    }
    return arrayOfSongs;
}

// Random Song of the day generator
const generateRandomSongOfTheDay = arrayOfSongs => {
    let n = arrayOfSongs.length;
    let choice = Math.floor(Math.random() * n);
    let song = arrayOfSongs[choice];
    console.log(`Today\'s song of the day was the #${song.chartNumber} song of the year ${song.year}. You can listen to ${song.title} by ${song.artist} at ${song.youtubeURL()}`);
}

// Generate the Random song of the Day from the list of songs
let arrayOfSongs = parseSongs();
generateRandomSongOfTheDay(arrayOfSongs);