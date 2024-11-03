import type Fixture from '../fixture/types';
import type { MatchLeague } from '../../types';
import type MatchTeam from '../team/types';
import type MatchScore from '../score/types';

type LeagueMatch = {
  fixture: Fixture;
  league: MatchLeague;
  teams: {
    home: MatchTeam;
    away: MatchTeam;
  };
  goals: {
    home?: number;
    away?: number;
  };
  score: MatchScore;
};

export type MatchItem = LeagueMatch['fixture'] & Omit<LeagueMatch, 'league'>;

export type LeagueItem = LeagueMatch['league'] & {
  matches: MatchItem[];
};

export default LeagueMatch;
