import type { Status } from '@entities/country/league/match/fixture/types';

//Todo: add value for rest filters
const filterStatuses: Record<'ALL' | 'LIVE' | 'ODDS' | 'FINISHED' | 'PLANNED', Status['short'][]> =
  {
    ALL: [],
    PLANNED: ['NS', 'TBD'],
    LIVE: ['1H', 'HT', '2H', 'ET', 'BT', 'P', 'SUSP', 'INT', 'LIVE'],
    ODDS: ['1H', 'HT', '2H', 'ET', 'BT', 'P', 'SUSP', 'INT', 'LIVE', 'TBD', 'NS'],
    FINISHED: ['FT', 'AET', 'PEN'],
  };
export default filterStatuses;

export type FilterStatuses = keyof typeof filterStatuses;
