<script setup>
import { useRouter } from 'vue-router';

const router = useRouter();

const goToLogin = () => {
  router.push('/login');
};

const goToSignUp = () => {
  router.push('/signup');
};

const switchLanguage = () => {
  window.location.href = '';
};
</script>

<template>
  <body>
  <header class="header">
    <div class="logo">
      <img src="./img/oncontigologo.png" alt="logo-oncontigo">
    </div>
    <button class="hamburger" aria-label="Open Menu" onclick="displayMenu()">☰</button>
    <nav>
      <ul id="nav-links" class="nav-links">
        <li><a href="#about-us">About us</a></li>
        <li><a href="#members">Members</a></li>
        <li><a href="#services">Our Services</a></li>
        <li><a href="#plans">Plans</a></li>
        <li><a href="#testimonials">Testimonials</a></li>
      </ul>
    </nav>
    <ul class="nav-btn">
      <a class="btn switcher" onclick="location.href='#'"><button>EN/ES</button></a>
      <a class="btn" @click="goToLogin"><button>Login</button></a>
      <a class="btn" @click="goToSignUp"><button>Sign Up</button></a>
    </ul>
  </header>
  <main>
    <section class="full-width-image-section-1">
      <div class="column">
        <div class="square-to-app-web">
          <h1>WORKING FOR YOUR HEALTH</h1>
          <p>OnContigo will provide you <br><br>tools  and support to Navigate <br><br> your oncological journey.</p>
          <button onclick="location.href='https://onc-frontend-202401.web.app/'">Start with us</button>
        </div>
      </div>
      <div class="column">
        <div class="./img-logo-first">
          <img src="./img/icon-oncontigo.png" alt="logo-oncontigo" width="50%">
        </div>
      </div>
    </section>

    <section id="about-us" class="full-width-image-section-2">
      <div class="square-about-us">
        <h2>About us</h2>
        <h3>Our Vision</h3>
        <p>Is to lead the digital transformation <br><br>of the healthcare, creating a global <br><br>patient-centered ecosystem.</p>
        <h3>Our Mission</h3>
        <p>Is to spearhead healthcare’s digital <br><br> revolution,crafting a worldwide<br><br> patient-centric hub for cancer care.</p>

      </div>
    </section>


    <section id="members" class="full-width-image-section-3">
      <div class="square-members">
        <!-- Fila para el título -->
        <div class="members-title">
          <h2>Members</h2>
        </div>

        <!-- Fila para los miembros (primer fila de imágenes) -->
        <div class="members-row">
          <div class="member">
            <img src="./img/members/juan.png" alt="Juan Ramos">
            <p>Juan Ramos</p>
          </div>

          <div class="member">
            <img src="./img/members/alexandra.png" alt="Alexandra Ramos">
            <p>Alexandra Ramos</p>
          </div>
        </div>

        <!-- Fila para los miembros (segunda fila de imágenes) -->
        <div class="members-row">
          <div class="member">
            <img src="./img/members/gustavo.png" alt="Gustavo Pardo">
            <p>Gustavo Pardo</p>
          </div>
          <div class="member">
            <img src="./img/members/diego.png" alt="Diego Acuña">
            <p>Diego Acuña</p>
          </div>
          <div class="member">
            <img src="./img/members/renzo.png" alt="Renzo Ramos">
            <p>Renzo Ramos</p>
          </div>
        </div>
      </div>
    </section>
    <section id="services" class="full-width-image-section-4">
      <div class="square-our-services">
        <!-- Fila para el título -->
        <div class="services-title">
          <h2>Our Services</h2>
        </div>

        <!-- Segunda fila: Appointment Calendar -->
        <div class="services-row">
          <div class="service-image">
            <!-- La imagen aquí es meramente ilustrativa; reemplaza 'path-to-your-image' con la ruta correcta -->
            <img src="./img/services-clock.png" alt="Appointment Calendar">
          </div>
          <div class="service-text">
            <h3>Appointment Calendar</h3>
            <p>Keep track of your medical appointments with<br><br> our integrated calendar. Never miss an important<br><br>appointment again while you focus on your recovery.</p>
          </div>

        </div>

        <!-- Tercera fila: Medical Reminders -->
        <div class="services-row">
          <div class="service-text">
            <h3>Medical Reminders</h3>
            <p>Never forget to take your medication at the right time.<br><br> Set personalized reminders to ensure you follow your<br><br> medication regimen consistently and effectively.</p>
          </div>
          <div class="service-image">
            <!-- La imagen aquí es meramente ilustrativa; reemplaza 'path-to-your-image' con la ruta correcta -->
            <img src="./img/services-clock2.png" alt="Medical Reminders">
          </div>
        </div>
      </div>
    </section>
    <section class="full-width-image-section-5">
      <div class="square-our-services-2">

        <!-- Segunda fila: Appointment Calendar -->
        <div class="services-row">
          <div class="service-image">
            <!-- La imagen aquí es meramente ilustrativa; reemplaza 'path-to-your-image' con la ruta correcta -->
            <img src="./img/services-write.png" alt="Appointment Calendar">
          </div>
          <div class="service-text">
            <h3>Information Resources</h3>
            <p>Access a wide a range of reliable educational resources <br><br> on cancer and its treatment. Stay informed and be  <br><br>up-to date content backed by professionals.</p>
          </div>

        </div>

        <!-- Tercera fila: Medical Reminders -->
        <div class="services-row">
          <div class="service-text">
            <h3>View treatment period</h3>
            <p>You will be able to access information about you <br><br> treatment period, for example, the estimated time until<br><br>the next phase.</p>
          </div>
          <div class="service-image">
            <!-- La imagen aquí es meramente ilustrativa; reemplaza 'path-to-your-image' con la ruta correcta -->
            <img src="./img/services-write2.png" alt="Medical Reminders">
          </div>
        </div>
      </div>
    </section>
    <section id="plans" class="full-width-image-section-6">
      <table class="square-plans bg-soft-pink">
        <tr class="bg-soft-pink">
          <th>Plans</th>
          <th><img class="plan-img" src="./img/plan-basic.png" alt="Basic Plan"></th>
          <th><img class="plan-img" src="./img/plan-premium.png" alt="Premium Plan"></th>
          <th><img class="plan-img" src="./img/plan-pro-service.png" alt="Pro Plan"></th>
        </tr>
        <tr class="bg-strong-pink">
          <td>Access to information resources</td>
          <td class="text-center"><img class="check-img" src="./img/check.png" alt="Check"></td>
          <td class="text-center"><img class="check-img" src="./img/check.png" alt="Check"></td>
          <td class="text-center"><img class="check-img" src="./img/check.png" alt="Check"></td>
        </tr>
        <tr class="bg-soft-pink2">
          <td>Appointment Reminders</td>
          <td class="text-center"><img class="check-img" src="./img/check.png" alt="Check"></td>
          <td class="text-center"><img class="check-img" src="./img/check.png" alt="Check"></td>
          <td class="text-center"><img class="check-img" src="./img/check.png" alt="Check"></td>
        </tr>
        <tr class="bg-strong-pink">
          <td>Medication Reminders</td>
          <td class="text-center"><img class="check-img" src="./img/check.png" alt="Check"></td>
          <td class="text-center"><img class="check-img" src="./img/check.png" alt="Check"></td>
          <td class="text-center"><img class="check-img" src="./img/check.png" alt="Check"></td>
        </tr>
        <tr class="bg-soft-pink2">
          <td>Chat Access</td>
          <td class="text-center"><img class="check-img" src="./img/check.png" alt="Check"></td>
          <td class="text-center"><img class="check-img" src="./img/check.png" alt="Check"></td>
          <td class="text-center"><img class="check-img" src="./img/check.png" alt="Check"></td>
        </tr>
        <tr class="bg-strong-pink">
          <td>View treatment period</td>
          <td></td>
          <td class="text-center"><img class="check-img" src="./img/check.png" alt="Check"></td>
          <td class="text-center"><img class="check-img" src="./img/check.png" alt="Check"></td>
        </tr>
        <tr class="bg-soft-pink2">
          <td>Access to Personalized nutrition</td>
          <td></td>
          <td class="text-center"><img class="check-img" src="./img/check.png" alt="Check"></td>
          <td class="text-center"><img class="check-img" src="./img/check.png" alt="Check"></td>
        </tr>
        <tr class="bg-strong-pink">
          <td>Support Priority</td>
          <td></td>
          <td></td>
          <td class="text-center"><img class="check-img" src="./img/check.png" alt="Check"></td>
        </tr>
        <tr class="bg-soft-pink2">
          <td>Access to Oncoach</td>
          <td></td>
          <td></td>
          <td class="text-center"><img class="check-img" src="./img/check.png" alt="Check"></td>
        </tr>
      </table>
    </section>

    <section id="testimonials" class="full-width-image-section-7">
      <div class="square-testimonials">
        <!-- Título de la sección -->
        <h2 class="testimonials-title">Testimonials</h2>

        <!-- Testimonio 1 -->
        <div class="testimonial">
          <img src="./img/maria.png" alt="María S.">
          <div class="testimonial-text">
            <h3>María S.</h3>
            <p>OnContigo not only provided me with practical resources, but it also connected me with an incredible community of people who understand what I'm going through. Thank you for making a difference in my life.</p>
          </div>
        </div>

        <!-- Testimonio 2 -->
        <div class="testimonial">
          <img src="./img/ana.png" alt="Ana M.">
          <div class="testimonial-text">
            <h3>Ana M.</h3>
            <p>OnContigo has been my constant companion on this journey. It has provided me with hope, useful information, and, most importantly, a network of people who truly care.</p>
          </div>
        </div>

        <!-- Testimonio 3 -->
        <div class="testimonial">
          <img src="./img/javier.png" alt="Javier L.">
          <div class="testimonial-text">
            <h3>Javier L.</h3>
            <p>I want to express my deep gratitude to the OnContigo team for their unwavering support and commitment to the oncological community. They are true heroes.</p>
          </div>
        </div>
      </div>
    </section>
    <section class="full-width-image-section-8">
      <div class="square-call-to-action">
        <!-- Fila para la imagen -->
        <div class="call-to-action-image"></div> <!-- La imagen se establece en el CSS -->
        <!-- Fila para el título -->
        <h2 class="call-to-action-title">Don’t Wait Any Longer for the Support You Need</h2>
        <!-- Fila para el texto -->
        <p class="call-to-action-text">Unlock the support for your treatment today with OnContigo. Gain access to <br><br> Educational resources, practical tools, and a caring community.</p>
        <!-- Fila para el botón -->
        <button onclick="location.href='https://onc-frontend-202401.web.app/'" class="call-to-action-button">Join Now</button>
      </div>
    </section>
    <footer class="footer">
      <div class="footer-logo">
        <!-- Coloca aquí el logo de la empresa -->
        <img src="./img/oncontigologo.png" alt="OnContigo Logo">
      </div>
      <div class="footer-contact">
        <h4>Contacto</h4>
        <a href="https://www.facebook.com/" target="_blank">Facebook</a>
        <a href="https://www.instagram.com/" target="_blank">Instagram</a>
        <p>OnContigo@gmail.com</p>
        <p>976813458</p>
        <p>Lima-Perú</p>
      </div>
      <div class="footer-links">
        <h4>Enlaces</h4>
        <a href="#about-us">About us</a>
        <a href="#members">Members</a>
        <a href="#services">Our Services</a>
        <a href="#plans">Plans</a>
        <a href="#testimonials">Testimonials</a>
      </div>

    </footer>

  </main>
  </body>
</template>

<style scoped>
@import url('https://fonts.googleapis.com/css2?family=Nunito:wght@400;800&display=swap');

*{
  box-sizing: border-box;
  margin: 0;
  padding: 0;
  font-family: "League Spartan", sans-serif;
  font-size: 20px;
}

body {
  background-color: #ffffff;
  overflow-y: auto;
}

.header{
  background-color: #FF94B0;
  display: flex;
  justify-content: space-between;
  align-items: center;
  height: 85px;
  width: 100vw;
  z-index: 999;
  padding: 5px 10%;
  position: fixed;
}

.header .logo{
  cursor: pointer;
}

.header .logo img{
  height: 70px;
  width: auto;
  transition: all 0.3s;
}

.header .logo img:hover{
  transform: scale(1.2);
}
.main-row{
  display:flex;
}
.col{
  flex-grow:1;
  margin:0px 2px;
}
.bg-strong-pink{
  background-color: #FF94B0;
}
.header .nav-links{
  list-style: none;
}

.header .nav-links li{
  display: inline-block;
  padding: 0 20px;
}

.header .nav-links li:hover{
  transform: scale(1.1);
}

.header .nav-links a{
  font-size: 700;
  color: #eceff1;
  text-decoration: none;
}

.header .nav-links li a:hover{
  color: #f02a5f;
}


.header .nav-btn{
  list-style: none;
}

.header .nav-btn li{
  display: inline-block;
  padding: 0 20px;
}

.header .nav-btn li:hover{
  transform: scale(1.1);
}

.header .nav-btn a{
  font-size: 700;
  color: #eceff1;
  text-decoration: none;
}

.header .nav-btn li a:hover{
  color: #f02a5f;
}




.header .btn button{
  font-weight: 700;
  color: #ffffff;
  padding: 9px 25px;
  background: #4A547F;
  border: none;
  border-radius: 52px;
  cursor: pointer;
  transition: all 0.3s ease 0s;
}

.header .btn button:hover{
  background-color: #e2f1f8;
  color: #000000;
  transform: scale(1.1);
}


.hamburger {
  color: #ffffff;
  position: absolute;
  top: 6px;
  right: 10px;
  height: 2rem;
  width: 2rem;
  border: none;
  background: none;
  display: none;

}
@media (max-width: 1205px) {
  .hamburger {
    display: inline-block;
  }
  .nav-links, .nav-btn {
    display: none;
  }

  .nav-active {
    display: block;
    position: absolute;
    background-color: #ffffff;
    top: 85px;
    left: 0;
    right: 0;
    text-align: center;
  }

  .nav-links li, .nav-btn li {
    display: block;
    margin: 10px 0;
  }

  .nav-links a, .nav-btn a {
    display: block;
    color: #000000;
  }
}


/*SECTION 1 FULL IMAGE*/

.full-width-image-section-1 {
  position: relative;
  display: flex;
  background: url('img/image-landing2.png');
  background-size: cover;
  height: 962px;
  width: 100%;

}


.column {
  position: relative;
  flex: 1;
  display: flex;
  justify-content: center;
  align-items: center;
}

.square-to-app-web {
  width: 80%;
  height: 70%;
  background-color: #FFDCE5;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 20px;
  box-sizing: border-box;
  border-radius: 20px;
  padding-left: 50px;

}

.square-to-app-web h1 {
  color: #4A547F;
  font-weight:700;
  flex: 3;
  width: 100%;
  margin: 0;
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: left;
  font-size: 4.6em;
  padding-top:0.5em;
}


.square-to-app-web p {
  color: #000000;
  flex-basis: 0%;
  flex-grow: 5;
  align-self: stretch;
  display: flex;
  align-items: center;
  font-weight:400;
  text-align: left;
  font-size: 2em;
}

.square-to-app-web button {
  background-color: #95A8FF;
  color: #4A547F;
  font-weight: 800;
  border: none;
  padding: 10px 20px;
  border-radius: 20px;
  cursor: pointer;
  font-size: 1.5em;
  transition: background-color 0.3s ease;
  align-self: flex-start;
  flex-basis:10%;
  flex-grow: 0;

}

.img-logo-first{

  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
}


@media (max-width: 800px) {
  /* Hace que la sección tenga una disposición en columna */
  .full-width-image-section-1 {
    flex-direction: column-reverse;
    width: auto;
    height: auto;
  }

  /* Ajusta las columnas para que tomen el ancho completo en dispositivos más pequeños */
  .column {
    width: 100%;
    justify-content: center;
    align-items: center;
    padding: 20px 0;
  }


  .square-to-app-web {
    width: 70%;
    height: auto;
    padding: 20px;

    box-sizing: border-box;
    justify-content: center;
    text-align: center;
  }


  .square-to-app-web h1 {
    font-size: 1.5em;
    padding-top: 0.2em;;
    justify-content: center;
  }
  .square-to-app-web p {
    font-size: 1em;
    padding-top: 0.2em;
    justify-content: center;
  }
  .square-to-app-web button {
    font-size: 1em;
    padding: 5px 10px;
    justify-content: center;
  }


  .img-logo-first img {
    width: 50%;
    margin: 0 auto;
  }


}

/*SECTION 2 FULL IMAGE*/
.full-width-image-section-2 {
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
  background: url('img/image-landing-section-2.png');
  background-size: cover;
  height: 950px;
  width: 100%;
}

.square-about-us {
  background-color: #4A547F;
  width: 30%;
  min-width: 293px;
  height: 100%;
  display: flex;
  flex-direction: column;
  box-sizing: border-box;
}


.square-about-us h2 {
  flex: 1;
  margin: 0;
  font-size: 2em;
  color: white;
  display: flex;
  padding-top: 10%;
  align-items: center;
  justify-content: center;
}


.square-about-us h3 {
  flex: 1;
  margin: 0;
  font-size: 1.5em;
  color: white;
  display: flex;
  align-items: center;
  justify-content: center;
}


.square-about-us p {
  flex: 2;
  margin: 0;
  font-size: 1em;
  color: white;
  display: flex;
  align-items: center;
  justify-content: center;
  padding-right: 15%;
  padding-left: 15%;
}



/*SECTION 3*/
.full-width-image-section-3 {
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
  background: url('img/image-landing-section-3.png');
  background-size: cover;
  height: 800px;
  width: 100%;
}

.square-members {
  background-color: #95A8FF;
  width: 70%;
  height: 100%;
  display: flex;
  flex-direction: column;
  padding: 20px;
  box-sizing: border-box;
  gap: 20px;
}

.members-title {
  flex: 1;
  display: flex;
  justify-content: center;
  align-items: center;

}
.members-title h2 {

  font-weight: 700;
  font-size: 2em
}
.members-row {
  flex: 2;
  display: flex;
  justify-content: space-around;
  align-items: center;
  gap: 10px;
}

.member {

  flex: 1;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  text-align: center;
}
.member img {
  width: 250px;
  height: auto;
  border-radius: 5%;

}

.member p {

  width: 100%;
  padding-top: 1rem;
  font-weight: 600;
  overflow-wrap: break-word;

}
@media (max-width: 800px) {
  .square-members {
    width: 100%;
  }

  .member img {
    width: 90%;

  }
}

/*SECTION 4*/
.full-width-image-section-4 {
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
  background: url('img/image-landing-section-4.png');
  background-size: cover;
  height: 800px;
  width: 100%;
}
.square-our-services {
  background-color: #FFDCE5;
  width: 70%;
  height: 100%;
  display: flex;
  flex-direction: column;
  padding: 20px;
  box-sizing: border-box;
  gap: 20px;
}

.services-title  {
  flex: 1;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  text-align: center;

}
.services-title h2 {
  font-weight: 700;
  font-size: 2em;

}


.services-row {
  flex: 4;
  display: flex;
  justify-content:center;
  align-items: center;
  gap: 10px;


}

.service-text {
  flex: 5;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  text-align: center;


}
.service-text h3 {
  font-weight: 700;
  font-size: 1.5em;

}
.text-center{
  text-align: center;
}
.service-text p {
  padding: 1em;
  font-weight: 500;
}
.service-image {
  flex: 5;

  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

}

.service-image img {
  width: 70%;
  height: auto;
}

@media (max-width: 800px) {
  .full-width-image-section-4 {
    height: 120%;
  }

  .square-our-services {
    width: 100%;
  }
}
/*SECTION 5*/

.full-width-image-section-5 {
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
  background: url('img/image-landing-section-3.png');
  background-size: cover;
  height: 800px;
  width: 100%;
}
.square-our-services-2 {
  background-color:#95A8FF;
  width: 70%;
  height: 100%;
  display: flex;
  flex-direction: column;
  padding: 20px;
  box-sizing: border-box;
  gap: 20px;
}

@media (max-width: 800px) {
  .full-width-image-section-5 {
    height: 120%;
  }

  .square-our-services-2 {
    width: 100%;
  }
}

/*SECTION 6*/
.full-width-image-section-6 {
  justify-content: center;
  align-items: center;
  background: url('img/image-landing-section-4.png');
  background-size: cover;
  width: 100%;
  margin:0 auto;
}
.bg-soft-pink {
  background-color:#FFDCE5;
}
.bg-soft-pink2 {
  background-color:#FFBBCD;
}
.plan-img{
  background-size: cover;
  height: 100px;
  width: 100px;
  margin: 0 auto;
}
.check-img{
  background-size: cover;
  height: 50px;
  width: 50px;
  margin: 0 auto;

}
.square-plans{
  margin: 0 auto;
  padding-top:10px;
  padding-bottom:10px;
  padding-right: 20px;
  padding-left: 10px;
}
.plans-header {
  font-weight: bold;
  text-align: center;
  font-size: 1.5em;
  justify-content: center;
  align-items: center;
}

.plans-item, .plans-check {
  display: flex;
  align-items: center;
  justify-content: center;
}
.plans-item{
  justify-content: left;
}
.plans-header img{
  width: 100px;
  height: 100px;
  margin-right: 10px;

}
/* Estilos para las celdas que tienen la marca de verificación */
.plans-check img {
  width: 40%;
}

/*SECTION 7*/
.full-width-image-section-7{
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
  background: url('img/image-landing-section-3.png');
  background-size: cover;
  height: 800px;
  width: 100%;
}
.square-testimonials {
  display: grid;
  grid-template-rows: repeat(4, auto);
  gap: 20px;
  background-color: #95A8FF;
  padding: 20px;
  box-sizing: border-box;
  width: 70%;
  height: 100%;
  margin: auto;
}

.testimonials-title {
  grid-row: 1;
  text-align: center;
  font-size: 2em;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

}

.testimonial {
  display: flex;
  align-items: center;
  gap: 20px;
}

.testimonial img {
  border-radius: 50%;
  flex-basis: 40%;
  max-width: 200px;
  height: auto;
  object-fit: cover;
}

.testimonial-text {
  flex-basis: 60%;

}

.testimonial-text h3 {
  margin-top: 0;
  margin-bottom: 0.5em;
  font-size:1.4rem;

}


/* Responsive design */
@media (max-width: 800px) {
  .full-width-image-section-7{
    height: 200%;
  }

  .square-testimonials {
    width: 100%;
  }

  .testimonial {
    flex-direction: column;
    text-align: center;
  }

  .testimonial img {
    margin: 0 auto;
  }
}
/* SECTION 8 */

.full-width-image-section-8 {
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
  background: url('img/image-landing-section-4.png');
  background-size: cover;
  height: 800px;
  width: 100%;
}
.square-call-to-action {
  background-color:#FFDCE5;
  width: 70%;
  height: 100%;
  display: flex;
  flex-direction: column;
  padding: 20px;
  box-sizing: border-box;
  gap: 20px;
}
.call-to-action-image {
  flex-grow: 1;
  background: url('img/doctor-hands.png') no-repeat center center;
  background-size: cover;
  border-radius: 10px;
  width: 100%;
  height: 50%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center

}

.call-to-action-title {
  flex-grow: 1;
  text-align: center;
  margin: 0;
  color: #BB506C;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  font-size: 1.4em;
}

.call-to-action-text {
  flex-grow: 1;
  text-align: center;
  margin: 0;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
}

.call-to-action-button {
  flex-grow: 1;
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 10px 40px;
  background-color: #95A8FF;
  color: rgb(0, 0, 0);
  border: none;
  border-radius: 5px;
  cursor: pointer;
  max-width: 400px;
  margin: auto;
  text-align: center;
  box-shadow: 0px 4px 8px rgba(0, 0, 0, 0.1);
}


@media (max-width: 600px) {
  .square-call-to-action {
    width: 90%;
    padding: 10px;
  }

  .call-to-action-button {
    width: 100%;
  }
}

.footer {
  display: flex;
  justify-content: space-between;
  background-color: #2E5C9A;
  padding: 20px;
  color: white;
}

.footer-logo, .footer-contact, .footer-links {
  display: flex;
  flex-direction: column;
  justify-content: center;
}

.footer-rights {
  background-color: #243D6C;
  color: white;
  text-align: center;
  position: absolute;
  bottom: 0;
  width: 100%;
  padding: 10px 0;
}

.footer-logo img {
  max-width: 100px;
}

.footer-contact h4, .footer-links h4 {
  margin-bottom: 10px;
}

.footer-contact a, .footer-links a {
  color: white;
  text-decoration: none;
  margin-bottom: 5px;
}

.footer-contact a:hover, .footer-links a:hover {
  text-decoration: underline;
}

.footer-rights p {
  margin: 0;
  font-size: 0.9em;
}

/* Language Switch */

</style>