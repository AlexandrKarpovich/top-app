import React from 'react';
import { Htag, Button, P, Tag } from '../components';

export default function Home(): JSX.Element {
  return (
    <>
      <Htag tag='h1'>Текст</Htag>
      <Button appearance='primary' className="default" arrow='right'>Узнать подробнее</Button>
      <Button appearance='ghost' arrow='down'>Читать отзывы</Button>
      <P size='l'>Большой</P>
      <P>средний</P>
      <P size='s'>Малый</P>

      <Tag size='s'>Ghost</Tag>
      <Tag size='m' color='red'>red</Tag>
      <Tag size='m' color='green'>green</Tag>
      <Tag size='m' color='grey'>grey</Tag>
      <Tag color='primary'>primary</Tag>
    </>
  );
}
