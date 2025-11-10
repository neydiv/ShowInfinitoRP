// Archivo oficial de puntos — EDITABLE POR EL STAFF
// Todo lo que modifiques aquí se reflejará en la web pública automáticamente.

let DATA = {
  "meta": {
    "server": "ShowInfinito",
    "season": "Guerra de Bandas #1",
    "weeks": 3
  },

  /* -------------------------------------------------------------
    BANDAS PARTICIPANTES
  ------------------------------------------------------------- */
  "bands": [
  { "id": "b1", "name": "Los Exiliados", "color": "#9b59b6", "logo": "img/morado.png" },
  { "id": "b2", "name": "La Secta 66", "color": "#000000ff", "logo": "img/negro.png" },
  { "id": "b3", "name": "The Grinchs", "color": "#008523", "logo": "img/verde.png" },
  { "id": "b4", "name": "Los Malditos del Sur Chico", "color": "#f1c40f", "logo": "img/amarillo.png" },
  { "id": "b5", "name": "Al Qaeda", "color": "#ffffffff", "logo": "img/blanco.png" },
  { "id": "b6", "name": "La Gran Sangre", "color": "#992d22", "logo": "img/rojo.png" },
  { "id": "b7", "name": "Los Injerto", "color": "#0019ff", "logo": "img/azul.png" }
],



  /* -------------------------------------------------------------
    EVENTOS SEMANALES (2 por semana)
   * Edita los puntos de cada banda manualmente
  ------------------------------------------------------------- */
  "events": [

    // 🟣 APERTURA
    {
      "id": "w0e1",
      "week": 0,
      "title": "Gala de Sangre",
      "date": "2025-11-07",
      "results": [
        { "bandId": "b1", "position": 1, "points": 0 },
        { "bandId": "b2", "position": 2, "points": 120 },
        { "bandId": "b3", "position": 3, "points": 0 },
        { "bandId": "b4", "position": 4, "points": 0 },
        { "bandId": "b5", "position": 5, "points": 240 },
        { "bandId": "b6", "position": 6, "points": 180 },
        { "bandId": "b7", "position": 7, "points": 0 }
      ]
    },

    // 🔴 SEMANA 1
    {
      "id": "w1e1",
      "week": 1,
      "title": "Cargamento Letal",
      "date": "2025-11-10",
      "results": [
        { "bandId": "b1", "position": 1, "points": 0 },
        { "bandId": "b2", "position": 2, "points": 0 },
        { "bandId": "b3", "position": 3, "points": 0 },
        { "bandId": "b4", "position": 4, "points": 0 },
        { "bandId": "b5", "position": 5, "points": 0 },
        { "bandId": "b6", "position": 6, "points": 0 },
        { "bandId": "b7", "position": 7, "points": 0 }
      ]
    },
    {
      "id": "w1e2",
      "week": 1,
      "title": "Interceptar el Convoy",
      "date": "2025-11-12",
      "results": [
        { "bandId": "b1", "position": 1, "points": 0 },
        { "bandId": "b2", "position": 2, "points": 0 },
        { "bandId": "b3", "position": 3, "points": 0 },
        { "bandId": "b4", "position": 4, "points": 0 },
        { "bandId": "b5", "position": 5, "points": 0 },
        { "bandId": "b6", "position": 6, "points": 0 },
        { "bandId": "b7", "position": 7, "points": 0 }
      ]
    },

    // 🟢 SEMANA 2
    {
      "id": "w2e1",
      "week": 2,
      "title": "Dominio de Pollos",
      "date": "2025-11-17",
      "results": [
        { "bandId": "b1", "position": 1, "points": 0 },
        { "bandId": "b2", "position": 2, "points": 0 },
        { "bandId": "b3", "position": 3, "points": 0 },
        { "bandId": "b4", "position": 4, "points": 0 },
        { "bandId": "b5", "position": 5, "points": 0 },
        { "bandId": "b6", "position": 6, "points": 0 },
        { "bandId": "b7", "position": 7, "points": 0 }
      ]
    },
    {
      "id": "w2e2",
      "week": 2,
      "title": "Evento 2",
      "date": "2025-11-19",
      "results": [
        { "bandId": "b1", "position": 1, "points": 0 },
        { "bandId": "b2", "position": 2, "points": 0 },
        { "bandId": "b3", "position": 3, "points": 0 },
        { "bandId": "b4", "position": 4, "points": 0 },
        { "bandId": "b5", "position": 5, "points": 0 },
        { "bandId": "b6", "position": 6, "points": 0 },
        { "bandId": "b7", "position": 7, "points": 0 }
      ]
    },

    // 🔵 SEMANA 3
    {
      "id": "w3e1",
      "week": 3,
      "title": "Evento 1",
      "date": "2025-11-24",
      "results": [
        { "bandId": "b1", "position": 1, "points": 0 },
        { "bandId": "b2", "position": 2, "points": 0 },
        { "bandId": "b3", "position": 3, "points": 0 },
        { "bandId": "b4", "position": 4, "points": 0 },
        { "bandId": "b5", "position": 5, "points": 0 },
        { "bandId": "b6", "position": 6, "points": 0 },
        { "bandId": "b7", "position": 7, "points": 0 }
      ]
    },
    {
      "id": "w3e2",
      "week": 3,
      "title": "Evento 2",
      "date": "2025-11-26",
      "results": [
        { "bandId": "b1", "position": 1, "points": 0 },
        { "bandId": "b2", "position": 2, "points": 0 },
        { "bandId": "b3", "position": 3, "points": 0 },
        { "bandId": "b4", "position": 4, "points": 0 },
        { "bandId": "b5", "position": 5, "points": 0 },
        { "bandId": "b6", "position": 6, "points": 0 },
        { "bandId": "b7", "position": 7, "points": 0 }
      ]
    }
  ],

  /* -------------------------------------------------------------
    ACTIVIDADES DIARIAS
   * (Banco Central, Joyería, Ammu-Nation, Tienda)
   * Suma directa de puntos por banda
  ------------------------------------------------------------- */
  "activities": [
    // 🏦 Banco Central
    { "bandId": "b1", "name": "Banco Central", "points": 0 },
    { "bandId": "b2", "name": "Banco Central", "points": 0 },
    { "bandId": "b3", "name": "Banco Central", "points": 0},
    { "bandId": "b4", "name": "Banco Central", "points": 0 },
    { "bandId": "b5", "name": "Banco Central", "points": 0 },
    { "bandId": "b6", "name": "Banco Central", "points": 0 },
    { "bandId": "b7", "name": "Banco Central", "points": 0 },

    // 💎 Joyería
    { "bandId": "b1", "name": "Joyería", "points": 0 },
    { "bandId": "b2", "name": "Joyería", "points": 0 },
    { "bandId": "b3", "name": "Joyería", "points": 0 },
    { "bandId": "b4", "name": "Joyería", "points": 0 },
    { "bandId": "b5", "name": "Joyería", "points": 0 },
    { "bandId": "b6", "name": "Joyería", "points": 0 },
    { "bandId": "b7", "name": "Joyería", "points": 0 },

    // 🔫 Ammu-Nation
    { "bandId": "b1", "name": "Ammu-Nation", "points": 0 },
    { "bandId": "b2", "name": "Ammu-Nation", "points": 0 },
    { "bandId": "b3", "name": "Ammu-Nation", "points": 0 },
    { "bandId": "b4", "name": "Ammu-Nation", "points": 0 },
    { "bandId": "b5", "name": "Ammu-Nation", "points": 0 },
    { "bandId": "b6", "name": "Ammu-Nation", "points": 0 },
    { "bandId": "b7", "name": "Ammu-Nation", "points": 0 },

    // 🏪 Tienda
    { "bandId": "b1", "name": "Tienda", "points": 0 },
    { "bandId": "b2", "name": "Tienda", "points": 0 },
    { "bandId": "b3", "name": "Tienda", "points": 0 },
    { "bandId": "b4", "name": "Tienda", "points": 0 },
    { "bandId": "b5", "name": "Tienda", "points": 0 },
    { "bandId": "b6", "name": "Tienda", "points": 0 },
    { "bandId": "b7", "name": "Tienda", "points": 0 }
  ]
};
