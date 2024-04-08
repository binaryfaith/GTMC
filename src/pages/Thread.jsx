import React from 'react';
import { useParams } from 'react-router-dom';
import { useQuery, useAction, getThread, closeThread } from 'wasp/client/operations';

const ThreadPage = () => {
  const threadId = useParams().threadId;
  const { data: thread, isLoading, error } = useQuery(getThread, { threadId });
  const closeThreadFn = useAction(closeThread);

  if (isLoading) return 'Loading...';
  if (error) return 'Error: ' + error;

  const handleCloseThread = () => {
    closeThreadFn({ threadId: thread.id });
  };

  return (
    <div className='p-4'>
      <h1>{thread.title}</h1>
      <p>{thread.content}</p>
      <button onClick={handleCloseThread} className='bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded'>Close Thread</button>
    </div>
  );
}

export default ThreadPage;