const introducciones = [
    {
      texto: "La princesa y el unicornio en un mágico bosque.",
      clase: "celeste",
    },
    {
      texto: "La princesa y el príncipe en una cabaña en el bosque.",
      clase: "celeste",
    },
    {
      texto: "Un leñador en el arroyo en el medio del bosque.",
      clase: "celeste",
    },
  ];

  const nudos = [
    {
      texto: "Se encuentran con una manzana envenenada.",
      clase: "amarillo",
    },
    { texto: "Aparece una bruja malvada.", clase: "amarillo" },
    { texto: "El Rey está enojado y los confronta.", clase: "amarillo" },
  ];

  const desenlaces = [
    { texto: "Logran encontrar la cura.", clase: "rosado" },
    {
      texto: "Encuentran una flor encantada a las orillas del arroyo.",
      clase: "rosado",
    },
    {
      texto: "Preparan una poción mágica que soluciona todo.",
      clase: "rosado",
    },
  ];

  function generarIntroduccion() {
    const intro =
      introducciones[Math.floor(Math.random() * introducciones.length)];
    const introduccionDiv = document.getElementById("introduccion");
    introduccionDiv.textContent = intro.texto;
  }

  function generarNudo() {
    const nudo = nudos[Math.floor(Math.random() * nudos.length)];
    const nudoDiv = document.getElementById("nudo");
    nudoDiv.textContent = nudo.texto;
  }

  function generarDesenlace() {
    const desenlace =
      desenlaces[Math.floor(Math.random() * desenlaces.length)];
    const desenlaceDiv = document.getElementById("desenlace");
    desenlaceDiv.textContent = desenlace.texto;
  }

  function unirHistoria() {
    const introduccion =
      document.getElementById("introduccion").textContent;
    const nudo = document.getElementById("nudo").textContent;
    const desenlace = document.getElementById("desenlace").textContent;

    const historiaDiv = document.getElementById("historia");
    historiaDiv.innerHTML = `
            <div class="section celeste">${introduccion}</div>
            <div class="section amarillo">${nudo}</div>
            <div class="section rosado">${desenlace}</div>
        `;
  }