# Network Error Fix

## Probleem
"Network Error" bij registratie - backend geeft 500 Internal Server Error

## Oorzaak
bcrypt compatibiliteitsprobleem met passlib. De bcrypt library heeft een versie detectie probleem.

## Oplossing
1. **bcrypt opnieuw geïnstalleerd** met compatibele versie (4.0.1)
2. **Betere error handling** toegevoegd aan frontend
3. **Network error messages** verbeterd

## Wijzigingen

### Backend
- bcrypt versie gefixt naar 4.0.1 (compatibel met passlib)

### Frontend
- `client.ts`: Betere network error handling
- `LoginForm.tsx`: Duidelijkere error messages

## Test

1. **Backend test**:
   ```powershell
   cd backend
   .\venv\Scripts\python.exe -c "from app.core.security import get_password_hash; print(get_password_hash('test'))"
   ```

2. **Registratie test**:
   - Open frontend: http://localhost:3000
   - Vul registratie formulier in
   - Klik "Registreren"
   - Zou nu moeten werken!

## Als het nog niet werkt

1. **Check backend logs** voor errors
2. **Check browser console** (F12) voor network errors
3. **Test backend direct**:
   ```powershell
   $body = @{email="test@test.com"; password="test123"; full_name="Test"} | ConvertTo-Json
   Invoke-RestMethod -Uri "http://localhost:8000/api/auth/register" -Method Post -Body $body -ContentType "application/json"
   ```
