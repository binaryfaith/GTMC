import { HttpError } from 'wasp/server'

export const getUserThreads = async (args, context) => {
  if (!context.user) {
    throw new HttpError(401);
  }

  return context.entities.Thread.findMany({
    where: {
      userId: context.user.id
    }
  });
}export const getThread = async (args, context) => {
  if (!context.user) {
    throw new HttpError(401);
  }

  return context.entities.Thread.findUnique({
    where: {
      id: args.threadId
    }
  });
};
