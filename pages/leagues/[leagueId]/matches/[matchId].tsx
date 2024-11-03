import MatchPageLayout from '@layouts/MatchPageLayout';
import MatchSummary from '@features/MatchSummary';
import SPEED_TIME_CURVE from '@features/MatchSummary/data';
import type { NextPage } from 'next';

const MatchPage: NextPage = () => (
  <MatchPageLayout>
    <MatchSummary speedTimeCurve={SPEED_TIME_CURVE} />
  </MatchPageLayout>
);

export default MatchPage;
