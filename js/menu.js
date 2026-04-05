const json = `{
  "menu": {
    "pizze_classiche": [
      {"nome": "MARINARA", "ingredienti": "pomodoro, aglio, origano", "normale": 6.0, "familiare": 12.0},
      {"nome": "MARGHERITA", "ingredienti": "pomodoro, mozzarella", "normale": 6.0, "familiare": 12.0},
      {"nome": "4 STAGIONI", "ingredienti": "pomodoro, mozzarella, prosciutto cotto, funghi, carciofi, olive", "normale": 9.0, "familiare": 18.0},
      {"nome": "AI FORMAGGI", "ingredienti": "pomodoro, mozzarella, provola affumicata, brie, gorgonzola", "normale": 8.5, "familiare": 17.0},
      {"nome": "AMATRICIANA", "ingredienti": "pomodoro, mozzarella, pancetta, cipolla, grana", "normale": 9.0, "familiare": 18.0},
      {"nome": "BRESAOLA RUCOLA E GRANA", "ingredienti": "pomodoro, mozzarella, bresaola, rucola, grana", "normale": 9.5, "familiare": 19.0},
      {"nome": "BUFALA", "ingredienti": "pomodoro, mozzarella, mozzarella di bufala", "normale": 8.0, "familiare": 16.0},
      {"nome": "BUFALA COTTO BRACE", "ingredienti": "pomodoro, mozzarella, mozzarella di bufala, prosciutto cotto alla brace", "normale": 10.0, "familiare": 20.0},
      {"nome": "CASERECCIA", "ingredienti": "pomodoro, mozzarella, salsiccia, funghi, taleggio", "normale": 9.5, "familiare": 19.0},
      {"nome": "CALABRESE", "ingredienti": "pomodoro, mozzarella, pomodori secchi, olive, salamino piccante", "normale": 9.0, "familiare": 18.0},
      {"nome": "CAPRICCIOSA", "ingredienti": "pomodoro, mozzarella, prosciutto cotto, funghi, carciofi", "normale": 8.5, "familiare": 17.0},
      {"nome": "CARBONARA", "ingredienti": "pomodoro, mozzarella, pancetta, uovo, grana", "normale": 9.0, "familiare": 18.0},
      {"nome": "CAVALIERE", "ingredienti": "pomodoro, mozzarella, sfilacci di cavallo, rucola, grana", "normale": 9.5, "familiare": 19.0},
      {"nome": "DIAVOLA", "ingredienti": "pomodoro, mozzarella, salamino piccante", "normale": 7.0, "familiare": 14.0},
      {"nome": "FRESCA", "ingredienti": "pomodoro, mozzarella, rucola, pomodorini ciliegini, feta greca", "normale": 9.0, "familiare": 18.0},
      {"nome": "INVERNO", "ingredienti": "pomodoro, mozzarella, salsiccia, salamino piccante, peperoni, cipolla", "normale": 9.5, "familiare": 19.0},
      {"nome": "MC DONALD", "ingredienti": "pomodoro, mozzarella, patatine fritte, wurstel", "normale": 8.5, "familiare": 17.0},
      {"nome": "ORTOLANA AI FERRI", "ingredienti": "pomodoro, mozzarella, zucchine, melanzane, peperoni", "normale": 8.5, "familiare": 17.0},
      {"nome": "PARMIGIANA", "ingredienti": "pomodoro, mozzarella, melanzane, grana", "normale": 8.5, "familiare": 17.0},
      {"nome": "PATATOSA", "ingredienti": "pomodoro, mozzarella, patatine fritte", "normale": 7.5, "familiare": 15.0},
      {"nome": "PORCHETTINA", "ingredienti": "pomodoro, mozzarella, peperoni, brie, porchetta", "normale": 9.0, "familiare": 18.0},
      {"nome": "PROSCIUTTO", "ingredienti": "pomodoro, mozzarella, prosciutto cotto", "normale": 7.0, "familiare": 14.0},
      {"nome": "PROSCIUTTO E FUNGHI", "ingredienti": "pomodoro, mozzarella, prosciutto cotto, funghi", "normale": 8.0, "familiare": 16.0},
      {"nome": "ROMANA", "ingredienti": "pomodoro, mozzarella, acciughe, origano", "normale": 8.0, "familiare": 16.0},
      {"nome": "CRUDO", "ingredienti": "pomodoro, mozzarella, prosciutto crudo di Parma 24 mesi", "normale": 8.0, "familiare": 16.0},
      {"nome": "SALSICCIA E PATATE AL FORNO", "ingredienti": "pomodoro, mozzarella, salsiccia, patate al forno", "normale": 9.0, "familiare": 18.0},
      {"nome": "SICILIANA", "ingredienti": "pomodoro, mozzarella, acciughe, olive, capperi, salamino piccante", "normale": 9.0, "familiare": 18.0},
      {"nome": "TONNO E CIPOLLA", "ingredienti": "pomodoro, mozzarella, tonno, cipolla di Tropea", "normale": 8.0, "familiare": 16.0},
      {"nome": "TREVIGIANA", "ingredienti": "pomodoro, mozzarella, radicchio, pancetta, grana", "normale": 9.5, "familiare": 19.0},
      {"nome": "VENEZIANA", "ingredienti": "pomodoro, mozzarella, salsiccia, cipolla, funghi", "normale": 9.0, "familiare": 18.0},
      {"nome": "VESUVIO", "ingredienti": "pomodoro, mozzarella, salsiccia, peperoni, gorgonzola", "normale": 9.0, "familiare": 18.0},
      {"nome": "VIENNESE", "ingredienti": "pomodoro, mozzarella, wurstel", "normale": 7.0, "familiare": 14.0}
    ],
    "pizze_speciali": [
      {"nome": "La Reale", "ingredienti": "pomodoro, mozzarella di bufala, basilico, grana", "normale": 9.0, "familiare": 18.0},
      {"nome": "ALTO ADIGE", "ingredienti": "pomodoro, mozzarella, funghi chiodini, provola, speck", "normale": 9.5, "familiare": 19.0},
      {"nome": "AFFUMICATA", "ingredienti": "pomodoro, mozzarella, asparagi, provola, prosciutto cotto alla brace", "normale": 9.5, "familiare": 19.0},
      {"nome": "ASPARAGOSA", "ingredienti": "pomodoro, mozzarella, asparagi, brie, speck", "normale": 9.5, "familiare": 19.0},
      {"nome": "BOMBERO", "ingredienti": "pomodoro, mozzarella, funghi porcini, gorgonzola, prosciutto cotto alla brace", "normale": 10.0, "familiare": 20.0},
      {"nome": "CAMPAGNOLA", "ingredienti": "pomodoro, mozzarella, provola, pancetta, peperoni", "normale": 9.0, "familiare": 18.0},
      {"nome": "CAPITANO", "ingredienti": "pomodoro, mozzarella, tonno, pomodorini ciliegini, burrata", "normale": 10.0, "familiare": 20.0},
      {"nome": "CIMA", "ingredienti": "pomodoro, mozzarella, friarielli, acciughe, burrata", "normale": 10.5, "familiare": 21.0},
      {"nome": "CONTADINA", "ingredienti": "pomodoro, mozzarella, radicchio, brie, sopressa veneta", "normale": 9.0, "familiare": 18.0},
      {"nome": "DELICATA", "ingredienti": "pomodoro, mozzarella, prosciutto cotto, zucchine", "normale": 8.0, "familiare": 16.0},
      {"nome": "DIVINA", "ingredienti": "pomodoro, mozzarella, zucchine, stracchino, prosciutto cotto alla brace", "normale": 9.5, "familiare": 19.0},
      {"nome": "FRIARIELLA", "ingredienti": "pomodoro, mozzarella, friarielli, gorgonzola, guanciale", "normale": 9.5, "familiare": 19.0},
      {"nome": "FRUTTI DI MARE", "ingredienti": "pomodoro, mozzarella, frutti di mare", "normale": 9.0, "familiare": 18.0},
      {"nome": "GENEROSA", "ingredienti": "pomodoro, mozzarella, funghi porcini, peperoni, prosciutto crudo di Parma 24 mesi", "normale": 10.5, "familiare": 21.0},
      {"nome": "GERMOGLIO", "ingredienti": "pomodoro, mozzarella, prosciutto crudo di Parma 24 mesi, burrata, basilico", "normale": 10.0, "familiare": 20.0},
      {"nome": "GRECA", "ingredienti": "pomodoro, mozzarella, olive, cipolla, feta greca", "normale": 9.0, "familiare": 18.0},
      {"nome": "GUSTOSA", "ingredienti": "pomodoro, mozzarella, radicchio, provola, speck", "normale": 9.5, "familiare": 19.0},
      {"nome": "LAGO DI MARTE", "ingredienti": "pomodoro, mozzarella, funghi porcini, salsiccia, grana", "normale": 9.0, "familiare": 18.0},
      {"nome": "LEGGERA", "ingredienti": "pomodoro, mozzarella, radicchio, salamino piccante, cipolla", "normale": 9.5, "familiare": 19.0},
      {"nome": "PIZZA KEBAB", "ingredienti": "pomodoro, mozzarella, carne di kebab", "normale": 9.0, "familiare": 18.0},
      {"nome": "RADIOSA", "ingredienti": "pomodoro, mozzarella, radicchio, gorgonzola, salsiccia", "normale": 9.5, "familiare": 19.0},
      {"nome": "RONCADE", "ingredienti": "pomodoro, mozzarella, radicchio, taleggio, guanciale", "normale": 9.5, "familiare": 19.0},
      {"nome": "SALVATORE", "ingredienti": "pomodoro, mozzarella, mozzarella di bufala, pomodorini ciliegini, prosciutto crudo 24 mesi, rucola", "normale": 10.5, "familiare": 21.0},
      {"nome": "SAPORITA", "ingredienti": "pomodoro, mozzarella, cipolla, gorgonzola, guanciale", "normale": 9.5, "familiare": 19.0},
      {"nome": "SOLE", "ingredienti": "pomodoro, mozzarella, asparagi, uovo, grana", "normale": 8.5, "familiare": 17.0},
      {"nome": "STRACCHINELLA", "ingredienti": "pomodoro, mozzarella, tonno, zucchine, stracchino, aglio", "normale": 10.0, "familiare": 20.0},
      {"nome": "SUMMER", "ingredienti": "pomodoro, mozzarella, acciughe, pomodorini ciliegini, burrata, origano", "normale": 11.0, "familiare": 22.0},
      {"nome": "TALEGGIO", "ingredienti": "pomodoro, mozzarella, melanzane, salamino piccante, taleggio", "normale": 9.5, "familiare": 19.0},
      {"nome": "TIROLESE", "ingredienti": "pomodoro, mozzarella, gorgonzola, speck, noci", "normale": 9.5, "familiare": 19.0},
      {"nome": "VALDOSTANA", "ingredienti": "pomodoro, mozzarella, funghi chiodini, brie, porchetta", "normale": 9.5, "familiare": 19.0},
      {"nome": "VIVACE", "ingredienti": "pomodoro, mozzarella, salamino piccante, peperoni, patate al forno", "normale": 9.5, "familiare": 19.0},
      {"nome": "ZINGARA", "ingredienti": "pomodoro, mozzarella, salamino piccante, olive, funghi, peperoni, cipolla", "normale": 9.5, "familiare": 19.0}
    ],
    "pizze_con_crema": [
      {"nome": "AUTUNNO", "ingredienti": "mozzarella, crema di zucca, funghi chiodini, speck", "normale": 10.5, "familiare": 21.0},
      {"nome": "BACON", "ingredienti": "mozzarella, crema di carciofi, pancetta, grana", "normale": 9.0, "familiare": 18.0},
      {"nome": "CARCIO SPECK", "ingredienti": "mozzarella, crema di carciofi, provola, speck", "normale": 9.5, "familiare": 19.0},
      {"nome": "CINQUE TERRE", "ingredienti": "mozzarella, pesto genovese, acciughe, mozzarella di bufala, pomodorini ciliegini", "normale": 11.0, "familiare": 21.0},
      {"nome": "DAMA", "ingredienti": "mozzarella, crema di carciofi, funghi porcini, prosciutto cotto alla brace", "normale": 10.5, "familiare": 21.0},
      {"nome": "MANTOVANA", "ingredienti": "mozzarella, crema di zucca, salsiccia, funghi", "normale": 10.0, "familiare": 20.0},
      {"nome": "OTTOBRE", "ingredienti": "mozzarella, crema di zucca, salamino piccante, radicchio", "normale": 10.5, "familiare": 21.0},
      {"nome": "PESTOSA", "ingredienti": "pomodoro, mozzarella, pesto genovese, tonno, olive, pomodorini ciliegini", "normale": 9.5, "familiare": 19.0},
      {"nome": "PESTONNO", "ingredienti": "mozzarella, pesto genovese, tonno, pomodorini ciliegini in cottura, aglio", "normale": 9.5, "familiare": 19.0}
    ],
    "pizze_bianche": [
      {"nome": "AROMATICA", "ingredienti": "mozzarella, provola, patate al forno, porchetta", "normale": 10.5, "familiare": 21.0},
      {"nome": "BELLA NAPOLI", "ingredienti": "mozzarella, salsiccia, friarielli", "normale": 9.0, "familiare": 18.0},
      {"nome": "BELLA VISTA", "ingredienti": "mozzarella, zucchine, gamberetti", "normale": 9.0, "familiare": 18.0},
      {"nome": "CAPRESE", "ingredienti": "mozzarella. Fine cottura: mozzarella di bufala, pomodorini ciliegini, basilico, origano", "normale": 9.0, "familiare": 18.0},
      {"nome": "DELIZIA", "ingredienti": "mozzarella, carciofi, prosciutto cotto alla brace, burrata", "normale": 11.5, "familiare": 23.0},
      {"nome": "PESCATORE", "ingredienti": "mozzarella, tonno, gamberetti, pomodorini ciliegini, origano", "normale": 9.5, "familiare": 19.0},
      {"nome": "SPECIALE", "ingredienti": "mozzarella, tonno, patate al forno. Fine cottura: provola, pomodorini ciliegini, basilico, origano", "normale": 10.5, "familiare": 21.0},
      {"nome": "VENETA", "ingredienti": "mozzarella, provola, radicchio, sopressa veneta", "normale": 9.5, "familiare": 19.0}
    ],
    "calzoni": [
      {"nome": "CALZONE CLASSICO", "ingredienti": "mozzarella, prosciutto cotto, funghi", "normale": 8.0},
      {"nome": "CALZONE AI FORMAGGI", "ingredienti": "mozzarella, formaggi misti", "normale": 8.5},
      {"nome": "CALZONE VEGETARIANO", "ingredienti": "mozzarella, zucchine, melanzane, peperoni", "normale": 8.5}
    ],
    "pizze_al_metro": {
      "mezzo_metro": {"margherita": 17.0, "farcita": 26.0},
      "un_metro": {"margherita": 34.0, "farcita": 48.0}
    },
    "extra": {
      "aggiunte": "da +1.00€ a +3.50€",
      "impasti": {"integrale": "+2.00€", "baby": "-0.50€"}
    }
  }
}`;


function menu() {
    const dati = JSON.parse(json);
    let containerTradizionali = document.getElementById("tradizionali");
    let containerSpeciali = document.getElementById("speciali");
    let containerCrema = document.getElementById("crema");
    let containerBianche = document.getElementById("bianche");
    let containerCalzoni = document.getElementById("calzoni");
    let containerAlMetro = document.getElementById("alMetro");
    let containerExtra = document.getElementById("extra");

    containerTradizionali.innerHTML = `<h3>Pizze Tradizionali</h3>`;
    containerSpeciali.innerHTML = `<h3>Pizze Speciali</h3>`;
    containerCrema.innerHTML = `<h3>Pizze con Crema</h3>`;
    containerBianche.innerHTML = `<h3>Pizze Bianche</h3>`;
    containerCalzoni.innerHTML = `<h3>Calzoni</h3>`;
    containerAlMetro.innerHTML = `<h3>Pizze Al Metro</h3>`;
    containerExtra.innerHTML = `<h3>Le aggiunte in più su ogni pizza avranno un prezzo supplementare</h3>`;

    dati.menu.pizze_classiche.forEach(classica => {
        containerTradizionali.innerHTML += `
            <p>
            <span><strong> ${classica.nome}</strong>: ${classica.ingredienti} </span>
            <span class="prezzi">
            <span class="normale">${classica.normale.toFixed(2)}</span>
            <span class="familiare">${classica.familiare.toFixed(2)}</span> €
            </span>
            </p>
        `;
    });

    dati.menu.pizze_speciali.forEach(speciali => {
        containerSpeciali.innerHTML += `
            <p>
            <span><strong> ${speciali.nome}</strong>: ${speciali.ingredienti}</span>
            <span class="prezzi">
            <span class="normale">${speciali.normale.toFixed(2)}</span>
            <span class="familiare">${speciali.familiare.toFixed(2)}</span> €
            </span>
            </p>
        `;
    });

    dati.menu.pizze_con_crema.forEach(crema => {
        containerCrema.innerHTML += `
            <p>
            <span><strong> ${crema.nome}</strong>: ${crema.ingredienti} </span>
            <span class="prezzi">
            <span class="normale">${crema.normale.toFixed(2)}</span>
            <span class="familiare">${crema.familiare.toFixed(2)}</span> €
            </span>

            </p>
        `;
    });

    dati.menu.pizze_bianche.forEach(bianche => {
        containerBianche.innerHTML += `
            <p>
            <span><strong> ${bianche.nome}</strong>: ${bianche.ingredienti} </span>
            <span class="prezzi">
            <span class="normale">${bianche.normale.toFixed(2)}</span>
            <span class="familiare">${bianche.familiare.toFixed(2)}</span> €
            </span>

            </p>
        `;
    });

    dati.menu.calzoni.forEach(calzoni => {
        containerCalzoni.innerHTML += `
            <p>
            <span><strong> ${calzoni.nome}</strong>: ${calzoni.ingredienti}</span>
            <span class="prezzi">
            <span class="normale">${calzoni.normale.toFixed(2)}</span>€
            </span>

            </p>
        `;
    });

    const metro = dati.menu.pizze_al_metro;
    containerAlMetro.innerHTML += `
        <div>
            <strong>MEZZO METRO</strong>: 
            <p>
            Margherita: pomodoro, mozzarella ${metro.mezzo_metro.margherita.toFixed(2)}€ <br>
            Farcita: pomodoro, mozzarella ${metro.mezzo_metro.farcita.toFixed(2)}€ (massimo 2 gusti)
        </div>
        <div>
        <strong>UN METRO</strong>:
            <p>
            Margherita: pomodoro, mozzarella ${metro.un_metro.margherita.toFixed(2)}€ <br>
            Farcita: pomodoro, mozzarella ${metro.un_metro.farcita.toFixed(2)}€ (massimo 4 gusti)
            </p>
        </div>
    `;

    const extra = dati.menu.extra;

    containerExtra.innerHTML += `
        <p>
            <strong>Aggiunte</strong>: ${extra.aggiunte} <br>
            <strong>Impasti</strong>: Integrale (${extra.impasti.integrale}), Baby (${extra.impasti.baby})
        </p>
    `;

}

window.onload = menu;