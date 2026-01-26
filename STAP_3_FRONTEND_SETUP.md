# Stap 3: Frontend Setup

## Vereisten

- ✅ Node.js 18+ (moet nog geïnstalleerd worden)
- ✅ npm (komt met Node.js)

## Node.js Installatie

### Optie 1: Download van nodejs.org (Aanbevolen)

1. Ga naar: https://nodejs.org/
2. Download de **LTS versie** (Long Term Support)
3. Installeer met standaard opties
4. **BELANGRIJK**: Vink "Add to PATH" aan tijdens installatie
5. Herstart PowerShell na installatie

### Optie 2: Via Chocolatey (als je Chocolatey hebt)

```powershell
choco install nodejs-lts
```

### Optie 3: Via Winget (Windows 11)

```powershell
winget install OpenJS.NodeJS.LTS
```

## Verificatie

Na installatie, herstart PowerShell en test:

```powershell
node --version
npm --version
```

Je zou moeten zien:
- Node.js versie (bijv. v20.10.0)
- npm versie (bijv. 10.2.3)

## Frontend Setup (Na Node.js Installatie)

### 1. Ga naar frontend directory

```powershell
cd "C:\Users\elwin\Documents\Cursor\Coach AI\frontend"
```

### 2. Installeer dependencies

```powershell
npm install
```

Dit kan 2-5 minuten duren.

### 3. Maak .env.local bestand

```powershell
echo NEXT_PUBLIC_API_URL=http://localhost:8000 > .env.local
```

Of maak handmatig `.env.local` met:
```
NEXT_PUBLIC_API_URL=http://localhost:8000
```

### 4. Start development server

```powershell
npm run dev
```

Frontend draait dan op: **http://localhost:3000**

## Troubleshooting

### "node is not recognized"
- Herstart PowerShell na Node.js installatie
- Controleer PATH: `$env:PATH -split ';' | Select-String node`
- Herinstalleer Node.js met "Add to PATH" optie

### "npm install" faalt
- Controleer internet verbinding
- Probeer: `npm cache clean --force`
- Probeer: `npm install --legacy-peer-deps`

### Port 3000 al in gebruik
- Stop andere applicaties op poort 3000
- Of gebruik andere poort: `npm run dev -- -p 3001`

## Volgende Stappen

Na installatie:
1. ✅ Node.js geïnstalleerd
2. ✅ Dependencies geïnstalleerd
3. ✅ .env.local aangemaakt
4. ✅ Frontend server gestart
5. Test frontend op http://localhost:3000

## Test Checklist

- [ ] Node.js geïnstalleerd en werkend
- [ ] npm geïnstalleerd en werkend
- [ ] Frontend dependencies geïnstalleerd
- [ ] .env.local bestand aangemaakt
- [ ] Frontend server start zonder errors
- [ ] Frontend laadt op http://localhost:3000
