export const ADD_FAVORITE = 'ADD_FAVORITE';
export const REMOVE_FAVORITE = 'REMOVE_FAVORITE';

export const addFavorite = (music) => ({
  type: ADD_FAVORITE,
  payload: music,
});

export const removeFavorite = (musicId) => ({
  type: REMOVE_FAVORITE,
  payload: musicId,
});
