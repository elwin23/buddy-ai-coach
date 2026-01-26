# Stap 1: Backend Setup - Instructies

## ⚠️ Python Installatie Vereist

Het lijkt erop dat Python niet correct geïnstalleerd is. Volg deze stappen:

### 1. Installeer Python 3.11+

**Optie A: Via python.org (Aanbevolen)**
1. Ga naar https://www.python.org/downloads/
2. Download Python 3.11 of hoger
3. **BELANGRIJK**: Vink "Add Python to PATH" aan tijdens installatie
4. Installeer

**Optie B: Via Microsoft Store**
1. Open Microsoft Store
2. Zoek "Python 3.11"
3. Installeer

### 2. Verifieer Python Installatie

Open een **nieuwe** PowerShell terminal en run:

```powershell
python --version
# Moet Python 3.11.x of hoger tonen

python -m pip --version
# Moet pip versie tonen
```

### 3. Backend Setup (Na Python installatie)

Open PowerShell in de project directory en run:

```powershell
# Ga naar backend directory
cd "C:\Users\elwin\Documents\Cursor\Coach AI\backend"

# Maak virtual environment
python -m venv venv

# Activeer virtual environment
.\venv\Scripts\Activate.ps1

# Upgrade pip
python -m pip install --upgrade pip

# Installeer dependencies (dit kan even duren)
pip install -r requirements.txt

# Download SpaCy model
python -m spacy download nl_core_news_sm

# Maak .env bestand
copy .env.example .env

# Genereer secrets
python generate_secrets.py

# Kopieer de output (SECRET_KEY en ENCRYPTION_KEY) naar .env bestand
# Bewerk .env en vervang de placeholder waarden
```

### 4. Database Initialiseren

```powershell
# Zorg dat venv geactiveerd is
.\venv\Scripts\Activate.ps1

# Initialiseer database
python -c "from app.core.init_db import init_db; init_db()"
```

## ✅ Checklist

- [ ] Python 3.11+ geïnstalleerd
- [ ] Python toegevoegd aan PATH
- [ ] Virtual environment aangemaakt
- [ ] Dependencies geïnstalleerd
- [ ] SpaCy model gedownload
- [ ] .env bestand aangemaakt met secrets
- [ ] Database geïnitialiseerd

## 🆘 Problemen?

### "Python was not found"
- Installeer Python van python.org
- Zorg dat "Add Python to PATH" aangevinkt is
- Herstart PowerShell na installatie

### "pip is not recognized"
- Run: `python -m pip install --upgrade pip`
- Of herinstalleer Python met PATH optie

### "venv\Scripts\Activate.ps1 cannot be loaded"
- Run: `Set-ExecutionPolicy -ExecutionPolicy RemoteSigned -Scope CurrentUser`
- Probeer opnieuw

## Volgende Stap

Na voltooiing van stap 1, ga verder met:
- **Stap 2**: Ollama Setup (lokale AI)
- **Stap 3**: Frontend Setup
- **Stap 4**: Start Services



