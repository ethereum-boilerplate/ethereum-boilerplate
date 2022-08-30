import { Default } from 'components/layouts/Default';
import { Featured } from 'components/templates/featured';
import type { NextPage } from 'next';

const HomePage: NextPage = () => {
  return (
    <Default pageName="Featured">
      <Featured />
    </Default>
  );
};

export default HomePage;
