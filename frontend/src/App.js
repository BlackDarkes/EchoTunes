import React from "react";
import "./style/App.scss";
import EchoTunes from "./Pages/EchoTunesPage/EchoTunes";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import PlaylistPage from "./Pages/PlayListPage/Playlist";
import PlaylistMusic from "./Pages/PlaylistMusic/PlaylistMusic";
import MusicBar from "./Components/MusicBar/MusicBar";
import MusicProvider from "./Contents/MusicsContents";
import PlaylistProvider from "./Contents/AddPlaylistContext";
import PageNotFound from "./Pages/PageNotFound/PageNotFoun";

const router = createBrowserRouter([
  {
    path: "/",
    element: <EchoTunes/>
  },
  {
    path: "/playlists",
    element: <PlaylistPage/>
  },
  {
    path: "/playlists/music/:index",
    element: <PlaylistMusic/>
  },
  {
    path: "*",
    element: <PageNotFound/>
  }
], {
  future: {
    v7_startTransition: true,
    v7_relativeSplatPath: true,
    v7_fetcherPersist: true,
    v7_normalizeFormMethod: true,
    v7_partialHydration: true,
    v7_skipActionErrorRevalidation: true,
  }
});

function App() {
  return (
      <MusicProvider>
        <PlaylistProvider>
          <div className="App">
            <RouterProvider router={router}/>
            <MusicBar/>
          </div>
        </PlaylistProvider>
      </MusicProvider>
  );
}

export default App;
