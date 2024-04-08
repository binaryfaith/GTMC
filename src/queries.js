import { HttpError } from 'wasp/server'

export const getUserThreads = async () => {

  return context.entities.Thread.findMany({
    where: {
      // Removed the user ID filter to fetch all threads
    }
  });
}
export const getThread = async ({ threadId }, context) => {
  if (!context.user) {
    throw new HttpError(401);
  }

  return context.entities.Thread.findUnique({
    where: {
      id: parseInt(threadId)
    }
  });
};
