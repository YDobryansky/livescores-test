type MatchScore = {
  halftime: {
    home?: number;
    away?: number;
  };
  fulltime: {
    home?: number;
    away?: number;
  };
  extratime: {
    home?: number;
    away?: number;
  };
  penalty: {
    home?: number;
    away?: number;
  };
};

export default MatchScore;
