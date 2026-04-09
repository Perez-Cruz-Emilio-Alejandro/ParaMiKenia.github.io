/* --- TU CONFIGURACIÓN --- */
const diapositivas = [
    // FONDO ROSA + LALALAND
    { texto: 'Feliz Cumpleaños ni niña preciosa ❤️', fondo: 'rosa', musica: 'lalaland' },
    { texto: 'Hoy es un dia muy especial' },
    { texto: 'Hoy hace exactamente 7,670 días' },
    { texto: 'Nacio el amor de mi vida' },
    { texto: 'Tu corazon ha latido aproximadamente 750 millones de veces' },
    { texto: 'Y me alegra pensar que en los ultimos miles he estado en tu vida' },
    { texto: 'Hoy es un dia especial...' },
    { texto: 'Por que nacio la persona mas increible de este universo' },
    { texto: 'La mas hermosa...' },
    { texto: 'La mas bondadosa...' },
    { texto: 'La mas inteligente' },
    { texto: 'La mas dedicada...' },
    { texto: 'La mas interesante' },
    { texto: 'Eres mi persona favorita en este mundo' },
    { texto: 'Eres mi todo' },
    { texto: 'Eres mi mejor amiga...' },
    { texto: 'Mi confidente...' },
    { texto: 'Mi socia...' },
    { texto: 'Mi amante...' },
    { texto: 'Mi novia...' },
    { texto: 'Mi futura esposa ❤️' },
    { texto: 'Amo cada parte de ti' },
    { texto: 'Tu sonrisa' },
    { texto: 'Tus ojitos' },
    { texto: 'Tu cabello' },
    { texto: 'Tus labios' },
    { texto: 'Tu piel' },
    { texto: 'Pero todo eso ya lo sabias...' },

    

    // CAMBIO A AURORA FUEGOS + AKAZA
    { texto: 'Porque tú eres mi luz en cada universo.', fondo: 'fuegos', musica: 'akaza' },
    { texto: 'Hoy me detuve a pensar en todo el tiempo que ha pasado y en lo que somos' },
    { texto: 'A veces la distancia se siente mucho, me pesa no tenerte enfrente para decirte....' },
    { texto: 'Lo mucho que te amo, para llenarte de besos y caricias' },
    { texto: 'Pero tu amor trasciende cualquier distancia' },
    { texto: 'Porque incluso a 892km de distancia' },
    { texto: 'Me haces sentir el chico mas afortunado de este universo' },
    { texto: 'Recorreria esa distancia todos los dias, solo por un beso tuyo' },
    { texto: 'Porque me has hechizado en cuerpo y alma...' },
    { texto: 'Te amo' },
    { texto: 'Te amo..' },
    { texto: 'Te amo...' },
    { texto: 'No quiero volver a separarme de ti a partir de este momento' },
    { texto: 'En una vida en la que ya no veia sentido' },
    { texto: 'Llegaste tu a darle luz a toda esa oscuridad' },
    { texto: 'Ya no puedo ver un futuro en el que tu no estes a mi lado' },
    { texto: 'Porque tu eres mi sueño' },
    { texto: 'Eres todo lo que siempre imagine y muchisimo mas' },
    { texto: 'Preferiria un millon de veces...' },
    { texto: 'Esta vida contigo, que una eternidad sin ti ❤️' },
    { texto: 'Porque la verdad es que...' },
    { texto: 'Pase lo que pase...' },
    { texto: 'Te amo ❤️' },
    { texto: 'Te quería ayer...' },
    { texto: 'Te quiero hoy...' },
    { texto: 'Te he querido siempre y siempre te querré' },
    { texto: 'Y si algun dia me faltas...' },
    { texto: 'Me clavare un estaca en el corazón' },
    { texto: 'Porque esta vida no tiene sentido si no estas aqui conmigo' },
    { texto: 'Peleare por ti, te protegere...' },
    { texto: 'A como de lugar' },
    { texto: 'Porque tu eres mi hogar, mi luz' },
    { texto: 'He incluso siendo un demonio, seguire esperando tu regreso' },
    { texto: 'Eres el ; de mi codigo...' },
    { texto: 'Sin ti no funciono ❤️' },
    { texto: '(Y YA SE QUE PARA PYTHON NO APLICA)' },
    { texto: 'Pero yo soy mas de amarte a la antigua...' },
    { texto: 'Estare para ti' },
    { texto: 'Pase lo que pase' },
    { texto: 'Sin importar que tan dificil se ponga' },
    { texto: 'Sin importar lo que tenga que sacrificar' },
    { texto: 'En las buenas y en las malas' },
    { texto: 'Yo...' },


    { texto: 'Te amo para siempre...❤️' }
];

/* --- LÓGICA DE CONTROL --- */
let indiceActual = -1;
const musicLala = document.getElementById('music-lalaland');
const musicAkaza = document.getElementById('music-akaza');
const stage = document.getElementById('narrativa-stage');
const bgRosa = document.getElementById('bg-gradient-rosa');
const bgFuegos = document.getElementById('bg-gradient-fuegos');

let musicaIniciada = false;

document.addEventListener("click", () => {
    // SOLUCIÓN IPHONE: Desbloquear audios en el primer toque
    if (!musicaIniciada) {
        [musicLala, musicAkaza].forEach(m => {
            m.play().then(() => { 
                m.pause(); 
                m.currentTime = 0; 
                m.volume = 0; 
            }).catch(e => console.log("Audio lock:", e));
        });
        musicaIniciada = true;
    }
    avanzar();
});

function avanzar() {
    if (indiceActual < diapositivas.length - 1) {
        indiceActual++;
        const data = diapositivas[indiceActual];

        // Efecto visual de transición
        stage.style.opacity = 0;
        stage.style.transform = "scale(0.95)";

        setTimeout(() => {
            stage.innerHTML = `<h1 class="texto-centrado">${data.texto}</h1>`;

            // Cambio de Fondo
            if (data.fondo === 'rosa') {
                bgRosa.classList.add('active');
                bgFuegos.classList.remove('active');
            } else if (data.fondo === 'fuegos') {
                bgFuegos.classList.add('active');
                bgRosa.classList.remove('active');
            }

            // Cambio de Música con Crossfade
            if (data.musica === 'lalaland') {
                crossfade(null, musicLala);
            } else if (data.musica === 'akaza') {
                crossfade(musicLala, musicAkaza);
            }

            stage.style.opacity = 1;
            stage.style.transform = "scale(1)";
        }, 800);
    }
}

function crossfade(outAudio, inAudio) {
    if (outAudio && !outAudio.paused) {
        let fadeOut = setInterval(() => {
            if (outAudio.volume > 0.05) {
                outAudio.volume -= 0.05;
            } else {
                clearInterval(fadeOut);
                outAudio.pause();
            }
        }, 100);
    }

    if (inAudio) {
        inAudio.currentTime = 0;
        inAudio.volume = 0;
        inAudio.play();
        let fadeIn = setInterval(() => {
            if (inAudio.volume < 0.5) { // Volumen máximo 50%
                inAudio.volume += 0.05;
            } else {
                clearInterval(fadeIn);
            }
        }, 100);
    }
}