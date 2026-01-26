# Frontend Setup Script
# Installeert dependencies en configureert frontend

Write-Host "=== Frontend Setup ===" -ForegroundColor Cyan
Write-Host ""

# Check Node.js
Write-Host "Checking Node.js..." -ForegroundColor Yellow
try {
    $nodeVersion = node --version
    Write-Host "Node.js gevonden: $nodeVersion" -ForegroundColor Green
} catch {
    Write-Host "ERROR: Node.js niet gevonden!" -ForegroundColor Red
    Write-Host ""
    Write-Host "Installeer Node.js eerst:" -ForegroundColor Yellow
    Write-Host "1. Ga naar: https://nodejs.org/" -ForegroundColor White
    Write-Host "2. Download LTS versie" -ForegroundColor White
    Write-Host "3. Installeer met 'Add to PATH' optie" -ForegroundColor White
    Write-Host "4. Herstart PowerShell" -ForegroundColor White
    Write-Host "5. Run dit script opnieuw" -ForegroundColor White
    exit 1
}

# Check npm
Write-Host "Checking npm..." -ForegroundColor Yellow
try {
    $npmVersion = npm --version
    Write-Host "npm gevonden: $npmVersion" -ForegroundColor Green
} catch {
    Write-Host "ERROR: npm niet gevonden!" -ForegroundColor Red
    exit 1
}

Write-Host ""
Write-Host "Installing dependencies..." -ForegroundColor Yellow
Write-Host "Dit kan 2-5 minuten duren..." -ForegroundColor Gray

npm install

if ($LASTEXITCODE -ne 0) {
    Write-Host "ERROR: npm install gefaald!" -ForegroundColor Red
    exit 1
}

Write-Host ""
Write-Host "Creating .env.local..." -ForegroundColor Yellow

# Create .env.local
$envContent = "NEXT_PUBLIC_API_URL=http://localhost:8000"
$envContent | Out-File -FilePath ".env.local" -Encoding utf8 -NoNewline

Write-Host ".env.local aangemaakt" -ForegroundColor Green

Write-Host ""
Write-Host "=== Frontend Setup Voltooid! ===" -ForegroundColor Green
Write-Host ""
Write-Host "Start frontend met:" -ForegroundColor Cyan
Write-Host "  npm run dev" -ForegroundColor White
Write-Host ""
Write-Host "Frontend draait dan op: http://localhost:3000" -ForegroundColor Cyan
