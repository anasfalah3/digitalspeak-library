import thibautcryptobourse from "@/public/thibaut-crypto-bourse.jpg";
import smuslim from "@/public/smuslim.jpg";
import testi1 from "@/public/testi1.jpg";
import testi2 from "@/public/testi2.jpg";

export const testimonials = [
  {
    name: "testi2",
    image: testi2,
    html: `<div class="c-testimonials">
      <ul class="c-testimonials__items swiper-wrapper">
        <!-- CARD 1 -->
        <li class="c-testimonials__item c-card-testimonial swiper-slide">
          <div class="c-card-testimonial__profile">
            <img
              src="https://www.ats.hugo-salazar.com/wp-content/uploads/2023/04/zzor.jpeg"
              alt=""
              class="c-card-testimonial__image"
            />
          </div>

          <div class="c-card-testimonial__description">
            <span class="c-card-testimonial__job"> Bass @AmonTheSign </span>

            <div class="c-card-testimonial__author">Zzor</div>

            <div class="c-card-testimonial__excerpt">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Vitae
              aliquid ut, explicabo sit fugiat recusandae dolore omnis minus
              sequi incidunt aut doloribus minima soluta velit, nobis, est eos
              iste at!
            </div>

            <a
              href="https://www.linkedin.com/in/hugo-salazar/"
              class="c-card-testimonial__link"
              target="_blank"
            >
              More on Linkedin
            </a>
          </div>
        </li>

        <!-- CARD 2 -->
        <li class="c-testimonials__item c-card-testimonial swiper-slide">
          <div class="c-card-testimonial__profile">
            <img
              src="https://www.ats.hugo-salazar.com/wp-content/uploads/2023/04/pincho.jpeg"
              alt=""
              class="c-card-testimonial__image"
            />
          </div>

          <div class="c-card-testimonial__description">
            <span class="c-card-testimonial__job"> Vocals @Amon The Sign </span>

            <div class="c-card-testimonial__author">Amón Lopez</div>

            <div class="c-card-testimonial__excerpt">
              Asperiores tempora id corporis ab reiciendis enim odio expedita
              dolorum recusandae! Perspiciatis ullam commodi expedita veritatis,
              architecto molestiae tempora magni voluptas voluptatem. Facilis
              consequuntur vitae magnam magni? Corrupti, aperiam excepturi!
            </div>

            <a
              href="https://www.linkedin.com/in/hugo-salazar/"
              class="c-card-testimonial__link"
              target="_blank"
            >
              More on Linkedin
            </a>
          </div>
        </li>
      </ul>

      <div class="c-testimonials__pagination"></div>

      <div class="c-testimonials__arrows">
        <button class="c-testimonials__arrow-prev">Prev</button>
        <button class="c-testimonials__arrow-next">Next</button>
      </div>
    </div>`,
    css: `
      @import url("https://unpkg.com/swiper/swiper-bundle.min.css");

      .c-card-testimonial .c-card-testimonial__profile {
        width: 300px;
        flex-shrink: 0;
        height: 300px;
        border-radius: 20px;
        transform: translateX(-80px);
        overflow: hidden;
      }
      @media screen and (max-width: 768px) {
        .c-card-testimonial .c-card-testimonial__profile {
          transform: translateY(-50%);
          width: 90%;
        }
      }
      @media screen and (max-width: 576px) {
        .c-card-testimonial .c-card-testimonial__profile {
          width: 95%;
        }
      }
      @media screen and (max-height: 500px) and (min-width: 992px) {
        .c-card-testimonial .c-card-testimonial__profile {
          height: 270px;
        }
      }
      .c-card-testimonial
        .c-card-testimonial__profile
        .c-card-testimonial__image {
        width: 100%;
        height: 100%;
        object-fit: cover;
        border-radius: 20px;
        opacity: 0;
        transition: all 0.3s;
      }
      .c-card-testimonial .c-card-testimonial__description {
        padding-right: 25px;
      }
      @media screen and (max-width: 768px) {
        .c-card-testimonial .c-card-testimonial__description {
          margin-top: -80px;
          text-align: center;
          padding: 0 30px;
        }
      }
      @media screen and (max-width: 576px) {
        .c-card-testimonial .c-card-testimonial__description {
          padding: 0;
        }
      }
      .c-card-testimonial .c-card-testimonial__description > * {
        opacity: 0;
        transform: translateY(25px);
        transition: all 400ms;
      }
      .c-card-testimonial
        .c-card-testimonial__description
        .c-card-testimonial__job {
        color: var(--color-text-light);
      }
      .c-card-testimonial
        .c-card-testimonial__description
        .c-card-testimonial__author {
        margin: var(--spacing-base) 0 calc(var(--spacing-base) * 5);
        color: var(--color-text-dark);
        font-size: 24px;
        font-weight: 700;
      }
      .c-card-testimonial
        .c-card-testimonial__description
        .c-card-testimonial__excerpt {
        margin-bottom: 30px;
        color: var(--color-text-medium);
        line-height: 1.5em;
      }
      .c-card-testimonial
        .c-card-testimonial__description
        .c-card-testimonial__link {
        display: inline-flex;
        justify-content: center;
        padding: calc(var(--spacing-base) * 4) calc(var(--spacing-base) * 8);
        color: var(--color-light);
        background-color: var(--color-primary);
        border-radius: 50px;
        letter-spacing: 1px;
        box-shadow: var(--shadow-colored);
        text-transform: uppercase;
      }
      @media screen and (max-width: 576px) {
        .c-card-testimonial
          .c-card-testimonial__description
          .c-card-testimonial__link {
          width: 100%;
        }
      }

      .c-testimonials {
        width: 95%;
        position: relative;
        max-width: 800px;
        margin: auto;
        box-shadow: var(--shadow-base);
        padding: calc(var(--spacing-base) * 8);
        border-radius: 25px;
        height: 400px;
        background-color: var(--color-light);
        transition: all 300ms;
      }
      @media screen and (max-width: 992px) {
        .c-testimonials {
          max-width: 680px;
          height: 400px;
        }
      }
      @media screen and (max-width: 768px) {
        .c-testimonials {
          min-height: 500px;
          height: auto;
          margin: 180px auto;
        }
      }
      @media screen and (max-height: 500px) and (min-width: 992px) {
        .c-testimonials {
          height: 350px;
        }
      }
      .c-testimonials .c-testimonials__item {
        display: flex;
        align-items: center;
      }
      @media screen and (max-width: 768px) {
        .c-testimonials .c-testimonials__item {
          flex-direction: column;
        }
      }
      .c-testimonials
        .c-testimonials__item.swiper-slide-active
        .c-card-testimonial__profile
        .c-card-testimonial__image {
        opacity: 1;
        transition-delay: 300ms;
      }
      .c-testimonials
        .c-testimonials__item.swiper-slide-active
        .c-card-testimonial__description
        > * {
        opacity: 1;
        transform: none;
      }
      .c-testimonials
        .c-testimonials__item.swiper-slide-active
        .c-card-testimonial__description
        > *:nth-child(1) {
        transition-delay: 0.3s;
      }
      .c-testimonials
        .c-testimonials__item.swiper-slide-active
        .c-card-testimonial__description
        > *:nth-child(2) {
        transition-delay: 0.4s;
      }
      .c-testimonials
        .c-testimonials__item.swiper-slide-active
        .c-card-testimonial__description
        > *:nth-child(3) {
        transition-delay: 0.5s;
      }
      .c-testimonials
        .c-testimonials__item.swiper-slide-active
        .c-card-testimonial__description
        > *:nth-child(4) {
        transition-delay: 0.6s;
      }
      .c-testimonials
        .c-testimonials__item.swiper-slide-active
        .c-card-testimonial__description
        > *:nth-child(5) {
        transition-delay: 0.7s;
      }
      .c-testimonials
        .c-testimonials__item.swiper-slide-active
        .c-card-testimonial__description
        > *:nth-child(6) {
        transition-delay: 0.8s;
      }
      .c-testimonials
        .c-testimonials__item.swiper-slide-active
        .c-card-testimonial__description
        > *:nth-child(7) {
        transition-delay: 0.9s;
      }
      .c-testimonials
        .c-testimonials__item.swiper-slide-active
        .c-card-testimonial__description
        > *:nth-child(8) {
        transition-delay: 1s;
      }
      .c-testimonials
        .c-testimonials__item.swiper-slide-active
        .c-card-testimonial__description
        > *:nth-child(9) {
        transition-delay: 1.1s;
      }
      .c-testimonials
        .c-testimonials__item.swiper-slide-active
        .c-card-testimonial__description
        > *:nth-child(10) {
        transition-delay: 1.2s;
      }
      .c-testimonials
        .c-testimonials__item.swiper-slide-active
        .c-card-testimonial__description
        > *:nth-child(11) {
        transition-delay: 1.3s;
      }
      .c-testimonials
        .c-testimonials__item.swiper-slide-active
        .c-card-testimonial__description
        > *:nth-child(12) {
        transition-delay: 1.4s;
      }
      .c-testimonials
        .c-testimonials__item.swiper-slide-active
        .c-card-testimonial__description
        > *:nth-child(13) {
        transition-delay: 1.5s;
      }
      .c-testimonials
        .c-testimonials__item.swiper-slide-active
        .c-card-testimonial__description
        > *:nth-child(14) {
        transition-delay: 1.6s;
      }
      .c-testimonials
        .c-testimonials__item.swiper-slide-active
        .c-card-testimonial__description
        > *:nth-child(15) {
        transition-delay: 1.7s;
      }
      .c-testimonials .c-testimonials__pagination {
        position: absolute;
        top: 50%;
        right: calc(var(--spacing-base) * 5);
        bottom: auto !important;
        left: auto !important;
        width: 11px !important;
        text-align: center;
        z-index: 21;
        transform: translateY(-50%);
      }
      @media screen and (max-width: 768px) {
        .c-testimonials .c-testimonials__pagination {
          top: 205px;
          left: 50% !important;
          width: 100% !important;
          display: flex;
          align-items: center;
          justify-content: center;
          transform: translateX(-50%);
        }
      }
      .c-testimonials
        .c-testimonials__pagination.swiper-pagination-bullets
        .swiper-pagination-bullet {
        margin: 8px 0;
      }
      @media screen and (max-width: 768px) {
        .c-testimonials
          .c-testimonials__pagination.swiper-pagination-bullets
          .swiper-pagination-bullet {
          margin: 0 5px;
        }
      }
      .c-testimonials .c-testimonials__arrows {
        width: 100%;
        position: absolute;
        top: 100%;
        left: 0;
        margin-top: calc(var(--spacing-base) * 3);
        display: flex;
        justify-content: center;
      }
      @media screen and (min-width: 768px) {
        .c-testimonials .c-testimonials__arrows {
          justify-content: flex-end;
        }
      }
      .c-testimonials .c-testimonials__arrows .c-testimonials__arrow-next,
      .c-testimonials .c-testimonials__arrows .c-testimonials__arrow-prev {
        position: relative;
        margin-left: calc(var(--spacing-base) * 2);
        cursor: pointer;
        outline: 0;
        border: 0;
        color: var(--color-light);
        background-color: transparent;
        font-size: 16px;
        transition: color 300ms ease;
      }
      .c-testimonials
        .c-testimonials__arrows
        .c-testimonials__arrow-next::before,
      .c-testimonials
        .c-testimonials__arrows
        .c-testimonials__arrow-prev::before {
        content: "";
        position: absolute;
        top: 100%;
        left: 50%;
        right: 50%;
        height: 1px;
        background-color: var(--color-light);
        transition: all 250ms ease;
      }
      .c-testimonials
        .c-testimonials__arrows
        .c-testimonials__arrow-next:hover::before,
      .c-testimonials
        .c-testimonials__arrows
        .c-testimonials__arrow-prev:hover::before {
        left: 0;
        right: 0;
      }

      .swiper-container-horizontal > .swiper-pagination-bullets,
      .swiper-container-horizontal .swiper-pagination-custom,
      .swiper-container-horizontal .swiper-pagination-fraction {
        bottom: calc(var(--spacing-base) * 3);
        left: 0;
        width: 100%;
      }

      .swiper-pagination-bullet {
        display: block;
        width: 11px;
        height: 11px;
        border-radius: 11px;
        background: var(--color-bg-medium);
        transition: all 0.3s;
      }
      .swiper-pagination-bullet-active {
        height: calc(11px * 3);
        background: var(--color-primary);
      }
      @media screen and (max-width: 768px) {
        .swiper-pagination-bullet-active {
          height: 11px;
          width: calc(11px * 3);
        }
      }
    `,
    js: `
    // for better practice add scripts on the footer
    <script src="https://unpkg.com/swiper/swiper-bundle.min.js"></script>
    <script>
      var swiper = new Swiper(".c-testimonials", {
        spaceBetween: 30,
        effect: "fade",
        loop: true,
        mousewheel: {
          invert: false,
        },
        // autoHeight: true,
        pagination: {
          el: ".c-testimonials__pagination",
          clickable: true,
        },
        navigation: {
          nextEl: ".c-testimonials__arrow-next",
          prevEl: ".c-testimonials__arrow-prev",
        },
      });
    </script>`,
  },
  {
    name: "thibaut-crypto-bourse",
    image: thibautcryptobourse,
    html: `
  <div class="container Sl_container_v">
  <div class="FormationSl_v">
<div>
    <div class="ContForm_v">
        <div class="Form_Pic_v For_Ord_v">
            <div class="Form_Col1_v F_F1">
                <div>
                    <!-- <img src="https://images.clickfunnels.com/2d/8f2d14b3de4aa6861f744a856e5e6a/DS_Exs_V_8_I1_DS.png"> -->
                </div>
            </div>
        </div>
        <div class="Form_Content_v ">
            <div class="Form_Col_TT">
                <h3>Du 93 à Miami : Rêve accompli !</h3>
            </div>
            <div class="Form_Content_CC">
                <p>Malgré les difficultés imposées du <b>territoire ZEP,</b>  en <b>Banlieu</b> où j'ai grandi, je ne me suis pas laissé écrasé par le système des Élites.<br><br>Je me suis d'abord plié aux exigences du système pour obtenir mon <b>BAC +5</b> qui s'est achevé par un <b>licenciement économique.</b></p>
            </div>
        </div>
    </div>    
</div>
<div>
    <div class="ContForm_v">
        <div class="Form_Pic_v For_Ord_v">
            <div class="Form_Col1_v F_F2">
                <div>
                    <!-- <img src="https://images.clickfunnels.com/e0/5cdf1a9add4e73a5234ce98b31c3ba/DS_Exs_V_8_I2_DS.png">         -->
                </div>
            </div>
        </div>
        <div class="Form_Content_v ">
            <div class="Form_Col_TT">
                <h3>Lorem ipsum dolor</h3>
            </div>
            <div class="Form_Content_CC">
                <p>J'ai très vite compris qu'une crise frappait toujours les plus faibles et que je ne pouvais compter que sur <b>moi-même pour gagner de l'argent.</b><br><br>J'ai décidé de prendre mon avenir en main pour me former au trading sur le marché du <b>Forex.</b></p>
            </div>
        </div>
    </div>    
</div>
<div>
    <div class="ContForm_v">
        <div class="Form_Pic_v For_Ord_v">
            <div class="Form_Col1_v F_F3">
                <div>
                    <!-- <img src="https://images.clickfunnels.com/a8/b51a2e6e5c4b21bb01a39baa6a0a46/DS_Exs_V_8_I3_DS.png">         -->
                </div>
            </div>
        </div>
        <div class="Form_Content_v ">
            <div class="Form_Col_TT">
                <h3>Lorem ipsum dolor</h3>
            </div>
            <div class="Form_Content_CC">
                <p>Aujourd'hui je suis <b>multi-millionnaire</b> grâce au Trading, j'ai mis ma famille à l'abri, je parcours le monde entier en jet privé quand je le souhaite, je me suis offert les trois voitures de mes rêves, j'investit dans l'immobilier et la crypto... <b>Bref je suis passé d'une ZEP francaise à un GPP à de Floride (Ghetto Prioritaire pour Riche)</b></p>
            </div>
        </div>
    </div>    
</div>
  </div>
</div>
`,
    css: `



/*
    ____________________________________________________________________________________________________________

        Digital Speak | 2018 / 2022 Â© Toute reproduction interdite sans l'autorisation de l'auteur. 
        https://digitalspeak.agency/
    ____________________________________________________________________________________________________________
*/


 
    body .Sl_container_v{width: 100% !important; margin: auto !important; display: block !important; overflow: visible;}
    body .Sl_container_v [aria-live="polite"]{ padding: 0 !important;}

    .ContForm_v, .Sl_container_v div[aria-hidden="false"], .Sl_container_v div[aria-hidden="true"]{ 
        position: relative; 
        max-height: 85vh;
        opacity: 1 !important;
    }

    .FormationSl_v{ position: relative;}



    .FormationSl_v *{ z-index: 1;}


    .Form_Pic_v{ 
        position: relative;
        z-index: 3;
    }

    .Form_Content_CC{ display: table; }
    .Form_Col_1{ 
        width: 50%; display: inline-block; 
        margin: 20px auto;
        padding: 0 40px;
        vertical-align: top;
    }



    .Form_Col1_v, .Form_Col_1 { position: relative;}
   /* .Form_Col1_v:before, .Form_Col_1:before {
        content: '1'; font-family: Magdelin Black !important;
        display: block; font-size: 60em; line-height: 1.2; text-align: center;
        color: white; 
        position: absolute; top: -90px; left: -10%; margin: auto;
        text-shadow: 0 0 2px #2b2b2b;
        z-index: 0; transition: opacity 5s
    }
    .Form_Col1_v.F_Nico:before, .Form_Col_1:nth-of-type(2):before { content: '2'; }
    .Form_Col1_v.F_Ma:before, .Form_Col_1:nth-of-type(3):before { content: '3'; }
    .Form_Col_1:nth-of-type(4):before { content: '4'; }
   
    .Form_Col_1:before { 
        font-size: 12em; color: #bababa;
        top: 0; bottom: 0; left: 0;
        line-height: .9;
        opacity: .2; z-index: -1;
        transition: color .5s;
    }
    .Form_Col_1:hover:before { color: var(--DS_PR_color_DS);}
*/ 


    .Form_Col1_v img{ width: 700px !important; margin-bottom: -150px;}
    
    
    .Form_Content_CC{ margin-top: 45px; }
    .Form_Col_TT h2{ font-size: 65px; }
    .Form_Col_TT h2 b{ color: var(--DS_PR_color_DS); }
    .Form_Col_TT h3{ font-size: 28px; font-weight: 700 !important; color: var(--DS_PR_color_DS) }
    .Form_Col1_v h3, .Form_Col1_v h4{ position: relative;}  

    .Form_Col_1 h3, .Form_Col1_v h3{ font-size: 34px; }
    .Form_Col1_v h4{ font-size: 24px; color: var(--DS_PR_color_DS);} 
    .Form_Content_v p{ font-size: 22px; } 

    .Form_Col1_v{ margin: auto; text-align: center;}
    .Form_Col1_v div{ 
        width: 90%; min-height: 650px;
        position: relative; margin: auto !important;
        background: url(https://images.clickfunnels.com/2d/8f2d14b3de4aa6861f744a856e5e6a/DS_Exs_V_8_I1_DS.png) no-repeat;
    }
    .Form_Col1_v.F_F2 div{ 
        background: url(https://images.clickfunnels.com/e0/5cdf1a9add4e73a5234ce98b31c3ba/DS_Exs_V_8_I2_DS.png) no-repeat;
    }

    .Form_Col1_v.F_F3 div{ 
        background: url(https://images.clickfunnels.com/a8/b51a2e6e5c4b21bb01a39baa6a0a46/DS_Exs_V_8_I3_DS.png) no-repeat;
    }
    .Form_Col1_v div{
        background-size: cover !important;
        background-position: center !important;        
    }


    .FormationSl_v .ContForm_v{ display: table;}
    .Form_Pic_v, .Form_Content_v{ width: 50% !important; display: inline-block; vertical-align: middle;}

    .Form_Content_CC:before{
        content: ''; width: 8%; height: 2px; 
        margin-right: 7px;
        background: white;
        transform: translateY(12px);
    }
        


    .FormationSl_v .slick-slide.slick-active.slick-center{ opacity: 1 !important; }
    .FormationSl_v .slick-slide { opacity: .4 !important; transform: scale(0.8) !important;}
    .FormationSl_v .slick-slide.slick-active.slick-center .Form_Content_v{ opacity: 1 !important; }
    .FormationSl_v .slick-slide .Form_Content_v{ opacity: 0 !important; transition: opacity .3s;}







    @media (max-width: 1250px){
        .ContForm_v, .Sl_container_v div[aria-hidden="false"], .Sl_container_v div[aria-hidden="true"]{ max-height: 95vh;}
        .Form_Col_1{ padding: 0 10px; }
        .FormationSl_v .slick-prev{ right: 55% !important; }
        .Form_Content_CC{ margin-top: 5px; }

    }

    @media only screen and (min-width: 850px) and (max-width: 1150px){
        /*.Form_Pic_v{ width: 30% !important;}*/
        /*.Form_Content_v{ width: 70% !important;}*/
        .Form_Col1_v img{ width: 500px !important; margin-bottom: -80px;}
        .Form_Col1_v:before{ font-size: 30em; top: -10px;}
        .Form_Col_1:before{ font-size: 6em; }
        .Form_Col1_v h3{ font-size: 24px; }
        .Form_Col1_v h4{ font-size: 20px; }

        .FormationSl_v ul.slick-dots button{ width: 80px !important; height: 80px !important; }
    }

    @media (min-width: 850px){


        .FormationSl_v .ContForm_v{ padding: 0 !important; }
        .Sl_container_v div[aria-hidden="false"]:before, .Sl_container_v div[aria-hidden="true"]:before{ 
            transform: scale(1.5); 
        }
        .Sl_container_v div[aria-hidden="true"]:before{ display: none;}
        .Form_Pic_v{ width: 100%; }
        .Form_Pic_v img{ width: 100px; }
        .Form_Content_CC{ display: flex !important; align-items: start }
        .Form_Content_v p{ width: 90% !important; margin-bottom: 0 !important }
    }



    @media (max-width: 1150px){
        /*.FormationSl_v .slick-next{ bottom: 270px !important; }*/
        /*.FormationSl_v .slick-prev{ right: -2% !important; bottom: 320px !important;}*/
    }
    @media (max-width: 850px){
        .Sl_container_v{ padding: 0 !important; }
        .ContForm_v, .Sl_container_v .slick-slide{ opacity: 0 !important;}
        .ContForm_v, .Sl_container_v .slick-slide.slick-active, .FormationSl_v .slick-slide .Form_Content_v{ opacity: 1 !important;}

        .Form_Pic_v, .Form_Content_v, .Form_Col_1{ width: 100% !important; text-align: center !important;}

        .FormationSl_v .ContForm_v{ margin: -70px auto 0; height: auto; padding: 0 !important; }
        /*.FormationSl_v .Form_Content_CC{ display: flex; flex-direction: column-reverse;}*/
        .Form_Pic_v{ margin: 0 auto 30px; width: 100%;}
        .Form_Col1_v div{ /*width: 320px;*/ height: 400px }
        .Form_Content_v h1, .Form_Content_v h2, .Form_Content_v p{text-align: center !important;}
        .ContForm_v, .Sl_container_v div[aria-hidden="false"], .Sl_container_v div[aria-hidden="true"]{ max-height: inherit;}
        .Form_Col1_v img{ width: 300px !important; margin: auto; margin-bottom: -60px;}
        .Form_Col1_v:before{ font-size: 20em; right: 20%; }
        .Form_Col_1:before{ font-size: 7em; }

        .Form_Content_CC:before{ width: 200px; display: block !important; margin: 0 auto 30px !important }

        .Form_Col_TT h2, .Form_Col1_v h3{ font-size: 24px; }
        .Form_Col_1 h3{ font-size: 20px; }
        .Form_Col_TT h3{ font-size: 18px; }
        .Form_Col1_v h4, .Form_Content_v p{ font-size: 16px; }
        .FormationSl_v ul.slick-dots button{ width: 70px !important; height: 70px !important; }
        .FormationSl_v ul.slick-dots{ margin: auto !important; }

        .Sl_container_v .slick-track{ max-height: 150vh !important; }
        .FormationSl_v .slick-next, .FormationSl_v .slick-prev{ bottom: 350px !important}
        .FormationSl_v .slick-prev{ left: 0% !important; right: auto !important; }
        .FormationSl_v .slick-next{ right: 5% !important}
    }


    @media (max-width: 550px){

        /*.Form_Pic_v{ width: 100% !important;}*/

    }


    /************/
 
    .FormationSl_v ul.slick-dots{ 
        position: relative;
        width: fit-content;
        display: flex;
        align-content: center;
        justify-content: center;
        margin: 1% auto;
        margin-right: 60px;
        padding: 0;
        transform: translate(0px, -30px);

    }
    .FormationSl_v ul.slick-dots button  { 
        display: block; color: transparent; 
        width: 130px; height: 130px; 
        background: url(https://images.clickfunnels.com/2d/8f2d14b3de4aa6861f744a856e5e6a/DS_Exs_V_8_I1_DS.png) no-repeat; 
        border: 2px solid var(--DS_PR_color_DS); 
        opacity: .4; outline: none;
        transform: scale(.8); filter: grayscale(1);
        transition: height .3s, filter .3s, opacity .3s, transform .3s

    }
    .FormationSl_v ul.slick-dots li:nth-of-type(2) button  { 
        background: url(https://images.clickfunnels.com/e0/5cdf1a9add4e73a5234ce98b31c3ba/DS_Exs_V_8_I2_DS.png) no-repeat; 
    }
    .FormationSl_v ul.slick-dots li:nth-of-type(3) button  { 
        background: url(https://images.clickfunnels.com/a8/b51a2e6e5c4b21bb01a39baa6a0a46/DS_Exs_V_8_I3_DS.png) no-repeat; 
    }
    .FormationSl_v ul.slick-dots button  { 
        background-size: cover !important;
        background-position: center !important;
    }
    .FormationSl_v .slick-dots li{ list-style: none !important;}
    .FormationSl_v .slick-dots li.slick-active button{ opacity: 1; transform: scale(1); filter: none}

    /*.slick-slide.slick-active {opacity: 1 !important}*/
    .slick-slider {
        /*opacity: 12%;*/
        position: relative;
        display: block;
        box-sizing: border-box;
        user-select: none;
        -webkit-touch-callout: none;
        -khtml-user-select: none;
        -ms-touch-action: pan-y;
        touch-action: pan-y;
        -webkit-tap-highlight-color: transparent;
        transition: all 0.6s
    }
    .slick-list {
        position: relative;
        display: block;
        /*overflow: hidden;*/
        overflow: visible;
        margin: 0;
        padding: 0;
    }
    .slick-list:focus {
        outline: none;
    }
    .slick-list.dragging {
        cursor: pointer;
        cursor: hand;
    }
    .slick-slider .slick-track, .slick-slider .slick-list {
        transform: translate3d(0, 0, 0);
    }
    .slick-track {
        position: relative;
        top: 0;
        left: 0;
        display: block;
    }
    .slick-track:before, .slick-track:after {
        display: table;
        content: '';
    }
    .slick-track:after {
        clear: both;
    }
    .slick-loading .slick-track {
        visibility: hidden;
    }
    .FormationSl_v .slick-slide {
        display: none;
        float: left;
        height: 90%;
        min-height: 1px;
        /*box-shadow: 0 0 3px #d2d2d28c;*/
        /*margin: 2px 22px;*/
        margin: 2px 0;
      width:100%
    }

    .slick-slide img {
        display: block;
    }
    .slick-slide.slick-loading img {
        display: none;
    }
    .slick-slide.dragging img {
        pointer-events: none;
    }
    .slick-initialized .slick-slide {
        display: block;
    }
    .slick-loading .slick-slide {
        visibility: hidden;
    }
    .slick-vertical .slick-slide {
        display: block;
        height: auto;
        border: 1px solid transparent;
    }
    .slick-btn.slick-hidden {
        display: none;
    }
    .FormationSl_v .slick-prev, .FormationSl_v .slick-next {
        font-size: 0;
        line-height: 0;
        position: absolute;
        bottom: 90px;
        margin: auto;
        display: block;
        width: 20px !important;
        height: 20px !important;
        padding: 0;
        cursor: pointer;
        border: none;
        outline: none;
        background: transparent;
        z-index: 3;
    }
    .FormationSl_v .slick-prev:hover, .FormationSl_v .slick-prev:focus, .FormationSl_v .slick-next:hover, .FormationSl_v .slick-next:focus {
        color: transparent;
        outline: none;
        background: transparent;
    }
    .FormationSl_v .slick-prev:hover:before, .FormationSl_v .slick-prev:focus:before, .FormationSl_v .slick-next:hover:before, .FormationSl_v .slick-next:focus:before {
        opacity: 1;
    }
    .FormationSl_v .slick-prev:before, .FormationSl_v .slick-next:before {
        /*font-family: "FontAwesome";*/
        font-size: 25px;
        margin: auto !important;
        text-align: center;
        width: 0;
        display: block;
        line-height: 1;
        opacity: 1;
        color: #0029ff94;
        -webkit-font-smoothing: antialiased;
        -moz-osx-font-smoothing: grayscale;
    }
    .FormationSl_v .slick-prev {
        right: 42%;
    }
    .FormationSl_v .slick-prev:before, .FormationSl_v .slick-next:before { 
        width: fit-content; padding: 30%; color: transparent !important; 
        background-repeat: no-repeat !important; background-position: center !important; background-size: 30px !important;
        background-color: white !important; border-radius: 200px;
    }
    .FormationSl_v .slick-prev:before {
        content: "â‡¦";
        background: url(https://content.app-sources.com/s/05076940521218581/uploads/Images/DS_JN_Oi_5_AL_DS-0177060.png);
    }
    .FormationSl_v .slick-next {
        right: 0%;
    }
    .FormationSl_v .slick-next:before {
        content: "â‡¨";
        background: url(https://content.app-sources.com/s/05076940521218581/uploads/Images/DS_JN_Oi_5_AR_DS-0177060.png);
        background-color: var(--DS_PR_color_DS) !important;
        margin-left: 0 !important
    }
        @media (min-width: 768px) {
            .Sl_Head * {
                display: inline-block !important;
            }
        }
  @media (max-width: 768px) {
    .FormationSl_v{ width:100%; }
    /*.FormationSl_v div{ width:100%; }*/

  }
`,
    js: `

/*
    ____________________________________________________________________________________________________________

        Digital Speak | 2018 / 2022 © Toute reproduction interdite sans l'autorisation de l'auteur. 
        https://digitalspeak.agency/
    ____________________________________________________________________________________________________________
*/




jQuery(document).ready(function($){
	    $('.FormationSl_v').slick({
	        focusOnSelect: true,
	        dots: true,
	        centerMode: true,
	        slidesToShow: 1,
	        slidesToScroll: 1,
	        autoplay: true,
	        autoplaySpeed: 3500,
	        responsive: [{
	        	breakpoint: 850,
	        		settings:{
	        			slidesToShow: 1,
	            		centerMode: false,
	        			autoplay: false,
	        			autoplaySpeed: 15500
	        		}

	        }]
	    });
	    $(window).on('resize', function() {
	        $('.FormationSl_v').slick('resize');
	    });
})`,
  },
  {
    name: "smuslim",
    image: smuslim,
    html: `
  <div class="container Sl_containerVD">
  <div class="testiSlTTVid">
<div>
    <div class="TContTTVid">
        <div class="TT_ContentVid"> 
            <iframe src="https://player.vimeo.com/video/889007813?h=785157109b" width="100%" height="340" frameborder="0" allow="autoplay; fullscreen; picture-in-picture" allowfullscreen="" title="Video"></iframe>
        </div><br>
        <h4>Kevin</h4>
        <h5></h5>
    </div>    
</div>
<div>
    <div class="TContTTVid">
        <div class="TT_ContentVid"> 
            <iframe src="https://player.vimeo.com/video/889012813?badge=0&autopause=0&player_id=0&app_id=58479" width="100%" height="340" frameborder="0" allow="autoplay; fullscreen; picture-in-picture" allowfullscreen="" title="Video"></iframe>
        </div><br>
        <h4>Abou Youness</h4>
        <h5></h5>
    </div>    
</div>
<div>
    <div class="TContTTVid">
        <div class="TT_ContentVid"> 
            <iframe src="https://player.vimeo.com/video/889012727?badge=0&autopause=0&player_id=0&app_id=58479" width="100%" height="340" frameborder="0" allow="autoplay; fullscreen; picture-in-picture" allowfullscreen="" title="Video"></iframe>
        </div><br>
        <h4>Assim</h4>
        <h5></h5>
    </div>    
</div>
<div>
    <div class="TContTTVid">
        <div class="TT_ContentVid"> 
            <iframe src="https://player.vimeo.com/video/889007491?badge=0&autopause=0&player_id=0&app_id=58479" width="100%" height="340" frameborder="0" allow="autoplay; fullscreen; picture-in-picture" allowfullscreen="" title="Video"></iframe>
        </div><br>
        <h4>Yasser</h4>
        <h5></h5>
    </div>    
</div>
<div>
    <div class="TContTTVid">
        <div class="TT_ContentVid"> 
            <iframe width="100%" height="340" src="https://www.youtube.com/embed/-6xL0n2n6Ew?si=nL8jse6occY74BpR" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
        </div><br>
        <h4>Yasser</h4>
        <h5></h5>
    </div>    
</div>
<div>
    <div class="TContTTVid">
        <div class="TT_ContentVid"> 
            <iframe width="100%" height="340" src="https://www.youtube.com/embed/v7h_2qh3Zu8?si=dehJp-Y_S0IiuBz0" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
        </div><br>
        <h4>Oualid</h4>
        <h5></h5>
    </div>    
</div>
<div>
    <div class="TContTTVid">
        <div class="TT_ContentVid"> 
            <iframe width="100%" height="340" src="https://www.youtube.com/embed/x7b1V27rcVc?si=na3jLil2IDRHhAWL" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
        </div><br>
        <h4>Témoignages</h4>
        <h5></h5>
    </div>    
</div>
<div>
    <div class="TContTTVid">
        <div class="TT_ContentVid"> 
            <iframe width="100%" height="340" src="https://www.youtube.com/embed/kqz5gq0EaJQ?si=5vYf3wNsO9cVuRf8" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
        </div><br>
        <h4>Aassim</h4>
        <h5></h5>
    </div>    
</div>
  </div>
</div>
`,
    css: `
/*
    ____________________________________________________________________________________________________________

        Digital Speak | 2018 / 2022 Â© Toute reproduction interdite sans l'autorisation de l'auteur. 
        https://digitalspeak.agency/
    ____________________________________________________________________________________________________________
*/


 
    body .Sl_containerVD{width: 100% !important; margin: auto !important; display: block !important; overflow: visible;}


    /************/
/*

    .testiSlTTVid .TContTTVid{ 
        background:  -webkit-linear-gradient( 33deg, #c7b27b, #c7b27bc4);
        padding: 4% 0%;
        position: relative;
        color: white !important;
        border-radius: 5px
    }
*/
    
    .testiSlTTVid .slick-slide{ transform: scale(.9); opacity: .3; transition: transform .5s, opacity .5s; }
    .testiSlTTVid .slick-slide.slick-active.slick-center{ transform: scale(1); opacity: 1;}
    /*.testiSlTTVid .slick-slide:not(.slick-active) { opacity: 0;}*/

    .testiSlTTVid .TT_ContentVid { 
        /*display: grid; */
        position: relative; 
        margin: auto !important; 
        /*font-family: lato !important;*/
/*        padding: 10px 30px !important*/
    }
/*    .testiSlTTVid .TT_ContentVid:before {
        content: ''; width: 100%; height: 113%;
        position: absolute; top: -10px; left: 0; right: 0; margin: auto;
        background: url(https://images.clickfunnels.com/6c/53c93541ef4248acaa04da2f14303e/DS_BS_V_5_BK_DS.png) no-repeat !important;
        background-size: 100% 100% !important; background-position: center !important;
    }*/
    .testiSlTTVid .TT_ContentVid iframe { 
        width: 420px; height: 260px;
        margin: auto; 
        background: #ffffffe8;
        border-radius: 25px; 
        z-index: 1;
    }

    .testiSlTTVid .TContTTVid img{ width: 100px; margin: 15px auto 0 !important; display: block;}
    .testiSlTTVid .TContTTVid p{ margin-bottom: 2% !important; text-align: center !important; } 
    .testiSlTTVid .TContTTVid h4, .testiSlTTVid .TContTTVid h5{ 
        text-align: center !important;
        color: white !important;
    }
    .testiSlTTVid .TContTTVid h4{ 
        font-size: 18px; font-weight: 700;
        width: fit-content;
        margin: 0 auto !important; text-align: center; 
    }    
    .testiSlTTVid .TContTTVid h5{ 
        font-size: 16px; font-weight: 300;
        width: fit-content; /*color: black;*/
        margin: 10px auto 0 !important;
    }




    @media (min-width: 850px){
        .testiSlTTVid .TT_ContentVid{ width: fit-content; margin: auto;}
        .testiSlTTVid .TContTTVid h1{ width: 90% !important;}    
        .testiSlTTVid .TContTTVid p{ height: 110px !important; overflow-y: scroll; }
        .testiSlTTVid .TContTTVid p::-webkit-scrollbar{ background: #f45b0212; width: 7px; border-radius: 143px !important;} 
        .testiSlTTVid .TContTTVid p::-webkit-scrollbar-thumb{ background-color: #f45b02 !important; } 
    }



    @media (max-width: 1150px){
        .testiSlTTVid .TT_ContentVid iframe{ 
            width: 100%; max-width: 320px; 
            height: 220px; 
            margin: 0 auto -10px !important; 
            display: block;
        }
    }

    @media (max-width: 850px){
        .testiSlTTVid .slick-slide{ opacity: .1;}
        .testiSlTTVid .TContTTVid{ margin: 25px auto 0 !important; height: auto; }
        .testiSlTTVid .TT_ContentVid { padding: 0 !important;}
        .testiSlTTVid .TT_ContentVid:before { top: 0;}
/*        .testiSlTTVid .TT_ContentVid iframe{ 
            width: 100%; max-width: 320px; 
            height: auto; 
            margin: 0 auto -10px !important; 
            display: block;
        }*/
        .testiSlTTVid .TContTTVid h4{ font-size: 16px;}    
        .testiSlTTVid .TContTTVid h5{ margin-top: 3px !important; font-size: 14px;}
/*        .testiSlTTVid .slick-prev, .testiSlTTVid .slick-next { top: 37% !important;}*/
        
        body .testiSlTTVid .slick-prev, body .testiSlTTVid .slick-next { width: 40px !important; height: 40px !important; }
        body .testiSlTTVid .slick-prev:before, body .testiSlTTVid .slick-next:before{ background-size: 20px !important; }

    }


    @media (max-width: 450px){
        /*.testiSlTTVid .TT_ContentVid{  padding: 2% 2% 15%;}*/
        .testiSlTTVid .slick-prev{ left: 2% !important; }
        .testiSlTTVid .slick-next{ right: 2% !important; }
        body .testiSlTTVid .TT_ContentVid iframe{ height: auto !important; }
    }


    /************/
 
    .testiSlTTVid ul.slick-dots{ 
        display: none !important;
        /*display: flex;*/ margin: 1% auto; padding: 0; 
        width: 15%; /*position: absolute; top: -30px; left: -30px; right: 0; margin: auto; */
    }  
    .testiSlTTVid ul.slick-dots button  { 
        color: transparent; border-radius: 42px; width: 12px; height: 12px; 
        background: black; border: none; display: block; outline: none
    }
    .testiSlTTVid .slick-dots li{ list-style: none !important; margin: 10% !important}
    .testiSlTTVid .slick-dots li.slick-active button{ background: #f45b02;}

    /*.slick-slide.slick-active {opacity: 1 !important}*/
    .slick-slider {
        /*opacity: 12%;*/
        position: relative;
        display: block;
        box-sizing: border-box;
        user-select: none;
        -webkit-touch-callout: none;
        -khtml-user-select: none;
        -ms-touch-action: pan-y;
        touch-action: pan-y;
        -webkit-tap-highlight-color: transparent;
        transition: all 0.6s
    }
    .slick-list {
        position: relative;
        display: block;
        /*overflow: hidden;*/
        overflow: visible;
        margin: 0;
        padding: 0;
    }
    .slick-list:focus {
        outline: none;
    }
    .slick-list.dragging {
        cursor: pointer;
        cursor: hand;
    }
    .slick-slider .slick-track, .slick-slider .slick-list {
        transform: translate3d(0, 0, 0);
    }
    .slick-track {
        position: relative;
        top: 0;
        left: 0;
        display: block;
    }
    .slick-track:before, .slick-track:after {
        display: table;
        content: '';
    }
    .slick-track:after {
        clear: both;
    }
    .slick-loading .slick-track {
        visibility: hidden;
    }
    .slick-slide {
        display: none;
        float: left;
        height: 90%;
        min-height: 1px;
        /*box-shadow: 0 0 3px #d2d2d28c;*/
        /*margin: 2px 22px;*/
        margin: 2px 0;
      width:100%
    }

    .slick-slide img {
        display: block;
    }
    .slick-slide.slick-loading img {
        display: none;
    }
    .slick-slide.dragging img {
        pointer-events: none;
    }
    .slick-initialized .slick-slide {
        display: block;
    }
    .slick-loading .slick-slide {
        visibility: hidden;
    }
    .slick-vertical .slick-slide {
        display: block;
        height: auto;
        border: 1px solid transparent;
    }
    .slick-btn.slick-hidden {
        display: none;
    }
    .testiSlTTVid .slick-prev, .testiSlTTVid .slick-next {
        font-size: 0;
        line-height: 0;
        position: absolute;
        top: 0;
        bottom: 0;
        margin: auto;
        display: block;
        width: 60px !important;
        height: 60px !important;
        padding: 0;
        transform: translate(0, -50%);
        cursor: pointer;
        border: none;
        outline: none;
        background: transparent;
    }
    .testiSlTTVid .slick-prev:hover, .testiSlTTVid .slick-prev:focus, .testiSlTTVid .slick-next:hover, .testiSlTTVid .slick-next:focus {
        color: transparent;
        outline: none;
        background: transparent;
    }
    .testiSlTTVid .slick-prev:hover:before, .testiSlTTVid .slick-prev:focus:before, .testiSlTTVid .slick-next:hover:before, .testiSlTTVid .slick-next:focus:before {
        opacity: 1;
    }
    .testiSlTTVid .slick-prev:before, .testiSlTTVid .slick-next:before {
        /*font-family: "FontAwesome";*/
        font-size: 25px;
        margin: auto !important;
        text-align: center;
        width: 0;
        display: block;
        line-height: 1;
        opacity: 1;
        color: #0029ff94;
        -webkit-font-smoothing: antialiased;
        -moz-osx-font-smoothing: grayscale;
    }
    .testiSlTTVid .slick-prev {
        left: 0%;
    }
    .testiSlTTVid .slick-prev:before, .testiSlTTVid .slick-next:before { 
        width: fit-content; padding: 30%; color: transparent !important; 
        background-repeat: no-repeat !important; background-position: center !important; background-size: 25px !important;
        filter: invert(1) grayscale(1) brightness(200);
    }
    .testiSlTTVid .slick-prev:before {
        content: "â‡¦";
        background: url(https://images.clickfunnels.com/6a/03b048bbeb48918a36f8721b2f6647/5_SL_L.png);
    }
    .testiSlTTVid .slick-next {
        right: 0%;
    }
    .testiSlTTVid .slick-next:before {
        content: "â‡¨";
        background: url(https://images.clickfunnels.com/ec/01e16d123746d286ffc07315c2d433/5_SL_R.png);
        margin-left: 0 !important
    }
        @media (min-width: 768px) {
            .Sl_Head * {
                display: inline-block !important;
            }
        }
  @media (max-width: 768px) {
    .testiSlTTVid{ width:100%; }
    /*.testiSlTTVid div{ width:100%; }*/

  }
`,
    js: `
jQuery(document).ready(function($){
	    $('.testiSlTTVid').slick({
	        focusOnSelect: true,
	        dots: false,
	        centerMode: true,
	        slidesToShow: 1,
	        slidesToScroll: 1,
	        autoplay: true,
	        autoplaySpeed: 5500,
	        responsive: [{
	            
	        	breakpoint: 450,
				settings: "unslick"	        
			}]
	    });
	    $(window).on('resize', function() {
	        $('.testiSlTTVid').slick('resize');
	    });
})`,
  },
  {
    name: "testi1",
    image: testi1,
    html: `
    <div class="slider">
      <input type="radio" name="testimonial" id="t-1" />
      <input type="radio" name="testimonial" id="t-2" />
      <input type="radio" name="testimonial" id="t-3" checked />
      <input type="radio" name="testimonial" id="t-4" />
      <input type="radio" name="testimonial" id="t-5" />
      <div class="testimonials">
        <label class="item" for="t-1">
          <img src="https://dummyimage.com/150" alt="picture" />
          <p>
            "Raw denim you probably haven't heard of them jean short austin.
            Nesciunt tofu stumptown aliqua, retro synth master cleanse."
          </p>
          <h2>- Princy, Web Developer</h2>
        </label>
        <label class="item" for="t-2">
          <img src="https://dummyimage.com/150" alt="picture" />
          <p>
            "Raw denim you probably haven't heard of them jean short austin.
            Nesciunt tofu stumptown aliqua, retro synth master cleanse."
          </p>
          <h2>- Princy, Web Developer</h2>
        </label>
        <label class="item" for="t-3">
          <img src="https://dummyimage.com/150" alt="picture" />
          <p>
            "Raw denim you probably haven't heard of them jean short austin.
            Nesciunt tofu stumptown aliqua, retro synth master cleanse."
          </p>
          <h2>- Princy, Web Developer</h2>
        </label>
        <label class="item" for="t-4">
          <img src="https://dummyimage.com/150" alt="picture" />
          <p>
            "Raw denim you probably haven't heard of them jean short austin.
            Nesciunt tofu stumptown aliqua, retro synth master cleanse."
          </p>
          <h2>- Princy, Web Developer</h2>
        </label>
        <label class="item" for="t-5">
          <img src="https://dummyimage.com/150" alt="picture" />
          <p>
            "Raw denim you probably haven't heard of them jean short austin.
            Nesciunt tofu stumptown aliqua, retro synth master cleanse."
          </p>
          <h2>- Princy, Web Developer</h2>
        </label>
      </div>
      <div class="dots">
        <label for="t-1"></label>
        <label for="t-2"></label>
        <label for="t-3"></label>
        <label for="t-4"></label>
        <label for="t-5"></label>
      </div>
    </div>
  `,
    css: `
     .slider {
        width: 100%;
      }
      .slider input {
        display: none;
      }
      .testimonials {
        display: flex;
        align-items: center;
        justify-content: center;
        position: relative;
        min-height: 350px;
        perspective: 1000px;
        overflow: hidden;
      }
      .testimonials .item {
        width: 450px;
        padding: 30px;
        border-radius: 5px;
        background-color: #0a0220;
        position: absolute;
        top: 0;
        box-sizing: border-box;
        text-align: center;
        transition: transform 0.4s;
        box-shadow: 0 0 10px rgba(0, 0, 0, 0.3);
        user-select: none;
        cursor: pointer;
      }
      .testimonials .item img {
        width: 100px;
        height: 100px;
        object-fit: cover;
        border-radius: 50%;
        border: 13px solid #3b344d;
      }
      .testimonials .item p {
        color: #ddd;
      }
      .testimonials .item h2 {
        font-size: 14px;
      }
      .dots {
        display: flex;
        justify-content: center;
        align-items: center;
      }
      .dots label {
        height: 5px;
        width: 5px;
        border-radius: 50%;
        cursor: pointer;
        background-color: #413b52;
        margin: 7px;
        transition-duration: 0.2s;
      }

      #t-1:checked ~ .dots label[for="t-1"],
      #t-2:checked ~ .dots label[for="t-2"],
      #t-3:checked ~ .dots label[for="t-3"],
      #t-4:checked ~ .dots label[for="t-4"],
      #t-5:checked ~ .dots label[for="t-5"] {
        transform: scale(2);
        background-color: #fff;
      }
      #t-1:checked ~ .dots label[for="t-2"],
      #t-2:checked ~ .dots label[for="t-1"],
      #t-2:checked ~ .dots label[for="t-3"],
      #t-3:checked ~ .dots label[for="t-2"],
      #t-3:checked ~ .dots label[for="t-4"],
      #t-4:checked ~ .dots label[for="t-3"],
      #t-4:checked ~ .dots label[for="t-5"],
      #t-5:checked ~ .dots label[for="t-4"] {
        transform: scale(1.5);
      }
      #t-1:checked ~ .testimonials label[for="t-5"] {
        transform: translate3d(1200px, 0, -360px) rotateY(-45deg);
      }
      #t-1:checked ~ .testimonials label[for="t-4"],
      #t-2:checked ~ .testimonials label[for="t-5"] {
        transform: translate3d(900px, 0, -270px) rotateY(-35deg);
        z-index: 1;
      }
      #t-1:checked ~ .testimonials label[for="t-3"],
      #t-2:checked ~ .testimonials label[for="t-4"],
      #t-3:checked ~ .testimonials label[for="t-5"] {
        transform: translate3d(600px, 0, -180px) rotateY(-25deg);
        z-index: 2;
      }
      #t-1:checked ~ .testimonials label[for="t-2"],
      #t-2:checked ~ .testimonials label[for="t-3"],
      #t-3:checked ~ .testimonials label[for="t-4"],
      #t-4:checked ~ .testimonials label[for="t-5"] {
        transform: translate3d(300px, 0, -90px) rotateY(-15deg);
        z-index: 3;
      }
      #t-2:checked ~ .testimonials label[for="t-1"],
      #t-3:checked ~ .testimonials label[for="t-2"],
      #t-4:checked ~ .testimonials label[for="t-3"],
      #t-5:checked ~ .testimonials label[for="t-4"] {
        transform: translate3d(-300px, 0, -90px) rotateY(15deg);
        z-index: 3;
      }
      #t-3:checked ~ .testimonials label[for="t-1"],
      #t-4:checked ~ .testimonials label[for="t-2"],
      #t-5:checked ~ .testimonials label[for="t-3"] {
        transform: translate3d(-600px, 0, -180px) rotateY(25deg);
      }
      #t-5:checked ~ .testimonials label[for="t-2"],
      #t-4:checked ~ .testimonials label[for="t-1"] {
        transform: translate3d(-900px, 0, -270px) rotateY(35deg);
      }
      #t-5:checked ~ .testimonials label[for="t-1"] {
        transform: translate3d(-1200px, 0, -360px) rotateY(45deg);
      }
      #t-1:checked ~ .testimonials label[for="t-1"],
      #t-2:checked ~ .testimonials label[for="t-2"],
      #t-3:checked ~ .testimonials label[for="t-3"],
      #t-4:checked ~ .testimonials label[for="t-4"],
      #t-5:checked ~ .testimonials label[for="t-4"],
      #t-5:checked ~ .testimonials label[for="t-5"] {
        z-index: 4;
      }
    `,
  },
];
