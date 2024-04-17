import { GetServerSideProps } from 'next';
import React from 'react';

type PostsProps = {
  id: string;
};

const Post = ({ id }: PostsProps) => {
  return (
    <div className="flex">
      <h1>Dummy Post {id}</h1>
    </div>
  );
};

export default Post;

export const getServerSideProps: GetServerSideProps = async ({ query }) => {
  const { id } = query;

  return {
    props: {
      id,
    },
  };
};
