import kollefaq from "@/public/kollefaq.jpg";
import klozer from "@/public/kolfaq.jpg";
import mybusinesspassion from "@/public/mybusiness-passion.jpg";

export const faqs = [
  {
    name: "lesfaqskolles",
    image: kollefaq,
    html: (faqs: any) => `  <div class="accordion">
    

          ${faqs
            .map(
              (faq: any, i: any) => `
    <div class="accordion-item">
      <button id="accordion-button-3" aria-expanded="${
        i === 0 ? "true" : "false"
      }"><span class="accordion-title">${
                faq.question
              }</span><span class="icon" aria-hidden="true"></span></button>
      <div class="accordion-content">
        <p>${faq.answer}</p>
      </div>
    </div>
    `
            )
            .join("\n")}

<!--END-->
  </div>
  `,
    css: `
   /********FAQ********/
  
      .accordion { 
        height: 500px; 
        padding: 0 10px;
        overflow-y: scroll;
        overflow-x: hidden; 
      }
      .accordion *{ 
        font-weight: 400; 
        font-family: "Sora", Sans-serif;
      }
      .accordion button{ 
          padding: 20px !important; 
          margin-bottom: 0; font-weight: 200 !important;
          border: none !important; 
          line-height: 1.4em;
      }
      .accordion p{font-weight: 300 !important;}
      .accordion-content a {color: black !important}

      
      .accordion button {
        position: relative;
        display: block;
        text-align: left;
        width: 100%;
        padding: 1em 0;
        color: black;
        font-size: 16px;
        border: none;
        background-color: transparent;
        outline: none;
        border-radius: 0;
        border-top-left-radius: 10px;
        border-top-right-radius: 10px;
        transition: background-color .3s;
      }
      .accordion button:hover, .accordion button:focus {
        cursor: pointer;
      }
      .accordion button:hover::after, .accordion button:focus::after {
        cursor: pointer;
      }
      .accordion button .accordion-title {
        padding: 1em 1.5em 1em 0;
        font-size: 18px !important;
        font-weight: 600 !important;

      }
      .accordion button .icon {
        display: inline-block;
        position: absolute;
        top: 13px;
        right: 0;
        width: 22px;
        height: 22px;
        color: black;
        background: transparent;
        transform: scale(1.2);
/*          border-radius: 5px;*/
      }
      .accordion button .icon::before {
        display: block;
        position: absolute;
        content: '';
        top: 9px;
        left: 0; right: 0;
        margin: auto;
        width: 10px;
        height: 2px;
        background: currentColor;
      }
      .accordion button .icon::after {
        display: block;
        position: absolute;
        content: '';
        top: 5px;
        left: 0; right: 0;
        margin: auto;
        width: 2px;
        height: 10px;
        background: currentColor;
      }
      .accordion button[aria-expanded='true'] .icon::after {
        width: 0;
      }
      .accordion button[aria-expanded='true']{ 
        color: black !important;
        font-size: 20px;
        font-weight: 700;
        background-color: var(--DS_PR_color_DS);
      }
      .accordion button[aria-expanded='true'] + .accordion-content {
        opacity: 1;
        max-height: 100%;
        -webkit-transition: all 200ms linear;
        transition: all 200ms linear;
        will-change: opacity, max-height;
        width: 100%;
        padding: 20px;
        padding-top: 0px;
        background:  var(--DS_PR_color_DS);
        border-bottom-left-radius: 10px;
        border-bottom-right-radius: 10px;
        margin-bottom: 0 !important;
      }
      span.accord {
          font-weight: bold;
      }
      .accordion-item{ margin-bottom: 30px; border-radius: 10px; }
      .accordion .accordion-content {
        opacity: 0;
        max-height: 0;
        overflow: hidden;
        -webkit-transition: opacity 200ms linear, max-height 200ms linear;
        transition: opacity 200ms linear, max-height 200ms linear;
        will-change: opacity, max-height;
      }
      .accordion .accordion-content p {
          color: black;
          font-size: 14px;
/*            font-family: Raleway;*/
          text-align: left;
          padding: 2px 10px;
      }
      .accordion::-webkit-scrollbar{ background: black; width: 3px; border-radius: 100px !important;} 
      .accordion::-webkit-scrollbar-thumb{ background-color: var(--DS_PR_color_DS); !important; border-radius: 100px !important; } 
      .accordion .accordion-content p a{ color: black !important; font-weight: 900 !important; }
      

      @media (min-width: 768px){ 
        .accordion-content {width: 100% !important;}
      }
      @media (max-width: 768px) { 
          .accordion-item{ margin-bottom: 20px !important  }
          body .accordion button .icon { transform: scale(.8); }
          .accordion button { width: 100% !important;}

          .accordion button .accordion-title{ font-size: 16px }
          .accordion .accordion-content p{ font-size: 14px }
      }

`,
    js: `<script src='https://code.jquery.com/jquery-3.2.1.min.js'></script>
<script>
  
  const items = document.querySelectorAll(".accordion button");
  function toggleAccordion() {
    const itemToggle = this.getAttribute('aria-expanded');
    for (i = 0; i < items.length; i++) {
      items[i].setAttribute('aria-expanded', 'false');
    }
    if (itemToggle == 'false') {
      this.setAttribute('aria-expanded', 'true');
    }
  }
  items.forEach(item => item.addEventListener('click', toggleAccordion));

</script>`,
  },

  {
    name: "lesfaqsklozer",
    image: klozer,
    html: (faqs: any) => `  <div class="accordion">
    

          ${faqs
            .map(
              (faq: any, i: any) => `
    <div class="accordion-item">
      <button id="accordion-button-3" aria-expanded="${
        i === 0 ? "true" : "false"
      }"><span class="accordion-title">${
                faq.question
              }</span><span class="icon" aria-hidden="true"></span></button>
      <div class="accordion-content">
        <p>${faq.answer}</p>
      </div>
    </div>
    `
            )
            .join("\n")}

<!--END-->
  </div>
  `,

    css: `/* FAQ */

@media (max-width: 769px) {
  [data-title="GF_Sec_FAQ_GF"] .elHeadline {
    text-align: center !important;
  }
}

.accordion {
  max-height: 456px;
  overflow-y: scroll;
}
.accordion * {
  font-weight: 400 !important;
}
.accordion button {
  padding: 10px !important;
  margin-bottom: 0;
  border-radius: 0 !important;
  font-weight: 200 !important;
}
.accordion button span {
}
.accordion p {
  font-weight: 300 !important;
}
.accordion-content a {
  color: white !important;
}
.accordion button {
  position: relative;
  display: block;
  text-align: left;
  width: 100%;
  padding: 1em 0;
  color: black;
  font-size: 18px;
  border: none;
  background: transparent;
  outline: none;
}
.accordion button:hover,
.accordion button:focus {
  cursor: pointer;
}
.accordion button:hover::after,
.accordion button:focus::after {
  cursor: pointer;
}
.accordion button .accordion-title {
  padding: 1em 1.5em 1em 0;
  font-size: 18px;
  font-weight: bold !important;
}
.accordion button .icon {
  display: inline-block;
  position: absolute;
  top: 11px;
  right: 0;
  width: 22px;
  height: 22px;
  color: white;
  background: black;
  transform: scale(1.2);
  border-radius: 5px;
}
.accordion button .icon::before {
  display: block;
  position: absolute;
  content: "";
  top: 9px;
  left: 0;
  right: 0;
  margin: auto;
  width: 10px;
  height: 2px;
  background: currentColor;
}
.accordion button .icon::after {
  display: block;
  position: absolute;
  content: "";
  top: 5px;
  left: 0;
  right: 0;
  margin: auto;
  width: 2px;
  height: 10px;
  background: currentColor;
}
/*        .accordion button[aria-expanded='true'] { color: var(--DS_PR_color_DS); }*/
.accordion button[aria-expanded="true"] .icon::after {
  width: 0;
}

.accordion button[aria-expanded="true"] {
  /* background: #7879db; */
  border-radius: 20px;
  color: var(--DS_SC_color_DS);
}
.accordion button[aria-expanded="true"] + .accordion-content {
  opacity: 1;
  max-height: 100%;
  -webkit-transition: all 200ms linear;
  transition: all 200ms linear;
  will-change: opacity, max-height;
  width: 100%;
  /* padding: 20px; */
  /* background: var(--DS_PR_color_DS); */
  border-radius: 20px;
  margin-bottom: 0 !important;
}
span.accord {
  font-weight: bold;
}
.accordion-item {
  margin-bottom: 30px;
  padding: 15px;
  border-bottom: 1px solid #3a3b41;
}
.accordion .accordion-content {
  opacity: 0;
  max-height: 0;
  overflow: hidden;
  -webkit-transition: opacity 200ms linear, max-height 200ms linear;
  transition: opacity 200ms linear, max-height 200ms linear;
  will-change: opacity, max-height;
}
.accordion .accordion-content p {
  color: black;
  font-size: 16px;
  text-align: left;
  padding: 2px 10px;
}
.accordion .accordion-content p::-webkit-scrollbar {
  background: var(--DS_PR_color_DS);
  width: 7px;
  border-radius: 100px !important;
}
.accordion .accordion-content p::-webkit-scrollbar-thumb {
  background-color: white !important;
  border-radius: 100px !important;
}
.accordion .accordion-content p a {
  color: var(--DS_PR_color_DS) !important;
  font-weight: 900 !important;
}

@media (min-width: 768px) {
  .accordion-content {
    width: 100% !important;
  }
}
@media (max-width: 768px) {
  .accordion-item {
    margin-bottom: 20px !important;
  }
  body .accordion button .icon {
    transform: scale(0.8);
  }
  .accordion button {
    width: 100% !important;
  }
  .accordion button .accordion-title {
    font-size: 16px;
  }
  .accordion .accordion-content p {
    font-size: 14px;
  }
}
`,

    js: `<script>
    const items = document.querySelectorAll(".accordion button");
  function toggleAccordion() {
    const itemToggle = this.getAttribute('aria-expanded');
    for (i = 0; i < items.length; i++) {
      items[i].setAttribute('aria-expanded', 'false');
    }
    if (itemToggle == 'false') {
      this.setAttribute('aria-expanded', 'true');
    }
  }
  items.forEach(item => item.addEventListener('click', toggleAccordion));
</script>`,
  },
  {
    name: "mybusiness-passion",
    image: mybusinesspassion,
    html: (faqs: any) => `  <div class="DS_FAQ_DS">
<div style="visibility: hidden; position: absolute; width: 0px; height: 0px;">
  <svg xmlns="http://www.w3.org/2000/svg">
    <symbol viewBox="0 0 24 24" id="expand-more">
      <path d="M16.59 8.59L12 13.17 7.41 8.59 6 10l6 6 6-6z"></path><path d="M0 0h24v24H0z" fill="none"></path>
    </symbol>
    <symbol viewBox="0 0 24 24" id="close">
      <path d="M19 6.41L17.59 5 12 10.59 6.41 5 5 6.41 10.59 12 5 17.59 6.41 19 12 13.41 17.59 19 19 17.59 13.41 12z"></path><path d="M0 0h24v24H0z" fill="none"></path>
    </symbol>
  </svg>
</div>

          ${faqs
            .map(
              (faq: any) => `<details>
  <summary>
    ${faq.question}
    <svg class="control-icon control-icon-expand" width="24" height="24" role="presentation"><use xmlns:xlink="http://www.w3.org/1999/xlink" xlink:href="#expand-more" ></use></svg>
    <svg class="control-icon control-icon-close" width="24" height="24" role="presentation"><use xmlns:xlink="http://www.w3.org/1999/xlink" xlink:href="#close" ></use></svg>
  </summary>
  <p>${faq.answer}</p>
</details>`
            )
            .join("\n")}

<!--END-->
  </div>
  `,
    css: `
    .DS_FAQ_DS details {
      width: 98%;
      min-height: 5px;
      max-width: 700px;
      padding: 25px 30px;
      margin: 0 auto;
      position: relative;
      font-size: 18px;
      border: 1px dashed white;
      border-radius: 15px;
      box-sizing: border-box;
      transition: all .3s;
      background-color: transparent;
      text-align: left
    }

    .DS_FAQ_DS details + details {
      margin-top: 20px;
    }

    .DS_FAQ_DS details[open] {
      min-height: 50px;
      background-color: var(--DS_SC_color_DS);
      box-shadow: 2px 2px 20px rgba(0,0,0,.2);
    }

    .DS_FAQ_DS details p {
      font-weight: 300;
      font-size: 18px;
      padding: 20px;
      color: black;
    }

    .DS_FAQ_DS details[open] summary, .DS_FAQ_DS details[open] p{ color: white }
    .DS_FAQ_DS summary {
        /*font-family: Visby Heavy !important;*/
      display: flex;
      justify-content: space-between;
      align-items: center;
      font-weight: 700;
      color: white;
      cursor: pointer;
      transition: all 0.5s
    }

    .DS_FAQ_DS summary:focus {
      outline: none;
    }

    .DS_FAQ_DS summary:focus::after {
      content: "";
      height: 100%;
      width: 100%;
      display: block;
      position: absolute;
      top: 0;
      left: 0;
      box-shadow: 0 0 0 2px var(--DS_SC_color_DS);
      border-radius: 15px;
    }

    .DS_FAQ_DS summary::-webkit-details-marker {
      display: none
    }

    .DS_FAQ_DS .control-icon {
        fill: white;
        transition: .3s ease;
        /*pointer-events: none;*/
        width: 30px !important;
        height: 30px !important;
        position: absolute;
        top: 0;
        bottom: 0;
        margin: auto;
        right: 10px;
    }

    .DS_FAQ_DS .control-icon-close {
      display: none;
    }

    .DS_FAQ_DS details[open] .control-icon-close {
      display: initial;
      transition: .3s ease;
    }

    .DS_FAQ_DS details[open] .control-icon-expand {
      display: none;
    }

    @media (max-width: 769px){
      .DS_FAQ_DS summary, .DS_FAQ_DS details p { font-size: 14px !important;}

    }
  `,
  },
];
