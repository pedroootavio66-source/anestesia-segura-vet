import Navbar from './components/Navbar'
import Hero from './components/Hero'
import LogosStrip from './components/LogosStrip'
import Missao from './components/Missao'
import Diferenciais from './components/Diferenciais'
import Cronograma from './components/Cronograma'
import ParaQuem from './components/ParaQuem'
import OQueVaiDominar from './components/OQueVaiDominar'
import Instrutor from './components/Instrutor'
import Investimento from './components/Investimento'
import FAQ from './components/FAQ'
import CTAFinal from './components/CTAFinal'
import Footer from './components/Footer'
import WhatsAppFloat from './components/WhatsAppFloat'

function App() {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <LogosStrip />
        <Missao />
        <Diferenciais />
        <Cronograma />
        <ParaQuem />
        <OQueVaiDominar />
        <Instrutor />
        <Investimento />
        <FAQ />
        <CTAFinal />
      </main>
      <Footer />
      <WhatsAppFloat />
    </>
  )
}

export default App
