import { Reveal } from './Reveal'

interface SectionHeaderProps {
  index?: string
  kicker: string
  title: string
  lede?: string
  dark?: boolean
  align?: 'left' | 'center'
}

/** Editorial section header: mono kicker + display headline + optional lede. */
export function SectionHeader({ index, kicker, title, lede, dark = true, align = 'left' }: SectionHeaderProps) {
  return (
    <Reveal className={align === 'center' ? 'text-center' : ''}>
      <div className={`kicker ${align === 'center' ? 'justify-center' : ''}`}>
        {index ? `${index} — ${kicker}` : kicker}
      </div>
      <h2
        className={`mt-5 font-display uppercase leading-[0.95] tracking-tight text-4xl sm:text-5xl lg:text-6xl ${
          dark ? 'text-paper' : 'text-ink'
        } ${align === 'center' ? 'mx-auto' : ''} max-w-3xl`}
      >
        {title}
      </h2>
      {lede && (
        <p
          className={`mt-6 max-w-2xl text-base sm:text-lg leading-relaxed ${
            dark ? 'text-paper/70' : 'text-ink/70'
          } ${align === 'center' ? 'mx-auto' : ''}`}
        >
          {lede}
        </p>
      )}
    </Reveal>
  )
}
