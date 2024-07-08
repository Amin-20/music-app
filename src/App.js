import React from 'react';
import { Provider } from 'react-redux';
import store from './redux/store';
import MusicUpload from './components/MusicUpload';
import MusicDownload from './components/MusicDownload';
import FavoriteList from './components/FavoriteList';
import PlaylistCustomization from './components/PlaylistCustomization';
import UserPhotoUpload from './components/UserPhotoUpload';

const App = () => {
  return (
    <Provider store={store}>
      <div>
        <h1>Music App</h1>
        <MusicUpload />
        <MusicDownload />
        <FavoriteList />
        <PlaylistCustomization />
        <UserPhotoUpload />
      </div>
    </Provider>
  );
};

export default App;
