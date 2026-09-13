import { useState } from 'react'
import { Link } from 'react-router-dom'
import { navItems, logo } from '../data/site'

function CookieBanner() {
  const [visible, setVisible] = useState(true)

  if (!visible) return null

  return (
    <div className="cookie-banner">
      <p>
        Мы используем файлы cookie для работы сайта и улучшения пользовательского опыта.
        Продолжая пользоваться сайтом, вы соглашаетесь с использованием cookie.
      </p>
      <button type="button" onClick={() => setVisible(false)}>
        Хорошо
      </button>
    </div>
  )
}

function NavTree({ items, withDropdowns = true }) {
  return (
    <ul>
      {items.map((item) => (
        <li key={item.label} className={`menu-item${item.children && withDropdowns ? ' opened' : ''}${item.active ? ' active' : ''}`}>
          {item.href ? (
            <Link to={item.href}>
              <span className="menu-item-text">{item.label}</span>
            </Link>
          ) : (
            <a href="#" style={{ cursor: 'default' }}>
              <span className="menu-item-text">{item.label}</span>
            </a>
          )}
          {item.children && withDropdowns && (
            <ul className="level-2">
              {item.children.map((child) => (
                <li key={child.label}>
                  <Link to={child.href}>{child.label}</Link>
                </li>
              ))}
            </ul>
          )}
        </li>
      ))}
    </ul>
  )
}

export function Header() {
  return (
    <>
      <header className="header">
        <div className="header-in">
          <div className="header-left">
            <Link to="/" className="header-logo">
              <img src={logo} alt="АО &quot;Компрессорный завод БОРЕЦ&quot;" />
            </Link>
            <div className="header-name-wrap">
              <div className="header-name">АО &quot;Компрессорный завод БОРЕЦ&quot;</div>
              <div className="header-description">Производитель компрессорного оборудования с 1897 года</div>
            </div>
          </div>
          <div className="header-right">
            <div className="header-contacts">
              <div className="header-phones">
                <div>
                  <a href="tel:+78619914554">+7 (861) 991-45-54</a>
                </div>
              </div>
              <div className="header-mail">
                <a href="mailto:zakaz@zavod-borec.ru">zakaz@zavod-borec.ru</a>
              </div>
            </div>
            <div className="header-right-btns">
              <div className="header-search">
                <Link to="/search">Поиск</Link>
              </div>
              <div className="header-btn">
                <span className="form-btn">Оставить запрос</span>
              </div>
            </div>
          </div>
        </div>
      </header>
      <div className="block-75">
        <div className="block-89">
          <div className="widget-137 horizontal menu-163 wm-widget-menu widget-type-menu_horizontal">
            <div className="menu-scroll">
              <NavTree items={navItems} />
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export function Footer() {
  return (
    <>
      <div className="block-117">
        <div className="block-125">
          <div className="block-124">
            <div className="layout column layout_236">
              <div className="block-122">
                <div className="phones-238 widget-182 phones-block contacts-block widget-type-contacts_phone">
                  <div className="inner">
                    <label className="cell-icon" htmlFor="tg-phones-238">
                      <div className="icon"></div>
                    </label>
                    <input id="tg-phones-238" className="tgl-but" type="checkbox" />
                    <div className="block-body-drop">
                      <div className="cell-text">
                        <div className="title">
                          <div className="align-elem">Телефон:</div>
                        </div>
                        <div className="text_body">
                          <div className="align-elem">
                            <div>
                              <a href="tel:+78619914554">+7 (861) 991-45-54</a>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="email-237 widget-181 email-block contacts-block widget-type-contacts_email">
                  <div className="inner">
                    <label className="cell-icon" htmlFor="tg-email-237">
                      <div className="icon"></div>
                    </label>
                    <input id="tg-email-237" className="tgl-but" type="checkbox" />
                    <div className="block-body-drop">
                      <div className="cell-text">
                        <div className="title">
                          <div className="align-elem">Email:</div>
                        </div>
                        <div className="text_body">
                          <div className="align-elem">
                            <a href="mailto:zakaz@zavod-borec.ru">zakaz@zavod-borec.ru</a>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="layout column layout_231">
              <div className="block-119">
                <div className="widget-180 horizontal menu-233 wm-widget-menu widget-type-menu_horizontal">
                  <div className="menu-scroll">
                    <NavTree items={navItems} withDropdowns={false} />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="block-118">
        <div className="layout column layout_230">
          <div className="site-copyright widget-178 widget-type-site_copyright">
            <div className="align-elem">
              <p>COPYRIGHT &copy; КОМПРЕССОРНЫЙ ЗАВОД БОРЕЦ &copy; 2014-2026</p>
            </div>
          </div>
        </div>
        <div className="layout layout_228_id_247">
          <div className="mega-copyright widget-177 widget-type-mega_copyright">
            <span style={{ fontSize: '14px' }} className="copyright">
              <a target="_blank" rel="noopener noreferrer" className="copyright" href="https://mega-media.de/">
                erstellt durch
                <img src="/assets/g/mlogo/25x25/grey/light.png" title="mega-media.de" alt="mega-media.de" align="right" />
              </a>
            </span>
          </div>
        </div>
      </div>
    </>
  )
}

export default function Layout({ children }) {
  return (
    <div className="wrapper wrapper_dinamic">
      <Header />
      {children}
      <Footer />
      <CookieBanner />
    </div>
  )
}
