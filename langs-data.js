/*
   RULES FOR TRANSLATORS
   - Clone the ENGLISH ('en') blog and change 'en' to the target language code.
   - All the text after symbols /* and // are comments and must not be translated.
   - Please read the comments to understand the context of the translation.
   - For each row, only the text after the colon (:) must be translated.
     Example:
        'monitor.siteViewersTitle': 'People viewing this site',
     is translated, for Italian, into
        'monitor.siteViewersTitle': 'Persone che stanno vedendo questo sito',
   - Preserve all quotation marks (') around the translations.
   - If you need to use the apostrophe, write \' instead of ' (to distinguish it from quotation marks).
   - Preserve commas at the end of lines (,).
   - In some cases, phrases contain placeholders, which are expressed as $A, $B, $N, etc.
     These placeholders must be kept in the traslation and will be automatically replaced with actual data.
   - Use gender-neutral language
   - Please get back to us for any doubts and clarifications! Reach out via GitHub or at support@now4real.com
*/

export default {

   /****************************************************************************************
    * ENGLISH (American)
    ****************************************************************************************/

   'en': {
      'genericError': 'Oops! Something went wrong',

      'connection-status.offline': 'You are offline',

      /**
       * Time representation
       */
      'hour-format': 12,
      // 12 (e.g. "3:52 PM") or 24 (e.g. "15:52")

      'timeUnit.minutes': 'minutes',
      'timeUnit.hours': 'hours',
      'timeUnit.days': 'days',
      'timeUnit.weeks': 'weeks',
      'timeUnit.months': 'months',
      'timeUnit.years': 'years',

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
      'status-header.flushChat': 'Flush this chat',
      'status-header.disableChat': 'Disable this chat',
      'status-header.enableChat': 'Enable this chat',
      'status-header.help': 'Help',
      'status-header.issue': 'Report an Issue',
      'status-header.terms': 'Terms of Service',
      'status-header.privacy': 'Privacy Policy',
      'status-header.signout': 'Sign out',
      'status-header.signin': 'Sign in',

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
      // $N is a number and $A in a time unit taken from timeUnit.
      // example: "Please remember that your messages are public and disappear after 2 hours"

      'chat.messageDeleted.byYou': 'You deleted this message',
      'chat.messageDeleted.byAuthor': 'Message deleted by the author',
      'chat.messageDeleted.byModerator': 'Message deleted by a moderator',
      'chat.messageDeleted.byAdmin': 'Message deleted by the admin',
      'chat.messageDeleted.byNow4real': 'Message deleted by the admin',
      'chat.messageDeleted.unknown': 'Message deleted',

      'chat.placeholder': 'Type a message',
      'chat.postBtn': 'Post', // means "publish this message"

      'chat.tooFrequentError': 'You are a bit too fast...\nPlease don\'t flood the chat',
      // \n means to break the line; \' distinguishes the apostrophe from the final apex

      'chat.blockedError': 'Sorry... This message seems inappropriate',
      'chat.abortedError': 'Sign-in canceled or cookies disabled on this browser',
      'chat.mutedError': 'Oops! It looks like you have been muted',
      'chat.notPersistentError': 'The authentication will not be remembered due to your restricted privacy settings. Please enable cookies for Now4real in your browser to prevent this from happening.',
      'chat.disabledError': 'This chat has been disabled',

      'chat.disabledByAdmin': 'This chat has been disabled by the admin',
      'chat.disabledByModerator': 'This chat has been disabled by a moderator',
      'chat.signinRequired': '<a>Sign in</a> to chat',
      // keep <a> and </a> unchanged and surrounding the translation of "Sign in"

      'chat.viewOnly': 'View-only mode',

      // below are the actions on messages that appear in a contextual menu
      'chat.replyBtn': 'Reply', // means "reply to this message"
      'chat.deleteBtn': 'Delete', // means "delete this message"
      'chat.muteBtn': 'Mute', // means "mute this user"

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

      'jwt-modal.button': 'Accept',

      /**
       * Mute dialog
       */
      'mute-modal.title': 'Mute User',

      'mute-modal.header': 'User $U has been muted until $E',
      // example: "User Ben has been muted until Wed, 14 Jun 2022 07:12:00 GMT"

      'mute-modal.body.set': 'Mute user $U for:',
      // example: "Mute user Ben for:" followed by input fields with "3 days"
      
      'mute-modal.body.update': 'Update mute period:',
      // example: "Update mute period:" followed by input fields with "5 days"    
      
      'mute-modal.body.deleteAlert': 'You are unmuting the user',

      'mute-modal.button': 'Confirm'
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
      
      'timeUnit.minutes': 'minuti',
      'timeUnit.hours': 'ore',
      'timeUnit.days': 'giorni',
      'timeUnit.weeks': 'settimane',
      'timeUnit.months': 'mesi',
      'timeUnit.years': 'anni',

      /**
       * Commons
       */
      'commons.signedWith.google': 'Connesso via Google',
      'commons.signedWith.facebook': 'Connesso via Facebook',
      'commons.signedWith.twitter': 'Connesso via Twitter',
      'commons.signedWith.linkedin': 'Connesso via LinkedIn',
      'commons.signedWith.email': 'Connesso via email',
      'commons.signedWith.jwt': 'Connesso su questo sito',

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
      'status-header.flushChat': 'Svuota questa chat',
      'status-header.disableChat': 'Disattiva questa chat',
      'status-header.enableChat': 'Attiva questa chat',
      'status-header.help': 'Aiuto',
      'status-header.issue': 'Segnala un problema',
      'status-header.terms': 'Condizioni di servizio',
      'status-header.privacy': 'Privacy policy',
      'status-header.signout': 'Disconnetti',
      'status-header.signin': 'Accedi',

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
      // $N is a number and $A in a time unit taken from timeUnit.
      // example: "Please remember that your messages are public and disappear after 2 hours"

      'chat.messageDeleted.byYou': 'Hai cancellato questo messaggio',
      'chat.messageDeleted.byAuthor': 'Messaggio cancellato dall\'autore',
      'chat.messageDeleted.byModerator': 'Messaggio cancellato da un moderatore',
      'chat.messageDeleted.byAdmin': 'Messaggio cancellato dall\'amministratore',
      'chat.messageDeleted.byNow4real': 'Messaggio cancellato dall\'amministratore',
      'chat.messageDeleted.unknown': 'Messaggio cancellato',

      'chat.placeholder': 'Scrivi un messaggio',
      'chat.postBtn': 'Invia', // means "publish this message"

      'chat.tooFrequentError': 'Sei un po\' troppo veloce...\nPer favore non inondare la chat',
      // \n means to break the line; \' distinguishes the apostrophe from the final apex

      'chat.blockedError': 'Ci dispiace... Questo messaggio sembra inappropriato',
      'chat.abortedError': 'Accesso annullato o cookie disabilitati su questo browser',
      'chat.mutedError': 'Ops! Sembra tu sia stato silenziato',
      'chat.notPersistentError': 'L\'autenticazione non sarà ricordata a causa di impostazioni di privacy restrittive. Abilita i cookie per Now4real nel tuo browser per evitare che ciò accada.',
      'chat.disabledError': 'Questa chat è stata disabilitata',

      'chat.signinRequired': '<a>Accedi</a> per chattare',
      // keep <a> and </a> unchanged and surrounding the translation of "Sign in"

      'chat.disabledByAdmin': 'Questa chat è stata disabilitata dall\'amministratore',
      'chat.disabledByModerator': 'Questa chat è stata disabilitata da un moderatore',
      'chat.viewOnly': 'Sola lettura',

      // below are the actions on messages that appear in a contextual menu
      'chat.replyBtn': 'Rispondi', // means "reply to this message"
      'chat.deleteBtn': 'Elimina', // means "delete this message"
      'chat.muteBtn': 'Silenzia', // means "mute this user"

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
      'typing.a': 'Una persona sta scrivendo...',

      'typing.b': '$N persone stanno scrivendo...',
      // example: "5 people are typing..."

      'typing.c': '$A sta scrivendo...',
      // example: "Alex is typing..."

      'typing.d': '$A e $B stanno scrivendo...',
      // example: "Alex and Ben are typing..."

      'typing.e': '$A, $B e $C stanno scrivendo...',
      // example: "Alex, Ben, and Cindy are typing..."

      'typing.f': '$A ed un\'altra persona stanno scrivendo...',
      // example: "Alex and 1 other are typing..."

      'typing.g': '$A e $N altre persone stanno scrivendo...',
      // example: "Alex and 3 others are typing..."

      'typing.h': '$A, $B ed un\'altra persona stanno scrivendo...',
      // example: "Alex, Ben, and 1 other are typing..."

      'typing.i': '$A, $B e $N altre persone stanno scrivendo...',
      // example: "Alex, Ben, and 3 others are typing..."

      'typing.j': '$A, $B, $C ed un\'altra persona stanno scrivendo...',
      // example: "Alex, Ben, Cindy, and 1 other are typing..."

      'typing.k': '$A, $B, $C e $N altre persone stanno scrivendo...',
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

      'jwt-modal.button': 'Accetto',

      /**
       * Mute dialog
       */
      'mute-modal.title': 'Silenzia Utente',

      'mute-modal.header': 'L\'utente $U è stato silenziato fino a $E',
      // example: "User Ben has been muted until Wed, 14 Jun 2022 07:12:00 GMT"

      'mute-modal.body.set': 'Silenzia l\'utente $U per:',
      // example: "Mute user Ben for:" followed by input fields with "3 days"
      
      'mute-modal.body.update': 'Aggiorna il periodo di silenziamento:',
      // example: "Update mute period:" followed by input fields with "5 days"    
      
      'mute-modal.body.deleteAlert': 'Stai rimuovendo il silenziamento per l\'utente',

      'mute-modal.button': 'Conferma'
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
      'commons.signedWith.jwt': 'Registrado en este sitio',

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

      'chat.placeholder': 'Escribe un mensaje',
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
      'typing.a': 'Una persona está escribiendo...',

      'typing.b': '$N personas están escribiendo...',
      // example: "5 people are typing..."

      'typing.c': '$A está escribiendo...',
      // example: "Alex is typing..."

      'typing.d': '$A y $B están escribiendo...',
      // example: "Alex and Ben are typing..."

      'typing.e': '$A, $B y $C están escribiendo...',
      // example: "Alex, Ben, and Cindy are typing..."

      'typing.f': '$A y otra persona están escribiendo...',
      // example: "Alex and 1 other are typing..."

      'typing.g': '$A y otras $N personas están escribiendo...',
      // example: "Alex and 3 others are typing..."

      'typing.h': '$A, $B y otra persona están escribiendo...',
      // example: "Alex, Ben, and 1 other are typing..."

      'typing.i': '$A, $B y otras $N personas están escribiendo...',
      // example: "Alex, Ben, and 3 others are typing..."

      'typing.j': '$A, $B, $C y otra persona están escribiendo...',
      // example: "Alex, Ben, Cindy, and 1 other are typing..."

      'typing.k': '$A, $B, $C y otras $N personas están escribiendo...',
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
      'genericError': 'Ups! Algo deu errado',

      'connection-status.offline': 'Você está desconectado/a',

      /**
       * Time representation
       */
      'hour-format': 24,
      // 12 (e.g. "3:52 PM") or 24 (e.g. "15:52")

      /**
       * Commons
       */
      'commons.signedWith.google': 'Conectado via Google',
      'commons.signedWith.facebook': 'Conectado via Facebook',
      'commons.signedWith.twitter': 'Conectado via Twitter',
      'commons.signedWith.linkedin': 'Conectado via LinkedIn',
      'commons.signedWith.email': 'Conectado via email',
      'commons.signedWith.jwt': 'Conectado a este site',

      'commons.close': 'Fechar', // close button

      /**
       * Tooltips and balloons on closed widget
       */
      'monitor.pageViewersTitle': 'Pessoas visualizando esta página',
      'monitor.siteViewersTitle': 'Pessoas visualizando este site',
      'monitor.chatBalloon': 'CHAT', // keep upper case, if applicable
      'monitor.presenceBalloon': 'People presentes agora',

      /**
       * Menu
       */
      'status-header.options': 'Opções',
      'status-header.help': 'Ajuda',
      'status-header.issue': 'Reportar um problema',
      'status-header.terms': 'Termos de Serviço',
      'status-header.privacy': 'Política de Privacidade',
      'status-header.signout': 'Sair',

      'status-header.notRememberedLogin': 'Não será lembrado',
      // means that the login status is temporary and will not be remembered next time

      /**
       * Tab labels and tooltips
       */
      'tab.chatTabLabel': 'CHAT', // max 8 characters; keep upper case, if applicable
      'tab.chatTitlePage': 'Converse aqui com outras pessoas que estão nesta página agora',
      'tab.chatTitleSite': 'Converse aqui com outras pessoas que estão neste site agora',

      'tab.rankingTabLabel': 'PÁGINAS', // max 8 characters; keep upper case, if applicable
      'tab.rankingTitle': 'Onde as pessoas estão neste site agora',

      'tab.heatmapTabLabel': 'MAPA', // max 8 characters; keep upper case, if applicable
      'tab.heatmapTitle': 'Onde as pessoas estão no mundo real',

      /**
       * Heatmap
       */
      'heatmap.pageSwitchLabel': 'PÁGINA', // max 12 characters; keep upper case, if applicable
      'heatmap.siteSwitchLabel': 'SITE', // max 12 characters; keep upper case, if applicable
      'heatmap.empty': 'Sem dados',

      /**
       * Ranking
       */
      'ranking.foregroundTitle': 'Pessoas neste site',
      'ranking.activeTitle': 'Pessoas conversando neste site',
      'ranking.foregroundSwitchLabel': 'VISITANTES', // max 12 characters; keep upper case, if applicable
      'ranking.activeSwitchLabel': 'CONVERSANDO', // max 12 characters; keep upper case, if applicable
      'ranking.empty': 'Sem dados',
      'ranking.currentPage': 'Página atual',

      'ranking.note': 'Mostrando as dez páginas principais',
      // note added to the end to the ranking list to explain that only the top ten pages are shown

      /**
       * Chat
       */
      'chat.welcomeFirstMessagePage': 'Converse aqui com outras pessoas que estão nesta página agora',
      'chat.welcomeFirstMessageSite': 'Converse aqui com outras pessoas que estão neste site agora',

      'chat.welcomeSecondMessage': 'Lembre-se de que o que você escreve no chat é público e desaparece após $N $A',
      'chat.welcomeSecondMessageJWT': 'Lembre-se de que o que você escreve no chat pode ser público e desaparece após $N $A',
      'chat.welcomeSecondMessage.A.minutes': 'minutos',
      'chat.welcomeSecondMessage.A.hours': 'horas',
      'chat.welcomeSecondMessage.A.days': 'dias',
      'chat.welcomeSecondMessage.A.weeks': 'semanas',
      // example: "Please remember that your messages are public and disappear after 2 hours"

      'chat.placeholder': 'Escrever mensagem',
      'chat.postBtn': 'Postar', // means "publish this message"

      'chat.tooFrequentError': 'Você está sendo\' rápido demais... \nPor favor não congestione o bate-papo',
      // \n means to break the line; \' distinguishes the apostrophe from the final apex

      'chat.blockedError': 'Desculpe ... Esta mensagem parece inadequada',
      'chat.abortedError': 'Login cancelado ou cookies desativados neste navegador',
      'chat.mutedError': 'Ups! Parece que você foi silenciado',
      'chat.notPersistentError': 'A autenticação não será lembrada devido às suas configurações de privacidade restritas. Ative os cookies para Now4real no seu navegador para evitar que isso aconteça.',

      'chat.signinRequired': '<a>Entrar</a> para conversar',
      // keep <a> and </a> unchanged and surrounding the translation of "Sign in"

      'chat.viewOnly': 'Somente leitura',

      // below are the actions on messages that appear in a contextual menu
      'chat.replyBtn': 'Responder',
      'chat.deleteBtn': 'Excluir',

      /**
       * Presence
       */
      'presence.all.a': '1 pessoa nesta página (de $N neste site)',
      // example: "1 person on this page (of 23 on this site)"

      'presence.all.b': '$N pessoas nesta página (de $M neste site)',
      // example: "5 people on this page (of 23 on this site)"

      'presence.page.a': '1 pessoa nesta página',
      'presence.page.b': '$N pessoas nesta página',

      'presence.site.a': '1 pessoa neste site',
      'presence.site.b': '$N pessoas neste site',

      /**
       * Emoji-picker labels
       */
      'emoji-picker.people': 'Pessoas',
      'emoji-picker.nature': 'Natureza',
      'emoji-picker.food': 'Comida',
      'emoji-picker.activity': 'Atividades',
      'emoji-picker.travel': 'Lugares',
      'emoji-picker.objects': 'Objetos',
      'emoji-picker.symbols': 'Símbolos',
      'emoji-picker.flags': 'Bandeiras',

      /**
       * Typing
       */
      'typing.a': 'Uma pessoa está escrevendo...',

      'typing.b': '$N pessoas estão escrevendo...',
      // example: "5 people are typing..."

      'typing.c': '$A está escrevendo...',
      // example: "Alex is typing..."

      'typing.d': '$A e $B estão escrevendo...',
      // example: "Alex and Ben are typing..."

      'typing.e': '$A, $B e $C estão escrevendo...',
      // example: "Alex, Ben, and Cindy are typing..."

      'typing.f': '$A e outra pessoa estão escrevendo...',
      // example: "Alex and 1 other are typing..."

      'typing.g': '$A e $N outras pessoas estão escrevendo...',
      // example: "Alex and 3 others are typing..."

      'typing.h': '$A, $B e outra pessoa estão escrevendo...',
      // example: "Alex, Ben, and 1 other are typing..."

      'typing.i': '$A, $B e $N outras pessoas estão escrevendo...',
      // example: "Alex, Ben, and 3 others are typing..."

      'typing.j': '$A, $B, $C e outra pessoa estão escrevendo...',
      // example: "Alex, Ben, Cindy, and 1 other are typing..."

      'typing.k': '$A, $B, $C e $N outras pessoas estão escrevendo...',
      // example: "Alex, Ben, Cindy, and 3 others are typing..."

      /**
       * Social login dialog
       */
      'social-modal.title': 'Entrar',
      'social-modal.header': 'Começar a conversar em qualquer website que utiliza Now4real',

      // buttons:
      'social-modal.google': 'Entrar com Google',
      'social-modal.facebook': 'Entrar com Facebook',
      'social-modal.twitter': 'Entrar com Twitter',
      'social-modal.linkedin': 'Entrar com LinkedIn',
      'social-modal.email': 'Entrar com email',

      'social-modal.footer': 'Click em “Entrar” acima para aceitar os <a1>Termos de Serviço</a1> e a <a2>Política de Privacidade</a2> de Now4real',
      // keep <a1> and </a1> unchanged and surrounding the translation of "Terms of Service"
      // keep <a2> and </a2> unchanged and surrounding the translation of "Privacy Policy"

      /**
       * JWT login dialog
       */
      'jwt-modal.title': 'Consentimento',

      'jwt-modal.header': 'Para começar a conversar você deve aceitar os <a1>Termos de Serviço</a1> e a <a2>Política de Privacidade</a2> de Now4real (o serviço de chat)',
      // keep <a1> and </a1> unchanged and surrounding the translation of "Terms of Service"
      // keep <a2> and </a2> unchanged and surrounding the translation of "Privacy Policy"

      'jwt-modal.button': 'Acetair'
   },

   /****************************************************************************************
    * GERMAN (Standard)
    ****************************************************************************************/
   'de': {
      'genericError': 'Hoppla! Etwas ist schief gelaufen',

      'connection-status.offline': 'Sie sind offline',

      /**
       * Time representation
       */
      'hour-format': 24,
      // 12 (e.g. "3:52 PM") or 24 (e.g. "15:52")

      /**
       * Commons
       */
      'commons.signedWith.google': 'Angemeldet über Google',
      'commons.signedWith.facebook': 'Angemeldet über Facebook',
      'commons.signedWith.twitter': 'Angemeldet über Twitter',
      'commons.signedWith.linkedin': 'Angemeldet über LinkedIn',
      'commons.signedWith.email': 'Angemeldet über email',
      'commons.signedWith.jwt': 'Angemeldet in diesem Webseite',

      'commons.close': 'Schließen', // close button

      /**
       * Tooltips and balloons on closed widget
       */
      'monitor.pageViewersTitle': 'Seitenbesucher jetzt',
      'monitor.siteViewersTitle': 'Webseitenbesucher jetzt',
      'monitor.chatBalloon': 'CHAT', // keep upper case, if applicable
      'monitor.presenceBalloon': 'Menschen präsentieren jetzt',

      /**
       * Menu
       */
      'status-header.options': 'Optionen',
      'status-header.help': 'Hilfe',
      'status-header.issue': 'Ein Problem melden',
      'status-header.terms': 'Nutzungsbedingungen',
      'status-header.privacy': 'Datenschutz-Bestimmungen',
      'status-header.signout': 'Ausloggen',

      'status-header.notRememberedLogin': 'Nicht gespeichert',
      // means that the login status is temporary and will not be remembered next time

      /**
       * Tab labels and tooltips
       */
      'tab.chatTabLabel': 'CHAT', // max 8 characters; keep upper case, if applicable
      'tab.chatTitlePage': 'Chatten Sie hier mit anderen Besucher, die jetzt auf dieser Seite sind',
      'tab.chatTitleSite': 'Chatten Sie hier mit anderen Besucher, die jetzt auf dieser Webseite sind',

      'tab.rankingTabLabel': 'SEITEN', // max 8 characters; keep upper case, if applicable
      'tab.rankingTitle': 'Auf welcher Seite sind die Besucher',

      'tab.heatmapTabLabel': 'KARTE', // max 8 characters; keep upper case, if applicable
      'tab.heatmapTitle': 'Woher kommen die Besucher',

      /**
       * Heatmap
       */
      'heatmap.pageSwitchLabel': 'SEITE', // max 12 characters; keep upper case, if applicable
      'heatmap.siteSwitchLabel': 'WEBSEITE', // max 12 characters; keep upper case, if applicable
      'heatmap.empty': 'Keine Daten',

      /**
       * Ranking
       */
      'ranking.foregroundTitle': 'Besucher auf dieser Webseite',
      'ranking.activeTitle': 'Besucher auf dieser Webseite chatten',
      'ranking.foregroundSwitchLabel': 'ZUSCHAUER', // max 12 characters; keep upper case, if applicable
      'ranking.activeSwitchLabel': 'CHATTEN', // max 12 characters; keep upper case, if applicable
      'ranking.empty': 'Keine Daten',
      'ranking.currentPage': 'Aktuelle Seite',

      'ranking.note': 'Die besten 10 Seiten werden angezeigt',
      // note added to the end to the ranking list to explain that only the top ten pages are shown

      /**
       * Chat
       */
      'chat.welcomeFirstMessagePage': 'Chatten Sie hier mit anderen Besucher, die jetzt auf dieser Seite sind',
      'chat.welcomeFirstMessageSite': 'Chatten Sie hier mit anderen Besucher, die jetzt auf dieser Webseite sind',

      'chat.welcomeSecondMessage': 'Bitte denken Sie daran, dass alles, was Sie im Chat schreiben, öffentlich ist und nach $N $A verschwindet',
      'chat.welcomeSecondMessageJWT': 'Bitte denken Sie daran, dass das, was Sie im Chat schreiben, möglicherweise öffentlich ist und nach $N $A verschwindet',
      'chat.welcomeSecondMessage.A.minutes': 'Protokoll',
      'chat.welcomeSecondMessage.A.hours': 'Std',
      'chat.welcomeSecondMessage.A.days': 'Tage',
      'chat.welcomeSecondMessage.A.weeks': 'Wochen',
      // example: "Please remember that your messages are public and disappear after 2 hours"

      'chat.placeholder': 'Schreiben',
      'chat.postBtn': 'Post', // means "publish this message"

      'chat.tooFrequentError': 'Sie sind ein wenig zu schnell...\nbitte nicht zu viel schreiben',
      // \n means to break the line; \' distinguishes the apostrophe from the final apex

      'chat.blockedError': 'Sorry... diese Nachricht scheint unangemessen',
      'chat.abortedError': 'Anmelden abgebrochen oder Cookies in diesem Browser deaktiviert',
      'chat.mutedError': 'Hoppla! Es sieht so aus, als wären Sie stummgeschaltet worden',
      'chat.notPersistentError': 'Die Authentifizierung wird aufgrund Ihrer eingeschränkten Datenschutzeinstellungen nicht gespeichert. Um dies zu verhindern, aktivieren Sie bitte die Cookies für Now4real in Ihrem Browser.',

      'chat.signinRequired': '<a>Melden Sie sich an</a>, um zu chatten',
      // keep <a> and </a> unchanged and surrounding the translation of "Sign in"

      'chat.viewOnly': 'Nur Betrachter -Modus',

      // below are the actions on messages that appear in a contextual menu
      'chat.replyBtn': 'Antworten',
      'chat.deleteBtn': 'Löschen',

      /**
       * Presence
       */
      'presence.all.a': '1 Besucher auf dieser Seite (von $N auf dieser Webseite)',
      // example: "1 person on this page (of 23 on this site)"

      'presence.all.b': '$N Besucher auf dieser Seite (von $M auf dieser Webseite)',
      // example: "5 people on this page (of 23 on this site)"

      'presence.page.a': '1 Besucher auf dieser Seite',
      'presence.page.b': '$N Besucher auf dieser Seite',

      'presence.site.a': '1 Besucher auf dieser Webseite',
      'presence.site.b': '$N Besucher auf dieser Webseite',

      /**
       * Emoji-picker labels
       */
      'emoji-picker.people': 'Menschen',
      'emoji-picker.nature': 'Natur',
      'emoji-picker.food': 'Essen',
      'emoji-picker.activity': 'Activität',
      'emoji-picker.travel': 'Orte',
      'emoji-picker.objects': 'Objekte',
      'emoji-picker.symbols': 'Symbole',
      'emoji-picker.flags': 'Fahnen',

      /**
       * Typing
       */
      'typing.a': 'Eine Person schreibt...',

      'typing.b': '$N Leute schreiben...',
      // example: "5 people are typing..."

      'typing.c': '$A schreibt...',
      // example: "Alex is typing..."

      'typing.d': '$A und $B schreiben...',
      // example: "Alex and Ben are typing..."

      'typing.e': '$A, $B und $C schreiben...',
      // example: "Alex, Ben, and Cindy are typing..."

      'typing.f': '$A und eine andere Person schreiben...',
      // example: "Alex and 1 other are typing..."

      'typing.g': '$A und $N andere Leute schreiben...',
      // example: "Alex and 3 others are typing..."

      'typing.h': '$A, $B und eine andere Person schreiben...',
      // example: "Alex, Ben, and 1 other are typing..."

      'typing.i': '$A, $B und $N andere Leute schreiben...',
      // example: "Alex, Ben, and 3 others are typing..."

      'typing.j': '$A, $B, $C und eine andere Person schreiben...',
      // example: "Alex, Ben, Cindy, and 1 other are typing..."

      'typing.k': '$A, $B, $C und $N andere Leute schreiben...',
      // example: "Alex, Ben, Cindy, and 3 others are typing..."

      /**
       * Social login dialog
       */
      'social-modal.title': 'Anmelden',
      'social-modal.header': 'Chatten Sie jetzt auf einer Website, die Now4real verwendet',

      // buttons:
      'social-modal.google': 'Anmelden via Google',
      'social-modal.facebook': 'Anmelden via Facebook',
      'social-modal.twitter': 'Anmelden via Twitter',
      'social-modal.linkedin': 'Anmelden via LinkedIn',
      'social-modal.email': 'Anmelden via email',

      'social-modal.footer': 'Klick “Anmelden” und akzeptiere damit die <a1>Nutzungsbedingungen</a1> und die <a2>Datenschutzbestimmungen</a2> von Now4real',
      // keep <a1> and </a1> unchanged and surrounding the translation of "Terms of Service"
      // keep <a2> and </a2> unchanged and surrounding the translation of "Privacy Policy"

      /**
       * JWT login dialog
       */
      'jwt-modal.title': 'Zustimmung',

      'jwt-modal.header': 'Um mit dem Chatten zu beginnen, sollen Sie die <a1>Nutzungsbedingungen</a1> und die <a2>Datenschutzbestimmungen</a2> von Now4real (der chat service)',
      // keep <a1> and </a1> unchanged and surrounding the translation of "Terms of Service"
      // keep <a2> and </a2> unchanged and surrounding the translation of "Privacy Policy"

      'jwt-modal.button': 'Akzeptieren'
   },

   /****************************************************************************************
    * POLISH (Standard)
    ****************************************************************************************/
   'pl': {
      'genericError': 'Oops! Coś poszło nie tak',

      'connection-status.offline': 'Jesteś offline',

      /**
       * Time representation
       */
      'hour-format': 24,
      // 12 (e.g. "3:52 PM") or 24 (e.g. "15:52")

      /**
       * Commons
       */
      'commons.signedWith.google': 'Zaloguj się: Google',
      'commons.signedWith.facebook': 'Zaloguj się: Facebook',
      'commons.signedWith.twitter': 'Zaloguj się: Twitter',
      'commons.signedWith.linkedin': 'Zaloguj się: LinkedIn',
      'commons.signedWith.email': 'Zaloguj się przez email',
      'commons.signedWith.jwt': 'Zalogowany na tej stronie',

      'commons.close': 'Zamknij', // close button

      /**
       * Tooltips and balloons on closed widget
       */
      'monitor.pageViewersTitle': 'Osoby przeglądające tę stronę',
      'monitor.siteViewersTitle': 'Osoby przeglądające tę witrynę',
      'monitor.chatBalloon': 'CZAT', // keep upper case, if applicable
      'monitor.presenceBalloon': 'Osoby aktualnie obecne',

      /**
       * Menu
       */
      'status-header.options': 'Opcje',
      'status-header.help': 'Pomoc',
      'status-header.issue': 'Zgłoś błąd',
      'status-header.terms': 'Regulamin',
      'status-header.privacy': 'Polityka Prywatności',
      'status-header.signout': 'Wyloguj się',

      'status-header.notRememberedLogin': 'Nie zapamiętany',
      // means that the login status is temporary and will not be remembered next time

      /**
       * Tab labels and tooltips
       */
      'tab.chatTabLabel': 'CZAT', // max 8 characters; keep upper case, if applicable
      'tab.chatTitlePage': 'Czat z innymi użytkownikami tej strony w czasie rzeczywistym',
      'tab.chatTitleSite': 'Czat z innymi użytkownikami tej witryny w czasie rzeczywistym',

      'tab.rankingTabLabel': 'STRONY', // max 8 characters; keep upper case, if applicable
      'tab.rankingTitle': 'Strony teraz przeglądane',

      'tab.heatmapTabLabel': 'MAPA', // max 8 characters; keep upper case, if applicable
      'tab.heatmapTitle': 'Skąd są',

      /**
       * Heatmap
       */
      'heatmap.pageSwitchLabel': 'STRONA', // max 12 characters; keep upper case, if applicable
      'heatmap.siteSwitchLabel': 'WITRYNA', // max 12 characters; keep upper case, if applicable
      'heatmap.empty': 'Brak danych',

      /**
       * Ranking
       */
      'ranking.foregroundTitle': 'Osoby na tej witrynie',
      'ranking.activeTitle': 'Osoby rozmawiające na tej witrynie',
      'ranking.foregroundSwitchLabel': 'PRZEGLĄDAJĄCY', // max 12 characters; keep upper case, if applicable
      'ranking.activeSwitchLabel': 'ROZMAWIAJĄCY', // max 12 characters; keep upper case, if applicable
      'ranking.empty': 'Brak danych',
      'ranking.currentPage': 'Bieżąca strona',

      'ranking.note': 'Dziesięć najlepszych stron',
      // note added to the end to the ranking list to explain that only the top ten pages are shown

      /**
       * Chat
       */
      'chat.welcomeFirstMessagePage': 'Czat z innymi użytkownikami tej strony w czasie rzeczywistym',
      'chat.welcomeFirstMessageSite': 'Czat z innymi użytkownikami tej witryny w czasie rzeczywistym',

      'chat.welcomeSecondMessage': 'Pamiętaj, że Twoje wiadomości są publiczne i znikają po $N $A',
      'chat.welcomeSecondMessageJWT': 'Pamiętaj, że Twoje wiadomości mogą być publiczne i zniknąć po $N $A',
      'chat.welcomeSecondMessage.A.minutes': 'minutach',
      'chat.welcomeSecondMessage.A.hours': 'godzinach',
      'chat.welcomeSecondMessage.A.days': 'dniach',
      'chat.welcomeSecondMessage.A.weeks': 'tygodniach',
      // example: "Please remember that your messages are public and disappear after 2 hours"

      'chat.placeholder': 'Wpisz wiadomość',
      'chat.postBtn': 'Wyślij', // means "publish this message"

      'chat.tooFrequentError': 'Jesteś trochę za szybki...\nProsimy nie zalewać czatu',
      // \n means to break the line; \' distinguishes the apostrophe from the final apex

      'chat.blockedError': 'Przepraszamy... Ta wiadomość wydaje się nieodpowiednia',
      'chat.abortedError': 'Nie można się zalogować lub ciasteczka są wyłączone w Twojej przeglądarce',
      'chat.mutedError': 'Oops! Wygląda na to, że zostałeś wyciszony',
      'chat.notPersistentError': 'Uwierzytelnienie nie zostanie zapamiętane ze względu na Twoje ustawienia prywatności. Prosimy włączyć obsługę plików cookie w swojej przeglądarce, aby temu zapobiec.',

      'chat.signinRequired': '<a>Zaloguj się</a> aby rozmawiać',
      // keep <a> and </a> unchanged and surrounding the translation of "Sign in"

      'chat.viewOnly': 'Tryb podglądu',

      // below are the actions on messages that appear in a contextual menu
      'chat.replyBtn': 'Odpowiedz',
      'chat.deleteBtn': 'Usuń',

      /**
       * Presence
       */
      'presence.all.a': '1 osoba na tej stronie (z $N na tej witrynie)',
      // example: "1 person on this page (of 23 on this site)"

      'presence.all.b': 'Osób na tej stronie: $N (z $M na tej witrynie)',
      // example: "5 people on this page (of 23 on this site)"

      'presence.page.a': '1 osoba na tej stronie',
      'presence.page.b': 'Ilość osób na tej stronie: $N',

      'presence.site.a': '1 osoba na tej witrynie',
      'presence.site.b': 'Ilość osób na tej witrynie: $N',

      /**
       * Emoji-picker labels
       */
      'emoji-picker.people': 'Ludzie',
      'emoji-picker.nature': 'Natura',
      'emoji-picker.food': 'Jedzenie',
      'emoji-picker.activity': 'Aktywność',
      'emoji-picker.travel': 'Miejsca',
      'emoji-picker.objects': 'Obiekty',
      'emoji-picker.symbols': 'Symbole',
      'emoji-picker.flags': 'Flagi',

      /**
       * Typing
       */
      'typing.a': '1 osoba pisze...',

      'typing.b': '$N osób pisze...',
      // example: "5 people are typing..."

      'typing.c': '$A pisze...',
      // example: "Alex is typing..."

      'typing.d': '$A i $B piszą...',
      // example: "Alex and Ben are typing..."

      'typing.e': '$A, $B i $C piszą...',
      // example: "Alex, Ben, and Cindy are typing..."

      'typing.f': '$A i 1 inna osoba piszą...',
      // example: "Alex and 1 other are typing..."

      'typing.g': '$A i $N innych piszą...',
      // example: "Alex and 3 others are typing..."

      'typing.h': '$A, $B i 1 inna osoba piszą...',
      // example: "Alex, Ben, and 1 other are typing..."

      'typing.i': '$A, $B i $N innych pisze...',
      // example: "Alex, Ben, and 3 others are typing..."

      'typing.j': '$A, $B, $C i 1 inna osoba piszą...',
      // example: "Alex, Ben, Cindy, and 1 other are typing..."

      'typing.k': '$A, $B, $C i $N innych pisze...',
      // example: "Alex, Ben, Cindy, and 3 others are typing..."

      /**
       * Social login dialog
       */
      'social-modal.title': 'Zaloguj się',
      'social-modal.header': 'Rozpocznij lub dołącz do rozmowy',

      // buttons:
      'social-modal.google': 'Logowanie z Google',
      'social-modal.facebook': 'Logowanie z Facebook',
      'social-modal.twitter': 'Logowanie z Twitter',
      'social-modal.linkedin': 'Logowanie z LinkedIn',
      'social-modal.email': 'Zaloguj się adresem email',

      'social-modal.footer': 'Logując się akceptujesz <a1>Regulamin</a1> i <a2>Politykę Prywatności</a2>',
      // keep <a1> and </a1> unchanged and surrounding the translation of "Terms of Service"
      // keep <a2> and </a2> unchanged and surrounding the translation of "Privacy Policy"

      /**
       * JWT login dialog
       */
      'jwt-modal.title': 'Zgoda',

      'jwt-modal.header': 'Aby zacząc rozmawiać zaakceptuj <a1>Regulamin</a1> i <a2>Politykę Prywatności</a2> Now4real (operatora czatu)',
      // keep <a1> and </a1> unchanged and surrounding the translation of "Terms of Service"
      // keep <a2> and </a2> unchanged and surrounding the translation of "Privacy Policy"

      'jwt-modal.button': 'Akceptuję'
   },

   /****************************************************************************************
    * ROMANIAN
    ****************************************************************************************/
   'ro': {
      'genericError': 'Ups! Ceva este in neregula',

      'connection-status.offline': 'Esti offline',

      /**
       * Time representation
       */
      'hour-format': 12,
      // 12 (e.g. "3:52 PM") or 24 (e.g. "15:52")

      /**
       * Commons
       */
      'commons.signedWith.google': 'Intra cu Google',
      'commons.signedWith.facebook': 'Intra cu Facebook',
      'commons.signedWith.twitter': 'Intra cu Twitter',
      'commons.signedWith.linkedin': 'Intra cu LinkedIn',
      'commons.signedWith.email': 'Intra cu adresa de email',
      'commons.signedWith.jwt': 'Intra pe acest site',

      'commons.close': 'Inchide', // close button

      /**
       * Tooltips and balloons on closed widget
       */
      'monitor.pageViewersTitle': 'Persoane care sunt pe pagina',
      'monitor.siteViewersTitle': 'Persoane care sunt pe site',
      'monitor.chatBalloon': 'CHAT', // keep upper case, if applicable
      'monitor.presenceBalloon': 'Persoane active acum',

      /**
       * Menu
       */
      'status-header.options': 'Optiuni',
      'status-header.help': 'Ajutor',
      'status-header.issue': 'Raporteaza problema',
      'status-header.terms': 'Termene si conditii',
      'status-header.privacy': 'Politica de confidențialitate',
      'status-header.signout': 'Ieșire',

      'status-header.notRememberedLogin': 'Nu-mi amintesc',
      // means that the login status is temporary and will not be remembered next time

      /**
       * Tab labels and tooltips
       */
      'tab.chatTabLabel': 'CHAT', // max 8 characters; keep upper case, if applicable
      'tab.chatTitlePage': 'Chat in timp real cu ceilalti vizitatori de pe pagina',
      'tab.chatTitleSite': 'Chat in timp real cu ceilalti vizitatori de pe site',

      'tab.rankingTabLabel': 'PAGINI', // max 8 characters; keep upper case, if applicable
      'tab.rankingTitle': 'Pagini vizualizate acum',

      'tab.heatmapTabLabel': 'HARTA', // max 8 characters; keep upper case, if applicable
      'tab.heatmapTitle': 'De unde sunt persoanele',

      /**
       * Heatmap
       */
      'heatmap.pageSwitchLabel': 'PAGINA', // max 12 characters; keep upper case, if applicable
      'heatmap.siteSwitchLabel': 'SITE', // max 12 characters; keep upper case, if applicable
      'heatmap.empty': 'Fara date',

      /**
       * Ranking
       */
      'ranking.foregroundTitle': 'Persoane pe site',
      'ranking.activeTitle': 'Persoane care discuta pe site',
      'ranking.foregroundSwitchLabel': 'VIZITATORI', // max 12 characters; keep upper case, if applicable
      'ranking.activeSwitchLabel': 'Cei care discuta', // max 12 characters; keep upper case, if applicable
      'ranking.empty': 'Fara date',
      'ranking.currentPage': 'Pagina curenta',

      'ranking.note': 'Primele 10 pagini',
      // note added to the end to the ranking list to explain that only the top ten pages are shown

      /**
       * Chat
       */
      'chat.welcomeFirstMessagePage': 'Chat in timp real cu vizitatorii acestei pagini',
      'chat.welcomeFirstMessageSite': 'Chat in timp real cu vizitatorii site-ului',

      'chat.welcomeSecondMessage': 'Mesajele tale sunt publice si dispar dupa $N $A',
      'chat.welcomeSecondMessageJWT': 'Mesajele tale sunt publice si dispar dupa $N $A',
      'chat.welcomeSecondMessage.A.minutes': 'minute',
      'chat.welcomeSecondMessage.A.hours': 'ore',
      'chat.welcomeSecondMessage.A.days': 'zile',
      'chat.welcomeSecondMessage.A.weeks': 'saptamani',
      // example: "Please remember that your messages are public and disappear after 2 hours"

      'chat.placeholder': 'Scrie mesajul',
      'chat.postBtn': 'Publica', // means "publica mesajul tau"

      'chat.tooFrequentError': 'Prea repede ...\nTe rog nu inunda chat-ul cu prea multe mesaje',
      // \n means to break the line; \' distinguishes the apostrophe from the final apex

      'chat.blockedError': 'Imi pare rau... Acest mesaj este considerat nepotrivit',
      'chat.abortedError': 'Intrare esuata sau cookie nu sunt permise in acest browser',
      'chat.mutedError': 'Ups! Se pare ca nu poti publica inca',
      'chat.notPersistentError': 'Autetificarea nu este posibila deoarece ai setari ridicate de mentinere a intimitatii. Permite acum browser-ului cookie de la Now4real.',

      'chat.signinRequired': '<a>Intra in</a> to chat',
      // keep <a> and </a> unchanged and surrounding the translation of "Sign in"

      'chat.viewOnly': 'Doar vizualizare',

      // below are the actions on messages that appear in a contextual menu
      'chat.replyBtn': 'Raspunde',
      'chat.deleteBtn': 'Stergere',

      /**
       * Presence
       */
      'presence.all.a': '1 persoana pe pagina (din $N pe site)',
      // example: "1 person on this page (of 23 on this site)"

      'presence.all.b': '$N persoane pe pagina (din $M pe site)',
      // example: "5 people on this page (of 23 on this site)"

      'presence.page.a': '1 persoana pe pagina',
      'presence.page.b': '$N persoane pe pagina',

      'presence.site.a': '1 persoana pe site',
      'presence.site.b': '$N persoane pe site',

      /**
       * Emoji-picker labels
       */
      'emoji-picker.people': 'Persoane',
      'emoji-picker.nature': 'Natura',
      'emoji-picker.food': 'Mancare',
      'emoji-picker.activity': 'Activitati',
      'emoji-picker.travel': 'Locuri',
      'emoji-picker.objects': 'Obiecte',
      'emoji-picker.symbols': 'Simboluri',
      'emoji-picker.flags': 'Steaguri',

      /**
       * Typing
       */
      'typing.a': '1 persoana scrie...',

      'typing.b': '$N persoane scriu...',
      // example: "5 people are typing..."

      'typing.c': '$A scrie...',
      // example: "Alex is typing..."

      'typing.d': '$A si $B scriu...',
      // example: "Alex and Ben are typing..."

      'typing.e': '$A, $B si $C scriu...',
      // example: "Alex, Ben, and Cindy are typing..."

      'typing.f': '$A si o alta peroana scriu...',
      // example: "Alex and 1 other are typing..."

      'typing.g': '$A si altele $N scriu...',
      // example: "Alex and 3 others are typing..."

      'typing.h': '$A, $B, si inca cineva scriu...',
      // example: "Alex, Ben, and 1 other are typing..."

      'typing.i': '$A, $B, si alti $N scriu...',
      // example: "Alex, Ben, and 3 others are typing..."

      'typing.j': '$A, $B, $C, si inca cineva scriu...',
      // example: "Alex, Ben, Cindy, and 1 other are typing..."

      'typing.k': '$A, $B, $C, si alti $N scriu...',
      // example: "Alex, Ben, Cindy, and 3 others are typing..."

      /**
       * Social login dialog
       */
      'social-modal.title': 'Intra',
      'social-modal.header': 'Incepe discutia cu toti cei care folosesc Now4real',

      // buttons:
      'social-modal.google': 'Intra cu Google',
      'social-modal.facebook': 'Intra cu Facebook',
      'social-modal.twitter': 'Intra cu Twitter',
      'social-modal.linkedin': 'Intra cu LinkedIn',
      'social-modal.email': 'Intra cu email',

      'social-modal.footer': 'Apasa pe “Intra” ca sa accepti <a1>Termene si Servicii</a1> si <a2>Politica de Confidentialitate</a2> de pe acest site si Now4real',
      // keep <a1> and </a1> unchanged and surrounding the translation of "Termene si Servicii"
      // keep <a2> and </a2> unchanged and surrounding the translation of "Politica de Confidentialitate"

      /**
       * JWT login dialog
       */
      'jwt-modal.title': 'Consimtamant',

      'jwt-modal.header': 'Pentru a discuta trebuie sa accepti <a1>Termene si Servicii</a1> and the <a2>Politica de Confidentialitate</a2> de la acest site si Now4real',
      // keep <a1> and </a1> unchanged and surrounding the translation of "Termene si Servicii"
      // keep <a2> and </a2> unchanged and surrounding the translation of "Politica de Confidentialitate"

      'jwt-modal.button': 'Accept'
   }
}
