import { Breadcrumb } from '@/components/common/Breadcrumb'
import { SectionHeading } from '@/components/common/SectionHeading'
import { PhotoGrid } from '@/components/common/PhotoGrid'
import { CaptionedPhotoGrid } from '@/components/common/CaptionedPhotoGrid'
import { FeatureList } from '@/components/common/FeatureList'
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
} from '@/content/production'

export function ProductionPage() {
  return (
    <div>
      <Breadcrumb label="Производство" />

      <div className="mx-auto max-w-site px-6 py-6">
        <h1 className="mb-8 text-3xl font-bold text-heading">Производство</h1>

        <div className="mb-8 grid grid-cols-2 gap-4 sm:grid-cols-4">
          {facilities.map((facility) => (
            <div key={facility.text}>
              <div className="aspect-[3/2] overflow-hidden rounded-md bg-slate-100">
                <img src={facility.image} alt="" loading="lazy" className="h-full w-full object-cover" />
              </div>
              <p className="mt-2 text-sm text-slate-600">{facility.text}</p>
            </div>
          ))}
        </div>

        <p className="mb-2 text-slate-700">
          Общая производственная площадь – <span className="font-semibold text-brand-teal">29 878,2 кв.м.</span>
        </p>
        <p className="mb-8 text-slate-700">
          Предприятие имеет все необходимые испытательные стенды, собственную современную лабораторию
          для контроля качества литья, участок по сборке собственной автоматики, участок по изготовлению
          оснастки для литья и многое другое.
        </p>

        <section className="mb-10">
          <SectionHeading>Литейное производство</SectionHeading>
          <p className="mb-6 text-slate-700">
            Литейное производство ОАО «Компрессорный завод «БОРЕЦ» существует с момента открытия завода
            и оснащено несколькими участками, на которых возможно изготовление отливок любой сложности,
            массой от 0,5 кг до 3 тонн, в том числе методами точного и цветного литья на основе алюминия
            и меди по выплавляемым моделям.
          </p>
          <PhotoGrid images={foundryGallery1} />

          <p className="mb-4 text-slate-700">
            Предлагаем сотрудничество в сфере изготовления и поставок отливок стального, чугунного,
            алюминиевого литья различной группы сложности. На ОАО «Компрессорный завод «БОРЕЦ»
            применяются следующие технологические способы литья:
          </p>
          <FeatureList items={castingMethods} />

          <p className="mb-6 text-slate-700">
            Отливки производятся по модельной оснастке Заказчика либо по модельной оснастке,
            изготовленной на заводе по чертежам или эскизам Заказчика. При изготовлении литейных форм
            применяется машинная формовка. Используются стержни, изготовленные на основе
            холодно-твердеющих смесей и по горячим стержневым ящикам.
          </p>
          <PhotoGrid images={foundryGallery2} />

          <p className="mb-4 text-slate-700">Литейное производство оснащено:</p>
          <CaptionedPhotoGrid items={equipmentGallery} />

          <p className="text-slate-700">
            Завод так же выполняет заказы на переплавку лома (алюминий, медь) с разливкой полученного
            металла в специальные типовые изложницы с предоставлением результатов химического анализа.
            На отливаемые изделия выдается сертификат качества с указанием химического состава и
            механических свойств.
          </p>
        </section>

        <section className="mb-10">
          <SectionHeading>Лаборатория</SectionHeading>
          <p className="mb-4 text-slate-700">
            Лаборатория обладает всеми видами неразрушающего и разрушающего контроля:
          </p>
          <FeatureList items={labEquipment} columns />
          <PhotoGrid images={labGallery} />
        </section>

        <section className="mb-10">
          <p className="mb-4 text-slate-700">Станочный парк состоит из более чем 300 станков:</p>
          <FeatureList items={machinePark} columns />
          <p className="mb-4 text-slate-700">Большинство станков имеют систему ЧПУ</p>
          <PhotoGrid images={machineGallery} />
        </section>

        <p className="text-slate-700">
          В 2008 году Московский завод «Борец» был закрыт, а производственные мощности предприятия
          перенесли в г. Краснодар. Кроме технологического оборудования были переданы чертежи,
          технология изготовления и многоступенчатая система менеджмента качества, действующие на
          Московском заводе «Борец».
        </p>
      </div>
    </div>
  )
}
