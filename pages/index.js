import React from 'react';
import Cover from '../src/components/sections/Cover';
import Header from '../src/components/sections/Header/index';
import WrapperProjects from '../src/components/sections/WrapperProjects/index';

export default function Home() {
  return (
    <>
      <Cover />
      <Header />
      <WrapperProjects />
    </>
  );
}
