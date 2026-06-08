# 🪞 Reflexia — Vývoj FridgeChef s AI

## 🎯 Úvod

Tento dokument zhŕňa moju skúsenosť s vývojom webovej aplikácie **FridgeChef** s pomocou AI nástroja. Cieľom projektu bolo vytvoriť funkčnú aplikáciu na navrhovanie receptov podľa surovín, ktoré má užívateľ doma v chladničke. Aplikácia mala byť responzívna, mať moderný glassmorphism dizajn s food-inspired gradientmi, obsahovať tag systém, modálne okná a databázu minimálne 20 receptov.

---

## ✅ Čo AI vygenerovalo samo (a fungovalo)

### 1. **Štruktúra a architektúra projektu**
Po prvom prompte s detailným zadaním AI okamžite navrhlo logickú štruktúru súborov presne podľa požadovaných pravidiel (`index.html` v koreni, `assets/css/style.css`, `assets/js/script.js`). Tiež navrhlo zmysluplný názov **FridgeChef** a celý koncept aplikácie vrátane ASCII wireframov, farebnej palety a algoritmu zhody surovín.

### 2. **HTML štruktúra**
Sémantické HTML5 elementy (`<header>`, `<section>`, `<article>`, `<footer>`), ARIA atribúty pre prístupnosť (`role`, `aria-label`, `aria-modal`, `aria-hidden`) a správna integrácia Google Fonts cez `preconnect` boli vygenerované bezchybne. AI dokonca pridalo `aria-live="polite"` na toast notifikácie, čo som ani explicitne nepožadoval.

### 3. **Glassmorphism CSS efekty**
Kombinácia `backdrop-filter: blur()`, polopriehľadného `rgba()` pozadia a jemných hraníc — toto AI zvládlo presne podľa moderných trendov. Animované "blob" elementy na pozadí s `filter: blur(80px)` a `@keyframes` animáciou vyzerajú profesionálne.

### 4. **Databáza receptov**
22 receptov s kompletnými ingredienciami, krokmi prípravy, časmi a obtiažnosťami — toto by ručne trvalo hodiny. AI generovalo realistické a varitelné recepty vrátane slovenských klasík ako Bryndzové halušky a Guláš.

### 5. **JavaScript logika**
Funkcie ako `pridajSurovinu()`, `vypocitajZhodu()`, `vyrendrujRecepty()` boli z 80% správne na prvý pokus. ES6+ syntax (arrow functions, destructuring, template literals, `Array.map/filter/sort`) bola použitá idiomaticky.

### 6. **Responzívne media queries**
Tri breakpointy (768px, 480px, 1400px) s priestorovo úspornými zmenami layoutu boli vygenerované rozumne. Tiež `prefers-reduced-motion` pre prístupnosť bol pekný bonus, ktorý som si nevyžiadal.

### 7. **Animácie**
`@keyframes` animácie pre tagy (`tagPop`, `tagOut`), karty (stagger fadeIn), modál (`modalIn` s bounce efektom) — všetko plynulé a moderne pôsobiace.

---

## ✏️ Kde som musel zasiahnuť ručne

### 1. **Fuzzy matching surovín** ⚠️
AI najprv generovalo `vypocitajZhodu()` s **presnou zhodou** (`===`), čo znamenalo, že "vajce" sa nezhodovalo s "vajcia". Musel som upraviť logiku na **obojstranný `includes()`** s normalizáciou bez diakritiky:

```js
const najdene = normalizovanePridane.some(pridana =>
    normSurovina.includes(pridana) || pridana.includes(normSurovina)
);
```

Toto je jeden z najdôležitejších manuálnych zásahov — bez neho by aplikácia bola frustrujúca pre užívateľa.

### 2. **XSS bezpečnosť**
AI vkladalo užívateľské vstupy priamo cez `innerHTML` bez sanitizácie. Musel som **pridať `escapeHtml()` funkciu** a obaliť všetky dynamické hodnoty ňou. AI by ideálne malo bezpečnosť riešiť automaticky, ale v tomto prípade som musel intervenovať.

### 3. **Lokalizácia a slovenčina**
- AI najprv generovalo komentáre a UI texty v angličtine — explicitne som musel požadovať slovenčinu.
- **Plurálové formy** ("1 porcia", "2 porcie", "5 porcií") — musel som doplniť logiku, lebo AI použilo jednoduchú angličtinu "portions".
- Regex pre validáciu **slovenských diakritických znakov** (`á, ä, č, ď, é...`) som musel doplniť ručne.

### 4. **Mobil layout — input wrapper**
Pri testovaní na mobile som zistil, že tlačidlo "Pridať" prečnievalo z input wrappera, lebo AI zabudlo na `flex-wrap: wrap` a `min-width: 0` na inpute. Toto vyžadovalo manuálnu úpravu:

```css
@media (max-width: 480px) {
    .input-wrapper {
        flex-wrap: wrap;
        border-radius: var(--radius-md);
    }
    .ingredient-input { width: 100%; }
    .btn-add { width: 100%; }
}
```

### 5. **Safari kompatibilita**
AI vynechalo `-webkit-backdrop-filter` prefix, čo by zlomilo glassmorphism efekt na Safari/iOS. Musel som ho ručne doplniť ku každému `backdrop-filter`.

### 6. **Počet receptov**
Pri prvom generovaní AI vyplodilo iba **12 receptov** napriek tomu, že prompt jasne požadoval minimálne 20. Musel som ho explicitne požiadať: *"Pridaj ďalších 10 receptov"*. Aj po doplnení som musel niekoľko receptov upraviť — napríklad **Bryndzové halušky** mali postup, ktorý vynechával kľúčový krok pretláčania cez halušovník.

### 7. **Stagger animácie**
Animácia s rôznymi delay pre prvých 6 kariet (`nth-child(1)` až `nth-child(6)`) som musel špecificky doplniť — AI generovalo iba jednotnú animáciu pre všetky karty.

---

## 🤔 Čo mi robilo problémy

### 1. **Inkonzistencia AI odpovedí**
Pri dlhších promptoch AI občas **„zabudlo"** na predošlé požiadavky. Napríklad som zdôraznil, že **nechcem localStorage**, ale pri jednej iterácii ho AI tichky pridalo späť. Musel som dávať pozor a kontrolovať každý generovaný súbor.

### 2. **Príliš všeobecné CSS**
Pôvodne som dostal **purple/blue** paletu (typický AI default), nie food-inspired. Musel som explicitne vymenovať farby s ich HEX kódmi a inšpiráciu (paradajka, paprika, bazalka), aby AI pochopilo, čo presne chcem.

### 3. **Testovanie bez devtools**
Bez fyzického testovania na rôznych zariadeniach mi AI nevie spoľahlivo povedať, či bude responzivita fungovať. Musel som zmeniť veľkosť okna v prehliadači a testovať každý breakpoint manuálne. Pri 480px sa odhalil bug s input-wrapperom (popísaný vyššie).

### 4. **Hĺbka logiky**
Pri komplexnejšej logike (fuzzy matching, percentuálne zoradenie, edge case keď je 0 surovín) AI generovalo "naivnú" implementáciu, ktorá fungovala v 80% prípadov, ale padla v okrajových. Bolo treba **kriticky kontrolovať každú funkciu** a premýšľať nad scenármi, ktoré AI nezvážilo.

### 5. **Iteratívne ladenie animácií**
Animácie sú subjektívne — niektoré boli príliš rýchle (200ms), iné pôsobili "lacne" (lineárna easing). Musel som niekoľkokrát požiadať o úpravu `cubic-bezier` hodnôt a `animation-duration` aby výsledok pôsobil profesionálne.

---

## 💡 Čo som sa naučil

1. **AI je výborný „pair programmer", nie samostatný developer.** Vie napísať 80% kódu rýchlo, ale tých zvyšných 20% (edge cases, lokalizácia, bezpečnosť, prístupnosť) vyžaduje ľudský dohľad.

2. **Detailnejšie prompty = lepšie výsledky.** Keď som v prompte vymenoval konkrétne HEX farby, breakpointy, názvy funkcií a požadované animácie, výstup bol takmer použiteľný na prvý pokus.

3. **Iteratívny prístup funguje najlepšie.** Najprv som získal koncept → potom HTML → CSS → JS → ladenie. Snaha vygenerovať všetko naraz by skončila chaosom.

4. **Validujte všetko, čo AI vyprodukuje.** Najmä regex, validáciu vstupov a bezpečnosť. Default AI implementácia často nie je "production-ready".

5. **Vizuálne ladenie nie je len o kóde.** Spustil som aplikáciu desiatky krát, menil farby, padding, border-radius — toto je proces, ktorý AI nedokáže vidieť bez screenshotu.

---

## 🎓 Záver

Vývoj FridgeChef s AI bol **veľmi efektívny** — odhadom som ušetril ~70% času oproti písaniu od nuly. Najväčšiu pridanú hodnotu AI prinieslo pri:
- generovaní databázy receptov,
- písaní CSS animácií a glassmorphism efektov,
- vytvorení sémantického HTML.

Naopak, najmenej spoľahlivé AI bolo pri:
- biznis logike s edge cases (fuzzy match),
- bezpečnostných aspektoch (XSS),
- lokalizácii a kultúrnych nuansách (slovenské plurály).

**Finálny verdikt:** AI je skvelý nástroj na akceleráciu vývoja, ale vyžaduje **kritického a skúseného človeka** za klávesnicou, ktorý vie validovať výstup, klásť správne otázky a iterovať na nedokonalostiach. Bez ľudského dohľadu by FridgeChef nebol ani polovičný od toho, čím je teraz. 🍳
