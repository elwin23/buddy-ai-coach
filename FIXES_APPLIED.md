# Fixes Toegepast

## Frontend Fix: Path Alias Configuratie

### Probleem
```
Module not found: Can't resolve '@/lib/store/auth'
```

### Oplossing
Path alias `@/` toegevoegd aan `tsconfig.json`:

```json
{
  "compilerOptions": {
    "baseUrl": ".",
    "paths": {
      "@/*": ["./*"]
    }
  }
}
```

### Status
✅ **Gefixt** - Frontend zou nu moeten compileren zonder errors

## Backend: 404 Not Found

### Probleem
Backend geeft "Not Found" error

### Oplossing
Backend health check werkt correct op `/health`:
- ✅ `GET /health` → 200 OK
- ✅ `GET /api/auth/login` → POST endpoint (niet GET)
- ✅ `GET /api/auth/me` → Vereist authentication token

### Beschikbare Endpoints

#### Public Endpoints
- `GET /health` - Health check
- `GET /docs` - API documentatie (Swagger)
- `POST /api/auth/register` - Registreer nieuwe coach
- `POST /api/auth/login` - Login en krijg token

#### Protected Endpoints (vereisen Bearer token)
- `GET /api/auth/me` - Huidige gebruiker info
- `POST /api/chat` - Chat met AI
- `GET /api/cases` - Lijst cases
- `POST /api/cases` - Maak nieuwe case
- En meer...

### Test Backend
```powershell
# Health check
curl http://localhost:8000/health

# API docs
# Open in browser: http://localhost:8000/docs
```

## Volgende Stappen

1. **Frontend**: Check of compilatie nu werkt
2. **Backend**: Test endpoints via http://localhost:8000/docs
3. **Login**: Maak eerst een account via `/api/auth/register`

## Troubleshooting

### Als frontend nog steeds errors geeft:
1. Stop frontend server (Ctrl+C)
2. Verwijder `.next` folder: `rm -r .next` (of `Remove-Item -Recurse .next`)
3. Start opnieuw: `npm run dev`

### Als backend 404 geeft:
1. Check of backend draait: `curl http://localhost:8000/health`
2. Check API docs: http://localhost:8000/docs
3. Gebruik correcte HTTP method (GET vs POST)
4. Voor protected endpoints: voeg Bearer token toe aan headers
