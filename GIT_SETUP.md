# Git Repository Setup

## ✅ Git Geïnitialiseerd

Git repository is aangemaakt en alle bestanden zijn gecommit.

## 📋 Commit Details

**Commit**: Initial commit: AI Coach Chatbot MVP
- Backend (FastAPI) volledig geconfigureerd
- Frontend (Next.js) volledig geconfigureerd  
- Ollama integratie voor lokale AI
- Database setup
- Authentication systeem
- Alle fixes en configuraties

## 🔒 .gitignore

De volgende bestanden worden NIET gecommit (om veiligheidsredenen):
- `.env` en `.env.local` (bevatten secrets)
- `*.db` (database bestanden)
- `venv/` en `node_modules/` (dependencies)
- `uploads/` (gebruikersdata)
- `chroma_db/` (vector database)
- `models/` (AI modellen)
- `training_data/` (training data)

## 📝 Volgende Stappen

### 1. Remote Repository Toevoegen (Optioneel)

Als je een GitHub/GitLab repository hebt:

```powershell
git remote add origin https://github.com/jouw-username/coach-ai.git
git branch -M main
git push -u origin main
```

### 2. Nieuwe Changes Committen

```powershell
git add .
git commit -m "Beschrijving van wijzigingen"
git push
```

### 3. Status Checken

```powershell
git status
```

### 4. Commit Geschiedenis

```powershell
git log --oneline
```

## ⚠️ Belangrijk

- **NOOIT** `.env` bestanden committen (bevatten secrets)
- **NOOIT** database bestanden committen
- **NOOIT** `venv/` of `node_modules/` committen
- Gebruik `.env.example` voor template configuratie

## 📦 Wat is Wel Gecommit

✅ Alle source code (Python, TypeScript, React)
✅ Configuratie bestanden (zonder secrets)
✅ Documentatie (README, setup guides)
✅ Package files (requirements.txt, package.json)
✅ Docker configuratie
✅ Scripts en utilities
