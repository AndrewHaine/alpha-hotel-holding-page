import { tsParticles } from 'tsparticles-engine';
import { loadSlim } from 'tsparticles-slim';
import './style.scss';

// Load in the background particles
loadSlim(tsParticles);

tsParticles
    .load('bubbles', {
        "autoPlay": true,
        "detectRetina": true,
        "fpsLimit": 60,
        "infection": {
          "cure": false,
          "delay": 0,
          "enable": false,
          "infections": 0,
          "stages": []
        },
        "particles": {
          "color": {
            "value": "#DF787A",
            "animation": {
              "enable": false,
            }
          },
          "move": {
            "angle": {
              "offset": 45,
              "value": 90
            },
            "attract": {
              "enable": false,
              "rotate": {
                "x": 3000,
                "y": 3000
              }
            },
            "direction": "right",
            "distance": 0,
            "enable": true,
            "gravity": {
              "acceleration": 9.81,
              "enable": false,
              "maxSpeed": 50
            },
            "outModes": {
              "default": "bounce"
            },
            "random": false,
            "size": false,
            "speed": 1.5,
            "straight": false,
          },
          "number": {
            "density": {
              "enable": true,
              "area": 800,
              "factor": 1000
            },
            "limit": 0,
            "value": 12
          },
          "reduceDuplicates": false,
          "shape": {
            "type": "circle"
          },
          "size": {
            "random": {
              "enable": true,
              "minimumValue": 5
            },
            "value": 50,
          }
        },
        "pauseOnBlur": false,
        "pauseOnOutsideViewport": true,
      })
    .then(particles => {
        particles?.init();
        console.log(particles);
    })
    .catch(e => console.error(e));

// Set the current date
const dateEl = document.querySelector('.footer__inner .date') as HTMLElement | null;;
if (dateEl) {
    dateEl.innerText = new Date().getFullYear().toString();
}
