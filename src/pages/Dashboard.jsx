import React from 'react';
import { Link } from 'react-router-dom';
import { useQuery, useAction, getUserThreads, createThread, closeThread } from 'wasp/client/operations';

const DashboardPage = () => {
  const { data: threads, isLoading, error } = useQuery(getUserThreads);
  const createThreadFn = useAction(createThread);
  const closeThreadFn = useAction(closeThread);

  if (isLoading) return 'Loading...';
  if (error) return 'Error: ' + error;

  const handleCreateThread = () => {
    createThreadFn({ title: 'New Thread' });
  };

  const handleCloseThread = (threadId) => {
    closeThreadFn({ threadId });
  };

  return (
    <div className='p-4'>
      <button
        onClick={handleCreateThread}
        className='bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded'
      >
        New Thread
      </button>
      {threads.map((thread) => (
        <div
          key={thread.id}
          className='flex items-center justify-between bg-gray-100 p-4 mb-4 rounded-lg'
        >
          <div>{thread.title}</div>
          <div>
            <button
              onClick={() => handleCloseThread(thread.id)}
              className='bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded'
            >
              Close
            </button>
          </div>
        </div>
      ))}
    </div>
  );
}

export default DashboardPage;