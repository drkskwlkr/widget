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

      'social-modal.footer': 'Click ???Sign in??? above to accept Now4real\'s <a1>Terms of Service</a1> and <a2>Privacy Policy</a2>',
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
      'genericError': 'Ops! Qualcosa ?? andato storto',

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

      'ranking.note': '?? mostrata la top ten',
      // note added to the end to the ranking list to explain that only the top ten pages are shown

      /**
       * Chat
       */
      'chat.welcomeFirstMessagePage': 'Chatta con le altre persone presenti su questa pagina',
      'chat.welcomeFirstMessageSite': 'Chatta con le altre persone presenti su questo sito',

      'chat.welcomeSecondMessage': 'Ricorda che quello che scrivi in chat ?? pubblico e scompare dopo $N $A',
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
      'chat.notPersistentError': 'L\'autenticazione non sar?? ricordata a causa di impostazioni di privacy restrittive. Abilita i cookie per Now4real nel tuo browser per evitare che ci?? accada.',
      'chat.disabledError': 'Questa chat ?? stata disabilitata',

      'chat.signinRequired': '<a>Accedi</a> per chattare',
      // keep <a> and </a> unchanged and surrounding the translation of "Sign in"

      'chat.disabledByAdmin': 'Questa chat ?? stata disabilitata dall\'amministratore',
      'chat.disabledByModerator': 'Questa chat ?? stata disabilitata da un moderatore',
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
      'emoji-picker.activity': 'Attivit??',
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

      'social-modal.footer': 'Cliccando su ???Accedi??? qui sopra accetti le <a1>Condizioni di servizio</a1> e la <a2>Privacy policy</a2> di Now4real',
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

      'mute-modal.header': 'L\'utente $U ?? stato silenziato fino a $E',
      // example: "User Ben has been muted until Wed, 14 Jun 2022 07:12:00 GMT"

      'mute-modal.headerForever': 'L\'utente $U ?? stato silenziato',

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

      'social-login-redirect.error': 'Oops! Qualcosa ?? andato storto'
   },

   /****************************************************************************************
    * SPANISH (Castilian)
    ****************************************************************************************/
   'es': {
      'genericError': '??UPS! Algo ha fallado',

      'connection-status.offline': 'Est??s desconectado/a',

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
      'timeUnit.years': 'a??os',
      'timeUnit.forever': 'forever', // TODO

      /**
       * Commons
       */
      'commons.signedWith.google': 'Registrado a trav??s de Google',
      'commons.signedWith.facebook': 'Registrado a trav??s de Facebook',
      'commons.signedWith.twitter': 'Registrado a trav??s de Twitter',
      'commons.signedWith.linkedin': 'Registrado a trav??s de LinkedIn',
      'commons.signedWith.email': 'Registrado a trav??s de email',
      'commons.signedWith.jwt': 'Registrado en este sitio',

      'commons.close': 'Cerrar', // close button

      /**
       * Tooltips and balloons on closed widget
       */
      'monitor.pageViewersTitle': 'Personas viendo esta p??gina',
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
      'status-header.terms': 'T??rminos del Servicio',
      'status-header.privacy': 'Pol??tica de Privacidad',
      'status-header.signout': 'Cerrar Sesi??n',
      'status-header.signin': 'Sign in', // TODO

      'status-header.notRememberedLogin': 'Sin recordar',
      // means that the login status is temporary and will not be remembered next time

      /**
       * Tab labels and tooltips
       */
      'tab.chatTabLabel': 'CHAT', // max 8 characters; keep upper case, if applicable
      'tab.chatTitlePage': 'Habla aqu?? con otras personas que est??n ahora en esta p??gina',
      'tab.chatTitleSite': 'Habla aqu?? con otras personas que est??n ahora en este sitio',

      'tab.rankingTabLabel': 'P??GINAS', // max 8 characters; keep upper case, if applicable
      'tab.rankingTitle': 'D??nde est?? la gente ahora en este sitio',

      'tab.heatmapTabLabel': 'MAPA', // max 8 characters; keep upper case, if applicable
      'tab.heatmapTitle': 'D??nde est?? la gente en el mundo real',

      /**
       * Heatmap
       */
      'heatmap.pageSwitchLabel': 'P??GINA', // max 12 characters; keep upper case, if applicable
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
      'ranking.currentPage': 'P??gina actual',

      'ranking.note': 'Mostrando las diez primeras p??ginas',
      // note added to the end to the ranking list to explain that only the top ten pages are shown

      /**
       * Chat
       */
      'chat.welcomeFirstMessagePage': 'Habla aqu?? con otras personas que est??n ahora en esta p??gina',
      'chat.welcomeFirstMessageSite': 'Habla aqu?? con otras personas que est??n ahora en este sitio',

      'chat.welcomeSecondMessage': 'Recuerda que lo que escribes en el chat es p??blico y desaparece a los $N $A',
      'chat.welcomeSecondMessageJWT': 'Recuerda que lo que escribes en el chat puede ser p??blico y desaparece a los $N $A',
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

      'chat.tooFrequentError': 'Vas un poco r??pido...\nPor favor, no llenes el chat',
      // \n means to break the line; \' distinguishes the apostrophe from the final apex

      'chat.blockedError': 'Lo siento... Este mensaje parece inapropiado',
      'chat.abortedError': 'Inicio de sesi??n cancelado o cookies desactivadas en este navegador',
      'chat.mutedError': '??UPS! Parece que te han silenciado',
      'chat.notPersistentError': 'La autenticaci??n no ser?? recordada debido a tu configuraci??n de privacidad restringida. Por favor, habilita las cookies para Now4real en tu navegador para evitar que esto suceda.',
      'chat.disabledError': 'This chat has been disabled', // TODO

      'chat.disabledByAdmin': 'This chat has been disabled by the admin', // TODO
      'chat.disabledByModerator': 'This chat has been disabled by a moderator', // TODO
      'chat.signinRequired': '<a>Inicia sesi??n</a> para hablar',
      // keep <a> and </a> unchanged and surrounding the translation of "Sign in"

      'chat.viewOnly': 'Solo lectura',

      // below are the actions on messages that appear in a contextual menu
      'chat.replyBtn': 'Responder', // means "reply to this message"
      'chat.deleteBtn': 'Eliminar', // means "delete this message"
      'chat.muteBtn': 'Mute', // means "mute this user" // TODO

      /**
       * Presence
       */
      'presence.all.a': '1 persona en esta p??gina (de $N en este sitio)',
      // example: "1 person on this page (of 23 on this site)"

      'presence.all.b': '$N personas en esta p??gina (de $M en este sitio)',
      // example: "5 people on this page (of 23 on this site)"

      'presence.page.a': '1 persona en esta p??gina',
      'presence.page.b': '$N personas en esta p??gina',

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
      'emoji-picker.symbols': 'S??mbolos',
      'emoji-picker.flags': 'Banderas',

      /**
       * GIF-picker labels
       */
      'gif-picker.search': 'Search GIF', // TODO

      /**
       * Typing
       */
      'typing.a': 'Una persona est?? escribiendo...',

      'typing.b': '$N personas est??n escribiendo...',
      // example: "5 people are typing..."

      'typing.c': '$A est?? escribiendo...',
      // example: "Alex is typing..."

      'typing.d': '$A y $B est??n escribiendo...',
      // example: "Alex and Ben are typing..."

      'typing.e': '$A, $B y $C est??n escribiendo...',
      // example: "Alex, Ben, and Cindy are typing..."

      'typing.f': '$A y otra persona est??n escribiendo...',
      // example: "Alex and 1 other are typing..."

      'typing.g': '$A y otras $N personas est??n escribiendo...',
      // example: "Alex and 3 others are typing..."

      'typing.h': '$A, $B y otra persona est??n escribiendo...',
      // example: "Alex, Ben, and 1 other are typing..."

      'typing.i': '$A, $B y otras $N personas est??n escribiendo...',
      // example: "Alex, Ben, and 3 others are typing..."

      'typing.j': '$A, $B, $C y otra persona est??n escribiendo...',
      // example: "Alex, Ben, Cindy, and 1 other are typing..."

      'typing.k': '$A, $B, $C y otras $N personas est??n escribiendo...',
      // example: "Alex, Ben, Cindy, and 3 others are typing..."

      /**
       * Social login dialog
       */
      'social-modal.title': 'Iniciar sesi??n',
      'social-modal.header': 'Empieza a hablar en cualquier p??gina web que use Now4real',

      // buttons:
      'social-modal.google': 'Inicia sesi??n con Google',
      'social-modal.facebook': 'Inicia sesi??n con Facebook',
      'social-modal.twitter': 'Inicia sesi??n con Twitter',
      'social-modal.linkedin': 'Inicia sesi??n con LinkedIn',
      'social-modal.email': 'Inicia sesi??n con email',

      'social-modal.footer': 'Haz click en ???Iniciar sesi??n??? arriba para aceptar los <a1>T??rminos del Servicio</a1> y la <a2>Pol??tica de Privacidad</a2> de Now4real',
      // keep <a1> and </a1> unchanged and surrounding the translation of "Terms of Service"
      // keep <a2> and </a2> unchanged and surrounding the translation of "Privacy Policy"

      /**
       * JWT login dialog
       */
      'jwt-modal.title': 'Consentimiento',

      'jwt-modal.header': 'Para empezar a hablar debes aceptar los <a1>T??rminos del Servicio</a1> y la <a2>Pol??tica de Privacidad</a2> de Now4real (el servicio de chat)',
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

      'connection-status.offline': 'Voc?? est?? desconectado/a',

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
      'monitor.pageViewersTitle': 'Pessoas visualizando esta p??gina',
      'monitor.siteViewersTitle': 'Pessoas visualizando este site',
      'monitor.chatBalloon': 'CHAT', // keep upper case, if applicable
      'monitor.presenceBalloon': 'People presentes agora',

      /**
       * Menu
       */
      'status-header.options': 'Op????es',
      'status-header.flushChat': 'Flush this chat', // TODO
      'status-header.disableChat': 'Disable this chat', // TODO
      'status-header.enableChat': 'Enable this chat', // TODO
      'status-header.help': 'Ajuda',
      'status-header.issue': 'Reportar um problema',
      'status-header.terms': 'Termos de Servi??o',
      'status-header.privacy': 'Pol??tica de Privacidade',
      'status-header.signout': 'Sair',
      'status-header.signin': 'Sign in', // TODO

      'status-header.notRememberedLogin': 'N??o ser?? lembrado',
      // means that the login status is temporary and will not be remembered next time

      /**
       * Tab labels and tooltips
       */
      'tab.chatTabLabel': 'CHAT', // max 8 characters; keep upper case, if applicable
      'tab.chatTitlePage': 'Converse aqui com outras pessoas que est??o nesta p??gina agora',
      'tab.chatTitleSite': 'Converse aqui com outras pessoas que est??o neste site agora',

      'tab.rankingTabLabel': 'P??GINAS', // max 8 characters; keep upper case, if applicable
      'tab.rankingTitle': 'Onde as pessoas est??o neste site agora',

      'tab.heatmapTabLabel': 'MAPA', // max 8 characters; keep upper case, if applicable
      'tab.heatmapTitle': 'Onde as pessoas est??o no mundo real',

      /**
       * Heatmap
       */
      'heatmap.pageSwitchLabel': 'P??GINA', // max 12 characters; keep upper case, if applicable
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
      'ranking.currentPage': 'P??gina atual',

      'ranking.note': 'Mostrando as dez p??ginas principais',
      // note added to the end to the ranking list to explain that only the top ten pages are shown

      /**
       * Chat
       */
      'chat.welcomeFirstMessagePage': 'Converse aqui com outras pessoas que est??o nesta p??gina agora',
      'chat.welcomeFirstMessageSite': 'Converse aqui com outras pessoas que est??o neste site agora',

      'chat.welcomeSecondMessage': 'Lembre-se de que o que voc?? escreve no chat ?? p??blico e desaparece ap??s $N $A',
      'chat.welcomeSecondMessageJWT': 'Lembre-se de que o que voc?? escreve no chat pode ser p??blico e desaparece ap??s $N $A',
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

      'chat.tooFrequentError': 'Voc?? est?? sendo\' r??pido demais... \nPor favor n??o congestione o bate-papo',
      // \n means to break the line; \' distinguishes the apostrophe from the final apex

      'chat.blockedError': 'Desculpe ... Esta mensagem parece inadequada',
      'chat.abortedError': 'Login cancelado ou cookies desativados neste navegador',
      'chat.mutedError': 'Ups! Parece que voc?? foi silenciado',
      'chat.notPersistentError': 'A autentica????o n??o ser?? lembrada devido ??s suas configura????es de privacidade restritas. Ative os cookies para Now4real no seu navegador para evitar que isso aconte??a.',
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
      'presence.all.a': '1 pessoa nesta p??gina (de $N neste site)',
      // example: "1 person on this page (of 23 on this site)"

      'presence.all.b': '$N pessoas nesta p??gina (de $M neste site)',
      // example: "5 people on this page (of 23 on this site)"

      'presence.page.a': '1 pessoa nesta p??gina',
      'presence.page.b': '$N pessoas nesta p??gina',

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
      'emoji-picker.symbols': 'S??mbolos',
      'emoji-picker.flags': 'Bandeiras',

      /**
       * GIF-picker labels
       */
      'gif-picker.search': 'Search GIF', // TODO

      /**
       * Typing
       */
      'typing.a': 'Uma pessoa est?? escrevendo...',

      'typing.b': '$N pessoas est??o escrevendo...',
      // example: "5 people are typing..."

      'typing.c': '$A est?? escrevendo...',
      // example: "Alex is typing..."

      'typing.d': '$A e $B est??o escrevendo...',
      // example: "Alex and Ben are typing..."

      'typing.e': '$A, $B e $C est??o escrevendo...',
      // example: "Alex, Ben, and Cindy are typing..."

      'typing.f': '$A e outra pessoa est??o escrevendo...',
      // example: "Alex and 1 other are typing..."

      'typing.g': '$A e $N outras pessoas est??o escrevendo...',
      // example: "Alex and 3 others are typing..."

      'typing.h': '$A, $B e outra pessoa est??o escrevendo...',
      // example: "Alex, Ben, and 1 other are typing..."

      'typing.i': '$A, $B e $N outras pessoas est??o escrevendo...',
      // example: "Alex, Ben, and 3 others are typing..."

      'typing.j': '$A, $B, $C e outra pessoa est??o escrevendo...',
      // example: "Alex, Ben, Cindy, and 1 other are typing..."

      'typing.k': '$A, $B, $C e $N outras pessoas est??o escrevendo...',
      // example: "Alex, Ben, Cindy, and 3 others are typing..."

      /**
       * Social login dialog
       */
      'social-modal.title': 'Entrar',
      'social-modal.header': 'Come??ar a conversar em qualquer website que utiliza Now4real',

      // buttons:
      'social-modal.google': 'Entrar com Google',
      'social-modal.facebook': 'Entrar com Facebook',
      'social-modal.twitter': 'Entrar com Twitter',
      'social-modal.linkedin': 'Entrar com LinkedIn',
      'social-modal.email': 'Entrar com email',

      'social-modal.footer': 'Click em ???Entrar??? acima para aceitar os <a1>Termos de Servi??o</a1> e a <a2>Pol??tica de Privacidade</a2> de Now4real',
      // keep <a1> and </a1> unchanged and surrounding the translation of "Terms of Service"
      // keep <a2> and </a2> unchanged and surrounding the translation of "Privacy Policy"

      /**
       * JWT login dialog
       */
      'jwt-modal.title': 'Consentimento',

      'jwt-modal.header': 'Para come??ar a conversar voc?? deve aceitar os <a1>Termos de Servi??o</a1> e a <a2>Pol??tica de Privacidade</a2> de Now4real (o servi??o de chat)',
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
      'commons.signedWith.google': 'Angemeldet ??ber Google',
      'commons.signedWith.facebook': 'Angemeldet ??ber Facebook',
      'commons.signedWith.twitter': 'Angemeldet ??ber Twitter',
      'commons.signedWith.linkedin': 'Angemeldet ??ber LinkedIn',
      'commons.signedWith.email': 'Angemeldet ??ber email',
      'commons.signedWith.jwt': 'Angemeldet in diesem Webseite',

      'commons.close': 'Schlie??en', // close button

      /**
       * Tooltips and balloons on closed widget
       */
      'monitor.pageViewersTitle': 'Seitenbesucher jetzt',
      'monitor.siteViewersTitle': 'Webseitenbesucher jetzt',
      'monitor.chatBalloon': 'CHAT', // keep upper case, if applicable
      'monitor.presenceBalloon': 'Menschen pr??sentieren jetzt',

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

      'chat.welcomeSecondMessage': 'Bitte denken Sie daran, dass alles, was Sie im Chat schreiben, ??ffentlich ist und nach $N $A verschwindet',
      'chat.welcomeSecondMessageJWT': 'Bitte denken Sie daran, dass das, was Sie im Chat schreiben, m??glicherweise ??ffentlich ist und nach $N $A verschwindet',
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
      'chat.mutedError': 'Hoppla! Es sieht so aus, als w??ren Sie stummgeschaltet worden',
      'chat.notPersistentError': 'Die Authentifizierung wird aufgrund Ihrer eingeschr??nkten Datenschutzeinstellungen nicht gespeichert. Um dies zu verhindern, aktivieren Sie bitte die Cookies f??r Now4real in Ihrem Browser.',
      'chat.disabledError': 'This chat has been disabled', // TODO

      'chat.disabledByAdmin': 'This chat has been disabled by the admin', // TODO
      'chat.disabledByModerator': 'This chat has been disabled by a moderator', // TODO
      'chat.signinRequired': '<a>Melden Sie sich an</a>, um zu chatten',
      // keep <a> and </a> unchanged and surrounding the translation of "Sign in"

      'chat.viewOnly': 'Nur Betrachter -Modus',

      // below are the actions on messages that appear in a contextual menu
      'chat.replyBtn': 'Antworten', // means "reply to this message"
      'chat.deleteBtn': 'L??schen', // means "delete this message"
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
      'emoji-picker.activity': 'Activit??t',
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

      'social-modal.footer': 'Klick ???Anmelden??? und akzeptiere damit die <a1>Nutzungsbedingungen</a1> und die <a2>Datenschutzbestimmungen</a2> von Now4real',
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
      'genericError': 'Oops! Co?? posz??o nie tak',

      'connection-status.offline': 'Jeste?? offline',

      /**
       * Time representation
       */
      'hourFormat': 24,
      // 12 (e.g. "3:52 PM") or 24 (e.g. "15:52")

      'timeUnit.minutes': 'minutach',
      'timeUnit.hours': 'godzinach',
      'timeUnit.days': 'dniach',
      'timeUnit.weeks': 'tygodniach',
      'timeUnit.months': 'miesi??ce',
      'timeUnit.years': 'lat',
      'timeUnit.forever': 'na zawsze',

      /**
       * Commons
       */
      'commons.signedWith.google': 'Zaloguj si??: Google',
      'commons.signedWith.facebook': 'Zaloguj si??: Facebook',
      'commons.signedWith.twitter': 'Zaloguj si??: Twitter',
      'commons.signedWith.linkedin': 'Zaloguj si??: LinkedIn',
      'commons.signedWith.email': 'Zaloguj si?? przez email',
      'commons.signedWith.jwt': 'Zalogowany na tej stronie',

      'commons.close': 'Zamknij', // close button

      /**
       * Tooltips and balloons on closed widget
       */
      'monitor.pageViewersTitle': 'Osoby przegl??daj??ce t?? stron??',
      'monitor.siteViewersTitle': 'Osoby przegl??daj??ce t?? witryn??',
      'monitor.chatBalloon': 'CZAT', // keep upper case, if applicable
      'monitor.presenceBalloon': 'Osoby aktualnie obecne',

      /**
       * Menu
       */
      'status-header.options': 'Opcje',
      'status-header.flushChat': 'Wyczy???? ten czat',
      'status-header.disableChat': 'Wy????cz ten czat',
      'status-header.enableChat': 'W????cz ten czat',
      'status-header.help': 'Pomoc',
      'status-header.issue': 'Zg??o?? b????d',
      'status-header.terms': 'Regulamin',
      'status-header.privacy': 'Polityka Prywatno??ci',
      'status-header.signout': 'Wyloguj si??',
      'status-header.signin': 'Zaloguj si??',

      'status-header.notRememberedLogin': 'Nie zapami??tany',
      // means that the login status is temporary and will not be remembered next time

      /**
       * Tab labels and tooltips
       */
      'tab.chatTabLabel': 'CZAT', // max 8 characters; keep upper case, if applicable
      'tab.chatTitlePage': 'Czat z innymi u??ytkownikami tej strony w czasie rzeczywistym',
      'tab.chatTitleSite': 'Czat z innymi u??ytkownikami tej witryny w czasie rzeczywistym',

      'tab.rankingTabLabel': 'STRONY', // max 8 characters; keep upper case, if applicable
      'tab.rankingTitle': 'Strony teraz przegl??dane',

      'tab.heatmapTabLabel': 'MAPA', // max 8 characters; keep upper case, if applicable
      'tab.heatmapTitle': 'Sk??d s??',

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
      'ranking.activeTitle': 'Osoby rozmawiaj??ce na tej witrynie',
      'ranking.foregroundSwitchLabel': 'PRZEGL??DAJ??CY', // max 12 characters; keep upper case, if applicable
      'ranking.activeSwitchLabel': 'ROZMAWIAJ??CY', // max 12 characters; keep upper case, if applicable
      'ranking.empty': 'Brak danych',
      'ranking.currentPage': 'Bie????ca strona',

      'ranking.note': 'Dziesi???? najlepszych stron',
      // note added to the end to the ranking list to explain that only the top ten pages are shown

      /**
       * Chat
       */
      'chat.welcomeFirstMessagePage': 'Czat z innymi u??ytkownikami tej strony w czasie rzeczywistym',
      'chat.welcomeFirstMessageSite': 'Czat z innymi u??ytkownikami tej witryny w czasie rzeczywistym',

      'chat.welcomeSecondMessage': 'Pami??taj, ??e Twoje wiadomo??ci s?? publiczne i znikaj?? po $N $A',
      'chat.welcomeSecondMessageJWT': 'Pami??taj, ??e Twoje wiadomo??ci mog?? by?? publiczne i znikn???? po $N $A',
      // $N is a number and $A in a time unit taken from timeUnit.
      // example: "Please remember that your messages are public and disappear after 2 hours"

      'chat.messageDeleted.byYou': 'Usun????e?? wiadomo????',
      'chat.messageDeleted.byAuthor': 'Wiadomo???? usuni??ta przez autora',
      'chat.messageDeleted.byModerator': 'Wiadomo???? usuni??ta przez moderatora',
      'chat.messageDeleted.byAdmin': 'Wiadomo???? usuni??ta przez administratora',
      'chat.messageDeleted.byNow4real': 'Wiadomo???? usuni??ta przez administratora',
      'chat.messageDeleted.unknown': 'Wiadomo???? usuni??ta',

      'chat.placeholder': 'Wpisz wiadomo????',
      'chat.postBtn': 'Wy??lij', // means "publish this message"

      'chat.tooFrequentError': 'Jeste?? troch?? za szybki...\nProsimy nie zalewa?? czatu',
      // \n means to break the line; \' distinguishes the apostrophe from the final apex

      'chat.blockedError': 'Przepraszamy... Ta wiadomo???? wydaje si?? nieodpowiednia',
      'chat.abortedError': 'Nie mo??na si?? zalogowa?? lub ciasteczka s?? wy????czone w Twojej przegl??darce',
      'chat.mutedError': 'Oops! Wygl??da na to, ??e zosta??e?? wyciszony',
      'chat.notPersistentError': 'Uwierzytelnienie nie zostanie zapami??tane ze wzgl??du na Twoje ustawienia prywatno??ci. Prosimy w????czy?? obs??ug?? plik??w cookie w swojej przegl??darce, aby temu zapobiec.',
      'chat.disabledError': 'Ten czat zosta?? wy????czony',

      'chat.disabledByAdmin': 'Ten czat zosta?? wy????czony przez administratora',
      'chat.disabledByModerator': 'Ten czat zosta?? wy????czony przez moderatora',
      'chat.signinRequired': '<a>Zaloguj si??</a> aby rozmawia??',
      // keep <a> and </a> unchanged and surrounding the translation of "Sign in"

      'chat.viewOnly': 'Tryb podgl??du',

      // below are the actions on messages that appear in a contextual menu
      'chat.replyBtn': 'Odpowiedz', // means "reply to this message"
      'chat.deleteBtn': 'Usu??', // means "delete this message"
      'chat.muteBtn': 'Wycisz', // means "mute this user"

      /**
       * Presence
       */
      'presence.all.a': '1 osoba na tej stronie (z $N na tej witrynie)',
      // example: "1 person on this page (of 23 on this site)"

      'presence.all.b': 'Os??b na tej stronie: $N (z $M na tej witrynie)',
      // example: "5 people on this page (of 23 on this site)"

      'presence.page.a': '1 osoba na tej stronie',
      'presence.page.b': 'Ilo???? os??b na tej stronie: $N',

      'presence.site.a': '1 osoba na tej witrynie',
      'presence.site.b': 'Ilo???? os??b na tej witrynie: $N',

      /**
       * Emoji-picker labels
       */
      'emoji-picker.people': 'Ludzie',
      'emoji-picker.nature': 'Natura',
      'emoji-picker.food': 'Jedzenie',
      'emoji-picker.activity': 'Aktywno????',
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

      'typing.b': '$N os??b pisze...',
      // example: "5 people are typing..."

      'typing.c': '$A pisze...',
      // example: "Alex is typing..."

      'typing.d': '$A i $B pisz??...',
      // example: "Alex and Ben are typing..."

      'typing.e': '$A, $B i $C pisz??...',
      // example: "Alex, Ben, and Cindy are typing..."

      'typing.f': '$A i 1 inna osoba pisz??...',
      // example: "Alex and 1 other are typing..."

      'typing.g': '$A i $N innych pisz??...',
      // example: "Alex and 3 others are typing..."

      'typing.h': '$A, $B i 1 inna osoba pisz??...',
      // example: "Alex, Ben, and 1 other are typing..."

      'typing.i': '$A, $B i $N innych pisze...',
      // example: "Alex, Ben, and 3 others are typing..."

      'typing.j': '$A, $B, $C i 1 inna osoba pisz??...',
      // example: "Alex, Ben, Cindy, and 1 other are typing..."

      'typing.k': '$A, $B, $C i $N innych pisze...',
      // example: "Alex, Ben, Cindy, and 3 others are typing..."

      /**
       * Social login dialog
       */
      'social-modal.title': 'Zaloguj si??',
      'social-modal.header': 'Rozpocznij lub do????cz do rozmowy',

      // buttons:
      'social-modal.google': 'Logowanie z Google',
      'social-modal.facebook': 'Logowanie z Facebook',
      'social-modal.twitter': 'Logowanie z Twitter',
      'social-modal.linkedin': 'Logowanie z LinkedIn',
      'social-modal.email': 'Zaloguj si?? adresem email',

      'social-modal.footer': 'Loguj??c si?? akceptujesz <a1>Regulamin</a1> i <a2>Polityk?? Prywatno??ci</a2>',
      // keep <a1> and </a1> unchanged and surrounding the translation of "Terms of Service"
      // keep <a2> and </a2> unchanged and surrounding the translation of "Privacy Policy"

      /**
       * JWT login dialog
       */
      'jwt-modal.title': 'Zgoda',

      'jwt-modal.header': 'Aby zacz??c rozmawia?? zaakceptuj <a1>Regulamin</a1> i <a2>Polityk?? Prywatno??ci</a2> Now4real (operatora czatu)',
      // keep <a1> and </a1> unchanged and surrounding the translation of "Terms of Service"
      // keep <a2> and </a2> unchanged and surrounding the translation of "Privacy Policy"

      'jwt-modal.button': 'Akceptuj??',

      /**
       * Mute dialog
       */
      'mute-modal.title': 'Wycisz u??ytkownika',

      'mute-modal.header': 'U??ytkownik $U zosta?? wyciszony do $E',
      // example: "User Ben has been muted until Wed, 14 Jun 2022 07:12:00 GMT"

      'mute-modal.headerForever': 'U??ytkownik $U zosta?? wyciszony',

      'mute-modal.body.set': 'Wycisz u??ytkownika $U na:',
      // example: "Mute user Ben for:" followed by input fields with "3 days"

      'mute-modal.body.update': 'Aktualizacja okresu wyciszenia:',
      // example: "Update mute period:" followed by input fields with "5 days"

      'mute-modal.body.deleteInfo': 'Mo??esz wy????czy?? wyciszenie u??ytkownika, kiedy tylko chcesz.',

      'mute-modal.body.deleteAlert': 'Uwalniasz u??ytkownika',

      'mute-modal.button': 'Potwierd??',

      /**
       * Confirm dialog
       */
      'confirmation-modal.title': 'Potwierd??',
      'confirmation-modal.ok': 'Tak',
      'confirmation-modal.cancel': 'Nie',

      /**
       * Flush chat confirm dialog
       */
      'flush-chat-confirmation-modal.message': 'Czy na pewno chcesz wyczy??ci?? ten czat?',

      /**
       * Disable chat confirm dialog
       */
      'disable-chat-confirmation-modal.message': 'Czy na pewno chcesz wy????czy?? ten czat?',

      /**
       * Social login redirect pages
       */
      'social-login-redirect.title': 'Now4real Logowanie Social Media',

      'social-login-redirect.step1.msg': 'Zostaniesz przekierowany do $A, prosz?? czeka??...',
      // example: "You are being redirected to Google, please wait..."

      'social-login-redirect.step2.msg': 'Zostaniesz przekierowany, prosz?? czeka??...',

      'social-login-redirect.error': 'Ups! Co?? posz??o nie tak'
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
      'status-header.privacy': 'Politica de confiden??ialitate',
      'status-header.signout': 'Ie??ire',
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

      'social-modal.footer': 'Apasa pe ???Intra??? ca sa accepti <a1>Termene si Servicii</a1> si <a2>Politica de Confidentialitate</a2> de pe acest site si Now4real',
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
      'genericError': 'Hoppsan! Nu blev n??got fel',

      'connection-status.offline': 'Du ??r offline',

      /**
       * Time representation
       */
      'hourFormat': 24,
      // 12 (e.g. "3:52 PM") or 24 (e.g. "15:52")

      'timeUnit.minutes': 'minuter',
      'timeUnit.hours': 'timmar',
      'timeUnit.days': 'dagar',
      'timeUnit.weeks': 'veckor',
      'timeUnit.months': 'm??nader',
      'timeUnit.years': '??r',
      'timeUnit.forever': 'f??r evigt',

      /**
       * Commons
       */
      'commons.signedWith.google': 'Inloggad med Google',
      'commons.signedWith.facebook': 'Inloggad med Facebook',
      'commons.signedWith.twitter': 'Inloggad med Twitter',
      'commons.signedWith.linkedin': 'Inloggad med LinkedIn',
      'commons.signedWith.email': 'Inloggad med e-post',
      'commons.signedWith.jwt': 'Inloggad p?? denna webbplats',

      'commons.close': 'St??ng', // close button

      /**
       * Tooltips and balloons on closed widget
       */
      'monitor.pageViewersTitle': 'Personer som tittar p?? den h??r sidan',
      'monitor.siteViewersTitle': 'Personer som tittar p?? denna webbplats',
      'monitor.chatBalloon': 'CHATT', // keep upper case, if applicable
      'monitor.presenceBalloon': 'Personer n??rvarande nu',

      /**
       * Menu
       */
      'status-header.options': 'Alternativ',
      'status-header.flushChat': 'Rensa alla meddelanden i den h??r chatten',
      'status-header.disableChat': 'Inaktivera den h??r chatten',
      'status-header.enableChat': 'Aktivera den h??r chatten',
      'status-header.help': 'Hj??lp',
      'status-header.issue': 'Rapportera ett problem',
      'status-header.terms': 'Anv??ndarvillkor',
      'status-header.privacy': 'Integritetspolicy',
      'status-header.signout': 'Logga ut',
      'status-header.signin': 'Logga in',

      'status-header.notRememberedLogin': 'Sparas inte',
      // means that the login status is temporary and will not be remembered next time

      /**
       * Tab labels and tooltips
       */
      'tab.chatTabLabel': 'CHATT', // max 8 characters; keep upper case, if applicable
      'tab.chatTitlePage': 'Chatta med andra bes??kare p?? denna sida i realtid',
      'tab.chatTitleSite': 'Chatta med andra bes??kare p?? denna webbplats i realtid',

      'tab.rankingTabLabel': 'SIDOR', // max 8 characters; keep upper case, if applicable
      'tab.rankingTitle': 'Sidor som bes??kare tittar p?? nu',

      'tab.heatmapTabLabel': 'KARTA', // max 8 characters; keep upper case, if applicable
      'tab.heatmapTitle': 'Varifr??n bes??karna kommer',

      /**
       * Heatmap
       */
      'heatmap.pageSwitchLabel': 'SIDA', // max 12 characters; keep upper case, if applicable
      'heatmap.siteSwitchLabel': 'WEBBPLATS', // max 12 characters; keep upper case, if applicable

      'heatmap.empty': 'Inga data',

      /**
       * Ranking
       */
      'ranking.foregroundTitle': 'Bes??kare p?? denna webbplats',
      'ranking.activeTitle': 'Personer som chattar p?? denna webbplats',
      'ranking.foregroundSwitchLabel': 'BES??KARE', // max 12 characters; keep upper case, if applicable
      'ranking.activeSwitchLabel': 'CHATTARE', // max 12 characters; keep upper case, if applicable
      'ranking.empty': 'Inga data',
      'ranking.currentPage': 'Nuvarande sida',

      'ranking.note': 'Visar de tio h??gst rankade sidorna',
      // note added to the end to the ranking list to explain that only the top ten pages are shown

      /**
       * Chat
       */
      'chat.welcomeFirstMessagePage': 'Chatta med andra bes??kare p?? denna sida i realtid',
      'chat.welcomeFirstMessageSite': 'Chatta med andra bes??kare p?? denna webbplats i realtid',

      'chat.welcomeSecondMessage': 'Kom ih??g att det du skriver i chatten ??r offentligt och f??rsvinner efter $N $A',
      'chat.welcomeSecondMessageJWT': 'Kom ih??g att det du skriver i chatten kan vara offentligt och f??rsvinner efter $N $A',
      // $N is a number and $A in a time unit taken from timeUnit.
      // example: "Please remember that your messages are public and disappear after 2 hours"

      'chat.messageDeleted.byYou': 'Du raderade det h??r meddelandet',
      'chat.messageDeleted.byAuthor': 'Meddelande raderat av f??rfattaren',
      'chat.messageDeleted.byModerator': 'Meddelande raderat av en moderator',
      'chat.messageDeleted.byAdmin': 'Meddelande raderat av administrat??ren',
      'chat.messageDeleted.byNow4real': 'Meddelande raderat av administrat??ren',
      'chat.messageDeleted.unknown': 'Meddelande raderat',

      'chat.placeholder': 'Skriv ett meddelande',
      'chat.postBtn': 'Skicka', // means "publish this message"

      'chat.tooFrequentError': 'Du ??r lite f??r snabb...\nSn??lla ??versv??mma inte chatten',
      // \n means to break the line; \' distinguishes the apostrophe from the final apex

      'chat.blockedError': 'Urs??kta, men... det h??r meddelandet verkar ol??mpligt',
      'chat.abortedError': 'Inloggning avbruten eller cookies inaktiverade i den h??r webbl??saren',
      'chat.mutedError': 'Hoppsan! Det verkar som om din chattfunktion har tystats ner',
      'chat.notPersistentError': 'Autentiseringen sparas inte p?? grund av dina begr??nsade dataskyddsinst??llningar. F??r att f??rhindra detta, v??nligen aktivera kakorna (cookies) f??r Now4real i din webbl??sare.',
      'chat.disabledError': 'Den h??r chatten har inaktiverats',

      'chat.disabledByAdmin': 'Den h??r chatten har inaktiverats av administrat??ren',
      'chat.disabledByModerator': 'Den h??r chatten har inaktiverats av en moderator',
      'chat.signinRequired': '<a>Logga in</a> f??r att chatta',
      // keep <a> and </a> unchanged and surrounding the translation of "Sign in"

      'chat.viewOnly': 'Endast visningsl??ge',

      // below are the actions on messages that appear in a contextual menu
      'chat.replyBtn': 'Svara',
      'chat.deleteBtn': 'Radera',
      'chat.muteBtn': 'Tysta', // means "mute this user"

      /**
       * Presence
       */
      'presence.all.a': '1 bes??kare p?? denna sida (av $N p?? denna webbplats)',
      // example: "1 person on this page (of 23 on this site)"

      'presence.all.b': '$N bes??kare p?? denna sida (av $M p?? denna webbplats)',
      // example: "5 people on this page (of 23 on this site)"

      'presence.page.a': '1 bes??kare p?? denna sida',
      'presence.page.b': '$N bes??kare p?? den h??r sidan',

      'presence.site.a': '1 bes??kare p?? denna webbplats',
      'presence.site.b': '$N bes??kare p?? den h??r webbplatsen',

      /**
       * Emoji-picker labels
       */
      'emoji-picker.people': 'M??nniskor',
      'emoji-picker.nature': 'Natur',
      'emoji-picker.food': 'Mat',
      'emoji-picker.activity': 'Aktivitet',
      'emoji-picker.travel': 'Platser',
      'emoji-picker.objects': 'F??rem??l',
      'emoji-picker.symbols': 'Symboler',
      'emoji-picker.flags': 'Flaggor',

      /**
       * GIF-picker labels
       */
      'gif-picker.search': 'S??k GIF',

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
      'social-modal.header': 'B??rja chatta p?? alla webbplatser som anv??nder Now4real',

      // buttons:
      'social-modal.google': 'Logga in med Google',
      'social-modal.facebook': 'Logga in med Facebook',
      'social-modal.twitter': 'Logga in med Twitter',
      'social-modal.linkedin': 'Logga in med LinkedIn',
      'social-modal.email': 'Logga in med e-post',

      'social-modal.footer': 'Klicka p?? "Logga in" ovan f??r att acceptera Now4reals <a1>anv??ndarvillkor</a1> och <a2>integritetspolicy</a2>',
      // keep <a1> and </a1> unchanged and surrounding the translation of "Terms of Service"
      // keep <a2> and </a2> unchanged and surrounding the translation of "Privacy Policy"

      /**
       * JWT login dialog
       */
      'jwt-modal.title': 'Samtycke',

      'jwt-modal.header': 'F??r att b??rja chatta beh??ver du acceptera <a1>anv??ndarvillkoren</a1> och <a2>integritetspolicyn</a2> fr??n Now4real (chattj??nsten)',
      // keep <a1> and </a1> unchanged and surrounding the translation of "Terms of Service"
      // keep <a2> and </a2> unchanged and surrounding the translation of "Privacy Policy"

      'jwt-modal.button': 'Acceptera',

      /**
       * Mute dialog
       */
      'mute-modal.title': 'Tysta Anv??ndaren',

      'mute-modal.header': 'Anv??ndaren $U har tystats tills $E',
      // example: "User Ben has been muted until Wed, 14 Jun 2022 07:12:00 GMT"

      'mute-modal.headerForever': 'Anv??ndaren $U har tystats',

      'mute-modal.body.set': 'Tysta anv??ndaren $U i:',
      // example: "Mute user Ben for:" followed by input fields with "3 days"

      'mute-modal.body.update': 'Uppdatera tystnings period:',
      // example: "Update mute period:" followed by input fields with "5 days"

      'mute-modal.body.deleteInfo': 'Du kan avtysta anv??ndaren n??r du vill.',

      'mute-modal.body.deleteAlert': 'Du avtystar anv??ndaren',

      'mute-modal.button': 'Bekr??fta',

      /**
       * Confirm dialog
       */
      'confirmation-modal.title': 'Bekr??fta',
      'confirmation-modal.ok': 'Ja',
      'confirmation-modal.cancel': 'Nej',

      /**
       * Flush chat confirm dialog
       */
      'flush-chat-confirmation-modal.message': '??r du s??ker p?? att du vill rensa alla meddelanden i den h??r chatten?',

      /**
       * Disable chat confirm dialog
       */
      'disable-chat-confirmation-modal.message': '??r du s??ker p?? att du vill inaktivera den h??r chatten?',

      /**
       * Social login redirect pages
       */
      'social-login-redirect.title': 'Now4real Social Login',

      'social-login-redirect.step1.msg': 'Du skickas vidare till $A, var god v??nta...',
      // example: "You are being redirected to Google, please wait..."

      'social-login-redirect.step2.msg': 'Du skickas vidare, var god v??nta...',

      'social-login-redirect.error': 'Hopsan! N??got blev fel'
   },

   /****************************************************************************************
    * FRENCH (Standard)
    ****************************************************************************************/
   'fr': {
      'genericError': 'Oups! Quelque chose a mal fonctionn??',

      'connection-status.offline': 'Vous ??tes hors ligne',

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
      'timeUnit.years': 'ann??es',
      'timeUnit.forever': 'pour toujours',

      /**
       * Commons
       */
      'commons.signedWith.google': 'Connect?? avec Google',
      'commons.signedWith.facebook': 'Connect?? avec Facebook',
      'commons.signedWith.twitter': 'Connect?? avech Twitter',
      'commons.signedWith.linkedin': 'Connect?? avec LinkedIn',
      'commons.signedWith.email': 'Connect?? avec email',
      'commons.signedWith.jwt': 'Connect?? sur ce site',

      'commons.close': 'Fermer', // close button

      /**
       * Tooltips and balloons on closed widget
       */
      'monitor.pageViewersTitle': 'Personnes consultant cette page',
      'monitor.siteViewersTitle': 'Personnes consultant ce site',
      'monitor.chatBalloon': 'DISCUTER', // keep upper case, if applicable
      'monitor.presenceBalloon': 'Personnes pr??sentes actuellement',

      /**
       * Menu
       */
      'status-header.options': 'Options',
      'status-header.flushChat': 'Annuler cette discussion',
      'status-header.disableChat': 'D??sactiver cette discussion',
      'status-header.enableChat': 'Activer cette discussion',
      'status-header.help': 'Aide',
      'status-header.issue': 'Signaler un Probl??me',
      'status-header.terms': 'Conditions d\'Utilisation',
      'status-header.privacy': 'Politique de Confidentialit??',
      'status-header.signout': 'D??connexion',
      'status-header.signin': 'Connexion',

      'status-header.notRememberedLogin': 'Non m??moris??',
      // means that the login status is temporary and will not be remembered next time

      /**
       * Tab labels and tooltips
       */
      'tab.chatTabLabel': 'DISCUTER', // max 8 characters; keep upper case, if applicable
      'tab.chatTitlePage': 'Discuter avec d\'autres visiteurs de cette page en temps r??el',
      'tab.chatTitleSite': 'Discuter avec d\'autres visiteurs de ce site en temps r??el',

      'tab.rankingTabLabel': 'PAGES', // max 8 characters; keep upper case, if applicable
      'tab.rankingTitle': 'Pages consult??es actuellement',

      'tab.heatmapTabLabel': 'MAP', // max 8 characters; keep upper case, if applicable
      'tab.heatmapTitle': 'D\'o?? viennent les gens',

      /**
       * Heatmap
       */
      'heatmap.pageSwitchLabel': 'PAGE', // max 12 characters; keep upper case, if applicable
      'heatmap.siteSwitchLabel': 'SITE', // max 12 characters; keep upper case, if applicable
      'heatmap.empty': 'Aucune donn??e',

      /**
       * Ranking
       */
      'ranking.foregroundTitle': 'Les personnes sur ce sitee',
      'ranking.activeTitle': 'Les personnes discutant sur ce site',
      'ranking.foregroundSwitchLabel': 'VISITEURS', // max 12 characters; keep upper case, if applicable
      'ranking.activeSwitchLabel': 'DISCUTEURS', // max 12 characters; keep upper case, if applicable
      'ranking.empty': 'Aucune donn??e',
      'ranking.currentPage': 'Page en cours',

      'ranking.note': 'Afficher le top dix des pages',
      // note added to the end to the ranking list to explain that only the top ten pages are shown

      /**
       * Chat
       */
      'chat.welcomeFirstMessagePage': 'Discuter avec d\'autres visiteurs de cette page en temps r??el',
      'chat.welcomeFirstMessageSite': 'Discuter avec d\'autres visiteurs de ce site en temps r??el',

      'chat.welcomeSecondMessage': 'N\'oubliez pas que vos messages sont publics et disparaissent apr??s $N $A',
      'chat.welcomeSecondMessageJWT': 'N\'oubliez pas que vos messages peuvent ??tre publics et dispara??tre apr??s $N $A',
      // $N is a number and $A in a time unit taken from timeUnit.
      // example: "Please remember that your messages are public and disappear after 2 hours"

      'chat.messageDeleted.byYou': 'Vous avez supprim?? ce message',
      'chat.messageDeleted.byAuthor': 'Message supprim?? par l\'auteur',
      'chat.messageDeleted.byModerator': 'Message supprim?? par un mod??rateur',
      'chat.messageDeleted.byAdmin': 'Message supprim?? par l\'administrateur',
      'chat.messageDeleted.byNow4real': 'Message supprim?? par l\'administrateur',
      'chat.messageDeleted.unknown': 'Message supprim??',

      'chat.placeholder': 'Saisir un message',
      'chat.postBtn': 'Publier', // means "publish this message"

      'chat.tooFrequentError': 'Vous ??tes un peu trop rapide...\nVeuillez ne pas inonder la discussion',
      // \n means to break the line; \' distinguishes the apostrophe from the final apex

      'chat.blockedError': 'D??sol??... Ce message semble inappropri??',
      'chat.abortedError': 'Connexion annul??e ou cookies d??sactiv??s sur ce navigateur',
      'chat.mutedError': 'Oups! Il semble que vous ayez ??t?? mis en sourdine',
      'chat.notPersistentError': 'L\'authentification ne sera pas m??moris??e en raison de vos param??tres de confidentialit?? restreints. Veuillez activer les cookies pour Now4real dans votre navigateur pour ??viter que cela ne se produise.',
      'chat.disabledError': 'Cette discussion a ??t?? d??sactiv??e',

      'chat.disabledByAdmin': 'Cette discussion a ??t?? d??sactiv??e par l\'administrateur',
      'chat.disabledByModerator': 'Cette discussion a ??t?? d??sactiv??e par un mod??rateur',
      'chat.signinRequired': '<a>Connexion</a> ?? la discussion',
      // keep <a> and </a> unchanged and surrounding the translation of "Sign in"

      'chat.viewOnly': 'Mode affichage uniquement',

      // below are the actions on messages that appear in a contextual menu
      'chat.replyBtn': 'R??pondre', // means "reply to this message"
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
      'emoji-picker.activity': 'Activit??',
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
      'typing.a': '1 personne est en train d\'??crire...',

      'typing.b': '$N personnes sont en train d\'??crire...',
      // example: "5 people are typing..."

      'typing.c': '$A est en train d\'??crire...',
      // example: "Alex is typing..."

      'typing.d': '$A et $B sont en train d\'??crire...',
      // example: "Alex and Ben are typing..."

      'typing.e': '$A, $B, et $C sont en train d\'??crire...',
      // example: "Alex, Ben, and Cindy are typing..."

      'typing.f': '$A et 1 autre sont en train d\'??crire...',
      // example: "Alex and 1 other are typing..."

      'typing.g': '$A et $N autres sont en train d\'??crire...',
      // example: "Alex and 3 others are typing..."

      'typing.h': '$A, $B, et 1 autre sont en train d\'??crire...',
      // example: "Alex, Ben, and 1 other are typing..."

      'typing.i': '$A, $B, et $N autres sont en train d\'??crire...',
      // example: "Alex, Ben, and 3 others are typing..."

      'typing.j': '$A, $B, $C, et 1 autre sont en train d\'??crire...',
      // example: "Alex, Ben, Cindy, and 1 other are typing..."

      'typing.k': '$A, $B, $C, et $N autres sont en train d\'??crire...',
      // example: "Alex, Ben, Cindy, and 3 others are typing..."

      /**
       * Social login dialog
       */
      'social-modal.title': 'Connexion',
      'social-modal.header': 'Commencez ?? discuter sur n\'importe quel site web qui utilise Now4real',

      // buttons:
      'social-modal.google': 'Connexion avec Google',
      'social-modal.facebook': 'Connexion avec Facebook',
      'social-modal.twitter': 'Connexion avec Twitter',
      'social-modal.linkedin': 'Connexion avec LinkedIn',
      'social-modal.email': 'Connexion avec email',

      'social-modal.footer': 'Cliquez sur "Connexion" ci-dessus pour accepter les <a1>Conditions d\'Utilisation</a1> et <a2>Politique de Confidentialit??</a2> de Now4real',
      // keep <a1> and </a1> unchanged and surrounding the translation of "Terms of Service"
      // keep <a2> and </a2> unchanged and surrounding the translation of "Privacy Policy"

      /**
       * JWT login dialog
       */
      'jwt-modal.title': 'Consentir',

      'jwt-modal.header': 'Pour commencer ?? discuter, vous devez acceptez les <a1>Conditions d\'Utilisation</a1> et la <a2>Politique de Confidentialit??</a2> de Now4real (le service de discussion)',
      // keep <a1> and </a1> unchanged and surrounding the translation of "Terms of Service"
      // keep <a2> and </a2> unchanged and surrounding the translation of "Privacy Policy"

      'jwt-modal.button': 'Accepter',

      /**
       * Mute dialog
       */
      'mute-modal.title': 'Mettre en Sourdine',

      'mute-modal.header': 'L\'utilisateur $U a ??t?? mis en sourdine jusqu\'?? $E',
      // example: "User Ben has been muted until Wed, 14 Jun 2022 07:12:00 GMT"

      'mute-modal.headerForever': 'L\'utilisateur $U a ??t?? mis en sourdine',

      'mute-modal.body.set': 'Mettre l\'utilisateur $U en sourdine pendant:',
      // example: "Mute user Ben for:" followed by input fields with "3 days"

      'mute-modal.body.update': 'Modifier la p??riode de sourdine:',
      // example: "Update mute period:" followed by input fields with "5 days"

      'mute-modal.body.deleteInfo': 'Vous pouvez d??sactiver le mode sourdine de l\'utilisateur quand vous le souhaitez.',

      'mute-modal.body.deleteAlert': 'Vous d??sactivez le mode sourdine pour l\'utilisateur',

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
      'flush-chat-confirmation-modal.message': '??tes-vous s??r de vouloir effacer cette discussion?',

      /**
       * Disable chat confirm dialog
       */
      'disable-chat-confirmation-modal.message': '??tes-vous s??r de vouloir d??sactiver cette discussion?',

      /**
       * Social login redirect pages
       */
      'social-login-redirect.title': 'Connexion Sociale de Now4real',

      'social-login-redirect.step1.msg': 'Vous ??tes redirig?? vers $A, veuillez patienter...',
      // example: "You are being redirected to Google, please wait..."

      'social-login-redirect.step2.msg': 'Vous ??tes redirig??, veuillez patienter...',

      'social-login-redirect.error': 'Oups! Quelque chose a mal fonctionn??'
   },
   
   /****************************************************************************************
   * BULGARIAN (Standard)
   ****************************************************************************************/
   'bg': {
       'genericError': '??????! ???????? ???? ??????????.',
 
       'connection-status.offline': '???????? ???????????? ?? ????????????????',
 
       /**
        * Time representation
        */
       'hourFormat': 24,
       // 12 (e.g. "3:52 PM") or 24 (e.g. "15:52")
 
       'timeUnit.minutes': '????????????',
       'timeUnit.hours': '????????',
       'timeUnit.days': '??????',
       'timeUnit.weeks': '??????????????',
       'timeUnit.months': '????????????',
       'timeUnit.years': '????????????',
       'timeUnit.forever': '????????????????',
 
       /**
        * Commons
        */
       'commons.signedWith.google': '???????????????? ???? ???????? Google',
       'commons.signedWith.facebook': '???????????????? ???? ???????? Facebook',
       'commons.signedWith.twitter': '???????????????? ???? ???????? Twitter',
       'commons.signedWith.linkedin': '???????????????? ???? ???????? LinkedIn',
       'commons.signedWith.email': '???????????????? ???? ???????? email',
       'commons.signedWith.jwt': '???????????????????? ?? ???????? ????????',
 
       'commons.close': '??????????????????', // close button
 
       /**
        * Tooltips and balloons on closed widget
        */
       'monitor.pageViewersTitle': '????????, ?????????? ???????????????????? ???????? ????????????????',
       'monitor.siteViewersTitle': '????????, ?????????? ???????????????????? ???????? ????????',
       'monitor.chatBalloon': '??????', // keep upper case, if applicable
       'monitor.presenceBalloon': '????????, ?????????????? ?? ??????????????',
 
       /**
        * Menu
        */
       'status-header.options': '??????????',
       'status-header.flushChat': '???????????????? ???? ???????? ??????',
       'status-header.disableChat': '???????????????????????? ???? ???????? ??????',
       'status-header.enableChat': '???????????????????? ???? ???????? ??????',
       'status-header.help': '??????????',
       'status-header.issue': '???????????????????? ???? ??????????????',
       'status-header.terms': '?????????????? ???? ????????????????',
       'status-header.privacy': '???????????????? ???? ??????????????????????????',
       'status-header.signout': '??????????????????',
       'status-header.signin': '????????????????',
 
       'status-header.notRememberedLogin': '???? ???? ????????????????????',
       // means that the login status is temporary and will not be remembered next time
 
       /**
        * Tab labels and tooltips
        */
       'tab.chatTabLabel': '??????', // max 8 characters; keep upper case, if applicable
       'tab.chatTitlePage': '???????????? ???? ?? ?????????? ???????????????????? ???? ???????? ???????????????? ?? ???????????? ??????????',
       'tab.chatTitleSite': '???????????? ???? ?? ?????????? ???????????????????? ???? ???????? ???????? ?? ???????????? ??????????',
 
       'tab.rankingTabLabel': '????????????????', // max 8 characters; keep upper case, if applicable
       'tab.rankingTitle': '????????????????, ?????????? ?????????????? ???????????????????? ???????????????????? ?? ??????????????',
 
       'tab.heatmapTabLabel': '??????????', // max 8 characters; keep upper case, if applicable
       'tab.heatmapTitle': '???????????? ???? ?????????????? ????????????????????',
 
       /**
        * Heatmap
        */
       'heatmap.pageSwitchLabel': '????????????????', // max 12 characters; keep upper case, if applicable
       'heatmap.siteSwitchLabel': '????????', // max 12 characters; keep upper case, if applicable
       'heatmap.empty': '???????? ??????????',
 
       /**
        * Ranking
        */
       'ranking.foregroundTitle': '???????????????????? ?? ???????? ????????',
       'ranking.activeTitle': '???????????????????? ???? ??????????, ?????????? ???? ??????????',
       'ranking.foregroundSwitchLabel': '????????????', // max 12 characters; keep upper case, if applicable
       'ranking.activeSwitchLabel': '????????????', // max 12 characters; keep upper case, if applicable
       'ranking.empty': '???????? ????????????????????',
       'ranking.currentPage': '???????????????? ????????????????',
 
       'ranking.note': '10-???? ??????-?????????????????? ????????????????',
       // note added to the end to the ranking list to explain that only the top ten pages are shown
 
       /**
        * Chat
        */
       'chat.welcomeFirstMessagePage': '?????????????????? ?? ?????????? ???????????????????? ???? ???????? ???????????????? ?? ???????????? ??????????',
       'chat.welcomeFirstMessageSite': '?????????????????? ?? ?????????? ???????????????????? ???? ???????? ???????? ?? ???????????? ??????????',
 
       'chat.welcomeSecondMessage': '??????????????, ???? ???????????? ?????????????????? ???? ???????????? ???? ???????????? ?? ???????????????? ???????? $N $A',
       'chat.welcomeSecondMessageJWT': '??????????????, ???? ???????????? ?????????????????? ???? ???????????? ???? ???????????? ?? ???????????????? ???????? $N $A',
       // $N is a number and $A in a time unit taken from timeUnit.
       // example: "Please remember that your messages are public and disappear after 2 hours"
 
       'chat.messageDeleted.byYou': '???????????????? ???????? ??????????????????',
       'chat.messageDeleted.byAuthor': '?????????????????????? ?? ?????????????? ???? ????????????',
       'chat.messageDeleted.byModerator': '?????????????????????? ?? ?????????????? ???? ??????????????????',
       'chat.messageDeleted.byAdmin': '?????????????????????? ?? ?????????????? ???? ??????????????????????????',
       'chat.messageDeleted.byNow4real': '?????????????????????? ?? ?????????????? ???? ???????????????????????????? ???? Now4real',
       'chat.messageDeleted.unknown': '?????????????????????? ?? ??????????????',
 
       'chat.placeholder': '???????????????????????? ??????????????????',
       'chat.postBtn': 'Post', // means "publish this message"
 
       'chat.tooFrequentError': '???????????? ?????????????????? ??????????...\n?????????????? ???? ???????????????????? ????????!',
       // \n means to break the line; \' distinguishes the apostrophe from the final apex
 
       'chat.blockedError': '????????????????????... ???????? ?????????????????? ???????????????? ??????????????????????',
       'chat.abortedError': '???????????????????? ?? ???????????????? ?????? ?????????????????????? ???? ???????????????? ???? ??????????????????',
       'chat.mutedError': '??????! ???????????????? ?????? ??????????????????',
       'chat.notPersistentError': '???????????????????????????? ???????? ???? ???? ?????????????? ???????????? ???????????????????????? ?????????????????? ???? ??????????????????????????. ?????????????????? ?????????????????????? ???? Now4real ?????? ?????????? ??????????????, ???? ???? ???????????? ???????? ??????????????.',
       'chat.disabledError': '?????????? ?? ??????????????????????',
 
       'chat.disabledByAdmin': '?????????? ?? ?????????????????????? ???? ??????????????????????????',
       'chat.disabledByModerator': '?????????? ?? ?????????????????????? ???? ??????????????????',
       'chat.signinRequired': '<a>?????????????? ????</a>, ???? ???? ?????????????????? ?? ??????????????????',
       // keep <a> and </a> unchanged and surrounding the translation of "Sign in"
 
       'chat.viewOnly': '?????????? ???????? ???? ????????????',
 
       // below are the actions on messages that appear in a contextual menu
       'chat.replyBtn': '??????????????', // means "reply to this message"
       'chat.deleteBtn': '??????????????????', // means "delete this message"
       'chat.muteBtn': '??????????????????????', // means "mute this user"
 
       /**
        * Presence
        */
       'presence.all.a': '1 ?????????? ?? ???? ???????? ???????????????? (???? ???????? $N ???? ?????????? ????????)',
       // example: "1 person on this page (of 23 on this site)"
 
       'presence.all.b': '$N ???????????? ???? ???? ???????? ???????????????? (???? ???????? $M ???? ?????????? ????????)',
       // example: "5 people on this page (of 23 on this site)"
 
       'presence.page.a': '1 ?????????? ?? ???? ???????? ????????????????',
       'presence.page.b': '$N ???????????? ?? ???? ???????? ????????????????',
 
       'presence.site.a': '1 ?????????? ?? ???? ???????? ????????',
       'presence.site.b': '$N ???????????? ???? ???? ???????? ????????',
 
       /**
        * Emoji-picker labels
        */
       'emoji-picker.people': '????????',
       'emoji-picker.nature': '??????????????',
       'emoji-picker.food': '??????????',
       'emoji-picker.activity': '????????????????',
       'emoji-picker.travel': '??????????',
       'emoji-picker.objects': '????????????????',
       'emoji-picker.symbols': '??????????????',
       'emoji-picker.flags': '??????????????',
 
       /**
        * GIF-picker labels
        */
       'gif-picker.search': '?????????????? ???? GIF',
 
       /**
        * Typing
        */
       'typing.a': '1 ?????????? ????????...',
 
       'typing.b': '$N ???????????? ??????????...',
       // example: "5 people are typing..."
 
       'typing.c': '$A ????????...',
       // example: "Alex is typing..."
 
       'typing.d': '$A ?? $B ??????????...',
       // example: "Alex and Ben are typing..."
 
       'typing.e': '$A, $B ?? $C ??????????...',
       // example: "Alex, Ben, and Cindy are typing..."
 
       'typing.f': '$A ?? ?????? ???????? ?????????? ??????????...',
       // example: "Alex and 1 other are typing..."
 
       'typing.g': '$A ?? ?????? $N ???????????? ??????????...',
       // example: "Alex and 3 others are typing..."
 
       'typing.h': '$A, $B ?? ?????? ???????? ?????????? ??????????...',
       // example: "Alex, Ben, and 1 other are typing..."
 
       'typing.i': '$A, $B ?? ?????? $N ???????????? ??????????...',
       // example: "Alex, Ben, and 3 others are typing..."
 
       'typing.j': '$A, $B, $C ?? ?????? ???????? ?????????? ??????????...',
       // example: "Alex, Ben, Cindy, and 1 other are typing..."
 
       'typing.k': '$A, $B, $C ?? ?????? $N ???????????? ??????????...',
       // example: "Alex, Ben, Cindy, and 3 others are typing..."
 
       /**
        * Social login dialog
        */
       'social-modal.title': '????????????????',
       'social-modal.header': '?????????????????????????? ?????? ?????????? ????????, ?????????? ???????????????? Now4real',
 
       // buttons:
       'social-modal.google': '???????????????? ???????? Google',
       'social-modal.facebook': '???????????????? ???????? Facebook',
       'social-modal.twitter': '???????????????? ???????? Twitter',
       'social-modal.linkedin': '???????????????? ???????? LinkedIn',
       'social-modal.email': '???????????????? ???????? email',
 
       'social-modal.footer': '???????????????? ?????????? ?????????????????????? ????????????, ???? ???? ???????????????? <a1>?????????????????? ???? ????????????????</a1> ?? <a2>???????????????????? ???? ??????????????????????????</a2> ???? Now4real',
       // keep <a1> and </a1> unchanged and surrounding the translation of "Terms of Service"
       // keep <a2> and </a2> unchanged and surrounding the translation of "Privacy Policy"
 
       /**
        * JWT login dialog
        */
       'jwt-modal.title': '????????????????',
 
       'jwt-modal.header': '???? ???? ?????????????????? ???? ???? ???????????? ?? ??????????????, ?? ???????????????????? ???? ???????????????? <a1>?????????????????? ???? ????????????????</a1> ?? <a2>???????????????????? ???? ??????????????????????????</a2> ???? Now4real (?????? ????????????????)',
       // keep <a1> and </a1> unchanged and surrounding the translation of "Terms of Service"
       // keep <a2> and </a2> unchanged and surrounding the translation of "Privacy Policy"
 
       'jwt-modal.button': '??????????????',
 
       /**
        * Mute dialog
        */
       'mute-modal.title': '?????????????????????? ???? ??????????????????????',
 
       'mute-modal.header': '???????????????????????? $U ?? ???????????????? ???? $E',
       // example: "User Ben has been muted until Wed, 14 Jun 2022 07:12:00 GMT"
 
       'mute-modal.headerForever': '???????????????????????? $U ?? ????????????????',
 
       'mute-modal.body.set': '?????????????????? ?????????????????????? $U ????:',
       // example: "Mute user Ben for:" followed by input fields with "3 days"
 
       'mute-modal.body.update': '?????????????????? ?????????????? ???? ??????????????????????:',
       // example: "Update mute period:" followed by input fields with "5 days"
 
       'mute-modal.body.deleteInfo': '???????????? ???? ???????????????????? ?????????????????????????? ???? ?????????????????????? ???????????? ??????????????????.',
 
       'mute-modal.body.deleteAlert': '???? ???????????????????? ?????????????????????????? ???? ??????????????????????',
 
       'mute-modal.button': '????????????????????????',
 
       /**
        * Confirm dialog
        */
       'confirmation-modal.title': '????????????????????????',
       'confirmation-modal.ok': '????',
       'confirmation-modal.cancel': '????',
 
       /**
        * Flush chat confirm dialog
        */
       'flush-chat-confirmation-modal.message': '?????????????? ???? ??????, ???? ???????????? ???? ???????????????? ???????????????????????? ???? ???????? ???????',
 
       /**
        * Disable chat confirm dialog
        */
       'disable-chat-confirmation-modal.message': '?????????????? ???? ??????, ???? ???????????? ???? ???????????????????????? ???????? ???????',
 
       /**
        * Social login redirect pages
        */
       'social-login-redirect.title': 'Now4real Social Login',
 
       'social-login-redirect.step1.msg': '???????????????????????? ???? ?????? $A, ???????? ??????????????????...',
       // example: "You are being redirected to Google, please wait..."
 
       'social-login-redirect.step2.msg': '???????????????????????? ????, ???????? ??????????????????...',
 
       'social-login-redirect.error': '??????! ???????? ???? ??????????????.'
    }
}
