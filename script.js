// script.js
// Jednoduchý skript pro generování náhodných krátkých věštby.

// Pole s minimálně 15 tajemnými, krátkými věštbami
const fortunes = [
  "Hvězdy šeptají: brzy přijde nečekané světlo.",
  "Poslouchej staré stíny — vedou k novému prahu.",
  "Malý krok dnes, velká změna zítra.",
  "Klidná voda ukrývá tichou odpověď.",
  "Následuj niterní zvuk, ne ten nejhlasitější.",
  "Tvé trpělivé srdce zná cestu domů.",
  "Květina rozkvete pod měsícovým tajemstvím.",
  "Ztratíš něco malého, nalezneš něco cennějšího.",
  "Stín se rozplyne, až jsi připraven vidět světlo.",
  "Osud píše lehce — poskládej čáry pečlivě.",
  "Něco starého se promění v nové dveře.",
  "Tvoje intuice právě teď šeptá 'ano'.",
  "Ticho mezi slov vypráví pravdu.",
  "S podivuhodnou laskavostí se otevřou dveře.",
  "List padající v chladu přinese teplé slovo.",
  "Když přestanete hledat, naleznete to, co hledáte.",
  "Noc má plán, kterému den rozumět nebude.",
  "Malá jiskra změní směr povětrnosti." 
];

// Najít prvky v DOMu
const btn = document.getElementById('fortuneBtn');
const out = document.getElementById('fortune');

// Funkce vybere náhodnou věštbu z pole
function randomFortune(){
  const i = Math.floor(Math.random() * fortunes.length);
  return fortunes[i];
}

// Po kliknutí vyber náhodnou věštbu a zobraz ji s jemnou animací
btn.addEventListener('click', () => {
  const text = randomFortune();
  out.textContent = text;
  out.classList.remove('visible');
  // Krátké zpoždění, aby přehrání animace fungovalo opakovaně
  void out.offsetWidth;
  out.classList.add('visible');
});

// Přístupnost: umožnit spuštění tlačítkem Enter/Space při fokusovaném tlačítku
btn.addEventListener('keyup', (e) => {
  if(e.key === 'Enter' || e.key === ' '){
    btn.click();
  }
});
