import { Space } from 'antd'
import { useTranslation, Trans } from 'react-i18next'
import { useState } from 'react'

// eslint-disable-next-line no-undef
const getGreetingTime = (d = new Date()) => {
  const splitAfternoon = 12 // 24hr time to split the afternoon
  const splitEvening = 17 // 24hr time to split the evening
  const currentHour = parseFloat(String(d.getHours()))

  if (currentHour >= splitAfternoon && currentHour <= splitEvening) {
    return 'afternoon'
  }
  if (currentHour >= splitEvening) {
    return 'evening'
  }
  return 'morning'
}

const lngs = {
  // en_US: { nativeName: 'English' },
  // de_DE: { nativeName: 'Deutsch' },
  // zh_CN: { nativeName: 'China' },
  // zh_TW: { nativeName: 'China' },
  en: { nativeName: 'English' },
  de: { nativeName: 'Deutsch' },
  cn: { nativeName: 'China-CN' },
  tw: { nativeName: 'China-TW' },
}
function I18n() {
  const { t, i18n } = useTranslation()
  const [count, setCount] = useState(0)
  return (
    <div className="I18n">
      <p>
        <Trans i18nKey="description.part1">
          {/* Edit1 <1>src/App.js</1> and save to reload2. */}
          Edit <code>src/I18n.js</code> and save to reload.
        </Trans>
      </p>
      <p>{t('description.part2')}</p>

      <hr />

      <div>
        <Space>
          {Object.keys(lngs).map((lng) => (
            <button
              key={lng}
              style={{
                fontWeight: i18n.resolvedLanguage === lng ? 'bold' : 'normal',
              }}
              type="submit"
              onClick={() => {
                setCount(count + 1)
                // eslint-disable-next-line no-restricted-globals
                location.reload()
                // eslint-disable-next-line no-debugger
                debugger
                return i18n.changeLanguage(lng)
              }}
            >
              {lngs[lng].nativeName}
            </button>
          ))}
        </Space>
        <hr />
        {/*  Interpolation and Pluralization */}
        <p>
          <i>{t('counter', { count })}</i>
        </p>
        <hr />
        <div>{t('footer.date', { date: new Date() })}</div>
        <hr />
        <div className="Footer">
          <div>
            {t('footer.date', { date: new Date(), context: getGreetingTime() })}
          </div>
        </div>
      </div>
    </div>
  )
}

export default I18n
