# 🔧 Vercel Setup - Stap voor Stap

## Het Probleem
Vercel weet niet dat je Next.js app in de `frontend` folder staat, daarom krijg je een 404 error.

## Oplossing (2 minuten)

### Stap 1: Ga naar Vercel Dashboard
1. Open https://vercel.com
2. Login met je GitHub account
3. Selecteer project **"buddy-ai-coach2"**

### Stap 2: Configureer Root Directory
1. Klik op **"Settings"** (links in het menu)
2. Klik op **"General"** (onder Settings)
3. Scroll naar beneden naar **"Root Directory"**
4. Klik op **"Edit"** (rechts van Root Directory)
5. Selecteer **"frontend"** uit de dropdown
6. Klik **"Save"**

### Stap 3: Redeploy
1. Ga naar **"Deployments"** tab (bovenaan)
2. Klik op de **3 dots (⋯)** naast je laatste deployment
3. Klik **"Redeploy"**
4. Bevestig met **"Redeploy"**
5. Wacht 2-3 minuten tot de build klaar is

### Stap 4: Test!
Open je Vercel URL (bijv. `buddy-ai-coach2.vercel.app`)

---

## Als Root Directory niet werkt

### Alternatief: Delete en Hercreate Project

1. **Delete project:**
   - Settings → General → Scroll naar beneden
   - Klik "Delete Project"
   - Bevestig verwijdering

2. **Maak opnieuw aan:**
   - Klik "Add New..." → "Project"
   - Selecteer "buddy-ai-coach"
   - **BELANGRIJK:** Voordat je op "Import" klikt:
     - Klik op **"Configure Project"** (of "Edit" naast Root Directory)
     - Zet **Root Directory** op **"frontend"**
   - Klik "Deploy"

---

## Check Build Logs

Als het nog steeds niet werkt:

1. Ga naar **Deployments** tab
2. Klik op de deployment
3. Bekijk **"Build Logs"**
4. Zoek naar errors

**Veelvoorkomende errors:**
- `Cannot find module` → Dependencies probleem
- `Build failed` → TypeScript/compile errors
- `404` → Root Directory niet ingesteld

---

## Environment Variables

Zorg dat deze zijn ingesteld:

1. Ga naar **Settings** → **Environment Variables**
2. Voeg toe:
   ```
   NEXT_PUBLIC_API_URL=http://localhost:8000
   ```
   (Later aanpassen naar je backend URL)

---

## Test Lokaal (Werkt!)

De build werkt lokaal perfect:
```bash
cd frontend
npm run build
✓ Compiled successfully
```

Dus het probleem is alleen de Vercel configuratie!

---

**Na het instellen van Root Directory op "frontend" zou alles moeten werken!** ✅
