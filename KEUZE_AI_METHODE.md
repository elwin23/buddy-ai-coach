# Wanneer wordt welke AI-methode gebruikt?

## Overzicht

De app maakt **automatisch** de keuze tussen verschillende AI-methoden op basis van:
1. **De vraag van de gebruiker** (keywords en intentie)
2. **De context** (bijv. of er een casus-ID is)
3. **De beschikbaarheid** van componenten (RAG, fine-tuned model, lokale LLM)

## Drie AI-Methoden

### 1. 🗂️ Lokale Documenten (RAG)
**Wat**: Retrieval-Augmented Generation - zoekt in coaching materiaal en gebruikt dat als context

**Wanneer gebruikt**:
- Vragen over **coaching technieken** en **methodologieën**
- Vragen over **tools** en **oefeningen**
- Vragen die beginnen met "hoe werkt", "wat is", "welke techniek"
- Vragen over **literatuur** en **bronnen**

**Keywords die RAG triggeren**:
- "techniek", "methodiek", "methode"
- "tool", "oefening"
- "literatuur", "bron", "materiaal"
- "hoe werkt", "wat is"

**Voorbeelden**:
- ✅ "Wat zijn goede coaching technieken voor stress?"
- ✅ "Hoe werkt de GROW methodiek?"
- ✅ "Welke oefeningen zijn geschikt voor team coaching?"
- ✅ "Wat is de beste tool voor doelstellingen?"

---

### 2. 🤖 Lokale AI (Fine-tuned of Base Model)
**Wat**: Directe AI-generatie zonder document retrieval

**Wanneer gebruikt**:
- **Casus analyse** en **beoordeling**
- **Gestructureerde adviezen** over cliënten
- **Algemene coaching vragen** zonder specifieke materiaal referentie
- Wanneer er een **case_id** in de context zit

**Keywords die lokale AI triggeren**:
- "casus", "cliënt", "sessie"
- "notitie", "doel", "voortgang"
- "analyseer", "beoordeel", "adviseer over casus"

**Voorbeelden**:
- ✅ "Analyseer deze casus en geef advies"
- ✅ "Wat zijn de belangrijkste issues in deze casus?"
- ✅ "Geef een gestructureerd overzicht van deze cliënt"
- ✅ "Hoe kan ik deze cliënt helpen met werkstress?" (zonder specifieke techniek vraag)

---

### 3. 🔄 Gecombineerd (RAG + Lokale AI)
**Wat**: Combineert beide methoden voor het beste resultaat

**Wanneer gebruikt**:
- **Triage** vragen (prioriteit, urgentie, complexiteit)
- **Algemene vragen** zonder duidelijke use case
- Wanneer de vraag zowel materiaal als expertise vereist

**Keywords die combinatie triggeren**:
- "triage", "prioriteit", "urgent"
- "complexiteit", "categoriseer"

**Voorbeelden**:
- ✅ "Triage deze casus"
- ✅ "Wat is de prioriteit van deze situatie?"
- ✅ "Welke coaching type past hierbij?"
- ✅ "Hoe kan ik een cliënt helpen met werkstress?" (standaard, gebruikt beide)

---

## Hoe werkt de automatische keuze?

### Stap 1: Query Analyse
```python
# De orchestration service analyseert de vraag
use_case = determine_use_case(query, context)
```

### Stap 2: Keyword Matching
De service checkt op keywords in deze volgorde:
1. **Material keywords** → RAG alleen
2. **Triage keywords** → Beide (fine-tuned prioriteit)
3. **Case keywords** → Fine-tuned model
4. **Context check** → Als `case_id` aanwezig → Fine-tuned
5. **Default** → Gecombineerd (balanced)

### Stap 3: Response Generatie
```python
if use_case == MATERIAL_CONSULTATION:
    return rag_only_response(query)
elif use_case == CASE_MANAGEMENT:
    return fine_tuned_response(query, context)
elif use_case == TRIAGE:
    return combined_response(query, prioritize="fine_tuned")
else:
    return combined_response(query, prioritize="balanced")
```

---

## Visueel Overzicht

```
Gebruiker stelt vraag
        ↓
Orchestration Layer analyseert vraag
        ↓
    ┌───┴───┐
    │       │
Keywords?  Context?
    │       │
    ↓       ↓
┌─────────────────────────────┐
│ Use Case Detectie            │
├─────────────────────────────┤
│ 1. "techniek" → RAG          │
│ 2. "casus" → Fine-tuned      │
│ 3. "triage" → Beide          │
│ 4. case_id → Fine-tuned      │
│ 5. default → Beide           │
└─────────────────────────────┘
        ↓
    ┌───┴───┐
    │       │
   RAG    LLM
    │       │
    └───┬───┘
        ↓
   Response
```

---

## Handmatige Override (Toekomst)

In de toekomst kan de gebruiker mogelijk handmatig kiezen:

```typescript
// Frontend voorbeeld (nog niet geïmplementeerd)
const response = await chat({
  message: "Wat zijn goede technieken?",
  method: "rag" // of "llm" of "both" of "auto"
})
```

Momenteel is dit nog niet beschikbaar - alles gebeurt automatisch.

---

## Fallback Strategie

Als een component niet beschikbaar is:

1. **RAG faalt** → Fallback naar lokale LLM
2. **Fine-tuned model niet beschikbaar** → Gebruik base model
3. **Lokale LLM niet beschikbaar** → Error message met instructies

---

## Praktische Voorbeelden

### Voorbeeld 1: Materiaal Vraag
**Vraag**: "Wat zijn goede coaching technieken voor stress?"

**Detectie**:
- Keyword: "techniek" → `MATERIAL_CONSULTATION`
- Methode: **RAG alleen**
- Proces:
  1. Zoek in vector database naar relevante coaching materiaal
  2. Haal top 5 relevante documenten op
  3. Gebruik lokale LLM met document context
  4. Return antwoord + bronnen

**Resultaat**: Antwoord gebaseerd op coaching materiaal met bronvermelding

---

### Voorbeeld 2: Casus Vraag
**Vraag**: "Analyseer deze casus en geef advies" (met case_id)

**Detectie**:
- Keyword: "casus" + context: `case_id` → `CASE_MANAGEMENT`
- Methode: **Fine-tuned model**
- Proces:
  1. Haal geanonimiseerde casus context op
  2. Gebruik fine-tuned model (of base model) met coaching-specifieke prompt
  3. Return gestructureerd advies

**Resultaat**: Coaching-specifiek advies zonder materiaal referenties

---

### Voorbeeld 3: Triage Vraag
**Vraag**: "Triage deze casus"

**Detectie**:
- Keyword: "triage" → `TRIAGE`
- Methode: **Beide (fine-tuned prioriteit)**
- Proces:
  1. Fine-tuned model voor triage logica
  2. RAG voor relevante methodologieën
  3. Combineer beide responses

**Resultaat**: Triage advies met relevante coaching methoden

---

### Voorbeeld 4: Algemene Vraag
**Vraag**: "Hoe kan ik een cliënt helpen met werkstress?"

**Detectie**:
- Geen specifieke keywords → `COMBINED_ADVISORY`
- Methode: **Beide (balanced)**
- Proces:
  1. RAG voor relevante coaching materiaal over werkstress
  2. Fine-tuned model voor algemeen coaching advies
  3. Combineer beide balanced

**Resultaat**: Compleet antwoord met materiaal referenties en coaching expertise

---

## Technische Details

### Orchestration Service
**Locatie**: `backend/app/services/orchestration.py`

**Belangrijkste functies**:
- `determine_use_case()` - Detecteert welke use case
- `generate_response()` - Genereert response op basis van use case
- `_rag_only_response()` - RAG alleen
- `_fine_tuned_response()` - Fine-tuned alleen
- `_combined_response()` - Beide gecombineerd

### RAG Service
**Locatie**: `backend/app/services/rag.py`

**Functionaliteit**:
- Vector search in ChromaDB
- Document retrieval
- Context building
- Response generatie met lokale LLM

### Lokale LLM Service
**Locatie**: `backend/app/services/local_llm.py`

**Backends**:
- **Ollama** (standaard) - `http://localhost:11434`
- **vLLM** - Voor productie
- **Transformers** - Direct model loading

---

## Status Check

Je kunt de status van alle componenten checken:

```python
status = hybrid_orchestration_service.get_system_status()
# Returns:
# {
#   "rag_available": True,
#   "fine_tuned_model_available": False,
#   "local_llm_available": True,
#   "method": "hybrid_system"
# }
```

---

## Samenvatting

| Vraag Type | Methode | Wanneer |
|------------|---------|---------|
| **Materiaal consultatie** | RAG alleen | Keywords: techniek, methodiek, tool, oefening |
| **Casus beheer** | Fine-tuned | Keywords: casus, cliënt, analyseer + context |
| **Triage** | Beide (fine-tuned prioriteit) | Keywords: triage, prioriteit, urgent |
| **Algemeen** | Beide (balanced) | Geen specifieke keywords |

**Belangrijk**: De keuze wordt **automatisch** gemaakt - de gebruiker hoeft niets te kiezen!

---

## Toekomstige Verbeteringen

1. **Gebruiker kan handmatig kiezen** - UI toggle voor methode selectie
2. **Betere use case detectie** - ML-gebaseerde intentie detectie
3. **Performance optimalisatie** - Caching van responses
4. **Feedback loop** - Gebruiker kan aangeven welke methode beter werkte
