/*
 * Клас: Musician
 * Статичні поля:
 * ------------------------
 * | Поле   |  Значення   |
 * |--------|-------------|
 * | count  |  0          |
 *
 * Властивості:
 * --------------------------------------
 * | Властивість  |  Тип                |
 * |--------------|---------------------|
 * | #name        |  String             |
 * | #instrument  |  String             |
 *
 * Гетери:
 * ---------------------
 * | Гетер    |  Повертає |
 * |----------|-----------|
 * | name     |  string   |
 * | instrument | string  |
 *
 * Методи:
 * --------------------------
 * | Метод   |  Дія         |
 * |---------|--------------|
 * | play()  | Виводить рядок в консоль |
 */

class Musician {
  static count = 0; // статичне поле count, початкове значення 0

  #name; // приватне поле name
  #instrument; // приватне поле instrument

  constructor(name, instrument) {
    this.#name = name; // присвоєння значення name до приватного поля #name
    this.#instrument = instrument; // присвоєння значення instrument до приватного поля #instrument
    Musician.count++; // збільшення значення статичного поля count на 1
  }

  get name() {
    return this.#name; // гетер для приватного поля #name
  }

  get instrument() {
    return this.#instrument; // гетер для приватного поля #instrument
  }

  set name(newName) {
    this.#name = newName; // сетер для приватного поля #name
  }

  set instrument(newInstrument) {
    this.#instrument = newInstrument; // сетер для приватного поля #instrument
  }

  play() {
    console.log(`${this.#name} грає на ${this.#instrument}`); // метод, що виводить рядок в консоль
  }
}


/*
 * Клас: Guitarist
 * Наслідується від: Musician
 *
 * Властивості:
 * ---------------------------------
 * | Властивість |  Тип           |
 * |-------------|----------------|
 * | #name       |  String        |
 * | #instrument |  String        |
 * | #band       |  String        |
 *
 * Гетери:
 * ---------------------
 * | Гетер  |  Повертає  |
 * |--------|------------|
 * | name   |  string    |
 * | band   |  string    |
 *
 * Сетери:
 * ---------------------
 * | Сетер  |  Очікує   |
 * |--------|-----------|
 * | name   |  string   |
 * | band   |  string   |
 *
 * Методи:
 * --------------------------
 * | Метод     |  Дія       |
 * |-----------|------------|
 * | play()    | Виводить рядок в консоль |
 * | joinBand()| Змінює значення #band |
 */

class Guitarist extends Musician {
  #band; // приватне поле #band

  constructor(name, instrument, band) {
    super(name, instrument); // виклик конструктора батьківського класу з двома параметрами
    this.#band = band; // присвоєння значення band приватному полю #band
  }

  // гетер для приватного поля #band
  get band() {
    return this.#band;
  }

  // сетер для приватного поля #band
  set band(band) {
    this.#band = band;
  }

  // метод joinBand, що змінює значення #band
  joinBand(band) {
    this.#band = band;
  }

  // перевизначений метод play()
  play() {
    console.log(`${super.name} грає на ${super.instrument} в групі ${this.#band}`);
  }
}

/*
 * Клас: Bassist
 * Наслідується від: Musician
 *
 * Властивості:
 * ---------------------------------
 * | Властивість |  Тип           |
 * |-------------|----------------|
 * | #name       |  String        |
 * | #instrument |  String        |
 * | #band       |  String        |
 *
 * Гетери:
 * ---------------------
 * | Гетер  |  Повертає  |
 * |--------|------------|
 * | name   |  string    |
 * | band   |  string    |
 *
 * Сетери:
 * ---------------------
 * | Сетер  |  Очікує   |
 * |--------|-----------|
 * | name   |  string   |
 * | band   |  string   |
 *
 * Методи:
 * --------------------------
 * | Метод     |  Дія       |
 * |-----------|------------|
 * | play()    | Виводить рядок в консоль |
 * | joinBand()| Змінює значення #band |
 */

class Bassist extends Musician {
  #band; // приватне поле #band

  constructor(name, instrument, band) {
    super(name, instrument); // виклик конструктора батьківського класу з двома параметрами
    this.#band = band; // присвоєння значення band приватному полю #band
  }

  // гетер для приватного поля #band
  get band() {
    return this.#band;
  }

  // сетер для приватного поля #band
  set band(newBand) {
    this.#band = newBand;
  }

  // метод joinBand, що змінює значення #band
  joinBand(band) {
    this.#band = band;
  }

  // перевизначений метод play()
  play() {
    console.log(`${super.name} грає на ${super.instrument} в групі ${this.#band}`);
  }
}

Object.defineProperty(Musician.prototype, 'band', {
  set: function(newBand) {
    this._band = newBand;
  },
});

// Тут ми використовуємо Object.defineProperty(), щоб додати сетер band до класу Musician після його створення.
// Перший аргумент - це об'єкт, до якого ми хочемо додати властивість. У цьому випадку це Musician.prototype,
// тому що ми хочемо додати сетер до всіх екземплярів класу Musician.
// Другий аргумент - це ім'я властивості, яку ми хочемо додати. У цьому випадку це 'band'.
// Третій аргумент - це об'єкт, який описує властивість. У цьому випадку ми хочемо додати сетер,
// тому ми вказуємо функцію, яка буде викликатися при спробі встановити властивість 'band'.  this.#band = newBand

/*
 * Клас: Band
 * ---------------------------
 * | Властивість |  Тип       |
 * |-------------|------------|
 * | name        |  string    |
 * | members     |  array     |
 */

class Band {
  #name; // приватне поле #name
  #members; // приватне поле #members

  constructor(name, members = []) {
    this.#name = name;
    this.#members = members;
  }

  // гетер для приватного поля #name
  get name() {
    return this.#name;
  }

  // гетер для приватного поля #members
  get members() {
    return this.#members;
  }

  // сетер для приватного поля #name
  set name(newName) {
    this.#name = newName;
  }

  // метод addMember, що додає нового учасника до гурту
  addMember(newMember) {
    if (newMember instanceof Musician) {
      this.#members.push(newMember);
    } else {
      console.log('Новий учасник повинен бути екземпляром класу Musician.');
    }
  }

  // метод playMusic, що викликає метод play() для кожного учасника гурту
  playMusic() {
    this.#members.forEach((member) => {
      member.play();
    });
  }
}

/*
 * Клас: Performance
 * ---------------------------
 * | Властивість |  Тип       |
 * |-------------|------------|
 * | band        |  Band      |
 * | location    |  string    |
 * | date        |  Date      |
 */
class Performance {
  #band; // приватне поле #band
  #location; // приватне поле #location
  #date; // приватне поле #date

  constructor(band, location, date) {
    this.#band = band;
    this.#location = location;
    this.#date = date;
  }

  // гетер для приватного поля #band
  get band() {
    return this.#band;
  }

  // гетер для приватного поля #location
  get location() {
    return this.#location;
  }

  // гетер для приватного поля #date
  get date() {
    return this.#date;
  }

  // метод info, що виводить інформацію про виступ в консоль
  info() {
    console.log(`Гурт ${this.#band.name} виступить в ${this.#location} ${this.#date.toLocaleDateString()}`);
  }
}


/*
 * Клас: Concert
 * ---------------------------
 * | Властивість |  Тип       |
 * |-------------|------------|
 * | band        |  Band      |
 * | location    |  string    |
 * | date        |  Date      |
 * | ticketPrice |  number    |
 */
class Concert extends Performance {
  #ticketPrice; // приватне поле #ticketPrice

  constructor(band, location, date, ticketPrice) {
    super(band, location, date); // виклик конструктора базового класу
    this.#ticketPrice = ticketPrice;
  }

  // гетер для приватного поля #ticketPrice
  get ticketPrice() {
    return this.#ticketPrice;
  }

  // сетер для приватного поля #ticketPrice
  set ticketPrice(price) {
    this.#ticketPrice = price;
  }

  // перевизначений метод info
  info() {
    console.log(`Гурт ${super.band.name} виступить в ${super.location} ${super.date.toLocaleDateString()}, ціна квитка ${this.#ticketPrice}`);
  }
}


/*
 * Клас: Vocalist
 * ---------------------------
 * | Властивість |  Тип       |
 * |-------------|------------|
 * | name        |  string    |
 * | band        |  string    |
 */
class Vocalist {
  #name; // приватне поле #name
  #band; // приватне поле #band

  constructor(name, band) {
    this.#name = name;
    this.#band = band;
  }

  // гетер для приватного поля #name
  get name() {
    return this.#name;
  }

  // гетер для приватного поля #band
  get band() {
    return this.#band;
  }

  // сетер для приватного поля #name
  set name(newName) {
    this.#name = newName;
  }

  // сетер для приватного поля #band
  set band(newBand) {
    this.#band = newBand;
  }

  // метод info, що виводить інформацію про вокаліста
  info() {
    console.log(`Вокаліст ${this.#name} є членом гурту ${this.#band}`);
  }
}


/*
 * Клас: SongWriter
 * ---------------------------
 * | Властивість |  Тип       |
 * |-------------|------------|
 * | #songs       |  array     |
 */
class SongWriter {
  #songs; // приватне поле #songs

  constructor(songs = []) {
    this.#songs = songs;
  }

  // гетер для приватного поля #songs
  get songs() {
    return this.#songs;
  }

  // метод addSong для додавання нової пісні до масиву #songs
  addSong(song) {
    this.#songs.push(song);
  }

  // метод info, що виводить інформацію про автора пісень
  info() {
    console.log(`Написав ${this.#songs.length} пісень`);
  }
}


/*
 * Клас: LeadSinger
 * ---------------------------
 * | Властивість |  Тип       |
 * |-------------|------------|
 * | name        |  string    |
 * | band        |  string    |
 * | songs       |  array     |
 */

class LeadSinger extends Vocalist {
  constructor(name, band) {
    super(name, band); // виклик конструктора базового класу
    this.songs = []; // ініціалізація властивості songs як пустого масиву
  }
  addSong(song) {
    this.songs.push(song);
  }
}


/*
 * Створення musician екземпляра класу Musician
 * ---------------------------------------------------
 * | Властивість |  Значення        |
 * |-------------|------------------|
 * | name        | "John"           |
 * | instrument  | "Guitarist"      |
 */
const musician = new Musician("John", "Guitarist");
/*
 * Створення guitarist екземпляра класу Guitarist
 * ---------------------------------------------------
 * | Властивість |  Значення         |
 * |-------------|-------------------|
 * | name        | "Jimmy Page"      |
 * | instrument  | "гітара"          |
 * | band        | "Led Zeppelin"    |
 */
const guitarist = new Guitarist("Jimmy Page", "гітара", "Led Zeppelin");
/*
 * Створення bassist екземпляра класу Bassist
 * ---------------------------------------------------
 * | Властивість |  Значення        |
 * |-------------|------------------|
 * | name        | "Paul McCartney" |
 * | instrument  | "бас-гітара"     |
 * | band        | "The Beatles"    |
 */
const bassist = new Bassist("Paul McCartney", "бас-гітара", "The Beatles");
// Створення band екземпляру класу Band
/*
 * Створення band екземпляра класу Band
 * ---------------------------------------------------
 * | Властивість |  Значення        |
 * |-------------|------------------|
 * | name        | "The Beatles"    |
 * | members     | [bassist]       |
 */
const band = new Band("The Beatles", [bassist]);
// Додаємо guitarist до band за допомогою addMember
band.addMember(guitarist);
/*
 * Створення vocalist екземпляра класу Vocalist
 * -------------------------------------
 * | Властивість |  Значення          |
 * |-------------|------------------|
 * | name        | "Freddie Mercury" |
 * | band        | "Queen"           |
 */
const vocalist = new Vocalist("Freddie Mercury", "Queen");
/*
 * Створення songwriter екземпляра класу SongWriter
 * -------------------------------------
 * | Властивість |  Значення          |
 * |-------------|------------------|
 * | songs       | ["Yesterday","Hey Jude","Let It Be",]|
 */
const songwriter = new SongWriter(["Yesterday", "Hey Jude", "Let It Be"]);

// Створення performance екземпляра класу Performance
/*
 * ------------------------------------------------------
 * | Властивість |       Значення                       |
 * |-------------|--------------------------------------|
 * | band        | band                                 |
 * | location    | "Liverpool"                          |
 * | date        | new Date('2023-08-01')               |
 */
const performance = new Performance(band, "Liverpool", new Date("2023-08-01"));
// використання Object.assign() для успадкування властивостей songwriter для LeadSinger.prototype
Object.assign(LeadSinger.prototype, songwriter);
/*
 * Створення concert екземпляра класу Concert
 * ---------------------------------------------------
 * | Властивість |  Значення        |
 * |-------------|------------------|
 * | band        | band             |
 * | location    | "BBC studios"    |
 * | date        | new Date("1994-07-06") |
 * | ticketPrice | 100              |
 */
const concert = new Concert(band, "BBC studios", new Date("1994-07-06"), 100);

/*
 * Створення leadsinger екземпляра класу LeadSinger
 * -------------------------------------
 * | Властивість |  Значення         |
 * |-------------|------------------|
 * | name        | "Mick Jagger"    |
 * | band        | "The Rolling Stones" |
 * | songs       | ["Yesterday","Hey Jude","Let It Be",]|
 */
const leadsinger = new LeadSinger("Mick Jagger", "The Rolling Stones");
leadsinger.addSong("Start Me Up");
// Методи для тестування розкоментувати після виконня всіх завдань
musician.play();
guitarist.play();
bassist.play();
band.playMusic();
performance.info();
concert.info();
vocalist.info();
songwriter.info();
leadsinger.info();


// ///////////////мой/////////////////
// John грає на Guitarist
// Jimmy Page грає на гітара в групі Led Zeppelin 
// Paul McCartney грає на бас-гітара в групі The Beatles 
// Jimmy Page грає на гітара в групі Led Zeppelin 
// Гурт The Beatles виступить в Liverpool 01.08.2023 
// Гурт The Beatles виступить в BBC studios 06.07.1994, ціна квитка 100 
// Вокаліст Freddie Mercury є членом гурту Queen 
// Написав 3 пісень 
// Вокаліст Mick Jagger є членом гурту The Rolling Stones