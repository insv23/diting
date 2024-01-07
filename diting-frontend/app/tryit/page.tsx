'use client';

import { useState, useRef, useEffect } from 'react';
import Waveform from '@/components/waveform';
import AudioSubmit from '@/components/audio-submit';
import PromptWords from '@/components/PromptWords';
import { Upload, File } from 'lucide-react';

export default function Page() {
  const [file, setFile] = useState<File | undefined>();
  const [words, setWords] = useState('');
  const fileInputRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    if (fileInputRef.current) {
      fileInputRef.current.value = '';
    }
  }, [file]);

  const handleWordsChange = (newWords: string) => {
    setWords(newWords);
  };

  return (
    <div className='container flex w-full flex-col items-center gap-12'>
      <section className='text-center py-28 max-w-3xl flex flex-col gap-3 items-center w-full'>
        <div className='text-5xl tracking-tighter font-semibold'>
          上传一个 mp3 文件
        </div>
        {file && (
          <div className='flex flex-col items-center w-full gap-2'>
            <h1 className=' pt-12 w-full font-semibold'>
              <Waveform file={file} />
            </h1>
            <PromptWords onWordsChange={handleWordsChange} />
            <AudioSubmit
              file={file}
              setFile={setFile}
              words={words}
              setWords={setWords}
            />
          </div>
        )}
        <div
          onClick={() => fileInputRef.current?.click()}
          className=' cursor-pointer justify-center'
        >
          {!file ? (
            <div className=' my-5 flex gap-2 items-center px-2.5 py-1.5 rounded-lg border border-dashed border-gray-300 text-gray-600 bg-gray-100 bg-opacity-40'>
              <Upload size={20} /> 选择一个 mp3 文件
            </div>
          ) : (
            <div className=' my-5 flex gap-2 items-center px-2.5 py-1.5 rounded-lg border border-dashed border-gray-300 text-gray-600 bg-gray-100 bg-opacity-40'>
              <File size={20} /> 重选一个 mp3 文件
            </div>
          )}
          <input
            ref={fileInputRef}
            type='file'
            accept='.mp3'
            style={{ display: 'none' }}
            onChange={(e) => setFile(e.target.files?.[0])}
          />
        </div>
      </section>
    </div>
  );
}
