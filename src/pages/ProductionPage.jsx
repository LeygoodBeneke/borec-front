import { Link } from 'react-router-dom'
import { useDecorMediaSource } from '../useDecorMediaSource'
import {
  facilities,
  foundryGallery1,
  castingMethods,
  foundryGallery2,
  equipmentGallery,
  labEquipment,
  labGallery,
  machinePark,
  machineGallery,
} from '../data/production'

function LpcGallery({ images }) {
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

export default function ProductionPage() {
  const decorRef = useDecorMediaSource()

  return (
    <div className="layout column layout_214">
      <div className="widget-170 path widget-type-path">
        <Link to="/">Завод Борец</Link> \ Производство
      </div>
      <h1 className="h1 widget-171 widget-type-h1">Производство</h1>

      <article className="content-218 content widget-172 widget-type-content">
        <div className="lpc-content-wrapper">
          <div className="decor-wrap" ref={decorRef}>
            <div className="lpc-product-4 lpc-block lpc-gap-block">
              <div className="lpc-product-4__wrap lpc-wrap">
                <div className="lpc-product-4__list lpc-row _left">
                  {facilities.map((f) => (
                    <div className="lpc-product-name lpc-product-4__item four_columns" key={f.text}>
                      <div className="lpc-product-4__head">
                        <div className="lpc-image-type-1 lpc-product-4__image lpc-block__img-inner _3_2h">
                          <img src={f.image} alt="" loading="lazy" />
                        </div>
                      </div>
                      <div className="lpc-product-4__body">
                        <div className="lpc-product-4__body-top">
                          <div className="lpc-product-4__desc lp-header-text-3">
                            <p>{f.text}</p>
                          </div>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            <div className="lpc-elements-text-1 lpc-block">
              <div className="lpc-elements-text-1__container">
                <div className="lpc-elements-text-1__text lp-header-text-1">
                  <p>
                    Общая производственная площадь – <span style={{ color: 'hsl(170, 100%, 31%)' }}>29 878,2 кв.м.</span>
                  </p>
                  <p>
                    Предприятие имеет все необходимые испытательные стенды, собственную современную
                    лабораторию для контроля качества литья, участок по сборке собственной автоматики,
                    участок по изготовлению оснастки для литья и многое другое.
                  </p>
                </div>
              </div>
            </div>

            <div className="lpc-gallery-1 lpc-block lpc-gap-block">
              <div className="lpc-wrap">
                <div className="lpc-gallery-1__header">
                  <div className="lpc-gallery-1__title lp-header-title-2">
                    <h2>Литейное производство</h2>
                  </div>
                  <div className="lpc-gallery-1__text lp-header-text-1">
                    <p>
                      Литейное производство ОАО «Компрессорный завод «БОРЕЦ» существует с момента открытия
                      завода и оснащено несколькими участками, на которых возможно изготовление отливок
                      любой сложности, массой от 0,5 кг до 3 тонн, в том числе методами точного и цветного
                      литья на основе алюминия и меди по выплавляемым моделям.
                    </p>
                  </div>
                </div>
                <div className="lpc-gallery-1__gallery">
                  <div className="lpc-gallery-1__thumbnail lpc-gallery-1__static">
                    {foundryGallery1.map((src) => (
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

            <div className="lpc-elements-text-1 lpc-block">
              <div className="lpc-elements-text-1__container">
                <div className="lpc-elements-text-1__text lp-header-text-1">
                  <p>
                    Предлагаем сотрудничество в сфере изготовления и поставок отливок стального, чугунного,
                    алюминиевого литья различной группы сложности. На ОАО «Компрессорный завод «БОРЕЦ»
                    применяются следующие технологические способы литья:
                  </p>
                </div>
              </div>
            </div>

            <div className="lpc-elements-list-2 lpc-block lpc-gap-block">
              <div className="lpc-elements-list-2__wrap lpc-wrap">
                <div className="lpc-elements-list-2__box">
                  <div className="lpc-elements-list-2__text-num lp-header-text-1">
                    <ul>
                      {castingMethods.map((m) => (
                        <li key={m}>{m}</li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
            </div>

            <div className="lpc-elements-text-1 lpc-block">
              <div className="lpc-elements-text-1__container">
                <div className="lpc-elements-text-1__text lp-header-text-1">
                  <p>
                    Отливки производятся по модельной оснастке Заказчика либо по модельной оснастке,
                    изготовленной на заводе по чертежам или эскизам Заказчика. При изготовлении литейных
                    форм применяется машинная формовка. Используются стержни, изготовленные на основе
                    холодно-твердеющих смесей и по горячим стержневым ящикам.
                  </p>
                </div>
              </div>
            </div>

            <LpcGallery images={foundryGallery2} />

            <div className="lpc-elements-text-1 lpc-block">
              <div className="lpc-elements-text-1__container">
                <div className="lpc-elements-text-1__text lp-header-text-1">
                  <p>Литейное производство оснащено:</p>
                </div>
              </div>
            </div>

            <div className="lpc-gallery-1 lpc-block lpc-gap-block">
              <div className="lpc-wrap">
                <div className="lpc-gallery-1__gallery">
                  <div className="lpc-gallery-1__thumbnail lpc-gallery-1__static lpc-gallery-1__static-captioned">
                    {equipmentGallery.map((item) => (
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

            <div className="lpc-elements-text-1 lpc-block">
              <div className="lpc-elements-text-1__container">
                <div className="lpc-elements-text-1__text lp-header-text-1">
                  <p>
                    Завод так же выполняет заказы на переплавку лома (алюминий, медь) с разливкой
                    полученного металла в специальные типовые изложницы с предоставлением результатов
                    химического анализа. На отливаемые изделия выдается сертификат качества с указанием
                    химического состава и механических свойств.
                  </p>
                </div>
              </div>
            </div>

            <div className="lpc-gallery-1 lpc-block lpc-gap-block">
              <div className="lpc-wrap">
                <div className="lpc-gallery-1__header">
                  <div className="lpc-gallery-1__title lp-header-title-2">
                    <h2>Лаборатория</h2>
                  </div>
                  <div className="lpc-gallery-1__text lp-header-text-1">
                    <p>Лаборатория обладает всеми видами неразрушающего и разрушающего контроля:</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="lpc-elements-list-2 lpc-block lpc-gap-block">
              <div className="lpc-elements-list-2__wrap lpc-wrap">
                <div className="lpc-elements-list-2__box">
                  <div className="lpc-elements-list-2__text-num lp-header-text-1">
                    <ul className="opn-flex">
                      {labEquipment.map((item) => (
                        <li key={item}>{item}</li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
            </div>

            <LpcGallery images={labGallery} />

            <div className="lpc-elements-text-1 lpc-block">
              <div className="lpc-elements-text-1__container">
                <div className="lpc-elements-text-1__text lp-header-text-1">
                  <p>Станочный парк состоит из более чем 300 станков:</p>
                </div>
              </div>
            </div>

            <div className="lpc-elements-list-2 lpc-block lpc-gap-block">
              <div className="lpc-elements-list-2__wrap lpc-wrap">
                <div className="lpc-elements-list-2__box">
                  <div className="lpc-elements-list-2__text-num lp-header-text-1">
                    <ul className="opn-flex">
                      {machinePark.map((item) => (
                        <li key={item}>{item}</li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
            </div>

            <div className="lpc-elements-text-1 lpc-block">
              <div className="lpc-elements-text-1__container">
                <div className="lpc-elements-text-1__text lp-header-text-1">
                  <p>Большинство станков имеют систему ЧПУ</p>
                </div>
              </div>
            </div>

            <LpcGallery images={machineGallery} />

            <div className="lpc-elements-text-1 lpc-block">
              <div className="lpc-elements-text-1__container">
                <div className="lpc-elements-text-1__text lp-header-text-1">
                  <p>
                    В 2008 году Московский завод «Борец» был закрыт, а производственные мощности предприятия
                    перенесли в г. Краснодар. Кроме технологического оборудования были переданы чертежи,
                    технология изготовления и многоступенчатая система менеджмента качества, действующие на
                    Московском заводе «Борец».
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </article>
    </div>
  )
}
