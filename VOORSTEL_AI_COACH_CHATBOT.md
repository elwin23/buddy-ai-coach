# Voorstel: AI Chatbot voor Coaches

## Inleiding

Dit document presenteert een voorstel met verschillende opties en beargumentatie voor een AI chatbot systeem dat coaches ondersteunt bij het bijhouden van casussen en het gebruik van coaching materiaal.

## Doelstellingen

1. **Triage Chatbot**: AI-gebaseerde triage voor casussen en coaching situaties
2. **Casusbeheer**: Gestructureerd bijhouden van cliëntinformatie, sessies en voortgang
3. **Coaching Ondersteuning**: Toegang tot relevante coaching methodieken (1op1 en teamcoaching)
4. **Audio Recording & Transcriptie**: Sessies kunnen worden opgenomen en automatisch getranscribeerd
5. **Kennisbeheer**: Organiseren en doorzoeken van coaching materiaal
6. **Workflow Optimalisatie**: Efficiënter werken voor coaches
7. **Privacy & Vertrouwen**: Volledige anonimisering van persoonsgegevens, GDPR-compliant, lokaal opslaan
8. **Multi-Tenant**: Per coach/coachpraktijk verkoopbaar systeem
9. **Sprightly Toolbox Integratie**: Koppeling met Sprightly Toolbox app voor uitgebreide coaching tools

## Privacy-First Principes

### Kernwaarden
- 🔒 **Anonimisering**: Alle persoonsgegevens worden direct geanonimiseerd bij opslag
- 🏠 **Lokale Opslag**: Data blijft lokaal bij coaches, volledig in eigen beheer
- 🔐 **End-to-End Encryptie**: Alle gevoelige data is versleuteld
- 👁️ **Transparantie**: Gebruikers zien precies wat er met hun data gebeurt
- 🤝 **Verplichte Data Sharing**: Alle coaches dragen automatisch bij aan geanonimiseerde data voor model verbetering
- ✅ **GDPR Compliance**: Volledige naleving van privacy wetgeving
- 🎯 **Centrale Training**: Geanonimiseerde data wordt centraal gebruikt voor model verbetering (Azure Data Hive)
- 🎤 **Audio Transcriptie**: Sessies kunnen worden opgenomen en automatisch getranscribeerd
- 🏢 **Multi-Tenant**: Per coach/coachpraktijk verkoopbaar systeem
- 🔗 **Sprightly Toolbox**: Integratie met Sprightly Toolbox app

### Gebruiksscenario's
- **Triage**: AI chatbot helpt bij het triageren van casussen en coaching situaties
- **Voor gesprek**: Voorbereiding met coaching materiaal, casus context ophalen (geanonimiseerd)
- **Tijdens gesprek**: Audio recording van sessies (optioneel)
- **Na gesprek**: Automatische transcriptie, verslaglegging, notities bijwerken, anonieme casusdata opslaan
- **Model Training**: Automatische geanonimiseerde data sharing voor centrale model verbetering (Azure Data Hive)
- **Sprightly Toolbox**: Koppeling met Sprightly Toolbox app voor coaching tools en methodieken
- **Multi-Tenant**: Elke coach/coachpraktijk heeft eigen geïsoleerde omgeving

---

## Optie 1: RAG-gebaseerd Systeem (Retrieval-Augmented Generation)

### Beschrijving
Een systeem dat gebruik maakt van vector databases om coaching materiaal te indexeren en relevante informatie op te halen tijdens gesprekken.

### Architectuur
- **LLM**: GPT-4, Claude, of open-source alternatief (Llama 3)
- **Vector Database**: Pinecone, Weaviate, of ChromaDB
- **Embeddings**: OpenAI embeddings of open-source alternatief
- **Backend**: Python (FastAPI) of Node.js
- **Frontend**: React/Next.js of Vue.js
- **Database**: PostgreSQL voor casusdata, vector DB voor coaching materiaal

### Voordelen
✅ **Flexibel**: Eenvoudig nieuw coaching materiaal toevoegen zonder model te hertrainen
✅ **Kosten-effectief**: Geen dure fine-tuning nodig
✅ **Transparant**: Kan bronnen tonen waar informatie vandaan komt
✅ **Schaalbaar**: Kan grote hoeveelheden coaching materiaal verwerken
✅ **Snel te implementeren**: Relatief snelle development tijd

### Nadelen
❌ **Context beperkingen**: Beperkte context window kan complexe vragen beperken
❌ **Afhankelijk van embeddings**: Kwaliteit hangt af van embedding model
❌ **Latency**: Extra retrieval stap kan responsetijd verhogen

### Gebruiksscenario's
- Vragen over specifieke coaching technieken
- Zoeken in coaching literatuur
- Casus-specifieke adviezen op basis van coaching methodieken

---

## Optie 2: Fine-tuned Model

### Beschrijving
Een specifiek getraind model op coaching materiaal en casusdata.

### Architectuur
- **Base Model**: Llama 3, Mistral, of GPT-3.5/4
- **Fine-tuning**: LoRA (Low-Rank Adaptation) voor kostenbesparing
- **Training Data**: Coaching materiaal + anonieme casusvoorbeelden
- **Backend**: Python met PyTorch/Transformers
- **Database**: PostgreSQL voor casusdata

### Voordelen
✅ **Domain-specifiek**: Model is getraind op coaching context
✅ **Consistente stijl**: Leert coaching taal en methodieken
✅ **Snellere responses**: Geen retrieval stap nodig
✅ **Betere context begrip**: Dieper begrip van coaching concepten

### Nadelen
❌ **Duur**: Fine-tuning kan kostbaar zijn
❌ **Minder flexibel**: Nieuwe informatie vereist hertraining
❌ **Data nodig**: Vereist grote hoeveelheden kwalitatieve training data
❌ **Langere development tijd**: Training en iteratie proces

### Gebruiksscenario's
- Generieke coaching adviezen
- Casus analyse en suggesties
- Coaching gesprek simulaties

---

## Optie 3: Hybride Systeem (Aanbevolen)

### Beschrijving
Combineert RAG voor coaching materiaal met een licht fine-tuned model voor coaching-specifieke taal en casusbeheer.

### Architectuur
- **RAG Component**: Voor coaching materiaal retrieval
- **Fine-tuned Component**: Voor coaching-specifieke responses
- **Casus Database**: Gestructureerde opslag van cliëntdata
- **Orchestration Layer**: Beslist wanneer welke component te gebruiken

### Voordelen
✅ **Best of both worlds**: Flexibiliteit van RAG + domain expertise van fine-tuning
✅ **Geoptimaliseerd**: RAG voor materiaal, fine-tuning voor coaching taal
✅ **Schaalbaar**: Kan groeien met behoeften
✅ **Balans**: Goede balans tussen kosten en functionaliteit

### Nadelen
❌ **Complexer**: Meer componenten om te beheren
❌ **Hogere initiële kosten**: Beide systemen opzetten
❌ **Meer onderhoud**: Twee systemen te onderhouden

### Gebruiksscenario's
- **Casusbeheer**: Fine-tuned model voor gestructureerde data entry
- **Materiaal consultatie**: RAG voor specifieke coaching technieken
- **Advisering**: Combinatie van beide voor complete adviezen

---

## Optie 4: Rule-based + LLM Hybrid

### Beschrijving
Een systeem dat gestructureerde workflows (rule-based) combineert met LLM voor natuurlijke interactie.

### Architectuur
- **Workflow Engine**: Voor gestructureerde casusbeheer workflows
- **LLM Component**: Voor natuurlijke taal interactie
- **Knowledge Base**: Gestructureerde coaching materiaal database
- **Decision Tree**: Beslist wanneer rule-based vs LLM te gebruiken

### Voordelen
✅ **Betrouwbaar**: Regel-gebaseerde componenten voor kritieke taken
✅ **Voorspelbaar**: Gestructureerde workflows voor casusbeheer
✅ **Kosten-effectief**: LLM alleen waar nodig
✅ **Compliance**: Makkelijker te auditen en valideren

### Nadelen
❌ **Minder flexibel**: Regel-gebaseerde componenten kunnen beperkend zijn
❌ **Onderhoud**: Rules moeten handmatig worden bijgewerkt
❌ **Minder natuurlijk**: Kan minder vloeiend aanvoelen

---

## Aanbeveling: Optie 3 (Hybride Systeem) ✅ GESELEECTEERD

### Redenering

1. **Flexibiliteit**: RAG component maakt het mogelijk om snel nieuw coaching materiaal toe te voegen zonder hertraining
2. **Domain Expertise**: Fine-tuned component zorgt voor coaching-specifieke taal en begrip
3. **Schaalbaarheid**: Kan groeien van MVP naar volledig systeem
4. **Kosten-baten**: Goede balans tussen functionaliteit en kosten
5. **Toekomstbestendig**: Kan eenvoudig worden uitgebreid met nieuwe features

### Implementatie Status

✅ **RAG Component**: Volledig geïmplementeerd met lokale embeddings
✅ **Orchestration Layer**: Geïmplementeerd voor automatische component selectie
✅ **Base Model**: Lokale LLM (Ollama/vLLM) geïntegreerd
⏳ **Fine-tuned Model**: Training pipeline gereed, wacht op training data
✅ **Use Case Detection**: Automatische detectie van gebruiksscenario's
✅ **Hybrid Responses**: Combinatie van RAG en fine-tuned responses

Zie [HYBRIDE_SYSTEEM_IMPLEMENTATIE.md](./HYBRIDE_SYSTEEM_IMPLEMENTATIE.md) voor gedetailleerde implementatie documentatie.

### Implementatie Fase 1 (MVP) - Privacy-First
- RAG systeem voor coaching materiaal (geen persoonsgegevens)
- Anoniem casusbeheer met automatische anonimisering
- Chat interface met privacy indicators
- Document upload functionaliteit (alleen coaching materiaal)
- Lokale encryptie van alle casusdata
- Transparantie dashboard voor data gebruik
- **Opt-in mechanisme voor geanonimiseerde data sharing**
- **Centrale anonimisering pipeline voor model training**
- **API endpoints voor Toolbox app integratie**

### Implementatie Fase 2
- **Centrale model training service** met geanonimiseerde data
- **Federated learning** voor privacy-preserving model verbetering
- Fine-tuning van model op geanonimiseerde coaching data
- Geavanceerde casus tracking
- Analytics en rapportage
- **Toolbox app integratie** (volledige koppeling)
- **Data export/import** voor Toolbox synchronisatie

### Implementatie Fase 3
- Multi-tenant support
- Geavanceerde analytics
- Mobile app
- API voor integraties

---

## Technische Specificaties

### Core Features

#### 1. Casusbeheer Module
- **Cliëntprofielen**: Naam, contact, geschiedenis
- **Sessie tracking**: Datum, notities, doelen, voortgang
- **Documenten**: Upload en koppeling aan casussen
- **Tags en categorieën**: Organisatie van casussen

#### 2. Coaching Materiaal Module
- **Document repository**: PDF, Word, markdown bestanden
- **Categorisatie**: Per coaching methodiek, thema, techniek
- **Zoekfunctionaliteit**: Semantische zoekopdrachten
- **Versiebeheer**: Tracking van materiaal updates

#### 3. AI Chat Interface
- **Context-aware**: Herinnert zich casus context
- **Bronvermelding**: Toont waar informatie vandaan komt
- **Suggesties**: Proactieve suggesties op basis van casus
- **Multi-modal**: Tekst, mogelijk later voice/afbeeldingen

#### 4. Analytics Dashboard
- **Casus overzicht**: Alle actieve casussen
- **Voortgang tracking**: Metrics per cliënt
- **Materiaal gebruik**: Welke coaching materiaal wordt vaak gebruikt
- **Trends**: Patronen in coaching praktijk

---

## Data Model Voorstel

### Casus (Case) - Geanonimiseerd
```json
{
  "id": "uuid",
  "client_pseudonym": "string",  // Geanonimiseerd: "Cliënt-A-2024"
  "client_hash": "string",        // Hash van identificatie (alleen voor matching)
  "created_at": "datetime",
  "status": "active|completed|on_hold",
  "sessions": [Session],
  "tags": ["string"],             // Geen herkenbare tags
  "notes": "text",                // Geanonimiseerde notities
  "goals": ["string"],            // Generieke doelen
  "anonymization_level": "full",  // Volledige anonimisering
  "coach_id": "uuid"              // Alleen coach heeft toegang
}
```

### Sessie (Session)
```json
{
  "id": "uuid",
  "case_id": "uuid",
  "date": "datetime",
  "duration": "minutes",
  "notes": "text",
  "topics_discussed": ["string"],
  "coaching_techniques_used": ["string"],
  "homework_assigned": "text",
  "next_steps": "text"
}
```

### Coaching Materiaal (Material)
```json
{
  "id": "uuid",
  "title": "string",
  "type": "technique|methodology|exercise|theory",
  "content": "text or file_path",
  "embedding": "vector",
  "tags": ["string"],
  "related_cases": ["uuid"]
}
```

---

## Beveiliging & Privacy (Kritiek Belangrijk)

### Privacy-First Architectuur
- **Automatische Anonimisering**: Persoonsgegevens worden direct geanonimiseerd bij input
  - Namen → Pseudoniemen (bijv. "Cliënt-A-2024")
  - Contactgegevens → Hash-waarden (alleen voor matching)
  - Herkenbare details → Generieke beschrijvingen
- **Lokale Opslag**: Alle data blijft in eigen database, geen cloud sharing
- **End-to-End Encryptie**: 
  - AES-256 encryptie voor data at rest
  - TLS 1.3 voor data in transit
  - Encrypted backups
- **Zero-Knowledge Design**: 
  - LLM API calls bevatten geen persoonsgegevens
  - Alleen geanonimiseerde context wordt gebruikt
  - Coaching materiaal queries zijn volledig gescheiden van casusdata

### Data Beheer
- **Access Control**: 
  - Per-coach toegangsrechten
  - Multi-factor authenticatie
  - Session management
- **Audit Logging**: 
  - Alle acties gelogd (wie, wat, wanneer)
  - Geen logging van persoonsgegevens
  - Privacy-compliant audit trails
- **Data Retention**: 
  - Configureerbare retention policies
  - Automatische verwijdering na X jaar
  - Export functionaliteit voor gebruiker
- **Right to be Forgotten**: 
  - Volledige verwijdering van casusdata op verzoek
  - Verificatie proces voor verwijdering

### Transparantie Features
- **Privacy Dashboard**: 
  - Overzicht van opgeslagen data
  - Data gebruik statistieken
  - Export/verwijder opties
- **Data Flow Visualisatie**: 
  - Toont waar data wordt gebruikt
  - Geen externe sharing indicators
- **Consent Management**: 
  - Duidelijke toestemming voor data gebruik
  - Opt-out mogelijkheden

---

## Kosten Schatting (Maandelijks)

### Optie 1 (RAG Only)
- LLM API: €50-200 (afhankelijk van gebruik)
- Vector DB: €0-50 (Pinecone/Weaviate)
- Hosting: €20-100 (VPS/Cloud)
- **Totaal: €70-350/maand**

### Optie 2 (Fine-tuned)
- Training: €500-2000 (eenmalig)
- Inference: €100-500/maand
- Hosting: €50-200/maand
- **Totaal: €150-700/maand + initiële training**

### Optie 3 (Hybride) - Aanbevolen
- LLM API: €75-300/maand
- Vector DB: €25-75/maand
- Fine-tuning hosting: €50-150/maand
- Hosting: €50-200/maand
- **Totaal: €200-725/maand**

---

## Implementatie Roadmap

### Maand 1-2: Planning & Setup
- Requirements definitie
- Technologie stack keuze
- Development environment setup
- Basis architectuur

### Maand 3-4: MVP Development
- RAG systeem implementatie
- Basis casusbeheer
- Chat interface
- Document upload

### Maand 5-6: Fine-tuning & Uitbreiding
- Fine-tuning van model
- Geavanceerde features
- Testing & iteratie
- User feedback integratie

### Maand 7-8: Polish & Launch
- UI/UX verbeteringen
- Performance optimalisatie
- Security audit
- Launch voorbereiding

---

## Conclusie

Het **Hybride Systeem (Optie 3)** biedt de beste balans tussen functionaliteit, flexibiliteit en kosten. Het combineert de voordelen van RAG voor flexibele materiaal toegang met fine-tuning voor coaching-specifieke expertise.

**Volgende Stappen:**
1. Bevestiging van gekozen optie
2. Gedetailleerde requirements definitie
3. Technologie stack finalisatie
4. Development team samenstelling
5. Start MVP development

---

## Vragen voor Verduidelijking

1. Welke coaching methodieken zijn het belangrijkst?
2. Hoeveel coaches zullen het systeem gebruiken?
3. Wat is het budget voor ontwikkeling en operationele kosten?
4. Zijn er specifieke compliance eisen (bijv. BIG-registratie)?
5. Welke bestaande systemen moeten geïntegreerd worden?
6. Wat is de gewenste launch datum?

