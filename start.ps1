# Start Script voor Windows PowerShell
# Start alle benodigde services voor AI Coach Chatbot

Write-Host "🚀 Starting AI Coach Chatbot..." -ForegroundColor Green

# Check Ollama
Write-Host "`n📦 Checking Ollama..." -ForegroundColor Yellow
$ollamaCheck = curl -s http://localhost:11434/api/tags 2>$null
if ($LASTEXITCODE -ne 0) {
    Write-Host "⚠️  Ollama not running. Starting Ollama..." -ForegroundColor Yellow
    Start-Process "ollama" -ArgumentList "serve" -WindowStyle Minimized
    Start-Sleep -Seconds 5
}

# Check PostgreSQL
Write-Host "`n🗄️  Checking PostgreSQL..." -ForegroundColor Yellow
$pgCheck = pg_isready 2>$null
if ($LASTEXITCODE -ne 0) {
    Write-Host "⚠️  PostgreSQL not running. Please start PostgreSQL manually." -ForegroundColor Red
}

# Start Backend
Write-Host "`n🔧 Starting Backend..." -ForegroundColor Yellow
$backendPath = Join-Path $PSScriptRoot "backend"
Set-Location $backendPath

if (-not (Test-Path "venv")) {
    Write-Host "Creating virtual environment..." -ForegroundColor Yellow
    python -m venv venv
}

& ".\venv\Scripts\Activate.ps1"
Write-Host "Installing/updating dependencies..." -ForegroundColor Yellow
pip install -q -r requirements.txt

Write-Host "Starting FastAPI server..." -ForegroundColor Green
Start-Process powershell -ArgumentList "-NoExit", "-Command", "cd '$backendPath'; .\venv\Scripts\Activate.ps1; uvicorn app.main:app --reload" -WindowStyle Normal

# Start Frontend
Write-Host "`n🎨 Starting Frontend..." -ForegroundColor Yellow
$frontendPath = Join-Path $PSScriptRoot "frontend"
Set-Location $frontendPath

if (-not (Test-Path "node_modules")) {
    Write-Host "Installing npm dependencies..." -ForegroundColor Yellow
    npm install
}

Write-Host "Starting Next.js dev server..." -ForegroundColor Green
Start-Process powershell -ArgumentList "-NoExit", "-Command", "cd '$frontendPath'; npm run dev" -WindowStyle Normal

Write-Host "`n✅ Services starting..." -ForegroundColor Green
Write-Host "Backend: http://localhost:8000" -ForegroundColor Cyan
Write-Host "Frontend: http://localhost:3000" -ForegroundColor Cyan
Write-Host "API Docs: http://localhost:8000/docs" -ForegroundColor Cyan
Write-Host "`nPress any key to exit..." -ForegroundColor Yellow
$null = $Host.UI.RawUI.ReadKey("NoEcho,IncludeKeyDown")



