import { catalogIcons, units, history, qualityBlocks } from '../data/home'

export default function HomePage() {
  return (
    <>
      <div className="video-wrap">
        <div className="video-wrap-in">
          <div className="video-wrap-left">
            <iframe
              width="720"
              height="405"
              src="https://rutube.ru/play/embed/6c26db909d9b485d197e18b62268e430"
              style={{ border: 'none' }}
              allow="clipboard-write; autoplay"
              allowFullScreen
              title="О заводе"
            />
          </div>
        </div>
      </div>

      <div className="icons-wrap">
        <div className="icons-wrap-in">
          <div className="common-text icons-wrap-text">
            АО «Компрессорный завод БОРЕЦ» информирует всех заинтересованных лиц, о том, что в настоящее
            время производственная площадка завода находится по адресу: г. Краснодар, Ростовское шоссе, 14/2.
          </div>
          <div className="icons-wrap-list">
            {catalogIcons.map((item) => (
              <a href={item.href} className="icon-item" key={item.title}>
                <span className="icon-item-image">
                  <img src={item.image} alt={item.title} />
                </span>
                <span className="icon-item-title">{item.title}</span>
              </a>
            ))}
          </div>
        </div>
      </div>

      <div className="units-wrap">
        <div className="units-wrap-in">
          <div className="units-wrap-title">Компрессорные установки:</div>
          <div className="common-text units-wrap-text">
            <p style={{ textAlign: 'justify' }}>
              На сегодняшний день мы осуществляем специализированные решения, производим компрессорные
              станции любого уровня сложности.
            </p>
          </div>
          <div className="units-wrap-list">
            {units.map((item) => (
              <a href={item.href} className="unit-item" key={item.title}>
                <span className="unit-item-image">
                  <img src={item.image} alt={item.title} />
                </span>
                <span className="unit-item-title">{item.title}</span>
              </a>
            ))}
          </div>
          <div className="units-wrap-text2">
            <div className="common-text units-wrap-text-in">
              Чтобы приобрести компрессорное оборудование или запасные части к нему, Вы можете направить
              заявку на почту zakaz@zavod-borec.ru, или получить консультацию по телефону{' '}
              <a href="tel:(861) 991-45-54" style={{ whiteSpace: 'nowrap' }}>(861) 991-45-54</a>.
            </div>
          </div>
        </div>
      </div>

      <div className="units-wrap history-wrap">
        <div className="history-wrap-in">
          <div className="units-wrap-title history-wrap-title">Наша история</div>
          <div className="history-wrap-list">
            {history.map((item) => (
              <div className="history-item" key={item.year}>
                <div className="history-item-year">{item.year}</div>
                <div className="history-item-right">
                  <div className="history-item-subtitle">{item.subtitle}</div>
                  {item.text && <div className="common-text history-item-text">{item.text}</div>}
                  {item.images && (
                    <div className="opn-txt-img-wrapper__images">
                      {item.images.map((src) => (
                        <img key={src} src={src} alt="" width="180" style={{ borderWidth: 0 }} />
                      ))}
                    </div>
                  )}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      <div className="blocks-wrap">
        <div className="blocks-list">
          {qualityBlocks.map((text, i) => (
            <div className={`common-text blocks-item blocks-item-${(i % 2) + 1}`} key={i}>
              {text.split('\n').map((line, j) => (
                <span key={j}>
                  {line}
                  <br />
                </span>
              ))}
            </div>
          ))}
        </div>
      </div>

      <h1 className="h1">ОАО Компрессорный завод Борец - официальный сайт завода</h1>
    </>
  )
}
