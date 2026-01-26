# 🔧 Vercel 404 Error Fix

## Probleem
Je krijgt een 404 error op Vercel: `404: NOT_FOUND`

## Oplossing

### Stap 1: Check Vercel Project Settings

1. Ga naar je Vercel dashboard
2. Selecteer je project **buddy-ai-coach2**
3. Ga naar **Settings** → **General**

### Stap 2: Configureer Root Directory

**Belangrijk:** Vercel moet weten dat de Next.js app in de `frontend` folder staat.

1. Scroll naar **"Root Directory"**
2. Klik op **"Edit"**
3. Selecteer **"frontend"** folder
4. Klik **"Save"**

### Stap 3: Check Build Settings

Ga naar **Settings** → **Build & Development Settings**

Zorg dat dit correct is:
- **Framework Preset:** Next.js
- **Build Command:** `npm run build` (automatisch)
- **Output Directory:** `.next` (automatisch)
- **Install Command:** `npm install` (automatisch)

### Stap 4: Redeploy

1. Ga naar **Deployments** tab
2. Klik op de 3 dots (⋯) naast de laatste deployment
3. Klik **"Redeploy"**
4. Wacht tot de build klaar is

---

## Alternatieve Oplossing: Via vercel.json

Ik heb een `vercel.json` bestand toegevoegd aan de root. Als de Root Directory instelling niet werkt:

1. **Verwijder Root Directory** instelling in Vercel (zet terug naar root)
2. Vercel zal automatisch `vercel.json` gebruiken
3. Redeploy

---

## Check Build Logs

Als het nog steeds niet werkt:

1. Ga naar **Deployments** tab
2. Klik op de deployment
3. Bekijk de **Build Logs**
4. Zoek naar errors

Veelvoorkomende errors:
- `Cannot find module` → Dependencies niet geïnstalleerd
- `Build failed` → TypeScript errors
- `Output directory not found` → Build output verkeerd

---

## Test Lokaal Build

Test eerst of de build lokaal werkt:

```powershell
cd frontend
npm install
npm run build
```

Als dit lokaal werkt, zou het op Vercel ook moeten werken.

---

## Als Niets Werkt

1. **Delete project** in Vercel
2. **Maak opnieuw aan** met:
   - Root Directory: `frontend`
   - Framework: Next.js
3. **Deploy opnieuw**

---

**Laat me weten wat de build logs zeggen!** 📋
