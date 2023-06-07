import Layout from '@/components/Layout/Layout';
import { ReactElement } from 'react';
import { NextPageWithLayout } from './_app';

const Home: NextPageWithLayout = () => {
  return <></>;
};

Home.getLayout = function getLayout(page: ReactElement) {
  return <Layout title={'Bruno Pinela'}>{page}</Layout>;
};

export default Home;
