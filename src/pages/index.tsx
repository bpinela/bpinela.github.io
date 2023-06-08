import Footer from '@/components/Footer/Footer';
import Layout from '@/components/Layout/Layout';
import Profile from '@/components/Profile/Profile';
import { ReactElement } from 'react';
import { NextPageWithLayout } from './_app';

const Home: NextPageWithLayout = () => {
  return (
    <>
      <Profile />
      <Footer />
    </>
  );
};

Home.getLayout = function getLayout(page: ReactElement) {
  return <Layout title={'Bruno Pinela'}>{page}</Layout>;
};

export default Home;
