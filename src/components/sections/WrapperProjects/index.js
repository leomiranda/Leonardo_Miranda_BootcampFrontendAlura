import React from 'react';
import { SectionTitle } from '../../typography/SectionTitle/index';
import Card from '../../commons/Card/index';
import { Grid } from '../../layout/Grid/index';

export default function WrapperProjects() {
  return (
    <Grid.Container>
      <Grid.Row>
        <Grid.Col value="12">
          <SectionTitle>My Projects</SectionTitle>
        </Grid.Col>
      </Grid.Row>
      <Grid.Row>
        <Grid.Col value={{ xs: 12, md: 4 }}>
          <Card img="https://picsum.photos/id/2/800/600" />
        </Grid.Col>
        <Grid.Col value={{ xs: 12, md: 4 }}>
          <Card img="https://picsum.photos/id/160/800/600" />
        </Grid.Col>
        <Grid.Col value={{ xs: 12, md: 4 }}>
          <Card img="https://picsum.photos/id/201/800/600" />
        </Grid.Col>
      </Grid.Row>
      <Grid.Row>
        <Grid.Col value="12">
          <Card img="https://picsum.photos/id/1/800/600" />
        </Grid.Col>
      </Grid.Row>
    </Grid.Container>
  );
}
