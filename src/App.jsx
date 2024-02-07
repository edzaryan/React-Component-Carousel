import './App.module.css';
import styles from "./App.module.css";
import Slider from "./slider/Slider";
import {useState} from "react";

const App = () => {
  const [songsList, setSongsList] = useState([
      { 
        id: "78dfd4fds4fd5a", 
        songName: "Behind Blue Eyes", 
        artistName: "The Who", 
        image: "https://i.discogs.com/kjy89KYMUEbWcukH7RVb7tg4DBrqUfu5J_1DD5eQZNY/rs:fit/g:sm/q:40/h:300/w:300/czM6Ly9kaXNjb2dz/LWRhdGFiYXNlLWlt/YWdlcy9SLTEwMDc1/MjAtMTE4MzQwMDEx/Ny5qcGVn.jpeg",
        file: ""
      },
      { 
        id: "78dfd4fds4fd5b", 
        songName: "My heart will go on", 
        artistName: "Celine Dion", 
        image: "https://static.stereogum.com/uploads/2022/05/Celine-Dion-My-Heart-Will-Go-On-1653592096.jpg",
        file: "" 
      },
      { 
        id: "78dfd4fds4fd5c", 
        songName: "Bohemian Rhapsody", 
        artistName: "Queen",
        image: "https://www.thisdayinmusic.com/wp-content/uploads/2018/07/Bohemian-Rhapsody.jpg",
        file: "" 
      },
      { 
        id: "78dfd4fds4fd5d", 
        songName: "Billie Jean", 
        artistName: "Michael Jackson", 
        image: "https://upload.wikimedia.org/wikipedia/en/5/55/Michael_Jackson_-_Thriller.png",
        file: "" 
      },
      { 
        id: "78dfd4fds4fd5e", 
        songName: "Earth song", 
        artistName: "Michael Jackson",
        image: "https://i1.sndcdn.com/artworks-000464348898-5nkwr0-t500x500.jpg",
        file: "" 
      },
      { 
        id: "78dfd4fds4fd5f", 
        songName: "Childish Gambino", 
        artistName: "Feels Like Summer", 
        image: "https://i.scdn.co/image/ab67616d0000b273602ca5b83fe44b68074a74b2",
        file: "" 
      },
      { 
        id: "78dfd4fds4fd5g", 
        songName: "Stairway to heaven", 
        artistName: "Led Zeppelin", 
        image: "https://i1.sndcdn.com/artworks-000544405986-hxdqbx-t500x500.jpg",
        file: "" 
      },
      { 
        id: "78dfd4fds4fd5h", 
        songName: "Immigrant song", 
        artistName: "Led Zeppelin", 
        image: "https://i1.sndcdn.com/artworks-FTQyHBZLd1lsuZr1-7cNZDw-t500x500.jpg",
        file: "" 
      },
      { 
        id: "78dfd4fds4fd5i", 
        songName: "Led Zeppelin", 
        artistName: "Kashmir", 
        image: "https://i1.sndcdn.com/artworks-FTQyHBZLd1lsuZr1-7cNZDw-t500x500.jpg",
        file: "" 
      },
      { 
        id: "78dfd4fds4fd5j", 
        songName: "Another brick in the wall", 
        artistName: "Pink Floyd", 
        image: "https://i1.sndcdn.com/artworks-000095031213-ohippm-t500x500.jpg",
        file: "" 
      },
      { 
        id: "78dfd4fds4fd5k", 
        songName: "Wish you were here", 
        artistName: "Pink Floyd",
        image: "https://upload.wikimedia.org/wikipedia/en/3/3b/Dark_Side_of_the_Moon.png",
        file: "" 
      },
      { 
        id: "78dfd4fds4fd5l", 
        songName: "The best", 
        artistName: "Tina Turner", 
        image: "https://i1.sndcdn.com/artworks-000045918353-wacjhj-t500x500.jpg",
        file: "" 
      },
      { 
        id: "78dfd4fds4fd5m", 
        songName: "If It’s Lovin’ That You Want", 
        artistName: "Rihanna", 
        image: "https://i1.sndcdn.com/artworks-pFNGb5n6n9iu-0-t500x500.jpg",
        file: "" 
      },
      { 
        id: "78dfd4fds4fd5n", 
        songName: "Halo", 
        artistName: "Beyoncé",
        image: "https://i1.sndcdn.com/artworks-000119693094-816xge-t500x500.jpg", 
        file: "" 
      },
      { 
        id: "78dfd4fds4fd5o", 
        songName: "Shake it off", 
        artistName: "Taylor Swift", 
        image: "https://i.guim.co.uk/img/static/sys-images/Guardian/Pix/pictures/2014/8/19/1408446727411/7c04bf8f-c9d8-4136-b479-f1e3ebcdd4b5-2060x1937.jpeg?width=700&quality=85&auto=format&fit=max&s=a77d8d5e7b7b6045f65285aa0d87407c",
        file: "" 
      },
      { 
        id: "78dfd4fds4fd5p", 
        songName: "Blank space", 
        artistName: "Taylor Swift", 
        image: "https://upload.wikimedia.org/wikipedia/en/f/f2/Taylor_Swift_-_Reputation.png",
        file: "" 
      },
      { 
        id: "78dfd4fds4fd5q", 
        songName: "Waka Waka", 
        artistName: "Shakira", 
        image: "https://upload.wikimedia.org/wikipedia/en/3/35/Shakira_-_Shakira_%282014%29.png",
        file: "" 
      },
      { 
        id: "78dfd4fds4fd5r", 
        songName: "Emotions", 
        artistName: "Mariah Carey", 
        image: "https://upload.wikimedia.org/wikipedia/en/9/9c/Merry_Christmas_II_You_Mariah_Carey.png",
        file: "" 
      },
      { 
        id: "7tyfd4fds4fd5r", 
        songName: "Wrecking Ball",
        artistName: "Miley Cyrus",
        image: "https://upload.wikimedia.org/wikipedia/en/5/52/Bangerz.png",
        file: "" 
      },
      { 
        id: "78dftyuds4fd5r", 
        songName: "Flowers",
        artistName: "Miley Cyrus",
        image: "https://upload.wikimedia.org/wikipedia/en/5/54/Miley_Cyrus_-_Endless_Summer_Vacation.png",
        file: "" 
      },
      {
          id: "784ftyuds4fd5r",
          songName: "Flowers",
          artistName: "Miley Cyrus",
          image: "https://upload.wikimedia.org/wikipedia/en/5/54/Miley_Cyrus_-_Endless_Summer_Vacation.png",
          file: ""
      },
      {
          id: "fhtftyuds4fd5r",
          songName: "Flowers",
          artistName: "Miley Cyrus",
          image: "https://upload.wikimedia.org/wikipedia/en/5/54/Miley_Cyrus_-_Endless_Summer_Vacation.png",
          file: ""
      },
  ]);

  return (
    <div className={styles.app}>
      <div className={styles.slider}>
        <Slider data={songsList} />
      </div>
    </div>
  );
}

export default App;
