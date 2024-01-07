type Props = {
    onWordsChange: (words: string) => void;
};

export default function PromptWords({onWordsChange}: Props) {
    const handleChange = (event: React.ChangeEvent<HTMLTextAreaElement>) => {
        onWordsChange(event.target.value)
    }
  
  return (
    <div className='flex flex-col items-center w-full gap-2'>
      <label className='block mb-2 text-sm font-medium text-gray-900 dark:text-white'>
        提示词
      </label>
      <textarea
        id='message'
        rows={4}
        className='block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500'
        placeholder='在此处写录音中出现的专业词汇, 例如公司名、产品名、产品型号等... 使用空格分开'
        onChange={handleChange}
      ></textarea>
    </div>
  );
}
