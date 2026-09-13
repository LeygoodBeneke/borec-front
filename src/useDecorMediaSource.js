import { useEffect, useRef } from 'react'

function widthToMediaSource(width) {
  if (width < 480) return 'media-xs'
  if (width < 768) return 'media-sm'
  if (width < 992) return 'media-md'
  if (width < 1280) return 'media-lg'
  return 'media-xl'
}

export function useDecorMediaSource() {
  const ref = useRef(null)

  useEffect(() => {
    const el = ref.current
    if (!el) return

    const update = () => {
      el.setAttribute('data-media-source', widthToMediaSource(el.offsetWidth))
    }
    update()

    window.addEventListener('resize', update)
    return () => window.removeEventListener('resize', update)
  }, [])

  return ref
}
