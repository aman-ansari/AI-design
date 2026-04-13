import { motion } from 'framer-motion'
import { FiArrowUpRight, FiCheckCircle, FiCode, FiDatabase, FiLayers, FiSmartphone } from 'react-icons/fi'

const services = [
  {
    icon: FiCode,
    title: 'Custom Software Development',
    description: 'Enterprise-grade web platforms, SaaS products, and API-first solutions built for scale.',
  },
  {
    icon: FiSmartphone,
    title: 'Mobile App Engineering',
    description: 'iOS and Android apps with premium UX, delightful animations, and robust performance.',
  },
  {
    icon: FiDatabase,
    title: 'Cloud & DevOps',
    description: 'Cloud migration, CI/CD automation, and observability pipelines for reliable deployments.',
  },
  {
    icon: FiLayers,
    title: 'UI/UX Design Systems',
    description: 'Brand-aligned interfaces with reusable components and conversion-focused user journeys.',
  },
]

const process = [
  'Discovery workshops and strategic roadmap',
  'Agile sprint execution with transparent reporting',
  'Performance optimization and quality assurance',
  'Launch support and long-term product evolution',
]

const stagger = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: {
      staggerChildren: 0.15,
    },
  },
}

const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  show: { opacity: 1, y: 0, transition: { duration: 0.7, ease: 'easeOut' } },
}

export default function App() {
  return (
    <div className="page">
      <header className="nav">
        <div className="logo">ASZ<span>Forest</span></div>
        <button className="cta">Start a Project</button>
      </header>

      <motion.section className="hero" variants={stagger} initial="hidden" animate="show">
        <motion.p variants={fadeUp} className="eyebrow">ASZ TECHNOLOGIES • DIGITAL PRODUCT STUDIO</motion.p>
        <motion.h1 variants={fadeUp}>Software experiences that feel alive.</motion.h1>
        <motion.p variants={fadeUp} className="subtext">
          A TheForest-inspired landing page powered by Framer Motion. Content direction reflects core offerings from ASZ Technologies—software development, mobile apps, cloud services, and digital transformation.
        </motion.p>
        <motion.div variants={fadeUp} className="hero-actions">
          <button className="primary">Explore Services <FiArrowUpRight /></button>
          <button className="ghost">Book Consultation</button>
        </motion.div>
      </motion.section>

      <section className="marquee-wrap">
        <motion.div
          className="marquee"
          animate={{ x: ['0%', '-50%'] }}
          transition={{ duration: 14, ease: 'linear', repeat: Infinity }}
        >
          {Array.from({ length: 10 }).map((_, i) => (
            <span key={i}>Web Apps • Mobile Apps • Cloud • AI Integrations • Product Design • </span>
          ))}
        </motion.div>
      </section>

      <motion.section className="services" variants={stagger} initial="hidden" whileInView="show" viewport={{ once: true, amount: 0.2 }}>
        <motion.h2 variants={fadeUp}>What we build</motion.h2>
        <div className="grid">
          {services.map((service) => {
            const Icon = service.icon
            return (
              <motion.article key={service.title} variants={fadeUp} whileHover={{ y: -8 }} className="card">
                <Icon />
                <h3>{service.title}</h3>
                <p>{service.description}</p>
              </motion.article>
            )
          })}
        </div>
      </motion.section>

      <motion.section className="process" variants={stagger} initial="hidden" whileInView="show" viewport={{ once: true, amount: 0.2 }}>
        <motion.h2 variants={fadeUp}>How we deliver</motion.h2>
        <div className="process-list">
          {process.map((item) => (
            <motion.div key={item} variants={fadeUp} className="process-item">
              <FiCheckCircle />
              <p>{item}</p>
            </motion.div>
          ))}
        </div>
      </motion.section>

      <motion.section className="cta-banner" initial={{ opacity: 0, scale: 0.95 }} whileInView={{ opacity: 1, scale: 1 }} viewport={{ once: true }} transition={{ duration: 0.8 }}>
        <h2>Need a modern software partner?</h2>
        <p>Let’s craft your next platform with cinematic design, clean architecture, and measurable outcomes.</p>
        <button className="primary">Get Proposal <FiArrowUpRight /></button>
      </motion.section>
    </div>
  )
}
