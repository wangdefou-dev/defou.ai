import { useEffect, useState } from 'react'
import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import { Phone, Mail, Globe, ArrowRight, X } from 'lucide-react'

const wechatId = 'wangdefou_ai'

export default function Contact() {
  const [ref, inView] = useInView({ threshold: 0.1, triggerOnce: true })
  const [open, setOpen] = useState(false)

  useEffect(() => {
    if (!open) return
    const onKey = e => { if (e.key === 'Escape') setOpen(false) }
    window.addEventListener('keydown', onKey)
    document.body.style.overflow = 'hidden'
    return () => {
      window.removeEventListener('keydown', onKey)
      document.body.style.overflow = ''
    }
  }, [open])

  return (
    <section id="contact" className="relative py-36 px-6" ref={ref}>
      <div className="max-w-4xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          className="relative rounded-3xl overflow-hidden"
        >
          <div className="absolute inset-0 bg-[#1c1917]/50 backdrop-blur-xl" />
          <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-primary/30 to-transparent" />

          <div className="relative p-10 md:p-16 text-center">
            <h2 className="text-4xl md:text-5xl font-bold text-warm-white mb-5 tracking-tight">
              开启你的<span className="shimmer-text">AI转型之旅</span>
            </h2>
            <p className="text-warm-gray text-lg mb-12 max-w-xl mx-auto leading-relaxed">
              我们不只提供方案，我们和你一起把AI跑起来。
            </p>

            <div className="flex flex-col sm:flex-row gap-6 justify-center mb-12">
              {[
                { icon: Phone, label: '电话', value: '131 6866 2285' },
                { icon: Mail, label: '邮箱', value: 'wangyang@defou.ai' },
                { icon: Globe, label: '官网', value: 'defou.ai' },
              ].map(item => {
                const Icon = item.icon
                return (
                  <div key={item.label} className="flex items-center gap-3 text-left">
                    <div className="w-10 h-10 rounded-xl bg-primary/8 flex items-center justify-center">
                      <Icon size={16} className="text-primary/80" />
                    </div>
                    <div>
                      <div className="text-xs text-text-muted uppercase tracking-wider">{item.label}</div>
                      <div className="text-base text-warm-gray">{item.value}</div>
                    </div>
                  </div>
                )
              })}
            </div>

            <p className="text-sm text-text-muted mb-8">联系人：得否</p>

            <button
              type="button"
              onClick={() => setOpen(true)}
              className="group inline-flex items-center gap-2 px-10 py-4 rounded-2xl bg-primary hover:bg-primary-light text-[#09090b] font-semibold text-lg transition-all duration-300 hover:shadow-[0_0_40px_rgba(217,119,6,0.2)]"
            >
              立即联系
              <ArrowRight size={20} className="group-hover:translate-x-1 transition-transform" />
            </button>
          </div>
        </motion.div>
      </div>

      {open && (
        <div className="fixed inset-0 z-[60] flex items-center justify-center p-6">
          <button
            type="button"
            aria-label="关闭"
            className="absolute inset-0 bg-black/70 backdrop-blur-sm"
            onClick={() => setOpen(false)}
          />
          <div
            role="dialog"
            aria-labelledby="wechat-title"
            className="relative w-full max-w-sm glass-card rounded-3xl p-8 text-center"
          >
            <div className="absolute top-0 left-8 right-8 h-px bg-gradient-to-r from-transparent via-primary/40 to-transparent" />
            <button
              type="button"
              aria-label="关闭"
              onClick={() => setOpen(false)}
              className="absolute top-4 right-4 w-8 h-8 rounded-lg text-warm-gray hover:text-warm-white hover:bg-white/[0.04] flex items-center justify-center transition-colors"
            >
              <X size={18} />
            </button>
            <h3 id="wechat-title" className="text-xl font-bold text-warm-white mb-2">微信扫码联系</h3>
            <p className="text-sm text-text-muted mb-6">添加时请备注来意</p>
            <div className="rounded-2xl bg-white p-3 mb-5">
              <img src="/wechat-qr.webp" alt="得否微信二维码" className="w-full h-auto rounded-xl" />
            </div>
            <p className="font-mono text-sm text-warm-gray">{wechatId}</p>
          </div>
        </div>
      )}
    </section>
  )
}
