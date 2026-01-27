'use client'

import Link from 'next/link'
import BuddyAvatar from '@/components/BuddyAvatar'

export default function PrivacyPage() {
  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <header className="bg-white shadow">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
          <div className="flex items-center justify-between">
            <Link href="/" className="flex items-center gap-3">
              <BuddyAvatar size="md" />
              <div>
                <h1 className="text-2xl font-bold text-gray-900">Buddy - AI Coach</h1>
              </div>
            </Link>
            <Link
              href="/"
              className="px-4 py-2 text-sm font-medium text-gray-700 bg-white border border-gray-300 rounded-md hover:bg-gray-50"
            >
              Terug naar Dashboard
            </Link>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section className="bg-gradient-to-b from-blue-50 to-white py-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="flex justify-center mb-6">
            <BuddyAvatar size="md" />
          </div>
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            Hey, ik ben Buddy.
          </h1>
          <p className="text-xl md:text-2xl text-gray-700 mb-2">
            Vraag me alles.
          </p>
          <p className="text-xl md:text-2xl font-semibold text-blue-600">
            Het is vertrouwlijk.
          </p>
        </div>
      </section>

      {/* Main Content */}
      <main className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* AI die je privacy respecteert */}
        <section className="mb-16">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">
            AI die je privacy respecteert
          </h2>
          <p className="text-lg text-gray-700 leading-relaxed">
            Een AI-assistent zou je moeten helpen, niet je data exploiteren. Dat ben ik, Buddy.
          </p>
          <p className="text-lg text-gray-700 leading-relaxed mt-4">
            Ik ben ontworpen om je alle voordelen van AI te bieden, zonder je privacy te schenden. 
            Van het team achter privacy-first technologie, gebouwd met respect voor jouw gegevens.
          </p>
        </section>

        {/* Je chats zijn van jou */}
        <section className="mb-16">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">
            Je chats zijn van jou en alleen van jou
          </h2>
          <p className="text-lg text-gray-700 leading-relaxed">
            AI's van Big Tech zijn gebouwd op het verzamelen van jouw data. Maar Buddy is anders. 
            We bewaren geen logs van wat je vraagt, of wat ik antwoord. Je chats kunnen niet worden 
            gezien, gedeeld, of gebruikt om je te profileren.
          </p>
        </section>

        {/* Beveiligd door geavanceerde beveiliging */}
        <section className="mb-16">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">
            Beveiligd door geavanceerde beveiliging
          </h2>
          <p className="text-lg text-gray-700 leading-relaxed">
            Dankzij zero-access encryptie kunnen de gesprekken die je opslaat alleen worden gedecodeerd 
            en gelezen op jouw apparaat. Buddy kan ze nooit zien, en niemand anders ook niet.
          </p>
          <div className="mt-6 p-4 bg-blue-50 rounded-lg border border-blue-200">
            <h3 className="font-semibold text-blue-900 mb-2">Zero-Access Encryptie</h3>
            <p className="text-blue-800">
              Alle data wordt lokaal versleuteld voordat het wordt opgeslagen. Zelfs als iemand 
              toegang krijgt tot onze servers, kunnen ze je gesprekken niet lezen.
            </p>
          </div>
        </section>

        {/* Compliance & Certificeringen */}
        <section className="mb-16">
          <h2 className="text-3xl font-bold text-gray-900 mb-6">
            Compliance & Certificeringen
          </h2>
          <p className="text-lg text-gray-700 leading-relaxed mb-8">
            We voldoen aan wereldwijde regelgevingsstandaarden en beveiligingskaders om ervoor te zorgen 
            dat jouw data met de grootste zorg wordt behandeld en in overeenstemming met internationale 
            regelgeving.
          </p>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {/* ISO/IEC 27001:2022 */}
            <div className="bg-white p-6 rounded-lg border border-gray-200 shadow-sm">
              <div className="text-4xl mb-4">🔒</div>
              <h3 className="text-xl font-bold text-gray-900 mb-2">ISO/IEC 27001:2022</h3>
              <p className="text-gray-700 text-sm">
                Wereldwijd erkend voor informatiebeveiliging. Beschermt jouw data door strenge controles 
                die vertrouwelijkheid, integriteit en beschikbaarheid handhaven.
              </p>
            </div>

            {/* ISO/IEC 27701:2019 */}
            <div className="bg-white p-6 rounded-lg border border-gray-200 shadow-sm">
              <div className="text-4xl mb-4">🛡️</div>
              <h3 className="text-xl font-bold text-gray-900 mb-2">ISO/IEC 27701:2019</h3>
              <p className="text-gray-700 text-sm">
                Wereldwijde privacy management standaard. Zorgt ervoor dat persoonsgegevens verantwoord, 
                transparant en in overeenstemming met de AVG worden behandeld.
              </p>
            </div>

            {/* GDPR */}
            <div className="bg-white p-6 rounded-lg border border-gray-200 shadow-sm">
              <div className="text-4xl mb-4">🇪🇺</div>
              <h3 className="text-xl font-bold text-gray-900 mb-2">AVG/GDPR</h3>
              <p className="text-gray-700 text-sm">
                Buddy voldoet aan de Algemene Verordening Gegevensbescherming (AVG), waardoor 
                persoonsgegevens van EU-gebruikers veilig, transparant en met respect voor privacy 
                worden behandeld.
              </p>
            </div>

            {/* SOC2 */}
            <div className="bg-white p-6 rounded-lg border border-gray-200 shadow-sm">
              <div className="text-4xl mb-4">✅</div>
              <h3 className="text-xl font-bold text-gray-900 mb-2">SOC 2</h3>
              <p className="text-gray-700 text-sm">
                Buddy's beveiliging, beschikbaarheid, verwerkingsintegriteit, vertrouwelijkheid en 
                privacycontroles voldoen aan industriestandaarden, gevalideerd door onafhankelijke 
                SOC 2 Type II audits.
              </p>
            </div>

            {/* HIPAA */}
            <div className="bg-white p-6 rounded-lg border border-gray-200 shadow-sm">
              <div className="text-4xl mb-4">🏥</div>
              <h3 className="text-xl font-bold text-gray-900 mb-2">HIPAA</h3>
              <p className="text-gray-700 text-sm">
                Buddy volgt HIPAA-vereisten om de privacy en beveiliging van gezondheidsgerelateerde 
                informatie van individuen te beschermen, geverifieerd door onafhankelijke beoordelingen.
              </p>
            </div>

            {/* EN 18031 */}
            <div className="bg-white p-6 rounded-lg border border-gray-200 shadow-sm">
              <div className="text-4xl mb-4">🔐</div>
              <h3 className="text-xl font-bold text-gray-900 mb-2">EN 18031</h3>
              <p className="text-gray-700 text-sm">
                Buddy's hardware voldoet aan EN 18031-standaarden voor fysieke en logische beveiliging, 
                waardoor onze systemen robuust zijn tegen manipulatie en onbevoegde toegang.
              </p>
            </div>
          </div>
        </section>

        {/* En het vertrouwen dat jij de controle hebt */}
        <section className="mb-16">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">
            En het vertrouwen dat jij de controle hebt
          </h2>
          <p className="text-lg text-gray-700 leading-relaxed">
            We delen — en kunnen — jouw informatie niet delen met wie dan ook, inclusief adverteerders 
            en overheden. En Buddy is een Europese dienst die onderworpen is aan de AVG (GDPR), 
            dus je kunt je data altijd verwijderen.
          </p>
          <div className="mt-6 grid md:grid-cols-2 gap-4">
            <div className="p-4 bg-gray-50 rounded-lg border border-gray-200">
              <h3 className="font-semibold text-gray-900 mb-2">AVG/GDPR Compliant</h3>
              <p className="text-gray-700 text-sm">
                Volledige naleving van Europese privacywetgeving. Je hebt altijd het recht om je data 
                te bekijken, exporteren of verwijderen.
              </p>
            </div>
            <div className="p-4 bg-gray-50 rounded-lg border border-gray-200">
              <h3 className="font-semibold text-gray-900 mb-2">Geen Data Sharing</h3>
              <p className="text-gray-700 text-sm">
                We verkopen of delen je data niet met derden. Geen adverteerders, geen data brokers, 
                geen overheden.
              </p>
            </div>
          </div>
        </section>

        {/* Gebouwd en gevestigd in Europa */}
        <section className="mb-16">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">
            Gebouwd en gevestigd in Europa
          </h2>
          <p className="text-lg text-gray-700 leading-relaxed">
            Dankzij onze juridische thuisbasis profiteert Buddy van robuuste privacybescherming, 
            vrij van Big Tech surveillance en buiten de Amerikaanse jurisdictie.
          </p>
        </section>

        {/* Privacy Principes */}
        <section className="mb-16 bg-blue-50 rounded-lg p-8 border border-blue-200">
          <h2 className="text-3xl font-bold text-gray-900 mb-6">
            Onze Privacy Principes
          </h2>
          <div className="space-y-4">
            <div className="flex items-start gap-3">
              <span className="text-2xl">🔒</span>
              <div>
                <h3 className="font-semibold text-gray-900 mb-1">Zero-Knowledge Architectuur</h3>
                <p className="text-gray-700">
                  We kunnen jouw gesprekken niet lezen, zelfs als we zouden willen. Alle data wordt 
                  lokaal versleuteld voordat het onze servers bereikt.
                </p>
              </div>
            </div>
            <div className="flex items-start gap-3">
              <span className="text-2xl">🚫</span>
              <div>
                <h3 className="font-semibold text-gray-900 mb-1">Geen Logging</h3>
                <p className="text-gray-700">
                  We bewaren geen logs van je vragen, antwoorden, of welke data je uploadt. 
                  Wat je doet, blijft privé.
                </p>
              </div>
            </div>
            <div className="flex items-start gap-3">
              <span className="text-2xl">🛡️</span>
              <div>
                <h3 className="font-semibold text-gray-900 mb-1">Lokale Verwerking</h3>
                <p className="text-gray-700">
                  Waar mogelijk verwerken we data lokaal op jouw apparaat. Alleen wat nodig is 
                  voor de AI-functionaliteit gaat naar onze servers, en dat is altijd versleuteld.
                </p>
              </div>
            </div>
            <div className="flex items-start gap-3">
              <span className="text-2xl">📋</span>
              <div>
                <h3 className="font-semibold text-gray-900 mb-1">Transparantie</h3>
                <p className="text-gray-700">
                  Je kunt precies zien wat we doen met jouw data, 
                  en verifiëren dat we doen wat we beloven.
                </p>
              </div>
            </div>
            <div className="flex items-start gap-3">
              <span className="text-2xl">🗑️</span>
              <div>
                <h3 className="font-semibold text-gray-900 mb-1">Data Verwijdering</h3>
                <p className="text-gray-700">
                  Je kunt altijd al jouw data verwijderen. Eén klik, en alles is weg. 
                  Permanently en onherroepelijk.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="text-center py-12">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">
            Klaar om met Buddy te chatten?
          </h2>
          <p className="text-lg text-gray-700 mb-6">
            Begin een vertrouwelijk gesprek over coaching technieken en methodieken.
          </p>
          <Link
            href="/"
            className="inline-block px-8 py-3 bg-blue-600 text-white font-semibold rounded-lg hover:bg-blue-700 transition-colors"
          >
            Start een chat
          </Link>
        </section>
      </main>

      {/* Footer */}
      <footer className="bg-gray-900 text-gray-300 py-8 mt-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <p className="text-sm">
              © {new Date().getFullYear()} Buddy - AI Coach. Alle rechten voorbehouden.
            </p>
            <p className="text-xs mt-2 text-gray-500">
              Privacy-first AI coaching assistent | AVG/GDPR Compliant
            </p>
          </div>
        </div>
      </footer>
    </div>
  )
}
