# Registratie en Styling Fixes

## Problemen Opgelost

### 1. Registratie blijft op pagina
**Probleem**: Na registratie bleef gebruiker op registratie pagina

**Oplossing**: 
- Navigatie veranderd van `router.push('/dashboard')` naar `window.location.href = '/'`
- Dit forceert een volledige page refresh zodat de auth state wordt geüpdatet
- De home page (`/`) checkt automatisch de auth state en toont dashboard als authenticated

### 2. Witte achtergrond en witte letters
**Probleem**: Input velden hadden witte achtergrond en witte tekst (onzichtbaar)

**Oplossing**:
- Toegevoegd: `bg-white text-gray-900` aan alle input velden
- Dit zorgt voor witte achtergrond met donkere tekst
- Focus states aangepast naar `blue-500` (standaard Tailwind kleur)

## Wijzigingen

### LoginForm.tsx
1. **Input styling**:
   - Alle inputs hebben nu: `bg-white text-gray-900`
   - Focus states: `focus:ring-blue-500 focus:border-blue-500`

2. **Registratie flow**:
   - Na succesvolle registratie: `window.location.href = '/'`
   - Dit forceert page refresh en auth state update

3. **Button styling**:
   - Primary colors vervangen door `blue-600`, `blue-700` (standaard Tailwind)

## Test

1. **Registratie test**:
   - Vul registratie formulier in
   - Klik "Registreren"
   - Na succes zou je automatisch naar dashboard moeten gaan

2. **Styling test**:
   - Input velden moeten nu zwarte tekst op witte achtergrond hebben
   - Tekst moet goed leesbaar zijn

## Als registratie nog niet werkt

Check:
1. Backend draait op http://localhost:8000
2. Check browser console voor errors
3. Check network tab voor API responses
4. Test registratie via API docs: http://localhost:8000/docs
