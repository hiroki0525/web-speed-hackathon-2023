import { getResultFromIdleTask } from 'idle-task';
import { lazy } from 'react';

export default function lazyWhenIdle(factory: Parameters<typeof lazy>[0]) {
  const idleTaskPromise = getResultFromIdleTask(factory);
  return lazy(() => idleTaskPromise);
}
