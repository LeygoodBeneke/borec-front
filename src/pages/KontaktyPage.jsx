import { Link } from 'react-router-dom'
import { useDecorMediaSource } from '../useDecorMediaSource'
import { kontakty } from '../data/kontakty'

export default function KontaktyPage() {
  const decorRef = useDecorMediaSource()

  return (
    <div className="layout column layout_214">
      <div className="widget-170 path widget-type-path">
        <Link to="/">Завод Борец</Link> \ Контакты
      </div>
      <h1 className="h1 widget-171 widget-type-h1">Контакты</h1>

      <article className="content-218 content widget-172 widget-type-content">
        <div className="lpc-content-wrapper">
          <div className="decor-wrap" ref={decorRef}>
            <div className="lpc-universal-contacts lpc-block lpc-gap-block">
              <div className="lpc-universal-contacts__wrap lpc-wrap">
                <div className="lpc-universal-contacts__wrap-box">
                  <div className="lpc-full-width-content lpc-container-wrap lpc-universal-contacts__inner">
                    <div className="lpc-universal-contacts__row lpc-row">
                      <div className="lpc-universal-contacts__content">
                        <div className="lpc-universal-contacts__content-in">
                          <div className="lpc-universal-contacts__list">
                            <div className="lpc-universal-contacts__item lpc-universal-contacts__item--phones lpc-universal-contacts__item--style">
                              <div className="lpc-universal-contacts__item-icon-box">
                                <div className="lpc-universal-contacts__item-icon">
                                  <img src={kontakty.icons.phone} alt="" />
                                </div>
                              </div>
                              <a href={`tel:${kontakty.phone.replace(/[^+\d]/g, '')}`} className="lpc-universal-contacts__item-tel lp-header-title-5">
                                {kontakty.phone}
                              </a>
                            </div>

                            <div className="lpc-universal-contacts__item lpc-universal-contacts__item--style">
                              <div className="lpc-universal-contacts__field lp-header-text-3">{kontakty.hours}</div>
                            </div>

                            <div className="lpc-universal-contacts__item">
                              <div className="lpc-universal-contacts__item-icon-box">
                                <div className="lpc-universal-contacts__item-icon">
                                  <img src={kontakty.icons.address} alt="" />
                                </div>
                              </div>
                              <div className="lpc-universal-contacts__subtitle lp-header-title-6">{kontakty.address}</div>
                            </div>

                            <div className="lpc-universal-contacts__item lpc-universal-contacts__item--style">
                              <div className="lpc-universal-contacts__item-icon-box">
                                <div className="lpc-universal-contacts__item-icon">
                                  <img src={kontakty.icons.email} alt="" />
                                </div>
                              </div>
                              <a href={`mailto:${kontakty.email}`} className="lpc-universal-contacts__field lp-header-text-3">
                                {kontakty.email}
                              </a>
                            </div>

                            <div className="lpc-universal-contacts__item">
                              <div className="lpc-universal-contacts__subtitle lp-header-title-6">{kontakty.directionsLabel}</div>
                              <div
                                className="lpc-universal-contacts__field lp-header-text-3"
                                dangerouslySetInnerHTML={{ __html: kontakty.directions }}
                              />
                            </div>

                            <div className="lpc-universal-contacts__item lpc-universal-social">
                              <a
                                href={kontakty.form.href}
                                className="lpc-universal-social__link has_custom_bg"
                                style={{ background: kontakty.form.bg }}
                              >
                                <span className="lpc-universal-social__icon-box">
                                  <span className="lpc-universal-social__icon">
                                    <img src={kontakty.icons.form} alt="" />
                                  </span>
                                </span>
                                <span className="lpc-universal-social__subtitle lp-header-text-2">
                                  <p>{kontakty.form.label}</p>
                                </span>
                              </a>
                            </div>
                          </div>
                        </div>
                      </div>

                      <div className="lpc-universal-contacts__map-wrap">
                        <div className="lpc-universal-contacts__map-inner lpc-image-type-1">
                          <iframe
                            className="lpc-universal-contacts__map"
                            title={kontakty.map.label}
                            src={`https://yandex.ru/map-widget/v1/?ll=${kontakty.map.lng}%2C${kontakty.map.lat}&z=15&pt=${kontakty.map.lng},${kontakty.map.lat}`}
                            style={{ width: '100%', height: '100%', border: 0 }}
                            loading="lazy"
                          />
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </article>
    </div>
  )
}
