# PowerShell Execution Policy Fix

## Probleem

PowerShell blokkeert het uitvoeren van scripts (zoals `Activate.ps1`).

## Oplossing

### Optie 1: Execution Policy Aanpassen (Aanbevolen)

Run dit commando **één keer** in PowerShell (als Administrator):

```powershell
Set-ExecutionPolicy -ExecutionPolicy RemoteSigned -Scope CurrentUser
```

Of zonder Administrator:

```powershell
Set-ExecutionPolicy -ExecutionPolicy RemoteSigned -Scope CurrentUser -Force
```

### Optie 2: Alternatieve Activatie (Zonder PowerShell Script)

Gebruik `activate.bat` in plaats van `Activate.ps1`:

```cmd
cd backend
venv\Scripts\activate.bat
```

Of gebruik Python direct:

```powershell
cd backend
.\venv\Scripts\python.exe -m pip install -r requirements.txt
.\venv\Scripts\python.exe -c "from app.main import app"
.\venv\Scripts\python.exe -m uvicorn app.main:app --reload
```

### Optie 3: Voor Deze Sessie Alleen

```powershell
Set-ExecutionPolicy -ExecutionPolicy Bypass -Scope Process
.\venv\Scripts\Activate.ps1
```

## Verificatie

Na het aanpassen van de execution policy:

```powershell
cd backend
.\venv\Scripts\Activate.ps1
python --version
```

## Veiligheid

`RemoteSigned` betekent:
- ✅ Lokale scripts kunnen draaien
- ✅ Scripts van internet moeten gesigneerd zijn
- ✅ Veilig voor development

## Alternatief: Gebruik Command Prompt (cmd)

Als PowerShell problemen blijft geven, gebruik Command Prompt:

```cmd
cd backend
venv\Scripts\activate.bat
python -c "from app.main import app; print('OK')"
uvicorn app.main:app --reload
```
