export const useAuth = () => {
  const user = localStorage.getItem('hf-demo-user')
  if (!user) return null
  try {
    return JSON.parse(user)
  } catch {
    return null
  }
}
