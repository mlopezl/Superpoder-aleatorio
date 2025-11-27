const superpowers = [
  "Ser invisible pero solo cuando nadie te está mirando",
  "Saber exactamente cuándo la comida está lista con solo olerla",
  "Controlar el Wi-Fi con tus emociones",
  "Hablar con los perros, pero ellos solo responden con chistes malos",
  "Convertir café en código sin dormir",
  "Pausar el tiempo, pero solo durante anuncios de YouTube",
  "Ser inmune a spoilers... excepto de anime",
  "Dormir 5 minutos y sentir que dormiste 8 horas",
  "Saltar más alto cuando nadie te está mirando",
  "Encontrar siempre calcetines desaparejados",
  "Hablar con plantas y que ellas te ignoren",
  "Hacer que los semáforos se pongan verdes... solo en tu imaginación",
  "Recordar todas las contraseñas, pero solo las incorrectas",
  "Cambiar el clima con tu humor, pero solo dentro de tu habitación",
  "Hacer que tu comida favorita nunca se enfríe"
];

function randomSuperpower() {
  const index = Math.floor(Math.random() * superpowers.length);
  return superpowers[index];
}

module.exports = randomSuperpower;
