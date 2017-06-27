// @flow
type seasonType = {
  // @DEPRECATE (in favor of .ids)
  id: string,
  ids: {
    imdbId?: string,
    tmdbId?: string
  },
  title: string,
  season: number,
  episode: number,
  overview: string,
  rating: number | 'n/a',
  images: {
    full: string,
    medium: string,
    thumb: string
  }
};

export type runtimeType = {
  full: string,
  hours: number,
  minutes: number
};

export type certificationType = 'G' | 'PG' | 'PG-13' | 'R';

export type imagesType = {
  fanart: {} | {
    full: string,
    medium: string,
    thumb: string
  },
  poster: {} | {
    full: string,
    medium: string,
    thumb: string
  }
};

export type contentType = {
  title: string,
  year: number,
  // @DEPRECATE (in favor of .ids)
  imdbId?: string,
  // @DEPRECATE (in favor of .ids)
  id: string,
  ids: {
    imdbId?: string,
    tmdbId?: string
  },
  type: 'movies' | 'shows',
  certification: certificationType,
  summary: string,
  genres: Array<string>,
  rating: number | 'n/a',
  runtime: runtimeType,
  trailer: string | 'n/a',
  images: imagesType
};

export interface MetadataProviderInterface {
  getMovies: (page: number, limit: number) => Promise<contentType>,
  getMovie: (itemId: string) => contentType,
  getShows: (page: number, limit: number) => Promise<contentType>,
  getShow: (itemId: string) => contentType,
  getSimilar: (
    type: string,
    itemId: string,
    limit: number
  ) => Promise<Array<contentType>>,

  supportedIdTypes: Array<'tmdb' | 'imdb'>,

  getSeasons: (itemId: string) => Promise<Array<seasonType>>,
  getSeason: (itemId: string, season: number) => Promise<seasonType>,
  getEpisode: (itemId: string, season: number, episode: number) => seasonType,

  search: (query: string, page: number) => Promise<Array<contentType>>,

  updateConfig: (type: string, method: string, metadata: contentType) => void,
  favorites: () => void,
  recentlyWatched: () => void,
  watchList: () => void
}