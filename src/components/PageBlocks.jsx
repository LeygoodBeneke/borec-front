import { useEffect, useRef } from 'react'

export function RichText({ html, className = 'lpc-elements-text-1 lpc-block' }) {
  return (
    <div className={className}>
      <div className="lpc-elements-text-1__container">
        <div className="lpc-elements-text-1__text lp-header-text-1" dangerouslySetInnerHTML={{ __html: html }} />
      </div>
    </div>
  )
}

function widthToMediaSource(width) {
  if (width < 480) return 'media-xs'
  if (width < 768) return 'media-sm'
  if (width < 992) return 'media-md'
  if (width < 1280) return 'media-lg'
  return 'media-xl'
}

export function Article({ html }) {
  const ref = useRef(null)

  useEffect(() => {
    const decorWrap = ref.current?.querySelector('.decor-wrap')
    if (!decorWrap) return

    const update = () => {
      decorWrap.setAttribute('data-media-source', widthToMediaSource(decorWrap.offsetWidth))
    }
    update()

    window.addEventListener('resize', update)
    return () => window.removeEventListener('resize', update)
  }, [html])

  return (
    <article
      ref={ref}
      className="content-218 content widget-172 widget-type-content"
      dangerouslySetInnerHTML={{ __html: html }}
    />
  )
}

export function Gallery({ images }) {
  return (
    <div className="lpc-gallery-1 lpc-block lpc-gap-block">
      <div className="lpc-wrap">
        <div className="lpc-gallery-1__gallery">
          <div className="lpc-gallery-1__thumbnail lpc-gallery-1__static">
            {images.map((src) => (
              <div className="lpc-gallery-1__photo-wrap" key={src}>
                <div className="lpc-gallery-1__photo-inner">
                  <img className="lpc-gallery-1__item-pic" src={src} alt="" loading="lazy" />
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}

export function CaptionedGallery({ items }) {
  return (
    <div className="lpc-gallery-1 lpc-block lpc-gap-block">
      <div className="lpc-wrap">
        <div className="lpc-gallery-1__gallery">
          <div className="lpc-gallery-1__thumbnail lpc-gallery-1__static lpc-gallery-1__static-captioned">
            {items.map((item) => (
              <div className="lpc-gallery-1__photo-wrap" key={item.caption}>
                <div className="lpc-gallery-1__photo-inner">
                  <img className="lpc-gallery-1__item-pic _contain" src={item.image} alt="" loading="lazy" />
                </div>
                <div className="lpc-gallery-1__description lp-header-text-4">
                  <p>{item.caption}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}

export function ListBlock({ items, flex }) {
  return (
    <div className="lpc-elements-list-2 lpc-block lpc-gap-block">
      <div className="lpc-elements-list-2__wrap lpc-wrap">
        <div className="lpc-elements-list-2__box">
          <div className="lpc-elements-list-2__text-num lp-header-text-1">
            <ul className={flex ? 'opn-flex' : undefined}>
              {items.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </div>
  )
}

export function GalleryTitled({ title, text, images }) {
  return (
    <div className="lpc-gallery-1 lpc-block lpc-gap-block">
      <div className="lpc-wrap">
        <div className="lpc-gallery-1__header">
          {title && (
            <div className="lpc-gallery-1__title lp-header-title-2">
              <h2>{title}</h2>
            </div>
          )}
          {text && (
            <div className="lpc-gallery-1__text lp-header-text-1" dangerouslySetInnerHTML={{ __html: text }} />
          )}
        </div>
        {images && images.length > 0 && (
          <div className="lpc-gallery-1__gallery">
            <div className="lpc-gallery-1__thumbnail lpc-gallery-1__static">
              {images.map((src) => (
                <div className="lpc-gallery-1__photo-wrap" key={src}>
                  <div className="lpc-gallery-1__photo-inner">
                    <img className="lpc-gallery-1__item-pic" src={src} alt="" loading="lazy" />
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}
      </div>
    </div>
  )
}
