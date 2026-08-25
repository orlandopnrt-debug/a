class Termometro {
  constructor(celsius) {
    this.celsius = celsius;
  }
  Kelvin() {
    let kelvin = this.celsius + 273.15;
    console.log(kelvin);
  }
  paraFahrenheit() {
    let Fahrenheit = (this.celsius * 9) / 5 + 32;
    console.log(Fahrenheit);
  }
}
const t1 = new Termometro(25);
t1.Kelvin();
t1.paraFahrenheit();
