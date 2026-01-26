# Build Guide - AI Coach Chatbot

## 🚀 Quick Start

### Stap 1: Vereisten Installeren

#### Python 3.11+
```bash
# Check Python versie
python --version

# Of download van python.org
```

#### Node.js 18+
```bash
# Check Node versie
node --version

# Of download van nodejs.org
```

#### PostgreSQL 15+
```bash
# Windows: Download van postgresql.org
# Mac: brew install postgresql@15
# Linux: sudo apt-get install postgresql-15
```

#### Ollama (voor lokale LLM)
```bash
# Download en install van ollama.ai
# Windows: Download installer
# Mac/Linux: curl -fsSL https://ollama.ai/install.sh | sh

# Pull model
ollama pull mistral:7b
```

### Stap 2: Project Setup

```bash
# Clone of navigeer naar project directory
cd "Coach AI"
```

### Stap 3: Backend Setup

```bash
cd backend

# Maak virtual environment
python -m venv venv

# Activeer virtual environment
# Windows:
venv\Scripts\activate
# Mac/Linux:
source venv/bin/activate

# Installeer dependencies
pip install -r requirements.txt

# Download SpaCy model (voor PII detectie)
python -m spacy download nl_core_news_sm

# Maak .env bestand
copy .env.example .env
# Bewerk .env met je configuratie
```

### Stap 4: Database Setup

```bash
# Maak PostgreSQL database
createdb coach_ai

# Of via psql:
psql -U postgres
CREATE DATABASE coach_ai;
\q

# Update DATABASE_URL in .env
DATABASE_URL=postgresql://user:password@localhost:5432/coach_ai
```

### Stap 5: Frontend Setup

```bash
cd ../frontend

# Installeer dependencies
npm install

# Maak .env.local
echo NEXT_PUBLIC_API_URL=http://localhost:8000 > .env.local
```

### Stap 6: Start Services

#### Terminal 1: Ollama (Lokale LLM)
```bash
ollama serve
```

#### Terminal 2: Backend
```bash
cd backend
venv\Scripts\activate  # Windows
# of source venv/bin/activate  # Mac/Linux

uvicorn app.main:app --reload
```

#### Terminal 3: Frontend
```bash
cd frontend
npm run dev
```

### Stap 7: Test Setup

Open browser: http://localhost:3000

## 🔧 Configuratie

### Backend .env Bestand

```env
# Database
DATABASE_URL=postgresql://user:password@localhost:5432/coach_ai

# Security
SECRET_KEY=your-secret-key-here
ENCRYPTION_KEY=your-encryption-key-here

# Local LLM
LOCAL_LLM_BACKEND=ollama
OLLAMA_BASE_URL=http://localhost:11434
OLLAMA_MODEL=mistral:7b
USE_LOCAL_EMBEDDINGS=true

# Azure (optioneel voor nu)
AZURE_STORAGE_CONNECTION_STRING=
AZURE_DATA_HIVE_CONTAINER=coach-ai-datahive

# Sprightly Toolbox (optioneel)
SPRIGHTLY_TOOLBOX_API_URL=http://localhost:3001/api
```

### Frontend .env.local

```env
NEXT_PUBLIC_API_URL=http://localhost:8000
```

## 🐳 Docker Setup (Alternatief)

```bash
# Build en start alle services
docker-compose up -d

# Bekijk logs
docker-compose logs -f

# Stop services
docker-compose down
```

## ✅ Verificatie

### Backend Health Check
```bash
curl http://localhost:8000/health
# Should return: {"status":"healthy","version":"0.1.0"}
```

### Ollama Check
```bash
curl http://localhost:11434/api/tags
# Should return list of models
```

### Frontend Check
Open: http://localhost:3000

## 🧪 Eerste Test

1. **Registreer account** op http://localhost:3000
2. **Login** met je account
3. **Maak eerste casus** via "Casussen" tab
4. **Test chat** via "Chat" tab
5. **Test triage** via API of toekomstige UI

## 📝 Database Migraties

```bash
cd backend

# Maak migratie
alembic revision --autogenerate -m "Initial migration"

# Run migraties
alembic upgrade head
```

## 🔍 Troubleshooting

### Ollama niet beschikbaar
```bash
# Check of Ollama draait
curl http://localhost:11434/api/tags

# Start Ollama
ollama serve

# Pull model als nodig
ollama pull mistral:7b
```

### Database connectie fout
```bash
# Check PostgreSQL draait
pg_isready

# Check DATABASE_URL in .env
# Format: postgresql://user:password@host:port/database
```

### Frontend kan backend niet bereiken
```bash
# Check CORS_ORIGINS in backend/.env
CORS_ORIGINS=["http://localhost:3000"]

# Check NEXT_PUBLIC_API_URL in frontend/.env.local
NEXT_PUBLIC_API_URL=http://localhost:8000
```

### SpaCy model niet gevonden
```bash
python -m spacy download nl_core_news_sm
```

## 🎯 Volgende Stappen

1. ✅ Setup voltooien
2. ✅ Eerste account aanmaken
3. ✅ Coaching materiaal uploaden
4. ✅ Eerste casus aanmaken
5. ✅ Chat testen
6. ✅ Triage testen

## 📚 Documentatie

- [ARCHITECTUUR_DIAGRAM.md](./ARCHITECTUUR_DIAGRAM.md) - Technische architectuur
- [HYBRIDE_SYSTEEM_IMPLEMENTATIE.md](./HYBRIDE_SYSTEEM_IMPLEMENTATIE.md) - Hybride systeem details
- [LOCALE_AI_ARCHITECTUUR.md](./LOCALE_AI_ARCHITECTUUR.md) - Lokale AI setup
- [FEDERATED_LEARNING_ARCHITECTUUR.md](./FEDERATED_LEARNING_ARCHITECTUUR.md) - Federated learning



