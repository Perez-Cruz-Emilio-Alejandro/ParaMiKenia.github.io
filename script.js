/* --- CONFIGURACIÓN DE PARTÍCULAS --- */
particlesJS("particles-js", {
  "particles": {
    "number": { "value": 40, "density": { "enable": true, "value_area": 800 } },
    "color": { "value": ["#ffffff", "#ffd700", "#ff00ff"] },
    "opacity": { "value": 0.4, "random": true },
    "size": { "value": 2, "random": true },
    "line_linked": { "enable": false },
    "move": { "enable": true, "speed": 0.5, "direction": "none", "random": true, "out_mode": "out" }
  }
});

/* --- TU NARRATIVA (Edita aquí tus frases) --- */
const diapositivas = [
    // --- ACTO I: EL REFUGIO ---
    { tipo: 'soloTexto', contenido: 'Hola, mi amor' },
    { tipo: 'soloTexto', contenido: 'He creado este lugar solo para ti', musica: true },
    { tipo: 'soloTexto', contenido: 'Para que puedas venir cuando quieras' },
    { tipo: 'soloTexto', contenido: 'Cuando te sientas decaída' },
    { tipo: 'soloTexto', contenido: 'Cuando estés feliz' },
    { tipo: 'soloTexto', contenido: 'Cuando quieras sentirte amada' },
    { tipo: 'soloTexto', contenido: 'Cuando me extrañes' },
    { tipo: 'soloTexto', contenido: 'Cuando dudes de ti misma' },
    { tipo: 'soloTexto', contenido: 'Cuando quieras un respiro' },
    { tipo: 'soloTexto', contenido: 'O cuando dudes de mi amor por ti' },
    { tipo: 'soloTexto', contenido: 'Porque este lugar' },
    { tipo: 'soloTexto', contenido: 'Es todo lo que me haces sentir, porque...' },

    // --- ACTO II: LO INEFABLE ---
    { tipo: 'soloTexto', contenido: 'Soy el hombre más afortunado del mundo' },
    { tipo: 'soloTexto', contenido: 'Por haber tenido la suerte de cruzar mi camino con un ángel' },
    { tipo: 'soloTexto', contenido: 'Con la persona más espectacular que existe' },
    { tipo: 'soloTexto', contenido: 'Las palabras no me bastan para describir todo lo que veo en ti' },
    { tipo: 'soloTexto', contenido: 'Eres simplemente... inefable' },
    { tipo: 'soloTexto', contenido: 'Me haces sentir dentro de un sueño' },
    { tipo: 'soloTexto', contenido: 'Pero ni en mi mejor sueño podría haber imaginado' },
    { tipo: 'soloTexto', contenido: 'A alguien tan perfecta como tú preciosa' },
    { tipo: 'soloTexto', contenido: 'Te miro y siento que eres etérea' },
    { tipo: 'soloTexto', contenido: 'Como si pertenecieras a otro plano de luz' },
    { tipo: 'soloTexto', contenido: 'Aveces me pregunto si un mortal como yo' },
    { tipo: 'soloTexto', contenido: 'Es digno de estar con una diosa tan majestuosa como tu' },
    { tipo: 'soloTexto', contenido: 'Porque eres simplemente perfecta' },
    // --- ACTO III: FLASHAZOS ---
    { tipo: 'soloTexto', contenido: 'Amo cada matiz de tu ser' },
    { tipo: 'soloTexto', contenido: 'Amo tu sonrisa' },
    { tipo: 'soloTexto', contenido: 'Amo tu personalidad' },
    { tipo: 'soloTexto', contenido: 'Amo tu forma de amar' },
    { tipo: 'soloTexto', contenido: 'Amo tu risa' },
    { tipo: 'soloTexto', contenido: 'Amo tu voz' },
    { tipo: 'soloTexto', contenido: 'Amo tus bromas' },
    { tipo: 'soloTexto', contenido: 'Amo que me molestes' },
    { tipo: 'soloTexto', contenido: 'Amo cuando te enojas, aunque sea de broma' },
    { tipo: 'soloTexto', contenido: 'Amo tu forma de ver la vida' },
    { tipo: 'soloTexto', contenido: 'Amo tu inteligencia' },
    { tipo: 'soloTexto', contenido: 'Amo tu determinación' },
    { tipo: 'soloTexto', contenido: 'Amo cuando te enojas en la Valorant' },
    { tipo: 'soloTexto', contenido: 'Amo cuando hablas de ti' },
    { tipo: 'soloTexto', contenido: 'Amo la nobleza de tus miedos' },
    { tipo: 'soloTexto', contenido: 'Amo la elegancia de tus sueños' },
    { tipo: 'soloTexto', contenido: 'Amo absolutamente cada átomo que te compone' },


    // --- ACTO IV: FORTALEZA ---
    { tipo: 'soloTexto', contenido: 'Tienes el corazón más sincero que he conocido' },
    { tipo: 'soloTexto', contenido: 'El mas puro, el mas precioso' },
    { tipo: 'soloTexto', contenido: 'Tu alma es pura y hermosa' },
    { tipo: 'soloTexto', contenido: 'Es tierna e inocente' },
    { tipo: 'soloTexto', contenido: 'Y por eso quiero protegerte' },
    { tipo: 'soloTexto', contenido: 'Aunque no lo necesitas porque' },
    { tipo: 'soloTexto', contenido: 'Eres una niña muy valiente' },
    { tipo: 'soloTexto', contenido: 'Muy fuerte' },
    { tipo: 'soloTexto', contenido: 'A pesar de que te han dañado, sigues adelante' },
    { tipo: 'soloTexto', contenido: 'Sigues sanando, sigues caminando...' },
    { tipo: 'soloTexto', contenido: 'Cada día te desafías y te superas a ti misma' },
    { tipo: 'soloTexto', contenido: 'Te esfuerzas muy duro por cumplir tus sueños y tus metas' },
    { tipo: 'soloTexto', contenido: 'Y por eso te admiro tanto...' },
    { tipo: 'soloTexto', contenido: 'Porque aunque la vida ha sido cruel contigo' },
    { tipo: 'soloTexto', contenido: 'Tú pones tu mejor cara y miras al futuro con optimismo' },
    { tipo: 'soloTexto', contenido: 'y espero poder hacer lo mismo' },
    { tipo: 'soloTexto', contenido: 'Ojalá pudiera prestarte mis ojos por un segundo' },
    { tipo: 'soloTexto', contenido: 'Para que vieras la obra maestra que veo yo' },
    { tipo: 'soloTexto', contenido: 'Para que entendieras por qué cada una de tus cicatrices' },
    { tipo: 'soloTexto', contenido: 'Es un trazo de oro en tu historia' },
    { tipo: 'soloTexto', contenido: 'No seas tan dura contigo misma, vida mía' },
    { tipo: 'soloTexto', contenido: 'Porque aunque a veces creas que no avanzas' },
    { tipo: 'soloTexto', contenido: 'Cada suspiro tuyo es una victoria' },
    { tipo: 'soloTexto', contenido: 'Y te has levantado de caidas duras' },
    { tipo: 'soloTexto', contenido: 'Tu me haces sentir el hombre más orgulloso de esta galaxia' },
    { tipo: 'soloTexto', contenido: 'Por que no hay nada mejor en esta vida...' },
    { tipo: 'soloTexto', contenido: 'Que verte avanzar dia con dia' },
    { tipo: 'soloTexto', contenido: 'Imagina que algún día pueda decir ante todos' },
    { tipo: 'soloTexto', contenido: '"Esa es mi novia"' },
    { tipo: 'soloTexto', contenido: 'Me haría la persona más feliz del universo' },

    // --- ACTO V: ANALOGÍAS ---
    { tipo: 'soloTexto', contenido: 'Te admiro más de lo que puedo explicar' },
    { tipo: 'soloTexto', contenido: 'Te observo desde la distancia...' },
    { tipo: 'soloTexto', contenido: 'Como un astrónomo que ha descubierto su estrella más brillante' },
    { tipo: 'soloTexto', contenido: 'Te aprecio profundamente...' },
    { tipo: 'soloTexto', contenido: 'Como un pintor contempla su obra maestra por fin terminada' },
    { tipo: 'soloTexto', contenido: 'Te deseo con la misma fatalidad con la que el fuego desea a la madera' },
    { tipo: 'soloTexto', contenido: 'Con una sed que no se apaga' },
    { tipo: 'soloTexto', contenido: 'Con un hambre de ti que solo se calma' },
    { tipo: 'soloTexto', contenido: 'Cuando nuestras almas se rozan en el pensamiento' },
    { tipo: 'soloTexto', contenido: 'Me inspiras como la luz de la luna inspiró a Beethoven...' },
    { tipo: 'soloTexto', contenido: 'Para arrancar del piano su sonata más íntima' },
    { tipo: 'soloTexto', contenido: 'Me inspiras como el aroma de la tierra mojada...' },
    { tipo: 'soloTexto', contenido: 'Inspira a la vida a florecer tras la sequía' },
    { tipo: 'soloTexto', contenido: 'Me inspiras como la promesa del hogar inspira al náufrago' },
    { tipo: 'soloTexto', contenido: 'Tu me inspiras a vivir la vida' },
    { tipo: 'soloTexto', contenido: 'A darlo todo' },
    { tipo: 'soloTexto', contenido: 'Me inspiras a ser una mejor persona' },

    // --- ACTO VI: DESTINO Y CINE ---
    { tipo: 'soloTexto', contenido: 'Fue exactamente un 25 de enero cuando comenzamos a hablar...' },
    { tipo: 'soloTexto', contenido: 'Han pasado exactamente 1,460 horas desde ese momento' },
    { tipo: 'soloTexto', contenido: 'Y cada minuto a tu lado...' },
    { tipo: 'soloTexto', contenido: 'Cada segundo...' },
    { tipo: 'soloTexto', contenido: 'Es una eternidad de felicidad indescriptible' },
    { tipo: 'soloTexto', contenido: 'Porque siento que te conozco de toda la vida...' },
    { tipo: 'soloTexto', contenido: 'Quizás en cada universo...' },
    { tipo: 'soloTexto', contenido: 'Nuestras almas están destinadas a encontrarse' },
    { tipo: 'soloTexto', contenido: 'Porque te deseo, como Damon desea a Elena' },
    { tipo: 'soloTexto', contenido: 'Amo cada una de tus luces' },
    { tipo: 'soloTexto', contenido: 'Y protegere cada una de tus sombras' },
    { tipo: 'soloTexto', contenido: 'Te pertenezco con la devoción inquebrantable de Akaza por Koyuki' },
    { tipo: 'soloTexto', contenido: 'Una promesa que trasciende la vida y la muerte' },
    { tipo: 'soloTexto', contenido: 'Porque ni el tiempo ni el olvido...' },
    { tipo: 'soloTexto', contenido: 'Podran borrar tu nombre de mi alma' },
    { tipo: 'soloTexto', contenido: 'Te admiro, como Eugene admira a Rapunzel' },
    { tipo: 'soloTexto', contenido: 'Eres el sueño que no sabía que tenía' },
    { tipo: 'soloTexto', contenido: 'Y ahora que te he encontrado...' },
    { tipo: 'soloTexto', contenido: 'Todo mi mundo se ha llenado de luz' },
    { tipo: 'soloTexto', contenido: 'Te amo con la entrega silenciosa del Sr.Darcy por Elizabeth' },
    { tipo: 'soloTexto', contenido: 'Venciendo cualquier orgullo' },
    { tipo: 'soloTexto', contenido: 'Venciendo cualquier distancia' },
    { tipo: 'soloTexto', contenido: 'Solo para decirte que eres dueña de mi corazón' },


    { tipo: 'soloTexto', contenido: 'Y si el tiempo y el espacio intentaran interponerse' },
    { tipo: 'soloTexto', contenido: 'Cruzaria los horizontes de sucesos y los abismos del infinito...' },
    { tipo: 'soloTexto', contenido: 'Solo para volver a verte...' },
    { tipo: 'soloTexto', contenido: 'Porque el amor es la única variable que trasciende las dimensiones' },
    { tipo: 'soloTexto', contenido: 'El único dato que no se puede cuantificar' },
    { tipo: 'soloTexto', contenido: 'Y en este y en cualquier universo...' },
    { tipo: 'soloTexto', contenido: 'Tú eres la única constante que le da sentido a mi gravedad' },
    { tipo: 'soloTexto', contenido: 'Pero antes de que te vayas...', cambioMusica: 'akaza' },
    { tipo: 'soloTexto', contenido: 'Hay algo que mi alma no puede callar más...' },
    { tipo: 'soloTexto', contenido: 'En vano he luchado...' },
    { tipo: 'soloTexto', contenido: 'No quiero hacerlo más...' },
    { tipo: 'soloTexto', contenido: 'Mi sentimiento no se puede contener...' },
    { tipo: 'soloTexto', contenido: 'Permíteme decirte...' },
    { tipo: 'soloTexto', contenido: 'Con cuánto ardor...' },
    { tipo: 'soloTexto', contenido: 'Te admiro...' },
    { tipo: 'soloTexto', contenido: 'Y te amo...' },
    { tipo: 'soloTexto', contenido: 'Eres la dueña de mis pensamientos...' },
    { tipo: 'soloTexto', contenido: 'De mi tiempo...' },
    { tipo: 'soloTexto', contenido: 'Y de cada latido...' },
    { tipo: 'soloTexto', contenido: 'Para siempre, Kenia' },
    // Final
    { tipo: 'soloTexto', contenido: 'Te amo' }
];

/* --- VARIABLES DE CONTROL --- */
let indiceActual = 0;
const musicMia = document.getElementById('bg-music');
const musicAkaza = document.getElementById('music-akaza');
const stage = document.getElementById('narrativa-stage');
let musicaIniciada = false;

/* --- FUNCIÓN DE RENDERIZADO --- */
function render(index) {
    const d = diapositivas[index];
    if (d.tipo === 'soloTexto') {
        stage.innerHTML = `<h1 class="texto-centrado">${d.contenido}</h1>`;
    } else {
        stage.innerHTML = `
            <div class="diapositiva-hibrida">
                <img src="${d.imagenUrl}">
                <p class="texto-lateral">${d.texto}</p>
            </div>`;
    }
}

// Inicializar primera diapositiva
render(0);
setTimeout(() => { 
    stage.style.opacity = 1; 
    stage.style.transform = "translateY(0)";
}, 500);

/* --- MOTOR DE CLICS Y LÓGICA DE AUDIO --- */
document.addEventListener("click", () => {
    // 1. DESBLOQUEO DE AUDIO PARA MÓVILES (Solo el primer clic)
    if (!musicaIniciada) {
        if (musicMia) {
            musicMia.volume = 0.4;
            musicMia.play().catch(e => console.log("Esperando interacción..."));
        }
        
        // Desbloqueamos Akaza en silencio para evitar que suenen juntas
        if (musicAkaza) {
            musicAkaza.volume = 0;
            musicAkaza.play().then(() => {
                musicAkaza.pause();
                musicAkaza.currentTime = 0;
            }).catch(() => {});
        }
        musicaIniciada = true;
    }

    // 2. AVANCE DE DIAPOSITIVAS
    if (indiceActual < diapositivas.length - 1) {
        indiceActual++;
        
        // Efecto Fade Out
        stage.style.opacity = 0;
        stage.style.transform = "translateY(-10px)";

        setTimeout(() => {
            const data = diapositivas[indiceActual];
            
            // LÓGICA DE TRANSICIÓN DE CANCIÓN
            if (data.cambioMusica === 'akaza') {
                console.log("Iniciando transición de audio...");
                
                let fadeOut = setInterval(() => {
                    if (musicMia && musicMia.volume > 0.05) {
                        musicMia.volume -= 0.05;
                    } else {
                        clearInterval(fadeOut);
                        if(musicMia) musicMia.pause();

                        if (musicAkaza) {
                            musicAkaza.volume = 0;
                            musicAkaza.load(); // Asegura carga fresca en GitHub
                            musicAkaza.play().then(() => {
                                let fadeIn = setInterval(() => {
                                    if (musicAkaza.volume < 0.5) {
                                        musicAkaza.volume += 0.05;
                                    } else {
                                        clearInterval(fadeIn);
                                    }
                                }, 100);
                            }).catch(e => {
                                // Rescate por si el navegador bloquea
                                musicAkaza.volume = 0.5;
                                musicAkaza.play();
                            });
                        }
                    }
                }, 150);
            }

            // Actualizar contenido y Fade In
            render(indiceActual);
            stage.style.opacity = 1;
            stage.style.transform = "translateY(0)";
        }, 1000); 
    }
});