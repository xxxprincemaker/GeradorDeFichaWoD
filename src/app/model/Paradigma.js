export class Paradigma {
  constructor(arquetipo) {
    this.arquetipo = arquetipo;
    let crencaRandom = undefined;
    let praticaRandom = undefined;
    let instrumentoRandom = undefined;
    this.getParadigmaRandomly();
  }

  //Create a method that returns randomly a crenca, a pratica and an instrumento with parameters
  getParadigmaRandomly() {
    let crenca = this.getCrencas();
    let pratica = this.getPraticas();
    let instrumentos = this.getInstrumentoss();

    this.crencaRandom = crenca[Math.floor(Math.random() * crenca.length)];
    this.praticaRandom = [];
    let praticasRestantes = []
    for (let i = 0; i < 3; i++){
        let k = Math.floor(Math.random() * pratica.length);
        if(this.praticaRandom.includes(pratica[k])){

            praticasRestantes = pratica.filter(item => !this.praticaRandom.includes(item));

            k = Math.floor(Math.random() * praticasRestantes.length);

            this.praticaRandom.push(praticasRestantes[k]);
          } else this.praticaRandom.push(pratica[k])
    }
    this.instrumentoRandom = [];

    let elementosRestantes = [];
    for (let i = 0; i < 7; i++){
      let k = Math.floor(Math.random() * instrumentos.length);
      if(this.instrumentoRandom.includes(instrumentos[k])){

        elementosRestantes = instrumentos.filter(item => !this.instrumentoRandom.includes(item));

        k = Math.floor(Math.random() * elementosRestantes.length);

        this.instrumentoRandom.push(elementosRestantes[k]);
      } else this.instrumentoRandom.push(instrumentos[k])
    }
    return {
      crenca: this.crencaRandom,
      pratica: this.praticaRandom,
      instrumento: this.instrumentoRandom,
    };
  }

  getCrencas() {
    const crencaHermeticas = [
      "A Mechanistic Cosmos",
      "Bring Back the Golden Age!",
      "We are all Gods in Desguise",
      "Turning Keys to Reality",
      "Ancient Wisdom is the Key",
      "Transcend your Limits"
    ];

    switch (this.arquetipo) {
      case "Hermetico":
        return crencaHermeticas;
    }
  }

  getPraticas() {
    const praticasHermeticas = [
      "Alchemy",
      "Chaos Magick",
      "High Ritual Magick",
      "Dominion",
      "Elementalism",
      "God-Bonding"
    ];

    switch (this.arquetipo) {
      case "Hermetico":
        return praticasHermeticas;
    }
  }

  getInstrumentoss() {
    const instrumentosHermeticos = [
      "Language",
      "Weapons",
      "Wands and Staves",
      "True Names",
      "Thought Forms",
      "Prayers and Invocations",
      "Meditation",
      "Energy",
      "Eye Contact",
      "Ordeals and exertions",
      "Numbers and numerology",
      "Symbols",
      "Circles and Designs",
      "Celestial Alignments",
      "Brews and Concotions",
    ];

    switch (this.arquetipo) {
      case "Hermetico":
        return instrumentosHermeticos;
    }

    return instrumentos;
  }

  getParadigma() {
    return (
      `Crenca: ${this.crencaRandom}` +
      `\nPratica: ${this.praticaRandom}` +
      `\nInstrumento: ${this.instrumentoRandom}`
    );
  }
}
