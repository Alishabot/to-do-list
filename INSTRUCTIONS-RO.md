# To-Do List CLI - Instrucțiuni (Română)

Această aplicație este o implementare a unui To-Do List CLI în **TypeScript** și **JavaScript**, care permite gestionarea taskurilor prin intermediul unei interfețe interactive în linia de comandă.

## Cerințe

Construiți o aplicație To-Do List CLI care:

- ✅ Afișează un meniu cu opțiuni pentru adăugare, vizualizare și ștergere de taskuri
- ✅ Acceptă input de la utilizator pentru taskuri noi și le stochează într-o listă
- ✅ Permite ștergerea taskurilor după index sau după nume
- ✅ Afișează toate taskurile curente clar formatate
- ✅ Oferă confirmare de ieșire înainte de a închide aplicația

## Setup și Instalare

### Cerințe preliminare

- **Node.js** versiunea 14.0 sau mai nouă
- **npm** (vine cu Node.js)

### Instalare

1. Clonează repository-ul:
   ```bash
   git clone https://github.com/Alishabot/to-do-list.git
   cd to-do-list
   ```

2. Instalează dependințele:
   ```bash
   npm install
   ```

3. Compilează TypeScript:
   ```bash
   npm run build
   ```

## Rularea Aplicației

### Mod Development (cu ts-node)
```bash
npm run dev
```

### Mod Producție (compilat)
```bash
npm start
```

### Folosind Batch Script (Windows)
```bash
run-ts.bat
```

## Implementare

### Structura de Foldere

```
src/
├── app.ts          # Clasa aplicației principale
├── index.ts        # Entry point
├── todoList.ts     # Clasa pentru gestionarea taskurilor
└── utils.ts        # Funcții utilitare
```

### Instrumente și Tehnologii

- **Arrays/Lists** - Stochează taskurile dinamic folosind `push()`
- **forEach() cu index** - Afișează taskurile numerotate
- **readline-sync** - Primește input de la utilizator
- **While loop** - Menține meniu-ul activ până la ieșire
- **String methods** - Normalizează input-ul (.trim(), .toLowerCase())
- **console.clear()** - Curață terminalul pentru UX mai bun

### Funcții Principale

- `displayMenu()` - Afișează meniul cu opțiuni
- `addTask()` - Adaugă un task nou la array
- `viewTasks()` - Afișează toate taskurile numerotate
- `deleteTaskByIndex()` - Șterge task după index
- `deleteTaskByName()` - Șterge task după nume
- `confirmExit()` - Cere confirmare înainte de ieșire
- `clearScreen()` - Curață ecranul terminalului
- `main()` - Loop-ul principal al aplicației

### Caracteristici Implementate

1. **Stocare Dinamică**
   - Utilizează `Array` pentru stocherea taskurilor
   - Folosește `push()` pentru adăugare
   - Sprijină ștergerea dinamică

2. **Afișare cu Index**
   - Utilizează `forEach((task, index) => {...})`
   - Afișează taskurile numerotate clar: `[1] Task Name`
   - Template literals pentru formatare

3. **Gestionare Input**
   - `readline-sync` pentru input sincron
   - `.trim()` pentru normalizare
   - `.toLowerCase()` pentru comparații case-insensitive

4. **Error Handling**
   - Try/catch pentru ștergere
   - Validare index (1 <= index <= length)
   - Verificare task nu există
   - Mesaje de eroare clare

5. **Menu Loop**
   - `while(true)` pentru meniu principal
   - Loop pentru meniu ștergere
   - `switch/case` pentru opțiuni
   - Ieșire controlată cu confirmare

## Fluxul Aplicației

### Adăugare Task
```
Alege o opțiune (1-4): 1
Introdu taskul nou: Cumpără pâine
✓ Task adăugat cu succes: 'Cumpără pâine'
```

### Vizualizare Taskuri
```
Alege o opțiune (1-4): 2

LISTA DE TASKURI CURENTE
  [1] Cumpără pâine
  [2] Finalizează proiect

📊 Total: 2 task(uri) în listă
```

### Ștergere Task
```
Alege o opțiune (1-4): 3

OPȚIUNI DE ȘTERGERE
1. 🔢 Șterge după index
2. 🔤 Șterge după nume
3. ↩️  Înapoi la meniu

Alege o opțiune: 1
Introdu indexul: 1
✓ Task șters cu succes: 'Cumpără pâine'
```

### Ieșire Controlată
```
Alege o opțiune (1-4): 4
Sigur dorești să ieșești?
Tastează 'da' pentru a confirma: da
✓ La revedere! 👋
```

## Gestionarea Erorilor

Aplicația gestionează:
- ✓ Input gol
- ✓ Index invalid
- ✓ Task inexistent
- ✓ Input ne-numeric pentru index
- ✓ Erori neașteptate la runtime

## Comenzi Disponibile

| Comandă | Descriere |
|---------|-----------|
| `npm install` | Instalează dependințele |
| `npm run build` | Compilează TypeScript |
| `npm start` | Rulează aplicația compilată |
| `npm run dev` | Rulează în mod development |
| `npm run clean` | Șterge folderul dist |

## Sfaturi și Best Practices

- ✓ Folosește `push()` pentru adăugare dinamică
- ✓ Folosește `forEach()` cu index pentru afișare
- ✓ Curață terminalul pentru UX mai bun
- ✓ Validează input-ul înainte de prelucrare
- ✓ Oferă feedback clar utilizatorului
- ✓ Menține loop-ul activ corect
- ✓ Gestionează erorile cu try/catch

## Structura de Cod TypeScript

### Tipuri și Interfețe
- `Task` - Interfață pentru un task
- `TodoList` - Clasă pentru gestionare
- `TodoApp` - Clasă pentru interfață

### Convenții de Cod
- camelCase pentru funcții și variabile
- PascalCase pentru clase
- JSDoc comments pentru documentare
- Type-safe cu TypeScript

## Depanare

### "Node is not recognized"
- Instalează Node.js de la https://nodejs.org/
- Repornește calculatorul

### "npm: command not found"
- Reinstalează Node.js
- Verifică PATH environment variable

### TypeScript errors
- Șterge `node_modules`
- Rulează `npm install`
- Rulează `npm run build`

## Suport și Ajutor

Pentru mai multe informații sau probleme:
- Verific mesajele de eroare cu atenție
- Verific versiunea Node.js: `node --version`
- Verific npm: `npm --version`
- Creezi o issue pe GitHub

## Următorii Pași

1. ✅ Instalează dependințele
2. ✅ Compilează proiectul
3. ✅ Testează aplicația
4. ✅ Înțelege codul
5. ✅ Extend cu noi funcționalități

---

**Versiune**: 1.0.0  
**Licență**: MIT  
**Autor**: Alishabot
