export const parseCallbackUrl = (url: string) => {
  if (!url) return
  if (typeof window === 'undefined') return

  return window.location.origin + url
}
