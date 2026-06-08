# 🍳 FridgeChef — Generátor receptov

> Webová aplikácia, ktorá ti pomôže rozhodnúť, čo si uvariť z toho, čo máš doma v chladničke.

![Made with HTML5](https://img.shields.io/badge/HTML5-E34F26?logo=html5&logoColor=white)
![Made with CSS3](https://img.shields.io/badge/CSS3-1572B6?logo=css3&logoColor=white)
![Made with JavaScript](https://img.shields.io/badge/JavaScript-ES6+-F7DF1E?logo=javascript&logoColor=black)

---

## 📖 Popis projektu

**FridgeChef** je responzívna webová aplikácia vytvorená s pomocou AI nástrojov. Umožňuje užívateľovi zadať suroviny, ktoré má doma, a navrhne mu recepty zoradené podľa **% zhody surovín**. Pri každom recepte vidí, ktoré suroviny má (🟢) a ktoré mu chýbajú (🔴). Po kliknutí na recept sa otvorí modálne okno s plným postupom varenia.

---

## ✨ Hlavné funkcie

- 🏷️ **Tag systém** — pridávanie surovín ako interaktívne tagy (Enter alebo tlačidlo Pridať)
- 🔍 **Inteligentné vyhľadávanie** — filtrovanie receptov s minimálnou zhodou 50%
- 🟢🔴 **Farebné odlíšenie** dostupných a chýbajúcich surovín
- 📊 **% zhody** zobrazené na karte receptu (zelená/oranžová/červená podľa úrovne)
- 🪟 **Modálne okno** s plným detailom receptu (suroviny, postup, čas, porcie)
- 🎲 **Náhodný recept** — náhodný výber zo všetkých 22 receptov
- ✅ **Validácia vstupu** — kontrola prázdneho vstupu, duplicít, minimálnej dĺžky, povolených znakov
- 🎬 **Animácie** — plynulé pridávanie tagov, fade-in kariet, hover efekty, modál animations
- 📱 **Plne responzívne** — mobil (375px), tablet (768px), desktop (1920px+)
- ⌨️ **Klávesové skratky** — Enter (pridať surovinu), Escape (zatvoriť modál)
- 🎨 **Glassmorphism dizajn** s food-inspired gradientmi (paradajka, paprika, bazalka)
- 🔔 **Toast notifikácie** pre user feedback

---

## 🚀 Spustenie aplikácie

### Online (GitHub Pages)
🌐 **[https://tvojegithubmeno.github.io/fridgechef/](https://tvojegithubmeno.github.io/fridgechef/)**

> ⚠️ Po nahraní na GitHub aktivuj GitHub Pages: **Settings → Pages → Source: `main` branch → Save**

### Lokálne
1. Stiahni / naklonuj repozitár:
   ```bash
   git clone https://github.com/tvojegithubmeno/fridgechef.git
   ```
2. Otvor priečinok:
   ```bash
   cd fridgechef
   ```
3. Otvor `index.html` v prehliadači (dvojklik) alebo cez lokálny server:
   ```bash
   # Python 3
   python -m http.server 8000
   # potom otvor http://localhost:8000
   ```

---

## 📁 Štruktúra projektu

```
fridgechef/
├── index.html              ← Hlavný HTML súbor
├── assets/
│   ├── css/
│   │   └── style.css       ← Všetky štýly (glassmorphism + responzív)
│   ├── js/
│   │   └── script.js       ← JS logika + databáza 22 receptov
│   └── images/             ← Priestor pre obrázky (zatiaľ prázdny)
├── prompts/
│   └── prompts.md          ← Dokumentácia AI promptov
├── reflexia.md             ← Reflexia vývoja s AI
└── README.md               ← Tento súbor
```

---

## 🎨 Použité technológie

| Technológia | Využitie |
|-------------|----------|
| **HTML5** | Sémantická štruktúra, ARIA atribúty, formulárové prvky |
| **CSS3** | Glassmorphism (`backdrop-filter`), gradienty, CSS premenné, animácie (`@keyframes`), Flexbox, CSS Grid, media queries |
| **JavaScript (ES6+)** | Arrow functions, destructuring, template literals, `Array.map/filter/sort`, DOM manipulácia, event handling, normalizácia stringov |
| **Google Fonts** | Poppins (300–800) |

---

## 📱 Responzívnosť

Aplikácia bola testovaná na nasledovných rozlíšeniach:

| Zariadenie | Breakpoint | Layout |
|------------|-----------|--------|
| 📱 Mobil | ≤ 480px | 1 stĺpec, tlačidlá pod sebou, kompaktný padding |
| 📱 Tablet | ≤ 768px | 1–2 stĺpce, tlačidlá vo flexbox stĺpci |
| 💻 Desktop | ≥ 1024px | 3+ stĺpce, max-width 1200px |
| 🖥️ Veľký monitor | ≥ 1400px | rozšírený max-width 1300px |

---

## 🍽️ Databáza receptov (22)

🍳 Praženica · 🥞 Palacinky · 🍝 Cestoviny s paradajkovou omáčkou · 🥗 Šopský šalát · 🍲 Šošovicová polievka · 🥔 Zemiakový šalát · 🍕 Domáca pizza · 🥪 Tousty so šunkou a syrom · 🍚 Rizoto s hubami · 🍗 Kuracie prsia na masle · 🍜 Vývar s rezancami · 🥚 Omeleta so syrom · 🥘 Bryndzové halušky · 🍰 Tvarohový koláč · 🥒 Uhorkový šalát · 🍞 Francúzsky toast · 🍖 Guláš · 🥬 Špenát s vajcom · 🍠 Pečené zemiaky · 🍫 Čokoládový puding · 🧇 Vafle · 🍤 Smažené krevety s cesnakom

---

## 🧠 Algoritmus zhody

Pre každý recept sa vypočíta percentuálna zhoda:

```
zhoda = (počet dostupných surovín v recepte / celkový počet surovín v recepte) × 100
```

- **80%+** → 🟢 Vysoká zhoda (zelený badge)
- **60–79%** → 🟡 Stredná zhoda (oranžový badge)
- **50–59%** → 🔴 Nízka zhoda (červený badge)
- **< 50%** → recept sa nezobrazí

Aplikácia využíva **fuzzy matching** (čiastočná zhoda + normalizácia bez diakritiky), takže "vajce" sa zhoduje s "vajcia", "Paradajka" s "paradajky" atď.

---

## 📋 Dokumentácia promptov a reflexia

- 📝 [Dokumentácia promptov](prompts/prompts.md) — 5+ promptov použitých pri vývoji
- 🪞 [Reflexia](reflexia.md) — čo AI vytvorilo samo, kde bolo treba zasiahnuť ručne

---

## 👨‍💻 Autor

Vytvorené ako školský projekt s pomocou AI nástrojov.

**Licencia:** MIT
