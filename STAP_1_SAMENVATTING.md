# ✅ Stap 1: Backend Setup - Samenvatting

## Voltooid ✅

- [x] Python 3.14.2 geïnstalleerd en werkend
- [x] Virtual environment aangemaakt
- [x] Dependencies worden geïnstalleerd
- [x] Database geïnitialiseerd (`coach_ai.db`)
- [x] .env bestand aangemaakt met secrets
- [x] Configuratie werkt

## Status

**Database**: ✅ Aangemaakt (`coach_ai.db` - 81KB)

**Dependencies**: ⏳ Worden geïnstalleerd (kan even duren)

## Volgende Stappen

### 1. Wacht tot dependencies klaar zijn

De installatie kan 5-10 minuten duren. Check status:

```powershell
cd backend
.\venv\Scripts\Activate.ps1
python -c "from app.main import app; print('OK')"
```

### 2. Als er nog errors zijn

Installeer ontbrekende packages handmatig:

```powershell
.\venv\Scripts\python.exe -m pip install langchain-community langchain-openai chromadb sentence-transformers
```

### 3. Test Backend Starten

```powershell
cd backend
.\venv\Scripts\Activate.ps1
uvicorn app.main:app --reload
```

Backend zou moeten draaien op: **http://localhost:8000**

### 4. API Docs Bekijken

Open: **http://localhost:8000/docs**

## Belangrijke Bestanden

- `.env` - Configuratie (met secrets)
- `coach_ai.db` - SQLite database
- `venv/` - Virtual environment

## Troubleshooting

### ModuleNotFoundError
- Run: `pip install -r requirements.txt`
- Of installeer specifieke module: `pip install <module-name>`

### spaCy errors
- spaCy is optioneel, werkt zonder
- Voor betere PII detectie: `python -m spacy download nl_core_news_sm`

### Database errors
- Database is al aangemaakt
- Check of `coach_ai.db` bestaat

## ✅ Klaar voor Stap 2!

Zodra de dependencies geïnstalleerd zijn, kun je:
1. Backend starten
2. Ollama installeren (lokale AI)
3. Frontend setup doen
