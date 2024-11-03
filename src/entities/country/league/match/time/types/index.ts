export type TimeInfo = {
  id: number;
  time: string;
  incident: string;
  score?: string;
  comment?: string;
  playerName?: string;
  assist?: string;
  team: string;
};

export type TimeNum = {
  timeNum: string;
  totalScore: string;
  participants: TimeInfo[];
};
