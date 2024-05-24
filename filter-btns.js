const libros = [
  {
    id: 1,
    title: 'el hombre en busca de sentido',
    category: ['sabiduria'],
    link: './el-hombre-en-busca-de-sentido/index.html',
    img: '../imagenes/imagenes-resumenes-de-libros/El-hombre-en-busca-de-sentido.jpg',
    alt: 'el-hombre-en-busca-de-sentido-img',
    desc: 'El hombre en busca de sentido de Viktor Frankl es una obra profunda que narra su experiencia en campos de concentración nazis, explorando cómo encontrar significado en el sufrimiento más extremo.',
  },
  {
    id: 2,
    title: 'de la brevedad de la vida',
    category: ['sabiduria'],
    link: './de-la-brevedad-de-la-vida/index.html',
    img: '../imagenes/imagenes-resumenes-de-libros/De-la-brevedad-de-la-vida.jpg',
    alt: 'de-la-brevedad-de-la-vida-img',
    desc: 'En "De la brevedad de la vida", Séneca reflexiona sobre cómo el tiempo es nuestro recurso más valioso y cómo podemos vivir de manera que no lo desperdiciemos, enfocándonos en la esencia de la vida.',
  },
  {
    id: 3,
    title: 'el monje que vendió su ferrari',
    category: ['sabiduria'],
    link: './el-monje-que-vendio-su-ferrari/index.html',
    img: '../imagenes/imagenes-resumenes-de-libros/El-monje-que-vendio-su-ferrari.jpg',
    alt: 'el-monje-que-vendio-su-ferrari-img',
    desc: '“El monje que vendió su Ferrari” es una fábula espiritual que ofrece lecciones sobre cómo vivir con pasión y propósito, dejando atrás el materialismo.',
  },

  {
    id: 4,
    title: 'el arte de la guerra',
    category: ['sabiduria', 'negocios'],
    link: './el-arte-de-la-guerra/index.html',
    img: '../imagenes/imagenes-resumenes-de-libros/El-arte-de-la-guerra.jpg',
    alt: 'el-arte-de-la-guerra-img',
    desc: '“El arte de la guerra”, escrito por Sun Tzu, es un tratado milenario que enseña estrategias de sabiduría aplicables tanto en conflictos como en la vida cotidiana.',
  },

  {
    id: 5,
    title: 'maestría',
    category: ['sabiduria', 'mentalidad'],
    link: './maestria/index.html',
    img: '../imagenes/imagenes-resumenes-de-libros/Maestría-Robert-Greene.jpg',
    alt: 'maestría-img',
    desc: '“Maestría” explora los caminos hacia la excelencia y el dominio de habilidades, apelando a la práctica dedicada y el aprendizaje continuo.',
  },

  {
    id: 6,
    title: 'el camino del hombre superior',
    category: ['sabiduria'],
    link: './el-camino-del-hombre-superior/index.html',
    img: '../imagenes/imagenes-resumenes-de-libros/El-camino-del-hombre-superior.jpg',
    alt: 'el-camino-del-hombre-superior-img',
    desc: '“El camino del hombre superior” ofrece una guía para que los hombres vivan con integridad, autenticidad y libertad en la era moderna.',
  },

  {
    id: 7,
    title: 'el alquimista',
    category: ['sabiduria'],
    link: './el-alquimista/index.html',
    img: '../imagenes/imagenes-resumenes-de-libros/El-alquimista.jpg',
    alt: 'el-alquimista-img',
    desc: '“El alquimista” de Paulo Coelho es una metáfora inspiradora sobre seguir los sueños personales y entender la lengua universal del corazón.',
  },
  {
    id: 8,
    title: 'la ligera ventaja',
    category: ['sabiduria'],
    link: './la-ligera-ventaja/index.html',
    img: '../imagenes/imagenes-resumenes-de-libros/La-ligera-ventaja.jpg',
    alt: 'la-ligera-ventaja-img',
    desc: '“La ligera ventaja” de Jeff Olson aboga por el poder de las acciones diarias positivas y cómo estas se acumulan para crear un éxito significativo.',
  },

  {
    id: 9,
    title: 'como suprimir las preocupaciones y disfrutar de la vida',
    category: ['sabiduria'],
    link: './como-suprimir-tus-preocupaciones-y-disfrutar-de-la-vida/index.html',
    img: '../imagenes/imagenes-resumenes-de-libros/Como-suprimir-las-preocupaciones-y-disfrutar-de-la-vida.jpg',
    alt: 'como-suprimir-las-preocupaciones-y-disfrutar-de-la-vida-img',
    desc: 'Dale Carnegie enseña en su libro estrategias prácticas para lidiar con el estrés y vivir una vida más plena y tranquila.',
  },

  {
    id: 10,
    title: 'el obstaculo es el camino',
    category: ['sabiduria'],
    link: './el-obstaculo-es-el-camino/index.html',
    img: '../imagenes/imagenes-resumenes-de-libros/El-obstaculo-es-el-camino.jpg',
    alt: 'el-obstaculo-es-el-camino-img',
    desc: 'Ryan Holiday revela en “El obstáculo es el camino” cómo los desafíos pueden convertirse en oportunidades a través de la filosofía estoica.',
  },

  {
    id: 11,
    title: 'el ego es el enemigo',
    category: ['sabiduria'],
    link: './el-ego-es-el-enemigo/index.html',
    img: '../imagenes/imagenes-resumenes-de-libros/El-ego-es-el-enemigo.jpg',
    alt: 'el-ego-es-el-enemigo-img',
    desc: '“El ego es el enemigo” ofrece una perspectiva sobre cómo el ego puede obstaculizar nuestro crecimiento y cómo superarlo, según Ryan Holiday.',
  },

  {
    id: 12,
    title: 'maestria',
    category: ['sabiduria', 'mentalidad'],
    link: './maestria/index.html',
    img: '../imagenes/imagenes-resumenes-de-libros/Maestria-George-Leonard.jpg',
    alt: 'maestria-img',
    desc: 'George Leonard presenta en “Maestría” el viaje hacia la excelencia y el dominio personal, enfatizando la importancia de disfrutar el proceso.',
  },
  {
    id: 13,
    title: 'padre rico padre pobre',
    category: ['dinero', 'negocios'],
    link: './padre-rico-padre-pobre/index.html',
    img: '../imagenes/imagenes-resumenes-de-libros/Padre-rico-padre-pobre.jpg',
    alt: 'padre-rico-padre-pobre-img',
    desc: '“Padre rico padre pobre” de Robert Kiyosaki ofrece lecciones cruciales sobre educación financiera y la importancia de la inversión inteligente.',
  },

  {
    id: 14,
    title: 'el hombre más rico de babilonia',
    category: ['dinero'],
    link: './el-hombre-más-rico-de-babilonia/index.html',
    img: '../imagenes/imagenes-resumenes-de-libros/El-hombre-mas-rico-de-babilonia.jpg',
    alt: 'el-hombre-más-rico-de-babilonia-img',
    desc: 'El libro explora las claves atemporales de la riqueza y la prosperidad ambientadas en la antigua Babilonia.',
  },

  {
    id: 15,
    title: 'el inversor inteligente',
    category: ['dinero', 'negocios'],
    link: './el-inversor-inteligente/index.html',
    img: '../imagenes/imagenes-resumenes-de-libros/El-inversor-inteligente.jpg',
    alt: 'el-inversor-inteligente-img',
    desc: 'Benjamin Graham enseña estrategias de inversión y análisis de valores en “El inversor inteligente”, guiando a inversores hacia decisiones financieras prudentes.',
  },

  {
    id: 16,
    title: 'el millonario de al lado',
    category: ['dinero'],
    link: './el-millonario-de-al-lado/index.html',
    img: '../imagenes/imagenes-resumenes-de-libros/El-millonario-de-al-lado.jpg',
    alt: 'el-millonario-de-al-lado-img',
    desc: '“El millonario de al lado” desmonta mitos sobre los ricos y muestra cómo acumulan riqueza de manera silenciosa y constante.',
  },

  {
    id: 17,
    title: 'los secretos de la mente millonaria',
    category: ['dinero'],
    link: './los-secretos-de-la-mente-millonaria/index.html',
    img: '../imagenes/imagenes-resumenes-de-libros/Los-secretos-de-la-mente-millonaria.jpg',
    alt: 'los-secretos-de-la-mente-millonaria-img',
    desc: 'Este libro descubre cómo nuestra mentalidad influye en la relación con el dinero y la riqueza, proponiendo un cambio de paradigma financiero.',
  },

  {
    id: 18,
    title: 'el carril rápido del millonario',
    category: ['dinero', 'negocios'],
    link: './el-carril-rápido-del-millonario/index.html',
    img: '../imagenes/imagenes-resumenes-de-libros/El-carril-rapido-del-millonario.jpg',
    alt: 'el-carril-rápido-del-millonario-img',
    desc: '“El carril rápido del millonario” de MJ DeMarco critica la fórmula tradicional de riqueza y propone un camino más directo y eficaz hacia la libertad financiera.',
  },

  {
    id: 19,
    title: 'piense y hágase rico',
    category: ['dinero'],
    link: './piense-y-hágase-rico/index.html',
    img: '../imagenes/imagenes-resumenes-de-libros/Piense-y-hagase-rico.jpg',
    alt: 'piense-y-hágase-rico-img',
    desc: 'Napoleon Hill comparte en “Piense y hágase rico” principios de éxito personal que han inspirado a millones a alcanzar sus mayores logros.',
  },

  {
    id: 20,
    title: 'la ciencia de hacerse rico',
    category: ['dinero'],
    link: './la-ciencia-de-hacerse-rico/index.html',
    img: '../imagenes/imagenes-resumenes-de-libros/La-ciencia-de-hacerse-rico.jpg',
    alt: 'la-ciencia-de-hacerse-rico-img',
    desc: '“La ciencia de hacerse rico” es un manual práctico que expone las leyes que rigen la prosperidad y cómo aplicarlas para el beneficio propio.',
  },
  {
    id: 21,
    title: 'autocontrol',
    category: ['psicologia', 'disciplina'],
    link: './autocontrol/index.html',
    img: '../imagenes/imagenes-resumenes-de-libros/Autocontrol.jpg',
    alt: 'autocontrol-img',
    desc: 'Kelly McGonigal explora en "Autocontrol" cómo la fuerza de voluntad funciona y cómo podemos gestionarla para mejorar nuestras vidas.',
  },

  {
    id: 22,
    title: 'sin excusas',
    category: ['disciplina'],
    link: './sin-excusas/index.html',
    img: '../imagenes/imagenes-resumenes-de-libros/Sin-excusas.jpg',
    alt: 'sin-excusas-img',
    desc: 'Brian Tracy presenta en "Sin excusas" técnicas prácticas para superar la procrastinación y lograr mayores niveles de productividad.',
  },

  {
    id: 23,
    title: 'despertando al gigante interior',
    category: ['disciplina', 'sabiduria'],
    link: './despertando-al-gigante-interior/index.html',
    img: '../imagenes/imagenes-resumenes-de-libros/Despertando-al-gigante-interior.jpg',
    alt: 'despertando-al-gigante-interior-img',
    desc: 'Tony Robbins ofrece en este libro estrategias y técnicas para tomar control de tu vida emocional, física y financiera.',
  },

  {
    id: 24,
    title: 'pensar rápido, pensar despacio',
    category: ['psicologia', 'dinero', 'negocios'],
    link: './pensar-rápido-pensar-despacio/index.html',
    img: '../imagenes/imagenes-resumenes-de-libros/Pensar-rapido-pensar-despacio.jpg',
    alt: 'pensar-rápido-pensar-despacio-img',
    desc: 'Daniel Kahneman explora los dos sistemas que modelan nuestros pensamientos: el rápido, intuitivo y emocional; y el lento, deliberativo y lógico.',
  },

  {
    id: 25,
    title: 'inteligencia emocional',
    category: ['psicologia'],
    link: './inteligencia-emocional/index.html',
    img: '../imagenes/imagenes-resumenes-de-libros/Inteligencia-emocional.jpg',
    alt: 'inteligencia-emocional-img',
    desc: 'Daniel Goleman introduce el concepto de inteligencia emocional y su impacto en el éxito personal y profesional.',
  },

  {
    id: 26,
    title: 'psicocibernética',
    category: ['psicologia'],
    link: './psicocibernética/index.html',
    img: '../imagenes/imagenes-resumenes-de-libros/Psicocibernetica.jpg',
    alt: 'psicocibernética-img',
    desc: 'Maxwell Maltz presenta técnicas para mejorar la autoimagen y transformar la visión de uno mismo a través de "Psicocibernética".',
  },

  {
    id: 27,
    title: 'la paradoja de la elección',
    category: ['psicologia', 'negocios'],
    link: './la-paradoja-de-la-elección/index.html',
    img: '../imagenes/imagenes-resumenes-de-libros/La-paradoja-de-la-eleccion.jpg',
    alt: 'la-paradoja-de-la-elección-img',
    desc: 'Barry Schwartz analiza cómo la abundancia de elecciones puede llevar a la insatisfacción y parálisis, argumentando a favor de simplificar decisiones.',
  },

  {
    id: 28,
    title: 'blink: inteligencia intuitiva',
    category: ['psicologia'],
    link: './blink-inteligencia-intuitiva/index.html',
    img: '../imagenes/imagenes-resumenes-de-libros/Blink-inteligencia-intuitiva.jpg',
    alt: 'blink-inteligencia-intuitiva-img',
    desc: 'Malcolm Gladwell explora el proceso de toma de decisiones instantáneas y la intuición en "Blink: Inteligencia intuitiva".',
  },

  {
    id: 29,
    title: 'como decidimos y como tomar mejores decisiones',
    category: ['psicologia', 'negocios'],
    link: './como-decidimos-y-como-tomar-mejores-decisiones/index.html',
    img: '../imagenes/imagenes-resumenes-de-libros/Como-decidimos.jpg',
    alt: 'como-decidimos-y-como-tomar-mejores-decisiones-img',
    desc: 'Johan Lehrer discute la interacción entre razón y emoción en la toma de decisiones y cómo podemos hacer mejores elecciones.',
  },

  {
    id: 30,
    title: 'la hipótesis de la felicidad',
    category: ['psicologia', 'sabiduria'],
    link: './la-hipótesis-de-la-felicidad/index.html',
    img: '../imagenes/imagenes-resumenes-de-libros/La-hipotesis-de-la-felicidad.jpg',
    alt: 'la-hipótesis-de-la-felicidad-img',
    desc: 'Jonathan Haidt examina las bases de nuestra felicidad y cómo podemos influir en nuestro bienestar emocional y psicológico.',
  },

  {
    id: 31,
    title: 'los seis pilares de la autoestima',
    category: ['psicologia'],
    link: './los-seis-pilares-de-la-autoestima/index.html',
    img: '../imagenes/imagenes-resumenes-de-libros/Los-seis-pilares-de-la-autoestima.jpg',
    alt: 'los-seis-pilares-de-la-autoestima-img',
    desc: 'Nathaniel Branden presenta los seis pilares que son esenciales para el desarrollo de una autoestima saludable y robusta.',
  },
  {
    id: 32,
    title: 'la semana laboral de 4 horas',
    category: ['productividad', 'negocios'],
    link: './la-semana-laboral-de-4-horas/index.html',
    img: '../imagenes/imagenes-resumenes-de-libros/La-semana-laboral-de-las-cuatro-horas.jpg',
    alt: 'la-semana-laboral-de-4-horas-img',
    desc: 'Tim Ferriss rompe con la rutina del 9 a 5 en "La semana laboral de 4 horas" y propone formas de automatizar ingresos y maximizar la eficiencia.',
  },

  {
    id: 33,
    title: 'la mañana milagrosa',
    category: ['productividad'],
    link: './la-mañana-milagrosa/index.html',
    img: '../imagenes/imagenes-resumenes-de-libros/La-mañana-milagrosa.jpg',
    alt: 'la-manana-milagrosa-img',
    desc: 'Hal Elrod comparte técnicas matutinas en "La mañana milagrosa" que pueden transformar tu vida, enfocándose en desarrollo personal y productividad.',
  },

  {
    id: 34,
    title: 'lo único',
    category: ['productividad'],
    link: './lo-unico/index.html',
    img: '../imagenes/imagenes-resumenes-de-libros/Lo-unico.jpg',
    alt: 'lo-unico-img',
    desc: 'Gary Keller explica en "Lo único" cómo identificar la tarea más importante en cualquier área para lograr el éxito mediante la focalización.',
  },

  {
    id: 35,
    title: 'los 7 hábitos de la gente altamente efectiva',
    category: ['productividad', 'sabiduria'],
    link: './los-7-habitos-de-la-gente-altamente-efectiva/index.html',
    img: '../imagenes/imagenes-resumenes-de-libros/Los-siete-habitos-de-la-gente-altamente-efectiva.jpg',
    alt: 'los-7-habitos-de-la-gente-altamente-efectiva-img',
    desc: 'Stephen Covey presenta un enfoque principio-centrado para resolver problemas personales y profesionales en "Los 7 hábitos de la gente altamente efectiva".',
  },

  {
    id: 36,
    title: 'el principio 80/20',
    category: ['productividad'],
    link: './el-principio-80-20/index.html',
    img: '../imagenes/imagenes-resumenes-de-libros/El-principio-ochenta-veinte.jpg',
    alt: 'el-principio-80-20-img',
    desc: 'Richard Koch aplica el principio de Pareto en "El principio 80/20", explicando cómo el menor número de causas, esfuerzos y recursos conducen a la mayoría de los resultados.',
  },
  {
    id: 37,
    title: 'cómo ganar amigos e influir sobre las personas',
    category: ['relaciones', 'negocios'],
    link: './como-ganar-amigos-e-influir-sobre-las-personas/index.html',
    img: '../imagenes/imagenes-resumenes-de-libros/Como-ganar-amigos-e-influir-sobre-las-personas.jpg',
    alt: 'como-ganar-amigos-e-influir-sobre-las-personas-img',
    desc: 'Dale Carnegie enseña técnicas de comunicación y relaciones interpersonales que ayudan a mejorar y personalizar las interacciones sociales.',
  },

  {
    id: 38,
    title: 'el poder de los hábitos',
    category: ['habitos', 'psicologia'],
    link: './el-poder-de-los-habitos/index.html',
    img: '../imagenes/imagenes-resumenes-de-libros/El-poder-de-los-habitos.jpg',
    alt: 'el-poder-de-los-habitos-img',
    desc: 'Charles Duhigg explora cómo los hábitos se forman y cómo pueden ser transformados para mejorar nuestras vidas, productividad y felicidad.',
  },

  {
    id: 39,
    title: 'los 7 hábitos de la gente altamente efectiva',
    category: ['habitos', 'negocios', 'disciplina'],
    link: './los-7-habitos-de-la-gente-altamente-efectiva/index.html',
    img: '../imagenes/imagenes-resumenes-de-libros/Los-siete-habitos-de-la-gente-altamente-efectiva.jpg',
    alt: 'los-7-habitos-de-la-gente-altamente-efectiva-img',
    desc: 'Stephen Covey detalla los principios para la efectividad personal, que van desde la proactividad hasta la creación de sinergias en entornos colaborativos.',
  },

  {
    id: 40,
    title: 'hábitos atómicos',
    category: ['habitos', 'disciplina'],
    link: './habitos-atomicos/index.html',
    img: '../imagenes/imagenes-resumenes-de-libros/Habitos-atomicos.jpg',
    alt: 'habitos-atomicos-img',
    desc: 'James Clear ofrece estrategias efectivas para formar buenos hábitos, romper los malos y dominar los comportamientos minúsculos que conducen a resultados extraordinarios.',
  },

  {
    id: 41,
    title: '100 euros startup',
    category: ['negocios'],
    link: './100-euros-startup/index.html',
    img: '../imagenes/imagenes-resumenes-de-libros/El-negocio-de-los-cien-dolares.jpg',
    alt: '100-euros-startup-img',
    desc: 'Chris Guillebeau muestra cómo iniciar y hacer crecer un negocio rentable con una inversión inicial mínima, basándose en estudios de casos reales.',
  },

  {
    id: 42,
    title: 'la clave es el porqué',
    category: ['negocios', 'sabiduria'],
    link: './la-clave-es-el-porque/index.html',
    img: '../imagenes/imagenes-resumenes-de-libros/La-clave-es-el-porque.jpg',
    alt: 'la-clave-es-el-porque-img',
    desc: 'Simon Sinek explica cómo líderes e innovadores inspiran la acción al centrarse en el propósito detrás de sus elecciones y empresas.',
  },

  {
    id: 43,
    title: 'la psicología de las ventas',
    category: ['negocios'],
    link: './la-psicologia-de-las-ventas/index.html',
    img: '../imagenes/imagenes-resumenes-de-libros/Psicologia-de-las-ventas.jpg',
    alt: 'la-psicologia-de-las-ventas-img',
    desc: 'Explora cómo entender mejor a los clientes y cerrar ventas efectivamente, basándose en principios de psicología aplicada.',
  },

  {
    id: 44,
    title: 'se tan bueno que no puedan ignorarte',
    category: ['negocios'],
    link: './se-tan-bueno-que-no-puedan-ignorarte/index.html',
    img: '../imagenes/imagenes-resumenes-de-libros/Hazlo-tan-bien-que-no-puedan-ignorarte.jpg',
    alt: 'se-tan-bueno-que-no-puedan-ignorarte-img',
    desc: 'Cal Newport destaca la importancia de desarrollar habilidades y adoptar una mentalidad de artesano para lograr el éxito y la satisfacción en cualquier campo.',
  },

  {
    id: 45,
    title: 'fueras de serie',
    category: ['negocios'],
    link: './fueras-de-serie/index.html',
    img: '../imagenes/imagenes-resumenes-de-libros/Fueras-de-serie.jpg',
    alt: 'fueras-de-serie-img',
    desc: 'Malcolm Gladwell analiza las historias de éxito para desentrañar los factores que contribuyen a alcanzar niveles extraordinarios de rendimiento.',
  },
  {
    id: 46,
    title: 'contagioso',
    category: ['marketing'],
    link: './contagioso/index.html',
    img: '../imagenes/imagenes-resumenes-de-libros/Contagioso.jpg',
    alt: 'contagioso-img',
    desc: 'Johan Berger explora cómo y por qué ciertas ideas y productos se vuelven populares, desglosando los principios detrás de lo que hace que algo sea viral.',
  },

  {
    id: 47,
    title: 'el cerebro del consumo',
    category: ['marketing', 'negocios'],
    link: './el-cerebro-del-consumo/index.html',
    img: '../imagenes/imagenes-resumenes-de-libros/El-cerebro-del-consumo.jpg',
    alt: 'el-cerebro-del-consumo-img',
    desc: 'Federico Fros Campelo ofrece una visión de cómo las decisiones de compra son influenciadas por factores subconscientes y emocionales en el cerebro del consumidor.',
  },

  {
    id: 48,
    title: 'eres indispensable',
    category: ['marketing', 'negocios'],
    link: './eres-indispensable/index.html',
    img: '../imagenes/imagenes-resumenes-de-libros/Eres-indispensable.jpg',
    alt: 'eres-indispensable-img',
    desc: 'Seth Godin argumenta que en la economía moderna, ser "indispensable" es la única manera de destacar y ofrece consejos sobre cómo alcanzar ese estado.',
  },

  {
    id: 49,
    title: 'la magia de pensar en grande',
    category: ['mentalidad'],
    link: './la-magia-de-pensar-en-grande/index.html',
    img: '../imagenes/imagenes-resumenes-de-libros/La-magia-de-pensar-en-grande.jpg',
    alt: 'la-magia-de-pensar-en-grande-img',
    desc: 'David Schwartz enseña que el tamaño de tus sueños y cómo manejas tus objetivos es directamente proporcional al éxito que puedes alcanzar.',
  },

  {
    id: 50,
    title: 'el talento esta sobrevalorado',
    category: ['mentalidad'],
    link: './el-talento-esta-sobrevalorado/index.html',
    img: '../imagenes/imagenes-resumenes-de-libros/El-talento-esta-sobrevalorado.jpg',
    alt: 'el-talento-esta-sobrevalorado-img',
    desc: 'Geoff Colvin desafía la noción de que el talento innato es crucial para el éxito y destaca el papel de la práctica deliberada y esforzada.',
  },

  {
    id: 51,
    title: 'las claves del talento',
    category: ['mentalidad'],
    link: './las-claves-del-talento/index.html',
    img: '../imagenes/imagenes-resumenes-de-libros/Las-claves-del-talento.jpg',
    alt: 'las-claves-del-talento-img',
    desc: 'Daniel Coyle explora cómo se cultiva el talento en individuos y organizaciones, destacando técnicas que fomentan el desarrollo rápido de habilidades.',
  },

  {
    id: 52,
    title: 'poder sin limites',
    category: ['mentalidad'],
    link: './poder-sin-limites/index.html',
    img: '../imagenes/imagenes-resumenes-de-libros/Poder-sin-limites.jpg',
    alt: 'poder-sin-limites-img',
    desc: 'Anthony Robbins ofrece herramientas y técnicas para mejorar la calidad de vida, basándose en el poder de la programación neurolingüística (PNL) y otros métodos de autoayuda.',
  },
]

console.log(libros[2])

const btnContainerBooks = document.querySelector('.btn-container-books')
const summariesCenter = document.querySelector('.summaries-center')

window.addEventListener('DOMContentLoaded', function () {
  displayMenuItems(libros)
  reduceCategories(libros)
  // temporal code below to prevent default behavior of the links
  // const linksBooks = document.querySelectorAll('.summaries-center a')
  // preventDefaultBehavior(linksBooks)
})

// display menu items
function displayMenuItems(menuItems) {
  let displayMenu = menuItems.map(function (item) {
    // console.log(item)
    return `<article class="single-book-summary single-book-book-notes">
          <div class="img-book-container">
            <a href="${item.link}">
              <img
                src=${item.img}
                alt=${item.alt}
                class="book-img img"
              />
            </a>
          </div>
          <div class="summary-info">
            <a href="${item.link}">
              <h4>${item.title}</h4>
            </a>
            <p>
              ${item.desc}
            </p>
          </div>
        </article>`
  })
  displayMenu = displayMenu.join('')
  summariesCenter.innerHTML = displayMenu
}

// numero 2 tratar de colocar los botones
// Display menu buttons
function displayMenuButtons(array) {
  let categoryBtns = array.map(function (category) {
    if (category == 'todos') {
      return `<button class="btn filter-btn filter-btn-selected" type="button" data-id=${category}>${category}</button>`
    } else {
      return `<button class="btn filter-btn" type="button" data-id=${category}>${category}</button>`
    }
  })
  categoryBtns = categoryBtns.join('')
  btnContainerBooks.innerHTML = categoryBtns
  const filterBtns = document.querySelectorAll('.filter-btn')

  // filter items
  filterBtns.forEach(function (btn) {
    btn.addEventListener('click', function (e) {
      const category = e.currentTarget.dataset.id
      const menuCategory = libros.filter(function (menuItem) {
        // console.log(menuItem.category.length)
        for (let i = 0; i < menuItem.category.length; i++) {
          if (menuItem.category[i] === category) {
            return menuItem
          }
        }
      })
      if (category === 'todos') {
        displayMenuItems(libros)
      } else {
        displayMenuItems(menuCategory)
      }
      // here I am going to try to add the function to add color to the button every time we click on it
      filterBtns.forEach(function (item) {
        if (item !== btn) {
          item.classList.remove('filter-btn-selected')
        }
      })
      btn.classList.add('filter-btn-selected')
      // here I am going to try to add the code to prevent the default behavior of the links
      // temporal code below to prevent default behavior of the links
      const linksBooks = document.querySelectorAll('.summaries-center a')
      // preventDefaultBehavior(linksBooks)
    })
  })
}

// number 1
// reduce categories function
function reduceCategories(array) {
  const categories = array.reduce(
    function (categories, item) {
      // console.log(item.category.length)
      for (let i = 0; i < item.category.length; i++) {
        if (!categories.includes(item.category[i])) {
          categories.push(item.category[i])
        }
      }
      return categories
    },
    ['todos']
  )
  displayMenuButtons(categories)
}

// provisional function
function preventDefaultBehavior(nodeList) {
  nodeList.forEach(function (link) {
    link.addEventListener('click', function (e) {
      e.preventDefault()
    })
  })
}
