// //  Makes header have typing affect
// const data = ['Backend Development', 'Frontend Development', 'Sports', 'Fitness', 'Entrepreneurship'];
// const timePeriod = 2000;
// const contentArea = document.getElementById('type-effect');

// const rotateText = function changesTextOnHero(el, data, period) {
//   this.data = data;
//   this.el = el;
//   this.period = parseInt(period, 100) || 4000;
//   this.txt = '';
//   this.tick();
//   this.isDeleting = false;
// }

// rotateText.prototype.tick = function() {
//   let i = this.loopNum % this.data.length;
//   let fullText = this.data[i];

//   if (this.isDeleting) {
//     this.txt = fullText.substring(0, this.txt.length - 1);
//   } else {
//     this.txt = fullText.substring(0, this.txt.length + 1);
//   }

//   this.el.innerHTML = '<span class="wrap">'+this.txt+'</span>';

//   const that = this;
//   const delta = 150 - Math.random() * 100;

//   if (this.isDeleting) { delta /= 2; }

//   if (!this.isDeleting && this.txt === fullTxt) {
//     delta = this.period;
//     this.isDeleting = true;
//   } else if (this.isDeleting && this.txt === '') {
//     this.isDeleting = false;
//     this.loopNum++;
//     delta = 1000;
//   }

//   setTimeout(function() {
//     that.tick();
//   }, delta);
// };

// window.onload = function() {
//   const elements = document.getElementById('type-effect');
//   for (let i=0; i<data.length; i++) {
//     let toRotate = data[i];
//     let period = timePeriod;
//     if (toRotate) {
//       new rotateText(elements, toRotate, period);
//     }
//   }

//  // INJECT CSS
//  const css = document.createElement("style");
//  css.type = "text/css";
//  css.innerHTML = ".txt-rotate > .wrap { border-right: 0.08em solid #F26921 }";
//  document.body.appendChild(css);
// };

// rotateText