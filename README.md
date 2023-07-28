# MyMusic

A fully decentralized music player for your life!

TODO: add a gif of the app

## Local Development

Requirements:

- Clone this repo and run the commands from the root folder
- The whole development was done on node `v18.17.0` specified on the .nvmrc file (`nvm use`)
- You will need `pnpm` (`npm install -g pnpm`)

After ensuring the above requirements, run from the root folder:

```sh
pnpm install
pnpm dev
```

The app will be served on http://localhost:5180

To run the unit tests, simply execute:

```sh
pnpm test
```

## Build

```sh
pnpm lint
pnpm build
```

The `/dist` is a static generated HTML React app folder, just serve it anywhere, just make sure to:

- allow redirect `/*` to the `index.html`
- edit the `VITE_SPOTIFY_REDIRECT_URI`, it should be `https://deployed-domain.com/connected-apps/spotify`

## Project Directories Structure

```sh
├── index.html          # HTML Entry point
├── public              # Public static folder
└── src
    ├── components      # React UI Components
    │   ├── connectors  # - Connectors buttons and sync status components
    │   ├── layout      # - General layout components: page layout, header, footer etc.
    │   ├── misc        # - Miscellaneous components such as theme toggler
    │   ├── playlists   # - Playlists components and the music player
    │   ├── ui          # - UI core components (mostly powered by https://ui.shadcn.com/)
    │   └── web5        # - Web5 UI components: signin and signout buttons
    │
    ├── lib             # Core libs to support the frontend application and extra utils helpers such as timers.
    │   ├── connectors  # - Connectors core lib: Connectors providers and connected apps abstractions: SpotifyConnector, etc.
    │   └── web5        # - Web5 core lib resources: useWeb5, Web5PlaylistsStore and the React Context Provider
    │
    ├── pages           # Routed pages
    ├── assets          # Assets to be imported and built in the bundle such as SVG Icons
    │
    └── tests           # Test helper functions and fixtures
```

## Future Improvements

- [ ] Handle Spotify token refresh: at the moment we are shamelessly redirecting to the `/connected-apps` page when we detect a 401 (Unauthorized) response from the API.
- [ ] Figure out a better mocking mechanism for the Web5 object with vitest
- [ ] Develop a Playlist "Management" functionality where the user can search for songs and edit playlists inside the Web5 Music App and then import these playlists to the connected apps.
- [ ] Thumbnails are being referenced from Spotify, ideally we should persist in our DWN. And probably/possibly the audio files too!
- [ ] Implement a remote DWN that will be syncing automatically the user playlists from all the connected apps that the user allowed once.
- [ ] Add support to external DID agents/wallets.
- [ ] Add more unit tests 😝
- [ ] Implement more connected apps:
  - [ ] Tidal
  - [ ] Youtube Music
  - [ ] Amazon Music
  - [ ] Apple iTunes
  - [ ] Pandora
