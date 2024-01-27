import p1_img from "./product_1.png";
import p2_img from "./product_2.png";
import p3_img from "./product_3.png";
import p4_img from "./product_4.png";

let allProducts = [
  {
    id: 1,
    name: "Bluză alba din bumbac natural, cu mâneci lungi",
    category: "women",
    images: [p1_img, p2_img, p3_img, p4_img],
    newPrice: 499,
    oldPrice: 899,
    rating: "4.7",
    votes: 114,
    shortDescription:
      "Aceasta este o bluză supradimensionată cu nasturi și umeri căzuți, prevăzută cu un buzunar aplicat. Este realizată cu măiestrie dintr-un material ușor, 100% bumbac, având o textură subtilă în formă de pas de țesătură.",
    allDescription:
      "Produsul nostru se evidențiază prin materialul său de înaltă calitate, oferind o senzație plăcută pe piele. Fiecare aspect al designului este atent ponderat, contribuind la durabilitatea și rezistența produsului. Indiferent de ocazie, acest articol vestimentar se integrează perfect în stilul tău personal, fiind versatil și potrivit pentru diverse contexte. Fie că te pregătești pentru o zi relaxantă acasă sau pentru o întâlnire în oraș, produsul nostru te învelește cu o căldură optimă, aducând un plus de confort experienței tale vestimentare. Descoperă o nouă dimensiune a eleganței și simplității în modul în care îți completezi garderoba. Articolul nostru vestimentar din bumbac organic devine astfel nu doar o piesă de îmbrăcăminte, ci o expresie a alegerilor tale în materie de calitate și rafinament.",
  },
  {
    id: 2,
    name: "Bluză alba din bumbac natural, cu mâneci lungi",
    category: "women",
    images: [p1_img, p2_img, p3_img, p4_img],
    newPrice: 499,
    oldPrice: 1199,
    rating: "4.8",
    votes: 145,
    shortDescription:
      "Acest articol vestimentar, creat cu meticulozitate și atenție la detalii, aduce în prim plan echilibrul perfect între confort și stil. Confectionat din bumbac organic, acest produs reprezintă o piesă esențială pentru garderoba ta, mai ales în sezonul rece.",
    allDescription:
      "Produsul nostru se evidențiază prin materialul său de înaltă calitate, oferind o senzație plăcută pe piele. Fiecare aspect al designului este atent ponderat, contribuind la durabilitatea și rezistența produsului. Indiferent de ocazie, acest articol vestimentar se integrează perfect în stilul tău personal, fiind versatil și potrivit pentru diverse contexte. Fie că te pregătești pentru o zi relaxantă acasă sau pentru o întâlnire în oraș, produsul nostru te învelește cu o căldură optimă, aducând un plus de confort experienței tale vestimentare. Descoperă o nouă dimensiune a eleganței și simplității în modul în care îți completezi garderoba. Articolul nostru vestimentar din bumbac organic devine astfel nu doar o piesă de îmbrăcăminte, ci o expresie a alegerilor tale în materie de calitate și rafinament.",
  },
  {
    id: 3,
    name: "Bluză alba din bumbac natural, cu mâneci lungi",
    category: "women",
    images: [p1_img, p2_img, p3_img, p4_img],
    newPrice: 599,
    oldPrice: 649,
    rating: "4.6",
    votes: 81,
    shortDescription:
      "Acest articol vestimentar, creat cu meticulozitate și atenție la detalii, aduce în prim plan echilibrul perfect între confort și stil. Confectionat din bumbac organic, acest produs reprezintă o piesă esențială pentru garderoba ta, mai ales în sezonul rece.",
    allDescription:
      "Produsul nostru se evidențiază prin materialul său de înaltă calitate, oferind o senzație plăcută pe piele. Fiecare aspect al designului este atent ponderat, contribuind la durabilitatea și rezistența produsului. Indiferent de ocazie, acest articol vestimentar se integrează perfect în stilul tău personal, fiind versatil și potrivit pentru diverse contexte. Fie că te pregătești pentru o zi relaxantă acasă sau pentru o întâlnire în oraș, produsul nostru te învelește cu o căldură optimă, aducând un plus de confort experienței tale vestimentare. Descoperă o nouă dimensiune a eleganței și simplității în modul în care îți completezi garderoba. Articolul nostru vestimentar din bumbac organic devine astfel nu doar o piesă de îmbrăcăminte, ci o expresie a alegerilor tale în materie de calitate și rafinament.",
  },
  {
    id: 4,
    name: "Bluză alba din bumbac natural, cu mâneci lungi",
    category: "women",
    images: [p1_img, p2_img, p3_img, p4_img],
    newPrice: 999,
    oldPrice: 1499,
    rating: "4.9",
    votes: 112,
    shortDescription:
      "Acest articol vestimentar, creat cu meticulozitate și atenție la detalii, aduce în prim plan echilibrul perfect între confort și stil. Confectionat din bumbac organic, acest produs reprezintă o piesă esențială pentru garderoba ta, mai ales în sezonul rece.",
    allDescription:
      "Produsul nostru se evidențiază prin materialul său de înaltă calitate, oferind o senzație plăcută pe piele. Fiecare aspect al designului este atent ponderat, contribuind la durabilitatea și rezistența produsului. Indiferent de ocazie, acest articol vestimentar se integrează perfect în stilul tău personal, fiind versatil și potrivit pentru diverse contexte. Fie că te pregătești pentru o zi relaxantă acasă sau pentru o întâlnire în oraș, produsul nostru te învelește cu o căldură optimă, aducând un plus de confort experienței tale vestimentare. Descoperă o nouă dimensiune a eleganței și simplității în modul în care îți completezi garderoba. Articolul nostru vestimentar din bumbac organic devine astfel nu doar o piesă de îmbrăcăminte, ci o expresie a alegerilor tale în materie de calitate și rafinament.",
  },
  {
    id: 5,
    name: "Bluză alba din bumbac natural, cu mâneci lungi",
    category: "women",
    images: [p1_img, p2_img, p3_img, p4_img],
    newPrice: 849,
    oldPrice: 1199,
    rating: "4.8",
    votes: 98,
    shortDescription:
      "Acest articol vestimentar, creat cu meticulozitate și atenție la detalii, aduce în prim plan echilibrul perfect între confort și stil. Confectionat din bumbac organic, acest produs reprezintă o piesă esențială pentru garderoba ta, mai ales în sezonul rece.",
    allDescription:
      "Produsul nostru se evidențiază prin materialul său de înaltă calitate, oferind o senzație plăcută pe piele. Fiecare aspect al designului este atent ponderat, contribuind la durabilitatea și rezistența produsului. Indiferent de ocazie, acest articol vestimentar se integrează perfect în stilul tău personal, fiind versatil și potrivit pentru diverse contexte. Fie că te pregătești pentru o zi relaxantă acasă sau pentru o întâlnire în oraș, produsul nostru te învelește cu o căldură optimă, aducând un plus de confort experienței tale vestimentare. Descoperă o nouă dimensiune a eleganței și simplității în modul în care îți completezi garderoba. Articolul nostru vestimentar din bumbac organic devine astfel nu doar o piesă de îmbrăcăminte, ci o expresie a alegerilor tale în materie de calitate și rafinament.",
  },
  {
    id: 6,
    name: "Bluză alba din bumbac natural, cu mâneci lungi",
    category: "women",
    images: [p1_img, p2_img, p3_img, p4_img],
    newPrice: 899,
    oldPrice: 1299,
    rating: "4.8",
    votes: 97,
    shortDescription:
      "Acest articol vestimentar, creat cu meticulozitate și atenție la detalii, aduce în prim plan echilibrul perfect între confort și stil. Confectionat din bumbac organic, acest produs reprezintă o piesă esențială pentru garderoba ta, mai ales în sezonul rece.",
    allDescription:
      "Produsul nostru se evidențiază prin materialul său de înaltă calitate, oferind o senzație plăcută pe piele. Fiecare aspect al designului este atent ponderat, contribuind la durabilitatea și rezistența produsului. Indiferent de ocazie, acest articol vestimentar se integrează perfect în stilul tău personal, fiind versatil și potrivit pentru diverse contexte. Fie că te pregătești pentru o zi relaxantă acasă sau pentru o întâlnire în oraș, produsul nostru te învelește cu o căldură optimă, aducând un plus de confort experienței tale vestimentare. Descoperă o nouă dimensiune a eleganței și simplității în modul în care îți completezi garderoba. Articolul nostru vestimentar din bumbac organic devine astfel nu doar o piesă de îmbrăcăminte, ci o expresie a alegerilor tale în materie de calitate și rafinament.",
  },
  {
    id: 7,
    name: "Bluză alba din bumbac natural, cu mâneci lungi",
    category: "women",
    images: [p1_img, p2_img, p3_img, p4_img],
    newPrice: 899,
    oldPrice: 1399,
    rating: "4.1",
    votes: 107,
    shortDescription:
      "Acest articol vestimentar, creat cu meticulozitate și atenție la detalii, aduce în prim plan echilibrul perfect între confort și stil. Confectionat din bumbac organic, acest produs reprezintă o piesă esențială pentru garderoba ta, mai ales în sezonul rece.",
    allDescription:
      "Produsul nostru se evidențiază prin materialul său de înaltă calitate, oferind o senzație plăcută pe piele. Fiecare aspect al designului este atent ponderat, contribuind la durabilitatea și rezistența produsului. Indiferent de ocazie, acest articol vestimentar se integrează perfect în stilul tău personal, fiind versatil și potrivit pentru diverse contexte. Fie că te pregătești pentru o zi relaxantă acasă sau pentru o întâlnire în oraș, produsul nostru te învelește cu o căldură optimă, aducând un plus de confort experienței tale vestimentare. Descoperă o nouă dimensiune a eleganței și simplității în modul în care îți completezi garderoba. Articolul nostru vestimentar din bumbac organic devine astfel nu doar o piesă de îmbrăcăminte, ci o expresie a alegerilor tale în materie de calitate și rafinament.",
  },
  {
    id: 8,
    name: "Bluză alba din bumbac natural, cu mâneci lungi",
    category: "women",
    images: [p1_img, p2_img, p3_img, p4_img],
    newPrice: 899,
    oldPrice: 1299,
    rating: "4.2",
    votes: 72,
    shortDescription:
      "Acest articol vestimentar, creat cu meticulozitate și atenție la detalii, aduce în prim plan echilibrul perfect între confort și stil. Confectionat din bumbac organic, acest produs reprezintă o piesă esențială pentru garderoba ta, mai ales în sezonul rece.",
    allDescription:
      "Produsul nostru se evidențiază prin materialul său de înaltă calitate, oferind o senzație plăcută pe piele. Fiecare aspect al designului este atent ponderat, contribuind la durabilitatea și rezistența produsului. Indiferent de ocazie, acest articol vestimentar se integrează perfect în stilul tău personal, fiind versatil și potrivit pentru diverse contexte. Fie că te pregătești pentru o zi relaxantă acasă sau pentru o întâlnire în oraș, produsul nostru te învelește cu o căldură optimă, aducând un plus de confort experienței tale vestimentare. Descoperă o nouă dimensiune a eleganței și simplității în modul în care îți completezi garderoba. Articolul nostru vestimentar din bumbac organic devine astfel nu doar o piesă de îmbrăcăminte, ci o expresie a alegerilor tale în materie de calitate și rafinament.",
  },
  {
    id: 9,
    name: "Bluză alba din bumbac natural, cu mâneci lungi",
    category: "women",
    images: [p1_img, p2_img, p3_img, p4_img],
    newPrice: 699,
    oldPrice: 1299,
    rating: "4.9",
    votes: 79,
    shortDescription:
      "Acest articol vestimentar, creat cu meticulozitate și atenție la detalii, aduce în prim plan echilibrul perfect între confort și stil. Confectionat din bumbac organic, acest produs reprezintă o piesă esențială pentru garderoba ta, mai ales în sezonul rece.",
    allDescription:
      "Produsul nostru se evidențiază prin materialul său de înaltă calitate, oferind o senzație plăcută pe piele. Fiecare aspect al designului este atent ponderat, contribuind la durabilitatea și rezistența produsului. Indiferent de ocazie, acest articol vestimentar se integrează perfect în stilul tău personal, fiind versatil și potrivit pentru diverse contexte. Fie că te pregătești pentru o zi relaxantă acasă sau pentru o întâlnire în oraș, produsul nostru te învelește cu o căldură optimă, aducând un plus de confort experienței tale vestimentare. Descoperă o nouă dimensiune a eleganței și simplității în modul în care îți completezi garderoba. Articolul nostru vestimentar din bumbac organic devine astfel nu doar o piesă de îmbrăcăminte, ci o expresie a alegerilor tale în materie de calitate și rafinament.",
  },
  {
    id: 10,
    name: "Bluză alba din bumbac natural, cu mâneci lungi",
    category: "women",
    images: [p1_img, p2_img, p3_img, p4_img],
    newPrice: 729,
    oldPrice: 1199,
    rating: "4.9",
    votes: 101,
    shortDescription:
      "Acest articol vestimentar, creat cu meticulozitate și atenție la detalii, aduce în prim plan echilibrul perfect între confort și stil. Confectionat din bumbac organic, acest produs reprezintă o piesă esențială pentru garderoba ta, mai ales în sezonul rece.",
    allDescription:
      "Produsul nostru se evidențiază prin materialul său de înaltă calitate, oferind o senzație plăcută pe piele. Fiecare aspect al designului este atent ponderat, contribuind la durabilitatea și rezistența produsului. Indiferent de ocazie, acest articol vestimentar se integrează perfect în stilul tău personal, fiind versatil și potrivit pentru diverse contexte. Fie că te pregătești pentru o zi relaxantă acasă sau pentru o întâlnire în oraș, produsul nostru te învelește cu o căldură optimă, aducând un plus de confort experienței tale vestimentare. Descoperă o nouă dimensiune a eleganței și simplității în modul în care îți completezi garderoba. Articolul nostru vestimentar din bumbac organic devine astfel nu doar o piesă de îmbrăcăminte, ci o expresie a alegerilor tale în materie de calitate și rafinament.",
  },
  {
    id: 11,
    name: "Bluză alba din bumbac natural, cu mâneci lungi",
    category: "women",
    images: [p1_img, p2_img, p3_img, p4_img],
    newPrice: 599,
    oldPrice: 699,
    rating: "4.9",
    votes: 98,
    shortDescription:
      "Acest articol vestimentar, creat cu meticulozitate și atenție la detalii, aduce în prim plan echilibrul perfect între confort și stil. Confectionat din bumbac organic, acest produs reprezintă o piesă esențială pentru garderoba ta, mai ales în sezonul rece.",
    allDescription:
      "Produsul nostru se evidențiază prin materialul său de înaltă calitate, oferind o senzație plăcută pe piele. Fiecare aspect al designului este atent ponderat, contribuind la durabilitatea și rezistența produsului. Indiferent de ocazie, acest articol vestimentar se integrează perfect în stilul tău personal, fiind versatil și potrivit pentru diverse contexte. Fie că te pregătești pentru o zi relaxantă acasă sau pentru o întâlnire în oraș, produsul nostru te învelește cu o căldură optimă, aducând un plus de confort experienței tale vestimentare. Descoperă o nouă dimensiune a eleganței și simplității în modul în care îți completezi garderoba. Articolul nostru vestimentar din bumbac organic devine astfel nu doar o piesă de îmbrăcăminte, ci o expresie a alegerilor tale în materie de calitate și rafinament.",
  },
  {
    id: 12,
    name: "Bluză alba din bumbac natural, cu mâneci lungi",
    category: "women",
    images: [p1_img, p2_img, p3_img, p4_img],
    newPrice: 849,
    oldPrice: 1199,
    rating: "4.0",
    votes: 133,
    shortDescription:
      "Acest articol vestimentar, creat cu meticulozitate și atenție la detalii, aduce în prim plan echilibrul perfect între confort și stil. Confectionat din bumbac organic, acest produs reprezintă o piesă esențială pentru garderoba ta, mai ales în sezonul rece.",
    allDescription:
      "Produsul nostru se evidențiază prin materialul său de înaltă calitate, oferind o senzație plăcută pe piele. Fiecare aspect al designului este atent ponderat, contribuind la durabilitatea și rezistența produsului. Indiferent de ocazie, acest articol vestimentar se integrează perfect în stilul tău personal, fiind versatil și potrivit pentru diverse contexte. Fie că te pregătești pentru o zi relaxantă acasă sau pentru o întâlnire în oraș, produsul nostru te învelește cu o căldură optimă, aducând un plus de confort experienței tale vestimentare. Descoperă o nouă dimensiune a eleganței și simplității în modul în care îți completezi garderoba. Articolul nostru vestimentar din bumbac organic devine astfel nu doar o piesă de îmbrăcăminte, ci o expresie a alegerilor tale în materie de calitate și rafinament.",
  },
  {
    id: 13,
    name: "Geacă pentru bărbați, croială slim fit și închidere completă cu fermoar",
    category: "men",
    images: [p1_img, p2_img, p3_img, p4_img],
    newPrice: 549,
    oldPrice: 799,
    rating: "4.9",
    votes: 79,
    shortDescription:
      "Acest articol vestimentar, creat cu meticulozitate și atenție la detalii, aduce în prim plan echilibrul perfect între confort și stil. Confectionat din bumbac organic, acest produs reprezintă o piesă esențială pentru garderoba ta, mai ales în sezonul rece.",
    allDescription:
      "Produsul nostru se evidențiază prin materialul său de înaltă calitate, oferind o senzație plăcută pe piele. Fiecare aspect al designului este atent ponderat, contribuind la durabilitatea și rezistența produsului. Indiferent de ocazie, acest articol vestimentar se integrează perfect în stilul tău personal, fiind versatil și potrivit pentru diverse contexte. Fie că te pregătești pentru o zi relaxantă acasă sau pentru o întâlnire în oraș, produsul nostru te învelește cu o căldură optimă, aducând un plus de confort experienței tale vestimentare. Descoperă o nouă dimensiune a eleganței și simplității în modul în care îți completezi garderoba. Articolul nostru vestimentar din bumbac organic devine astfel nu doar o piesă de îmbrăcăminte, ci o expresie a alegerilor tale în materie de calitate și rafinament.",
  },
  {
    id: 14,
    name: "Geacă pentru bărbați, croială slim fit și închidere completă cu fermoar",
    category: "men",
    images: [p1_img, p2_img, p3_img, p4_img],
    newPrice: 399,
    oldPrice: 799,
    rating: "4.9",
    votes: 148,
    shortDescription:
      "Acest articol vestimentar, creat cu meticulozitate și atenție la detalii, aduce în prim plan echilibrul perfect între confort și stil. Confectionat din bumbac organic, acest produs reprezintă o piesă esențială pentru garderoba ta, mai ales în sezonul rece.",
    allDescription:
      "Produsul nostru se evidențiază prin materialul său de înaltă calitate, oferind o senzație plăcută pe piele. Fiecare aspect al designului este atent ponderat, contribuind la durabilitatea și rezistența produsului. Indiferent de ocazie, acest articol vestimentar se integrează perfect în stilul tău personal, fiind versatil și potrivit pentru diverse contexte. Fie că te pregătești pentru o zi relaxantă acasă sau pentru o întâlnire în oraș, produsul nostru te învelește cu o căldură optimă, aducând un plus de confort experienței tale vestimentare. Descoperă o nouă dimensiune a eleganței și simplității în modul în care îți completezi garderoba. Articolul nostru vestimentar din bumbac organic devine astfel nu doar o piesă de îmbrăcăminte, ci o expresie a alegerilor tale în materie de calitate și rafinament.",
  },
  {
    id: 15,
    name: "Geacă pentru bărbați, croială slim fit și închidere completă cu fermoar",
    category: "men",
    images: [p1_img, p2_img, p3_img, p4_img],
    newPrice: 679,
    oldPrice: 999,
    rating: "4.6",
    votes: 141,
    shortDescription:
      "Acest articol vestimentar, creat cu meticulozitate și atenție la detalii, aduce în prim plan echilibrul perfect între confort și stil. Confectionat din bumbac organic, acest produs reprezintă o piesă esențială pentru garderoba ta, mai ales în sezonul rece.",
    allDescription:
      "Produsul nostru se evidențiază prin materialul său de înaltă calitate, oferind o senzație plăcută pe piele. Fiecare aspect al designului este atent ponderat, contribuind la durabilitatea și rezistența produsului. Indiferent de ocazie, acest articol vestimentar se integrează perfect în stilul tău personal, fiind versatil și potrivit pentru diverse contexte. Fie că te pregătești pentru o zi relaxantă acasă sau pentru o întâlnire în oraș, produsul nostru te învelește cu o căldură optimă, aducând un plus de confort experienței tale vestimentare. Descoperă o nouă dimensiune a eleganței și simplității în modul în care îți completezi garderoba. Articolul nostru vestimentar din bumbac organic devine astfel nu doar o piesă de îmbrăcăminte, ci o expresie a alegerilor tale în materie de calitate și rafinament.",
  },
  {
    id: 16,
    name: "Geacă pentru bărbați, croială slim fit și închidere completă cu fermoar",
    category: "men",
    images: [p1_img, p2_img, p3_img, p4_img],
    newPrice: 499,
    oldPrice: 849,
    rating: "4.7",
    votes: 211,
    shortDescription:
      "Acest articol vestimentar, creat cu meticulozitate și atenție la detalii, aduce în prim plan echilibrul perfect între confort și stil. Confectionat din bumbac organic, acest produs reprezintă o piesă esențială pentru garderoba ta, mai ales în sezonul rece.",
    allDescription:
      "Produsul nostru se evidențiază prin materialul său de înaltă calitate, oferind o senzație plăcută pe piele. Fiecare aspect al designului este atent ponderat, contribuind la durabilitatea și rezistența produsului. Indiferent de ocazie, acest articol vestimentar se integrează perfect în stilul tău personal, fiind versatil și potrivit pentru diverse contexte. Fie că te pregătești pentru o zi relaxantă acasă sau pentru o întâlnire în oraș, produsul nostru te învelește cu o căldură optimă, aducând un plus de confort experienței tale vestimentare. Descoperă o nouă dimensiune a eleganței și simplității în modul în care îți completezi garderoba. Articolul nostru vestimentar din bumbac organic devine astfel nu doar o piesă de îmbrăcăminte, ci o expresie a alegerilor tale în materie de calitate și rafinament.",
  },
  {
    id: 17,
    name: "Geacă pentru bărbați, croială slim fit și închidere completă cu fermoar",
    category: "men",
    images: [p1_img, p2_img, p3_img, p4_img],
    newPrice: 899,
    oldPrice: 949,
    rating: "4.9",
    votes: 55,
    shortDescription:
      "Acest articol vestimentar, creat cu meticulozitate și atenție la detalii, aduce în prim plan echilibrul perfect între confort și stil. Confectionat din bumbac organic, acest produs reprezintă o piesă esențială pentru garderoba ta, mai ales în sezonul rece.",
    allDescription:
      "Produsul nostru se evidențiază prin materialul său de înaltă calitate, oferind o senzație plăcută pe piele. Fiecare aspect al designului este atent ponderat, contribuind la durabilitatea și rezistența produsului. Indiferent de ocazie, acest articol vestimentar se integrează perfect în stilul tău personal, fiind versatil și potrivit pentru diverse contexte. Fie că te pregătești pentru o zi relaxantă acasă sau pentru o întâlnire în oraș, produsul nostru te învelește cu o căldură optimă, aducând un plus de confort experienței tale vestimentare. Descoperă o nouă dimensiune a eleganței și simplității în modul în care îți completezi garderoba. Articolul nostru vestimentar din bumbac organic devine astfel nu doar o piesă de îmbrăcăminte, ci o expresie a alegerilor tale în materie de calitate și rafinament.",
  },
  {
    id: 18,
    name: "Geacă pentru bărbați, croială slim fit și închidere completă cu fermoar",
    category: "men",
    images: [p1_img, p2_img, p3_img, p4_img],
    newPrice: 689,
    oldPrice: 899,
    rating: "4.8",
    votes: 77,
    shortDescription:
      "Acest articol vestimentar, creat cu meticulozitate și atenție la detalii, aduce în prim plan echilibrul perfect între confort și stil. Confectionat din bumbac organic, acest produs reprezintă o piesă esențială pentru garderoba ta, mai ales în sezonul rece.",
    allDescription:
      "Produsul nostru se evidențiază prin materialul său de înaltă calitate, oferind o senzație plăcută pe piele. Fiecare aspect al designului este atent ponderat, contribuind la durabilitatea și rezistența produsului. Indiferent de ocazie, acest articol vestimentar se integrează perfect în stilul tău personal, fiind versatil și potrivit pentru diverse contexte. Fie că te pregătești pentru o zi relaxantă acasă sau pentru o întâlnire în oraș, produsul nostru te învelește cu o căldură optimă, aducând un plus de confort experienței tale vestimentare. Descoperă o nouă dimensiune a eleganței și simplității în modul în care îți completezi garderoba. Articolul nostru vestimentar din bumbac organic devine astfel nu doar o piesă de îmbrăcăminte, ci o expresie a alegerilor tale în materie de calitate și rafinament.",
  },
  {
    id: 19,
    name: "Geacă pentru bărbați, croială slim fit și închidere completă cu fermoar",
    category: "men",
    images: [p1_img, p2_img, p3_img, p4_img],
    newPrice: 829,
    oldPrice: 999,
    rating: "4.4",
    votes: 23,
    shortDescription:
      "Acest articol vestimentar, creat cu meticulozitate și atenție la detalii, aduce în prim plan echilibrul perfect între confort și stil. Confectionat din bumbac organic, acest produs reprezintă o piesă esențială pentru garderoba ta, mai ales în sezonul rece.",
    allDescription:
      "Produsul nostru se evidențiază prin materialul său de înaltă calitate, oferind o senzație plăcută pe piele. Fiecare aspect al designului este atent ponderat, contribuind la durabilitatea și rezistența produsului. Indiferent de ocazie, acest articol vestimentar se integrează perfect în stilul tău personal, fiind versatil și potrivit pentru diverse contexte. Fie că te pregătești pentru o zi relaxantă acasă sau pentru o întâlnire în oraș, produsul nostru te învelește cu o căldură optimă, aducând un plus de confort experienței tale vestimentare. Descoperă o nouă dimensiune a eleganței și simplității în modul în care îți completezi garderoba. Articolul nostru vestimentar din bumbac organic devine astfel nu doar o piesă de îmbrăcăminte, ci o expresie a alegerilor tale în materie de calitate și rafinament.",
  },
  {
    id: 20,
    name: "Geacă pentru bărbați, croială slim fit și închidere completă cu fermoar",
    category: "men",
    images: [p1_img, p2_img, p3_img, p4_img],
    newPrice: 999,
    oldPrice: 1499,
    rating: "4.7",
    votes: 64,
    shortDescription:
      "Acest articol vestimentar, creat cu meticulozitate și atenție la detalii, aduce în prim plan echilibrul perfect între confort și stil. Confectionat din bumbac organic, acest produs reprezintă o piesă esențială pentru garderoba ta, mai ales în sezonul rece.",
    allDescription:
      "Produsul nostru se evidențiază prin materialul său de înaltă calitate, oferind o senzație plăcută pe piele. Fiecare aspect al designului este atent ponderat, contribuind la durabilitatea și rezistența produsului. Indiferent de ocazie, acest articol vestimentar se integrează perfect în stilul tău personal, fiind versatil și potrivit pentru diverse contexte. Fie că te pregătești pentru o zi relaxantă acasă sau pentru o întâlnire în oraș, produsul nostru te învelește cu o căldură optimă, aducând un plus de confort experienței tale vestimentare. Descoperă o nouă dimensiune a eleganței și simplității în modul în care îți completezi garderoba. Articolul nostru vestimentar din bumbac organic devine astfel nu doar o piesă de îmbrăcăminte, ci o expresie a alegerilor tale în materie de calitate și rafinament.",
  },
  {
    id: 21,
    name: "Geacă pentru bărbați, croială slim fit și închidere completă cu fermoar",
    category: "men",
    images: [p1_img, p2_img, p3_img, p4_img],
    newPrice: 479,
    oldPrice: 589,
    rating: "4.6",
    votes: 120,
    shortDescription:
      "Acest articol vestimentar, creat cu meticulozitate și atenție la detalii, aduce în prim plan echilibrul perfect între confort și stil. Confectionat din bumbac organic, acest produs reprezintă o piesă esențială pentru garderoba ta, mai ales în sezonul rece.",
    allDescription:
      "Produsul nostru se evidențiază prin materialul său de înaltă calitate, oferind o senzație plăcută pe piele. Fiecare aspect al designului este atent ponderat, contribuind la durabilitatea și rezistența produsului. Indiferent de ocazie, acest articol vestimentar se integrează perfect în stilul tău personal, fiind versatil și potrivit pentru diverse contexte. Fie că te pregătești pentru o zi relaxantă acasă sau pentru o întâlnire în oraș, produsul nostru te învelește cu o căldură optimă, aducând un plus de confort experienței tale vestimentare. Descoperă o nouă dimensiune a eleganței și simplității în modul în care îți completezi garderoba. Articolul nostru vestimentar din bumbac organic devine astfel nu doar o piesă de îmbrăcăminte, ci o expresie a alegerilor tale în materie de calitate și rafinament.",
  },
  {
    id: 22,
    name: "Geacă pentru bărbați, croială slim fit și închidere completă cu fermoar",
    category: "men",
    images: [p1_img, p2_img, p3_img, p4_img],
    newPrice: 899,
    oldPrice: 1279,
    rating: "4.2",
    votes: 143,
    shortDescription:
      "Acest articol vestimentar, creat cu meticulozitate și atenție la detalii, aduce în prim plan echilibrul perfect între confort și stil. Confectionat din bumbac organic, acest produs reprezintă o piesă esențială pentru garderoba ta, mai ales în sezonul rece.",
    allDescription:
      "Produsul nostru se evidențiază prin materialul său de înaltă calitate, oferind o senzație plăcută pe piele. Fiecare aspect al designului este atent ponderat, contribuind la durabilitatea și rezistența produsului. Indiferent de ocazie, acest articol vestimentar se integrează perfect în stilul tău personal, fiind versatil și potrivit pentru diverse contexte. Fie că te pregătești pentru o zi relaxantă acasă sau pentru o întâlnire în oraș, produsul nostru te învelește cu o căldură optimă, aducând un plus de confort experienței tale vestimentare. Descoperă o nouă dimensiune a eleganței și simplității în modul în care îți completezi garderoba. Articolul nostru vestimentar din bumbac organic devine astfel nu doar o piesă de îmbrăcăminte, ci o expresie a alegerilor tale în materie de calitate și rafinament.",
  },
  {
    id: 23,
    name: "Geacă pentru bărbați, croială slim fit și închidere completă cu fermoar",
    category: "men",
    images: [p1_img, p2_img, p3_img, p4_img],
    newPrice: 729,
    oldPrice: 949,
    rating: "4.2",
    votes: 117,
    shortDescription:
      "Acest articol vestimentar, creat cu meticulozitate și atenție la detalii, aduce în prim plan echilibrul perfect între confort și stil. Confectionat din bumbac organic, acest produs reprezintă o piesă esențială pentru garderoba ta, mai ales în sezonul rece.",
    allDescription:
      "Produsul nostru se evidențiază prin materialul său de înaltă calitate, oferind o senzație plăcută pe piele. Fiecare aspect al designului este atent ponderat, contribuind la durabilitatea și rezistența produsului. Indiferent de ocazie, acest articol vestimentar se integrează perfect în stilul tău personal, fiind versatil și potrivit pentru diverse contexte. Fie că te pregătești pentru o zi relaxantă acasă sau pentru o întâlnire în oraș, produsul nostru te învelește cu o căldură optimă, aducând un plus de confort experienței tale vestimentare. Descoperă o nouă dimensiune a eleganței și simplității în modul în care îți completezi garderoba. Articolul nostru vestimentar din bumbac organic devine astfel nu doar o piesă de îmbrăcăminte, ci o expresie a alegerilor tale în materie de calitate și rafinament.",
  },
  {
    id: 24,
    name: "Geacă pentru bărbați, croială slim fit și închidere completă cu fermoar",
    category: "men",
    images: [p1_img, p2_img, p3_img, p4_img],
    newPrice: 399,
    oldPrice: 979,
    rating: "4.9",
    votes: 102,
    shortDescription:
      "Acest articol vestimentar, creat cu meticulozitate și atenție la detalii, aduce în prim plan echilibrul perfect între confort și stil. Confectionat din bumbac organic, acest produs reprezintă o piesă esențială pentru garderoba ta, mai ales în sezonul rece.",
    allDescription:
      "Produsul nostru se evidențiază prin materialul său de înaltă calitate, oferind o senzație plăcută pe piele. Fiecare aspect al designului este atent ponderat, contribuind la durabilitatea și rezistența produsului. Indiferent de ocazie, acest articol vestimentar se integrează perfect în stilul tău personal, fiind versatil și potrivit pentru diverse contexte. Fie că te pregătești pentru o zi relaxantă acasă sau pentru o întâlnire în oraș, produsul nostru te învelește cu o căldură optimă, aducând un plus de confort experienței tale vestimentare. Descoperă o nouă dimensiune a eleganței și simplității în modul în care îți completezi garderoba. Articolul nostru vestimentar din bumbac organic devine astfel nu doar o piesă de îmbrăcăminte, ci o expresie a alegerilor tale în materie de calitate și rafinament.",
  },
  {
    id: 25,
    name: "Hanorac pentru băieți din lâniță naturală, cu mâneci largi și guler semi-deschis",
    category: "kid",
    images: [p1_img, p2_img, p3_img, p4_img],
    newPrice: 679,
    oldPrice: 899,
    rating: "4.9",
    votes: 83,
    shortDescription:
      "Acest articol vestimentar, creat cu meticulozitate și atenție la detalii, aduce în prim plan echilibrul perfect între confort și stil. Confectionat din bumbac organic, acest produs reprezintă o piesă esențială pentru garderoba ta, mai ales în sezonul rece.",
    allDescription:
      "Produsul nostru se evidențiază prin materialul său de înaltă calitate, oferind o senzație plăcută pe piele. Fiecare aspect al designului este atent ponderat, contribuind la durabilitatea și rezistența produsului. Indiferent de ocazie, acest articol vestimentar se integrează perfect în stilul tău personal, fiind versatil și potrivit pentru diverse contexte. Fie că te pregătești pentru o zi relaxantă acasă sau pentru o întâlnire în oraș, produsul nostru te învelește cu o căldură optimă, aducând un plus de confort experienței tale vestimentare. Descoperă o nouă dimensiune a eleganței și simplității în modul în care îți completezi garderoba. Articolul nostru vestimentar din bumbac organic devine astfel nu doar o piesă de îmbrăcăminte, ci o expresie a alegerilor tale în materie de calitate și rafinament.",
  },
  {
    id: 26,
    name: "Hanorac pentru băieți din lâniță naturală, cu mâneci largi și guler semi-deschis",
    category: "kid",
    images: [p1_img, p2_img, p3_img, p4_img],
    newPrice: 549,
    oldPrice: 1199,
    rating: "4.1",
    votes: 87,
    shortDescription:
      "Acest articol vestimentar, creat cu meticulozitate și atenție la detalii, aduce în prim plan echilibrul perfect între confort și stil. Confectionat din bumbac organic, acest produs reprezintă o piesă esențială pentru garderoba ta, mai ales în sezonul rece.",
    allDescription:
      "Produsul nostru se evidențiază prin materialul său de înaltă calitate, oferind o senzație plăcută pe piele. Fiecare aspect al designului este atent ponderat, contribuind la durabilitatea și rezistența produsului. Indiferent de ocazie, acest articol vestimentar se integrează perfect în stilul tău personal, fiind versatil și potrivit pentru diverse contexte. Fie că te pregătești pentru o zi relaxantă acasă sau pentru o întâlnire în oraș, produsul nostru te învelește cu o căldură optimă, aducând un plus de confort experienței tale vestimentare. Descoperă o nouă dimensiune a eleganței și simplității în modul în care îți completezi garderoba. Articolul nostru vestimentar din bumbac organic devine astfel nu doar o piesă de îmbrăcăminte, ci o expresie a alegerilor tale în materie de calitate și rafinament.",
  },
  {
    id: 27,
    name: "Hanorac pentru băieți din lâniță naturală, cu mâneci largi și guler semi-deschis",
    category: "kid",
    images: [p1_img, p2_img, p3_img, p4_img],
    newPrice: 349,
    oldPrice: 699,
    rating: "4.5",
    votes: 45,
    shortDescription:
      "Acest articol vestimentar, creat cu meticulozitate și atenție la detalii, aduce în prim plan echilibrul perfect între confort și stil. Confectionat din bumbac organic, acest produs reprezintă o piesă esențială pentru garderoba ta, mai ales în sezonul rece.",
    allDescription:
      "Produsul nostru se evidențiază prin materialul său de înaltă calitate, oferind o senzație plăcută pe piele. Fiecare aspect al designului este atent ponderat, contribuind la durabilitatea și rezistența produsului. Indiferent de ocazie, acest articol vestimentar se integrează perfect în stilul tău personal, fiind versatil și potrivit pentru diverse contexte. Fie că te pregătești pentru o zi relaxantă acasă sau pentru o întâlnire în oraș, produsul nostru te învelește cu o căldură optimă, aducând un plus de confort experienței tale vestimentare. Descoperă o nouă dimensiune a eleganței și simplității în modul în care îți completezi garderoba. Articolul nostru vestimentar din bumbac organic devine astfel nu doar o piesă de îmbrăcăminte, ci o expresie a alegerilor tale în materie de calitate și rafinament.",
  },
  {
    id: 28,
    name: "Hanorac pentru băieți din lâniță naturală, cu mâneci largi și guler semi-deschis",
    category: "kid",
    images: [p1_img, p2_img, p3_img, p4_img],
    newPrice: 699,
    oldPrice: 1099,
    rating: "4.6",
    votes: 35,
    shortDescription:
      "Acest articol vestimentar, creat cu meticulozitate și atenție la detalii, aduce în prim plan echilibrul perfect între confort și stil. Confectionat din bumbac organic, acest produs reprezintă o piesă esențială pentru garderoba ta, mai ales în sezonul rece.",
    allDescription:
      "Produsul nostru se evidențiază prin materialul său de înaltă calitate, oferind o senzație plăcută pe piele. Fiecare aspect al designului este atent ponderat, contribuind la durabilitatea și rezistența produsului. Indiferent de ocazie, acest articol vestimentar se integrează perfect în stilul tău personal, fiind versatil și potrivit pentru diverse contexte. Fie că te pregătești pentru o zi relaxantă acasă sau pentru o întâlnire în oraș, produsul nostru te învelește cu o căldură optimă, aducând un plus de confort experienței tale vestimentare. Descoperă o nouă dimensiune a eleganței și simplității în modul în care îți completezi garderoba. Articolul nostru vestimentar din bumbac organic devine astfel nu doar o piesă de îmbrăcăminte, ci o expresie a alegerilor tale în materie de calitate și rafinament.",
  },
  {
    id: 29,
    name: "Hanorac pentru băieți din lâniță naturală, cu mâneci largi și guler semi-deschis",
    category: "kid",
    images: [p1_img, p2_img, p3_img, p4_img],
    newPrice: 699,
    oldPrice: 1099,
    rating: "4.7",
    votes: 81,
    shortDescription:
      "Acest articol vestimentar, creat cu meticulozitate și atenție la detalii, aduce în prim plan echilibrul perfect între confort și stil. Confectionat din bumbac organic, acest produs reprezintă o piesă esențială pentru garderoba ta, mai ales în sezonul rece.",
    allDescription:
      "Produsul nostru se evidențiază prin materialul său de înaltă calitate, oferind o senzație plăcută pe piele. Fiecare aspect al designului este atent ponderat, contribuind la durabilitatea și rezistența produsului. Indiferent de ocazie, acest articol vestimentar se integrează perfect în stilul tău personal, fiind versatil și potrivit pentru diverse contexte. Fie că te pregătești pentru o zi relaxantă acasă sau pentru o întâlnire în oraș, produsul nostru te învelește cu o căldură optimă, aducând un plus de confort experienței tale vestimentare. Descoperă o nouă dimensiune a eleganței și simplității în modul în care îți completezi garderoba. Articolul nostru vestimentar din bumbac organic devine astfel nu doar o piesă de îmbrăcăminte, ci o expresie a alegerilor tale în materie de calitate și rafinament.",
  },
  {
    id: 30,
    name: "Hanorac pentru băieți din lâniță naturală, cu mâneci largi și guler semi-deschis",
    category: "kid",
    images: [p1_img, p2_img, p3_img, p4_img],
    newPrice: 759,
    oldPrice: 929,
    rating: "4.9",
    votes: 39,
    shortDescription:
      "Acest articol vestimentar, creat cu meticulozitate și atenție la detalii, aduce în prim plan echilibrul perfect între confort și stil. Confectionat din bumbac organic, acest produs reprezintă o piesă esențială pentru garderoba ta, mai ales în sezonul rece.",
    allDescription:
      "Produsul nostru se evidențiază prin materialul său de înaltă calitate, oferind o senzație plăcută pe piele. Fiecare aspect al designului este atent ponderat, contribuind la durabilitatea și rezistența produsului. Indiferent de ocazie, acest articol vestimentar se integrează perfect în stilul tău personal, fiind versatil și potrivit pentru diverse contexte. Fie că te pregătești pentru o zi relaxantă acasă sau pentru o întâlnire în oraș, produsul nostru te învelește cu o căldură optimă, aducând un plus de confort experienței tale vestimentare. Descoperă o nouă dimensiune a eleganței și simplității în modul în care îți completezi garderoba. Articolul nostru vestimentar din bumbac organic devine astfel nu doar o piesă de îmbrăcăminte, ci o expresie a alegerilor tale în materie de calitate și rafinament.",
  },
  {
    id: 31,
    name: "Hanorac pentru băieți din lâniță naturală, cu mâneci largi și guler semi-deschis",
    category: "kid",
    images: [p1_img, p2_img, p3_img, p4_img],
    newPrice: 529,
    oldPrice: 1099,
    rating: "4.9",
    votes: 67,
    shortDescription:
      "Acest articol vestimentar, creat cu meticulozitate și atenție la detalii, aduce în prim plan echilibrul perfect între confort și stil. Confectionat din bumbac organic, acest produs reprezintă o piesă esențială pentru garderoba ta, mai ales în sezonul rece.",
    allDescription:
      "Produsul nostru se evidențiază prin materialul său de înaltă calitate, oferind o senzație plăcută pe piele. Fiecare aspect al designului este atent ponderat, contribuind la durabilitatea și rezistența produsului. Indiferent de ocazie, acest articol vestimentar se integrează perfect în stilul tău personal, fiind versatil și potrivit pentru diverse contexte. Fie că te pregătești pentru o zi relaxantă acasă sau pentru o întâlnire în oraș, produsul nostru te învelește cu o căldură optimă, aducând un plus de confort experienței tale vestimentare. Descoperă o nouă dimensiune a eleganței și simplității în modul în care îți completezi garderoba. Articolul nostru vestimentar din bumbac organic devine astfel nu doar o piesă de îmbrăcăminte, ci o expresie a alegerilor tale în materie de calitate și rafinament.",
  },
  {
    id: 32,
    name: "Hanorac pentru băieți din lâniță naturală, cu mâneci largi și guler semi-deschis",
    category: "kid",
    images: [p1_img, p2_img, p3_img, p4_img],
    newPrice: 649,
    oldPrice: 849,
    rating: "4.5",
    votes: 203,
    shortDescription:
      "Acest articol vestimentar, creat cu meticulozitate și atenție la detalii, aduce în prim plan echilibrul perfect între confort și stil. Confectionat din bumbac organic, acest produs reprezintă o piesă esențială pentru garderoba ta, mai ales în sezonul rece.",
    allDescription:
      "Produsul nostru se evidențiază prin materialul său de înaltă calitate, oferind o senzație plăcută pe piele. Fiecare aspect al designului este atent ponderat, contribuind la durabilitatea și rezistența produsului. Indiferent de ocazie, acest articol vestimentar se integrează perfect în stilul tău personal, fiind versatil și potrivit pentru diverse contexte. Fie că te pregătești pentru o zi relaxantă acasă sau pentru o întâlnire în oraș, produsul nostru te învelește cu o căldură optimă, aducând un plus de confort experienței tale vestimentare. Descoperă o nouă dimensiune a eleganței și simplității în modul în care îți completezi garderoba. Articolul nostru vestimentar din bumbac organic devine astfel nu doar o piesă de îmbrăcăminte, ci o expresie a alegerilor tale în materie de calitate și rafinament.",
  },
  {
    id: 33,
    name: "Hanorac pentru băieți din lâniță naturală, cu mâneci largi și guler semi-deschis",
    category: "kid",
    images: [p1_img, p2_img, p3_img, p4_img],
    newPrice: 599,
    oldPrice: 829,
    rating: "4.4",
    votes: 184,
    shortDescription:
      "Acest articol vestimentar, creat cu meticulozitate și atenție la detalii, aduce în prim plan echilibrul perfect între confort și stil. Confectionat din bumbac organic, acest produs reprezintă o piesă esențială pentru garderoba ta, mai ales în sezonul rece.",
    allDescription:
      "Produsul nostru se evidențiază prin materialul său de înaltă calitate, oferind o senzație plăcută pe piele. Fiecare aspect al designului este atent ponderat, contribuind la durabilitatea și rezistența produsului. Indiferent de ocazie, acest articol vestimentar se integrează perfect în stilul tău personal, fiind versatil și potrivit pentru diverse contexte. Fie că te pregătești pentru o zi relaxantă acasă sau pentru o întâlnire în oraș, produsul nostru te învelește cu o căldură optimă, aducând un plus de confort experienței tale vestimentare. Descoperă o nouă dimensiune a eleganței și simplității în modul în care îți completezi garderoba. Articolul nostru vestimentar din bumbac organic devine astfel nu doar o piesă de îmbrăcăminte, ci o expresie a alegerilor tale în materie de calitate și rafinament.",
  },
  {
    id: 34,
    name: "Hanorac pentru băieți din lâniță naturală, cu mâneci largi și guler semi-deschis",
    category: "kid",
    images: [p1_img, p2_img, p3_img, p4_img],
    newPrice: 489,
    oldPrice: 799,
    rating: "5",
    votes: 167,
    shortDescription:
      "Acest articol vestimentar, creat cu meticulozitate și atenție la detalii, aduce în prim plan echilibrul perfect între confort și stil. Confectionat din bumbac organic, acest produs reprezintă o piesă esențială pentru garderoba ta, mai ales în sezonul rece.",
    allDescription:
      "Produsul nostru se evidențiază prin materialul său de înaltă calitate, oferind o senzație plăcută pe piele. Fiecare aspect al designului este atent ponderat, contribuind la durabilitatea și rezistența produsului. Indiferent de ocazie, acest articol vestimentar se integrează perfect în stilul tău personal, fiind versatil și potrivit pentru diverse contexte. Fie că te pregătești pentru o zi relaxantă acasă sau pentru o întâlnire în oraș, produsul nostru te învelește cu o căldură optimă, aducând un plus de confort experienței tale vestimentare. Descoperă o nouă dimensiune a eleganței și simplității în modul în care îți completezi garderoba. Articolul nostru vestimentar din bumbac organic devine astfel nu doar o piesă de îmbrăcăminte, ci o expresie a alegerilor tale în materie de calitate și rafinament.",
  },
  {
    id: 35,
    name: "Hanorac pentru băieți din lâniță naturală, cu mâneci largi și guler semi-deschis",
    category: "kid",
    images: [p1_img, p2_img, p3_img, p4_img],
    newPrice: 849,
    oldPrice: 1299,
    rating: "4.9",
    votes: 155,
    shortDescription:
      "Acest articol vestimentar, creat cu meticulozitate și atenție la detalii, aduce în prim plan echilibrul perfect între confort și stil. Confectionat din bumbac organic, acest produs reprezintă o piesă esențială pentru garderoba ta, mai ales în sezonul rece.",
    allDescription:
      "Produsul nostru se evidențiază prin materialul său de înaltă calitate, oferind o senzație plăcută pe piele. Fiecare aspect al designului este atent ponderat, contribuind la durabilitatea și rezistența produsului. Indiferent de ocazie, acest articol vestimentar se integrează perfect în stilul tău personal, fiind versatil și potrivit pentru diverse contexte. Fie că te pregătești pentru o zi relaxantă acasă sau pentru o întâlnire în oraș, produsul nostru te învelește cu o căldură optimă, aducând un plus de confort experienței tale vestimentare. Descoperă o nouă dimensiune a eleganței și simplității în modul în care îți completezi garderoba. Articolul nostru vestimentar din bumbac organic devine astfel nu doar o piesă de îmbrăcăminte, ci o expresie a alegerilor tale în materie de calitate și rafinament.",
  },
  {
    id: 36,
    name: "Hanorac pentru băieți din lâniță naturală, cu mâneci largi și guler semi-deschis",
    category: "kid",
    images: [p1_img, p2_img, p3_img, p4_img],
    newPrice: 1199,
    oldPrice: 1299,
    rating: "5",
    votes: 105,
    shortDescription:
      "Acest articol vestimentar, creat cu meticulozitate și atenție la detalii, aduce în prim plan echilibrul perfect între confort și stil. Confectionat din bumbac organic, acest produs reprezintă o piesă esențială pentru garderoba ta, mai ales în sezonul rece.",
    allDescription:
      "Produsul nostru se evidențiază prin materialul său de înaltă calitate, oferind o senzație plăcută pe piele. Fiecare aspect al designului este atent ponderat, contribuind la durabilitatea și rezistența produsului. Indiferent de ocazie, acest articol vestimentar se integrează perfect în stilul tău personal, fiind versatil și potrivit pentru diverse contexte. Fie că te pregătești pentru o zi relaxantă acasă sau pentru o întâlnire în oraș, produsul nostru te învelește cu o căldură optimă, aducând un plus de confort experienței tale vestimentare. Descoperă o nouă dimensiune a eleganței și simplității în modul în care îți completezi garderoba. Articolul nostru vestimentar din bumbac organic devine astfel nu doar o piesă de îmbrăcăminte, ci o expresie a alegerilor tale în materie de calitate și rafinament.",
  },
];

export default allProducts;
