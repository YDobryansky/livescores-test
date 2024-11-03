export type Status = {
  elapsed: number;
  long: string;
  short:
    | 'TBD'
    | 'NS'
    | '1H'
    | 'HT'
    | '2H'
    | 'ET'
    | 'BT'
    | 'P'
    | 'SUSP'
    | 'INT'
    | 'FT'
    | 'AET'
    | 'PEN'
    | 'PST'
    | 'CANC'
    | 'ABD'
    | 'AWD'
    | 'WO'
    | 'LIVE';
};

export type Fixture = {
  id: number;
  referee: string;
  timezone: string;
  date: string;
  timestamp: number;
  periods: {
    first: number;
    second: number;
  };
  venue: {
    id: number;
    name: string;
    city: string;
  };
  status: Status;
};

export default Fixture;
