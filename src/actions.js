import { HttpError } from 'wasp/server'

export const createThread = async (args, context) => {
  if (!context.user) { throw new HttpError(401) };

  return context.entities.Thread.create({
    data: {
      title: args.title,
      userId: context.user.id
    }
  });
}

export const closeThread = async (args, context) => {
  if (!context.user) { throw new HttpError(401) };
  const thread = await context.entities.Thread.findUnique({
    where: { id: args.threadId }
  });
  return context.entities.Thread.update({
    where: { id: args.threadId },
    data: { closed: true }
  });
}