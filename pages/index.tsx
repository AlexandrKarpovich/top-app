import React, { useEffect, useState } from 'react';
import { Htag, Button, P, Tag, Rating } from '../components';
import { withLayout } from '../layout/Layout';

function Home(): JSX.Element {
  const [counter, setCounter] = useState<number>(0) 

  useEffect(() => {
    console.log('Counter ' + counter);
    return function cleanup() {
      console.log('Unmaunt');
    }
  })

  useEffect(() => {
    console.log('Mounted ');
  }, [])


  const [rating, setRating] = useState<number>(4)

  return (
    <>
      <Htag tag='h1'>{counter}</Htag>
      <Button
        onClick={() => setCounter(x => x + 1)}
        appearance='primary'
        className="default"
        arrow='right'
        >Узнать подробнее
      </Button>
      <Button appearance='ghost' arrow='down'>Читать отзывы</Button>
      <P size='l'>Большой</P>
      <P>средний</P>
      <P size='s'>Малый</P>

      <Tag size='s'>Ghost</Tag>
      <Tag size='m' color='red'>red</Tag>
      <Tag size='m' color='green'>green</Tag>
      <Tag size='m' color='grey'>grey</Tag>
      <Tag color='primary'>primary</Tag>
      <Rating rating={rating} isEditable  setRating={setRating} />
    </>
  );
}

export default withLayout(Home);
