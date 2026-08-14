import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import { FileSearch, Library, PenLine, UserRoundCheck, Calculator } from 'lucide-react'

const featured = {
  icon: FileSearch,
  num: '01',
  title: '智能招聘 Agent',
  tagline: '多个岗位的简历获取、初筛和面试官通知，全自动运行',
  desc: '当前单个 Agent 可负责超过 8 个岗位，每天筛选超过 200 份简历，并将合适候选人通知给面试官。',
  stats: [
    { num: '8+', label: '岗位并行' },
    { num: '200+', label: '份简历 / 天' },
  ],
  tags: ['按岗位标准自动获取和初筛简历', '多岗位并行，不用为每个职位单独盯着', '合适的候选人自动通知面试官'],
}

const rest = [
  {
    icon: Library,
    num: '02',
    title: '企业知识库',
    tagline: '把散落的制度、经验和文件，变成员工能问、能查的内部资产',
    desc: '员工用日常语言提问，系统按公司自己的材料回答，而不是网上的通用说法。',
    tags: ['整理制度、话术、项目资料，建成可检索的知识库', '新人和跨部门按同一口径查问题', '减少把老人问一遍的重复消耗'],
  },
  {
    icon: PenLine,
    num: '03',
    title: 'AI 内容生产系统',
    tagline: '从对标、选题、文案到成稿，按企业自己的材料和节奏出内容',
    desc: '监控对标账号，按品牌口径改写，成稿进文档，人工过一眼再发。',
    tags: ['对标拆题，减少每天想发什么', '按自己的产品和话术生成文案、口播脚本', '成稿归档，保证有人审再发出去'],
  },
  {
    icon: UserRoundCheck,
    num: '04',
    title: '存量客户盘活系统',
    tagline: '老客户不是没需求，是没人按点去跟',
    desc: '按消费和沉睡时间分层，自动给出回访、复购、到期续费名单。',
    tags: ['客户自动分层，谁该跟一眼能看清', '到期和沉睡客户按时提醒', '店员拿到的是可执行的跟进名单，不是一堆表格'],
  },
  {
    icon: Calculator,
    num: '05',
    title: '智能报价系统',
    tagline: '把询价、算价、回价收成一套能复用的流程',
    desc: '按客户需求和报价规则生成草案，销售确认后发出，少漏项、少算错。',
    tags: ['按规格、数量、附加项自动汇总报价', '不同门店、不同销售用同一套口径', '改完即可发出，不用每次重算'],
  },
]

function AbilityList({ items }) {
  return (
    <ul className="space-y-2.5">
      {items.map(tag => (
        <li key={tag} className="flex items-start gap-2.5 text-sm text-warm-gray leading-relaxed">
          <span className="mt-2 w-1 h-1 rounded-full bg-primary/70 shrink-0" />
          {tag}
        </li>
      ))}
    </ul>
  )
}

export default function Solutions() {
  const [ref, inView] = useInView({ threshold: 0.08, triggerOnce: true })
  const FeaturedIcon = featured.icon

  return (
    <section id="solutions" className="relative py-36 px-6 overflow-hidden" ref={ref}>
      <div className="absolute -left-24 top-24 w-80 h-80 rounded-full border border-primary/[0.06]" />
      <div className="absolute -left-8 top-40 w-48 h-48 rounded-full border border-primary/[0.04]" />
      <div className="absolute right-0 bottom-10 w-72 h-72 rounded-full bg-[radial-gradient(circle,rgba(217,119,6,0.06),transparent_70%)]" />

      <div className="relative max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          className="text-center mb-20"
        >
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-primary/20 bg-primary/5 text-sm mb-6">
            <div className="w-1.5 h-1.5 rounded-full bg-primary" />
            <span className="text-primary-light font-medium">Solutions</span>
          </div>
          <h2 className="text-4xl md:text-5xl font-bold text-warm-white mb-5 tracking-tight">
            场景<span className="text-primary">解决方案</span>
          </h2>
          <p className="text-warm-gray text-lg">针对高频业务场景，交付能直接跑的系统</p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 36 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
          className="group relative glass-card glass-card-hover rounded-3xl p-8 md:p-10 mb-6 overflow-hidden transition-all duration-500"
        >
          <div className="absolute top-0 left-10 right-10 h-px bg-gradient-to-r from-transparent via-primary/40 to-transparent" />
          <span className="pointer-events-none absolute -right-4 -top-8 font-mono text-[140px] leading-none font-bold text-primary/[0.05] select-none">
            {featured.num}
          </span>

          <div className="relative grid md:grid-cols-[1fr_auto] gap-10 items-start">
            <div>
              <div className="flex items-center gap-4 mb-6">
                <div className="w-14 h-14 rounded-2xl bg-primary/10 border border-primary/15 flex items-center justify-center group-hover:bg-primary/14 transition-colors">
                  <FeaturedIcon size={24} className="text-primary" />
                </div>
                <div>
                  <div className="text-sm font-mono text-primary/80 mb-1">{featured.num}</div>
                  <h3 className="text-2xl font-bold text-warm-white">{featured.title}</h3>
                </div>
              </div>
              <p className="text-primary/90 text-base mb-3 leading-relaxed">{featured.tagline}</p>
              <p className="text-text-muted text-base leading-relaxed mb-6 max-w-2xl">{featured.desc}</p>
              <AbilityList items={featured.tags} />
            </div>

            <div className="grid grid-cols-2 md:grid-cols-1 gap-3 min-w-[180px]">
              {featured.stats.map(stat => (
                <div key={stat.label} className="rounded-2xl border border-white/[0.05] bg-white/[0.02] px-6 py-5 text-center">
                  <div className="text-3xl font-bold text-warm-white tracking-tight">{stat.num}</div>
                  <div className="text-sm text-text-muted mt-1">{stat.label}</div>
                </div>
              ))}
            </div>
          </div>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-6">
          {rest.map((item, i) => {
            const Icon = item.icon
            return (
              <motion.div
                key={item.title}
                initial={{ opacity: 0, y: 32 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.6, delay: 0.12 + i * 0.08, ease: [0.16, 1, 0.3, 1] }}
                className="group relative glass-card glass-card-hover rounded-2xl p-7 overflow-hidden transition-all duration-500 hover:-translate-y-1"
              >
                <div className="absolute top-0 left-8 right-8 h-px opacity-0 group-hover:opacity-100 transition-opacity bg-gradient-to-r from-transparent via-primary/35 to-transparent" />
                <span className="pointer-events-none absolute right-4 top-2 font-mono text-6xl font-bold text-primary/[0.06] select-none">
                  {item.num}
                </span>

                <div className="relative flex items-center gap-4 mb-5">
                  <div className="w-12 h-12 rounded-xl bg-primary/8 border border-primary/10 flex items-center justify-center group-hover:bg-primary/12 transition-colors">
                    <Icon size={20} className="text-primary/90" />
                  </div>
                  <div>
                    <div className="text-sm font-mono text-primary/80">{item.num}</div>
                    <h3 className="text-lg font-semibold text-warm-white">{item.title}</h3>
                  </div>
                </div>
                <p className="relative text-primary/85 text-sm mb-3 leading-relaxed">{item.tagline}</p>
                <p className="relative text-text-muted text-base leading-relaxed mb-5">{item.desc}</p>
                <AbilityList items={item.tags} />
              </motion.div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
