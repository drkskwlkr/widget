/*
   RULES FOR TRANSLATORS
   - Clone the ENGLISH ('en') block and change 'en' to the target language code.
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
      'hourFormat': 12,
      // 12 (e.g. "3:52 PM") or 24 (e.g. "15:52")

      'timeUnit.minutes': 'minutes',
      'timeUnit.hours': 'hours',
      'timeUnit.days': 'days',
      'timeUnit.weeks': 'weeks',
      'timeUnit.months': 'months',
      'timeUnit.years': 'years',
      'timeUnit.forever': 'forever',

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
       * GIF-picker labels
       */
      'gif-picker.search': 'Search GIF',

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

      'mute-modal.headerForever': 'User $U has been muted',

      'mute-modal.body.set': 'Mute user $U for:',
      // example: "Mute user Ben for:" followed by input fields with "3 days"

      'mute-modal.body.update': 'Update mute period:',
      // example: "Update mute period:" followed by input fields with "5 days"

      'mute-modal.body.deleteInfo': 'You can unmute the user whenever you want.',

      'mute-modal.body.deleteAlert': 'You are unmuting the user',

      'mute-modal.button': 'Confirm',

      /**
       * Confirm dialog
       */
      'confirmation-modal.title': 'Confirm',
      'confirmation-modal.ok': 'Yes',
      'confirmation-modal.cancel': 'No',

      /**
       * Flush chat confirm dialog
       */
      'flush-chat-confirmation-modal.message': 'Are you sure you want to flush this chat?',

      /**
       * Disable chat confirm dialog
       */
      'disable-chat-confirmation-modal.message': 'Are you sure you want to disable this chat?',

      /**
       * Social login redirect pages
       */
      'social-login-redirect.title': 'Now4real Social Login',

      'social-login-redirect.step1.msg': 'You are being redirected to $A, please wait...',
      // example: "You are being redirected to Google, please wait..."

      'social-login-redirect.step2.msg': 'You are being redirected, please wait...',

      'social-login-redirect.error': 'Oops! Something went wrong'
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
      'hourFormat': 24,
      // 12 (e.g. "3:52 PM") or 24 (e.g. "15:52")

      'timeUnit.minutes': 'minuti',
      'timeUnit.hours': 'ore',
      'timeUnit.days': 'giorni',
      'timeUnit.weeks': 'settimane',
      'timeUnit.months': 'mesi',
      'timeUnit.years': 'anni',
      'timeUnit.forever': 'per sempre',

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
       * GIF-picker labels
       */
      'gif-picker.search': 'Cerca GIF',

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

      'mute-modal.headerForever': 'L\'utente $U è stato silenziato',

      'mute-modal.body.set': 'Silenzia l\'utente $U per:',
      // example: "Mute user Ben for:" followed by input fields with "3 days"

      'mute-modal.body.update': 'Aggiorna il periodo di silenziamento:',
      // example: "Update mute period:" followed by input fields with "5 days"

      'mute-modal.body.deleteInfo': 'Potrai riattivare l\'utente quando vorrai.',

      'mute-modal.body.deleteAlert': 'Stai rimuovendo il silenziamento per l\'utente',

      'mute-modal.button': 'Conferma',

      /**
       * Confirm dialog
       */
      'confirmation-modal.title': 'Conferma',
      'confirmation-modal.ok': 'Si',
      'confirmation-modal.cancel': 'No',

      /**
       * Flush chat confirm dialog
       */
      'flush-chat-confirmation-modal.message': 'Sei sicuro di voler svuotare questa chat?',

      /**
       * Disable chat confirm dialog
       */
      'disable-chat-confirmation-modal.message': 'Sei sicuro di voler disabilitare questa chat?',

      /**
       * Social login redirect pages
       */
      'social-login-redirect.title': 'Now4real Social Login',

      'social-login-redirect.step1.msg': 'Verrai rediretto su $A, attendi per favore...',
      // example: "You are being redirected to Google, please wait..."

      'social-login-redirect.step2.msg': 'Verrai rediretto, attendi per favore...',

      'social-login-redirect.error': 'Oops! Qualcosa è andato storto'
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
      'hourFormat': 24,
      // 12 (e.g. "3:52 PM") or 24 (e.g. "15:52")

      'timeUnit.minutes': 'minutos',
      'timeUnit.hours': 'horas',
      'timeUnit.days': 'dias',
      'timeUnit.weeks': 'semanas',
      'timeUnit.months': 'meses',
      'timeUnit.years': 'años',
      'timeUnit.forever': 'forever', // TODO

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
      'status-header.flushChat': 'Flush this chat', // TODO
      'status-header.disableChat': 'Disable this chat', // TODO
      'status-header.enableChat': 'Enable this chat', // TODO
      'status-header.help': 'Ayuda',
      'status-header.issue': 'Informa de un Problema',
      'status-header.terms': 'Términos del Servicio',
      'status-header.privacy': 'Política de Privacidad',
      'status-header.signout': 'Cerrar Sesión',
      'status-header.signin': 'Sign in', // TODO

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
      // $N is a number and $A in a time unit taken from timeUnit.
      // example: "Please remember that your messages are public and disappear after 2 hours"

      'chat.messageDeleted.byYou': 'You deleted this message', // TODO
      'chat.messageDeleted.byAuthor': 'Message deleted by the author', // TODO
      'chat.messageDeleted.byModerator': 'Message deleted by a moderator', // TODO
      'chat.messageDeleted.byAdmin': 'Message deleted by the admin', // TODO
      'chat.messageDeleted.byNow4real': 'Message deleted by the admin', // TODO
      'chat.messageDeleted.unknown': 'Message deleted', // TODO

      'chat.placeholder': 'Escribe un mensaje',
      'chat.postBtn': 'Publicar', // means "publish this message"

      'chat.tooFrequentError': 'Vas un poco rápido...\nPor favor, no llenes el chat',
      // \n means to break the line; \' distinguishes the apostrophe from the final apex

      'chat.blockedError': 'Lo siento... Este mensaje parece inapropiado',
      'chat.abortedError': 'Inicio de sesión cancelado o cookies desactivadas en este navegador',
      'chat.mutedError': '¡UPS! Parece que te han silenciado',
      'chat.notPersistentError': 'La autenticación no será recordada debido a tu configuración de privacidad restringida. Por favor, habilita las cookies para Now4real en tu navegador para evitar que esto suceda.',
      'chat.disabledError': 'This chat has been disabled', // TODO

      'chat.disabledByAdmin': 'This chat has been disabled by the admin', // TODO
      'chat.disabledByModerator': 'This chat has been disabled by a moderator', // TODO
      'chat.signinRequired': '<a>Inicia sesión</a> para hablar',
      // keep <a> and </a> unchanged and surrounding the translation of "Sign in"

      'chat.viewOnly': 'Solo lectura',

      // below are the actions on messages that appear in a contextual menu
      'chat.replyBtn': 'Responder', // means "reply to this message"
      'chat.deleteBtn': 'Eliminar', // means "delete this message"
      'chat.muteBtn': 'Mute', // means "mute this user" // TODO

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
       * GIF-picker labels
       */
      'gif-picker.search': 'Search GIF', // TODO

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

      'jwt-modal.button': 'Acepto',

      /**
       * Mute dialog
       */
      'mute-modal.title': 'Mute User', // TODO

      'mute-modal.header': 'User $U has been muted until $E', // TODO
      // example: "User Ben has been muted until Wed, 14 Jun 2022 07:12:00 GMT"

      'mute-modal.headerForever': 'User $U has been muted', // TODO

      'mute-modal.body.set': 'Mute user $U for:', // TODO
      // example: "Mute user Ben for:" followed by input fields with "3 days"

      'mute-modal.body.update': 'Update mute period:', // TODO
      // example: "Update mute period:" followed by input fields with "5 days"

      'mute-modal.body.deleteInfo': 'You can unmute the user whenever you want.', // TODO

      'mute-modal.body.deleteAlert': 'You are unmuting the user', // TODO

      'mute-modal.button': 'Confirm', // TODO

      /**
       * Confirm dialog
       */
      'confirmation-modal.title': 'Confirm', // TODO
      'confirmation-modal.ok': 'Yes', // TODO
      'confirmation-modal.cancel': 'No', // TODO

      /**
       * Flush chat confirm dialog
       */
      'flush-chat-confirmation-modal.message': 'Are you sure you want to flush this chat?', // TODO

      /**
       * Disable chat confirm dialog
       */
      'disable-chat-confirmation-modal.message': 'Are you sure you want to disable this chat?', // TODO

      /**
       * Social login redirect pages
       */
      'social-login-redirect.title': 'Now4real Social Login', // TODO

      'social-login-redirect.step1.msg': 'You are being redirected to $A, please wait...', // TODO
      // example: "You are being redirected to Google, please wait..."

      'social-login-redirect.step2.msg': 'You are being redirected, please wait...', // TODO

      'social-login-redirect.error': 'Oops! Something went wrong' // TODO
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
      'hourFormat': 24,
      // 12 (e.g. "3:52 PM") or 24 (e.g. "15:52")

      'timeUnit.minutes': 'minutos',
      'timeUnit.hours': 'horas',
      'timeUnit.days': 'dias',
      'timeUnit.weeks': 'semanas',
      'timeUnit.months': 'meses',
      'timeUnit.years': 'anos',
      'timeUnit.forever': 'forever', // TODO

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
      'status-header.flushChat': 'Flush this chat', // TODO
      'status-header.disableChat': 'Disable this chat', // TODO
      'status-header.enableChat': 'Enable this chat', // TODO
      'status-header.help': 'Ajuda',
      'status-header.issue': 'Reportar um problema',
      'status-header.terms': 'Termos de Serviço',
      'status-header.privacy': 'Política de Privacidade',
      'status-header.signout': 'Sair',
      'status-header.signin': 'Sign in', // TODO

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
      // $N is a number and $A in a time unit taken from timeUnit.
      // example: "Please remember that your messages are public and disappear after 2 hours"

      'chat.messageDeleted.byYou': 'You deleted this message', // TODO
      'chat.messageDeleted.byAuthor': 'Message deleted by the author', // TODO
      'chat.messageDeleted.byModerator': 'Message deleted by a moderator', // TODO
      'chat.messageDeleted.byAdmin': 'Message deleted by the admin', // TODO
      'chat.messageDeleted.byNow4real': 'Message deleted by the admin', // TODO
      'chat.messageDeleted.unknown': 'Message deleted', // TODO

      'chat.placeholder': 'Escrever mensagem',
      'chat.postBtn': 'Postar', // means "publish this message"

      'chat.tooFrequentError': 'Você está sendo\' rápido demais... \nPor favor não congestione o bate-papo',
      // \n means to break the line; \' distinguishes the apostrophe from the final apex

      'chat.blockedError': 'Desculpe ... Esta mensagem parece inadequada',
      'chat.abortedError': 'Login cancelado ou cookies desativados neste navegador',
      'chat.mutedError': 'Ups! Parece que você foi silenciado',
      'chat.notPersistentError': 'A autenticação não será lembrada devido às suas configurações de privacidade restritas. Ative os cookies para Now4real no seu navegador para evitar que isso aconteça.',
      'chat.disabledError': 'This chat has been disabled', // TODO

      'chat.disabledByAdmin': 'This chat has been disabled by the admin', // TODO
      'chat.disabledByModerator': 'This chat has been disabled by a moderator', // TODO
      'chat.signinRequired': '<a>Entrar</a> para conversar',
      // keep <a> and </a> unchanged and surrounding the translation of "Sign in"

      'chat.viewOnly': 'Somente leitura',

      // below are the actions on messages that appear in a contextual menu
      'chat.replyBtn': 'Responder', // means "reply to this message"
      'chat.deleteBtn': 'Excluir', // means "delete this message"
      'chat.muteBtn': 'Mute', // means "mute this user" // TODO

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
       * GIF-picker labels
       */
      'gif-picker.search': 'Search GIF', // TODO

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

      'jwt-modal.button': 'Acetair',

      /**
       * Mute dialog
       */
      'mute-modal.title': 'Mute User', // TODO

      'mute-modal.header': 'User $U has been muted until $E', // TODO
      // example: "User Ben has been muted until Wed, 14 Jun 2022 07:12:00 GMT"

      'mute-modal.headerForever': 'User $U has been muted', // TODO

      'mute-modal.body.set': 'Mute user $U for:', // TODO
      // example: "Mute user Ben for:" followed by input fields with "3 days"

      'mute-modal.body.update': 'Update mute period:', // TODO
      // example: "Update mute period:" followed by input fields with "5 days"

      'mute-modal.body.deleteInfo': 'You can unmute the user whenever you want.', // TODO

      'mute-modal.body.deleteAlert': 'You are unmuting the user', // TODO

      'mute-modal.button': 'Confirm', // TODO

      /**
       * Confirm dialog
       */
      'confirmation-modal.title': 'Confirm', // TODO
      'confirmation-modal.ok': 'Yes', // TODO
      'confirmation-modal.cancel': 'No', // TODO

      /**
       * Flush chat confirm dialog
       */
      'flush-chat-confirmation-modal.message': 'Are you sure you want to flush this chat?', // TODO

      /**
       * Disable chat confirm dialog
       */
      'disable-chat-confirmation-modal.message': 'Are you sure you want to disable this chat?', // TODO

      /**
       * Social login redirect pages
       */
      'social-login-redirect.title': 'Now4real Social Login', // TODO

      'social-login-redirect.step1.msg': 'You are being redirected to $A, please wait...', // TODO
      // example: "You are being redirected to Google, please wait..."

      'social-login-redirect.step2.msg': 'You are being redirected, please wait...', // TODO

      'social-login-redirect.error': 'Oops! Something went wrong' // TODO
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
      'hourFormat': 24,
      // 12 (e.g. "3:52 PM") or 24 (e.g. "15:52")

      'timeUnit.minutes': 'Protokoll',
      'timeUnit.hours': 'Std',
      'timeUnit.days': 'Tage',
      'timeUnit.weeks': 'Wochen',
      'timeUnit.months': 'Monate',
      'timeUnit.years': 'Jahre',
      'timeUnit.forever': 'forever', // TODO

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
      'status-header.flushChat': 'Flush this chat', // TODO
      'status-header.disableChat': 'Disable this chat', // TODO
      'status-header.enableChat': 'Enable this chat', // TODO
      'status-header.help': 'Hilfe',
      'status-header.issue': 'Ein Problem melden',
      'status-header.terms': 'Nutzungsbedingungen',
      'status-header.privacy': 'Datenschutz-Bestimmungen',
      'status-header.signout': 'Ausloggen',
      'status-header.signin': 'Sign in', // TODO

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
      // $N is a number and $A in a time unit taken from timeUnit.
      // example: "Please remember that your messages are public and disappear after 2 hours"

      'chat.messageDeleted.byYou': 'You deleted this message', // TODO
      'chat.messageDeleted.byAuthor': 'Message deleted by the author', // TODO
      'chat.messageDeleted.byModerator': 'Message deleted by a moderator', // TODO
      'chat.messageDeleted.byAdmin': 'Message deleted by the admin', // TODO
      'chat.messageDeleted.byNow4real': 'Message deleted by the admin', // TODO
      'chat.messageDeleted.unknown': 'Message deleted', // TODO

      'chat.placeholder': 'Schreiben',
      'chat.postBtn': 'Post', // means "publish this message"

      'chat.tooFrequentError': 'Sie sind ein wenig zu schnell...\nbitte nicht zu viel schreiben',
      // \n means to break the line; \' distinguishes the apostrophe from the final apex

      'chat.blockedError': 'Sorry... diese Nachricht scheint unangemessen',
      'chat.abortedError': 'Anmelden abgebrochen oder Cookies in diesem Browser deaktiviert',
      'chat.mutedError': 'Hoppla! Es sieht so aus, als wären Sie stummgeschaltet worden',
      'chat.notPersistentError': 'Die Authentifizierung wird aufgrund Ihrer eingeschränkten Datenschutzeinstellungen nicht gespeichert. Um dies zu verhindern, aktivieren Sie bitte die Cookies für Now4real in Ihrem Browser.',
      'chat.disabledError': 'This chat has been disabled', // TODO

      'chat.disabledByAdmin': 'This chat has been disabled by the admin', // TODO
      'chat.disabledByModerator': 'This chat has been disabled by a moderator', // TODO
      'chat.signinRequired': '<a>Melden Sie sich an</a>, um zu chatten',
      // keep <a> and </a> unchanged and surrounding the translation of "Sign in"

      'chat.viewOnly': 'Nur Betrachter -Modus',

      // below are the actions on messages that appear in a contextual menu
      'chat.replyBtn': 'Antworten', // means "reply to this message"
      'chat.deleteBtn': 'Löschen', // means "delete this message"
      'chat.muteBtn': 'Mute', // means "mute this user" // TODO

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
       * GIF-picker labels
       */
      'gif-picker.search': 'Search GIF', // TODO

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

      'jwt-modal.button': 'Akzeptieren',

      /**
       * Mute dialog
       */
      'mute-modal.title': 'Mute User', // TODO

      'mute-modal.header': 'User $U has been muted until $E', // TODO
      // example: "User Ben has been muted until Wed, 14 Jun 2022 07:12:00 GMT"

      'mute-modal.headerForever': 'User $U has been muted', // TODO

      'mute-modal.body.set': 'Mute user $U for:', // TODO
      // example: "Mute user Ben for:" followed by input fields with "3 days"

      'mute-modal.body.update': 'Update mute period:', // TODO
      // example: "Update mute period:" followed by input fields with "5 days"

      'mute-modal.body.deleteInfo': 'You can unmute the user whenever you want.', // TODO

      'mute-modal.body.deleteAlert': 'You are unmuting the user', // TODO

      'mute-modal.button': 'Confirm', // TODO

      /**
       * Confirm dialog
       */
      'confirmation-modal.title': 'Confirm', // TODO
      'confirmation-modal.ok': 'Yes', // TODO
      'confirmation-modal.cancel': 'No', // TODO

      /**
       * Flush chat confirm dialog
       */
      'flush-chat-confirmation-modal.message': 'Are you sure you want to flush this chat?', // TODO

      /**
       * Disable chat confirm dialog
       */
      'disable-chat-confirmation-modal.message': 'Are you sure you want to disable this chat?', // TODO

      /**
       * Social login redirect pages
       */
      'social-login-redirect.title': 'Now4real Social Login', // TODO

      'social-login-redirect.step1.msg': 'You are being redirected to $A, please wait...', // TODO
      // example: "You are being redirected to Google, please wait..."

      'social-login-redirect.step2.msg': 'You are being redirected, please wait...', // TODO

      'social-login-redirect.error': 'Oops! Something went wrong' // TODO
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
      'hourFormat': 24,
      // 12 (e.g. "3:52 PM") or 24 (e.g. "15:52")

      'timeUnit.minutes': 'minutach',
      'timeUnit.hours': 'godzinach',
      'timeUnit.days': 'dniach',
      'timeUnit.weeks': 'tygodniach',
      'timeUnit.months': 'miesiące',
      'timeUnit.years': 'lat',
      'timeUnit.forever': 'na zawsze',

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
      'status-header.flushChat': 'Wyczyść ten czat',
      'status-header.disableChat': 'Wyłącz ten czat',
      'status-header.enableChat': 'Włącz ten czat',
      'status-header.help': 'Pomoc',
      'status-header.issue': 'Zgłoś błąd',
      'status-header.terms': 'Regulamin',
      'status-header.privacy': 'Polityka Prywatności',
      'status-header.signout': 'Wyloguj się',
      'status-header.signin': 'Zaloguj się',

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
      // $N is a number and $A in a time unit taken from timeUnit.
      // example: "Please remember that your messages are public and disappear after 2 hours"

      'chat.messageDeleted.byYou': 'Usunąłeś wiadomość',
      'chat.messageDeleted.byAuthor': 'Wiadomość usunięta przez autora',
      'chat.messageDeleted.byModerator': 'Wiadomość usunięta przez moderatora',
      'chat.messageDeleted.byAdmin': 'Wiadomość usunięta przez administratora',
      'chat.messageDeleted.byNow4real': 'Wiadomość usunięta przez administratora',
      'chat.messageDeleted.unknown': 'Wiadomość usunięta',

      'chat.placeholder': 'Wpisz wiadomość',
      'chat.postBtn': 'Wyślij', // means "publish this message"

      'chat.tooFrequentError': 'Jesteś trochę za szybki...\nProsimy nie zalewać czatu',
      // \n means to break the line; \' distinguishes the apostrophe from the final apex

      'chat.blockedError': 'Przepraszamy... Ta wiadomość wydaje się nieodpowiednia',
      'chat.abortedError': 'Nie można się zalogować lub ciasteczka są wyłączone w Twojej przeglądarce',
      'chat.mutedError': 'Oops! Wygląda na to, że zostałeś wyciszony',
      'chat.notPersistentError': 'Uwierzytelnienie nie zostanie zapamiętane ze względu na Twoje ustawienia prywatności. Prosimy włączyć obsługę plików cookie w swojej przeglądarce, aby temu zapobiec.',
      'chat.disabledError': 'Ten czat został wyłączony',

      'chat.disabledByAdmin': 'Ten czat został wyłączony przez administratora',
      'chat.disabledByModerator': 'Ten czat został wyłączony przez moderatora',
      'chat.signinRequired': '<a>Zaloguj się</a> aby rozmawiać',
      // keep <a> and </a> unchanged and surrounding the translation of "Sign in"

      'chat.viewOnly': 'Tryb podglądu',

      // below are the actions on messages that appear in a contextual menu
      'chat.replyBtn': 'Odpowiedz', // means "reply to this message"
      'chat.deleteBtn': 'Usuń', // means "delete this message"
      'chat.muteBtn': 'Wycisz', // means "mute this user"

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
       * GIF-picker labels
       */
      'gif-picker.search': 'Wyszukaj GIF',

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

      'jwt-modal.button': 'Akceptuję',

      /**
       * Mute dialog
       */
      'mute-modal.title': 'Wycisz użytkownika',

      'mute-modal.header': 'Użytkownik $U został wyciszony do $E',
      // example: "User Ben has been muted until Wed, 14 Jun 2022 07:12:00 GMT"

      'mute-modal.headerForever': 'Użytkownik $U został wyciszony',

      'mute-modal.body.set': 'Wycisz użytkownika $U na:',
      // example: "Mute user Ben for:" followed by input fields with "3 days"

      'mute-modal.body.update': 'Aktualizacja okresu wyciszenia:',
      // example: "Update mute period:" followed by input fields with "5 days"

      'mute-modal.body.deleteInfo': 'Możesz wyłączyć wyciszenie użytkownika, kiedy tylko chcesz.',

      'mute-modal.body.deleteAlert': 'Uwalniasz użytkownika',

      'mute-modal.button': 'Potwierdź',

      /**
       * Confirm dialog
       */
      'confirmation-modal.title': 'Potwierdź',
      'confirmation-modal.ok': 'Tak',
      'confirmation-modal.cancel': 'Nie',

      /**
       * Flush chat confirm dialog
       */
      'flush-chat-confirmation-modal.message': 'Czy na pewno chcesz wyczyścić ten czat?',

      /**
       * Disable chat confirm dialog
       */
      'disable-chat-confirmation-modal.message': 'Czy na pewno chcesz wyłączyć ten czat?',

      /**
       * Social login redirect pages
       */
      'social-login-redirect.title': 'Now4real Logowanie Social Media',

      'social-login-redirect.step1.msg': 'Zostaniesz przekierowany do $A, proszę czekać...',
      // example: "You are being redirected to Google, please wait..."

      'social-login-redirect.step2.msg': 'Zostaniesz przekierowany, proszę czekać...',

      'social-login-redirect.error': 'Ups! Coś poszło nie tak'
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
      'hourFormat': 12,
      // 12 (e.g. "3:52 PM") or 24 (e.g. "15:52")

      'timeUnit.minutes': 'minute',
      'timeUnit.hours': 'ore',
      'timeUnit.days': 'zile',
      'timeUnit.weeks': 'saptamani',
      'timeUnit.months': 'luni',
      'timeUnit.years': 'ani',
      'timeUnit.forever': 'forever', // TODO

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
      'status-header.flushChat': 'Flush this chat', // TODO
      'status-header.disableChat': 'Disable this chat', // TODO
      'status-header.enableChat': 'Enable this chat', // TODO
      'status-header.help': 'Ajutor',
      'status-header.issue': 'Raporteaza problema',
      'status-header.terms': 'Termene si conditii',
      'status-header.privacy': 'Politica de confidențialitate',
      'status-header.signout': 'Ieșire',
      'status-header.signin': 'Sign in', // TODO

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
      // $N is a number and $A in a time unit taken from timeUnit.
      // example: "Please remember that your messages are public and disappear after 2 hours"

      'chat.messageDeleted.byYou': 'You deleted this message', // TODO
      'chat.messageDeleted.byAuthor': 'Message deleted by the author', // TODO
      'chat.messageDeleted.byModerator': 'Message deleted by a moderator', // TODO
      'chat.messageDeleted.byAdmin': 'Message deleted by the admin', // TODO
      'chat.messageDeleted.byNow4real': 'Message deleted by the admin', // TODO
      'chat.messageDeleted.unknown': 'Message deleted', // TODO

      'chat.placeholder': 'Scrie mesajul',
      'chat.postBtn': 'Publica', // means "publica mesajul tau"

      'chat.tooFrequentError': 'Prea repede ...\nTe rog nu inunda chat-ul cu prea multe mesaje',
      // \n means to break the line; \' distinguishes the apostrophe from the final apex

      'chat.blockedError': 'Imi pare rau... Acest mesaj este considerat nepotrivit',
      'chat.abortedError': 'Intrare esuata sau cookie nu sunt permise in acest browser',
      'chat.mutedError': 'Ups! Se pare ca nu poti publica inca',
      'chat.notPersistentError': 'Autetificarea nu este posibila deoarece ai setari ridicate de mentinere a intimitatii. Permite acum browser-ului cookie de la Now4real.',
      'chat.disabledError': 'This chat has been disabled', // TODO

      'chat.disabledByAdmin': 'This chat has been disabled by the admin', // TODO
      'chat.disabledByModerator': 'This chat has been disabled by a moderator', // TODO
      'chat.signinRequired': '<a>Intra in</a> to chat',
      // keep <a> and </a> unchanged and surrounding the translation of "Sign in"

      'chat.viewOnly': 'Doar vizualizare',

      // below are the actions on messages that appear in a contextual menu
      'chat.replyBtn': 'Raspunde', // means "reply to this message"
      'chat.deleteBtn': 'Stergere', // means "delete this message"
      'chat.muteBtn': 'Mute', // means "mute this user" // TODO

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
       * GIF-picker labels
       */
      'gif-picker.search': 'Search GIF', // TODO

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

      'jwt-modal.button': 'Accept',

      /**
       * Mute dialog
       */
      'mute-modal.title': 'Mute User', // TODO

      'mute-modal.header': 'User $U has been muted until $E', // TODO
      // example: "User Ben has been muted until Wed, 14 Jun 2022 07:12:00 GMT"

      'mute-modal.headerForever': 'User $U has been muted', // TODO

      'mute-modal.body.set': 'Mute user $U for:', // TODO
      // example: "Mute user Ben for:" followed by input fields with "3 days"

      'mute-modal.body.update': 'Update mute period:', // TODO
      // example: "Update mute period:" followed by input fields with "5 days"

      'mute-modal.body.deleteInfo': 'You can unmute the user whenever you want.', // TODO

      'mute-modal.body.deleteAlert': 'You are unmuting the user', // TODO

      'mute-modal.button': 'Confirm', // TODO

      /**
       * Confirm dialog
       */
      'confirmation-modal.title': 'Confirm', // TODO
      'confirmation-modal.ok': 'Yes', // TODO
      'confirmation-modal.cancel': 'No', // TODO

      /**
       * Flush chat confirm dialog
       */
      'flush-chat-confirmation-modal.message': 'Are you sure you want to flush this chat?', // TODO

      /**
       * Disable chat confirm dialog
       */
      'disable-chat-confirmation-modal.message': 'Are you sure you want to disable this chat?', // TODO

      /**
       * Social login redirect pages
       */
      'social-login-redirect.title': 'Now4real Social Login', // TODO

      'social-login-redirect.step1.msg': 'You are being redirected to $A, please wait...', // TODO
      // example: "You are being redirected to Google, please wait..."

      'social-login-redirect.step2.msg': 'You are being redirected, please wait...', // TODO

      'social-login-redirect.error': 'Oops! Something went wrong' // TODO
   },

   /****************************************************************************************
    * SWEDISH (Standard)
    ****************************************************************************************/
   'sv': {
      'genericError': 'Hoppsan! Nu blev något fel',

      'connection-status.offline': 'Du är offline',

      /**
       * Time representation
       */
      'hourFormat': 24,
      // 12 (e.g. "3:52 PM") or 24 (e.g. "15:52")

      'timeUnit.minutes': 'minuter',
      'timeUnit.hours': 'timmar',
      'timeUnit.days': 'dagar',
      'timeUnit.weeks': 'veckor',
      'timeUnit.months': 'månader',
      'timeUnit.years': 'år',
      'timeUnit.forever': 'för evigt',

      /**
       * Commons
       */
      'commons.signedWith.google': 'Inloggad med Google',
      'commons.signedWith.facebook': 'Inloggad med Facebook',
      'commons.signedWith.twitter': 'Inloggad med Twitter',
      'commons.signedWith.linkedin': 'Inloggad med LinkedIn',
      'commons.signedWith.email': 'Inloggad med e-post',
      'commons.signedWith.jwt': 'Inloggad på denna webbplats',

      'commons.close': 'Stäng', // close button

      /**
       * Tooltips and balloons on closed widget
       */
      'monitor.pageViewersTitle': 'Personer som tittar på den här sidan',
      'monitor.siteViewersTitle': 'Personer som tittar på denna webbplats',
      'monitor.chatBalloon': 'CHATT', // keep upper case, if applicable
      'monitor.presenceBalloon': 'Personer närvarande nu',

      /**
       * Menu
       */
      'status-header.options': 'Alternativ',
      'status-header.flushChat': 'Rensa alla meddelanden i den här chatten',
      'status-header.disableChat': 'Inaktivera den här chatten',
      'status-header.enableChat': 'Aktivera den här chatten',
      'status-header.help': 'Hjälp',
      'status-header.issue': 'Rapportera ett problem',
      'status-header.terms': 'Användarvillkor',
      'status-header.privacy': 'Integritetspolicy',
      'status-header.signout': 'Logga ut',
      'status-header.signin': 'Logga in',

      'status-header.notRememberedLogin': 'Sparas inte',
      // means that the login status is temporary and will not be remembered next time

      /**
       * Tab labels and tooltips
       */
      'tab.chatTabLabel': 'CHATT', // max 8 characters; keep upper case, if applicable
      'tab.chatTitlePage': 'Chatta med andra besökare på denna sida i realtid',
      'tab.chatTitleSite': 'Chatta med andra besökare på denna webbplats i realtid',

      'tab.rankingTabLabel': 'SIDOR', // max 8 characters; keep upper case, if applicable
      'tab.rankingTitle': 'Sidor som besökare tittar på nu',

      'tab.heatmapTabLabel': 'KARTA', // max 8 characters; keep upper case, if applicable
      'tab.heatmapTitle': 'Varifrån besökarna kommer',

      /**
       * Heatmap
       */
      'heatmap.pageSwitchLabel': 'SIDA', // max 12 characters; keep upper case, if applicable
      'heatmap.siteSwitchLabel': 'WEBBPLATS', // max 12 characters; keep upper case, if applicable

      'heatmap.empty': 'Inga data',

      /**
       * Ranking
       */
      'ranking.foregroundTitle': 'Besökare på denna webbplats',
      'ranking.activeTitle': 'Personer som chattar på denna webbplats',
      'ranking.foregroundSwitchLabel': 'BESÖKARE', // max 12 characters; keep upper case, if applicable
      'ranking.activeSwitchLabel': 'CHATTARE', // max 12 characters; keep upper case, if applicable
      'ranking.empty': 'Inga data',
      'ranking.currentPage': 'Nuvarande sida',

      'ranking.note': 'Visar de tio högst rankade sidorna',
      // note added to the end to the ranking list to explain that only the top ten pages are shown

      /**
       * Chat
       */
      'chat.welcomeFirstMessagePage': 'Chatta med andra besökare på denna sida i realtid',
      'chat.welcomeFirstMessageSite': 'Chatta med andra besökare på denna webbplats i realtid',

      'chat.welcomeSecondMessage': 'Kom ihåg att det du skriver i chatten är offentligt och försvinner efter $N $A',
      'chat.welcomeSecondMessageJWT': 'Kom ihåg att det du skriver i chatten kan vara offentligt och försvinner efter $N $A',
      // $N is a number and $A in a time unit taken from timeUnit.
      // example: "Please remember that your messages are public and disappear after 2 hours"

      'chat.messageDeleted.byYou': 'Du raderade det här meddelandet',
      'chat.messageDeleted.byAuthor': 'Meddelande raderat av författaren',
      'chat.messageDeleted.byModerator': 'Meddelande raderat av en moderator',
      'chat.messageDeleted.byAdmin': 'Meddelande raderat av administratören',
      'chat.messageDeleted.byNow4real': 'Meddelande raderat av administratören',
      'chat.messageDeleted.unknown': 'Meddelande raderat',

      'chat.placeholder': 'Skriv ett meddelande',
      'chat.postBtn': 'Skicka', // means "publish this message"

      'chat.tooFrequentError': 'Du är lite för snabb...\nSnälla översvämma inte chatten',
      // \n means to break the line; \' distinguishes the apostrophe from the final apex

      'chat.blockedError': 'Ursäkta, men... det här meddelandet verkar olämpligt',
      'chat.abortedError': 'Inloggning avbruten eller cookies inaktiverade i den här webbläsaren',
      'chat.mutedError': 'Hoppsan! Det verkar som om din chattfunktion har tystats ner',
      'chat.notPersistentError': 'Autentiseringen sparas inte på grund av dina begränsade dataskyddsinställningar. För att förhindra detta, vänligen aktivera kakorna (cookies) för Now4real i din webbläsare.',
      'chat.disabledError': 'Den här chatten har inaktiverats',

      'chat.disabledByAdmin': 'Den här chatten har inaktiverats av administratören',
      'chat.disabledByModerator': 'Den här chatten har inaktiverats av en moderator',
      'chat.signinRequired': '<a>Logga in</a> för att chatta',
      // keep <a> and </a> unchanged and surrounding the translation of "Sign in"

      'chat.viewOnly': 'Endast visningsläge',

      // below are the actions on messages that appear in a contextual menu
      'chat.replyBtn': 'Svara',
      'chat.deleteBtn': 'Radera',
      'chat.muteBtn': 'Tysta', // means "mute this user"

      /**
       * Presence
       */
      'presence.all.a': '1 besökare på denna sida (av $N på denna webbplats)',
      // example: "1 person on this page (of 23 on this site)"

      'presence.all.b': '$N besökare på denna sida (av $M på denna webbplats)',
      // example: "5 people on this page (of 23 on this site)"

      'presence.page.a': '1 besökare på denna sida',
      'presence.page.b': '$N besökare på den här sidan',

      'presence.site.a': '1 besökare på denna webbplats',
      'presence.site.b': '$N besökare på den här webbplatsen',

      /**
       * Emoji-picker labels
       */
      'emoji-picker.people': 'Människor',
      'emoji-picker.nature': 'Natur',
      'emoji-picker.food': 'Mat',
      'emoji-picker.activity': 'Aktivitet',
      'emoji-picker.travel': 'Platser',
      'emoji-picker.objects': 'Föremål',
      'emoji-picker.symbols': 'Symboler',
      'emoji-picker.flags': 'Flaggor',

      /**
       * GIF-picker labels
       */
      'gif-picker.search': 'Sök GIF',

      /**
       * Typing
       */
      'typing.a': '1 person skriver...',

      'typing.b': '$N personer skriver...',
      // example: "5 people are typing..."

      'typing.c': '$A skriver...',
      // example: "Alex is typing..."

      'typing.d': '$A och $B skriver...',
      // example: "Alex and Ben are typing..."

      'typing.e': '$A, $B och $C skriver...',
      // example: "Alex, Ben, and Cindy are typing..."

      'typing.f': '$A och 1 till skriver...',
      // example: "Alex and 1 other are typing..."

      'typing.g': '$A och $N andra skriver...',
      // example: "Alex and 3 others are typing..."

      'typing.h': '$A, $B och 1 till skriver...',
      // example: "Alex, Ben, and 1 other are typing..."

      'typing.i': '$A, $B, och $N andra skriver...',
      // example: "Alex, Ben, and 3 others are typing..."

      'typing.j': '$A, $B, $C och 1 till skriver...',
      // example: "Alex, Ben, Cindy, and 1 other are typing..."

      'typing.k': '$A, $B, $C och $N andra skriver...',
      // example: "Alex, Ben, Cindy, and 3 others are typing..."

      /**
       * Social login dialog
       */
      'social-modal.title': 'Logga in',
      'social-modal.header': 'Börja chatta på alla webbplatser som använder Now4real',

      // buttons:
      'social-modal.google': 'Logga in med Google',
      'social-modal.facebook': 'Logga in med Facebook',
      'social-modal.twitter': 'Logga in med Twitter',
      'social-modal.linkedin': 'Logga in med LinkedIn',
      'social-modal.email': 'Logga in med e-post',

      'social-modal.footer': 'Klicka på "Logga in" ovan för att acceptera Now4reals <a1>användarvillkor</a1> och <a2>integritetspolicy</a2>',
      // keep <a1> and </a1> unchanged and surrounding the translation of "Terms of Service"
      // keep <a2> and </a2> unchanged and surrounding the translation of "Privacy Policy"

      /**
       * JWT login dialog
       */
      'jwt-modal.title': 'Samtycke',

      'jwt-modal.header': 'För att börja chatta behöver du acceptera <a1>användarvillkoren</a1> och <a2>integritetspolicyn</a2> från Now4real (chattjänsten)',
      // keep <a1> and </a1> unchanged and surrounding the translation of "Terms of Service"
      // keep <a2> and </a2> unchanged and surrounding the translation of "Privacy Policy"

      'jwt-modal.button': 'Acceptera',

      /**
       * Mute dialog
       */
      'mute-modal.title': 'Tysta Användaren',

      'mute-modal.header': 'Användaren $U har tystats tills $E',
      // example: "User Ben has been muted until Wed, 14 Jun 2022 07:12:00 GMT"

      'mute-modal.headerForever': 'Användaren $U har tystats',

      'mute-modal.body.set': 'Tysta användaren $U i:',
      // example: "Mute user Ben for:" followed by input fields with "3 days"

      'mute-modal.body.update': 'Uppdatera tystnings period:',
      // example: "Update mute period:" followed by input fields with "5 days"

      'mute-modal.body.deleteInfo': 'Du kan avtysta användaren när du vill.',

      'mute-modal.body.deleteAlert': 'Du avtystar användaren',

      'mute-modal.button': 'Bekräfta',

      /**
       * Confirm dialog
       */
      'confirmation-modal.title': 'Bekräfta',
      'confirmation-modal.ok': 'Ja',
      'confirmation-modal.cancel': 'Nej',

      /**
       * Flush chat confirm dialog
       */
      'flush-chat-confirmation-modal.message': 'Är du säker på att du vill rensa alla meddelanden i den här chatten?',

      /**
       * Disable chat confirm dialog
       */
      'disable-chat-confirmation-modal.message': 'Är du säker på att du vill inaktivera den här chatten?',

      /**
       * Social login redirect pages
       */
      'social-login-redirect.title': 'Now4real Social Login',

      'social-login-redirect.step1.msg': 'Du skickas vidare till $A, var god vänta...',
      // example: "You are being redirected to Google, please wait..."

      'social-login-redirect.step2.msg': 'Du skickas vidare, var god vänta...',

      'social-login-redirect.error': 'Hopsan! Något blev fel'
   },

   /****************************************************************************************
    * FRENCH (Standard)
    ****************************************************************************************/
   'fr': {
      'genericError': 'Oups! Quelque chose a mal fonctionné',

      'connection-status.offline': 'Vous êtes hors ligne',

      /**
       * Time representation
       */
      'hourFormat': 24,
      // 12 (e.g. "3:52 PM") or 24 (e.g. "15:52")

      'timeUnit.minutes': 'minutes',
      'timeUnit.hours': 'heures',
      'timeUnit.days': 'jours',
      'timeUnit.weeks': 'semaines',
      'timeUnit.months': 'mois',
      'timeUnit.years': 'années',
      'timeUnit.forever': 'pour toujours',

      /**
       * Commons
       */
      'commons.signedWith.google': 'Connecté avec Google',
      'commons.signedWith.facebook': 'Connecté avec Facebook',
      'commons.signedWith.twitter': 'Connecté avech Twitter',
      'commons.signedWith.linkedin': 'Connecté avec LinkedIn',
      'commons.signedWith.email': 'Connecté avec email',
      'commons.signedWith.jwt': 'Connecté sur ce site',

      'commons.close': 'Fermer', // close button

      /**
       * Tooltips and balloons on closed widget
       */
      'monitor.pageViewersTitle': 'Personnes consultant cette page',
      'monitor.siteViewersTitle': 'Personnes consultant ce site',
      'monitor.chatBalloon': 'DISCUTER', // keep upper case, if applicable
      'monitor.presenceBalloon': 'Personnes présentes actuellement',

      /**
       * Menu
       */
      'status-header.options': 'Options',
      'status-header.flushChat': 'Annuler cette discussion',
      'status-header.disableChat': 'Désactiver cette discussion',
      'status-header.enableChat': 'Activer cette discussion',
      'status-header.help': 'Aide',
      'status-header.issue': 'Signaler un Problème',
      'status-header.terms': 'Conditions d\'Utilisation',
      'status-header.privacy': 'Politique de Confidentialité',
      'status-header.signout': 'Déconnexion',
      'status-header.signin': 'Connexion',

      'status-header.notRememberedLogin': 'Non mémorisé',
      // means that the login status is temporary and will not be remembered next time

      /**
       * Tab labels and tooltips
       */
      'tab.chatTabLabel': 'DISCUTER', // max 8 characters; keep upper case, if applicable
      'tab.chatTitlePage': 'Discuter avec d\'autres visiteurs de cette page en temps réel',
      'tab.chatTitleSite': 'Discuter avec d\'autres visiteurs de ce site en temps réel',

      'tab.rankingTabLabel': 'PAGES', // max 8 characters; keep upper case, if applicable
      'tab.rankingTitle': 'Pages consultées actuellement',

      'tab.heatmapTabLabel': 'MAP', // max 8 characters; keep upper case, if applicable
      'tab.heatmapTitle': 'D\'où viennent les gens',

      /**
       * Heatmap
       */
      'heatmap.pageSwitchLabel': 'PAGE', // max 12 characters; keep upper case, if applicable
      'heatmap.siteSwitchLabel': 'SITE', // max 12 characters; keep upper case, if applicable
      'heatmap.empty': 'Aucune donnée',

      /**
       * Ranking
       */
      'ranking.foregroundTitle': 'Les personnes sur ce sitee',
      'ranking.activeTitle': 'Les personnes discutant sur ce site',
      'ranking.foregroundSwitchLabel': 'VISITEURS', // max 12 characters; keep upper case, if applicable
      'ranking.activeSwitchLabel': 'DISCUTEURS', // max 12 characters; keep upper case, if applicable
      'ranking.empty': 'Aucune donnée',
      'ranking.currentPage': 'Page en cours',

      'ranking.note': 'Afficher le top dix des pages',
      // note added to the end to the ranking list to explain that only the top ten pages are shown

      /**
       * Chat
       */
      'chat.welcomeFirstMessagePage': 'Discuter avec d\'autres visiteurs de cette page en temps réel',
      'chat.welcomeFirstMessageSite': 'Discuter avec d\'autres visiteurs de ce site en temps réel',

      'chat.welcomeSecondMessage': 'N\'oubliez pas que vos messages sont publics et disparaissent après $N $A',
      'chat.welcomeSecondMessageJWT': 'N\'oubliez pas que vos messages peuvent être publics et disparaître après $N $A',
      // $N is a number and $A in a time unit taken from timeUnit.
      // example: "Please remember that your messages are public and disappear after 2 hours"

      'chat.messageDeleted.byYou': 'Vous avez supprimé ce message',
      'chat.messageDeleted.byAuthor': 'Message supprimé par l\'auteur',
      'chat.messageDeleted.byModerator': 'Message supprimé par un modérateur',
      'chat.messageDeleted.byAdmin': 'Message supprimé par l\'administrateur',
      'chat.messageDeleted.byNow4real': 'Message supprimé par l\'administrateur',
      'chat.messageDeleted.unknown': 'Message supprimé',

      'chat.placeholder': 'Saisir un message',
      'chat.postBtn': 'Publier', // means "publish this message"

      'chat.tooFrequentError': 'Vous êtes un peu trop rapide...\nVeuillez ne pas inonder la discussion',
      // \n means to break the line; \' distinguishes the apostrophe from the final apex

      'chat.blockedError': 'Désolé... Ce message semble inapproprié',
      'chat.abortedError': 'Connexion annulée ou cookies désactivés sur ce navigateur',
      'chat.mutedError': 'Oups! Il semble que vous ayez été mis en sourdine',
      'chat.notPersistentError': 'L\'authentification ne sera pas mémorisée en raison de vos paramètres de confidentialité restreints. Veuillez activer les cookies pour Now4real dans votre navigateur pour éviter que cela ne se produise.',
      'chat.disabledError': 'Cette discussion a été désactivée',

      'chat.disabledByAdmin': 'Cette discussion a été désactivée par l\'administrateur',
      'chat.disabledByModerator': 'Cette discussion a été désactivée par un modérateur',
      'chat.signinRequired': '<a>Connexion</a> à la discussion',
      // keep <a> and </a> unchanged and surrounding the translation of "Sign in"

      'chat.viewOnly': 'Mode affichage uniquement',

      // below are the actions on messages that appear in a contextual menu
      'chat.replyBtn': 'Répondre', // means "reply to this message"
      'chat.deleteBtn': 'Supprimer', // means "delete this message"
      'chat.muteBtn': 'Sourdine', // means "mute this user"

      /**
       * Presence
       */
      'presence.all.a': '1 personne sur cette page (de $N sur ce site)',
      // example: "1 person on this page (of 23 on this site)"

      'presence.all.b': '$N personnes sur cette page (de $M sur ce site)',
      // example: "5 people on this page (of 23 on this site)"

      'presence.page.a': '1 personne sur cette page',
      'presence.page.b': '$N personnes sur cette page',

      'presence.site.a': '1 personne sur ce site',
      'presence.site.b': '$N personnes sur ce site',

      /**
       * Emoji-picker labels
       */
      'emoji-picker.people': 'Personnes',
      'emoji-picker.nature': 'Nature',
      'emoji-picker.food': 'Aliments',
      'emoji-picker.activity': 'Activité',
      'emoji-picker.travel': 'Lieux',
      'emoji-picker.objects': 'Objets',
      'emoji-picker.symbols': 'Symboles',
      'emoji-picker.flags': 'Drapeaux',

      /**
       * GIF-picker labels
       */
      'gif-picker.search': 'Recherche GIF',

      /**
       * Typing
       */
      'typing.a': '1 personne est en train d\'écrire...',

      'typing.b': '$N personnes sont en train d\'écrire...',
      // example: "5 people are typing..."

      'typing.c': '$A est en train d\'écrire...',
      // example: "Alex is typing..."

      'typing.d': '$A et $B sont en train d\'écrire...',
      // example: "Alex and Ben are typing..."

      'typing.e': '$A, $B, et $C sont en train d\'écrire...',
      // example: "Alex, Ben, and Cindy are typing..."

      'typing.f': '$A et 1 autre sont en train d\'écrire...',
      // example: "Alex and 1 other are typing..."

      'typing.g': '$A et $N autres sont en train d\'écrire...',
      // example: "Alex and 3 others are typing..."

      'typing.h': '$A, $B, et 1 autre sont en train d\'écrire...',
      // example: "Alex, Ben, and 1 other are typing..."

      'typing.i': '$A, $B, et $N autres sont en train d\'écrire...',
      // example: "Alex, Ben, and 3 others are typing..."

      'typing.j': '$A, $B, $C, et 1 autre sont en train d\'écrire...',
      // example: "Alex, Ben, Cindy, and 1 other are typing..."

      'typing.k': '$A, $B, $C, et $N autres sont en train d\'écrire...',
      // example: "Alex, Ben, Cindy, and 3 others are typing..."

      /**
       * Social login dialog
       */
      'social-modal.title': 'Connexion',
      'social-modal.header': 'Commencez à discuter sur n\'importe quel site web qui utilise Now4real',

      // buttons:
      'social-modal.google': 'Connexion avec Google',
      'social-modal.facebook': 'Connexion avec Facebook',
      'social-modal.twitter': 'Connexion avec Twitter',
      'social-modal.linkedin': 'Connexion avec LinkedIn',
      'social-modal.email': 'Connexion avec email',

      'social-modal.footer': 'Cliquez sur "Connexion" ci-dessus pour accepter les <a1>Conditions d\'Utilisation</a1> et <a2>Politique de Confidentialité</a2> de Now4real',
      // keep <a1> and </a1> unchanged and surrounding the translation of "Terms of Service"
      // keep <a2> and </a2> unchanged and surrounding the translation of "Privacy Policy"

      /**
       * JWT login dialog
       */
      'jwt-modal.title': 'Consentir',

      'jwt-modal.header': 'Pour commencer à discuter, vous devez acceptez les <a1>Conditions d\'Utilisation</a1> et la <a2>Politique de Confidentialité</a2> de Now4real (le service de discussion)',
      // keep <a1> and </a1> unchanged and surrounding the translation of "Terms of Service"
      // keep <a2> and </a2> unchanged and surrounding the translation of "Privacy Policy"

      'jwt-modal.button': 'Accepter',

      /**
       * Mute dialog
       */
      'mute-modal.title': 'Mettre en Sourdine',

      'mute-modal.header': 'L\'utilisateur $U a été mis en sourdine jusqu\'à $E',
      // example: "User Ben has been muted until Wed, 14 Jun 2022 07:12:00 GMT"

      'mute-modal.headerForever': 'L\'utilisateur $U a été mis en sourdine',

      'mute-modal.body.set': 'Mettre l\'utilisateur $U en sourdine pendant:',
      // example: "Mute user Ben for:" followed by input fields with "3 days"

      'mute-modal.body.update': 'Modifier la période de sourdine:',
      // example: "Update mute period:" followed by input fields with "5 days"

      'mute-modal.body.deleteInfo': 'Vous pouvez désactiver le mode sourdine de l\'utilisateur quand vous le souhaitez.',

      'mute-modal.body.deleteAlert': 'Vous désactivez le mode sourdine pour l\'utilisateur',

      'mute-modal.button': 'Confirmer',

      /**
       * Confirm dialog
       */
      'confirmation-modal.title': 'Confirmer',
      'confirmation-modal.ok': 'Oui',
      'confirmation-modal.cancel': 'Non',

      /**
       * Flush chat confirm dialog
       */
      'flush-chat-confirmation-modal.message': 'Êtes-vous sûr de vouloir effacer cette discussion?',

      /**
       * Disable chat confirm dialog
       */
      'disable-chat-confirmation-modal.message': 'Êtes-vous sûr de vouloir désactiver cette discussion?',

      /**
       * Social login redirect pages
       */
      'social-login-redirect.title': 'Connexion Sociale de Now4real',

      'social-login-redirect.step1.msg': 'Vous êtes redirigé vers $A, veuillez patienter...',
      // example: "You are being redirected to Google, please wait..."

      'social-login-redirect.step2.msg': 'Vous êtes redirigé, veuillez patienter...',

      'social-login-redirect.error': 'Oups! Quelque chose a mal fonctionné'
   },
   
   /****************************************************************************************
   * BULGARIAN (Standard)
   ****************************************************************************************/
   'bg': {
       'genericError': 'Упс! Нещо се счупи.',
 
       'connection-status.offline': 'Няма връзка с интернет',
 
       /**
        * Time representation
        */
       'hourFormat': 24,
       // 12 (e.g. "3:52 PM") or 24 (e.g. "15:52")
 
       'timeUnit.minutes': 'минути',
       'timeUnit.hours': 'часа',
       'timeUnit.days': 'дни',
       'timeUnit.weeks': 'седмици',
       'timeUnit.months': 'месеци',
       'timeUnit.years': 'години',
       'timeUnit.forever': 'завинаги',
 
       /**
        * Commons
        */
       'commons.signedWith.google': 'Вписахте се чрез Google',
       'commons.signedWith.facebook': 'Вписахте се чрез Facebook',
       'commons.signedWith.twitter': 'Вписахте се чрез Twitter',
       'commons.signedWith.linkedin': 'Вписахте се чрез LinkedIn',
       'commons.signedWith.email': 'Вписахте се чрез email',
       'commons.signedWith.jwt': 'Вписахтесе в този сайт',
 
       'commons.close': 'Затваряне', // close button
 
       /**
        * Tooltips and balloons on closed widget
        */
       'monitor.pageViewersTitle': 'Хора, които разглеждат тази страница',
       'monitor.siteViewersTitle': 'Хора, които разглеждат този сайт',
       'monitor.chatBalloon': 'ЧАТ', // keep upper case, if applicable
       'monitor.presenceBalloon': 'Хора, налични в момента',
 
       /**
        * Menu
        */
       'status-header.options': 'Опции',
       'status-header.flushChat': 'Нулиране на този чат',
       'status-header.disableChat': 'Деактивиране на този чат',
       'status-header.enableChat': 'Активиране на този чат',
       'status-header.help': 'Помощ',
       'status-header.issue': 'Докладване на проблем',
       'status-header.terms': 'Условия за ползване',
       'status-header.privacy': 'Политика за поверителност',
       'status-header.signout': 'Отписване',
       'status-header.signin': 'Вписване',
 
       'status-header.notRememberedLogin': 'Не се запаметява',
       // means that the login status is temporary and will not be remembered next time
 
       /**
        * Tab labels and tooltips
        */
       'tab.chatTabLabel': 'ЧАТ', // max 8 characters; keep upper case, if applicable
       'tab.chatTitlePage': 'Пишете си с други посетители на тази страница в реално време',
       'tab.chatTitleSite': 'Пишете си с други посетители на този сайт в реално време',
 
       'tab.rankingTabLabel': 'СТРАНИЦИ', // max 8 characters; keep upper case, if applicable
       'tab.rankingTitle': 'Страници, които другите посетители разглеждат в момента',
 
       'tab.heatmapTabLabel': 'КАРТА', // max 8 characters; keep upper case, if applicable
       'tab.heatmapTitle': 'Откъде са другите посетители',
 
       /**
        * Heatmap
        */
       'heatmap.pageSwitchLabel': 'СТРАНИЦА', // max 12 characters; keep upper case, if applicable
       'heatmap.siteSwitchLabel': 'САЙТ', // max 12 characters; keep upper case, if applicable
       'heatmap.empty': 'Няма данни',
 
       /**
        * Ranking
        */
       'ranking.foregroundTitle': 'Посетители в този сайт',
       'ranking.activeTitle': 'Посетители на сайта, които си пишат',
       'ranking.foregroundSwitchLabel': 'ЧЕТЯЩИ', // max 12 characters; keep upper case, if applicable
       'ranking.activeSwitchLabel': 'ПИШЕЩИ', // max 12 characters; keep upper case, if applicable
       'ranking.empty': 'Няма информация',
       'ranking.currentPage': 'Настояща страница',
 
       'ranking.note': '10-те най-популярни страници',
       // note added to the end to the ranking list to explain that only the top ten pages are shown
 
       /**
        * Chat
        */
       'chat.welcomeFirstMessagePage': 'Общувайте с други посетители на тази страница в реално време',
       'chat.welcomeFirstMessageSite': 'Общувайте с други посетители на този сайт в реално време',
 
       'chat.welcomeSecondMessage': 'Помнете, че вашите съобщения се виждат от всички и изчезват след $N $A',
       'chat.welcomeSecondMessageJWT': 'Помнете, че вашите съобщения се виждат от всички и изчезват след $N $A',
       // $N is a number and $A in a time unit taken from timeUnit.
       // example: "Please remember that your messages are public and disappear after 2 hours"
 
       'chat.messageDeleted.byYou': 'Изтрихте това съобщение',
       'chat.messageDeleted.byAuthor': 'Съобщението е изтрито от автора',
       'chat.messageDeleted.byModerator': 'Съобщението е изтрито от модератор',
       'chat.messageDeleted.byAdmin': 'Съобщението е изтрито от администратор',
       'chat.messageDeleted.byNow4real': 'Съобщението е изтрито от администратора на Now4real',
       'chat.messageDeleted.unknown': 'Съобщението е изтрито',
 
       'chat.placeholder': 'Публикувайте съобщение',
       'chat.postBtn': 'Post', // means "publish this message"
 
       'chat.tooFrequentError': 'Пишете прекалено бързо...\nНедейте да препълвате чата!',
       // \n means to break the line; \' distinguishes the apostrophe from the final apex
 
       'chat.blockedError': 'Съжаляваме... Това съобщение изглежда неподходящо',
       'chat.abortedError': 'Вписването е отказано или бисквитките на браузера са изключени',
       'chat.mutedError': 'Упс! Изглежда сте заглушени',
       'chat.notPersistentError': 'Автентикацията няма да се запомни заради ограничените настройки за поверителност. Разрешете бисквитките за Now4real във вашия браузер, за да решите този проблем.',
       'chat.disabledError': 'Чатът е деактивиран',
 
       'chat.disabledByAdmin': 'Чатът е деактивиран от администратор',
       'chat.disabledByModerator': 'Чатът е деактивиран от модератор',
       'chat.signinRequired': '<a>Впишете се</a>, за да участвате в разговора',
       // keep <a> and </a> unchanged and surrounding the translation of "Sign in"
 
       'chat.viewOnly': 'Режим само за четене',
 
       // below are the actions on messages that appear in a contextual menu
       'chat.replyBtn': 'Отговор', // means "reply to this message"
       'chat.deleteBtn': 'Изтриване', // means "delete this message"
       'chat.muteBtn': 'Заглушаване', // means "mute this user"
 
       /**
        * Presence
        */
       'presence.all.a': '1 човек е на тази страница (от общо $N за целия сайт)',
       // example: "1 person on this page (of 23 on this site)"
 
       'presence.all.b': '$N човека са на тази страница (от общо $M за целия сайт)',
       // example: "5 people on this page (of 23 on this site)"
 
       'presence.page.a': '1 човек е на тази страница',
       'presence.page.b': '$N човека е на тази страница',
 
       'presence.site.a': '1 човек е на този сайт',
       'presence.site.b': '$N човека са на този сайт',
 
       /**
        * Emoji-picker labels
        */
       'emoji-picker.people': 'Хора',
       'emoji-picker.nature': 'Природа',
       'emoji-picker.food': 'Храна',
       'emoji-picker.activity': 'Дейности',
       'emoji-picker.travel': 'Места',
       'emoji-picker.objects': 'Предмети',
       'emoji-picker.symbols': 'Символи',
       'emoji-picker.flags': 'Знамена',
 
       /**
        * GIF-picker labels
        */
       'gif-picker.search': 'Търсене на GIF',
 
       /**
        * Typing
        */
       'typing.a': '1 човек пише...',
 
       'typing.b': '$N човека пишат...',
       // example: "5 people are typing..."
 
       'typing.c': '$A пише...',
       // example: "Alex is typing..."
 
       'typing.d': '$A и $B пишат...',
       // example: "Alex and Ben are typing..."
 
       'typing.e': '$A, $B и $C пишат...',
       // example: "Alex, Ben, and Cindy are typing..."
 
       'typing.f': '$A и още един човек пишат...',
       // example: "Alex and 1 other are typing..."
 
       'typing.g': '$A и още $N човека пишат...',
       // example: "Alex and 3 others are typing..."
 
       'typing.h': '$A, $B и още един човек пишат...',
       // example: "Alex, Ben, and 1 other are typing..."
 
       'typing.i': '$A, $B и още $N човека пишат...',
       // example: "Alex, Ben, and 3 others are typing..."
 
       'typing.j': '$A, $B, $C и още един човек пишат...',
       // example: "Alex, Ben, Cindy, and 1 other are typing..."
 
       'typing.k': '$A, $B, $C и още $N човека пишат...',
       // example: "Alex, Ben, Cindy, and 3 others are typing..."
 
       /**
        * Social login dialog
        */
       'social-modal.title': 'Вписване',
       'social-modal.header': 'Комуникирайте във всеки сайт, който използва Now4real',
 
       // buttons:
       'social-modal.google': 'Вписване чрез Google',
       'social-modal.facebook': 'Вписване чрез Facebook',
       'social-modal.twitter': 'Вписване чрез Twitter',
       'social-modal.linkedin': 'Вписване чрез LinkedIn',
       'social-modal.email': 'Вписване чрез email',
 
       'social-modal.footer': 'Кликнете върху “Вписване” отгоре, за да приемете <a1>Условията за ползване</a1> и <a2>Политиката за поверителност</a2> на Now4real',
       // keep <a1> and </a1> unchanged and surrounding the translation of "Terms of Service"
       // keep <a2> and </a2> unchanged and surrounding the translation of "Privacy Policy"
 
       /**
        * JWT login dialog
        */
       'jwt-modal.title': 'Съгласие',
 
       'jwt-modal.header': 'За да започнете да си пишете с другите, е необходимо да приемете <a1>Условията за ползване</a1> и <a2>Политиката за поверителност</a2> на Now4real (чат услугата)',
       // keep <a1> and </a1> unchanged and surrounding the translation of "Terms of Service"
       // keep <a2> and </a2> unchanged and surrounding the translation of "Privacy Policy"
 
       'jwt-modal.button': 'Приемам',
 
       /**
        * Mute dialog
        */
       'mute-modal.title': 'Заглушаване на потребители',
 
       'mute-modal.header': 'Потребителят $U е заглушен до $E',
       // example: "User Ben has been muted until Wed, 14 Jun 2022 07:12:00 GMT"
 
       'mute-modal.headerForever': 'Потребителят $U е заглушен',
 
       'mute-modal.body.set': 'Заглушете потребителя $U за:',
       // example: "Mute user Ben for:" followed by input fields with "3 days"
 
       'mute-modal.body.update': 'Променете периода на заглушаване:',
       // example: "Update mute period:" followed by input fields with "5 days"
 
       'mute-modal.body.deleteInfo': 'Можете да премахнете заглушаването на потребителя когато пожелаете.',
 
       'mute-modal.body.deleteAlert': 'Ще премахнете заглушаването на потребителя',
 
       'mute-modal.button': 'Потвърждение',
 
       /**
        * Confirm dialog
        */
       'confirmation-modal.title': 'Потвърждение',
       'confirmation-modal.ok': 'Да',
       'confirmation-modal.cancel': 'Не',
 
       /**
        * Flush chat confirm dialog
        */
       'flush-chat-confirmation-modal.message': 'Сигурни ли сте, че искате да изтриете съдържанието на този чат?',
 
       /**
        * Disable chat confirm dialog
        */
       'disable-chat-confirmation-modal.message': 'Сигурни ли сте, че искате да деактивирате този чат?',
 
       /**
        * Social login redirect pages
        */
       'social-login-redirect.title': 'Now4real Social Login',
 
       'social-login-redirect.step1.msg': 'Пренасочваме ви към $A, моля изчакайте...',
       // example: "You are being redirected to Google, please wait..."
 
       'social-login-redirect.step2.msg': 'Пренасочваме ви, моля изчакайте...',
 
       'social-login-redirect.error': 'Упс! Нещо не сработи.'
    }
}
