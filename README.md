# MyMusic

A fully decentralized music player for your life!

TODO: add a gif of the app

## Local Development

Clone this repo and run from the root folder:

```sh
pnpm install
pnpm dev
```

The app will be served on http://localhost:5180!

To run the unit tests, simply run:

```sh
pnpm test
```

## Deployment

```sh
pnpm lint
pnpm build
# TODO: deploying to netlify or something else, and add the link on the top of the readme
```

## Future Improvements

- [ ] Handle Spotify token refresh: at the moment we are shamelessly redirecting to the `/connected-apps` page when we detect a 401 (Unauthorized) response from the API.
- [ ] Develop a Playlist "Management" functionality where the user can search for songs and edit playlists inside the Web5 Music App and then import these playlists to the connected apps.
- [ ] Implement more connected apps:
  - [ ] Tidal
  - [ ] Youtube Music
  - [ ] Amazon Music
  - [ ] Apple iTunes
  - [ ] Pandora
