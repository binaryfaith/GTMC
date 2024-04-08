import React from 'react';
// Removed unused Link import
import { useQuery, useAction, getUserThreads, createThread, closeThread } from 'wasp/client/operations';

const DashboardPage = () => {
  const { data: threads, isLoading, error } = useQuery(getUserThreads);
  const createThreadFn = useAction(createThread);
  const closeThreadFn = useAction(closeThread);

  if (isLoading) return 'Loading...';
  if (error) return 'Error: ' + error.message;
  if (error) return 'Error: ' + error.message; // Ensure that error messages are displayed correctly

  const handleCreateThread = () => {
    createThreadFn({ title: 'New Thread' });
  };


  const handleAddThread = () => {
    createThreadFn({ title: 'New Thread' });
  };

  return (
    <div className='p-4'>
      <button
        onClick={handleCreateThread}
        className='bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded'
      >
        New Thread
      </button>
      {threads && threads.map((thread) => (
        <div
          key={thread.id}
          className='flex items-center justify-between bg-gray-100 p-4 mb-4 rounded-lg'
        >
          <div>{thread.title}</div>
          <div>
          <div className='flex gap-2'>
            <button
              onClick={handleAddThread}
              className='bg-green-500 hover:bg-green-700 text-white font-bold py-1 px-2 rounded'
            >
              +
            </button>
            <button
              onClick={() => closeThreadFn({ id: thread.id })}
              // No onClick handler for close button
              className='bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded'
            >
              Close
            </button>
          </div>
        </div>
      ))}
    </div>
  );
};
      ))} {/* This closing parenthesis matches the opening parenthesis of the map function */}
    </div>
  ) 

export default DashboardPage;
