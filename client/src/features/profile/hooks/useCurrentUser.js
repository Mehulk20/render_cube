import { useGetCurrentUserQuery } from '../services';

export function useCurrentUser(options) {
  return useGetCurrentUserQuery(undefined, {
    refetchOnFocus: true,
    refetchOnReconnect: true,
    ...options,
  });
}
