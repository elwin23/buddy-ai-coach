# GitHub Repository Setup

## ✅ Git Geconfigureerd

- **Email**: elwin@chatvalley.nl
- **Name**: Elwin
- **Branch**: main

## 📋 Stappen om naar GitHub te Pushen

### Stap 1: Maak GitHub Repository

1. Ga naar: https://github.com/new
2. Repository naam: `coach-ai` (of een andere naam)
3. Kies: **Private** of **Public**
4. **NIET** aanvinken:
   - ❌ Add a README file
   - ❌ Add .gitignore
   - ❌ Choose a license
5. Klik **"Create repository"**

### Stap 2: Kopieer Repository URL

Na het aanmaken zie je een URL zoals:
```
https://github.com/elwin/coach-ai.git
```

### Stap 3: Remote Toevoegen en Pushen

Zodra je de URL hebt, geef die door en ik voeg hem toe en push alles!

Of voer zelf uit:

```powershell
git remote add origin https://github.com/elwin/coach-ai.git
git push -u origin main
```

## 🔐 Authenticatie

Als je voor het eerst pusht, kan GitHub vragen om authenticatie:
- **Option 1**: Personal Access Token (aanbevolen)
  - Settings → Developer settings → Personal access tokens → Generate new token
  - Scopes: `repo` (full control)
  - Gebruik token als wachtwoord bij push

- **Option 2**: GitHub CLI
  ```powershell
  gh auth login
  ```

## ✅ Na Push

Je repository is dan beschikbaar op:
```
https://github.com/elwin/coach-ai
```

## 📝 Toekomstige Updates

```powershell
git add .
git commit -m "Beschrijving van wijzigingen"
git push
```
