import React from 'react';
import Cover from '../src/components/sections/Cover';
import Header from '../src/components/sections/Header/index';
import WrapperProjects from '../src/components/sections/WrapperProjects/index';
import Footer from '../src/components/sections/Footer/index';
import { Main } from '../src/components/sections/Main/index';
import { Box } from '../src/components/layout/Box/index';

export default function Home() {
  return (
    <Box>
      <Cover />
      <Header />
      <Main>
        <WrapperProjects />
      </Main>
      <Footer />
    </Box>
  );
}
