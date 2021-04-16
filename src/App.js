import "./styles.css";

export default function App() {
  return (
    <div className="App">
      <h1>Music Maste</h1>
      <div>
        <input placeholder="search an artist" />
        <button>Submit</button>
      </div>
      <div className="profile">
        <div>Artis Picture</div>
        <div>Artis Name</div>
        <div class="gallery">gallery</div>
      </div>
    </div>
  );
}
