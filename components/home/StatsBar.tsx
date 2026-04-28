import { CountUp } from '@/components/shared/CountUp'
import { stats } from '@/content/stats'
import { brandHex, colorClass } from '@/lib/colors'

export function StatsBar() {
  return (
    <section className="relative py-14 border-y border-white/5 bg-bg-dark/40">
      <div className="mx-auto max-w-7xl px-5 lg:px-8 grid grid-cols-2 md:grid-cols-4 gap-8">
        {stats.map((s) => {
          const hex = brandHex[s.color]
          return (
            <div key={s.label} className="text-center">
              <div
                className={`font-display font-black leading-none text-[clamp(2.2rem,5vw,3.5rem)] ${colorClass[s.color].text}`}
                style={{ textShadow: `0 0 30px ${hex}55` }}
              >
                <CountUp end={s.value} prefix={s.prefix} suffix={s.suffix} />
              </div>
              <div className="mt-2 text-white-dim text-[0.9rem]">{s.label}</div>
            </div>
          )
        })}
      </div>
    </section>
  )
}
