export default {

   /****************************************************************************************
    * ENGLISH (American)
    ****************************************************************************************/

   /*
      RULES FOR TRANSLATORS
      - All the text after symbols /* and // are comments and must not be translated.
      - Please read the comments to understand the context of the translation.
      - For each row, only the text after the colon (:) must be translated.
        Example:
           'monitor.siteViewersTitle': 'People viewing this site',
        is translated, for Italian, into
           'monitor.siteViewersTitle': 'Persone che stanno vedendo questo sito',
      - Preserve all quotation marks (') around the translations.
      - Preserve commas at the end of lines (,).
      - In some cases, phrases contain placeholders, which are expressed as $A, $B, $N, etc.
        These placeholders must be kept in the traslation and will be automatically replaced with actual data.
      - Use gender-neutral language
      - Please get back to us for any doubts and clarifications!
   */
   'en': {
      'genericError': 'Oops! Something went wrong',

      'connection-status.offline': 'You are offline',

      /**
       * Time representation
       */
      'hour-format': 12,
      // 12 (e.g. "3:52 PM") or 24 (e.g. "15:52")

      /**
       * Commons
       */
      'commons.signedWith.google': 'Signed in with Google',
      'commons.signedWith.facebook': 'Signed in with Facebook',
      'commons.signedWith.twitter': 'Signed in with Twitter',
      'commons.signedWith.linkedin': 'Signed in with LinkedIn',
      'commons.signedWith.email': 'Signed in with email',
      'commons.signedWith.jwt': 'Signed in on this site',

      'commons.close': 'Close', // close button

      /**
       * Tooltips and balloons on closed widget
       */
      'monitor.pageViewersTitle': 'People viewing this page',
      'monitor.siteViewersTitle': 'People viewing this site',
      'monitor.chatBalloon': 'CHAT', // keep upper case, if applicable
      'monitor.presenceBalloon': 'People present now',

      /**
       * Menu
       */
      'status-header.options': 'Options',
      'status-header.help': 'Help',
      'status-header.issue': 'Report an Issue',
      'status-header.terms': 'Terms of Service',
      'status-header.privacy': 'Privacy Policy',
      'status-header.signout': 'Sign out',

      'status-header.notRememberedLogin': 'Not remembered',
      // means that the login status is temporary and will not be remembered next time

      /**
       * Tab labels and tooltips
       */
      'tab.chatTabLabel': 'CHAT', // max 8 characters; keep upper case, if applicable
      'tab.chatTitlePage': 'Chat with other visitors of this page in real time',
      'tab.chatTitleSite': 'Chat with other visitors of this site in real time',

      'tab.rankingTabLabel': 'PAGES', // max 8 characters; keep upper case, if applicable
      'tab.rankingTitle': 'Pages people are viewing now',

      'tab.heatmapTabLabel': 'MAP', // max 8 characters; keep upper case, if applicable
      'tab.heatmapTitle': 'Where people come from',

      /**
       * Heatmap
       */
      'heatmap.pageSwitchLabel': 'PAGE', // max 12 characters; keep upper case, if applicable
      'heatmap.siteSwitchLabel': 'SITE', // max 12 characters; keep upper case, if applicable
      'heatmap.empty': 'No data',

      /**
       * Ranking
       */
      'ranking.foregroundTitle': 'People on this site',
      'ranking.activeTitle': 'People chatting on this site',
      'ranking.foregroundSwitchLabel': 'VIEWERS', // max 12 characters; keep upper case, if applicable
      'ranking.activeSwitchLabel': 'CHATTERS', // max 12 characters; keep upper case, if applicable
      'ranking.empty': 'No data',
      'ranking.currentPage': 'Current page',

      'ranking.note': 'Showing top ten pages',
      // note added to the end to the ranking list to explain that only the top ten pages are shown

      /**
       * Chat
       */
      'chat.welcomeFirstMessagePage': 'Chat with other visitors of this page in real time',
      'chat.welcomeFirstMessageSite': 'Chat with other visitors of this site in real time',

      'chat.welcomeSecondMessage': 'Please remember that your messages are public and disappear after $N $A',
      'chat.welcomeSecondMessageJWT': 'Please remember that your messages may be public and disappear after $N $A',
      'chat.welcomeSecondMessage.A.minutes': 'minutes',
      'chat.welcomeSecondMessage.A.hours': 'hours',
      'chat.welcomeSecondMessage.A.days': 'days',
      'chat.welcomeSecondMessage.A.weeks': 'weeks',
      // example: "Please remember that your messages are public and disappear after 2 hours"

      'chat.placeholder': 'Type a message',
      'chat.postBtn': 'Post', // means "publish this message"

      'chat.tooFrequentError': 'You are a bit too fast...\nPlease don\'t flood the chat',
      // \n means to break the line; \' distinguishes the apostrophe from the final apex

      'chat.blockedError': 'Sorry... This message seems inappropriate',
      'chat.abortedError': 'Sign-in canceled or cookies disabled on this browser',
      'chat.mutedError': 'Oops! It looks like you have been muted',
      'chat.notPersistentError': 'The authentication will not be remembered due to your restricted privacy settings. Please enable cookies for Now4real in your browser to prevent this from happening.',

      'chat.signinRequired': '<a>Sign in</a> to chat',
      // keep <a> and </a> unchanged and surrounding the translation of "Sign in"

      'chat.viewOnly': 'View-only mode',

      // below are the actions on messages that appear in a contextual menu
      'chat.replyBtn': 'Reply',
      'chat.deleteBtn': 'Delete',

      /**
       * Presence
       */
      'presence.all.a': '1 person on this page (of $N on this site)',
      // example: "1 person on this page (of 23 on this site)"

      'presence.all.b': '$N people on this page (of $M on this site)',
      // example: "5 people on this page (of 23 on this site)"

      'presence.page.a': '1 person on this page',
      'presence.page.b': '$N people on this page',

      'presence.site.a': '1 person on this site',
      'presence.site.b': '$N people on this site',

      /**
       * Emoji-picker labels
       */
      'emoji-picker.people': 'People',
      'emoji-picker.nature': 'Nature',
      'emoji-picker.food': 'Food',
      'emoji-picker.activity': 'Activity',
      'emoji-picker.travel': 'Places',
      'emoji-picker.objects': 'Objets',
      'emoji-picker.symbols': 'Symbols',
      'emoji-picker.flags': 'Flags',

      /**
       * Typing
       */
      'typing.a': '1 person is typing...',

      'typing.b': '$N people are typing...',
      // example: "5 people are typing..."

      'typing.c': '$A is typing...',
      // example: "Alex is typing..."

      'typing.d': '$A and $B are typing...',
      // example: "Alex and Ben are typing..."

      'typing.e': '$A, $B, and $C are typing...',
      // example: "Alex, Ben, and Cindy are typing..."

      'typing.f': '$A and 1 other are typing...',
      // example: "Alex and 1 other are typing..."

      'typing.g': '$A and $N others are typing...',
      // example: "Alex and 3 others are typing..."

      'typing.h': '$A, $B, and 1 other are typing...',
      // example: "Alex, Ben, and 1 other are typing..."

      'typing.i': '$A, $B, and $N others are typing...',
      // example: "Alex, Ben, and 3 others are typing..."

      'typing.j': '$A, $B, $C, and 1 other are typing...',
      // example: "Alex, Ben, Cindy, and 1 other are typing..."

      'typing.k': '$A, $B, $C, and $N others are typing...',
      // example: "Alex, Ben, Cindy, and 3 others are typing..."

      /**
       * Social login dialog
       */
      'social-modal.title': 'Sign in',
      'social-modal.header': 'Start chatting on any website that uses Now4real',

      // buttons:
      'social-modal.google': 'Sign in with Google',
      'social-modal.facebook': 'Sign in with Facebook',
      'social-modal.twitter': 'Sign in with Twitter',
      'social-modal.linkedin': 'Sign in with LinkedIn',
      'social-modal.email': 'Sign in with email',

      'social-modal.footer': 'Click “Sign in” above to accept Now4real\'s <a1>Terms of Service</a1> and <a2>Privacy Policy</a2>',
      // keep <a1> and </a1> unchanged and surrounding the translation of "Terms of Service"
      // keep <a2> and </a2> unchanged and surrounding the translation of "Privacy Policy"

      /**
       * JWT login dialog
       */
      'jwt-modal.title': 'Consent',


      'jwt-modal.header': 'To start chatting you should accept the <a1>Terms of Service</a1> and the <a2>Privacy Policy</a2> of Now4real (the chat service)',
      // keep <a1> and </a1> unchanged and surrounding the translation of "Terms of Service"
      // keep <a2> and </a2> unchanged and surrounding the translation of "Privacy Policy"

      'jwt-modal.button': 'Accept'
   },

   /****************************************************************************************
    * ITALIAN (Standard)
    ****************************************************************************************/
   'it': {
      'genericError': 'Ops! Qualcosa è andato storto',

      'connection-status.offline': 'Sei offline',

      /**
       * Time representation
       */
      'hour-format': 24,
      // 12 (e.g. "3:52 PM") or 24 (e.g. "15:52")

      /**
       * Commons
       */
      'commons.signedWith.google': 'Connesso via Google',
      'commons.signedWith.facebook': 'Connesso via Facebook',
      'commons.signedWith.twitter': 'Connesso via Twitter',
      'commons.signedWith.linkedin': 'Connesso via LinkedIn',
      'commons.signedWith.email': 'Connesso via email',
      'commons.signedWith.jwt': 'Connesso sul sito',

      'commons.close': 'Chiudi', // close button

      /**
       * Tooltips and balloons on closed widget
       */
      'monitor.pageViewersTitle': 'Persone che stanno vedendo questa pagina',
      'monitor.siteViewersTitle': 'Persone che stanno vedendo questo sito',
      'monitor.chatBalloon': 'CHAT', // keep upper case, if applicable
      'monitor.presenceBalloon': 'Persone presenti ora',

      /**
       * Menu
       */
      'status-header.options': 'Opzioni',
      'status-header.help': 'Aiuto',
      'status-header.issue': 'Segnala un problema',
      'status-header.terms': 'Condizioni di servizio',
      'status-header.privacy': 'Privacy policy',
      'status-header.signout': 'Disconnetti',

      'status-header.notRememberedLogin': 'Provvisoriamente',
      // means that the login status is temporary and will not be remembered next time

      /**
       * Tab labels and tooltips
       */
      'tab.chatTabLabel': 'CHAT', // max 8 characters; keep upper case, if applicable
      'tab.chatTitlePage': 'Chatta con le altre persone presenti su questa pagina',
      'tab.chatTitleSite': 'Chatta con le altre persone presenti su questo sito',

      'tab.rankingTabLabel': 'PAGINE', // max 8 characters; keep upper case, if applicable
      'tab.rankingTitle': 'Dove si trovano le persone su questo sito',

      'tab.heatmapTabLabel': 'MAPPA', // max 8 characters; keep upper case, if applicable
      'tab.heatmapTitle': 'Dove si trovano le persone nel mondo reale',

      /**
       * Heatmap
       */
      'heatmap.pageSwitchLabel': 'PAGINA', // max 12 characters; keep upper case, if applicable
      'heatmap.siteSwitchLabel': 'SITO', // max 12 characters; keep upper case, if applicable
      'heatmap.empty': 'Nessun dato',

      /**
       * Ranking
       */
      'ranking.foregroundTitle': 'Persone sul sito',
      'ranking.activeTitle': 'Persone in chat sul sito',
      'ranking.foregroundSwitchLabel': 'VISITATORI', // max 12 characters; keep upper case, if applicable
      'ranking.activeSwitchLabel': 'IN CHAT', // max 12 characters; keep upper case, if applicable
      'ranking.empty': 'Nessun dato',
      'ranking.currentPage': 'Pagina corrente',

      'ranking.note': 'È mostrata la top ten',
      // note added to the end to the ranking list to explain that only the top ten pages are shown

      /**
       * Chat
       */
      'chat.welcomeFirstMessagePage': 'Chatta con le altre persone presenti su questa pagina',
      'chat.welcomeFirstMessageSite': 'Chatta con le altre persone presenti su questo sito',

      'chat.welcomeSecondMessage': 'Ricorda che quello che scrivi in chat è pubblico e scompare dopo $N $A',
      'chat.welcomeSecondMessageJWT': 'Ricorda che quello che scrivi in chat potrebbe essere pubblico e scompare dopo $N $A',
      'chat.welcomeSecondMessage.A.minutes': 'minuti',
      'chat.welcomeSecondMessage.A.hours': 'ore',
      'chat.welcomeSecondMessage.A.days': 'giorni',
      'chat.welcomeSecondMessage.A.weeks': 'settimane',
      // example: "Please remember that your messages are public and disappear after 2 hours"

      'chat.placeholder': 'Scrivi un messaggio...',
      'chat.postBtn': 'Invia', // means "publish this message"

      'chat.tooFrequentError': 'Sei un po\' troppo veloce...\nPer favore non inondare la chat',
      // \n means to break the line; \' distinguishes the apostrophe from the final apex

      'chat.blockedError': 'Ci dispiace... Questo messaggio sembra inappropriato',
      'chat.abortedError': 'Accesso annullato o cookie disabilitati su questo browser',
      'chat.mutedError': 'Ops! Sembra tu sia stato silenziato',
      'chat.notPersistentError': 'L\'autenticazione non sarà ricordata a causa di impostazioni di privacy restrittive. Abilita i cookie per Now4real nel tuo browser per evitare che ciò accada.',

      'chat.signinRequired': '<a>Accedi</a> per chattare',
      // keep <a> and </a> unchanged and surrounding the translation of "Sign in"

      'chat.viewOnly': 'Sola lettura',

      // below are the actions on messages that appear in a contextual menu
      'chat.replyBtn': 'Rispondi',
      'chat.deleteBtn': 'Elimina',

      /**
       * Presence
       */
      'presence.all.a': '1 persona su questa pagina (di $N sul sito)',
      // example: "1 person on this page (of 23 on this site)"

      'presence.all.b': '$N persone su questa pagina (di $M sul sito)',
      // example: "5 people on this page (of 23 on this site)"

      'presence.page.a': '1 persona su questa pagina',
      'presence.page.b': '$N persone su questa pagina',

      'presence.site.a': '1 persona su questo sito',
      'presence.site.b': '$N persone su questo sito',

      /**
       * Emoji-picker labels
       */
      'emoji-picker.people': 'Persone',
      'emoji-picker.nature': 'Natura',
      'emoji-picker.food': 'Cibo',
      'emoji-picker.activity': 'Attività',
      'emoji-picker.travel': 'Posti',
      'emoji-picker.objects': 'Oggetti',
      'emoji-picker.symbols': 'Simboli',
      'emoji-picker.flags': 'Bandiere',

      /**
       * Typing
       */
      'typing.a': '1 utente sta scrivendo...',

      'typing.b': '$N utenti stanno scrivendo...',
      // example: "5 people are typing..."

      'typing.c': '$A sta scrivendo...',
      // example: "Alex is typing..."

      'typing.d': '$A e $B stanno scrivendo...',
      // example: "Alex and Ben are typing..."

      'typing.e': '$A, $B, e $C stanno scrivendo...',
      // example: "Alex, Ben, and Cindy are typing..."

      'typing.f': '$A e un altro stanno scrivendo...',
      // example: "Alex and 1 other are typing..."

      'typing.g': '$A e $N altri stanno scrivendo...',
      // example: "Alex and 3 others are typing..."

      'typing.h': '$A, $B, e un altro stanno scrivendo...',
      // example: "Alex, Ben, and 1 other are typing..."

      'typing.i': '$A, $B, e $N altri stanno scrivendo...',
      // example: "Alex, Ben, and 3 others are typing..."

      'typing.j': '$A, $B, $C, e un altro stanno scrivendo...',
      // example: "Alex, Ben, Cindy, and 1 other are typing..."

      'typing.k': '$A, $B, $C, e $N altri stanno scrivendo...',
      // example: "Alex, Ben, Cindy, and 3 others are typing..."

      /**
       * Social login dialog
       */
      'social-modal.title': 'Accedi',
      'social-modal.header': 'Chatta su tutti i siti che usano Now4real',

      // buttons:
      'social-modal.google': 'Accedi con Google',
      'social-modal.facebook': 'Accedi con Facebook',
      'social-modal.twitter': 'Accedi con Twitter',
      'social-modal.linkedin': 'Accedi con LinkedIn',
      'social-modal.email': 'Accedi con email',

      'social-modal.footer': 'Cliccando su “Accedi” qui sopra accetti le <a1>Condizioni di servizio</a1> e la <a2>Privacy policy</a2> di Now4real',
      // keep <a1> and </a1> unchanged and surrounding the translation of "Terms of Service"
      // keep <a2> and </a2> unchanged and surrounding the translation of "Privacy Policy"

      /**
       * JWT login dialog
       */
      'jwt-modal.title': 'Consenso',


      'jwt-modal.header': 'Per iniziare a chattare devi accettare le <a1>Condizioni di servizio</a1> e la <a2>Privacy policy</a2> di Now4real (il servizio di chat)',
      // keep <a1> and </a1> unchanged and surrounding the translation of "Terms of Service"
      // keep <a2> and </a2> unchanged and surrounding the translation of "Privacy Policy"

      'jwt-modal.button': 'Accetto'
   },

   /****************************************************************************************
    * SPANISH (Castilian)
    ****************************************************************************************/
   'es': {
      'genericError': '¡UPS! Algo ha fallado',

      'connection-status.offline': 'Estás desconectado/a',

      /**
       * Time representation
       */
      'hour-format': 24,
      // 12 (e.g. "3:52 PM") or 24 (e.g. "15:52")

      /**
       * Commons
       */
      'commons.signedWith.google': 'Registrado a través de Google',
      'commons.signedWith.facebook': 'Registrado a través de Facebook',
      'commons.signedWith.twitter': 'Registrado a través de Twitter',
      'commons.signedWith.linkedin': 'Registrado a través de LinkedIn',
      'commons.signedWith.email': 'Registrado a través de email',
      'commons.signedWith.jwt': 'Registrado en el sitio',

      'commons.close': 'Cerrar', // close button

      /**
       * Tooltips and balloons on closed widget
       */
      'monitor.pageViewersTitle': 'Personas viendo esta página',
      'monitor.siteViewersTitle': 'Personas viendo este sitio',
      'monitor.chatBalloon': 'CHAT', // keep upper case, if applicable
      'monitor.presenceBalloon': 'Personas presentes ahora',

      /**
       * Menu
       */
      'status-header.options': 'Opciones',
      'status-header.help': 'Ayuda',
      'status-header.issue': 'Informa de un Problema',
      'status-header.terms': 'Términos del Servicio',
      'status-header.privacy': 'Política de Privacidad',
      'status-header.signout': 'Cerrar Sesión',

      'status-header.notRememberedLogin': 'Sin recordar',
      // means that the login status is temporary and will not be remembered next time

      /**
       * Tab labels and tooltips
       */
      'tab.chatTabLabel': 'CHAT', // max 8 characters; keep upper case, if applicable
      'tab.chatTitlePage': 'Habla aquí con otras personas que están ahora en esta página',
      'tab.chatTitleSite': 'Habla aquí con otras personas que están ahora en este sitio',

      'tab.rankingTabLabel': 'PÁGINAS', // max 8 characters; keep upper case, if applicable
      'tab.rankingTitle': 'Dónde está la gente ahora en este sitio',

      'tab.heatmapTabLabel': 'MAPA', // max 8 characters; keep upper case, if applicable
      'tab.heatmapTitle': 'Dónde está la gente en el mundo real',

      /**
       * Heatmap
       */
      'heatmap.pageSwitchLabel': 'PÁGINA', // max 12 characters; keep upper case, if applicable
      'heatmap.siteSwitchLabel': 'SITIO', // max 12 characters; keep upper case, if applicable
      'heatmap.empty': 'Sin datos',

      /**
       * Ranking
       */
      'ranking.foregroundTitle': 'Personas en este sitio',
      'ranking.activeTitle': 'Personas hablando en este sitio',
      'ranking.foregroundSwitchLabel': 'VISITANTES', // max 12 characters; keep upper case, if applicable
      'ranking.activeSwitchLabel': 'EN EL CHAT', // max 12 characters; keep upper case, if applicable
      'ranking.empty': 'Sin datos',
      'ranking.currentPage': 'Página actual',

      'ranking.note': 'Mostrando las diez primeras páginas',
      // note added to the end to the ranking list to explain that only the top ten pages are shown

      /**
       * Chat
       */
      'chat.welcomeFirstMessagePage': 'Habla aquí con otras personas que están ahora en esta página',
      'chat.welcomeFirstMessageSite': 'Habla aquí con otras personas que están ahora en este sitio',

      'chat.welcomeSecondMessage': 'Recuerda que lo que escribes en el chat es público y desaparece a los $N $A',
      'chat.welcomeSecondMessageJWT': 'Recuerda que lo que escribes en el chat puede ser público y desaparece a los $N $A',
      'chat.welcomeSecondMessage.A.minutes': 'minutos',
      'chat.welcomeSecondMessage.A.hours': 'horas',
      'chat.welcomeSecondMessage.A.days': 'dias',
      'chat.welcomeSecondMessage.A.weeks': 'semanas',
      // example: "Please remember that your messages are public and disappear after 2 hours"

      'chat.placeholder': 'Escribe un mensaje...',
      'chat.postBtn': 'Publicar', // means "publish this message"

      'chat.tooFrequentError': 'Vas un poco rápido...\nPor favor, no llenes el chat',
      // \n means to break the line; \' distinguishes the apostrophe from the final apex

      'chat.blockedError': 'Lo siento... Este mensaje parece inapropiado',
      'chat.abortedError': 'Inicio de sesión cancelado o cookies desactivadas en este navegador',
      'chat.mutedError': '¡UPS! Parece que te han silenciado',
      'chat.notPersistentError': 'La autenticación no será recordada debido a tu configuración de privacidad restringida. Por favor, habilita las cookies para Now4real en tu navegador para evitar que esto suceda.',

      'chat.signinRequired': '<a>Inicia sesión</a> para hablar',
      // keep <a> and </a> unchanged and surrounding the translation of "Sign in"

      'chat.viewOnly': 'Solo lectura',

      // below are the actions on messages that appear in a contextual menu
      'chat.replyBtn': 'Responder',
      'chat.deleteBtn': 'Eliminar',

      /**
       * Presence
       */
      'presence.all.a': '1 persona en esta página (de $N en este sitio)',
      // example: "1 person on this page (of 23 on this site)"

      'presence.all.b': '$N personas en esta página (de $M en este sitio)',
      // example: "5 people on this page (of 23 on this site)"

      'presence.page.a': '1 persona en esta página',
      'presence.page.b': '$N personas en esta página',

      'presence.site.a': '1 persona en este sitio',
      'presence.site.b': '$N personas en este sitio',

      /**
       * Emoji-picker labels
       */
      'emoji-picker.people': 'Personas',
      'emoji-picker.nature': 'Naturaleza',
      'emoji-picker.food': 'Comida',
      'emoji-picker.activity': 'Actividad',
      'emoji-picker.travel': 'Lugares',
      'emoji-picker.objects': 'Objetos',
      'emoji-picker.symbols': 'Símbolos',
      'emoji-picker.flags': 'Banderas',

      /**
       * Typing
       */
      'typing.a': '1 usuario está escribiendo...',

      'typing.b': '$N usuarios están escribiendo...',
      // example: "5 people are typing..."

      'typing.c': '$A está escribiendo...',
      // example: "Alex is typing..."

      'typing.d': '$A y $B están escribiendo...',
      // example: "Alex and Ben are typing..."

      'typing.e': '$A, $B, y $C están escribiendo...',
      // example: "Alex, Ben, and Cindy are typing..."

      'typing.f': '$A y 1 otro están escribiendo...',
      // example: "Alex and 1 other are typing..."

      'typing.g': '$A y $N otros están escribiendo...',
      // example: "Alex and 3 others are typing..."

      'typing.h': '$A, $B, y 1 otro están escribiendo...',
      // example: "Alex, Ben, and 1 other are typing..."

      'typing.i': '$A, $B, y $N otros están escribiendo...',
      // example: "Alex, Ben, and 3 others are typing..."

      'typing.j': '$A, $B, $C, y 1 otro están escribiendo...',
      // example: "Alex, Ben, Cindy, and 1 other are typing..."

      'typing.k': '$A, $B, $C, y $N otros están escribiendo...',
      // example: "Alex, Ben, Cindy, and 3 others are typing..."

      /**
       * Social login dialog
       */
      'social-modal.title': 'Iniciar sesión',
      'social-modal.header': 'Empieza a hablar en cualquier página web que use Now4real',

      // buttons:
      'social-modal.google': 'Inicia sesión con Google',
      'social-modal.facebook': 'Inicia sesión con Facebook',
      'social-modal.twitter': 'Inicia sesión con Twitter',
      'social-modal.linkedin': 'Inicia sesión con LinkedIn',
      'social-modal.email': 'Inicia sesión con email',

      'social-modal.footer': 'Haz click en “Iniciar sesión” arriba para aceptar los <a1>Términos del Servicio</a1> y la <a2>Política de Privacidad</a2> de Now4real',
      // keep <a1> and </a1> unchanged and surrounding the translation of "Terms of Service"
      // keep <a2> and </a2> unchanged and surrounding the translation of "Privacy Policy"

      /**
       * JWT login dialog
       */
      'jwt-modal.title': 'Consentimiento',


      'jwt-modal.header': 'Para empezar a hablar debes aceptar los <a1>Términos del Servicio</a1> y la <a2>Política de Privacidad</a2> de Now4real (el servicio de chat)',
      // keep <a1> and </a1> unchanged and surrounding the translation of "Terms of Service"
      // keep <a2> and </a2> unchanged and surrounding the translation of "Privacy Policy"

      'jwt-modal.button': 'Acepto'
   },

   /****************************************************************************************
    * PORTUGUESE (Brazilian)
    ****************************************************************************************/
   'pt': {


   },

   /****************************************************************************************
    * GERMAN (Standard)
    ****************************************************************************************/
   'de': {


   }
}
