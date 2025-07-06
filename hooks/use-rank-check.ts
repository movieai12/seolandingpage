import { useMutation } from '@tanstack/react-query'
import { apiClient } from '@/lib/api-client'
import { RankCheckRequest, RankCheckResponse } from '@/types/api'

export function useRankCheck() {
  return useMutation<RankCheckResponse, Error, RankCheckRequest>({
    mutationFn: async (data: RankCheckRequest) => {
      const response = await apiClient.post('/rank-check', data)
      return response.data
    },
    onError: (error: any) => {
      console.error('Rank Check Error:', error)
    }
  })
}