# 🚀 START HIER - AI Coach Chatbot

## Snelle Start (5 minuten)

### Stap 1: Vereisten Installeren

1. **Python 3.11+** - Download van python.org
2. **Node.js 18+** - Download van nodejs.org  
3. **Ollama** - Download van ollama.ai (voor lokale AI)

### Stap 2: Backend Setup

```powershell
# Ga naar backend directory
cd backend

# Maak virtual environment
python -m venv venv

# Activeer virtual environment
.\venv\Scripts\Activate.ps1

# Installeer alle dependencies
pip install -r requirements.txt

# Download SpaCy model (voor anonimisering)
python -m spacy download nl_core_news_sm

# Maak .env bestand
copy .env.example .env

# Genereer secrets (run dit in Python):
python -c "import secrets; print('SECRET_KEY=' + secrets.token_hex(32))"
python -c "import secrets; print('ENCRYPTION_KEY=' + secrets.token_hex(32))"

# Kopieer de gegenereerde keys naar .env bestand
```

### Stap 3: Ollama Setup (Lokale AI)

```powershell
# Start Ollama (in aparte terminal)
ollama serve

# Pull model (in nieuwe terminal)
ollama pull mistral:7b
```

### Stap 4: Database Initialiseren

```powershell
# In backend directory, met venv geactiveerd
python -c "from app.core.init_db import init_db; init_db()"
```

### Stap 5: Frontend Setup

```powershell
# Ga naar frontend directory
cd ..\frontend

# Installeer dependencies
npm install

# Maak .env.local
echo NEXT_PUBLIC_API_URL=http://localhost:8000 > .env.local
```

### Stap 6: Start Alles!

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

### Stap 7: Open Applicatie

Open je browser: **http://localhost:3000**

## ✅ Checklist

- [ ] Python 3.11+ geïnstalleerd
- [ ] Node.js 18+ geïnstalleerd
- [ ] Ollama geïnstalleerd en draait
- [ ] Mistral model gepulled: `ollama pull mistral:7b`
- [ ] Backend dependencies geïnstalleerd
- [ ] SpaCy model gedownload
- [ ] .env bestand aangemaakt met secrets
- [ ] Database geïnitialiseerd
- [ ] Frontend dependencies geïnstalleerd
- [ ] Alle services draaien

## 🎯 Eerste Gebruik

1. **Registreer account** op http://localhost:3000
2. **Login** met je account
3. **Maak eerste casus** via "Casussen" tab
4. **Test chat** via "Chat" tab
5. **Upload coaching materiaal** via "Materiaal" tab

## 🆘 Problemen?

### Ollama niet gevonden
- Download van https://ollama.ai
- Installeer en start: `ollama serve`

### Database errors
- SQLite wordt automatisch gebruikt (geen setup nodig)
- Check of `coach_ai.db` wordt aangemaakt in backend directory

### Port al in gebruik
- Backend (8000): Stop andere services
- Frontend (3000): Stop andere services  
- Ollama (11434): Stop andere Ollama instances

### Dependencies installeren faalt
- Upgrade pip: `python -m pip install --upgrade pip`
- Upgrade pip in venv: `.\venv\Scripts\python.exe -m pip install --upgrade pip`

## 📚 Meer Info

- [BUILD_GUIDE.md](./BUILD_GUIDE.md) - Uitgebreide build guide
- [QUICK_START.md](./QUICK_START.md) - Snelle start instructies
- [SETUP.md](./SETUP.md) - Gedetailleerde setup
- [README.md](./README.md) - Algemene informatie

## 🎉 Klaar!

Als alles draait, kun je beginnen met:
- Casussen aanmaken
- Coaching materiaal uploaden
- Chat gebruiken voor triage
- Sessies opnemen en transcriberen

**Veel succes met bouwen! 🚀**



