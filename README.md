# 🦆 Buddy - AI Coach

Privacy-first AI coaching assistant met lokale LLM integratie.

## Features

- ✅ Privacy-first architectuur
- ✅ Lokale AI (Ollama integratie)
- ✅ Chat interface met Buddy
- ✅ Casusbeheer met automatische anonimisering
- ✅ Coaching materiaal upload en RAG
- ✅ Audio transcriptie (Whisper)
- ✅ Triage functionaliteit
- ✅ AVG/GDPR compliant

## Tech Stack

- **Frontend:** Next.js 14, React, TypeScript, Tailwind CSS
- **Backend:** FastAPI, Python 3.11+
- **Database:** SQLite (development) / PostgreSQL (production)
- **AI:** Ollama (lokale LLM), LangChain (RAG)
- **Vector DB:** ChromaDB

## Setup

Zie [START_HIER.md](./START_HIER.md) voor volledige setup instructies.

### Quick Start

```bash
# Backend
cd backend
python -m venv venv
.\venv\Scripts\Activate.ps1
pip install -r requirements.txt
uvicorn app.main:app --reload

# Frontend
cd frontend
npm install
npm run dev
```

## Deployment

Zie [DEPLOYMENT_GUIDE.md](./DEPLOYMENT_GUIDE.md) voor deployment instructies.

## Privacy

Buddy is volledig privacy-first:
- Zero-access encryptie
- Geen logging van chats
- Lokale data verwerking waar mogelijk
- AVG/GDPR compliant

Lees meer op `/privacy` pagina.

## License

[Voeg licentie toe]
