import React from 'react';
import { Htag, Button, P } from '../components';

export default function Home(): JSX.Element {
  return (
    <>
      <Htag tag='h1'>Текст</Htag>
      <Button appearance='primary' className="default" arrow='right'>Узнать подробнее</Button>
      <Button appearance='ghost' arrow='down'>Читать отзывы</Button>
      <P size='l'>Большой</P>
      <P>средний</P>
      <P size='s'>Малый</P>
    </>
  );
}
