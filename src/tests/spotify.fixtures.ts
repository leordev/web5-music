import { Playlist } from '../lib/web5/interfaces';

export const EXPECTED_WEB5_PARSED_PLAYLISTS_DATA: Playlist[] = [
  {
    name: 'popmix',
    image:
      'https://mosaic.scdn.co/640/ab67616d0000b2732ff34dbc50313f8cea7b5db5ab67616d0000b27360624c0781fd787c9aa4699cab67616d0000b273670b273f6affc975083b4f7bab67616d0000b273693dbf001d5b2d06ad9e5f4d',
    externalAppsIds: {
      spotify: '2gl1Oud3Y8RC34Dl9actA4',
    },
    songs: [
      {
        name: 'Numb',
        durationMs: 155588,
        externalIds: {
          isrc: 'USRC12202117',
        },
        externalAppsIds: {
          spotify: '10xV5l9nhLvFpR8mqzs0bL',
        },
        album: {
          name: 'Numb',
          releaseDate: '2022-06-10',
          releaseDatePrecision: 'day',
          externalAppsIds: {
            spotify: '3SBeYxkc3Ce7lanK0f3epk',
          },
          externalIds: undefined,
        },
        artists: [
          {
            name: 'Marshmello',
            externalAppsIds: {
              spotify: '64KEffDW9EtZ1y2vBYgq8T',
            },
            image: undefined,
          },
          {
            name: 'Khalid',
            externalAppsIds: {
              spotify: '6LuN9FCkKOj5PcnpouEgny',
            },
            image: undefined,
          },
        ],
      },
      {
        name: 'Eastside (with Halsey & Khalid)',
        durationMs: 170769,
        externalIds: {
          isrc: 'USUM71809132',
        },
        externalAppsIds: {
          spotify: '7FGq80cy8juXBCD2nrqdWU',
        },
        album: {
          name: 'FRIENDS KEEP SECRETS',
          releaseDate: '2018-12-07',
          releaseDatePrecision: 'day',
          externalAppsIds: {
            spotify: '7dQ734EW0iLvQfF6vBFNiZ',
          },
          externalIds: undefined,
        },
        artists: [
          {
            name: 'benny blanco',
            externalAppsIds: {
              spotify: '5CiGnKThu5ctn9pBxv7DGa',
            },
            image: undefined,
          },
          {
            name: 'Halsey',
            externalAppsIds: {
              spotify: '26VFTg2z8YR0cCuwLzESi2',
            },
            image: undefined,
          },
          {
            name: 'Khalid',
            externalAppsIds: {
              spotify: '6LuN9FCkKOj5PcnpouEgny',
            },
            image: undefined,
          },
        ],
      },
      {
        name: 'Better',
        durationMs: 229320,
        externalIds: {
          isrc: 'USRC11803180',
        },
        externalAppsIds: {
          spotify: '6zeeWid2sgw4lap2jV61PZ',
        },
        album: {
          name: 'Suncity',
          releaseDate: '2018-10-18',
          releaseDatePrecision: 'day',
          externalAppsIds: {
            spotify: '2Qxc2NJ7yPKVFRWi3llRr2',
          },
          externalIds: undefined,
        },
        artists: [
          {
            name: 'Khalid',
            externalAppsIds: {
              spotify: '6LuN9FCkKOj5PcnpouEgny',
            },
            image: undefined,
          },
        ],
      },
    ],
  },
  {
    name: 'cool-beans',
    image:
      'https://mosaic.scdn.co/640/ab67616d0000b27331aafa752187cb0284307200ab67616d0000b2736ca5c90113b30c3c43ffb8f4ab67616d0000b273d3acd0f2186daa8e4cb0f65bab67616d0000b273fec1b815bb3c50a64a90fd10',
    externalAppsIds: {
      spotify: '62Hmn5MAuQVW88qeXjMvQV',
    },
    songs: [
      {
        name: 'Numb / Encore',
        durationMs: 205280,
        externalIds: {
          isrc: 'USWB10403681',
        },
        externalAppsIds: {
          spotify: '7dyluIqv7QYVTXXZiMWPHW',
        },
        album: {
          name: 'Collision Course (Deluxe Version)',
          releaseDate: '2004-11-30',
          releaseDatePrecision: 'day',
          externalAppsIds: {
            spotify: '5NH94cATqx5fjBE794xZLy',
          },
          externalIds: undefined,
        },
        artists: [
          {
            name: 'JAY-Z',
            externalAppsIds: {
              spotify: '3nFkdlSjzX9mRTtwJOzDYB',
            },
            image: undefined,
          },
          {
            name: 'Linkin Park',
            externalAppsIds: {
              spotify: '6XyY86QOPPrYVGvF9ch6wz',
            },
            image: undefined,
          },
        ],
      },
      {
        name: 'Empire State Of Mind',
        durationMs: 276920,
        externalIds: {
          isrc: 'USJZ10900031',
        },
        externalAppsIds: {
          spotify: '2igwFfvr1OAGX9SKDCPBwO',
        },
        album: {
          name: 'The Blueprint 3',
          releaseDate: '2009-09-08',
          releaseDatePrecision: 'day',
          externalAppsIds: {
            spotify: '2CUT0104gySOIvqwtXeFsX',
          },
          externalIds: undefined,
        },
        artists: [
          {
            name: 'JAY-Z',
            externalAppsIds: {
              spotify: '3nFkdlSjzX9mRTtwJOzDYB',
            },
            image: undefined,
          },
          {
            name: 'Alicia Keys',
            externalAppsIds: {
              spotify: '3DiDSECUqqY1AuBP8qtaIa',
            },
            image: undefined,
          },
        ],
      },
    ],
  },
];

export const RESPONSE_CURRENT_USER_PLAYLISTS = {
  href: 'https://api.spotify.com/v1/users/31sw5th3cg7addeftjqj27tvckum/playlists?offset=0&limit=20',
  items: [
    {
      collaborative: false,
      description: '',
      external_urls: {
        spotify: 'https://open.spotify.com/playlist/2gl1Oud3Y8RC34Dl9actA4',
      },
      href: 'https://api.spotify.com/v1/playlists/2gl1Oud3Y8RC34Dl9actA4',
      id: '2gl1Oud3Y8RC34Dl9actA4',
      images: [
        {
          height: 640,
          url: 'https://mosaic.scdn.co/640/ab67616d0000b2732ff34dbc50313f8cea7b5db5ab67616d0000b27360624c0781fd787c9aa4699cab67616d0000b273670b273f6affc975083b4f7bab67616d0000b273693dbf001d5b2d06ad9e5f4d',
          width: 640,
        },
        {
          height: 300,
          url: 'https://mosaic.scdn.co/300/ab67616d0000b2732ff34dbc50313f8cea7b5db5ab67616d0000b27360624c0781fd787c9aa4699cab67616d0000b273670b273f6affc975083b4f7bab67616d0000b273693dbf001d5b2d06ad9e5f4d',
          width: 300,
        },
        {
          height: 60,
          url: 'https://mosaic.scdn.co/60/ab67616d0000b2732ff34dbc50313f8cea7b5db5ab67616d0000b27360624c0781fd787c9aa4699cab67616d0000b273670b273f6affc975083b4f7bab67616d0000b273693dbf001d5b2d06ad9e5f4d',
          width: 60,
        },
      ],
      name: 'popmix',

      primary_color: null,
      public: true,
      snapshot_id:
        'MjAsNmY0MWFhMGZiMzc1NDlmMWMzZWNiODRlNTk3NTA4YmYwYjNkMTk3Yw==',
      tracks: {
        href: 'https://api.spotify.com/v1/playlists/2gl1Oud3Y8RC34Dl9actA4/tracks',
        total: 16,
      },
      type: 'playlist',
      uri: 'spotify:playlist:2gl1Oud3Y8RC34Dl9actA4',
    },
    {
      collaborative: false,
      description: '',
      external_urls: {
        spotify: 'https://open.spotify.com/playlist/62Hmn5MAuQVW88qeXjMvQV',
      },
      href: 'https://api.spotify.com/v1/playlists/62Hmn5MAuQVW88qeXjMvQV',
      id: '62Hmn5MAuQVW88qeXjMvQV',
      images: [
        {
          height: 640,
          url: 'https://mosaic.scdn.co/640/ab67616d0000b27331aafa752187cb0284307200ab67616d0000b2736ca5c90113b30c3c43ffb8f4ab67616d0000b273d3acd0f2186daa8e4cb0f65bab67616d0000b273fec1b815bb3c50a64a90fd10',
          width: 640,
        },
        {
          height: 300,
          url: 'https://mosaic.scdn.co/300/ab67616d0000b27331aafa752187cb0284307200ab67616d0000b2736ca5c90113b30c3c43ffb8f4ab67616d0000b273d3acd0f2186daa8e4cb0f65bab67616d0000b273fec1b815bb3c50a64a90fd10',
          width: 300,
        },
        {
          height: 60,
          url: 'https://mosaic.scdn.co/60/ab67616d0000b27331aafa752187cb0284307200ab67616d0000b2736ca5c90113b30c3c43ffb8f4ab67616d0000b273d3acd0f2186daa8e4cb0f65bab67616d0000b273fec1b815bb3c50a64a90fd10',
          width: 60,
        },
      ],
      name: 'cool-beans',
      primary_color: null,
      public: true,
      snapshot_id:
        'MjAsMTBhM2ZiOWEwNjJjNTQ1NjFjNTViYzBiYjU5YzlkZGU2NmM2YTI3Ng==',
      tracks: {
        href: 'https://api.spotify.com/v1/playlists/62Hmn5MAuQVW88qeXjMvQV/tracks',
        total: 18,
      },
      type: 'playlist',
      uri: 'spotify:playlist:62Hmn5MAuQVW88qeXjMvQV',
    },
  ],
  limit: 20,
  next: null,
  offset: 0,
  previous: null,
  total: 3,
};

export const RESPONSE_PLAYLIST_POPMIX = {
  collaborative: false,
  description: '',
  external_urls: {
    spotify: 'https://open.spotify.com/playlist/2gl1Oud3Y8RC34Dl9actA4',
  },
  followers: {
    href: null,
    total: 0,
  },
  href: 'https://api.spotify.com/v1/playlists/2gl1Oud3Y8RC34Dl9actA4',
  id: '2gl1Oud3Y8RC34Dl9actA4',
  images: [
    {
      height: 640,
      url: 'https://mosaic.scdn.co/640/ab67616d0000b2732ff34dbc50313f8cea7b5db5ab67616d0000b27360624c0781fd787c9aa4699cab67616d0000b273670b273f6affc975083b4f7bab67616d0000b273693dbf001d5b2d06ad9e5f4d',
      width: 640,
    },
    {
      height: 300,
      url: 'https://mosaic.scdn.co/300/ab67616d0000b2732ff34dbc50313f8cea7b5db5ab67616d0000b27360624c0781fd787c9aa4699cab67616d0000b273670b273f6affc975083b4f7bab67616d0000b273693dbf001d5b2d06ad9e5f4d',
      width: 300,
    },
    {
      height: 60,
      url: 'https://mosaic.scdn.co/60/ab67616d0000b2732ff34dbc50313f8cea7b5db5ab67616d0000b27360624c0781fd787c9aa4699cab67616d0000b273670b273f6affc975083b4f7bab67616d0000b273693dbf001d5b2d06ad9e5f4d',
      width: 60,
    },
  ],
  name: 'popmix',

  primary_color: null,
  public: true,
  snapshot_id: 'MjAsNmY0MWFhMGZiMzc1NDlmMWMzZWNiODRlNTk3NTA4YmYwYjNkMTk3Yw==',
  tracks: {
    href: 'https://api.spotify.com/v1/playlists/2gl1Oud3Y8RC34Dl9actA4/tracks?offset=0&limit=100&locale=en-US,en;q=0.9',
    items: [
      {
        added_at: '2023-07-27T00:37:01Z',
        added_by: {
          external_urls: {
            spotify:
              'https://open.spotify.com/user/31sw5th3cg7addeftjqj27tvckum',
          },
          href: 'https://api.spotify.com/v1/users/31sw5th3cg7addeftjqj27tvckum',
          id: '31sw5th3cg7addeftjqj27tvckum',
          type: 'user',
          uri: 'spotify:user:31sw5th3cg7addeftjqj27tvckum',
        },
        is_local: false,
        primary_color: null,
        track: {
          album: {
            album_type: 'single',
            artists: [
              {
                external_urls: {
                  spotify:
                    'https://open.spotify.com/artist/64KEffDW9EtZ1y2vBYgq8T',
                },
                href: 'https://api.spotify.com/v1/artists/64KEffDW9EtZ1y2vBYgq8T',
                id: '64KEffDW9EtZ1y2vBYgq8T',
                name: 'Marshmello',
                type: 'artist',
                uri: 'spotify:artist:64KEffDW9EtZ1y2vBYgq8T',
              },
              {
                external_urls: {
                  spotify:
                    'https://open.spotify.com/artist/6LuN9FCkKOj5PcnpouEgny',
                },
                href: 'https://api.spotify.com/v1/artists/6LuN9FCkKOj5PcnpouEgny',
                id: '6LuN9FCkKOj5PcnpouEgny',
                name: 'Khalid',
                type: 'artist',
                uri: 'spotify:artist:6LuN9FCkKOj5PcnpouEgny',
              },
            ],
            available_markets: ['US', 'FR'],
            external_urls: {
              spotify: 'https://open.spotify.com/album/3SBeYxkc3Ce7lanK0f3epk',
            },
            href: 'https://api.spotify.com/v1/albums/3SBeYxkc3Ce7lanK0f3epk',
            id: '3SBeYxkc3Ce7lanK0f3epk',
            images: [
              {
                height: 640,
                url: 'https://i.scdn.co/image/ab67616d0000b2732ff34dbc50313f8cea7b5db5',
                width: 640,
              },
              {
                height: 300,
                url: 'https://i.scdn.co/image/ab67616d00001e022ff34dbc50313f8cea7b5db5',
                width: 300,
              },
              {
                height: 64,
                url: 'https://i.scdn.co/image/ab67616d000048512ff34dbc50313f8cea7b5db5',
                width: 64,
              },
            ],
            name: 'Numb',
            release_date: '2022-06-10',
            release_date_precision: 'day',
            total_tracks: 1,
            type: 'album',
            uri: 'spotify:album:3SBeYxkc3Ce7lanK0f3epk',
          },
          artists: [
            {
              external_urls: {
                spotify:
                  'https://open.spotify.com/artist/64KEffDW9EtZ1y2vBYgq8T',
              },
              href: 'https://api.spotify.com/v1/artists/64KEffDW9EtZ1y2vBYgq8T',
              id: '64KEffDW9EtZ1y2vBYgq8T',
              name: 'Marshmello',
              type: 'artist',
              uri: 'spotify:artist:64KEffDW9EtZ1y2vBYgq8T',
            },
            {
              external_urls: {
                spotify:
                  'https://open.spotify.com/artist/6LuN9FCkKOj5PcnpouEgny',
              },
              href: 'https://api.spotify.com/v1/artists/6LuN9FCkKOj5PcnpouEgny',
              id: '6LuN9FCkKOj5PcnpouEgny',
              name: 'Khalid',
              type: 'artist',
              uri: 'spotify:artist:6LuN9FCkKOj5PcnpouEgny',
            },
          ],
          available_markets: ['US', 'FR'],
          disc_number: 1,
          duration_ms: 155588,
          episode: false,
          explicit: false,
          external_ids: {
            isrc: 'USRC12202117',
          },
          external_urls: {
            spotify: 'https://open.spotify.com/track/10xV5l9nhLvFpR8mqzs0bL',
          },
          href: 'https://api.spotify.com/v1/tracks/10xV5l9nhLvFpR8mqzs0bL',
          id: '10xV5l9nhLvFpR8mqzs0bL',
          is_local: false,
          name: 'Numb',
          popularity: 84,
          preview_url:
            'https://p.scdn.co/mp3-preview/6e5fe36b5436d7e0355114f954f19b557cd81058?cid=6465b41667d6478d866deee9ac953f07',
          track: true,
          track_number: 1,
          type: 'track',
          uri: 'spotify:track:10xV5l9nhLvFpR8mqzs0bL',
        },
        video_thumbnail: {
          url: null,
        },
      },
      {
        added_at: '2023-07-27T00:37:25Z',
        added_by: {
          external_urls: {
            spotify:
              'https://open.spotify.com/user/31sw5th3cg7addeftjqj27tvckum',
          },
          href: 'https://api.spotify.com/v1/users/31sw5th3cg7addeftjqj27tvckum',
          id: '31sw5th3cg7addeftjqj27tvckum',
          type: 'user',
          uri: 'spotify:user:31sw5th3cg7addeftjqj27tvckum',
        },
        is_local: false,
        primary_color: null,
        track: {
          album: {
            album_type: 'album',
            artists: [
              {
                external_urls: {
                  spotify:
                    'https://open.spotify.com/artist/5CiGnKThu5ctn9pBxv7DGa',
                },
                href: 'https://api.spotify.com/v1/artists/5CiGnKThu5ctn9pBxv7DGa',
                id: '5CiGnKThu5ctn9pBxv7DGa',
                name: 'benny blanco',
                type: 'artist',
                uri: 'spotify:artist:5CiGnKThu5ctn9pBxv7DGa',
              },
            ],
            available_markets: ['US', 'FR'],
            external_urls: {
              spotify: 'https://open.spotify.com/album/7dQ734EW0iLvQfF6vBFNiZ',
            },
            href: 'https://api.spotify.com/v1/albums/7dQ734EW0iLvQfF6vBFNiZ',
            id: '7dQ734EW0iLvQfF6vBFNiZ',
            images: [
              {
                height: 640,
                url: 'https://i.scdn.co/image/ab67616d0000b273693dbf001d5b2d06ad9e5f4d',
                width: 640,
              },
              {
                height: 300,
                url: 'https://i.scdn.co/image/ab67616d00001e02693dbf001d5b2d06ad9e5f4d',
                width: 300,
              },
              {
                height: 64,
                url: 'https://i.scdn.co/image/ab67616d00004851693dbf001d5b2d06ad9e5f4d',
                width: 64,
              },
            ],
            name: 'FRIENDS KEEP SECRETS',
            release_date: '2018-12-07',
            release_date_precision: 'day',
            total_tracks: 7,
            type: 'album',
            uri: 'spotify:album:7dQ734EW0iLvQfF6vBFNiZ',
          },
          artists: [
            {
              external_urls: {
                spotify:
                  'https://open.spotify.com/artist/5CiGnKThu5ctn9pBxv7DGa',
              },
              href: 'https://api.spotify.com/v1/artists/5CiGnKThu5ctn9pBxv7DGa',
              id: '5CiGnKThu5ctn9pBxv7DGa',
              name: 'benny blanco',
              type: 'artist',
              uri: 'spotify:artist:5CiGnKThu5ctn9pBxv7DGa',
            },
            {
              external_urls: {
                spotify:
                  'https://open.spotify.com/artist/26VFTg2z8YR0cCuwLzESi2',
              },
              href: 'https://api.spotify.com/v1/artists/26VFTg2z8YR0cCuwLzESi2',
              id: '26VFTg2z8YR0cCuwLzESi2',
              name: 'Halsey',
              type: 'artist',
              uri: 'spotify:artist:26VFTg2z8YR0cCuwLzESi2',
            },
            {
              external_urls: {
                spotify:
                  'https://open.spotify.com/artist/6LuN9FCkKOj5PcnpouEgny',
              },
              href: 'https://api.spotify.com/v1/artists/6LuN9FCkKOj5PcnpouEgny',
              id: '6LuN9FCkKOj5PcnpouEgny',
              name: 'Khalid',
              type: 'artist',
              uri: 'spotify:artist:6LuN9FCkKOj5PcnpouEgny',
            },
          ],
          available_markets: ['US', 'FR'],
          disc_number: 1,
          duration_ms: 170769,
          episode: false,
          explicit: false,
          external_ids: {
            isrc: 'USUM71809132',
          },
          external_urls: {
            spotify: 'https://open.spotify.com/track/7FGq80cy8juXBCD2nrqdWU',
          },
          href: 'https://api.spotify.com/v1/tracks/7FGq80cy8juXBCD2nrqdWU',
          id: '7FGq80cy8juXBCD2nrqdWU',
          is_local: false,
          name: 'Eastside (with Halsey & Khalid)',
          popularity: 82,
          preview_url: null,
          track: true,
          track_number: 1,
          type: 'track',
          uri: 'spotify:track:7FGq80cy8juXBCD2nrqdWU',
        },
        video_thumbnail: {
          url: null,
        },
      },
      {
        added_at: '2023-07-27T00:37:37Z',
        added_by: {
          external_urls: {
            spotify:
              'https://open.spotify.com/user/31sw5th3cg7addeftjqj27tvckum',
          },
          href: 'https://api.spotify.com/v1/users/31sw5th3cg7addeftjqj27tvckum',
          id: '31sw5th3cg7addeftjqj27tvckum',
          type: 'user',
          uri: 'spotify:user:31sw5th3cg7addeftjqj27tvckum',
        },
        is_local: false,
        primary_color: null,
        track: {
          album: {
            album_type: 'album',
            artists: [
              {
                external_urls: {
                  spotify:
                    'https://open.spotify.com/artist/6LuN9FCkKOj5PcnpouEgny',
                },
                href: 'https://api.spotify.com/v1/artists/6LuN9FCkKOj5PcnpouEgny',
                id: '6LuN9FCkKOj5PcnpouEgny',
                name: 'Khalid',
                type: 'artist',
                uri: 'spotify:artist:6LuN9FCkKOj5PcnpouEgny',
              },
            ],
            available_markets: ['US', 'FR'],
            external_urls: {
              spotify: 'https://open.spotify.com/album/2Qxc2NJ7yPKVFRWi3llRr2',
            },
            href: 'https://api.spotify.com/v1/albums/2Qxc2NJ7yPKVFRWi3llRr2',
            id: '2Qxc2NJ7yPKVFRWi3llRr2',
            images: [
              {
                height: 640,
                url: 'https://i.scdn.co/image/ab67616d0000b27360624c0781fd787c9aa4699c',
                width: 640,
              },
              {
                height: 300,
                url: 'https://i.scdn.co/image/ab67616d00001e0260624c0781fd787c9aa4699c',
                width: 300,
              },
              {
                height: 64,
                url: 'https://i.scdn.co/image/ab67616d0000485160624c0781fd787c9aa4699c',
                width: 64,
              },
            ],
            name: 'Suncity',
            release_date: '2018-10-18',
            release_date_precision: 'day',
            total_tracks: 7,
            type: 'album',
            uri: 'spotify:album:2Qxc2NJ7yPKVFRWi3llRr2',
          },
          artists: [
            {
              external_urls: {
                spotify:
                  'https://open.spotify.com/artist/6LuN9FCkKOj5PcnpouEgny',
              },
              href: 'https://api.spotify.com/v1/artists/6LuN9FCkKOj5PcnpouEgny',
              id: '6LuN9FCkKOj5PcnpouEgny',
              name: 'Khalid',
              type: 'artist',
              uri: 'spotify:artist:6LuN9FCkKOj5PcnpouEgny',
            },
          ],
          available_markets: ['US', 'FR'],
          disc_number: 1,
          duration_ms: 229320,
          episode: false,
          explicit: false,
          external_ids: {
            isrc: 'USRC11803180',
          },
          external_urls: {
            spotify: 'https://open.spotify.com/track/6zeeWid2sgw4lap2jV61PZ',
          },
          href: 'https://api.spotify.com/v1/tracks/6zeeWid2sgw4lap2jV61PZ',
          id: '6zeeWid2sgw4lap2jV61PZ',
          is_local: false,
          name: 'Better',
          popularity: 81,
          preview_url:
            'https://p.scdn.co/mp3-preview/6b6525c0274fd023581cfc6f0c486ecfc23de9ee?cid=6465b41667d6478d866deee9ac953f07',
          track: true,
          track_number: 6,
          type: 'track',
          uri: 'spotify:track:6zeeWid2sgw4lap2jV61PZ',
        },
        video_thumbnail: {
          url: null,
        },
      },
    ],
    limit: 100,
    next: null,
    offset: 0,
    previous: null,
    total: 16,
  },
  type: 'playlist',
  uri: 'spotify:playlist:2gl1Oud3Y8RC34Dl9actA4',
};

export const RESPONSE_PLAYLIST_COOLBEANS = {
  collaborative: false,
  description: '',
  external_urls: {
    spotify: 'https://open.spotify.com/playlist/62Hmn5MAuQVW88qeXjMvQV',
  },
  followers: {
    href: null,
    total: 0,
  },
  href: 'https://api.spotify.com/v1/playlists/62Hmn5MAuQVW88qeXjMvQV',
  id: '62Hmn5MAuQVW88qeXjMvQV',
  images: [
    {
      height: 640,
      url: 'https://mosaic.scdn.co/640/ab67616d0000b27331aafa752187cb0284307200ab67616d0000b2736ca5c90113b30c3c43ffb8f4ab67616d0000b273d3acd0f2186daa8e4cb0f65bab67616d0000b273fec1b815bb3c50a64a90fd10',
      width: 640,
    },
    {
      height: 300,
      url: 'https://mosaic.scdn.co/300/ab67616d0000b27331aafa752187cb0284307200ab67616d0000b2736ca5c90113b30c3c43ffb8f4ab67616d0000b273d3acd0f2186daa8e4cb0f65bab67616d0000b273fec1b815bb3c50a64a90fd10',
      width: 300,
    },
    {
      height: 60,
      url: 'https://mosaic.scdn.co/60/ab67616d0000b27331aafa752187cb0284307200ab67616d0000b2736ca5c90113b30c3c43ffb8f4ab67616d0000b273d3acd0f2186daa8e4cb0f65bab67616d0000b273fec1b815bb3c50a64a90fd10',
      width: 60,
    },
  ],
  name: 'cool-beans',

  primary_color: null,
  public: true,
  snapshot_id: 'MjAsMTBhM2ZiOWEwNjJjNTQ1NjFjNTViYzBiYjU5YzlkZGU2NmM2YTI3Ng==',
  tracks: {
    href: 'https://api.spotify.com/v1/playlists/62Hmn5MAuQVW88qeXjMvQV/tracks?offset=0&limit=100&locale=en-US,en;q=0.9',
    items: [
      {
        added_at: '2023-07-27T00:32:11Z',
        added_by: {
          external_urls: {
            spotify:
              'https://open.spotify.com/user/31sw5th3cg7addeftjqj27tvckum',
          },
          href: 'https://api.spotify.com/v1/users/31sw5th3cg7addeftjqj27tvckum',
          id: '31sw5th3cg7addeftjqj27tvckum',
          type: 'user',
          uri: 'spotify:user:31sw5th3cg7addeftjqj27tvckum',
        },
        is_local: false,
        primary_color: null,
        track: {
          album: {
            album_type: 'single',
            artists: [
              {
                external_urls: {
                  spotify:
                    'https://open.spotify.com/artist/3nFkdlSjzX9mRTtwJOzDYB',
                },
                href: 'https://api.spotify.com/v1/artists/3nFkdlSjzX9mRTtwJOzDYB',
                id: '3nFkdlSjzX9mRTtwJOzDYB',
                name: 'JAY-Z',
                type: 'artist',
                uri: 'spotify:artist:3nFkdlSjzX9mRTtwJOzDYB',
              },
              {
                external_urls: {
                  spotify:
                    'https://open.spotify.com/artist/6XyY86QOPPrYVGvF9ch6wz',
                },
                href: 'https://api.spotify.com/v1/artists/6XyY86QOPPrYVGvF9ch6wz',
                id: '6XyY86QOPPrYVGvF9ch6wz',
                name: 'Linkin Park',
                type: 'artist',
                uri: 'spotify:artist:6XyY86QOPPrYVGvF9ch6wz',
              },
            ],
            available_markets: ['US', 'FR'],
            external_urls: {
              spotify: 'https://open.spotify.com/album/5NH94cATqx5fjBE794xZLy',
            },
            href: 'https://api.spotify.com/v1/albums/5NH94cATqx5fjBE794xZLy',
            id: '5NH94cATqx5fjBE794xZLy',
            images: [
              {
                height: 640,
                url: 'https://i.scdn.co/image/ab67616d0000b273d3acd0f2186daa8e4cb0f65b',
                width: 640,
              },
              {
                height: 300,
                url: 'https://i.scdn.co/image/ab67616d00001e02d3acd0f2186daa8e4cb0f65b',
                width: 300,
              },
              {
                height: 64,
                url: 'https://i.scdn.co/image/ab67616d00004851d3acd0f2186daa8e4cb0f65b',
                width: 64,
              },
            ],
            name: 'Collision Course (Deluxe Version)',
            release_date: '2004-11-30',
            release_date_precision: 'day',
            total_tracks: 6,
            type: 'album',
            uri: 'spotify:album:5NH94cATqx5fjBE794xZLy',
          },
          artists: [
            {
              external_urls: {
                spotify:
                  'https://open.spotify.com/artist/3nFkdlSjzX9mRTtwJOzDYB',
              },
              href: 'https://api.spotify.com/v1/artists/3nFkdlSjzX9mRTtwJOzDYB',
              id: '3nFkdlSjzX9mRTtwJOzDYB',
              name: 'JAY-Z',
              type: 'artist',
              uri: 'spotify:artist:3nFkdlSjzX9mRTtwJOzDYB',
            },
            {
              external_urls: {
                spotify:
                  'https://open.spotify.com/artist/6XyY86QOPPrYVGvF9ch6wz',
              },
              href: 'https://api.spotify.com/v1/artists/6XyY86QOPPrYVGvF9ch6wz',
              id: '6XyY86QOPPrYVGvF9ch6wz',
              name: 'Linkin Park',
              type: 'artist',
              uri: 'spotify:artist:6XyY86QOPPrYVGvF9ch6wz',
            },
          ],
          available_markets: ['US', 'FR'],
          disc_number: 1,
          duration_ms: 205280,
          episode: false,
          explicit: true,
          external_ids: {
            isrc: 'USWB10403681',
          },
          external_urls: {
            spotify: 'https://open.spotify.com/track/7dyluIqv7QYVTXXZiMWPHW',
          },
          href: 'https://api.spotify.com/v1/tracks/7dyluIqv7QYVTXXZiMWPHW',
          id: '7dyluIqv7QYVTXXZiMWPHW',
          is_local: false,
          name: 'Numb / Encore',
          popularity: 71,
          preview_url:
            'https://p.scdn.co/mp3-preview/97112e650b25718db2d84b7fdaf033758dc40c37?cid=6465b41667d6478d866deee9ac953f07',
          track: true,
          track_number: 4,
          type: 'track',
          uri: 'spotify:track:7dyluIqv7QYVTXXZiMWPHW',
        },
        video_thumbnail: {
          url: null,
        },
      },
      {
        added_at: '2023-07-27T00:32:31Z',
        added_by: {
          external_urls: {
            spotify:
              'https://open.spotify.com/user/31sw5th3cg7addeftjqj27tvckum',
          },
          href: 'https://api.spotify.com/v1/users/31sw5th3cg7addeftjqj27tvckum',
          id: '31sw5th3cg7addeftjqj27tvckum',
          type: 'user',
          uri: 'spotify:user:31sw5th3cg7addeftjqj27tvckum',
        },
        is_local: false,
        primary_color: null,
        track: {
          album: {
            album_type: 'album',
            artists: [
              {
                external_urls: {
                  spotify:
                    'https://open.spotify.com/artist/3nFkdlSjzX9mRTtwJOzDYB',
                },
                href: 'https://api.spotify.com/v1/artists/3nFkdlSjzX9mRTtwJOzDYB',
                id: '3nFkdlSjzX9mRTtwJOzDYB',
                name: 'JAY-Z',
                type: 'artist',
                uri: 'spotify:artist:3nFkdlSjzX9mRTtwJOzDYB',
              },
            ],
            available_markets: ['US', 'FR'],
            external_urls: {
              spotify: 'https://open.spotify.com/album/2CUT0104gySOIvqwtXeFsX',
            },
            href: 'https://api.spotify.com/v1/albums/2CUT0104gySOIvqwtXeFsX',
            id: '2CUT0104gySOIvqwtXeFsX',
            images: [
              {
                height: 640,
                url: 'https://i.scdn.co/image/ab67616d0000b273fec1b815bb3c50a64a90fd10',
                width: 640,
              },
              {
                height: 300,
                url: 'https://i.scdn.co/image/ab67616d00001e02fec1b815bb3c50a64a90fd10',
                width: 300,
              },
              {
                height: 64,
                url: 'https://i.scdn.co/image/ab67616d00004851fec1b815bb3c50a64a90fd10',
                width: 64,
              },
            ],
            name: 'The Blueprint 3',
            release_date: '2009-09-08',
            release_date_precision: 'day',
            total_tracks: 15,
            type: 'album',
            uri: 'spotify:album:2CUT0104gySOIvqwtXeFsX',
          },
          artists: [
            {
              external_urls: {
                spotify:
                  'https://open.spotify.com/artist/3nFkdlSjzX9mRTtwJOzDYB',
              },
              href: 'https://api.spotify.com/v1/artists/3nFkdlSjzX9mRTtwJOzDYB',
              id: '3nFkdlSjzX9mRTtwJOzDYB',
              name: 'JAY-Z',
              type: 'artist',
              uri: 'spotify:artist:3nFkdlSjzX9mRTtwJOzDYB',
            },
            {
              external_urls: {
                spotify:
                  'https://open.spotify.com/artist/3DiDSECUqqY1AuBP8qtaIa',
              },
              href: 'https://api.spotify.com/v1/artists/3DiDSECUqqY1AuBP8qtaIa',
              id: '3DiDSECUqqY1AuBP8qtaIa',
              name: 'Alicia Keys',
              type: 'artist',
              uri: 'spotify:artist:3DiDSECUqqY1AuBP8qtaIa',
            },
          ],
          available_markets: ['US', 'FR'],
          disc_number: 1,
          duration_ms: 276920,
          episode: false,
          explicit: true,
          external_ids: {
            isrc: 'USJZ10900031',
          },
          external_urls: {
            spotify: 'https://open.spotify.com/track/2igwFfvr1OAGX9SKDCPBwO',
          },
          href: 'https://api.spotify.com/v1/tracks/2igwFfvr1OAGX9SKDCPBwO',
          id: '2igwFfvr1OAGX9SKDCPBwO',
          is_local: false,
          name: 'Empire State Of Mind',
          popularity: 85,
          preview_url: null,
          track: true,
          track_number: 5,
          type: 'track',
          uri: 'spotify:track:2igwFfvr1OAGX9SKDCPBwO',
        },
        video_thumbnail: {
          url: null,
        },
      },
    ],
    limit: 100,
    next: null,
    offset: 0,
    previous: null,
    total: 18,
  },
  type: 'playlist',
  uri: 'spotify:playlist:62Hmn5MAuQVW88qeXjMvQV',
};
