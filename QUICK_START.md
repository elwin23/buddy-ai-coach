# 🚀 Quick Start - AI Coach Chatbot

## Snelle Start (Windows)

### 1. Vereisten Checken

```powershell
# Check Python
python --version  # Moet 3.11+ zijn

# Check Node.js
node --version  # Moet 18+ zijn

# Check PostgreSQL (optioneel voor nu, kan later)
# pg_isready
```

### 2. Backend Setup

```powershell
cd backend

# Maak virtual environment
python -m venv venv

# Activeer
.\venv\Scripts\Activate.ps1

# Installeer dependencies
pip install -r requirements.txt

# Download SpaCy model
python -m spacy download nl_core_news_sm

# Maak .env bestand
copy .env.example .env

# Bewerk .env en vul in:
# - DATABASE_URL (als je PostgreSQL hebt)
# - SECRET_KEY (genereer met: python -c "import secrets; print(secrets.token_hex(32))")
# - ENCRYPTION_KEY (genereer met: python -c "import secrets; print(secrets.token_hex(32))")
```

### 3. Ollama Setup (Lokale LLM)

```powershell
# Download Ollama van ollama.ai en installeer

# Start Ollama service
ollama serve

# In nieuwe terminal: Pull model
ollama pull mistral:7b
```

### 4. Database Setup (SQLite voor development)

Als je nog geen PostgreSQL hebt, kunnen we SQLite gebruiken voor development:

```powershell
# In backend/.env, verander:
DATABASE_URL=sqlite:///./coach_ai.db
```

### 5. Database Initialiseren

```powershell
cd backend
.\venv\Scripts\Activate.ps1

# Initialiseer database
python -c "from app.core.init_db import init_db; init_db()"
```

### 6. Frontend Setup

```powershell
cd ..\frontend

# Installeer dependencies
npm install

# Maak .env.local
echo NEXT_PUBLIC_API_URL=http://localhost:8000 > .env.local
```

### 7. Start Alles

**Terminal 1 - Ollama:**
```powershell
ollama serve
```

**Terminal 2 - Backend:**
```powershell
cd backend
.\venv\Scripts\Activate.ps1
uvicorn app.main:app --reload
```

**Terminal 3 - Frontend:**
```powershell
cd frontend
npm run dev
```

### 8. Testen

1. Open browser: http://localhost:3000
2. Registreer account
3. Test de applicatie!

## Of gebruik het Start Script

```powershell
.\start.ps1
```

Dit start automatisch alle services.

## Troubleshooting

### Ollama niet gevonden
- Download van https://ollama.ai
- Installeer en start: `ollama serve`
- Pull model: `ollama pull mistral:7b`

### Database errors
- Gebruik SQLite voor development: `DATABASE_URL=sqlite:///./coach_ai.db`
- Of installeer PostgreSQL en maak database aan

### Port al in gebruik
- Backend (8000): Stop andere services op poort 8000
- Frontend (3000): Stop andere services op poort 3000
- Ollama (11434): Stop andere Ollama instances

## Volgende Stappen

1. ✅ Setup voltooien
2. ✅ Eerste account aanmaken
3. ✅ Coaching materiaal uploaden
4. ✅ Eerste casus aanmaken
5. ✅ Chat en triage testen



