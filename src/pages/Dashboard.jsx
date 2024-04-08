import React from 'react';
import { Link } from 'react-router-dom';
import { useQuery, useAction, getUserThreads, createThread, closeThread } from 'wasp/client/operations';

const DashboardPage = () => {
  const { data: threads, isLoading, error } = useQuery(getUserThreads);
  const createThreadFn = useAction(createThread);
  const closeThreadFn = useAction(closeThread);

  if (isLoading) return 'Loading...';
  if (error) return 'Error: ' + error.message; // Ensure that error messages are displayed correctly

  const handleCreateThread = () => {
    createThreadFn({ title: 'New Thread' });
  };


  // Check if threads data is available before trying to map over it
  if (!threads) return 'No threads to display';
  if (error) return 'Error: ' + error.message;

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
      {threads && threads.map((thread) => ( // Safeguard against null or undefined threads
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
}

export default DashboardPage;
