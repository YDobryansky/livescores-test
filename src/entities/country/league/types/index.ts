export enum LeagueType {
  League = 'League',
  Cup = 'Cup',
}

type League = {
  id: number;
  name: string;
  type: LeagueType;
  logo: string;
};

export type MatchLeague = Omit<League, 'type'> & {
  country: string;
  season: number;
  round: string;
  flag?: string;
};

export default League;
