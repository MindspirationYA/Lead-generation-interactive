/* =====================================================================
   INTERACTIVE CLIENT ACQUISITION  |  Coach config
   Coach: Mindspiration (Yassi)

   Everything a person reads lives in this one file. The engine
   (index.html) never needs editing to change wording. Rules of the file:
   - No em dashes in anything a person will read.
   - Scores are always 0 to 100 inside rules.
   - A pattern is a pattern, never a grade. Never judge the person.
   - German nouns keep their capital letter, so {low} is never lowercased.
   ===================================================================== */
window.ICA = {

  lang: "de",

  coach: {
    slug: "mindspiration",            // must match COACH_SLUG on Netlify
    name: "Mindspiration",
    owner: "Yassi",
    logo: "",                          // empty = the name shows as a wordmark. Later: "assets/logo.png"
    programLine: "Ich begleite Frauen dabei, Halt in sich selbst zu finden und ihrem Leben eine neue Richtung zu geben. Wenn du dich in deinem Ergebnis wiedererkannt hast, lass uns gemeinsam weitergehen."
  },

  defaultAssessment: "check-in",       // what the bare site address opens
  linkBetweenAssessments: false,

  /* ---------- Every button and small label in the engine ---------- */
  ui: {
    questions: "Fragen",
    privateNote: "Nur für dich",
    start: "Los geht’s",
    resume: "Weitermachen, wo du warst",
    restart: "Neu beginnen",
    back: "← Zurück",
    of: "von",
    next: "Weiter",
    almost: "Fast geschafft",
    allAnswered: "Alle {n} Fragen beantwortet",
    optional: "optional",
    choose: "Bitte wählen",
    errEmail: "Diese E-Mail-Adresse sieht nicht ganz richtig aus.",
    errTel: "Bitte mit Ländervorwahl, zum Beispiel +49.",
    errRequired: "Das brauchen wir kurz von dir.",
    wait: "Einen Moment",
    hello: "{name}, das zeigen deine Antworten.",
    overall: "Gesamt",
    whyPattern: "Dein Muster: {name}",
    whyLowest: "Dein Bereich mit dem meisten Potenzial: {label}",
    whyKeep: "{label} stark halten",
    whyNext: "Als Nächstes: {label}",
    copy: "Ergebnis kopieren",
    retake: "Noch einmal machen",
    copied: "Ergebnis kopiert",
    copyFail: "Kopieren ist hier leider nicht möglich",
    copyText: "Mein Ergebnis bei „{title}“: {name}.",
    copySteps: "Meine Schritte für diese Woche:"
  },

  /* ---------- Lead capture (between the last question and the results) ---------- */
  gate: {
    heading: "Dein Ergebnis ist fertig.",
    body: "Trag deinen Vornamen und deine E-Mail-Adresse ein. Auf der nächsten Seite siehst du dein Muster, deine vier Bereiche und drei kleine Schritte für diese Woche.",
    fields: [
      { key: "name",     label: "Vorname",            type: "text",  required: true,  autocomplete: "given-name" },
      { key: "email",    label: "E-Mail-Adresse",     type: "email", required: true,  autocomplete: "email" },
      { key: "whatsapp", label: "WhatsApp-Nummer",    type: "tel",   required: false, autocomplete: "tel", hint: "Mit Ländervorwahl, zum Beispiel +49 170 1234567." }
    ],
    /* Consent checkbox. Must be ticked before results show. {link} becomes the privacy link. */
    consentCheckbox: true,
    consent: "Ich bin einverstanden, dass Mindspiration meine Angaben und Antworten speichert, um mir mein Ergebnis zu zeigen und mich dazu per E-Mail oder WhatsApp zu kontaktieren. Ich kann das jederzeit widerrufen. Mehr dazu in der {link}.",
    consentLinkText: "Datenschutzerklärung",
    consentUrl: "https://www.mindspiration.co/datenschutz",
    consentError: "Bitte bestätige kurz dein Einverständnis.",
    button: "Mein Ergebnis zeigen",
    note: "Deine Angaben werden nicht weitergegeben oder verkauft."
  },

  /* ---------- Offers at the bottom of every results page ----------
     enabled:false hides one. An empty url hides one too.
     When the webinar link exists, paste it into url and it appears. */
  offers: {
    heading: "Wie es weitergehen kann",
    items: [
      { id: "call", enabled: true, title: "Kostenloser Wegweiser-Call",
        body: "Wir schauen uns gemeinsam dein Ergebnis an und klären, was dir jetzt wirklich hilft. Kostenlos und unverbindlich.",
        button: "Wegweiser-Call buchen", url: "https://calendly.com/yaaaaaassi/wegweiser-call" },
      { id: "community", enabled: true, title: "Die Community",
        body: "Du musst diesen Weg nicht allein gehen. Persönliche Impulse und Sprachnachrichten von mir, zusammen mit Frauen, die genau wissen, wie sich das anfühlt.",
        button: "Der Community beitreten", url: "https://www.mindspiration.co/bestellung" },
      { id: "webinar", enabled: true, title: "Vision-Board-Webinar",
        body: "Wir geben deinen Wünschen ein Bild und eine Richtung. Kostenlos und live mit mir.",
        button: "Zum Webinar anmelden", url: "" }
    ]
  },

  assessments: {

    /* =================================================================
       CHECK-IN: WAS HÄLT DICH GERADE ZURÜCK?
       Four patterns taken from Yassi's own Advent calendar (door 9:
       Stark sein, Für alle da sein, Funktionieren, Erinnerungen).
       Six scenario questions decide the pattern (most picks wins).
       Eight statements score four areas from 0 to 100.
       ================================================================= */
    "check-in": {
      id: "check-in",
      title: "Was hält dich gerade zurück?",
      subtitle: "Ein kurzer, ehrlicher Check-in für Frauen, die ihr Leben verändern wollen.",
      lede: "Beantworte 14 Fragen. Am Ende siehst du dein Muster, wie es um deinen Selbstwert, deine Grenzen, deine Energie und deine Richtung steht, und drei kleine Schritte für diese Woche.",
      minutes: "Etwa 4 Minuten",
      privacy: "Ein Werkzeug zur Selbstreflexion, keine Diagnose.",

      patternKicker: "Dein Muster",
      overall: false,                    // no overall score: this is a pattern, not a grade
      lowestOrder: ["selbstwert", "grenzen", "energie", "richtung"],
      patternOrder: ["S", "F", "U", "H"],   // tie-break when two patterns have the same number of picks

      patterns: {
        S: { name: "Die Starke", tag: "Du trägst alles. Meistens allein.",
          body: "Du bist die, auf die sich alle verlassen können. Du regelst, organisierst und hältst durch, auch wenn es dir selbst nicht gut geht. Um Hilfe zu bitten fühlt sich für dich schnell wie Schwäche an. Dabei ist es oft der mutigste Schritt.",
          footLabel: "Was dieses Muster schützt", foot: "Meist dein Bedürfnis nach Sicherheit: Wenn du alles selbst machst, kann dich niemand enttäuschen.",
          action: "Bitte diese Woche eine Person um eine Kleinigkeit, die du sonst selbst erledigen würdest. Nimm die Hilfe an, ohne dich dafür zu rechtfertigen.",
          video: "", pdf: "" },
        F: { name: "Die Fürsorgliche", tag: "Für alle da. Nur nicht für dich.",
          body: "Du spürst sofort, was andere brauchen, und gibst es ihnen gern. Harmonie ist dir wichtig, also schluckst du lieber etwas herunter, als Streit zu riskieren. Am Ende des Tages ist für dich selbst oft nichts mehr übrig.",
          footLabel: "Was dieses Muster schützt", foot: "Meist dein Bedürfnis nach Verbindung: Wenn alle zufrieden sind, fühlst du dich sicher und gemocht.",
          action: "Frag dich diese Woche vor jedem Ja: Will ich das wirklich? Sag mindestens einmal Nein, ohne es zu erklären.",
          video: "", pdf: "" },
        U: { name: "Die Funktionierende", tag: "Hauptsache, es läuft. Wie es dir geht, kommt später.",
          body: "Du hast gelernt, einfach weiterzumachen. Der Alltag läuft, die To-do-Liste wird abgearbeitet und nach außen wirkt alles im Griff. Was du fühlst, schiebst du auf später. Nur kommt dieses Später selten.",
          footLabel: "Was dieses Muster schützt", foot: "Meist dein Bedürfnis nach Kontrolle: Solange alles läuft, musst du nicht spüren, was gerade schwer ist.",
          action: "Stell dir diese Woche dreimal am Tag einen Wecker und frag dich nur: Wie geht es mir gerade wirklich? Ein Wort als Antwort reicht.",
          video: "", pdf: "" },
        H: { name: "Die Festhaltende", tag: "Ein Teil von dir ist noch bei dem, was war.",
          body: "Deine Gedanken kreisen oft um das, was passiert ist, oder um das, was hätte sein können. Das ist kein Fehler. Es zeigt, wie viel dir etwas bedeutet hat. Nur bleibt dadurch wenig Platz für das, was jetzt kommen darf.",
          footLabel: "Was dieses Muster schützt", foot: "Meist dein Bedürfnis nach Halt: Das Bekannte fühlt sich sicherer an als das Neue, auch wenn es wehtut.",
          action: "Schreib diese Woche einen Brief an das, was war. Du musst ihn nicht abschicken. Beende ihn mit einem Satz darüber, was du dir jetzt für dich wünschst.",
          video: "", pdf: "" }
      },

      dimensions: {
        selbstwert: { label: "Selbstwert", sub: "Wie du über dich selbst denkst", group: "bereiche",
          why: "Wenn du an deinem Wert zweifelst, machst du dich klein, damit andere bleiben.",
          action: "Schreib dir diese Woche jeden Abend eine Sache auf, die du heute gut gemacht hast. Kleine Dinge zählen auch.",
          notes: { high: "Du weißt, was du wert bist, auch an schweren Tagen.", mid: "Meistens glaubst du an dich, aber Kritik trifft dich schnell.", low: "Gerade hängt dein Wert stark davon ab, wie andere dich sehen." } },
        grenzen: { label: "Grenzen", sub: "Wie gut du Nein sagen kannst", group: "bereiche",
          why: "Ohne klare Grenzen geben andere den Takt vor und du bleibst auf der Strecke.",
          action: "Such dir diese Woche eine Situation aus, in der du sonst sofort Ja sagst, und antworte stattdessen: Ich überlege es mir und melde mich.",
          notes: { high: "Du sagst Nein, wenn du Nein meinst.", mid: "Manchmal gelingt dir ein Nein, oft mit schlechtem Gewissen.", low: "Ein Nein fühlt sich für dich gerade kaum möglich an." } },
        energie: { label: "Energie", sub: "Wie viel Kraft dir gerade bleibt", group: "bereiche",
          why: "Wenn dein Akku leer ist, fühlt sich jede Veränderung doppelt so schwer an.",
          action: "Plane diese Woche zwei feste Pausen von 20 Minuten nur für dich ein, mit dem Handy in einem anderen Raum.",
          notes: { high: "Du hast gerade genug Kraft für dich und dein Leben.", mid: "An manchen Tagen reicht die Kraft, an anderen nicht.", low: "Du läufst gerade auf Reserve." } },
        richtung: { label: "Richtung", sub: "Wie klar du weißt, wohin du willst", group: "bereiche",
          why: "Ohne Richtung fühlt sich jeder Tag gleich an und Veränderung bleibt ein Wunsch.",
          action: "Nimm dir diese Woche 15 Minuten und beende diesen Satz: In einem Jahr möchte ich mich ... fühlen. Schreib einen ersten kleinen Schritt dazu.",
          notes: { high: "Du weißt, wohin du willst, und gehst los.", mid: "Du ahnst, was du willst, aber der Weg ist noch unklar.", low: "Gerade fühlt sich die Zukunft eher leer oder verschwommen an." } }
      },

      groups: [
        { id: "bereiche", title: "Deine vier Bereiche", leadLowest: "Am meisten bewegst du gerade im Bereich {low}. Dort macht schon ein kleiner Schritt einen Unterschied.",
          labels: { high: "Trägt dich", mid: "Wackelt manchmal", low: "Braucht dich gerade" }, thresholds: [70, 45], lowestFrom: true }
      ],

      /* Priority rules for action two, checked in order. The first that fits wins. */
      rules: [
        { dim: "energie", when: s => s.dims.energie <= 40 && s.dims.grenzen <= 45, why: "Deine Energie und deine Grenzen",
          action: "Schau in deinen Kalender und streich diese Woche eine Verpflichtung, die dir Kraft nimmt. Wenn du sie nicht streichen kannst, kürze sie." },
        { dim: "selbstwert", when: s => s.dims.selbstwert <= 35, why: "Dein Selbstwert braucht gerade Pflege",
          action: "Sag dir diese Woche jeden Morgen einen Satz, den du einer guten Freundin sagen würdest. Laut, auch wenn es sich am Anfang komisch anfühlt." }
      ],

      scenarioHint: "Wähl die Antwort, die deiner ersten Reaktion am nächsten kommt, nicht die, die du dir wünschst.",
      scaleHint: "1 heißt: trifft gar nicht zu. 5 heißt: trifft voll zu.",
      scaleEnds: ["Trifft gar nicht zu", "Trifft voll zu"],

      questions: [
        { type: "scenario", part: "Wie du reagierst", q: "Eine Freundin bittet dich spontan, ihr am Wochenende beim Umzug zu helfen. Du bist eigentlich völlig erschöpft. Was tust du?",
          opts: [["Ich sage zu und organisiere am besten gleich den ganzen Umzug.", "S"], ["Ich sage zu, weil ich sie nicht enttäuschen will.", "F"], ["Ich sage zu, ohne groß darüber nachzudenken. Ist halt so.", "U"], ["Ich sage zu, bin mit dem Kopf aber ganz woanders.", "H"]] },
        { type: "scale", part: "Selbstwert", key: "selbstwert", q: "Ich mag die Frau, die ich gerade bin." },
        { type: "scenario", part: "Wie du reagierst", q: "Ein Abend, an dem nichts geplant ist. Was passiert meistens?",
          opts: [["Ich erledige endlich die Dinge, die liegen geblieben sind.", "S"], ["Ich melde mich bei jemandem, der mich gerade braucht.", "F"], ["Ich scrolle oder schaue Serien, bis ich müde genug zum Schlafen bin.", "U"], ["Meine Gedanken wandern zu dem, was war, oder zu dem, was hätte sein können.", "H"]] },
        { type: "scale", part: "Grenzen", key: "grenzen", q: "Ich kann Nein sagen, ohne mich danach schlecht zu fühlen." },
        { type: "scenario", part: "Wie du reagierst", q: "Jemand fragt dich: Wie geht es dir wirklich? Was passiert in dir?",
          opts: [["Ich sage: Alles gut, ich krieg das hin.", "S"], ["Ich lenke das Gespräch schnell auf die andere Person.", "F"], ["Ich merke, dass ich die Antwort selbst nicht genau weiß.", "U"], ["Sofort kommen die alten Themen hoch, über die ich eigentlich nicht mehr reden wollte.", "H"]] },
        { type: "scale", part: "Energie", key: "energie", q: "Am Ende des Tages habe ich noch Kraft für mich selbst." },
        { type: "scenario", part: "Wie du reagierst", q: "Etwas geht schief, das dir wichtig war. Was machst du zuerst?",
          opts: [["Ich kremple die Ärmel hoch und löse es allein.", "S"], ["Ich frage mich, ob ich jemanden enttäuscht habe.", "F"], ["Ich mache einfach weiter, als wäre nichts gewesen.", "U"], ["Ich spiele immer wieder durch, was ich hätte anders machen können.", "H"]] },
        { type: "scale", part: "Richtung", key: "richtung", q: "Ich weiß, wie sich mein Leben in einem Jahr anfühlen soll." },
        { type: "scenario", part: "Wie du reagierst", q: "Du hast einen ganzen Tag nur für dich. Was fühlst du zuerst?",
          opts: [["Unruhe. Ich könnte die Zeit doch sinnvoll nutzen.", "S"], ["Ein schlechtes Gewissen, weil mich vielleicht jemand braucht.", "F"], ["Leere. Ich weiß gar nicht mehr genau, was mir Freude macht.", "U"], ["Sehnsucht nach einem Menschen oder einer Zeit, die vorbei ist.", "H"]] },
        { type: "scale", part: "Selbstwert", key: "selbstwert", q: "Mein Wert hängt nicht davon ab, wer in meinem Leben bleibt." },
        { type: "scenario", part: "Wie du reagierst", q: "Wenn du an das nächste Jahr denkst, welcher Gedanke kommt zuerst?",
          opts: [["Ich muss es einfach schaffen, egal wie.", "S"], ["Hauptsache, den anderen geht es gut.", "F"], ["Ehrlich gesagt denke ich nicht so weit. Erst mal den Alltag schaffen.", "U"], ["Ich wünschte, manches wäre wieder so wie früher.", "H"]] },
        { type: "scale", part: "Grenzen", key: "grenzen", q: "Ich nehme mir Zeit für mich, auch wenn andere gerade etwas von mir wollen." },
        { type: "scale", part: "Energie", key: "energie", q: "Ich schlafe gut und wache meistens erholt auf." },
        { type: "scale", part: "Richtung", key: "richtung", q: "Ich tue jede Woche etwas, das mich meinem Ziel ein Stück näherbringt." }
      ],

      results: {
        actionsTitle: "Drei kleine Schritte für diese Woche",
        actionsLead: "Bewusst klein gehalten. Such dir einen aus oder mach alle drei.",
        note: "Veränderung beginnt selten mit dem großen Wurf. Sie beginnt mit einem ehrlichen Blick auf dich selbst. Den hast du gerade gemacht.",
        care: "Wenn beim Beantworten etwas Schweres hochgekommen ist, bleib damit nicht allein. Sprich mit einem Menschen, dem du vertraust, oder hol dir professionelle Unterstützung.",
        videoTitle: "Eine Nachricht von mir zu deinem Muster",
        pdfTitle: "Dein Begleiter",
        pdfBody: "",
        pdfButton: "Herunterladen"
      }
    }
  }
};
