import { FormEvent, useRef, useState } from 'react';
import ReactSelect from 'react-select/creatable';
import { MarkdownEditor } from '../components/Markdown';
import { GetServerSideProps } from 'next';
import { createClient } from '@/utils/supabase/server';
import { useRouter } from 'next/router';

type WriteProps = {
  existingTags: string[];
  existingCategories: string[];
};

const Write = ({ existingTags, existingCategories }: WriteProps) => {
  const router = useRouter();
  const fileRef = useRef<HTMLInputElement>(null);
  const [title, setTitle] = useState('');
  const [category, setCategory] = useState('');
  const [tags, setTags] = useState('');
  const [content, setContent] = useState('');

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();

    const formData = new FormData();

    formData.append('title', title);
    formData.append('category', category);
    formData.append('tags', tags);
    formData.append('content', content);

    if (fileRef.current?.files?.[0]) {
      formData.append('preview_image', fileRef.current.files[0]);
    }

    const response = await fetch('/api/posts', {
      method: 'POST',
      headers: {
        'Content-Type': 'multipart/form-data',
      },
      body: formData,
    });

    const data = response.json();
    if (data?.id) router.push(`/posts/${data?.id}`);
  };

  return (
    <div className="container mx-auto flex flex-col px-4 pb-20 pt-12">
      <h1 className="mb-8 text-2xl font-medium">새로운 글</h1>
      <form onSubmit={handleSubmit}>
        <div className="flex flex-col gap-3">
          <input
            type="text"
            placeholder="제목"
            className="rounded-md border border-gray-300 p-2 transition-all hover:border-gray-400"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
          />
          <input
            type="file"
            accept="image/*"
            className="rounded-md border border-gray-300 p-2 transition-all hover:border-gray-400"
            value={title}
            ref={fileRef}
          />
          <ReactSelect
            options={existingCategories?.map((category) => ({
              label: category,
              value: category,
            }))}
            placeholder="카테고리"
            onChange={(e) => e && setCategory(e?.value)}
            isMulti={false}
          />
          <ReactSelect
            options={existingTags?.map((tag) => ({
              label: tag,
              value: tag,
            }))}
            placeholder="태그"
            onChange={(e) =>
              e && setCategory(JSON.stringify(e.map((e) => e.value)))
            }
            isMulti={true}
          />
          <MarkdownEditor height={500} />
        </div>
        <button
          type="submit"
          className="mt-4 w-full rounded-md bg-gray-800 py-2 text-white"
        >
          작성하기
        </button>
      </form>
    </div>
  );
};

export default Write;

export const getServersideProps: GetServerSideProps<WriteProps> = async ({
  req,
}) => {
  const supabase = createClient(req.cookies);
  const { data } = await supabase.from('Post').select('category, tags');

  return {
    props: {
      existingCategories: Array.from(new Set(data?.map((d) => d.category))),
      existingTags: Array.from(
        new Set(data?.flatMap((d) => JSON.stringify(d.tags))),
      ),
    },
  };
};
