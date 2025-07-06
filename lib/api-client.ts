import axios from 'axios'

export const apiClient = axios.create({
  baseURL: '/api',
  timeout: 30000,
  headers: {
    'Content-Type': 'application/json',
  },
})

// Request interceptor
apiClient.interceptors.request.use(
  (config) => {
    // Add any auth headers or other request modifications here
    return config
  },
  (error) => {
    return Promise.reject(error)
  }
)

// Response interceptor
apiClient.interceptors.response.use(
  (response) => {
    return response
  },
  (error) => {
    // Handle common errors here
    if (error.response?.status === 429) {
      throw new Error('Rate limit exceeded. Please try again later.')
    }
    if (error.response?.status >= 500) {
      throw new Error('Server error. Please try again later.')
    }
    return Promise.reject(error)
  }
)