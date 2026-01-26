#!/bin/bash
# Start Script voor Linux/Mac
# Start alle benodigde services voor AI Coach Chatbot

echo "🚀 Starting AI Coach Chatbot..."

# Check Ollama
echo ""
echo "📦 Checking Ollama..."
if ! curl -s http://localhost:11434/api/tags > /dev/null 2>&1; then
    echo "⚠️  Ollama not running. Starting Ollama..."
    ollama serve &
    sleep 5
fi

# Check PostgreSQL
echo ""
echo "🗄️  Checking PostgreSQL..."
if ! pg_isready > /dev/null 2>&1; then
    echo "⚠️  PostgreSQL not running. Please start PostgreSQL manually."
fi

# Start Backend
echo ""
echo "🔧 Starting Backend..."
cd backend

if [ ! -d "venv" ]; then
    echo "Creating virtual environment..."
    python3 -m venv venv
fi

source venv/bin/activate
echo "Installing/updating dependencies..."
pip install -q -r requirements.txt

echo "Starting FastAPI server..."
gnome-terminal -- bash -c "cd $(pwd); source venv/bin/activate; uvicorn app.main:app --reload; exec bash" 2>/dev/null || \
xterm -e "cd $(pwd); source venv/bin/activate; uvicorn app.main:app --reload" 2>/dev/null || \
osascript -e "tell app \"Terminal\" to do script \"cd $(pwd); source venv/bin/activate; uvicorn app.main:app --reload\"" 2>/dev/null || \
uvicorn app.main:app --reload &

# Start Frontend
echo ""
echo "🎨 Starting Frontend..."
cd ../frontend

if [ ! -d "node_modules" ]; then
    echo "Installing npm dependencies..."
    npm install
fi

echo "Starting Next.js dev server..."
gnome-terminal -- bash -c "cd $(pwd); npm run dev; exec bash" 2>/dev/null || \
xterm -e "cd $(pwd); npm run dev" 2>/dev/null || \
osascript -e "tell app \"Terminal\" to do script \"cd $(pwd); npm run dev\"" 2>/dev/null || \
npm run dev &

echo ""
echo "✅ Services starting..."
echo "Backend: http://localhost:8000"
echo "Frontend: http://localhost:3000"
echo "API Docs: http://localhost:8000/docs"
echo ""
echo "Press Ctrl+C to stop all services"

# Wait for interrupt
trap "echo 'Stopping services...'; killall uvicorn; killall node; exit" INT
wait



