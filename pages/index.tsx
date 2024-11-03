import MainPageLayout from '@layouts/MainPageLayout';
import AsideCountriesList from '@features/AsideCountriesList';
import Livetable from '@features/Livetable';
import { SportNameId } from '@enums/index';
import type { NextPage } from 'next';

const Home: NextPage = () => (
  <MainPageLayout aside={<AsideCountriesList sportNameId={SportNameId.football} />}>
    <Livetable sportNameId={SportNameId.football} />
  </MainPageLayout>
);

export default Home;
