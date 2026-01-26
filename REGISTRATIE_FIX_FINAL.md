# Registratie Network Error - Oplossing

## ✅ Backend Werkt!

De backend draait en de registratie endpoint werkt correct:
- Health check: ✅ http://localhost:8000/health
- Registratie endpoint: ✅ http://localhost:8000/api/auth/register

## 🔧 Oplossing

### Stap 1: Zorg dat Backend Draait

```powershell
cd backend
.\venv\Scripts\python.exe -m uvicorn app.main:app --reload
```

Backend moet draaien op: http://localhost:8000

### Stap 2: Frontend Opnieuw Starten

De frontend moet opnieuw gestart worden om de nieuwe error handling te laden:

1. **Stop frontend** (Ctrl+C in de terminal waar frontend draait)
2. **Start opnieuw**:
   ```powershell
   cd frontend
   npm run dev
   ```

### Stap 3: Test Registratie

1. Open: http://localhost:3000
2. Klik "Registreer"
3. Vul formulier in
4. Klik "Registreren"

## 🔍 Troubleshooting

### Als je nog steeds "Network Error" krijgt:

1. **Check backend draait**:
   ```powershell
   curl http://localhost:8000/health
   ```
   Moet `{"status":"healthy"}` teruggeven

2. **Check browser console** (F12):
   - Ga naar Console tab
   - Kijk voor errors
   - Check Network tab voor failed requests

3. **Check .env.local**:
   ```powershell
   Get-Content frontend\.env.local
   ```
   Moet bevatten: `NEXT_PUBLIC_API_URL=http://localhost:8000`

4. **Test backend direct**:
   ```powershell
   $body = @{email="test@test.com"; password="test123"; full_name="Test"} | ConvertTo-Json
   Invoke-RestMethod -Uri "http://localhost:8000/api/auth/register" -Method Post -Body $body -ContentType "application/json"
   ```

## ✅ Wat is Gefixt

- ✅ bcrypt compatibiliteit (versie 4.0.1)
- ✅ Backend registratie endpoint werkt
- ✅ Betere error handling in frontend
- ✅ Debug logging toegevoegd

## 📝 Status

- Backend: ✅ Werkt
- Frontend: ⚠️ Moet opnieuw gestart worden
- Registratie: ✅ Zou nu moeten werken na frontend restart
