# 📝 Dokumentácia promptov

Tento dokument obsahuje **prompty použité pri vývoji aplikácie FridgeChef** s pomocou AI nástroja. Každý prompt je doplnený o popis výsledku a prípadné úpravy, ktoré bolo treba urobiť manuálne.

---

## 🟢 PROMPT 1 — Návrh konceptu a architektúry

### 📤 Vstup do AI:
```
Chcem vytvoriť webovú aplikáciu "Generátor receptov". Užívateľ zadá suroviny,
ktoré má doma v chladničke, a aplikácia mu navrhne recepty, ktoré z nich vie
uvariť. Vizuálny štýl: moderný, glassmorphism, gradienty inšpirované jedlom.

Požiadavky:
- Tag systém pre suroviny (pridanie cez Enter alebo tlačidlo + odstránenie cez ✕)
- Tlačidlo "Nájdi recepty" a "Náhodný recept"
- Karty receptov s % zhody surovín, časom prípravy, obtiažnosťou
- Modálne okno s detailom (zoznam surovín + postup)
- Min. 20 receptov v databáze
- Plne responzívne (mobil/tablet/desktop)
- Validácia vstupov + animácie

Najprv mi navrhni KONCEPT — nápad, farebnú paletu, layout, štruktúru
súborov, algoritmus zhody, zoznam receptov. Kód až potom.
```

### 📥 Výstup AI:
- Vymyslený názov **FridgeChef** + tagline
- Food-inspired farebná paleta (paradajka, paprika, bazalka, baklažán, krémová)
- ASCII wireframe layoutu (header / input / tagy / tlačidlá / grid kariet / modál)
- Algoritmus zhody: `(dostupné suroviny / všetky suroviny v recepte) × 100`
- Zoznam 22 slovenských/medzinárodných jedál
- Responzívny breakpoint plán (375/768/1920px)
- Štruktúra súborov podľa požadovaných pravidiel

### ✅ Hodnotenie:
AI vygenerovalo koncept skoro kompletný. Doladil som len lokalizáciu (slovenské diakritické znaky vo validácii) a špecifikoval som, že localStorage **nechcem** (AI by ho štandardne navrhol).

---

## 🟢 PROMPT 2 — HTML štruktúra

### 📤 Vstup do AI:
```
Vytvor index.html súbor pre aplikáciu FridgeChef. Použi sémantické HTML5
elementy (header, section, article, footer). Pridaj:

- <input> s placeholderom a max-length 30
- Tlačidlo "+ Pridať" vedľa inputu
- Div pre validačné správy (role="alert")
- Container pre tagy (id="tagsContainer")
- Tri tlačidlá: Nájdi recepty, Náhodný recept, Vyčistiť
- Sekciu pre výsledky (h2 + grid)
- Empty state div (skrytý)
- Modálne okno s backdrop, content kartou, close tlačidlom
- Toast div pre notifikácie
- Animované pozadie s 3 "blob" divmi

Pripoj Google Fonts (Poppins) a externý CSS/JS súbor podľa štruktúry:
- assets/css/style.css
- assets/js/script.js

Pridaj ARIA atribúty pre prístupnosť.
```

### 📥 Výstup AI:
Kompletný HTML súbor s ~80 riadkami:
- Sémantické tagy ✅
- ARIA `role`, `aria-label`, `aria-hidden`, `aria-modal` ✅
- Preconnect na Google Fonts pre rýchlosť ✅
- Meta viewport pre mobil ✅

### ✏️ Manuálne úpravy:
- Pridal som `autocomplete="off"` na input (AI to zabudol)
- Doplnil som lepšie `aria-label` na tagsContainer
- Pridal som `<noscript>` upozornenie *(neskôr odstránené pre čistotu)*

---

## 🟢 PROMPT 3 — CSS dizajn (Glassmorphism + Food gradients)

### 📤 Vstup do AI:
```
Napíš style.css pre FridgeChef. Štýl: moderný glassmorphism s teplým
food-inspired gradientom na pozadí (oranžová → ružovo-fialová).

Špecifikácie:
- CSS premenné pre všetky farby (paradajková #E63946, paprika #F77F00,
  horčicová #FCBF49, bazalková #06A77D, baklažán #6A4C93, krémová #FFF8E7)
- Animované pozadie s 3 floating "blob" elementmi (filter: blur, animation)
- Glass karty: backdrop-filter blur, rgba pozadie, jemný border, soft shadow
- Tag systém: pill-shaped, gradient, hover scale, animácia "tagPop" pri vstupe
  a "tagOut" pri odstránení
- Shake animácia pri chybe validácie (input-wrapper.shake)
- Karty receptov: grid layout, hover lift effect, stagger fade-in animácia
- 3 farebné varianty match badge: high (zelený gradient), medium (oranžový),
  low (červený), random (fialový)
- Modálne okno: backdrop blur, scale-up enter animácia, custom scrollbar
- Toast: fixed bottom, slide-up animácia, success/error variants
- Responzívne breakpointy: 768px (tablet), 480px (mobil), 1400px (large desktop)
- Accessibility: focus-visible outline, prefers-reduced-motion media query
```

### 📥 Výstup AI:
- Plne fungujúci CSS (~700 riadkov)
- Glassmorphism efekty perfektne
- Animácie všetkých interakcií
- Responzív cez 3 breakpointy

### ✏️ Manuálne úpravy:
- Pôvodne AI použilo `purple-blue` paletu — explicitne som pretypoval na **food gradient**
- Stagger animácie kariet (1.–6. dieťa s rôznym delay) som musel pridať ručne
- AI vynechalo `-webkit-backdrop-filter` pre Safari kompatibilitu → doplnil som
- Pôvodný shadow bol príliš tmavý → zmenil som na `rgba(45, 27, 14, 0.15)`
- Pridal som `prefers-reduced-motion` pre prístupnosť

---

## 🟢 PROMPT 4 — JavaScript logika + databáza receptov

### 📤 Vstup do AI:
```
Vytvor script.js pre FridgeChef v ES6+. Štruktúra:

1. KONŠTANTA `recepty` — pole 22 objektov:
   { id, nazov, emoji, suroviny[], postup[], cas, obtiaznost, porcie }
   Recepty: Praženica, Palacinky, Cestoviny s paradajkovou omáčkou,
   Šopský šalát, Šošovicová polievka, Zemiakový šalát, Pizza, Tousty,
   Rizoto, Kuracie prsia, Vývar, Omeleta, Bryndzové halušky, Tvarohový
   koláč, Uhorkový šalát, Francúzsky toast, Guláš, Špenát, Pečené zemiaky,
   Čokoládový puding, Vafle, Krevety.

2. STAV: pole `pridaneSuroviny`

3. FUNKCIE:
   - normalize(str) — lowercase + trim + bez diakritiky
   - escapeHtml(str) — XSS ochrana
   - pridajSurovinu() — s 4 validáciami:
     a) prázdny vstup, b) <2 znaky, c) iba čísla, d) duplicita
   - odstranSurovinu(name, tagEl) — s removing animáciou (setTimeout 280ms)
   - vyrendrujTagy()
   - vypocitajZhodu(recept) → { percento, dostupne[], chybajuce[] }
     použiť fuzzy match (includes z oboch strán) pre flexibilitu
   - najdiRecepty() — filter percento >= 50, sort desc
   - nahodnyRecept() — Math.random
   - vytvorKartu(item) — HTML karta s match badge (high/medium/low/random)
   - otvorModal(recept, dostupne, chybajuce)
   - zatvorModal()
   - ukazValidaciu(text, typ) — s shake animáciou pri chybe
   - ukazToast(text, typ) — bottom notification

4. EVENT LISTENERS:
   - Enter klávesa v inpute → pridajSurovinu()
   - Escape klávesa → zatvorModal()
   - Klik mimo modálu (backdrop) → zatvor
   - Enter/Space na karte → otvor modál (keyboard accessibility)

Pridaj 'use strict' a komentáre v slovenčine.
```

### 📥 Výstup AI:
- Kompletný JS (~600 riadkov)
- Databáza 22 receptov s kompletnými postupmi (5-6 krokov každý)
- Všetky funkcie podľa špecifikácie
- Event delegation pre tag remove buttons

### ✏️ Manuálne úpravy:
- AI najprv vygenerovalo iba 12 receptov → musel som ho požiadať o ďalšiu várku
- Bryndzové halušky a Guláš mali nepresné postupy → ručne som upravil
- Pôvodne chýbala kontrola plurálu ("porcie" vs "porcií") → doplnil som logiku
- Funkcia `vypocitajZhodu` najprv robila len presnú zhodu (`===`) → upravil som na fuzzy match s `includes()` aby "vajce" matchovalo "vajcia"
- Pridal som `escapeHtml()` pre XSS ochranu, AI to nevygenerovalo automaticky
- Console.log na konci pre debug pridal AI, nechal som ho

---

## 🟢 PROMPT 5 — Responzívnosť a finálne ladenie

### 📤 Vstup do AI:
```
Otestuj a doplň responzívnosť pre FridgeChef. Aplikácia musí fungovať na:
- Mobil 375px — všetko v 1 stĺpci, tlačidlá full-width pod sebou,
  input-wrapper sa zalomí (input nad tlačidlom Pridať)
- Tablet 768px — 2 stĺpce kariet, tlačidlá akcie pod sebou (alebo vedľa),
  menší padding
- Desktop 1920px — 3-4 stĺpce kariet, max-width 1200px, centrované

Použi mobile-first prístup? Nie, použi max-width media queries
(je to jednoduchšie pre tento projekt).

Doplň aj:
- Custom scrollbar (webkit)
- Modál — na mobile padding 0.75rem, max-height 92vh
- Menšie blob blur (60px) na mobile pre lepší výkon
- Modal steps — menšie kruhy s číslami na mobile (28px)
```

### 📥 Výstup AI:
- 3 media queries (`max-width: 768px`, `max-width: 480px`, `min-width: 1400px`)
- Custom webkit scrollbar
- Mobile-friendly úpravy modálu
- Zlepšený výkon na mobile (menší blur)

### ✏️ Manuálne úpravy:
- AI najprv zabudlo na `flex-wrap: wrap` na input-wrapperi → tlačidlo Pridať prečnievalo
- Pridal som `min-width: 0` na input aby sa správne zmenšoval vo flex containeri
- Po testovaní som musel zmenšiť font-size loga na mobile pomocou `clamp()`

---

## 🟢 PROMPT 6 — README a dokumentácia

### 📤 Vstup do AI:
```
Vytvor README.md pre projekt FridgeChef. Obsahuje:
- Krátky popis projektu (1-2 vety)
- Badge ikony (HTML5, CSS3, JavaScript)
- Zoznam hlavných funkcií (s emoji)
- Návod na spustenie (online cez GitHub Pages + lokálne)
- Štruktúru projektu (file tree)
- Použité technológie (tabuľka)
- Responzívne breakpointy
- Zoznam 22 receptov
- Vysvetlenie algoritmu zhody
- Linky na prompts.md a reflexia.md
```

### 📥 Výstup AI:
Štruktúrované README s markdown tabuľkami, badge ikonami, file tree.

### ✏️ Manuálne úpravy:
- Doplnil som inštrukcie pre aktiváciu GitHub Pages
- Pridal som python http.server príkaz pre lokálne testovanie

---

## 📊 Sumár promptov

| # | Téma | Úspešnosť AI | Manuálnych zásahov |
|---|------|--------------|---------------------|
| 1 | Koncept a architektúra | 95% | Lokalizácia, vylúčenie localStorage |
| 2 | HTML štruktúra | 90% | ARIA, autocomplete |
| 3 | CSS dizajn | 80% | Paleta, stagger animácie, Safari prefix |
| 4 | JavaScript logika | 75% | Fuzzy match, XSS, plurály, doplnenie receptov |
| 5 | Responzívnosť | 85% | Flex-wrap input, font-size clamp |
| 6 | README | 95% | GitHub Pages návod |

**Celkový čas vývoja:** ~3 hodiny iteratívneho promptovania.
