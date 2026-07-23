export const SITE = {
  name: "Japan Bridge",
  tagline: "Un puente entre Japón y Chile",
};

export const CONTACT = {
  email: "marcossalas310@gmail.com",
  phone: "+56945585904",
  phoneDisplay: "+56 9 4558 5904",
  location: "Las Condes, Santiago de Chile",
};

const whatsappNumber = CONTACT.phone.replace(/[^\d]/g, "");
export const WHATSAPP_URL = `https://wa.me/${whatsappNumber}`;

// TODO: reemplazar por tu propio endpoint de Formspree (gratis en formspree.io)
// creando un formulario ahí y pegando el ID que te dan, ej: "https://formspree.io/f/abcdwxyz"
export const FORMSPREE_ENDPOINT = "https://formspree.io/f/REEMPLAZAR_ID";
