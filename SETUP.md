# Setup Instructies - AI Coach Chatbot MVP

## Vereisten

- Python 3.11+
- Node.js 18+
- PostgreSQL 15+ (of gebruik Docker)
- OpenAI API key (voor RAG functionaliteit)

## Stap 1: Backend Setup

### 1.1 Python Environment

```bash
cd backend
python -m venv venv

# Windows
venv\Scripts\activate

# Linux/Mac
source venv/bin/activate
```

### 1.2 Dependencies Installeren

```bash
pip install -r requirements.txt
```

### 1.3 SpaCy Model Downloaden (voor PII detectie)

```bash
python -m spacy download nl_core_news_sm
```

### 1.4 Environment Variabelen

Kopieer `.env.example` naar `.env` en vul in:

```bash
cp .env.example .env
```

Belangrijke variabelen:
- `DATABASE_URL`: PostgreSQL connection string
- `SECRET_KEY`: Genereer met `openssl rand -hex 32`
- `OPENAI_API_KEY`: Je OpenAI API key
- `ENCRYPTION_KEY`: Genereer met `openssl rand -hex 32`

### 1.5 Database Setup

```bash
# Maak database aan
createdb coach_ai

# Of gebruik PostgreSQL client
psql -U postgres
CREATE DATABASE coach_ai;
```

### 1.6 Database Migraties

```bash
# Initialiseer Alembic (als nog niet gedaan)
alembic init alembic

# Maak eerste migratie
alembic revision --autogenerate -m "Initial migration"

# Run migraties
alembic upgrade head
```

### 1.7 Start Backend

```bash
uvicorn app.main:app --reload
```

Backend draait nu op `http://localhost:8000`

## Stap 2: Frontend Setup

### 2.1 Dependencies Installeren

```bash
cd frontend
npm install
```

### 2.2 Environment Variabelen

Maak `.env.local` aan:

```bash
NEXT_PUBLIC_API_URL=http://localhost:8000
```

### 2.3 Start Frontend

```bash
npm run dev
```

Frontend draait nu op `http://localhost:3000`

## Stap 3: Docker Setup (Alternatief)

### 3.1 Start Alle Services

```bash
docker-compose up -d
```

Dit start:
- PostgreSQL database
- Backend API
- Frontend

### 3.2 Logs Bekijken

```bash
docker-compose logs -f
```

### 3.3 Stoppen

```bash
docker-compose down
```

## Stap 4: Eerste Gebruik

### 4.1 Account Aanmaken

1. Ga naar `http://localhost:3000`
2. Klik op "Registreren"
3. Vul email en wachtwoord in
4. Je wordt automatisch ingelogd

### 4.2 Eerste Casus Aanmaken

1. Ga naar "Casussen" tab
2. Klik op "Nieuwe Casus"
3. Vul cliënt naam in (wordt automatisch geanonimiseerd)
4. Voeg notities toe (worden automatisch geanonimiseerd)
5. Klik "Casus Aanmaken"

### 4.3 Coaching Materiaal Uploaden

1. Ga naar "Materiaal" tab
2. Klik "Upload Materiaal"
3. Upload een PDF, DOCX of TXT bestand
4. Materiaal wordt automatisch geïndexeerd

### 4.4 Chat Gebruiken

1. Ga naar "Chat" tab
2. Stel een vraag over coaching technieken
3. AI gebruikt alleen coaching materiaal, geen persoonsgegevens

## Troubleshooting

### Database Connection Error

- Controleer of PostgreSQL draait
- Controleer `DATABASE_URL` in `.env`
- Test connectie: `psql $DATABASE_URL`

### OpenAI API Error

- Controleer `OPENAI_API_KEY` in `.env`
- Test API key: `curl https://api.openai.com/v1/models -H "Authorization: Bearer $OPENAI_API_KEY"`

### Frontend kan Backend niet bereiken

- Controleer of backend draait op poort 8000
- Controleer `NEXT_PUBLIC_API_URL` in `.env.local`
- Controleer CORS settings in backend

### SpaCy Model Error

```bash
python -m spacy download nl_core_news_sm
```

Als dit niet werkt, gebruik de fallback in `anonymization.py` (werkt zonder model, maar minder accuraat).

## Development Tips

### Backend Hot Reload

Backend heeft automatische reload met `--reload` flag.

### Frontend Hot Reload

Frontend heeft automatische hot reload met Next.js.

### Database Reset

```bash
# Drop alle tabellen
alembic downgrade base

# Maak opnieuw aan
alembic upgrade head
```

### Logs

Backend logs zijn zichtbaar in terminal waar uvicorn draait.
Frontend logs zijn zichtbaar in browser console.

## Volgende Stappen

1. Voeg meer coaching materiaal toe
2. Test anonimisering functionaliteit
3. Test RAG zoekfunctionaliteit
4. Voeg sessie tracking toe aan casussen
5. Customize UI naar wens

## Support

Voor vragen of problemen, check:
- `README.md` voor algemene informatie
- `ARCHITECTUUR_DIAGRAM.md` voor technische details
- `VOORSTEL_AI_COACH_CHATBOT.md` voor volledige documentatie








