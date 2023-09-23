import { appData } from './modules/data.mjs'
temp_token = "BQAE0D-PS2ajI9ZQZ84GW7CypG-lhGY3s1xBMBCbImS-LPUCrooNmAa8wMx29AydmNUo4UUP47_fjUlo2uaXy2JjZztekJgjPMA3UcoohpZgyYJuC4EBeE0bqfV8hCLkTDmwGH0-RYW3HagBfK6-PAklSwIkCqYWczJ9FMsdLRKoBV14qSVROGI"

window.onSpotifyWebPlaybackSDKReady = () => {
  const token = temp_token; //! TEMPORARY TOKEN!!!
  const player = new Spotify.Player({
    name: appData.app_name,
    getOAuthToken: cb => { cb(token); },
    volume: 0.5
  });
  
  // Ready
  player.addListener('ready', ({ device_id }) => {
    console.log('Ready with Device ID', device_id);
  });
  
  // Not Ready
  player.addListener('not_ready', ({ device_id }) => {
    console.log('Device ID has gone offline', device_id);
  });
  
  player.addListener('initialization_error', ({ message }) => {
    console.error(message);
  });
  
  player.addListener('authentication_error', ({ message }) => {
    console.error(message);
  });
  
  player.addListener('account_error', ({ message }) => {
    console.error(message);
  });
  
  document.getElementById('togglePlay').onclick = function() {
    // TODO Add custom logic here
    player.togglePlay();
  };
  
  player.connect();
}