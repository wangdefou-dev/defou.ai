import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'

const cases = [
  { company: '华益传媒', tag: '智能招聘' },
  { company: '三和国际', tag: 'AI 转型陪跑' },
  { company: '悦学双语阅读馆', tag: '内容营销获客' },
  { company: '珠海世盈国际物流', tag: '团队 AI 落地' },
  { company: '珠海某街道办', tag: '惠民 AI 培训课' },
  { company: '某连锁汽修店', tag: '智能报价' },
  { company: '某连锁服装定制店', tag: '批量视频剪辑制作' },
  { company: '某连锁保险公司澳门分公司', tag: '企业内部知识库' },
]

export default function Cases() {
  const [ref, inView] = useInView({ threshold: 0.08, triggerOnce: true })

  return (
    <section id="cases" className="relative py-36 px-6 overflow-hidden" ref={ref}>
      <div className="absolute inset-0 dot-grid opacity-30" />
      <div className="absolute left-1/2 top-28 -translate-x-1/2 w-[520px] h-[520px] rounded-full border border-primary/[0.04]" />
      <div className="absolute left-1/2 top-48 -translate-x-1/2 w-[300px] h-[300px] rounded-full border border-primary/[0.05]" />

      <div className="relative max-w-6xl mx-auto">
        <div className="grid lg:grid-cols-[280px_1fr] gap-16 lg:gap-24 items-start">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
            className="lg:sticky lg:top-28"
          >
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-primary/20 bg-primary/5 text-sm mb-6">
              <div className="w-1.5 h-1.5 rounded-full bg-primary" />
              <span className="text-primary-light font-medium">Cases</span>
            </div>
            <h2 className="text-4xl md:text-5xl font-bold text-warm-white mb-5 tracking-tight">
              客户<span className="text-primary">案例</span>
            </h2>
            <p className="text-warm-gray text-lg leading-relaxed">已在这些团队落地</p>
            <div className="hidden lg:block mt-10 w-12 h-px bg-primary/40" />
          </motion.div>

          <div className="grid sm:grid-cols-2 border-t border-white/[0.06]">
            {cases.map((item, i) => (
              <motion.div
                key={item.company}
                initial={{ opacity: 0, y: 20 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.5, delay: 0.08 + i * 0.05, ease: [0.16, 1, 0.3, 1] }}
                className={`group relative py-12 sm:px-8 ${
                  i % 2 === 0 ? 'sm:pl-0 sm:pr-12 sm:border-r border-white/[0.06]' : 'sm:pl-12 sm:pr-0'
                } border-b border-white/[0.06]`}
              >
                <div className="absolute left-0 top-8 bottom-8 w-px bg-primary/0 group-hover:bg-primary/50 transition-colors hidden sm:block" />
                <div className="font-mono text-sm text-primary/70 mb-3">0{i + 1}</div>
                <h3 className="text-2xl md:text-3xl font-bold text-warm-white tracking-tight leading-snug mb-3 group-hover:text-primary-light transition-colors">
                  {item.company}
                </h3>
                <p className="text-base text-warm-gray">{item.tag}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
