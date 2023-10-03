const QuestionListLv = [
  {
    category: "sleep",
    label: "Jautājums 1",
    text:
      "Vai Tev darba dienās galvenokārt ir regulārs pamošanās un gulētiešanas grafiks?",
    note:
      "*Pamošanās un gulētiešanas laiks neatšķiras vairāk par 30 min dienu no dienas.",
    type: "radio",
    identifier: "q1",
    options: { Jā: "1", Nē: "5" },
    weight: "3",
    comment: "Tavs Komentārs:"
  },

  {
    category: "sleep",
    label: "Jautājums 2",
    text: "Cikos Tu parasti ej gulēt darba dienās?",
    type: "time",
    identifier: "q2",
    value: "22:00 AM",
    weight: "1"
  }, // weight / score is for stundas slept on weekdays

  {
    category: "sleep",
    label: "Jautājums 3",
    text: "Cikos Tu parasti celies darba dienās?",
    type: "time",
    identifier: "q3",
    value: "07:00",
    weight: "0.8"
  }, // weight / score is for stundas slept on weekends

  {
    category: "sleep",
    label: "Jautājums 4",
    text:
      "Vai Tavs darba dienu grafiks būtiski atšķiras no nedēļas nogales grafika?",
    note:
      "Tavs pamošanās un/vai gulētiešanas laiks atšķiras vairāk par 1,5 stundām darba dienās un nedēļas nogalē",
    type: "radio",
    identifier: "q4",
    options: { Jā: "1", Nē: "5" },
    weight: "1",
    comment: "Tavs Komentārs:"
  },

  {
    category: "sleep",
    label: "Jautājums 5",
    text: "Cikos Tu parasti ej gulēt nedēļas nogalē?",
    type: "time",
    identifier: "q5",
    value: "22:00",
    weight: "0.8"
  }, // score / weight is for differing wake-up time between weekdays and weekends

  {
    category: "sleep",
    label: "Jautājums 6",
    text: "Cikos Tu parasti celies nedēļas nogalē?",
    type: "time",
    identifier: "q6",
    value: "07:00",
    weight: "0.8"
  }, // score / weight is for differing wake-up time between weekdays and weekends

  {
    category: "sleep",
    label: "Jautājums 7",
    text: "Cik stundas Tu vidēji guli naktī?",
    type: "select_choice",
    identifier: "q7",
    options: [
      { label: "> 8 h", value: "5" },
      { label: "7 - 8 h", value: "3" },
      { label: "< 7 h", value: "1" }
    ],
    weight: "3",
    comment: "Tavs Komentārs:"
  },

  {
    category: "sleep",
    label: "Jautājums 8",
    text: "Vai Tu krāc?",
    type: "radio",
    identifier: "q8",
    options: { Jā: "1", Nē: "5", "Īsti nezinu": "0" },
    weight: "0.8",
    comment: "Tavs Komentārs:"
  },

  {
    category: "sleep",
    label: "Jautājums 9",
    text: "Vai Tu regulāri pamosties ar sajūtu, ka ir ciet deguns?",
    type: "radio",
    identifier: "q9",
    options: { Jā: "1", Nē: "5" },
    weight: "0.8",
    comment: "Tavs Komentārs:"
  },

  {
    category: "sleep",
    label: "Jautājums 10",
    text: "Vai Tu regulāri pamosties un jūties noguris un bez enerģijas?",
    type: "radio",
    identifier: "q10",
    options: { Jā: "1", Nē: "5" },
    weight: "0.8",
    comment: "Tavs Komentārs:"
  },

  {
    category: "sleep",
    label: "Jautājums 11",
    text: "Kā Tu vērtētu savu miega kvalitāti (cik labi guli)?",
    type: "select_choice",
    identifier: "q11",
    options: [
      { label: "Lieliski", value: "5" },
      { label: "Labi", value: "4" },
      { label: "Viduvēji", value: "3" },
      { label: "Ne pārāk labi", value: "2" },
      { label: "Ļoti slikti", value: "1" }
    ],
    weight: "1",
    comment: "Tavs Komentārs:"
  },

  {
    category: "meal schedule",
    label: "Jautājums 12",
    text:
      "Vai Tev ir regulārs ēdienreižu režīms darba dienās?",
    note:
      "*Tavi ēdienreižu laiki parasti nav nobīdīti vairāk par 1 h",
    type: "radio",
    identifier: "q12",
    options: { Jā: "5", Nē: "1" },
    weight: "2",
    comment: "Tavs Komentārs:"
  },

  {
    category: "meal schedule",
    label: "Jautājums 13",
    text: "Cikos Tu parasti pabeidz savu pēdējo ēdienreizi darba dienās?",
    type: "time",
    identifier: "q13",
    value: "19:00",
    weight: "1"
  }, // score / weight for meals before bedtime on weekdays

  {
    category: "meal schedule",
    label: "Jautājums 14",
    text: "Cikos Tu parasti ieturi savu pirmo maltīti darba dienās?",
    type: "time",
    identifier: "q14",
    value: "08:00",
    weight: "1"
  }, // score / weight for stundas spent fasting on weekdays

  {
    category: "meal schedule",
    label: "Jautājums 15",
    text:
      "Vai Tavs ēdienreižu režīms būtiski atšķiras darba dienās un nedēļas nogalēs?",
    note:
      "*Tavi ēdienreižu laiki darba dienās parasti atšķiras par vismaz 2 h salīdzinot ar nedēļas nogali.",
    type: "radio",
    identifier: "q15",
    options: { Jā: "1", Nē: "5" },
    weight: "0.5",
    comment: "Tavs Komentārs:"
  },

  {
    category: "meal schedule",
    label: "Jautājums 16",
    text: "Cikos Tu parasti ieturi savu pirmo maltīti nedēļas nogalē?",
    note: "*Ja laiks atšķiras, ievadi vēlāko.",
    type: "time",
    identifier: "q16",
    value: "09:00",
    weight: "0.5"
  }, // score / weight for the first meal time on weekdays compared to weekends

  {
    category: "meal schedule",
    label: "Jautājums 17",
    text: "Cikos Tu parasti pabeidz savu pēdējo maltīti nedēļas nogalē?",
    note: "*Ja laiks atšķiras, ievadi vēlāko",
    type: "time",
    identifier: "q17",
    value: "20:00",
    weight: "0.5"
  }, // score / weight for the last meal time on weekdays compared to weekends

  {
    category: "meal schedule",
    label: "Jautājums 18",
    text: "Kurš no apgalvojumiem vislabāk apraksta Tavu ēdienreižu režīmu?",
    type: "select_choice",
    identifier: "q18",
    options: [
      {
        label:
          "Es stingri ieturu regulāru ēdienreižu režīmu",
        value: "5"
      },
      {
        label:
          "Lielākoties turos pie režīma ar dažiem izņēmumiem",
        value: "4"
      },
      {
        label:
          "Es cenšos ieturēt regulāru režīmu, taču bieži nespēju pie tā pieturēties",
        value: "3"
      },
      {
        label:
          "Viena maltīte dienā ir regulāra, taču pārējās mainās no situācijas",
        value: "2"
      },
      { label: "Man nav konkrēta režīma, ēdu pilnīgi dažādos laikos katru dienu", value: "1" }
    ],
    weight: "2",
    comment: "Tavs Komentārs:"
  },

  {
    category: "caffeine consumption",
    label: "Jautājums 19",
    text: "Vai Tu regulāri lieto kofeīnu?",
    type: "radio",
    identifier: "q19",
    options: { Jā: "0", Nē: "5" },
    weight: "1",
    comment: "Tavs Komentārs:"
  },

  {
    category: "caffeine consumption",
    label: "Jautājums 20",
    text: "Cik kofeīnu saturošus dzērienus dienā Tu parasti izdzer?",
    type: "select_choice",
    identifier: "q20",
    options: [
      { label: "2 vai mazāk", value: "5" },
      { label: "3", value: "3" },
      { label: "Vairāk nekā 3", value: "1" }
    ],
    weight: "1",
    comment: "Tavs Komentārs:"
  },

  {
    category: "caffeine consumption",
    label: "Jautājums 21",
    text:
      "Cik ilgi pēc pamošanās parasti lieto pirmo kofeīnu saturošo dzērienu?",
    note: "*Ja tas atšķiras, izvēlies agrāko laiku.",
    type: "select_choice",
    identifier: "q21",
    options: [
      { label: "Vairāk nekā stundu pēc pamošanās", value: "5" },
      { label: "Mazāk nekā stundu pirms pamošanās", value: "1" }
    ],
    weight: "0.5",
    comment: "Tavs Komentārs:"
  },

  {
    category: "caffeine consumption",
    label: "Jautājums 22",
    text:
      "Cik ilgi pirms gulētiešanas lieto kofeīnu saturošu dzērienu?",
    note: "*Ja atšķiras, izvēlies vēlāko laiku.",
    type: "select_choice",
    identifier: "q22",
    options: [
      { label: "Vairāk nekā 10 stundas pirms gulētiešanas", value: "5" },
      { label: "8 - 10 stundas", value: "3" },
      { label: "Mazāk nekā 8 stundas pirms gulētiešanas", value: "1" }
    ],
    weight: "2",
    comment: "Tavs Komentārs:"
  },

  {
    category: "caffeine consumption",
    label: "Jautājums 23",
    text:
      "Vai Tu regulāri pavadi vismaz 10 minūtes ārā ap saullēkta laiku*?",
    note: "*Laika intervālā aptuveni 1 stundu pirms vai pēc saullēkta",
    type: "radio",
    identifier: "q23",
    options: { Jā: "5", Nē: "1" },
    weight: "1",
    comment: "Tavs Komentārs:"
  },

  {
    category: "bright light viewing",
    label: "Jautājums 24",
    text:
      "Vai Tu regulāri pavadi ārā vismaz 10 minūtes saulrieta un/vai krēslas laikā vakarā?",
    note: "*Laika intervālā aptuveni 1 stundu pirms vai pēc saulrieta",
    type: "radio",
    identifier: "q24",
    options: { Jā: "5", Nē: "1" },
    weight: "0.8",
    comment: "Tavs Komentārs:"
  },

  {
    category: "bright light viewing",
    label: "Jautājums 25",
    text:
      "Cik minūtes kopumā Tu parasti pavadi ārā darba dienās?",
    note: "*Ja atšķiras, izvēlēties īsāko laika posmu",
    type: "select_choice",
    identifier: "q25",
    options: [
      { label: "> 60 minūtes", value: "5" },
      { label: "30 - 60 minūtes", value: "3" },
      { label: "< 30 minūtes", value: "1" }
    ],
    weight: "0.8",
    comment: "Tavs Komentārs:"
  },

  {
    category: "bright light viewing",
    label: "Jautājums 26",
    text:
      "Cik ilgi pirms gulētiešanas Tu pēdējo rezi skaties telefonā, datorā vai TV?",
    note: "*Ja atšķiras, izvēlēties īsāko laika posmu",
    type: "select_choice",
    identifier: "q26",
    options: [
      { label: "> 60 minūtes", value: "1" },
      { label: "30 - 60 minūtes", value: "3" },
      { label: "< 30 minūtes", value: "5" }
    ],
    weight: "1",
    comment: "Tavs Komentārs:"
  },

  {
    category: "alcohol consumption",
    label: "Jautājums 27",
    text: "Vai Tu lieto alkoholu biežāk nekā divas reizes mēnesī?",
    type: "radio",
    identifier: "q27",
    options: { Jā: "1", Nē: "5" },
    weight: "1",
    comment: "Tavs Komentārs:"
  },

  {
    category: "alcohol consumption",
    label: "Jautājums 28",
    text:
      "Kad lieto alkoholu, cik dzērienus nedēļā Tu izdzer?",
    type: "select_choice",
    identifier: "q28",
    options: [
      { label: "1 - 2", value: "3" },
      { label: "> 3", value: "1" }
    ],
    weight: "1",
    comment: "Tavs Komentārs:"
  },

  {
    category: "alcohol consumption",
    label: "Jautājums 29",
    text: "Cik reizes nedēļā Tu lieto alkoholu?",
    type: "select_choice",
    identifier: "q29",
    options: [
      { label: "1 - 2", value: "3" },
      { label: "> 3", value: "1" }
    ],
    weight: "0.5"
  },

  {
    category: "energy levels",
    label: "Jautājums 30",
    text:
      "Cik bieži Tev ir grūtības pamosties no rīta, kad noskan modinātājs?",
    type: "select_choice",
    identifier: "q30",
    options: [
      { label: "Gandrīz katru dienu", value: "1" },
      { label: "Bieži", value: "2" },
      { label: "50 % no laika", value: "3" },
      { label: "Dažreiz", value: "4" },
      { label: "Gandrīz nekad", value: "5" }
    ],
    weight: "1"
  },

  {
    category: "energy levels",
    label: "Jautājums 31",
    text: "Cik bieži Tu jūties, ka varētu no jauna aizmigt pirms 11:00 no rīta?",
    type: "select_choice",
    identifier: "q31",
    options: [
      { label: "Gandrīz katru dienu", value: "1" },
      { label: "Bieži", value: "2" },
      { label: "50 % no laika", value: "3" },
      { label: "Dažreiz", value: "4" },
      { label: "Gandrīz nekad", value: "5" }
    ],
    weight: "1"
  },

  {
    category: "energy levels",
    label: "Jautājums 32",
    text: "Cik atpūties un atjaunojies Tu jūties pēc pamošanās?",
    type: "select_choice",
    identifier: "q32",
    options: [
      { label: "Vispār nejūtos atjaunojies", value: "1" },
      { label: "Ļoti minimāli atjaunojies", value: "2" },
      { label: "Viduvēji", value: "3" },
      { label: "Labi atjaunojies", value: "4" },
      { label: "Jūtos ļoti atjaunojies", value: "5" }
    ],
    weight: "1"
  },

  {
    category: "energy levels",
    label: "Jautājums 33",
    text:
      "Cik bieži Tu jūties noguris, bezspēcīgs, miegains dienas laikā, pat kad centies koncentrēties?",
    type: "select_choice",
    identifier: "q33",
    options: [
      { label: "Gandrīz katru dienu", value: "1" },
      { label: "Bieži", value: "2" },
      { label: "50 % no laika", value: "3" },
      { label: "Dažreiz", value: "4" },
      { label: "Gandrīz nekad", value: "5" }
    ],
    weight: "1"
  },

  {
    category: "energy levels",
    label: "Jautājums 34",
    text:
      'Cik bieži Tu jūti, ka ir nepieciešams kofeīns vai citi stimulanti, lai "izvilktu" līdz dienas beigām?',
    type: "select_choice",
    identifier: "q34",
    options: [
      { label: "Gandrīz katru dienu", value: "1" },
      { label: "Bieži", value: "2" },
      { label: "50 % no laika", value: "3" },
      { label: "Dažreiz", value: "4" },
      { label: "Gandrīz nekad", value: "5" }
    ],
    weight: "1"
  },

  {
    category: "energy levels",
    label: "Jautājums 35",
    text: "Cik bieži Tev ir grūtības koncentrēties vai atcerēties lietas?",
    type: "select_choice",
    identifier: "q35",
    options: [
      { label: "Gandrīz katru dienu", value: "1" },
      { label: "Bieži", value: "2" },
      { label: "50 % no laika", value: "3" },
      { label: "Dažreiz", value: "4" },
      { label: "Gandrīz nekad", value: "5" }
    ],
    weight: "1"
  },

  {
    category: "energy levels",
    label: "Jautājums 36",
    text: "Cik bieži jūties viegli aizkaitināms vai pieredzi krasas garastāvokļa maiņas dienas laikā?",
    type: "select_choice",
    identifier: "q36",
    options: [
      { label: "Gandrīz katru dienu", value: "1" },
      { label: "Bieži", value: "2" },
      { label: "50 % no laika", value: "3" },
      { label: "Dažreiz", value: "4" },
      { label: "Gandrīz nekad", value: "5" }
    ],
    weight: "1"
  },

  {
    category: "energy levels",
    label: "Jautājums 37",
    text:
      "Cik bieži varētu nejauši aizmigt dienas laikā, piemēram, strādājot pie datora vai esot online sapulcē?",
    type: "select_choice",
    identifier: "q37",
    options: [
      { label: "Gandrīz katru dienu", value: "1" },
      { label: "Bieži", value: "2" },
      { label: "50 % no laika", value: "3" },
      { label: "Dažreiz", value: "4" },
      { label: "Gandrīz nekad", value: "5" }
    ],
    weight: "1"
  },

  {
    category: "energy levels",
    label: "Jautājums 38",
    text:
      "Cik bieži Tev ir grūtības vakarā aizmigt, vai naktī pamosties un nespēj atkal iemigt?",
    type: "select_choice",
    identifier: "q38",
    options: [
      { label: "Gandrīz katru dienu", value: "1" },
      { label: "Bieži", value: "2" },
      { label: "50 % no laika", value: "3" },
      { label: "Dažreiz", value: "4" },
      { label: "Gandrīz nekad", value: "5" }
    ],
    weight: "1"
  },

  {
    category: "energy levels",
    label: "Jautājums 39",
    text: "Kā Tu raksturotu savu ikdienas enerģijas līmeni?",
    type: "select_choice",
    identifier: "q39",
    options: [
      { label: "Jūtos noguris lielāko dienas daļu gandrīz katru dienu", value: "1" },
      {
        label: "Man bieži pietrūkst enerģijas uz dienas beigām",
        value: "2"
      },
      { label: "Man trūkst enerģijas 50 % no laika", value: "3" },
      { label: "Pārsvarā jūtos enerģisks", value: "4" },
      { label: "Jūtos pilns ar enerģiju katru dienu", value: "5" }
    ],
    weight: "1"
  },

  {
    category: "physical activity",
    label: "Jautājums 40",
    text: "Vidēji cik soļus dienā Tu noej?",
    type: "select_choice",
    identifier: "q40",
    options: [
      { label: "Mazāk nekā 8000", value: "1" },
      { label: "8000 - 10 000", value: "3" },
      { label: "10 000 vai vairāk", value: "5" }
    ],
    weight: "1"
  },

  {
    category: "physical activity",
    label: "Jautājums 41",
    text:
      "Vai Tu nodarbojies ar fiziskām aktivitātēm?",
    note:
      "*Piemēram, ej uz zāli, piedalies fitnesa nodarbībā, nodarbojies ar jogu, dejošanu, spēlē kādu sporta veidu, nodarbojies ar cīņas mākslu, skriešanu, riteņbraukšanu vai citu sporta veidu utt.",
    type: "radio",
    identifier: "q41",
    options: { Jā: "5", Nē: "1" },
    weight: "1"
  },

  {
    category: "physical activity",
    label: "Jautājums 42",
    text: "Cik reizes nedēļā Tu nodarbojies ar fiziskām aktivitātēm?",
    type: "select_choice",
    identifier: "q42",
    options: [
      { label: "2 vai mazāk", value: "1" },
      { label: "3 - 4", value: "3" },
      { label: "5 vai vairāk", value: "5" }
    ],
    weight: "0.8"
  },

  {
    category: "physical activity",
    label: "Jautājums 43",
    text: "Vai Tu regulāri veic pretestības/svaru treniņus?",
    type: "radio",
    identifier: "q43",
    options: { Jā: "5", Nē: "1" },
    weight: "1"
  },

  {
    category: "physical activity",
    label: "Jautājums 44",
    text: "Cik reizes nedēļā Tu veic pretestības/svaru treniņus?",
    type: "select_choice",
    identifier: "q44",
    options: [
      { label: "1", value: "1" },
      { label: "2", value: "3" },
      { label: "3 vai vairāk", value: "5" }
    ],
    weight: "0.8"
  },

  {
    category: "physical activity",
    label: "Jautājums 45",
    text: "Vai Tu nodarbojies ar kardio treniņiem?",
    note: "*Piemēram, skriešana, riteņbraukšana, airēšana u.c.",
    type: "radio",
    identifier: "q45",
    options: { Jā: "5", Nē: "1" },
    weight: "1"
  },

  {
    category: "physical activity",
    label: "Jautājums 46",
    text: "Cik reizes nedēļā Tu nodarbojies ar kardio treniņiem?",
    type: "text",
    identifier: "q46",
    weight: "0.5",
    response: "reizes/nedēļā"
  },

  {
    category: "physical activity",
    label: "Jautājums 47",
    text: "Cik minūtes parasti ir viens kardio treniņš?",
    note: "*Ja garums ir atšķirīgs, ieraksti īsāko treniņa garumu",
    type: "text",
    identifier: "q47",
    weight: "0.8",
    response: "minūtes"
  },

  {
    category: "physical activity",
    label: "Jautājums 48",
    text: "Vai Tev ir kādas hroniskas sāpes ķermenī?",
    note: "Ja, jā, lūdzu, īsi raksturo šīs sāpes komentāru sadaļā",
    type: "radio",
    identifier: "q48",
    options: { Jā: "1", Nē: "5" },
    weight: "0.8"
  },

  {
    category: "physical activity",
    label: "Jautājums 49",
    text: "Cik bieži Tu jūti diskomfortu kādā ķermeņa daļā?",
    note: "*Piemēram, savilkti pleci, sāpes muguras lejasdaļā, ceļu sāpes u.c.",
    type: "select_choice",
    identifier: "q49",
    options: [
      { label: "Gandrīz katru dienu", value: "1" },
      { label: "Bieži", value: "2" },
      { label: "50 % no laika", value: "3" },
      { label: "Dažreiz", value: "4" },
      { label: "Gandrīz nekad", value: "5" }
    ],
    weight: "0.8"
  },

  {
    category: "physical activity",
    label: "Jautājums 50",
    text: "Cik stundas dienā Tu parasti pavadi sēžot?",
    type: "select_choice",
    identifier: "q50",
    options: [
      { label: "Vairāk nekā 8 stundas", value: "1" },
      { label: "6 - 8 stundas", value: "3" },
      { label: "Mazāk nekā 6 stundas", value: "5" }
    ],
    weight: "1"
  },

  {
    category: "physical activity",
    label: "Jautājums 51",
    text: "Pēdējo divu nedēļu laikā, cik stundas kopumā Tu pavadīji, nodarbojoties ar fiziskām aktivitātēm?",
    type: "select_choice",
    identifier: "q51",
    options: [
      { label: "Vairāk nekā 12 stundas", value: "5" },
      { label: "10 - 12 stundas", value: "4" },
      { label: "8 - 10 stundas", value: "3" },
      { label: "5 - 8 stundas", value: "2" },
      { label: "Mazāk nekā 5 stundas", value: "1" }
    ],
    weight: "1"
  },

  {
    category: "body composition",
    label: "Jautājums 52",
    text: "Kāds ir Tavs dzimums?",
    type: "radio",
    identifier: "q52",
    options: { Vīrietis: "Male", Sieviete: "Female" },
    weight: "0"
  },

  {
    category: "body composition",
    label: "Jautājums 53",
    text: "Kāds ir Tavs vecums?",
    type: "text",
    identifier: "q53",
    weight: "0",
    response: "gadi"
  },

  {
    category: "body composition",
    label: "Jautājums 54",
    text: "Kāds ir Tavs svars (kg)?",
    type: "text",
    identifier: "q54",
    weight: "1",
    response: "kg"
  }, // score / weight for BMI

  {
    category: "body composition",
    label: "Jautājums 55",
    text: "Kāds ir Tavs garums (cm)?",
    type: "text",
    identifier: "q55",
    weight: "2",
    response: "cm"
  }, // score / weight for FFMI

  {
    category: "body composition",
    label: "Jautājums 56",
    text: "Kāds ir Tavs vidukļa apkārtmērs (cm)?",
    note: "*Mēri apkārtmēru tieši virs nabas",
    type: "text",
    identifier: "q56",
    weight: "2",
    response: "cm"
  }, // score / weight for WHR

  {
    category: "body composition",
    label: "Jautājums 57",
    text: "Kāds ir Tavs gurnu apkārtmērs (cm)?",
    note: "*Mēri apkārtmēru līmenī, kur atrodas bikšu aizmugurējās kabatas",
    type: "text",
    identifier: "q57",
    weight: "0",
    response: "cm"
  },

  {
    category: "body composition",
    label: "Jautājums 58",
    text: "Kurš no šiem attēliem vislabāk atspoguļo Tavu šī brīža formu?",
    type: "radio",
    identifier: "q58",
    options: { 1: "1", 2: "2", 3: "3", 4: "4", 5: "5", 6: "6", 7: "7", 8: "8" },
    weight: "1"
  }, // score / weight for BFR

  {
    category: "digestion",
    label: "Jautājums 59",
    text: "Cik bieži Tu jūti diskomfortu gremošanas traktā?",
    note: "*Piemēram, vēdera uzpūšanos, sliktu dūšu, gāzes vēderā, sāpes vēderā u.c.",
    type: "select_choice",
    identifier: "q59",
    options: [
      { label: "Gandrīz katru dienu", value: "1" },
      { label: "Bieži", value: "2" },
      { label: "50 % no laika", value: "3" },
      { label: "Dažreiz", value: "4" },
      { label: "Gandrīz nekad", value: "5" }
    ],
    weight: "2"
  },

  {
    category: "digestion",
    label: "Jautājums 60",
    text: "Cik bieži Tev ir vēdera izeja?",
    type: "select_choice",
    identifier: "q60",
    options: [
      { label: "Retāk nekā katru otro dienu", value: "1" },
      { label: "Katru otro dienu", value: "1" },
      { label: "Reizi dienā", value: "5" },
      { label: "2 - 3 reizes dienā", value: "5" },
      { label: "Vairāk nekā 3 reizes dienā", value: "1" }
    ],
    weight: "1"
  },

  {
    category: "digestion",
    label: "Jautājums 61",
    text: "Kurš no tipiem visbiežāk atbilst Tavai situācijai?",
    type: "radio",
    identifier: "q61",
    options: {
      "Type 1": "1",
      "Type 2": "2",
      "Type 3": "3",
      "Type 4": "4",
      "Type 5": "5",
      "Type 6": "6",
      "Type 7": "7"
    },
    weight: "1"
  },

  {
    category: "digestion",
    label: "Jautājums 62",
    text: "Vai Tu bieži jūti īpaši lielu apetīti/vēlmi pēc konkrēta ēdiena, piemēram, šokolādes, čipsiem, saldējuma, konfektēm utt.?",
    type: "radio",
    identifier: "q62",
    options: { Jā: "1", Nē: "5" },
    weight: "0.5"
  },

  {
    category: "digestion",
    label: "Jautājums 63",
    text: "Vai Tu bieži jūties, ka Tu nevaldi pār ēdienu un savu apetīti?",
    type: "radio",
    identifier: "q63",
    options: { Jā: "1", Nē: "5" },
    weight: "0.5"
  },

  {
    category: "digestion",
    label: "Jautājums 64",
    text:
      "Kurš no šiem apgalvojumiem vislabāk atbilst sajūtām Tavā vēderā un gremošanas traktā?",
    type: "select_choice",
    identifier: "q64",
    options: [
      {
        label:
          "Izjūtu diskomfortu un sāpēs vēderā katru dienu, un tas būtiski samazina manu dzīves kvalitāti",
        value: "1"
      },
      {
        label:
          "Bieži jūtu diskomfortu vēderā, bet varu ar to sadzīvot",
        value: "2"
      },
      {
        label:
          "Reizēm izjūtu nelielu diskomfortu vēderā, taču tas neietekmē manu kopēju pašsajūtu",
        value: "3"
      },
      {
        label:
          "Reti jūtu savu vēderu, tikai reizēs, kad esmu apēdis kaut ko nelāgu vai ļoti daudz",
        value: "4"
      },
      { label: "Gandrīz nekad nepieredzu problēmas ar gremošanu", value: "5" }
    ],
    weight: "2"
  },

  {
    category: "digestion",
    label: "Jautājums 65",
    text: "Kurš no šiem apgalvojumiem vislabāk atbilst Tavai situācijai?",
    type: "select_choice",
    identifier: "q65",
    options: [
      {
        label:
          "Esmu ļoti jutīgs pret daudziem ēdieniem un varu lietot tikai ļoti ierobežotu produktu klāstu",
        value: "1"
      },
      {
        label:
          "Esmu jutīgs pret dažiem produktiem, taču spēju pielāgot savu ēdienkarti atbilstoši, un tas nesagādā problēmas",
        value: "3"
      },
      { label: "Varu brīvi lietot uzturā visus produktus", value: "5" }
    ],
    weight: "2"
  },

  {
    category: "nutrition quality",
    label: "Jautājums 66",
    text: "Vai 80% no Tavām maltītēm ir gatavotas mājās?",
    type: "radio",
    identifier: "q66",
    options: { Jā: "5", Nē: "1" },
    weight: "1"
  },

  {
    category: "nutrition quality",
    label: "Jautājums 67",
    text: "Vai Tu pievieno cukuru saviem dzērieniem (tējai, kafijai)?",
    type: "radio",
    identifier: "q67",
    options: { Jā: "1", Nē: "5" },
    weight: "1"
  },

  {
    category: "nutrition quality",
    label: "Jautājums 68",
    text:
      "Kurus no šiem produktiem Tu regulāri iekļauj savā ēdienkartē (vismaz reizi nedēļā)?",
    type: "checkbox",
    identifier: "q68",
    options: [
      { label: "Gurķi", value: "gurki" },
      { label: "Tomāti", value: "tomati" },
      { label: "Kartupeļi", value: "kartupeli" },
      { label: "Brokoļi", value: "brokoli" },
      { label: "Spināti", value: "spinati" },
      { label: "Burkāni", value: "burkani" },
      { label: "Cukini", value: "cukini" },
      { label: "Saldie kartupeļi", value: "saldie kartupeli" },
      { label: "Lapu salāti", value: "lapu salati" },
      { label: "Pupiņas", value: "pupinas" },
      { label: "Zirņi", value: "zirni" },
      { label: "Sojas pupiņas", value: "sojas_pupinas" },
      { label: "Apelsīni", value: "apelsini" },
      { label: "Āboli", value: "aboli" },
      { label: "Banāni", value: "banani" },
      { label: "Ogas", value: "ogas" },
      { label: "Puķkāposts", value: "pukkaposts" },
      { label: "Briseles kāposti", value: "birseles kaposti" },
      { label: "Ķirbis", value: "kirbis" },
      { label: "Kukurūza", value: "kukuruza" },
      { label: "Svaigie garšaugi", value: "svaigie garsaugi" },
      { label: "Baklažāni", value: "baklazani" },
      { label: "Sēnes", value: "senes" },
      { label: "Ananāss", value: "ananass" },
      { label: "Melone", value: "melone" },
      { label: "Sīpoli", value: "sipoli" },
      { label: "Ķiploki", value: "kiploki" },
      { label: "Rieksti", value: "rieksti" },
      { label: "Čia sēklas", value: "cia seklas" },
      { label: "Linsēklas", value: "linseklas" },
      { label: "Kāposti", value: "kaposti" },
      { label: "Rukola", value: "rukola" },
      { label: "Avokado", value: "avokado" },
      { label: "Citrons", value: "citrons" },
      { label: "Olīves", value: "olives" },
      { label: "Auzu pārslas", value: "auzau parslas" },
      { label: "Lēcas", value: "lecas" },
      { label: "Bietes", value: "bietes" },
    ],
    weight: "1"
  },

  {
    category: "nutrition quality",
    label: "Jautājums 69",
    text:
      "Vai Tu katrā ēdienreizē iekļauj vismaz 3 dažādus augu valsts produktus?",
    type: "radio",
    identifier: "q69",
    options: { Jā: "5", Nē: "1" },
    weight: "1"
  },

  {
    category: "nutrition quality",
    label: "Jautājums 70",
    text:
      "Kuru no šiem produktiem Tu regulāri iekļauj savā ēdienkartē (vismaz reizi nedēļā)?",
    type: "checkbox",
    identifier: "q70",
    options: [
      { label: "Pica", value: "pica" },
      { label: "Burgeri", value: "burgeri" },
      { label: "Frī kartupeļi", value: "fri kartupeli" },
      { label: "Bulciņas", value: "bulcinas" },
      { label: "Čipsi", value: "cipsi" },
      { label: "Konfektes", value: "konfektes" },
      { label: "Cepumi", value: "cepumi" },
      { label: "Gaļas parstrādājumi", value: "galas parstradajumi" },
      { label: "Saldējums", value: "saldejums" },
      { label: "Sušī", value: "susi" },
      { label: "Kebabs", value: "kebabs" },
      { label: "Ķīniešu ēdiens", value: "kiniesu ediens" },
      { label: "Šokolādes batoniņi", value: "sokolades batonini" },
      { label: "Saldinati dzērieni", value: "saldinati dzerieni" },
      { label: "Sulas", value: "sulas" },
      { label: "Gatavas mērces", value: "gatavas merces" },
      { label: "Neviens no minētajiem", value: "none" }
    ],
    weight: "1"
  },

  {
    category: "nutrition quality",
    label: "Jautājums 71",
    text:
      "Kuru no šiem produktiem Tu regulāri iekļauj savā ēdienkartē (vismaz reizi nedēļā)?",
    type: "checkbox",
    identifier: "q71",
    options: [
      { label: "Biezpiens", value: "biezpiens" },
      { label: "Vista", value: "vista" },
      { label: "Cūkgaļa", value: "cukgala" },
      { label: "Leillopa gaļa", value: "liellopa gala" },
      { label: "Olas", value: "olas" },
      { label: "Tofu", value: "tofu" },
      { label: "Proteīna pulveris", value: "proteina pulveris" },
      { label: "Jogurts", value: "jogurts" },
      { label: "Pākšaugi (pupas, zirņi, lēcas)", value: "paskaugi" },
      { label: "Tuncis", value: "tuncis" },
      { label: "Lasis", value: "lasis" },
      { label: "Garneles", value: "garneles" },
      { label: "Citas zivis", value: "citas zivis" },
      { label: "Sojas pupiņas", value: "sojas pupinas" },
      { label: "Siers", value: "siers" }
    ],
    weight: "1"
  },

  {
    category: "nutrition quality",
    label: "Jautājums 72",
    text:
      "Vai Tu katrā ēdienreizē iekļauj vismaz vienu no iepriekš minētajiem proteīna avotiem?",
    type: "radio",
    identifier: "q72",
    options: { Jā: "5", Nē: "1" },
    weight: "1"
  },

  {
    category: "nutrition quality",
    label: "Jautājums 73",
    text: "Cik litrus ūdens Tu parasti izdzer dienā?",
    type: "text",
    identifier: "q73",
    weight: "0.8",
    response: "L"
  },

  {
    category: "nutrition quality",
    label: "Jautājums 74",
    text:
      "Vai Tu regulāri ēd vai dzer (izņemot ūdeni vai zālīšu tēju) pēc 19:00?",
    type: "radio",
    identifier: "q74",
    options: { Jā: "1", Nē: "5" },
    weight: "1"
  },

  {
    category: "stress level",
    label: "Jautājums 75",
    text: "Cik bieži Tu jūties satraukts/stresains?",
    type: "select_choice",
    identifier: "q75",
    options: [
      { label: "Vairākas reizes dienā", value: "1" },
      { label: "Reizi dienā", value: "2" },
      { label: "Reizi pāris dienās", value: "3" },
      { label: "Reizi nedēļā", value: "4" },
      { label: "Retāk nekā reizi nedēļā", value: "5" }
    ],
    weight: "1"
  },

  {
    category: "stress level",
    label: "Jautājums 76",
    text: "Cik bieži jūti trauksmes sajūtu?",
    type: "select_choice",
    identifier: "q76",
    options: [
      { label: "Vairākas reizes dienā", value: "1" },
      { label: "Reizi dienā", value: "2" },
      { label: "Reizi pāris dienās", value: "3" },
      { label: "Reizi nedēļā", value: "4" },
      { label: "Retāk nekā reizi nedēļā", value: "5" }
    ],
    weight: "1"
  },

  {
    category: "stress level",
    label: "Jautājums 77",
    text: "Cik bieži Tu izjūti īpaši lielu motivācijas trūkumu?",
    type: "select_choice",
    identifier: "q77",
    options: [
      { label: "Vairākas reizes dienā", value: "1" },
      { label: "Reizi dienā", value: "2" },
      { label: "Reizi pāris dienās", value: "3" },
      { label: "Reizi nedēļā", value: "4" },
      { label: "Retāk nekā reizi nedēļā", value: "5" }
    ],
    weight: "1"
  },

  {
    category: "stress level",
    label: "Jautājums 78",
    text: "Cik bieži Tu jūties noskumis/bēdīgs vai apātisks?",
    type: "select_choice",
    identifier: "q78",
    options: [
      { label: "Vairākas reizes dienā", value: "1" },
      { label: "Reizi dienā", value: "2" },
      { label: "Reizi pāris dienās", value: "3" },
      { label: "Reizi nedēļā", value: "4" },
      { label: "Retāk nekā reizi nedēļā", value: "5" }
    ],
    weight: "1"
  },

  {
    category: "stress level",
    label: "Jautājums 79",
    text:
      "Augošā skalā no 0 % līdz 100 %, cik apmierināts Tu esi ar savu pašreizējo nodarbošanos/darbu?",
    type: "slider",
    identifier: "q79",
    weight: "1"
  },

  {
    category: "stress level",
    label: "Jautājums 80",
    text:
      "Augošā skalā no 0 % līdz 100 %, cik apmierināts Tu esi ar savu pašreizējo dzīves vidi?",
    type: "slider",
    identifier: "q80",
    weight: "1"
  },

  {
    category: "stress management",
    label: "Jautājums 81",
    text:
      "Cik bieži Tu iesaisties aktivitātēs, kas šķiet mentāli vai fiziski grūtas un prasa Tavu piepūli?",
    note:
      "*Piemēram, grūtas fiziskas aktivitātes, mācīšanās, sarežģītu problēmu risināšana utt.",
    type: "select_choice",
    identifier: "q81",
    options: [
      { label: "Retāk nekā reizi nedēļā", value: "1" },
      { label: "Reizi nedēļā", value: "2" },
      { label: "Reizi pāris dienās", value: "3" },
      { label: "Reizi dienā", value: "4" },
      { label: "Vairākas reizes dienā", value: "5" }
    ],
    weight: "1"
  },

  {
    category: "stress management",
    label: "Jautājums 82",
    text: "Cik bieži Tu pavadi laiku dabā, svaigā gaisā?",
    type: "select_choice",
    identifier: "q82",
    options: [
      { label: "Vairākas reizes dienā", value: "5" },
      { label: "Reizi dienā", value: "4" },
      { label: "Reizi pāris dienās", value: "3" },
      { label: "Reizi nedēļā", value: "2" },
      { label: "Retāk nekā reizi nedēļā", value: "1" }
    ],
    weight: "1"
  },

  {
    category: "stress management",
    label: "Jautājums 83",
    text:
      "Cik bieži Tu velti laiku, lai darītu kaut ko nomierinošu (kas Tevi atbrīvo no stresa)?",
    type: "select_choice",
    identifier: "q83",
    options: [
      { label: "Vairākas reizes dienā", value: "5" },
      { label: "Reizi dienā", value: "4" },
      { label: "Reizi pāris dienās", value: "3" },
      { label: "Reizi nedēļā", value: "2" },
      { label: "Retāk nekā reizi nedēļā", value: "1" }
    ],
    weight: "1"
  },

  {
    category: "stress management",
    label: "Jautājums 84",
    text: "Cik bieži Tu atliec laiku, lai būtu kopā ar ģimeni/draugiem?",
    type: "select_choice",
    identifier: "q84",
    options: [
      { label: "Gandrīz nekad", value: "1" },
      { label: "Ne tik bieži, kā es gribētu", value: "3" },
      { label: "Kad man ir vēlēšanās", value: "5" }
    ],
    weight: "1"
  },

  {
    category: "stress management",
    label: "Jautājums 85",
    text: "Cik bieži Tu velti laiku saviem vaļaspriekiem/hobijiem?",
    type: "select_choice",
    identifier: "q85",
    options: [
      { label: "Gandrīz nekad", value: "1" },
      { label: "Reti", value: "2" },
      { label: "Kad atliek laiks", value: "3" },
      { label: "Pietiekami bieži", value: "4" },
      { label: "Regulāri", value: "5" }
    ],
    weight: "1"
  },

  {
    category: "stress management",
    label: "Jautājums 86",
    text: "Vai Tu jūti atbalstu no savas ģimenes un/vai draugiem Tavu mērķu sasniegšanā?",
    type: "radio",
    identifier: "q86",
    options: { Jā: "5", Nē: "1" },
    weight: "1"
  },

  {
    category: "stress management",
    label: "Jautājums 87",
    text: "Vai Tu regulāri smēķē?",
    type: "radio",
    identifier: "q87",
    options: { Jā: "1", Nē: "5" },
    weight: "1"
  },

  {
    category: "stress management",
    label: "Jautājums 88",
    text:
      "Vai Tu regulāri lieto citas apreibinošas vielas (vismaz reizi mēnesī)?",
    type: "radio",
    identifier: "q88",
    options: { Jā: "1", Nē: "5" },
    weight: "1"
  },

  {
    category: "medical history",
    label: "Jautājums 89",
    text:
      "Vai Tev kādreiz ir noteikta kāda slimība vai diagnoze?",
    note: "*Ja, jā, lūdzu, apraksti to komentāru sadaļā",
    type: "radio",
    identifier: "q89",
    options: { Jā: "1", Nē: "5" },
    weight: "2"
  },

  {
    category: "medical history",
    label: "Jautājums 90",
    text: "Vai Tu regulāri lieto recepšu medikamentus?",
    note: "*Ja, jā, lūdzu, komentāru sadaļā nosauc, kādus medikamentus lieto",
    type: "radio",
    identifier: "q90",
    options: { Jā: "1", Nē: "5" },
    weight: "1"
  },

  {
    category: "medical history",
    label: "Jautājums 91",
    text:
      "Cik bieži Tu lieto bezrecepšu medikamentus, lai atvieglotu, piemēram, sāpes, alerģijas, bezmiegu, trauksmi vai kādu citu problēmu?",
    type: "select_choice",
    identifier: "q91",
    options: [
      { label: "Vairākas reizes nedēļā", value: "1" },
      { label: "Reizi nedēļā", value: "2" },
      { label: "Reizi mēnesī", value: "3" },
      { label: "Pāris reizes gadā", value: "4" },
      { label: "Reizi gadā vai retāk", value: "5" }
    ],
    weight: "1"
  },

  {
    category: "medical history",
    label: "Jautājums 92",
    text: "Vai Tu regulāri lieto uztura bagātinātājus?",
    note: "*Ja, jā, lūdzu, komentāru sadaļā nosauc, kādus uztura bagātinātājus lieto",
    type: "radio",
    identifier: "q92",
    options: { Jā: "1", Nē: "5" },
    weight: "1"
  },

  {
    category: "medical history",
    label: "Jautājums 93",
    text: "Vai Tev ir kādas alerģijas?",
    note: "*Ja, jā, lūdzu, komentāru sadaļā nosauc, kādas",
    type: "radio",
    identifier: "q93",
    options: { Jā: "1", Nē: "5" },
    weight: "1"
  },

  {
    category: "medical history",
    label: "Jautājums 94",
    text:
      "Vai kāds no Taviem ģimenes locekļiem (vecāki, vecvecāki, brāļi/māsas) ir cietis insultu vai infarktu?",
    note: "*Ja, jā, lūdzu, komentāru sadaļā apraksti, kurš ģimenes loceklis, un kādā vecumā",
    type: "radio",
    identifier: "q94",
    options: { Jā: "1", Nē: "5" },
    weight: "2"
  },

  {
    category: "medical history",
    label: "Jautājums 95",
    text: "Vai kāds no Taviem ģimenes locekļiem (vecāki, vecvecāki, brāļi/māsas) ir ticis diagnosticēts ar vēzi?",
    note: "*Ja, jā, lūdzu, komentāru sadaļā apraksti, kurš ģimenes loceklis, un kādā vecumā",
    type: "radio",
    identifier: "q95",
    options: { Jā: "1", Nē: "5" },
    weight: "1"
  },

  {
    category: "medical history",
    label: "Jautājums 96",
    text: "Vai kāds no Taviem ģimenes locekļiem (vecāki, vecvecāki, brāļi/māsas) ir ticis diagnosticēts ar cukura diabētu?",
    note: "*Ja, jā, lūdzu, komentāru sadaļā apraksti, kurš ģimenes loceklis, un kādā vecumā",
    type: "radio",
    identifier: "q96",
    options: { Jā: "1", Nē: "5" },
    weight: "1"
  },

  {
    category: "medical history",
    label: "Jautājums 97",
    text:
      "Vai kāds no Taviem ģimenes locekļiem (vecāki, vecvecāki, brāļi/māsas) ir ticis diagnosticēts ar Alzheimera slimību, Parkinsona slimību vai demensi?",
    note: "*Ja, jā, lūdzu, komentāru sadaļā apraksti, kurš ģimenes loceklis, un kādā vecumā",
    type: "radio",
    identifier: "q97",
    options: { Jā: "1", Nē: "5" },
    weight: "1"
  },

  {
    category: "medical history",
    label: "Jautājums 98",
    text: "Cik bieži Tu slimo / esi saaukstējies?",
    type: "select_choice",
    identifier: "q98",
    options: [
      { label: "Reizi mēnesī", value: "1" },
      { label: "Reizi divos mēnešos", value: "2" },
      { label: "Dažas reizes gadā", value: "3" },
      { label: "Divreiz gadā", value: "4" },
      { label: "Reizi gadā vai retāk", value: "5" }
    ],
    weight: "1"
  },

  {
    category: "medical history",
    label: "Jautājums 99",
    text:
      "Augošā skalā no 0 % līdz 100 %, kā Tu vērtētu savu kopējo veselības un pašsajūtas stāvokli?",
    type: "slider",
    identifier: "q99"
  }
];

export default QuestionListLv;
