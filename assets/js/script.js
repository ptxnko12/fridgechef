/* =================================================
   FridgeChef - Generátor receptov
   ES6+ JavaScript
   ================================================= */

'use strict';

/* ============================================================
   DATABÁZA RECEPTOV (22 receptov)
   ============================================================ */
const recepty = [
    {
        id: 1,
        nazov: "Praženica",
        emoji: "🍳",
        suroviny: ["vajcia", "maslo", "soľ", "korenie"],
        postup: [
            "Rozbiť 3 vajcia do misky a zľahka rozmiešať vidličkou.",
            "Pridať štipku soli a korenia.",
            "Rozpustiť kúsok masla na panvici na strednom ohni.",
            "Naliať vajcia na panvicu a miešať drevenou vareškou.",
            "Variť cca 2-3 minúty, kým vajcia neztuhnú, ale ostanú vláčne."
        ],
        cas: 10,
        obtiaznost: "ľahká",
        porcie: 2
    },
    {
        id: 2,
        nazov: "Palacinky",
        emoji: "🥞",
        suroviny: ["múka", "mlieko", "vajcia", "cukor", "soľ", "olej"],
        postup: [
            "Zmiešať 250g múky, 2 vajcia, 500ml mlieka, štipku soli a 1 lyžicu cukru.",
            "Miešať metličkou, kým nie je cesto hladké.",
            "Nechať odpočinúť 15 minút.",
            "Rozohriať panvicu s trochou oleja.",
            "Naberačkou naliať cesto a otáčať panvicou, aby sa rozlialo.",
            "Smažiť 1-2 minúty z každej strany dozlatista."
        ],
        cas: 30,
        obtiaznost: "ľahká",
        porcie: 4
    },
    {
        id: 3,
        nazov: "Cestoviny s paradajkovou omáčkou",
        emoji: "🍝",
        suroviny: ["cestoviny", "paradajky", "cesnak", "olivový olej", "bazalka", "soľ"],
        postup: [
            "Uvariť cestoviny v osolenej vode podľa návodu.",
            "Na panvici rozohriať olivový olej a opražiť nakrájaný cesnak.",
            "Pridať nasekané paradajky a dusiť 10 minút.",
            "Dochutiť soľou a čerstvou bazalkou.",
            "Scediť cestoviny a zmiešať s omáčkou.",
            "Podávať s nastrúhaným parmezánom."
        ],
        cas: 20,
        obtiaznost: "ľahká",
        porcie: 2
    },
    {
        id: 4,
        nazov: "Šopský šalát",
        emoji: "🥗",
        suroviny: ["paradajky", "uhorka", "paprika", "cibuľa", "syr feta", "olivový olej", "soľ"],
        postup: [
            "Paradajky, uhorku a papriku nakrájať na kocky.",
            "Cibuľu nakrájať na tenké kolieska.",
            "Zmiešať všetku zeleninu v miske.",
            "Pokvapkať olivovým olejom a osoliť.",
            "Posypať nadrobeným syrom feta a podávať."
        ],
        cas: 10,
        obtiaznost: "ľahká",
        porcie: 2
    },
    {
        id: 5,
        nazov: "Šošovicová polievka",
        emoji: "🍲",
        suroviny: ["šošovica", "mrkva", "cibuľa", "cesnak", "olej", "soľ", "korenie", "ocot"],
        postup: [
            "Šošovicu prepláchnuť a namočiť na 2 hodiny.",
            "Na oleji opražiť nasekanú cibuľu a cesnak.",
            "Pridať nakrájanú mrkvu a krátko podusiť.",
            "Pridať šošovicu, zaliať vodou a variť 30 minút.",
            "Dochutiť soľou, korením a octom.",
            "Podávať s kúskom chleba."
        ],
        cas: 45,
        obtiaznost: "stredná",
        porcie: 4
    },
    {
        id: 6,
        nazov: "Zemiakový šalát",
        emoji: "🥔",
        suroviny: ["zemiaky", "majonéza", "cibuľa", "kyslé uhorky", "horčica", "soľ", "korenie"],
        postup: [
            "Zemiaky uvariť v šupke do mäkka.",
            "Nechať vychladnúť, ošúpať a nakrájať na kocky.",
            "Nakrájať cibuľu a kyslé uhorky na drobno.",
            "Všetko zmiešať v miske s majonézou a horčicou.",
            "Dochutiť soľou a korením.",
            "Nechať odpočinúť v chladničke aspoň 1 hodinu."
        ],
        cas: 60,
        obtiaznost: "ľahká",
        porcie: 4
    },
    {
        id: 7,
        nazov: "Domáca pizza",
        emoji: "🍕",
        suroviny: ["múka", "droždie", "voda", "olivový olej", "soľ", "paradajky", "syr", "šunka"],
        postup: [
            "Zmiešať múku, droždie, vodu, olej a soľ. Vypracovať cesto.",
            "Nechať kysnúť 1 hodinu na teplom mieste.",
            "Cesto rozvaľkať na okrúhly tvar.",
            "Potrieť paradajkovou omáčkou.",
            "Posypať syrom a poukladať plátky šunky.",
            "Piecť pri 220°C cca 15 minút."
        ],
        cas: 90,
        obtiaznost: "stredná",
        porcie: 4
    },
    {
        id: 8,
        nazov: "Tousty so šunkou a syrom",
        emoji: "🥪",
        suroviny: ["chlieb", "šunka", "syr", "maslo"],
        postup: [
            "Krajce chleba potrieť maslom.",
            "Na jeden krajec položiť plátok šunky a syra.",
            "Prikryť druhým krajcom.",
            "Smažiť na panvici alebo v hriankovači do zlatista.",
            "Podávať teplé."
        ],
        cas: 8,
        obtiaznost: "ľahká",
        porcie: 2
    },
    {
        id: 9,
        nazov: "Rizoto s hubami",
        emoji: "🍚",
        suroviny: ["ryža", "huby", "cibuľa", "cesnak", "biele víno", "parmezán", "maslo", "soľ"],
        postup: [
            "Na masle opražiť nasekanú cibuľu a cesnak.",
            "Pridať pokrájané huby a opekať 5 minút.",
            "Pridať ryžu a krátko opražiť.",
            "Zaliať vínom a nechať odpariť.",
            "Postupne prilievať horúci vývar a miešať.",
            "Variť 20 minút, na konci pridať parmezán a maslo."
        ],
        cas: 35,
        obtiaznost: "stredná",
        porcie: 4
    },
    {
        id: 10,
        nazov: "Kuracie prsia na masle",
        emoji: "🍗",
        suroviny: ["kuracie prsia", "maslo", "cesnak", "tymián", "soľ", "korenie"],
        postup: [
            "Kuracie prsia osušiť a osoliť, okoreniť.",
            "Rozohriať maslo na panvici.",
            "Smažiť prsia 4-5 minút z každej strany.",
            "Pridať pretlačený cesnak a tymián.",
            "Polievať masel kuracie mäso ešte 2 minúty.",
            "Nechať odpočinúť 5 minút pred krájaním."
        ],
        cas: 20,
        obtiaznost: "stredná",
        porcie: 2
    },
    {
        id: 11,
        nazov: "Vývar s rezancami",
        emoji: "🍜",
        suroviny: ["kurací vývar", "rezance", "mrkva", "petržlen", "cibuľa", "soľ"],
        postup: [
            "V hrnci priviesť vývar k varu.",
            "Pridať nakrájanú mrkvu a petržlen.",
            "Variť 15 minút, kým zelenina nezmäkne.",
            "Vhodiť rezance a variť ďalších 5 minút.",
            "Dochutiť soľou a posypať čerstvou petržlenovou vňaťou."
        ],
        cas: 25,
        obtiaznost: "ľahká",
        porcie: 4
    },
    {
        id: 12,
        nazov: "Omeleta so syrom",
        emoji: "🥚",
        suroviny: ["vajcia", "syr", "maslo", "soľ", "korenie", "petržlen"],
        postup: [
            "Rozšľahať 3 vajcia s trochou soli a korenia.",
            "Rozpustiť maslo na panvici.",
            "Naliať vajcia a nechať trochu stuhnúť.",
            "Posypať nastrúhaným syrom na polovicu omelety.",
            "Preložiť omeletu napoly a smažiť ešte minútu.",
            "Posypať nasekaným petržlenom a podávať."
        ],
        cas: 10,
        obtiaznost: "ľahká",
        porcie: 1
    },
    {
        id: 13,
        nazov: "Bryndzové halušky",
        emoji: "🥘",
        suroviny: ["zemiaky", "múka", "vajcia", "bryndza", "slanina", "soľ", "smotana"],
        postup: [
            "Nastrúhať surové zemiaky a zmiešať s múkou, vajcom a soľou.",
            "Cesto pretláčať cez halušovník do osolenej vriacej vody.",
            "Variť, kým halušky nevyplávajú na povrch.",
            "Slaninu nakrájať a vyškvariť do chrumkava.",
            "Halušky scediť, zmiešať s bryndzou a smotanou.",
            "Pokvapkať škvarenou slaninou a podávať."
        ],
        cas: 40,
        obtiaznost: "stredná",
        porcie: 4
    },
    {
        id: 14,
        nazov: "Tvarohový koláč",
        emoji: "🍰",
        suroviny: ["tvaroh", "múka", "vajcia", "cukor", "maslo", "vanilkový cukor", "kypriaci prášok"],
        postup: [
            "Maslo s cukrom vyšľahať do pevnej peny.",
            "Postupne pridávať vajcia a vanilkový cukor.",
            "Vmiešať tvaroh, múku a kypriaci prášok.",
            "Cesto naliať do vymastenej formy.",
            "Piecť pri 180°C cca 40 minút.",
            "Nechať vychladnúť a posypať cukrom."
        ],
        cas: 60,
        obtiaznost: "stredná",
        porcie: 8
    },
    {
        id: 15,
        nazov: "Uhorkový šalát",
        emoji: "🥒",
        suroviny: ["uhorka", "smotana", "ocot", "cukor", "soľ", "cesnak", "kôpor"],
        postup: [
            "Uhorku nastrúhať na hrubom strúhadle.",
            "Mierne osoliť a nechať pustiť šťavu 10 minút.",
            "Vytlačiť prebytočnú tekutinu.",
            "Zmiešať so smotanou, octom, cukrom a cesnakom.",
            "Pridať nasekaný kôpor.",
            "Vychladiť v chladničke pred podávaním."
        ],
        cas: 15,
        obtiaznost: "ľahká",
        porcie: 2
    },
    {
        id: 16,
        nazov: "Francúzsky toast",
        emoji: "🍞",
        suroviny: ["chlieb", "vajcia", "mlieko", "cukor", "škorica", "maslo"],
        postup: [
            "Rozšľahať vajcia s mliekom, cukrom a škoricou.",
            "Krajce chleba namočiť do zmesi z oboch strán.",
            "Rozohriať maslo na panvici.",
            "Smažiť toasty 2-3 minúty z každej strany.",
            "Podávať s javorovým sirupom alebo ovocím."
        ],
        cas: 15,
        obtiaznost: "ľahká",
        porcie: 2
    },
    {
        id: 17,
        nazov: "Guláš",
        emoji: "🍖",
        suroviny: ["hovädzie mäso", "cibuľa", "paprika", "paradajkový pretlak", "olej", "soľ", "korenie", "rasca"],
        postup: [
            "Cibuľu nasekať na drobno a opražiť na oleji.",
            "Pridať nakrájané mäso a opekať dozlatista.",
            "Pridať mletú papriku, rascu a pretlak.",
            "Zaliať vodou a dusiť 1.5 hodiny na miernom ohni.",
            "Dochutiť soľou a korením.",
            "Podávať s knedľou alebo chlebom."
        ],
        cas: 120,
        obtiaznost: "náročná",
        porcie: 6
    },
    {
        id: 18,
        nazov: "Špenát s vajcom",
        emoji: "🥬",
        suroviny: ["špenát", "vajcia", "cesnak", "smotana", "maslo", "soľ", "muškátový oriešok"],
        postup: [
            "Špenát opláchnuť a krátko podusiť.",
            "Na masle opražiť pretlačený cesnak.",
            "Pridať špenát a smotanu, dusiť 5 minút.",
            "Dochutiť soľou a muškátovým orieškom.",
            "Na inej panvici usmažiť volské oká.",
            "Špenát preložiť na tanier a navrch dať vajcia."
        ],
        cas: 15,
        obtiaznost: "ľahká",
        porcie: 2
    },
    {
        id: 19,
        nazov: "Pečené zemiaky",
        emoji: "🍠",
        suroviny: ["zemiaky", "olivový olej", "rozmarín", "cesnak", "soľ", "korenie"],
        postup: [
            "Zemiaky umyť a nakrájať na štvrtinky.",
            "Vložiť do misy s olejom, rozmarínom a cesnakom.",
            "Dôkladne premiešať, aby sa všetko obalilo.",
            "Rozprestrieť na plech a osoliť.",
            "Piecť pri 200°C cca 35-40 minút.",
            "Pred koncom posypať korením a podávať."
        ],
        cas: 50,
        obtiaznost: "ľahká",
        porcie: 4
    },
    {
        id: 20,
        nazov: "Čokoládový puding",
        emoji: "🍫",
        suroviny: ["mlieko", "čokoláda", "cukor", "škrob", "vanilkový cukor"],
        postup: [
            "Mlieko priviesť k varu s cukrom.",
            "Škrob rozriediť v troche studeného mlieka.",
            "Vmiešať škrob do horúceho mlieka a variť do zhustnutia.",
            "Pridať nalámanú čokoládu a vanilkový cukor.",
            "Miešať, kým sa čokoláda nerozpustí.",
            "Naliať do pohárikov a nechať vychladnúť."
        ],
        cas: 20,
        obtiaznost: "ľahká",
        porcie: 4
    },
    {
        id: 21,
        nazov: "Vafle",
        emoji: "🧇",
        suroviny: ["múka", "mlieko", "vajcia", "maslo", "cukor", "kypriaci prášok", "vanilkový cukor"],
        postup: [
            "Rozšľahať vajcia s cukrom a vanilkovým cukrom.",
            "Pridať roztopené maslo a mlieko.",
            "Postupne vmiešať múku s kypriacim práškom.",
            "Cesto nechať odpočinúť 10 minút.",
            "Piecť vo vafľovači do zlatohneda.",
            "Podávať s ovocím, šľahačkou alebo sirupom."
        ],
        cas: 25,
        obtiaznost: "ľahká",
        porcie: 4
    },
    {
        id: 22,
        nazov: "Smažené krevety s cesnakom",
        emoji: "🍤",
        suroviny: ["krevety", "cesnak", "olivový olej", "maslo", "petržlen", "citrón", "soľ", "chilli"],
        postup: [
            "Krevety očistiť a osušiť papierovou utierkou.",
            "Cesnak nasekať na drobno.",
            "Rozohriať olivový olej a maslo na panvici.",
            "Pridať cesnak a chilli, krátko opražiť.",
            "Vhodiť krevety a smažiť 2 minúty z každej strany.",
            "Posypať petržlenom a pokvapkať citrónom."
        ],
        cas: 15,
        obtiaznost: "stredná",
        porcie: 2
    }
];

/* ============================================================
   STAV APLIKÁCIE
   ============================================================ */
let pridaneSuroviny = []; // pole stringov

/* ============================================================
   DOM ODKAZY
   ============================================================ */
const $ = (id) => document.getElementById(id);

const els = {
    input:          $('ingredientInput'),
    addBtn:         $('addBtn'),
    findBtn:        $('findBtn'),
    randomBtn:      $('randomBtn'),
    clearBtn:       $('clearBtn'),
    tagsContainer:  $('tagsContainer'),
    validationMsg:  $('validationMsg'),
    inputWrapper:   document.querySelector('.input-wrapper'),
    resultsHeader:  $('resultsHeader'),
    resultsTitle:   $('resultsTitle'),
    recipesGrid:    $('recipesGrid'),
    emptyState:     $('emptyState'),
    modal:          $('modal'),
    modalBody:      $('modalBody'),
    modalClose:     $('modalClose'),
    modalBackdrop:  document.querySelector('.modal-backdrop'),
    toast:          $('toast')
};

/* ============================================================
   UTILITY
   ============================================================ */

/** Normalizácia stringu - lowercase, trim, bez diakritiky */
function normalize(str) {
    return str
        .toLowerCase()
        .trim()
        .normalize('NFD')
        .replace(/[\u0300-\u036f]/g, '');
}

/** HTML escape (XSS ochrana) */
function escapeHtml(str) {
    const div = document.createElement('div');
    div.textContent = str;
    return div.innerHTML;
}

/** Capitalizácia prvého písmena */
function capitalize(str) {
    return str.charAt(0).toUpperCase() + str.slice(1);
}

/** Zobrazenie validačnej správy */
function ukazValidaciu(text, typ = 'error') {
    els.validationMsg.textContent = text;
    els.validationMsg.className = `validation-msg show ${typ === 'success' ? 'success' : ''}`;

    if (typ === 'error') {
        els.inputWrapper.classList.add('shake');
        setTimeout(() => els.inputWrapper.classList.remove('shake'), 400);
    }

    setTimeout(() => {
        els.validationMsg.classList.remove('show');
    }, 2500);
}

/** Toast notifikácia */
function ukazToast(text, typ = 'info') {
    els.toast.textContent = text;
    els.toast.className = `toast show ${typ}`;

    setTimeout(() => {
        els.toast.classList.remove('show');
    }, 2500);
}

/* ============================================================
   SPRÁVA SUROVÍN (TAGY)
   ============================================================ */

function pridajSurovinu() {
    const rawValue = els.input.value;
    const value = rawValue.trim();

    // VALIDÁCIA 1: Prázdny vstup
    if (!value) {
        ukazValidaciu('⚠️ Zadaj názov suroviny!');
        return;
    }

    // VALIDÁCIA 2: Príliš krátke
    if (value.length < 2) {
        ukazValidaciu('⚠️ Surovina musí mať aspoň 2 znaky');
        return;
    }

    // VALIDÁCIA 3: Iba čísla/špeciálne znaky
    if (!/[a-zA-ZáäčďéíĺľňóôŕšťúýžÁÄČĎÉÍĹĽŇÓÔŔŠŤÚÝŽ]/.test(value)) {
        ukazValidaciu('⚠️ Surovina musí obsahovať písmená');
        return;
    }

    // VALIDÁCIA 4: Duplicita
    const normalized = normalize(value);
    if (pridaneSuroviny.some(s => normalize(s) === normalized)) {
        ukazValidaciu(`⚠️ "${value}" už máš v zozname!`);
        return;
    }

    // OK - pridaj
    pridaneSuroviny.push(value.toLowerCase());
    els.input.value = '';
    els.input.focus();
    vyrendrujTagy();
    ukazValidaciu(`✓ Pridané: ${value}`, 'success');
}

function odstranSurovinu(surovina, tagEl) {
    // Animácia pred odstránením
    tagEl.classList.add('removing');

    setTimeout(() => {
        pridaneSuroviny = pridaneSuroviny.filter(s => s !== surovina);
        vyrendrujTagy();
    }, 280);
}

function vycistiSuroviny() {
    if (pridaneSuroviny.length === 0) {
        ukazToast('Zoznam je už prázdny 🤷', 'info');
        return;
    }

    pridaneSuroviny = [];
    vyrendrujTagy();
    els.recipesGrid.innerHTML = '';
    els.resultsHeader.style.display = 'none';
    els.emptyState.style.display = 'none';
    ukazToast('Suroviny vyčistené 🗑️', 'success');
}

function vyrendrujTagy() {
    if (pridaneSuroviny.length === 0) {
        els.tagsContainer.innerHTML =
            '<p class="tags-placeholder">Zatiaľ žiadne suroviny — pridaj nejaké! 👆</p>';
        return;
    }

    els.tagsContainer.innerHTML = '';

    pridaneSuroviny.forEach(surovina => {
        const tag = document.createElement('span');
        tag.className = 'tag';
        tag.innerHTML = `
            <span>${escapeHtml(capitalize(surovina))}</span>
            <button class="tag-remove" aria-label="Odstrániť ${escapeHtml(surovina)}">✕</button>
        `;

        tag.querySelector('.tag-remove').addEventListener('click', (e) => {
            e.stopPropagation();
            odstranSurovinu(surovina, tag);
        });

        els.tagsContainer.appendChild(tag);
    });
}

/* ============================================================
   LOGIKA RECEPTOV
   ============================================================ */

/**
 * Vypočíta zhodu medzi pridanými surovinami a receptom.
 * Vráti objekt: { percento, dostupne[], chybajuce[] }
 */
function vypocitajZhodu(recept) {
    const normalizovanePridane = pridaneSuroviny.map(normalize);

    const dostupne = [];
    const chybajuce = [];

    recept.suroviny.forEach(surovina => {
        const normSurovina = normalize(surovina);

        // Hľadáme čiastočnú zhodu (napr. "vajce" by malo zmatchovať "vajcia")
        const najdene = normalizovanePridane.some(pridana =>
            normSurovina.includes(pridana) || pridana.includes(normSurovina)
        );

        if (najdene) {
            dostupne.push(surovina);
        } else {
            chybajuce.push(surovina);
        }
    });

    const percento = recept.suroviny.length > 0
        ? Math.round((dostupne.length / recept.suroviny.length) * 100)
        : 0;

    return { percento, dostupne, chybajuce };
}

function najdiRecepty() {
    if (pridaneSuroviny.length === 0) {
        ukazValidaciu('⚠️ Najprv pridaj aspoň jednu surovinu!');
        ukazToast('Pridaj suroviny pre nájdenie receptov 🥕', 'error');
        return;
    }

    // Pre každý recept vypočítaj zhodu
    const sZhodou = recepty.map(recept => ({
        recept,
        ...vypocitajZhodu(recept)
    }));

    // Filtruj na min. 50% a zoraď zostupne
    const vhodne = sZhodou
        .filter(r => r.percento >= 50)
        .sort((a, b) => b.percento - a.percento);

    if (vhodne.length === 0) {
        zobrazPrazdnyStav();
        return;
    }

    vyrendrujRecepty(vhodne, `📋 Nájdené recepty (${vhodne.length})`);
    ukazToast(`Našli sme ${vhodne.length} ${vhodne.length === 1 ? 'recept' : vhodne.length < 5 ? 'recepty' : 'receptov'}! 🎉`, 'success');
}

function nahodnyRecept() {
    const nahodny = recepty[Math.floor(Math.random() * recepty.length)];
    const zhoda = pridaneSuroviny.length > 0
        ? vypocitajZhodu(nahodny)
        : { percento: null, dostupne: [], chybajuce: nahodny.suroviny };

    vyrendrujRecepty(
        [{ recept: nahodny, ...zhoda, jeNahodny: true }],
        '🎲 Náhodný recept'
    );

    ukazToast(`Náhodný výber: ${nahodny.nazov} ${nahodny.emoji}`, 'success');
}

function zobrazPrazdnyStav() {
    els.recipesGrid.innerHTML = '';
    els.resultsHeader.style.display = 'none';
    els.emptyState.style.display = 'block';

    // Plynulý scroll k empty state
    setTimeout(() => {
        els.emptyState.scrollIntoView({ behavior: 'smooth', block: 'center' });
    }, 100);
}

/* ============================================================
   RENDEROVANIE KARIET
   ============================================================ */

function vyrendrujRecepty(zoznam, nadpis) {
    els.emptyState.style.display = 'none';
    els.resultsHeader.style.display = 'block';
    els.resultsTitle.textContent = nadpis;
    els.recipesGrid.innerHTML = '';

    zoznam.forEach(item => {
        const karta = vytvorKartu(item);
        els.recipesGrid.appendChild(karta);
    });

    // Plynulý scroll k výsledkom
    setTimeout(() => {
        els.resultsHeader.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }, 100);
}

function vytvorKartu(item) {
    const { recept, percento, dostupne, chybajuce, jeNahodny } = item;

    const karta = document.createElement('article');
    karta.className = 'recipe-card';
    karta.setAttribute('role', 'button');
    karta.setAttribute('tabindex', '0');
    karta.setAttribute('aria-label', `Recept: ${recept.nazov}`);

    // Trieda pre badge zhody
    let matchClass = 'match-low';
    let matchText = `${percento}% zhoda`;

    if (jeNahodny) {
        matchClass = 'match-random';
        matchText = percento !== null ? `🎲 ${percento}% zhoda` : '🎲 Náhodný výber';
    } else if (percento >= 80) matchClass = 'match-high';
    else if (percento >= 60) matchClass = 'match-medium';

    // Preview surovín
    const previewSuroviny = recept.suroviny.slice(0, 4).map(s => {
        const isAvailable = dostupne.includes(s);
        return isAvailable
            ? `<span class="ing-available">🟢 ${escapeHtml(s)}</span>`
            : `<span class="ing-missing">🔴 ${escapeHtml(s)}</span>`;
    }).join(' · ');

    const viacSurovin = recept.suroviny.length > 4
        ? ` <span style="opacity:.6">+${recept.suroviny.length - 4} ďalších</span>`
        : '';

    karta.innerHTML = `
        <span class="recipe-emoji">${recept.emoji}</span>
        <h3 class="recipe-name">${escapeHtml(recept.nazov)}</h3>
        <div class="recipe-match ${matchClass}">${matchText}</div>
        <div class="recipe-meta">
            <span>⏱️ ${recept.cas} min</span>
            <span>🔥 ${capitalize(recept.obtiaznost)}</span>
            <span>👥 ${recept.porcie} ${recept.porcie === 1 ? 'porcia' : recept.porcie < 5 ? 'porcie' : 'porcií'}</span>
        </div>
        <div class="recipe-ingredients-preview">
            ${previewSuroviny}${viacSurovin}
        </div>
    `;

    // Event listenery
    karta.addEventListener('click', () => otvorModal(recept, dostupne, chybajuce));
    karta.addEventListener('keydown', (e) => {
        if (e.key === 'Enter' || e.key === ' ') {
            e.preventDefault();
            otvorModal(recept, dostupne, chybajuce);
        }
    });

    return karta;
}

/* ============================================================
   MODÁLNE OKNO
   ============================================================ */

function otvorModal(recept, dostupne = [], chybajuce = []) {
    // Ak neboli zaslané, vypočítaj
    if (dostupne.length === 0 && chybajuce.length === 0) {
        const zhoda = vypocitajZhodu(recept);
        dostupne = zhoda.dostupne;
        chybajuce = zhoda.chybajuce;
    }

    const ingredientsHtml = recept.suroviny.map(s => {
        const available = dostupne.includes(s);
        return `
            <span class="modal-ingredient ${available ? 'available' : 'missing'}">
                ${available ? '🟢' : '🔴'} ${escapeHtml(capitalize(s))}
            </span>
        `;
    }).join('');

    const stepsHtml = recept.postup.map(krok =>
        `<li>${escapeHtml(krok)}</li>`
    ).join('');

    els.modalBody.innerHTML = `
        <div class="modal-emoji">${recept.emoji}</div>
        <h2>${escapeHtml(recept.nazov)}</h2>
        <div class="modal-meta">
            <span>⏱️ ${recept.cas} min</span>
            <span>🔥 ${capitalize(recept.obtiaznost)}</span>
            <span>👥 ${recept.porcie} ${recept.porcie === 1 ? 'porcia' : recept.porcie < 5 ? 'porcie' : 'porcií'}</span>
        </div>

        <div class="modal-section">
            <h3>🥕 Suroviny</h3>
            <div class="modal-ingredients">
                ${ingredientsHtml}
            </div>
        </div>

        <div class="modal-section">
            <h3>👨‍🍳 Postup</h3>
            <ol class="modal-steps">
                ${stepsHtml}
            </ol>
        </div>
    `;

    els.modal.classList.add('active');
    els.modal.setAttribute('aria-hidden', 'false');
    document.body.style.overflow = 'hidden';
}

function zatvorModal() {
    els.modal.classList.remove('active');
    els.modal.setAttribute('aria-hidden', 'true');
    document.body.style.overflow = '';
}

/* ============================================================
   EVENT LISTENERS
   ============================================================ */

// Tlačidlo Pridať
els.addBtn.addEventListener('click', pridajSurovinu);

// Enter v inpute
els.input.addEventListener('keydown', (e) => {
    if (e.key === 'Enter') {
        e.preventDefault();
        pridajSurovinu();
    }
});

// Tlačidlá akcie
els.findBtn.addEventListener('click', najdiRecepty);
els.randomBtn.addEventListener('click', nahodnyRecept);
els.clearBtn.addEventListener('click', vycistiSuroviny);

// Modál
els.modalClose.addEventListener('click', zatvorModal);
els.modalBackdrop.addEventListener('click', zatvorModal);

// Escape klávesa pre modál
document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape' && els.modal.classList.contains('active')) {
        zatvorModal();
    }
});

/* ============================================================
   INICIALIZÁCIA
   ============================================================ */
document.addEventListener('DOMContentLoaded', () => {
    vyrendrujTagy();
    els.input.focus();
    console.log('🍳 FridgeChef načítaný! Databáza obsahuje', recepty.length, 'receptov.');
});
