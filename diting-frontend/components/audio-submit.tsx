import React, { useState } from 'react';
import { toast } from 'sonner';
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogFooter,
  DialogDescription,
} from '@/components/ui/dialog';
import ShareURL from '@/components/share-url';
import Link from 'next/link';
import { twMerge } from 'tailwind-merge';
import { Button, buttonVariants } from '@/components/ui/button';

type Props = {
  file: File;
  setFile: React.Dispatch<React.SetStateAction<File | undefined>>;
  words: string;
  setWords: React.Dispatch<React.SetStateAction<string>>;
};

export default function AudioSubmit({ file, setFile, words, setWords }: Props) {
  const [submitted, setSubmitted] = useState(false);
  const [open, setOpen] = useState(false);
  const [call_id, setCall_id] = useState('');

  async function submitAudio() {
    const formData = new FormData();
    formData.append('file', file);
    formData.append('words', words);
    const promise = () =>
      fetch(`${process.env.NEXT_PUBLIC_DITING_BACKEND_URL}/upload`, {
        method: 'POST',
        body: formData,
      }).then((response) => response.json());

    toast.promise(promise, {
      loading: '正在上传文件',
      success: (data) => {
        setOpen(true);
        setCall_id(data);
        return 'Received Call ID: ' + data;
      },
      error: '文件上传失败',
    });
  }

  return (
    <>
      <Dialog open={open}>
        <DialogContent>
          <DialogHeader className=' text-left'>
            <DialogTitle>成功上传文件!</DialogTitle>
            <DialogDescription>
              正在全力听写并总结中，听写及总结将在下面这个链接中。
              可现在前往查看或先复制该链接稍后自行查看。
              <div className='max-w-[325px] sm:max-w-[450px] w-full'>
                <ShareURL host={window.location.href} call_id={call_id} />
              </div>
            </DialogDescription>
            <DialogFooter>
              <div className='flex gap-2 justify-end mt-2'>
                <Link
                  href={`/tryit/${call_id}`}
                  className={twMerge(buttonVariants(), 'w-fit')}
                >
                  前往结果页
                </Link>
                <Button
                  className=' w-fit'
                  onClick={() => {
                    setFile(undefined);
                    setWords('');
                    setOpen(false);
                    setSubmitted(false);
                    setCall_id('');
                  }}
                >
                  上传新文件
                </Button>
              </div>
            </DialogFooter>
          </DialogHeader>
        </DialogContent>
      </Dialog>
      <Button
        disabled={submitted}
        onClick={() => {
          setSubmitted(true);
          submitAudio();
        }}
      >
        {submitted ? '上传中...' : '点击上传!'}
      </Button>
    </>
  );
}
