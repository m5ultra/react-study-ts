import { Space } from 'antd'
import { useTranslation, Trans } from 'react-i18next'
import { useState } from 'react'

const lngs = {
  // en_US: { nativeName: 'English' },
  // de_DE: { nativeName: 'Deutsch' },
  // zh_CN: { nativeName: 'China' },
  // zh_TW: { nativeName: 'China' },
  en: { nativeName: 'English' },
  de: { nativeName: 'Deutsch' },
  cn: { nativeName: 'China' },
  tw: { nativeName: 'China' },
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
      </div>
    </div>
  )
}

export default I18n
