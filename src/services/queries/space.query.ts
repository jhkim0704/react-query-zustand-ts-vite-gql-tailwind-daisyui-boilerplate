// space.query.ts
import { useQuery, useMutation } from '@tanstack/react-query';
import { getShips } from '@/services/api/space.service';
import { Ship } from '@/types/space';

export const useShips = () =>
  useQuery<Ship[]>(
    ['ships'],
    async () => {
      const res = await getShips();
      return res;
    },
    {
      staleTime: 10000,
    }
  );
