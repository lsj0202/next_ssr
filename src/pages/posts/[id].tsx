import { createClient } from '@/utils/supabase/server';
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

export const getServerSideProps: GetServerSideProps = async ({
  query,
  req,
}) => {
  const { id } = query;

  const supabase = createClient(req.cookies);

  const response = await supabase.from('Post').select('*').eq('id', Number(id));

  console.log(response);

  return {
    props: {
      id,
    },
  };
};
