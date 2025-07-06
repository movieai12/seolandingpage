import { useMutation } from '@tanstack/react-query'
import { apiClient } from '@/lib/api-client'
import { DAPARequest, DAPAResponse } from '@/types/api'

export function useDAPACheck() {
  return useMutation<DAPAResponse, Error, DAPARequest>({
    mutationFn: async (data: DAPARequest) => {
      const response = await apiClient.post('/da-pa-check', data)
      return response.data
    },
    onError: (error: any) => {
      console.error('DA PA Check Error:', error)
    }
  })
}