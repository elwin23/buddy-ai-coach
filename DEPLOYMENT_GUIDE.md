# 🚀 Deployment Guide - Buddy AI Coach

## Gratis Hosting Opties

### Optie 1: Vercel (Aanbevolen voor Frontend) + Railway (Backend)

**Voordelen:**
- ✅ Vercel is perfect voor Next.js (gratis tier)
- ✅ Automatische deployments vanuit GitHub
- ✅ SSL certificaten automatisch
- ✅ Railway heeft goede gratis tier voor Python backends

#### Frontend op Vercel:

1. **Push code naar GitHub:**
   ```bash
   git add .
   git commit -m "Ready for deployment"
   git push origin main
   ```

2. **Vercel Setup:**
   - Ga naar [vercel.com](https://vercel.com)
   - Login met GitHub
   - Klik "New Project"
   - Selecteer je repository
   - Root Directory: `frontend`
   - Framework Preset: Next.js
   - Build Command: `npm run build` (automatisch)
   - Output Directory: `.next` (automatisch)
   - Environment Variables:
     ```
     NEXT_PUBLIC_API_URL=https://your-backend-url.railway.app
     ```

3. **Deploy!**
   - Vercel deployt automatisch
   - Je krijgt een URL zoals: `buddy-ai-coach.vercel.app`

#### Backend op Railway:

1. **Railway Setup:**
   - Ga naar [railway.app](https://railway.app)
   - Login met GitHub
   - Klik "New Project" → "Deploy from GitHub repo"
   - Selecteer je repository
   - Root Directory: `backend`

2. **Configureer Environment Variables:**
   ```
   SECRET_KEY=your-secret-key
   ENCRYPTION_KEY=your-encryption-key
   DATABASE_URL=sqlite:///./coach_ai.db
   ```

3. **Railway detecteert automatisch Python en installeert dependencies**

4. **Start Command:**
   ```
   uvicorn app.main:app --host 0.0.0.0 --port $PORT
   ```

5. **Je krijgt een URL zoals:** `buddy-backend.railway.app`

---

### Optie 2: Render (Alles-in-één)

**Voordelen:**
- ✅ Gratis tier voor beide frontend en backend
- ✅ Eenvoudige setup
- ✅ Automatische SSL

#### Frontend op Render:

1. **Ga naar [render.com](https://render.com)**
2. **New → Static Site**
3. **Connect GitHub repository**
4. **Settings:**
   - Build Command: `cd frontend && npm install && npm run build`
   - Publish Directory: `frontend/.next`
   - Environment Variables:
     ```
     NEXT_PUBLIC_API_URL=https://your-backend.onrender.com
     ```

#### Backend op Render:

1. **New → Web Service**
2. **Connect GitHub repository**
3. **Settings:**
   - Root Directory: `backend`
   - Build Command: `pip install -r requirements.txt`
   - Start Command: `uvicorn app.main:app --host 0.0.0.0 --port $PORT`
   - Environment Variables:
     ```
     SECRET_KEY=your-secret-key
     ENCRYPTION_KEY=your-encryption-key
     ```

**Let op:** Render's gratis tier heeft "spin down" na 15 minuten inactiviteit.

---

### Optie 3: Fly.io (Goed voor beide)

**Voordelen:**
- ✅ Goede gratis tier
- ✅ Geen spin down
- ✅ Werkt goed met Docker

#### Setup:

1. **Installeer Fly CLI:**
   ```bash
   # Windows (PowerShell)
   powershell -Command "iwr https://fly.io/install.ps1 -useb | iex"
   ```

2. **Login:**
   ```bash
   fly auth login
   ```

3. **Frontend:**
   ```bash
   cd frontend
   fly launch
   ```

4. **Backend:**
   ```bash
   cd backend
   fly launch
   ```

---

### Optie 4: Netlify (Frontend) + PythonAnywhere (Backend)

**Voordelen:**
- ✅ Netlify perfect voor Next.js
- ✅ PythonAnywhere gratis tier voor Python

#### Frontend op Netlify:

1. **Ga naar [netlify.com](https://netlify.com)**
2. **New site from Git**
3. **Selecteer repository**
4. **Build settings:**
   - Base directory: `frontend`
   - Build command: `npm run build`
   - Publish directory: `frontend/.next`

#### Backend op PythonAnywhere:

1. **Ga naar [pythonanywhere.com](https://www.pythonanywhere.com)**
2. **Maak gratis account**
3. **Upload code via Files tab**
4. **Configureer Web app**
5. **Start command:**
   ```python
   uvicorn app.main:app --host 0.0.0.0 --port 8000
   ```

---

## Database Opties

### SQLite (Lokaal - Gratis)
- Werkt goed voor development
- Niet ideaal voor productie met meerdere gebruikers

### PostgreSQL (Aanbevolen voor Productie)

#### Gratis PostgreSQL Hosting:

1. **Supabase** (Aanbevolen)
   - [supabase.com](https://supabase.com)
   - Gratis tier: 500MB database
   - Automatische backups

2. **Neon**
   - [neon.tech](https://neon.tech)
   - Gratis tier: 0.5GB storage
   - Serverless PostgreSQL

3. **Railway PostgreSQL**
   - Inclusief bij Railway deployment
   - Gratis tier beschikbaar

#### Database Configuratie:

Update `backend/app/core/database.py`:
```python
# Voor PostgreSQL
DATABASE_URL = "postgresql://user:password@host:5432/dbname"
```

---

## Environment Variables Checklist

### Frontend (.env.local):
```env
NEXT_PUBLIC_API_URL=https://your-backend-url.com
```

### Backend (.env):
```env
SECRET_KEY=your-secret-key-here
ENCRYPTION_KEY=your-encryption-key-here
DATABASE_URL=postgresql://user:pass@host:5432/db
# Of voor SQLite:
DATABASE_URL=sqlite:///./coach_ai.db
```

---

## Deployment Stappen (Vercel + Railway)

### 1. Voorbereiding

```bash
# Genereer secrets
cd backend
python generate_secrets.py

# Test lokaal
cd frontend
npm run build
cd ../backend
uvicorn app.main:app --reload
```

### 2. GitHub Repository

```bash
# Zorg dat alles op GitHub staat
git add .
git commit -m "Ready for deployment"
git push origin main
```

### 3. Backend Deploy (Railway)

1. Login op [railway.app](https://railway.app)
2. New Project → Deploy from GitHub
3. Selecteer repository
4. Root Directory: `backend`
5. Voeg Environment Variables toe
6. Railway deployt automatisch
7. Kopieer de URL (bijv. `https://buddy-backend.railway.app`)

### 4. Frontend Deploy (Vercel)

1. Login op [vercel.com](https://vercel.com)
2. New Project → Import Git Repository
3. Root Directory: `frontend`
4. Framework: Next.js (auto-detect)
5. Environment Variable:
   ```
   NEXT_PUBLIC_API_URL=https://buddy-backend.railway.app
   ```
6. Deploy!

### 5. Update CORS in Backend

In `backend/app/main.py`, update CORS origins:
```python
origins = [
    "http://localhost:3000",
    "https://buddy-ai-coach.vercel.app",  # Je Vercel URL
]
```

### 6. Test!

- Frontend: `https://buddy-ai-coach.vercel.app`
- Backend: `https://buddy-backend.railway.app`
- API Docs: `https://buddy-backend.railway.app/docs`

---

## Ollama voor Productie

Voor productie moet je Ollama ook hosten:

### Optie 1: Eigen Server
- Deploy Ollama op een VPS (DigitalOcean, Hetzner, etc.)
- Update `LOCAL_LLM_URL` in backend config

### Optie 2: Cloud LLM Services
- OpenAI API (betaald)
- Anthropic Claude API (betaald)
- Groq (goedkoop, snel)

### Optie 3: Lokale LLM via Modal/Replicate
- [Modal.com](https://modal.com) - Serverless GPU
- [Replicate.com](https://replicate.com) - AI model hosting

---

## Monitoring & Logs

### Vercel:
- Logs beschikbaar in dashboard
- Analytics beschikbaar

### Railway:
- Logs in real-time
- Metrics dashboard

---

## Kosten Overzicht (Gratis Tiers)

| Service | Gratis Tier | Beperkingen |
|---------|-------------|-------------|
| Vercel | ✅ | 100GB bandwidth/maand |
| Railway | ✅ | $5 gratis credits/maand |
| Render | ✅ | Spin down na 15 min |
| Fly.io | ✅ | 3 shared VMs |
| Supabase | ✅ | 500MB database |
| Neon | ✅ | 0.5GB storage |

---

## Aanbevolen Setup voor Start

**Voor nu (gratis):**
- Frontend: **Vercel** (beste voor Next.js)
- Backend: **Railway** (goede gratis tier)
- Database: **Supabase PostgreSQL** (gratis tier)

**Later (als je groeit):**
- Upgrade naar betaalde tiers
- Of eigen VPS (Hetzner, DigitalOcean)

---

## Troubleshooting

### CORS Errors
- Zorg dat backend CORS origins correct zijn ingesteld
- Check dat `NEXT_PUBLIC_API_URL` correct is

### Database Errors
- Check database connection string
- Zorg dat database migrations zijn uitgevoerd

### Build Errors
- Check Node.js versie (18+)
- Check Python versie (3.11+)
- Check alle dependencies zijn geïnstalleerd

---

**Veel succes met deployen! 🚀**
