import React from 'react'

const About = () => {
  return (
    <div>
      <section className='section about'>
        <div className="container">

          <figure className="about-banner">
            <img src={require("../Assets/Images/about-banner.png")} width="470" height="538" loading="lazy" alt="about banner"
              className="w-100" />
          </figure>

          <div className="about-content">

            <p className="section-subtitle">About Us</p>

            <h2 className="h2 section-title">We Care For Your Dental Health</h2>

            <p className="section-text section-text-1">
              Aliquam ac sem et diam iaculis efficitur. Morbi in enim odio. Nullam quis volutpat est, sed dapibus
              sapien. Cras
              condimentum eu velit id tempor. Curabitur purus sapien, cursus sed nisl tristique, commodo vehicula arcu.
            </p>

            <p className="section-text">
              Aliquam erat volutpat. Aliquam enim massa, sagittis blandit ex mattis, ultricies posuere sapien. Morbi a
              dignissim enim.
              Fusce elementum, augue in elementum porta, sapien nunc volutpat ex, a accumsan nunc lectus eu lectus.
            </p>

            <a href="#" className="btn">Read more</a>

          </div>
        </div>
      </section>

      <section class="section doctor" aria-label="doctor">
        <div class="container">

          <p class="section-subtitle text-center">Our Doctor</p>

          <h2 class="h2 section-title text-center">Best Expert Dentist</h2>

          <ul class="has-scrollbar">

            <li class="scrollbar-item">
              <div class="doctor-card">

                <div class="card-banner img-holder">
                  <img src={require("../Assets/Images/doctor-1.png")} idth="460" height="500" loading="lazy" alt="Howard Holmes"
                    class="img-cover" />
                </div>

                <h3 class="h3">
                  <a href="#" class="card-title">Howard Holmes</a>
                </h3>

                <p class="card-subtitle">Dentist</p>

                <ul class="card-social-list">

                  <li>
                    <a href="#" class="card-social-link">
                      <ion-icon name="logo-facebook"></ion-icon>
                    </a>
                  </li>

                  <li>
                    <a href="#" class="card-social-link">
                      <ion-icon name="logo-twitter"></ion-icon>
                    </a>
                  </li>

                  <li>
                    <a href="#" class="card-social-link">
                      <ion-icon name="logo-instagram"></ion-icon>
                    </a>
                  </li>

                </ul>

              </div>
            </li>

            <li class="scrollbar-item">
              <div class="doctor-card">

                <div class="card-banner img-holder">
                  <img src={require("../Assets/Images/doctor-2.png")} idth="460" height="500" loading="lazy" alt="Ella Thompson"
                    class="img-cover" />
                </div>

                <h3 class="h3">
                  <a href="#" class="card-title">Ella Thompson</a>
                </h3>

                <p class="card-subtitle">Dentist</p>

                <ul class="card-social-list">

                  <li>
                    <a href="#" class="card-social-link">
                      <ion-icon name="logo-facebook"></ion-icon>
                    </a>
                  </li>

                  <li>
                    <a href="#" class="card-social-link">
                      <ion-icon name="logo-twitter"></ion-icon>
                    </a>
                  </li>

                  <li>
                    <a href="#" class="card-social-link">
                      <ion-icon name="logo-instagram"></ion-icon>
                    </a>
                  </li>

                </ul>

              </div>
            </li>

            <li class="scrollbar-item">
              <div class="doctor-card">

                <div class="card-banner img-holder">
                  <img src={require("../Assets/Images/doctor-3.png")} idth="460" height="500" loading="lazy" alt="Vincent Cooper"
                    class="img-cover" />
                </div>

                <h3 class="h3">
                  <a href="#" class="card-title">Vincent Cooper</a>
                </h3>

                <p class="card-subtitle">Dentist</p>

                <ul class="card-social-list">

                  <li>
                    <a href="#" class="card-social-link">
                      <ion-icon name="logo-facebook"></ion-icon>
                    </a>
                  </li>

                  <li>
                    <a href="#" class="card-social-link">
                      <ion-icon name="logo-twitter"></ion-icon>
                    </a>
                  </li>

                  <li>
                    <a href="#" class="card-social-link">
                      <ion-icon name="logo-instagram"></ion-icon>
                    </a>
                  </li>

                </ul>

              </div>
            </li>

            <li class="scrollbar-item">
              <div class="doctor-card">

                <div class="card-banner img-holder">
                  <img src={require("../Assets/Images/doctor-4.png")} idth="460" height="500" loading="lazy" alt="Danielle Bryant"
                    class="img-cover" />
                </div>

                <h3 class="h3">
                  <a href="#" class="card-title">Danielle Bryant</a>
                </h3>

                <p class="card-subtitle">Dentist</p>

                <ul class="card-social-list">

                  <li>
                    <a href="#" class="card-social-link">
                      <ion-icon name="logo-facebook"></ion-icon>
                    </a>
                  </li>

                  <li>
                    <a href="#" class="card-social-link">
                      <ion-icon name="logo-twitter"></ion-icon>
                    </a>
                  </li>

                  <li>
                    <a href="#" class="card-social-link">
                      <ion-icon name="logo-instagram"></ion-icon>
                    </a>
                  </li>

                </ul>

              </div>
            </li>

          </ul>

        </div>
      </section>



      <section class="section cta" aria-label="cta">
        <div class="container">

          <figure class="cta-banner">
            <img src={require("../Assets/Images/cta-banner.png")} width="1056" height="1076" loading="lazy" alt="cta banner"
              class="w-100" />
          </figure>

          <div class="cta-content">

            <p class="section-subtitle">Book Dentail Appointment</p>

            <h2 class="h2 section-title">We Are open And Welcoming Patients</h2>

            <a href="#" class="btn">Book appointment</a>

          </div>

        </div>
      </section>
    </div>
  )
}

export default About