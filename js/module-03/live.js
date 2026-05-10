function person(naam, umar,  m_f, color) {
    this.name = naam;
    this.age = umar;
    this.gender = m_f;
    this.fav_color = color;
}

const parth = new person("Parth", 27, "male", "black");
console.log(parth);