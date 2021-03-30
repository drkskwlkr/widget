export default {

    /***************
     * ENGLISH (we use American English for all English browsers)
     ***************/
    'en': {
        'genericError': 'Oops! Something went wrong',

        /**
         * commons
         */
        // example: "Signed in via Facebook"
        'commons.signedWith': 'Signed in via',
        'commons.JWTProvider': 'site',
        'commons.close': 'Close',

        /**
         * time representation
         */
        // 12 (e.g. "3:52 PM") or 24 (e.g. "15:52")
        'hour-format': 12,

        /**
         * monitor labels
         */
        // tooltips on the widget bubble
        'monitor.pageViewersTitle': 'People viewing this page',
        'monitor.siteViewersTitle': 'People viewing this site',

        /**
         * presence labels
         */
        // the elements below are composed to create a phrase
        // example: "5 people on this page (of 23 on this site)"

        // singular and plural forms for "people" separated by pipe and spaces
        'presence.people': 'person | people',
        'presence.pageDescription': 'on this page',
        'presence.siteDescription': 'on this site',
        'presence.totalDescriptionPrefix': 'of',
        'presence.totalDescriptionSuffix': 'on this site',

        /**
         * status-header labels
         */
        'status-header.options': 'Options',
        'status-header.help': 'Help',
        'status-header.issue': 'Report an Issue',
        'status-header.terms': 'Terms of Service',
        'status-header.privacy': 'Privacy Policy',
        'status-header.signout': 'Sign out',
        // means that the login status is temporary and will not be remembered next time
        'status-header.notRememberedLogin': 'Not remembered',

        /**
         * tab labels
         */
        'tab.chatTitlePage': 'Chat here with other people who are on this page now',
        'tab.chatTitleSite': 'Chat here with other people who are on this site now',
        // tooltip on ranking tab title
        'tab.rankingTitle': 'Pages people are viewing now',
        // tooltip on heatmap tab title
        'tab.heatmapTitle': 'Where people come from',
        // max 8 characters
        'tab.chatTabLabel': 'CHAT',
        // max 8 characters
        'tab.rankingTabLabel': 'PAGES',
        // max 8 characters
        'tab.heatmapTabLabel': 'MAP',

        /**
         * heatmap labels
         */
        // max 12 characters
        'heatmap.pageSwitchLabel': 'PAGE',
        // max 12 characters
        'heatmap.siteSwitchLabel': 'SITE',
        'heatmap.empty': 'No data',

        /**
         * ranking labels
         */
        'ranking.foregroundTitle': 'People on this site',
        'ranking.activeTitle': 'People chatting on this site',
        // max 12 characters
        'ranking.foregroundSwitchLabel': 'VIEWERS',
        // max 12 characters
        'ranking.activeSwitchLabel': 'CHATTERS',
        'ranking.empty': 'No data',
        'ranking.currentPage': 'Current page',
        // note added to the end to the ranking list to explain that only the top ten pages are shown
        'ranking.note': 'Showing top ten pages',

        /**
         * chat labels
         */
        'chat.welcomeFirstMessagePage': 'Chat here with other people who are on this page now',
        'chat.welcomeFirstMessageSite': 'Chat here with other people who are on this site now',
        'chat.welcomeSecondMessage': 'Please remember that your messages are public',
        'chat.welcomeSecondMessageJWT': 'Please remember that your messages may be public',
        'chat.placeholder': 'Write a message...',
        'chat.postBtn': 'Post',
        'chat.tooFrequentError': 'You are a bit too fast...\nPlease don\'t flood the chat',
        'chat.blockedError': 'Sorry... This message seems inappropriate',
        'chat.mutedError': 'Oops! It looks like you have been muted',
        'chat.abortedError': 'Sign-in canceled or cookies disabled on this browser',
        'chat.notPersistentError': 'The authentication will not be remembered due to your restricted privacy settings. Please enable cookies for Now4real in your browser to prevent this from happening.',
        'chat.signinRequired': '<a href="@href" target="_parent">Sign in</a> to chat',
        'chat.viewOnly': 'View-only mode',
        'chat.replyBtn': 'Reply',
        'chat.deleteBtn': 'Delete',

        /**
         * emoji-picker labels
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
         * typing labels
         */
        // the elements below are composed to create a phrase
        // example: "user8 is writing..."
        // example: "user4 and 1 other are writing..."
        // example: "user3, user5 and 2 others are writing..."
        'typing.and': 'and',
        'typing.others': 'other | others',
        'typing.users': 'user | users',
        'typing.writing': 'is writing | are writing',

        /**
         * social-modal labels
         */
        'social-modal.title': 'Sign in',
        'social-modal.header': 'Start chatting on any website that uses Now4real',
        // example: "Sign in with Google"
        'social-modal.socialBtnPrefix': 'Sign in with',

        // the elements below are composed to create a phrase this way:
        // footer1+" "+terms+" "+footer2+" "+privacy+" "+footer3
        // example: "Click “Sign in” above to accept the Terms of Service and the Privacy Policy of Now4real"
        'social-modal.footer1': 'Click “Sign in” above to accept the',
        'social-modal.terms': 'Terms of Service',
        'social-modal.footer2': 'and the',
        'social-modal.privacy': 'Privacy Policy',
        'social-modal.footer3': 'of Now4real',

        /**
         * jwt-modal labels
         */
        'jwt-modal.title': 'Consent',

        // the elements below are composed to create a phrase this way:
        // header1+" "+terms+" "+header2+" "+privacy+" "+header3
        // example: "To start chatting you should accept the Terms of Service and the Privacy Policy of Now4real"
        'jwt-modal.header1': 'To start chatting you should accept the',
        'jwt-modal.terms': 'Terms of Service',
        'jwt-modal.header2': 'and the',
        'jwt-modal.privacy': 'Privacy Policy',
        'jwt-modal.header3': 'of Now4real (the chat service)',

        'jwt-modal.button': 'Accept',

        'generic.offline': 'You are offline'
    },

    /***************
     * ITALIAN
     ***************/
    'it': {
        'genericError': 'Ops! Qualcosa è andato storto',

        /**
         * commons
         */
        // example: "Signed in via Facebook"
        'commons.signedWith': 'Connesso via',
        'commons.JWTProvider': 'sito',
        'commons.close': 'Chiudi',

        /**
         * time representation
         */
        // 12 (e.g. "3:52 PM") or 24 (e.g. "15:52")
        'hour-format': 24,

        /**
         * monitor labels
         */
        // tooltips on the widget bubble
        'monitor.pageViewersTitle': 'Persone che stanno vedendo questa pagina',
        'monitor.siteViewersTitle': 'Persone che stanno vedendo questo sito',

        /**
         * presence labels
         */
        // the elements below are composed to create a phrase
        // example: "5 people on this page (of 23 on this site)"

        // singular and plural forms for "people" separated by pipe and spaces
        'presence.people': 'persona | persone',
        'presence.pageDescription': 'su questa pagina',
        'presence.siteDescription': 'su questo sito',
        'presence.totalDescriptionPrefix': 'di',
        'presence.totalDescriptionSuffix': 'sul sito',

        /**
         * status-header labels
         */
        'status-header.options': 'Opzioni',
        'status-header.help': 'Aiuto',
        'status-header.issue': 'Segnala un problema',
        'status-header.terms': 'Condizioni di servizio',
        'status-header.privacy': 'Privacy policy',
        'status-header.signout': 'Disconnetti',
        // means that the login status is temporary and will not be remembered next time
        'status-header.notRememberedLogin': 'Provvisoriamente',

        /**
         * tab labels
         */
        'tab.chatTitlePage': 'Chatta con le altre persone presenti su questa pagina',
        'tab.chatTitleSite': 'Chatta con le altre persone presenti su questo sito',
        // tooltip on ranking tab title
        'tab.rankingTitle': 'Dove si trovano le persone su questo sito',
        // tooltip on heatmap tab title
        'tab.heatmapTitle': 'Dove si trovano le persone nel mondo reale',
        // max 8 characters
        'tab.chatTabLabel': 'CHAT',
        // max 8 characters
        'tab.rankingTabLabel': 'PAGINE',
        // max 8 characters
        'tab.heatmapTabLabel': 'MAPPA',

        /**
         * heatmap labels
         */
        // max 12 characters
        'heatmap.pageSwitchLabel': 'PAGINA',
        // max 12 characters
        'heatmap.siteSwitchLabel': 'SITO',
        'heatmap.empty': 'Nessun dato',

        /**
         * ranking labels
         */
        'ranking.foregroundTitle': 'Persone sul sito',
        'ranking.activeTitle': 'Persone in chat sul sito',
        // max 12 characters
        'ranking.foregroundSwitchLabel': 'VISITATORI',
        // max 12 characters
        'ranking.activeSwitchLabel': 'IN CHAT',
        'ranking.empty': 'Nessun dato',
        'ranking.currentPage': 'Pagina corrente',
        // note added to the end to the ranking list to explain that only the top ten pages are shown
        'ranking.note': 'È mostrata la top ten',

        /**
         * chat labels
         */
        'chat.welcomeFirstMessagePage': 'Chatta con le altre persone presenti su questa pagina',
        'chat.welcomeFirstMessageSite': 'Chatta con le altre persone presenti su questo sito',
        'chat.welcomeSecondMessage': 'Ricorda che quello che scrivi in chat è pubblico',
        'chat.welcomeSecondMessageJWT': 'Ricorda che quello che scrivi in chat potrebbe essere pubblico',
        'chat.placeholder': 'Scrivi un messaggio...',
        'chat.postBtn': 'Invia',
        'chat.tooFrequentError': 'Sei un po\' troppo veloce...\nPer favore non inondare la chat',
        'chat.blockedError': 'Ci dispiace... Questo messaggio sembra inappropriato',
        'chat.mutedError': 'Ops! Sembra tu sia stato silenziato',
        'chat.abortedError': 'Accesso annullato o cookie disabilitati su questo browser',
        'chat.notPersistentError': 'L\'autenticazione non sarà ricordata a causa di impostazioni di privacy restrittive. Abilita i cookie per Now4real nel tuo browser per evitare che ciò accada.',
        'chat.signinRequired': '<a href="@href" target="_parent">Accedi</a> per chattare',
        'chat.viewOnly': 'Sola lettura',
        'chat.replyBtn': 'Rispondi',
        'chat.deleteBtn': 'Elimina',

        /**
         * emoji-picker labels
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
         * typing labels
         */
        // the elements below are composed to create a phrase
        // example: "user8 is writing..."
        // example: "user4 and 1 other are writing..."
        // example: "user3, user5 and 2 others are writing..."
        'typing.and': 'e',
        'typing.others': 'altro | altri',
        'typing.users': 'utente | utenti',
        'typing.writing': 'sta scrivendo | stanno scrivendo',

        /**
         * social-modal labels
         */
        'social-modal.title': 'Accedi',
        'social-modal.header': 'Chatta su tutti i siti che usano Now4real',
        // example: "Sign in with Google"
        'social-modal.socialBtnPrefix': 'Accedi con',

        // the elements below are composed to create a phrase this way:
        // footer1+" "+terms+" "+footer2+" "+privacy+" "+footer3
        // example: "Click “Sign in” above to accept the Terms of Service and the Privacy Policy of Now4real"
        'social-modal.footer1': 'Cliccando su “Accedi” qui sopra accetti le',
        'social-modal.terms': 'Condizioni di servizio',
        'social-modal.footer2': 'e la',
        'social-modal.privacy': 'Privacy policy',
        'social-modal.footer3': 'di Now4real',

        /**
         * jwt-modal labels
         */
        'jwt-modal.title': 'Consenso',

        // the elements below are composed to create a phrase this way:
        // header1+" "+terms+" "+header2+" "+privacy+" "+header3
        // example: "To start chatting you should accept the Terms of Service and the Privacy Policy of Now4real"
        'jwt-modal.header1': 'Per iniziare a chattare devi accettare le',
        'jwt-modal.terms': 'Condizioni di servizio',
        'jwt-modal.header2': 'e la',
        'jwt-modal.privacy': 'Privacy policy',
        'jwt-modal.header3': 'di Now4real (il servizio di chat)',

        'jwt-modal.button': 'Accetto',
        
        'generic.offline': 'Sei offline'
    },

    /***************
     * SPANISH (we use Spanish from Spain for all Spanish browsers)
     ***************/
    'es': {
        'genericError': '¡UPS! Algo ha fallado',

        /**
         * commons
         */
        // example: "Signed in via Facebook"
        'commons.signedWith': 'Registrado a través de',
        'commons.JWTProvider': 'sitio',
        'commons.close': 'Cerrar',

        /**
         * time representation
         */
        // 12 (e.g. "3:52 PM") or 24 (e.g. "15:52")
        'hour-format': 24,

        /**
         * monitor labels
         */
        // tooltips on the widget bubble
        'monitor.pageViewersTitle': 'Personas viendo esta página',
        'monitor.siteViewersTitle': 'Personas viendo este sitio',

        /**
         * presence labels
         */
        // the elements below are composed to create a phrase
        // example: "5 people on this page (of 23 on this site)"

        // singular and plural forms for "people" separated by pipe and spaces
        'presence.people': 'persona | personas',
        'presence.pageDescription': 'en esta página',
        'presence.siteDescription': 'en este sitio',
        'presence.totalDescriptionPrefix': 'de',
        'presence.totalDescriptionSuffix': 'en este sitio',

        /**
         * status-header labels
         */
        'status-header.options': 'Opciones',
        'status-header.help': 'Ayuda',
        'status-header.issue': 'Informa de un Problema',
        'status-header.terms': 'Términos del Servicio',
        'status-header.privacy': 'Política de Privacidad',
        'status-header.signout': 'Cerrar Sesión',
        // means that the login status is temporary and will not be remembered next time
        'status-header.notRememberedLogin': 'Sin recordar',

        /**
         * tab labels
         */
        'tab.chatTitlePage': 'Habla aquí con otras personas que están ahora en esta página',
        'tab.chatTitleSite': 'Habla aquí con otras personas que están ahora en este sitio',
        // tooltip on ranking tab title
        'tab.rankingTitle': 'Dónde está la gente ahora en este sitio',
        // tooltip on heatmap tab title
        'tab.heatmapTitle': 'Dónde está la gente en el mundo real',
        // max 8 characters
        'tab.chatTabLabel': 'CHAT',
        // max 8 characters
        'tab.rankingTabLabel': 'PÁGINAS',
        // max 8 characters
        'tab.heatmapTabLabel': 'MAPA',

        /**
         * heatmap labels
         */
        // max 12 characters
        'heatmap.pageSwitchLabel': 'PÁGINA',
        // max 12 characters
        'heatmap.siteSwitchLabel': 'SITIO',
        'heatmap.empty': 'Sin datos',

        /**
         * ranking labels
         */
        'ranking.foregroundTitle': 'Personas en este sitio',
        'ranking.activeTitle': 'Personas hablando en este sitio',
        // max 12 characters
        'ranking.foregroundSwitchLabel': 'VISITANTES',
        // max 12 characters
        'ranking.activeSwitchLabel': 'EN EL CHAT',
        'ranking.empty': 'Sin datos',
        'ranking.currentPage': 'Página actual',
        // note added to the end to the ranking list to explain that only the top ten pages are shown
        'ranking.note': 'Mostrando las diez primeras páginas',

        /**
         * chat labels
         */
        'chat.welcomeFirstMessagePage': 'Habla aquí con otras personas que están ahora en esta página',
        'chat.welcomeFirstMessageSite': 'Habla aquí con otras personas que están ahora en este sitio',
        'chat.welcomeSecondMessage': 'Recuerda que lo que escribes en el chat es público',
        'chat.welcomeSecondMessageJWT': 'Recuerda que lo que escribes en el chat puede ser público',
        'chat.placeholder': 'Escribe un mensaje...',
        'chat.postBtn': 'Publicar',
        'chat.tooFrequentError': 'Vas un poco rápido...\nPor favor, no llenes el chat',
        'chat.blockedError': 'Lo siento... Este mensaje parece inapropiado',
        'chat.mutedError': '¡UPS! Parece que te han silenciado',
        'chat.abortedError': 'Inicio de sesión cancelado o cookies desactivadas en este navegador',
        'chat.notPersistentError': 'La autenticación no será recordada debido a tu configuración de privacidad restringida. Por favor, habilita las cookies para Now4real en tu navegador para evitar que esto suceda.',
        'chat.signinRequired': '<a href="@href" target="_parent">Inicia sesión</a> para hablar',
        'chat.viewOnly': 'Solo lectura',
        'chat.replyBtn': 'Responder',
        'chat.deleteBtn': 'Eliminar',

        /**
         * emoji-picker labels
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
         * typing labels
         */
        // the elements below are composed to create a phrase
        // example: "user8 is writing..."
        // example: "user4 and 1 other are writing..."
        // example: "user3, user5 and 2 others are writing..."
        'typing.and': 'y',
        'typing.others': 'otro | otros',
        'typing.users': 'usuario | usuarios',
        'typing.writing': 'está escribiendo | están escribiendo',

        /**
         * social-modal labels
         */
        'social-modal.title': 'Iniciar sesión',
        'social-modal.header': 'Empieza a hablar en cualquier página web que use Now4real',
        // example: "Sign in with Google"
        'social-modal.socialBtnPrefix': 'Inicia sesión con',

        // the elements below are composed to create a phrase this way:
        // footer1+" "+terms+" "+footer2+" "+privacy+" "+footer3
        // example: "Click “Sign in” above to accept the Terms of Service and the Privacy Policy of Now4real"
        'social-modal.footer1': 'Haz click en “Iniciar sesión” arriba para aceptar los',
        'social-modal.terms': 'Términos del Servicio',
        'social-modal.footer2': 'y la',
        'social-modal.privacy': 'Política de Privacidad',
        'social-modal.footer3': 'de Now4real',

        /**
         * jwt-modal labels
         */
        'jwt-modal.title': 'Consentimiento',

        // the elements below are composed to create a phrase this way:
        // header1+" "+terms+" "+header2+" "+privacy+" "+header3
        // example: "To start chatting you should accept the Terms of Service and the Privacy Policy of Now4real"
        'jwt-modal.header1': 'Para empezar a hablar debes aceptar los',
        'jwt-modal.terms': 'Términos del Servicio',
        'jwt-modal.header2': 'y la',
        'jwt-modal.privacy': 'Política de Privacidad',
        'jwt-modal.header3': 'de Now4real (el servicio de chat)',

        'jwt-modal.button': 'Acepto',
        
        'generic.offline': 'Estás desconectado/a'
    },

    /***************
     * PORTUGUESE (we use Brazilian Portuguese for all Portuguese browsers)
     ***************/
    'pt': {
        'genericError': 'Ups! Algo deu errado',

        /**
         * commons
         */
        // example: "Signed in via Facebook"
        'commons.signedWith': 'Conectado via',
        'commons.JWTProvider': 'site',
        'commons.close': 'Fechar',

        /**
         * time representation
         */
        // 12 (e.g. "3:52 PM") or 24 (e.g. "15:52")
        'hour-format': 24,

        /**
         * monitor labels
         */
        // tooltips on the widget bubble
        'monitor.pageViewersTitle': 'Pessoas visualizando esta página',
        'monitor.siteViewersTitle': 'Pessoas visualizando este site',

        /**
         * presence labels
         */
        // the elements below are composed to create a phrase; example:
        // "5 people on this page (of 23 on this site)"

        // singular and plural forms for "people" separated by pipe and spaces
        'presence.people': 'pessoa | pessoas',
        'presence.pageDescription': 'nesta página',
        'presence.siteDescription': 'neste site',
        'presence.totalDescriptionPrefix': 'de',
        'presence.totalDescriptionSuffix': 'neste site',

        /**
         * status-header labels
         */
        'status-header.options': 'Opções',
        'status-header.help': 'Ajuda',
        'status-header.issue': 'Reportar um problema',
        'status-header.terms': 'Termos de Serviço',
        'status-header.privacy': 'Política de Privacidade',
        'status-header.signout': 'Sair',
        // means that the login status is temporary and will not be remembered next time
        'status-header.notRememberedLogin': 'Não será lembrado',

        /**
         * tab labels
         */
        'tab.chatTitlePage': 'Converse aqui com outras pessoas que estão nesta página agora',
        'tab.chatTitleSite': 'Converse aqui com outras pessoas que estão neste site agora',
        // tooltip on ranking tab title
        'tab.rankingTitle': 'Onde as pessoas estão neste site agora',
        // tooltip on heatmap tab title
        'tab.heatmapTitle': 'Onde as pessoas estão no mundo real',
        // max 8 characters
        'tab.chatTabLabel': 'CHAT',
        // max 8 characters
        'tab.rankingTabLabel': 'PÁGINAS',
        // max 8 characters
        'tab.heatmapTabLabel': 'MAPA',

        /**
         * heatmap labels
         */
        // max 12 characters
        'heatmap.pageSwitchLabel': 'PÁGINA',
        // max 12 characters
        'heatmap.siteSwitchLabel': 'SITE',
        'heatmap.empty': 'Sem dados',

        /**
         * ranking labels
         */
        'ranking.foregroundTitle': 'Pessoas neste site',
        'ranking.activeTitle': 'Pessoas conversando neste site',
        // max 12 characters
        'ranking.foregroundSwitchLabel': 'VISITANTES',
        // max 12 characters
        'ranking.activeSwitchLabel': 'CONVERSANDO',
        'ranking.empty': 'Sem dados',
        'ranking.currentPage': 'Página atual',
        // note added to the end to the ranking list to explain that only the top ten pages are shown
        'ranking.note': 'Mostrando as dez páginas principais',

        /**
         * chat labels
         */
        'chat.welcomeFirstMessagePage': 'Converse aqui com outras pessoas que estão nesta página agora',
        'chat.welcomeFirstMessageSite': 'Converse aqui com outras pessoas que estão neste site agora',
        'chat.welcomeSecondMessage': 'Lembre-se de que o que você escreve no chat é público',
        'chat.welcomeSecondMessageJWT': 'Lembre-se de que o que você escreve no chat pode ser público',
        'chat.placeholder': 'Escrever mensagem...',
        'chat.postBtn': 'Postar',
        'chat.tooFrequentError': 'Você está sendo\' rápido demais... \nPor favor não congestione o bate-papo',
        'chat.blockedError': 'Desculpe ... Esta mensagem parece inadequada',
        'chat.mutedError': 'Ups! Parece que você foi silenciado',
        'chat.abortedError': 'Login cancelado ou cookies desativados neste navegador',
        'chat.notPersistentError': 'A autenticação não será lembrada devido às suas configurações de privacidade restritas. Ative os cookies para Now4real no seu navegador para evitar que isso aconteça.',
        'chat.signinRequired': '<a href="@href" target="_parent">Entrar</a> para conversar',
        'chat.viewOnly': 'Somente leitura',
        'chat.replyBtn': 'Responder',
        'chat.deleteBtn': 'Excluir',

        /**
         * emoji-picker labels
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
         * typing labels
         */
        // the elements below are composed to create a phrase
        // example: "user8 is writing..."
        // example: "user4 and 1 other are writing..."
        // example: "user3, user5 and 2 others are writing..."
        'typing.and': 'e',
        'typing.others': 'outro | outros',
        'typing.users': 'usuário | usuários',
        'typing.writing': 'está escrevendo | estão escrevendo',

        /**
         * social-modal labels
         */
        'social-modal.title': 'Entrar',
        'social-modal.header': 'Começar a conversar em qualquer website que utiliza Now4real',
        // example: "Sign in with Google"
        'social-modal.socialBtnPrefix': 'Entrar com',

        // the elements below are composed to create a phrase this way:
        // footer1+" "+terms+" "+footer2+" "+privacy+" "+footer3
        // example: "Click “Sign in” above to accept the Terms of Service and the Privacy Policy of Now4real"
        'social-modal.footer1': 'Click em “Entrar” acima para aceitar os',
        'social-modal.terms': 'Termos de Serviço',
        'social-modal.footer2': 'e a',
        'social-modal.privacy': 'Política de Privacidade',
        'social-modal.footer3': 'de Now4real',

        /**
         * jwt-modal labels
         */
        'jwt-modal.title': 'Consentimento',

        // the elements below are composed to create a phrase this way:
        // header1+" "+terms+" "+header2+" "+privacy+" "+header3
        // example: "To start chatting you should accept the Terms of Service and the Privacy Policy of Now4real"
        'jwt-modal.header1': 'Para começar a conversar você deve aceitar os',
        'jwt-modal.terms': 'Termos de Serviço',
        'jwt-modal.header2': 'e a',
        'jwt-modal.privacy': 'Política de Privacidade',
        'jwt-modal.header3': 'de Now4real (o serviço de chat)',

        'jwt-modal.button': 'Acetair',

        'generic.offline': 'Você está desconectado/a'
    },

    /***************
     * GERMAN
     ***************/
    'de': {
        'genericError': 'Hoppla! Etwas ist schief gelaufen',

        /**
         * commons
         */
        // example: "Angemeldet über Facebook"
        'commons.signedWith': 'Angemeldet über',
        'commons.JWTProvider': 'Webseite',
        'commons.close': 'Schließen',

        /**
         * time representation
         */
        // 12 (e.g. "3:52 PM") or 24 (e.g. "15:52")
        'hour-format': 24,

        /**
         * monitor labels
         */
        // tooltips on the widget bubble
        'monitor.pageViewersTitle': 'Seitenbesucher jetzt', 
        'monitor.siteViewersTitle': 'Webseitenbesucher jetzt',

        /**
         * presence labels
         */
        // the elements below are composed to create a phrase
        // example: "5 Besucher auf dieser Seite (von 23 auf dieser Webseite)"

        // singular and plural forms for "people" separated by pipe and spaces (Note: no difference Besucher for Plural/Singular)
        'presence.people': 'Besucher | Besucher',
        'presence.pageDescription': 'auf dieser Seite',
        'presence.siteDescription': 'auf dieser Webseite',
        'presence.totalDescriptionPrefix': 'von',
        'presence.totalDescriptionSuffix': 'auf dieser Webseite',

        /**
         * status-header labels
         */
        'status-header.options': 'Optionen',
        'status-header.help': 'Hilfe',
        'status-header.issue': 'Ein Problem melden',
        'status-header.terms': 'Nutzungsbedingungen',
        'status-header.privacy': 'Datenschutz-Bestimmungen',
        'status-header.signout': 'Ausloggen',
        // means that the login status is temporary and will not be remembered next time
        'status-header.notRememberedLogin': 'Nicht gespeichert',

        /**
         * tab labels
         */
        'tab.chatTitlePage': 'Chatten Sie hier mit anderen Besucher, die jetzt auf dieser Seite sind',
        'tab.chatTitleSite': 'Chatten Sie hier mit anderen Besucher, die jetzt auf dieser Webseite sind',
        // tooltip on ranking tab title
        'tab.rankingTitle': 'Auf welcher Seite sind die Besucher',
        // tooltip on heatmap tab title
        'tab.heatmapTitle': 'Woher kommen die Besucher',
        // max 8 characters
        'tab.chatTabLabel': 'CHAT',
        // max 8 characters
        'tab.rankingTabLabel': 'SEITEN',
        // max 8 characters
        'tab.heatmapTabLabel': 'KARTE',

        /**
         * heatmap labels
         */
        // max 12 characters
        'heatmap.pageSwitchLabel': 'SEITE',
        // max 12 characters
        'heatmap.siteSwitchLabel': 'WEBSEITE',
        'heatmap.empty': 'Keine Daten',

        /**
         * ranking labels
         */
        'ranking.foregroundTitle': 'Besucher auf dieser Webseite',
        'ranking.activeTitle': 'Besucher auf dieser Webseite chatten',
        // max 12 characters (should be 'ZUSCHAUER(INNEN)' but too long)
        'ranking.foregroundSwitchLabel': 'ZUSCHAUER',
        // max 12 characters
        'ranking.activeSwitchLabel': 'CHATTEN',
        'ranking.empty': 'Keine Daten',
        'ranking.currentPage': 'Aktuelle Seite',
        // note added to the end to the ranking list to explain that only the top ten pages are shown
        'Rangliste': 'Die besten 10 Seiten werden angezeigt',

        /**
         * chat labels
         */
        'chat.welcomeFirstMessagePage': 'Chatten Sie hier mit anderen Besucher, die jetzt auf dieser Seite sind',
        'chat.welcomeFirstMessageSite': 'Chatten Sie hier mit anderen Besucher, die jetzt auf dieser Webseite sind',
        'chat.welcomeSecondMessage': 'Bitte denken Sie daran, dass alles was Sie im Chat schreiben, öffentlich ist',
        'chat.welcomeSecondMessageJWT': 'Bitte denken Sie daran, dass das, was Sie im Chat schreiben, öffentlich ist',
        'chat.placeholder': 'Schreiben...',
        'chat.postBtn': 'Post',
        'chat.tooFrequentError': 'Sie sind ein wenig zu schnell...\nbitte nicht zu viel schreiben',
        'chat.blockedError': 'Sorry... diese Nachricht scheint unangemessen',
        'chat.mutedError': 'Hoppla! Es sieht so aus, als wären Sie stummgeschaltet worden',
        'chat.abortedError': 'Anmelden abgebrochen oder Cookies in diesem Browser deaktiviert',
        'chat.notPersistentError': 'Die Authentifizierung wird aufgrund Ihrer eingeschränkten Datenschutzeinstellungen nicht gespeichert. Um dies zu verhindern, aktivieren Sie bitte die Cookies für Now4real in Ihrem Browser.',
        'chat.signinRequired': '<a href="@href" target="_parent">Melden Sie sich an</a>, um zu chatten',
        'chat.viewOnly': 'Nur Betrachter -Modus',
        'chat.replyBtn': 'Antworten',
        'chat.deleteBtn': 'Löschen',

        /**
         * emoji-picker labels
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
         * typing labels
         */
        // the elements below are composed to create a phrase
        // example: "user8 schreibt..."
        // example: "user4 und 1 anderer schreiben..."
        // example: "user3, user5 und 2 andere schreiben..."
        'typing.and': 'und',
        'typing.others': 'andere | andere',
        'typing.users': 'Benutzer | Benutzer',
        'typing.writing': 'schreibt| schreiben',

        /**
         * social-modal labels
         */
        'social-modal.title': 'Anmelden',
        'social-modal.header': 'Chatten Sie jetzt auf einer Website, die Now4real verwendet',
        // example: "Anmelden via Google"
        'social-modal.socialBtnPrefix': 'Anmelden via',

        // the elements below are composed to create a phrase this way:
        // footer1+" "+terms+" "+footer2+" "+privacy+" "+footer3
        // example: "Klicken Sie auf “Anmelden” und akzeptiere damit die Nutzungsbedingungen und die Datenschutzbestimmungen von Now4real"
        'social-modal.footer1': 'Klick “Anmelden” und akzeptiere damit die',
        'social-modal.terms': 'Nutzungsbedingungen',
        'social-modal.footer2': 'und die',
        'social-modal.privacy': 'Datenschutzbestimmungen',
        'social-modal.footer3': 'von Now4real',

        /**
         * jwt-modal labels
         */
        'jwt-modal.title': 'Zustimmung',

        // the elements below are composed to create a phrase this way:
        // header1+" "+terms+" "+header2+" "+privacy+" "+header3
        // example: "Um mit dem Chatten zu beginnen, sollen Sie die Nutzungsbedingungen und die Datenschutzbestimmungen von Now4real akzeptieren"
        'jwt-modal.header1': 'Um mit dem Chatten zu beginnen, sollen Sie die',
        'jwt-modal.terms': 'Nutzungsbedingungen',
        'jwt-modal.header2': 'und die',
        'jwt-modal.privacy': 'Datenschutzbestimmungen',
        'jwt-modal.header3': 'von Now4real (der chat service)',

        'jwt-modal.button': 'Akzeptieren',

        'generic.offline': 'Sie sind offline'
    }
}
