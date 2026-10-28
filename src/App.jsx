import React, { useEffect, useState } from "react";
import { Route, Routes } from "react-router-dom";
import Navbar from "./components/Navbar/Navbar";
import Hero from "./components/Hero/Hero";
import Section from "./components/Section/Section";
import {
  fetchGenres,
  fetchNewAlbums,
  fetchSongs,
  fetchTopAlbums,
} from "./api/api";

function App() {
  const [topAlbums, setTopAlbums] = useState([]);
  const [newAlbums, setNewAlbums] = useState([]);
  const [songs, setSongs] = useState([]);
  const [genres, setGenres] = useState([]);

  useEffect(() => {
    const load = async (fetcher, setter) => {
      try {
        setter(await fetcher());
      } catch (e) {
        console.error(e);
      }
    };
    load(fetchTopAlbums, setTopAlbums);
    load(fetchNewAlbums, setNewAlbums);
    load(fetchSongs, setSongs);
    load(fetchGenres, setGenres);
  }, []);

  const home = (
    <main>
      <Hero />
      <Section title="Top Albums" data={topAlbums} type="album" />
      <Section title="New Albums" data={newAlbums} type="album" />
      <Section title="Songs" data={songs} type="song" filters={genres} />
    </main>
  );

  return (
    <>
      <Navbar searchData={[...topAlbums, ...newAlbums]} />
      <Routes>
        <Route path="*" element={home} />
      </Routes>
    </>
  );
}

export default App;
