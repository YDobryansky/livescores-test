import React from 'react';
import Breadcrumbs from '@features/MatchSummary/components/Breadcrumbs';
import Tabs from '@features/MatchSummary/components/Tabs';
import MatchTabs from '@features/MatchSummary/components/MatchTabs';
import MatchResults from '@features/MatchSummary/components/MatchResults';
import MatchTime from '@features/MatchSummary/components/MatchTime';
import MatchInfoFooter from '@features/MatchSummary/components/MatchInfo';
import type { TimeNum } from '@entities/country/league/match/time/types';

type MatchSummaryProps = {
  speedTimeCurve: Record<string, TimeNum>;
};

const MatchSummary: React.FC<MatchSummaryProps> = ({ speedTimeCurve }) => {
  const { firstTime, secondTime } = speedTimeCurve;

  return (
    <>
      <Breadcrumbs />
      <MatchResults />
      <Tabs />
      <MatchTabs />
      <MatchTime timeNum={firstTime} />
      <MatchTime timeNum={secondTime} />
      <MatchInfoFooter />
    </>
  );
};

export default MatchSummary;
