import React from 'react';
import { NextPage } from 'next';
import useSWR from 'swr';
import fetch from 'unfetch'

const fetcher = (url: string) => fetch(url).then(r => r.json())
const Home: NextPage = () => {
  const { data } = useSWR('/api/message', fetcher);
  console.log(data);
  return data ? (
    <>
      <h1>Loaded from Nextjs</h1>
      <h2>with message from api: {data}</h2>
    </>
  ) : <h1>Loading</h1>;
};

export default Home;
