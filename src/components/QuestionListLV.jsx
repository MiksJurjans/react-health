const QuestionList = [
  {
    category: "sleep",
    label: "Question 1",
    text:
      "Would you say you have a consistent wake-up and bed-time schedule during most of the working days?",
    note:
      "*Meaning your wake-up and bed-time do not fluctuate more than 30 min 80% of the time",
    type: "radio",
    identifier: "q1",
    options: { Yes: "1", No: "5" },
    weight: "3",
    comment: "Your comment:"
  },

  {
    category: "sleep",
    label: "Question 2",
    text: "At what time do you go to bed on week-days?",
    type: "time",
    identifier: "q2",
    value: "22:00 AM",
    weight: "1"
  }, // weight / score is for hours slept on weekdays

  {
    category: "sleep",
    label: "Question 3",
    text: "At what time do you wake up on week-days?",
    type: "time",
    identifier: "q3",
    value: "07:00",
    weight: "0.8"
  }, // weight / score is for hours slept on weekends

  {
    category: "sleep",
    label: "Question 4",
    text:
      "Does your weekend schedule differ significantly compared to your work week schedule?",
    note:
      "*Meaning your wake-up and/or bedtime on working days differ for more than 1,5 hours compared to weekends",
    type: "radio",
    identifier: "q4",
    options: { Yes: "1", No: "5" },
    weight: "1",
    comment: "Your comment:"
  },

  {
    category: "sleep",
    label: "Question 5",
    text: "At what time do you go to bed on week-ends?",
    type: "time",
    identifier: "q5",
    value: "22:00",
    weight: "0.8"
  }, // score / weight is for differing wake-up time between weekdays and weekends

  {
    category: "sleep",
    label: "Question 6",
    text: "At what time do you wake up on week-ends?",
    type: "time",
    identifier: "q6",
    value: "07:00",
    weight: "0.8"
  }, // score / weight is for differing wake-up time between weekdays and weekends

  {
    category: "sleep",
    label: "Question 7",
    text: "How many hours would you say you sleep on average?",
    type: "select_choice",
    identifier: "q7",
    options: [
      { label: "More than 8 hours", value: "5" },
      { label: "Between 7 and 8 hours", value: "3" },
      { label: "Less than 7 hours", value: "1" }
    ],
    weight: "3",
    comment: "Your comment:"
  },

  {
    category: "sleep",
    label: "Question 8",
    text: "Do you snore?",
    type: "radio",
    identifier: "q8",
    options: { Yes: "1", No: "5", "Don't know": "0" },
    weight: "0.8",
    comment: "Your comment:"
  },

  {
    category: "sleep",
    label: "Question 9",
    text: "Do you regularly wake up feeling congested or with a stuffy nose?",
    type: "radio",
    identifier: "q9",
    options: { Yes: "1", No: "5" },
    weight: "0.8",
    comment: "Your comment:"
  },

  {
    category: "sleep",
    label: "Question 10",
    text: "Do you wake up feeling tired most of the days?",
    type: "radio",
    identifier: "q10",
    options: { Yes: "1", No: "5" },
    weight: "0.8",
    comment: "Your comment:"
  },

  {
    category: "sleep",
    label: "Question 11",
    text: "How would you rate your sleep (how well do you sleep)?",
    type: "select_choice",
    identifier: "q11",
    options: [
      { label: "Great", value: "5" },
      { label: "Mostly good", value: "4" },
      { label: "Fine, but could be better", value: "3" },
      { label: "Quite bad", value: "2" },
      { label: "Very poor", value: "1" }
    ],
    weight: "1",
    comment: "Your comment:"
  },

  {
    category: "meal schedule",
    label: "Question 12",
    text:
      "Would you say you have a consistent meal schedule during most of the working days?",
    note:
      "*Meaning you eat at the same time most of the days with no more than 1 hour difference between days",
    type: "radio",
    identifier: "q12",
    options: { Yes: "5", No: "1" },
    weight: "2",
    comment: "Your comment:"
  },

  {
    category: "meal schedule",
    label: "Question 13",
    text: "At what time do you have your last bite on working days?",
    type: "time",
    identifier: "q13",
    value: "19:00",
    weight: "1"
  }, // score / weight for meals before bedtime on weekdays

  {
    category: "meal schedule",
    label: "Question 14",
    text: "At what time do you have your first meal on working days?",
    type: "time",
    identifier: "q14",
    value: "08:00",
    weight: "1"
  }, // score / weight for hours spent fasting on weekdays

  {
    category: "meal schedule",
    label: "Question 15",
    text:
      "Would you say your meal schedule is significantly different on weekends compared to working days?",
    note:
      "*Meaning, your meal times on weekends differ for more than 2 hours compared to working days",
    type: "radio",
    identifier: "q15",
    options: { Yes: "1", No: "5" },
    weight: "0.5",
    comment: "Your comment:"
  },

  {
    category: "meal schedule",
    label: "Question 16",
    text: "At what time do you have your first meal on week-ends?",
    note: "*If it differs state the very earliest time.",
    type: "time",
    identifier: "q16",
    value: "09:00",
    weight: "0.5"
  }, // score / weight for the first meal time on weekdays compared to weekends

  {
    category: "meal schedule",
    label: "Question 17",
    text: "At what time do you have your last meal on week-ends?",
    note: "*If it differs state the very latest time.",
    type: "time",
    identifier: "q17",
    value: "20:00",
    weight: "0.5"
  }, // score / weight for the last meal time on weekdays compared to weekends

  {
    category: "meal schedule",
    label: "Question 18",
    text: "Which of these statements best describes your eating schedule?",
    type: "select_choice",
    identifier: "q18",
    options: [
      {
        label:
          "I always eat at the same times and all my meals are pre-planned",
        value: "5"
      },
      {
        label:
          "Most of my meals are consistent and planned. Exceptions occur sometimes",
        value: "4"
      },
      {
        label:
          "I try to have a consistent schedule, but I often get busy and can stick to it",
        value: "3"
      },
      {
        label:
          "I have one consistent meal a day, but the rest depends on the situation",
        value: "2"
      },
      { label: "I dont have one. I eat at random times", value: "1" }
    ],
    weight: "2",
    comment: "Your comment:"
  },

  {
    category: "caffeine consumption",
    label: "Question 19",
    text: "Do you regularly consume caffeine?",
    type: "radio",
    identifier: "q19",
    options: { Yes: "0", No: "5" },
    weight: "1",
    comment: "Your comment:"
  },

  {
    category: "caffeine consumption",
    label: "Question 20",
    text: "How many caffeinated beverages do you consume per day?",
    type: "select_choice",
    identifier: "q20",
    options: [
      { label: "2 or less", value: "5" },
      { label: "3", value: "3" },
      { label: "More than 3", value: "1" }
    ],
    weight: "1",
    comment: "Your comment:"
  },

  {
    category: "caffeine consumption",
    label: "Question 21",
    text:
      "How long (in hours) after waking up do you usually have your first caffeinated beverage?",
    note: "*If it differs, choose the shortest time.",
    type: "select_choice",
    identifier: "q21",
    options: [
      { label: "> 1 hour", value: "5" },
      { label: "< 1 hour", value: "1" }
    ],
    weight: "0.5",
    comment: "Your comment:"
  },

  {
    category: "caffeine consumption",
    label: "Question 22",
    text:
      "How long (in hours) before going to bed do you usually have your last caffeinated beverage?",
    note: "*If it differs, choose the shortest time.",
    type: "select_choice",
    identifier: "q22",
    options: [
      { label: "More than 10 hours", value: "5" },
      { label: "8 - 10 hours", value: "3" },
      { label: "Less than 8 hours", value: "1" }
    ],
    weight: "2",
    comment: "Your comment:"
  },

  {
    category: "caffeine consumption",
    label: "Question 23",
    text:
      "Do you regularly spend at least 10 minutes outside around sunrise time?",
    note: "*In the time interval of around 1 hour before or after the sunrise",
    type: "radio",
    identifier: "q23",
    options: { Yes: "5", No: "1" },
    weight: "1",
    comment: "Your comment:"
  },

  {
    category: "bright light viewing",
    label: "Question 24",
    text:
      "Do you regularly spend at least 10 minutes outside around sunset time?",
    note: "*In the time interval of around 1 hour before or after the sunset",
    type: "radio",
    identifier: "q24",
    options: { Yes: "5", No: "1" },
    weight: "0.8",
    comment: "Your comment:"
  },

  {
    category: "bright light viewing",
    label: "Question 25",
    text:
      "How many minutes a day (minimum) do you spend outdoors on working days?",
    type: "select_choice",
    identifier: "q25",
    options: [
      { label: "More than 60 minutes", value: "5" },
      { label: "30 - 60 minutes", value: "3" },
      { label: "Less than 30 minutes", value: "1" }
    ],
    weight: "0.8",
    comment: "Your comment:"
  },

  {
    category: "bright light viewing",
    label: "Question 26",
    text:
      "When (how many minutes) before bedtime is the last time you look at your phone, computer or TV?",
    note: "*If it differs, state the shortest time.",
    type: "select_choice",
    identifier: "q26",
    options: [
      { label: "More than 60 minutes", value: "1" },
      { label: "30 - 60 minutes", value: "3" },
      { label: "Less than 30 minutes", value: "5" }
    ],
    weight: "1",
    comment: "Your comment:"
  },

  {
    category: "alcohol consumption",
    label: "Question 27",
    text: "Do you drink alcohol more than twice a month?",
    type: "radio",
    identifier: "q27",
    options: { Yes: "1", No: "5" },
    weight: "1",
    comment: "Your comment:"
  },

  {
    category: "alcohol consumption",
    label: "Question 28",
    text:
      "When consuming alcohol, how many alcoholic drinks per week do you consume?",
    type: "select_choice",
    identifier: "q28",
    options: [
      { label: "1 - 2", value: "3" },
      { label: "> 3", value: "1" }
    ],
    weight: "1",
    comment: "Your comment:"
  },

  {
    category: "alcohol consumption",
    label: "Question 29",
    text: "How often (how many times a week) do you consume alcohol?",
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
    label: "Question 30",
    text:
      "How often do you have difficulties waking up in the morning with the alarm?",
    type: "select_choice",
    identifier: "q30",
    options: [
      { label: "Every Week", value: "1" },
      { label: "Often", value: "2" },
      { label: "50 % of the time", value: "3" },
      { label: "Rarely", value: "4" },
      { label: "Never", value: "5" }
    ],
    weight: "1"
  },

  {
    category: "energy levels",
    label: "Question 31",
    text: "How often do you feel like you could you fall asleep before 11am?",
    type: "select_choice",
    identifier: "q31",
    options: [
      { label: "Almost Every Day", value: "1" },
      { label: "Often", value: "2" },
      { label: "50 % of the time", value: "3" },
      { label: "Rarely", value: "4" },
      { label: "Almost Never", value: "5" }
    ],
    weight: "1"
  },

  {
    category: "energy levels",
    label: "Question 32",
    text: "How rested and refreshed do you feel when waking up?",
    type: "select_choice",
    identifier: "q32",
    options: [
      { label: "Not At All", value: "1" },
      { label: "Poorly", value: "2" },
      { label: "Fine", value: "3" },
      { label: "Good", value: "4" },
      { label: "Very Rested", value: "5" }
    ],
    weight: "1"
  },

  {
    category: "energy levels",
    label: "Question 33",
    text:
      "How often do you feel tired, sleepy or drowsy during the day, even when you are trying to stay alert and focused?",
    type: "select_choice",
    identifier: "q33",
    options: [
      { label: "Almost Every Day", value: "1" },
      { label: "Often", value: "2" },
      { label: "50 % of the time", value: "3" },
      { label: "Rarely", value: "4" },
      { label: "Almost Never", value: "5" }
    ],
    weight: "1"
  },

  {
    category: "energy levels",
    label: "Question 34",
    text:
      "How often do you feel like you need caffeine or other stimulants to get through the day?",
    type: "select_choice",
    identifier: "q34",
    options: [
      { label: "Almost Every Day", value: "1" },
      { label: "Often", value: "2" },
      { label: "50 % of the time", value: "3" },
      { label: "Rarely", value: "4" },
      { label: "Almost Never", value: "5" }
    ],
    weight: "1"
  },

  {
    category: "energy levels",
    label: "Question 35",
    text: "How often do you have trouble concentrating or remembering things?",
    type: "select_choice",
    identifier: "q35",
    options: [
      { label: "Almost Every Day", value: "1" },
      { label: "Often", value: "2" },
      { label: "50 % of the time", value: "3" },
      { label: "Rarely", value: "4" },
      { label: "Almost Never", value: "5" }
    ],
    weight: "1"
  },

  {
    category: "energy levels",
    label: "Question 36",
    text: "How often do you feel irritable or moody?",
    type: "select_choice",
    identifier: "q36",
    options: [
      { label: "Almost Every Day", value: "1" },
      { label: "Often", value: "2" },
      { label: "50 % of the time", value: "3" },
      { label: "Rarely", value: "4" },
      { label: "Almost Never", value: "5" }
    ],
    weight: "1"
  },

  {
    category: "energy levels",
    label: "Question 37",
    text:
      "How often have you fallen asleep unintentionally during the day, such as while sitting in a meeting or driving?",
    type: "select_choice",
    identifier: "q37",
    options: [
      { label: "Almost Every Day", value: "1" },
      { label: "Often", value: "2" },
      { label: "50 % of the time", value: "3" },
      { label: "Rarely", value: "4" },
      { label: "Almost Never", value: "5" }
    ],
    weight: "1"
  },

  {
    category: "energy levels",
    label: "Question 38",
    text:
      "How often do you have trouble falling asleep at night or staying asleep throughout the night?",
    type: "select_choice",
    identifier: "q38",
    options: [
      { label: "Almost Every Day", value: "1" },
      { label: "Often", value: "2" },
      { label: "50 % of the time", value: "3" },
      { label: "Rarely", value: "4" },
      { label: "Almost Never", value: "5" }
    ],
    weight: "1"
  },

  {
    category: "energy levels",
    label: "Question 39",
    text: "How would you rate your daily energy levels?",
    type: "select_choice",
    identifier: "q39",
    options: [
      { label: "I feel tired almost every day", value: "1" },
      {
        label: "I often dont have enough energy to go through the day",
        value: "2"
      },
      { label: "I lack energy 50 % of the time", value: "3" },
      { label: "I mostly have enough energy", value: "4" },
      { label: "I feel great almost every day", value: "5" }
    ],
    weight: "1"
  },

  {
    category: "physical activity",
    label: "Question 40",
    text: "On average how many steps a day do you take?",
    type: "select_choice",
    identifier: "q40",
    options: [
      { label: "Less than 8000", value: "1" },
      { label: "8000 - 10 000", value: "3" },
      { label: "10 000 or more", value: "5" }
    ],
    weight: "1"
  },

  {
    category: "physical activity",
    label: "Question 41",
    text:
      "Do you engage in purpouseful exercise regularly (at least twice a week)?",
    note:
      "*Such as going to the gym, taking part in a fitness or yoga class, running, dancing, practicing a sport, martial arts, cycling, etc.",
    type: "radio",
    identifier: "q41",
    options: { Yes: "5", No: "1" },
    weight: "1"
  },

  {
    category: "physical activity",
    label: "Question 42",
    text: "How many training sessions a week do you have?",
    type: "select_choice",
    identifier: "q42",
    options: [
      { label: "2 or less", value: "1" },
      { label: "3 - 4", value: "3" },
      { label: "5 or more", value: "5" }
    ],
    weight: "0.8"
  },

  {
    category: "physical activity",
    label: "Question 43",
    text: "Do you do resistance training?",
    type: "radio",
    identifier: "q43",
    options: { Yes: "5", No: "1" },
    weight: "1"
  },

  {
    category: "physical activity",
    label: "Question 44",
    text: "How many times a week do you do resistance training?",
    type: "select_choice",
    identifier: "q44",
    options: [
      { label: "1", value: "1" },
      { label: "2", value: "3" },
      { label: "3 or more", value: "5" }
    ],
    weight: "0.8"
  },

  {
    category: "physical activity",
    label: "Question 45",
    text: "Do you do any cardio training?",
    note: "*Such as running, cycling, swimming, rowing or other.",
    type: "radio",
    identifier: "q45",
    options: { Yes: "5", No: "1" },
    weight: "1"
  },

  {
    category: "physical activity",
    label: "Question 46",
    text: "How many times a week do you do cardio training?",
    type: "text",
    identifier: "q46",
    weight: "0.5",
    response: "times/week"
  },

  {
    category: "physical activity",
    label: "Question 47",
    text: "How long (minimum) is one exercise session (in minutes)?",
    type: "text",
    identifier: "q47",
    weight: "0.8",
    response: "minutes"
  },

  {
    category: "physical activity",
    label: "Question 48",
    text: "Do you have any chronic aches or pains in your body?",
    type: "radio",
    identifier: "q48",
    options: { Yes: "1", No: "5" },
    weight: "0.8"
  },

  {
    category: "physical activity",
    label: "Question 49",
    text: "How often do you experience discomfort or pain in your body?",
    note: "*Eg. Lower back pain, tight shoulders, knee pain etc.",
    type: "select_choice",
    identifier: "q49",
    options: [
      { label: "Almost Every Day", value: "1" },
      { label: "Often", value: "2" },
      { label: "50 % of the time", value: "3" },
      { label: "Rarely", value: "4" },
      { label: "Almost Never", value: "5" }
    ],
    weight: "0.8"
  },

  {
    category: "physical activity",
    label: "Question 50",
    text: "How many hours a day do you spend sitting?",
    type: "select_choice",
    identifier: "q50",
    options: [
      { label: "More than 8 hours", value: "1" },
      { label: "6 - 8 hours", value: "3" },
      { label: "Less than 6 hours", value: "5" }
    ],
    weight: "1"
  },

  {
    category: "physical activity",
    label: "Question 51",
    text: "In the past 2 weeks how many hours a week did you spend exercising?",
    type: "select_choice",
    identifier: "q51",
    options: [
      { label: "More than 12 hours", value: "5" },
      { label: "10 - 12 hours", value: "4" },
      { label: "8 - 10 hours", value: "3" },
      { label: "5 - 8 hours", value: "2" },
      { label: "Less than 5 hours", value: "1" }
    ],
    weight: "1"
  },

  {
    category: "body composition",
    label: "Question 52",
    text: "What is your gender?",
    type: "radio",
    identifier: "q52",
    options: { Male: "Male", Female: "Female" },
    weight: "0"
  },

  {
    category: "body composition",
    label: "Question 53",
    text: "What is your age?",
    type: "text",
    identifier: "q53",
    weight: "0",
    response: "years old"
  },

  {
    category: "body composition",
    label: "Question 54",
    text: "What is your weight (kg)?",
    type: "text",
    identifier: "q54",
    weight: "1",
    response: "kg"
  }, // score / weight for BMI

  {
    category: "body composition",
    label: "Question 55",
    text: "What is your height (cm)?",
    type: "text",
    identifier: "q55",
    weight: "2",
    response: "cm"
  }, // score / weight for FFMI

  {
    category: "body composition",
    label: "Question 56",
    text: "What is your waist circumference (cm)?",
    note: "*Measure the circumference just above your navel",
    type: "text",
    identifier: "q56",
    weight: "2",
    response: "cm"
  }, // score / weight for WHR

  {
    category: "body composition",
    label: "Question 57",
    text: "What is your hip circumference (cm)?",
    note: "*Measure the circumference where your back pockets would be",
    type: "text",
    identifier: "q57",
    weight: "0",
    response: "cm"
  },

  {
    category: "body composition",
    label: "Question 58",
    text: "Which picture best describes you?",
    type: "radio",
    identifier: "q58",
    options: { 1: "1", 2: "2", 3: "3", 4: "4", 5: "5", 6: "6", 7: "7", 8: "8" },
    weight: "1"
  }, // score / weight for BFR

  {
    category: "digestion",
    label: "Question 59",
    text: "How often do you experience discomfort in your digestive track?",
    note: "*Such as bloating, nausea, pain, flatulence or other.",
    type: "select_choice",
    identifier: "q59",
    options: [
      { label: "Almost Every Day", value: "1" },
      { label: "Often", value: "2" },
      { label: "50 % of the time", value: "3" },
      { label: "Rarely", value: "4" },
      { label: "Almost Never", value: "5" }
    ],
    weight: "2"
  },

  {
    category: "digestion",
    label: "Question 60",
    text: "How often do you have bowel movements?",
    type: "select_choice",
    identifier: "q60",
    options: [
      { label: "Once every second day or less", value: "1" },
      { label: "Up to 3 times a day", value: "5" },
      { label: "More than 3 times a day", value: "3" }
    ],
    weight: "1"
  },

  {
    category: "digestion",
    label: "Question 61",
    text: "Which of these best describe you stool normally?",
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
    label: "Question 62",
    text: "Do you have food cravings regularly?",
    type: "radio",
    identifier: "q62",
    options: { Yes: "1", No: "5" },
    weight: "0.5"
  },

  {
    category: "digestion",
    label: "Question 63",
    text: "Do you feel like you have a lack of willpower over food?",
    type: "radio",
    identifier: "q63",
    options: { Yes: "1", No: "5" },
    weight: "0.5"
  },

  {
    category: "digestion",
    label: "Question 64",
    text:
      "Which of these statements best describes your digestive health/feeling in your gut and stomach?",
    type: "select_choice",
    identifier: "q64",
    options: [
      {
        label:
          "I experience pain and discomfort in my gut daily and it really impairs my quality of life.",
        value: "1"
      },
      {
        label:
          "I frequently feel some discomfort in my gut, but I can live normally.",
        value: "2"
      },
      {
        label:
          "I sometimes experience discomfort in the digestive trackt, but it doesnt impair my overall wellbeing.",
        value: "3"
      },
      {
        label:
          "I rarely feel my gut and only when I have eaten something bad or too much.",
        value: "4"
      },
      { label: "I never have issues with digestion.", value: "5" }
    ],
    weight: "2"
  },

  {
    category: "digestion",
    label: "Question 65",
    text: "Which of these statements best describes you?",
    type: "select_choice",
    identifier: "q65",
    options: [
      {
        label:
          "I am very sensitive to many foods and I can eat only limited types of food.",
        value: "1"
      },
      {
        label:
          "I am sensitive to various products but I can adjust my meals accordingly.",
        value: "3"
      },
      { label: "I can eat whatever I want most of the time.", value: "5" }
    ],
    weight: "2"
  },

  {
    category: "nutrition quality",
    label: "Question 66",
    text: "Are 80% of your weekly meals home-made?",
    type: "radio",
    identifier: "q66",
    options: { Yes: "5", No: "1" },
    weight: "1"
  },

  {
    category: "nutrition quality",
    label: "Question 67",
    text: "Do you add sugar to your beverages (coffee or tea)?",
    type: "radio",
    identifier: "q67",
    options: { Yes: "1", No: "5" },
    weight: "1"
  },

  {
    category: "nutrition quality",
    label: "Question 68",
    text:
      "Which of these foods do you consume regularly (at least once a week)?",
    type: "checkbox",
    identifier: "q68",
    options: [
      { label: "Cucumber", value: "cucumber" },
      { label: "Tomato", value: "tomato" },
      { label: "Potato", value: "potato" },
      { label: "Broccoli", value: "broccoli" },
      { label: "Spinach", value: "spinach" },
      { label: "Carrots", value: "carrots" },
      { label: "Zucchini", value: "zucchini" },
      { label: "Sweet potato", value: "sweet potato" },
      { label: "Leafy salad", value: "leafy salad" },
      { label: "Beans", value: "beans" },
      { label: "Peas", value: "chickpeas" },
      { label: "Soy beans", value: "soy beans" },
      { label: "Oranges", value: "oranges" },
      { label: "Apples", value: "apples" },
      { label: "Bananas", value: "bananas" },
      { label: "Berries", value: "berries" },
      { label: "Cauliflower", value: "cauliflower" },
      { label: "Brussel sprouts", value: "brussel sprouts" },
      { label: "Pumpkin", value: "pumpkin" },
      { label: "Corn", value: "corn" },
      { label: "Fresh herbs", value: "fresh herbs" },
      { label: "Eggplant", value: "eggplant" },
      { label: "Mushrooms", value: "mushrooms" },
      { label: "Pineapple", value: "pineapple" },
      { label: "Melon", value: "melon" },
      { label: "Onion", value: "onion" },
      { label: "Garlic", value: "garlic" },
      { label: "Nuts", value: "nuts" },
      { label: "Chia seeds", value: "chia seeds" },
      { label: "Flax seeds", value: "flax seeds" },
      { label: "Cabbage", value: "cabbage" },
      { label: "Arugula", value: "arugula" },
      { label: "Avocado", value: "avocado" },
      { label: "Lemon", value: "lemon" },
      { label: "Olives", value: "olives" },
      { label: "Oats", value: "oats" },
      { label: "Lentils", value: "lentils" }
    ],
    weight: "1"
  },

  {
    category: "nutrition quality",
    label: "Question 69",
    text:
      "Do you have at least 3 different vegetables and/or fruits in every meal?",
    type: "radio",
    identifier: "q69",
    options: { Yes: "5", No: "1" },
    weight: "1"
  },

  {
    category: "nutrition quality",
    label: "Question 70",
    text:
      "Which of these foods do you consume regularly (at least once a week)?",
    type: "checkbox",
    identifier: "q70",
    options: [
      { label: "Pizza", value: "pizza" },
      { label: "Burger", value: "burger" },
      { label: "Fries", value: "fries" },
      { label: "Pastries", value: "pastries" },
      { label: "Chips", value: "chips" },
      { label: "Sweets", value: "sweets" },
      { label: "Cookies", value: "cookies" },
      { label: "Processed meat", value: "processed meat" },
      { label: "Ice cream", value: "ice cream" },
      { label: "Sushi", value: "sushi" },
      { label: "Kebab", value: "kebab" },
      { label: "Chineese food", value: "chineese food" },
      { label: "Candy bar", value: "candy bar" },
      { label: "Soft drink", value: "soft drink" },
      { label: "Juice", value: "juice" },
      { label: "Spreads", value: "spreads" },
      { label: "Sauces", value: "sauces" },
      { label: "None of the above ", value: "none" }
    ],
    weight: "1"
  },

  {
    category: "nutrition quality",
    label: "Question 71",
    text:
      "Which of these foods do you consume regularly (at least once a week)?",
    type: "checkbox",
    identifier: "q71",
    options: [
      { label: "Cottage cheese", value: "cottage cheese" },
      { label: "Chicken", value: "chicken" },
      { label: "Pork", value: "pork" },
      { label: "Beef", value: "beef" },
      { label: "Eggs", value: "eggs" },
      { label: "Tofu", value: "tofu" },
      { label: "Protein powder", value: "protein powder" },
      { label: "Yogurth", value: "yogurth" },
      { label: "Legumes (peas, lentils, beans)", value: "legumes" },
      { label: "Tuna", value: "tuna" },
      { label: "Salmon", value: "salmon" },
      { label: "Shrimps", value: "shrimps" },
      { label: "Other fish", value: "other fish" },
      { label: "Soy beans", value: "soy beans" },
      { label: "Cheese", value: "cheese" }
    ],
    weight: "1"
  },

  {
    category: "nutrition quality",
    label: "Question 72",
    text:
      "Do you have at least one source of protein (from previous questions) at every meal?",
    type: "radio",
    identifier: "q72",
    options: { Yes: "5", No: "1" },
    weight: "1"
  },

  {
    category: "nutrition quality",
    label: "Question 73",
    text: "How much water (in liters) do you drink daily?",
    type: "text",
    identifier: "q73",
    weight: "0.8",
    response: "liters"
  },

  {
    category: "nutrition quality",
    label: "Question 74",
    text:
      "Do you regularly drink or eat anything (other than water) after 7pm?",
    type: "radio",
    identifier: "q74",
    options: { Yes: "1", No: "5" },
    weight: "1"
  },

  {
    category: "stress level",
    label: "Question 75",
    text: "How often do you feel stressed?",
    type: "select_choice",
    identifier: "q75",
    options: [
      { label: "Multiple times a day", value: "1" },
      { label: "Once a day", value: "2" },
      { label: "Once every couple days", value: "3" },
      { label: "Once a week", value: "4" },
      { label: "Less than once a week", value: "5" }
    ],
    weight: "1"
  },

  {
    category: "stress level",
    label: "Question 76",
    text: "How often do you feel anxious?",
    type: "select_choice",
    identifier: "q76",
    options: [
      { label: "Multiple times a day", value: "1" },
      { label: "Once a day", value: "2" },
      { label: "Once every couple days", value: "3" },
      { label: "Once a week", value: "4" },
      { label: "Less than once a week", value: "5" }
    ],
    weight: "1"
  },

  {
    category: "stress level",
    label: "Question 77",
    text: "How often do you feel unmotivated?",
    type: "select_choice",
    identifier: "q77",
    options: [
      { label: "Multiple times a day", value: "1" },
      { label: "Once a day", value: "2" },
      { label: "Once every couple days", value: "3" },
      { label: "Once a week", value: "4" },
      { label: "Less than once a week", value: "5" }
    ],
    weight: "1"
  },

  {
    category: "stress level",
    label: "Question 78",
    text: "How often do you feel low or have blue moods?",
    type: "select_choice",
    identifier: "q78",
    options: [
      { label: "Multiple times a day", value: "1" },
      { label: "Once a day", value: "2" },
      { label: "Once every couple days", value: "3" },
      { label: "Once a week", value: "4" },
      { label: "Less than once a week", value: "5" }
    ],
    weight: "1"
  },

  {
    category: "stress level",
    label: "Question 79",
    text:
      "From 0 % being the worst and 100 % being the best: how satisfied are you with your current job/occupation?",
    type: "slider",
    identifier: "q79",
    weight: "1"
  },

  {
    category: "stress level",
    label: "Question 80",
    text:
      "From 0 % being the worst and 100 % being the best: How do you like your living environment?",
    type: "slider",
    identifier: "q80",
    weight: "1"
  },

  {
    category: "stress management",
    label: "Question 81",
    text:
      "How often do you engage in activities that you find physically and/or mentally tough?",
    note:
      "*Such as purposeful exercise, studying, performing cognitively demanding task, etc",
    type: "select_choice",
    identifier: "q81",
    options: [
      { label: "Less than once a week", value: "1" },
      { label: "Once a week", value: "2" },
      { label: "Once every couple of days", value: "3" },
      { label: "Once a day", value: "4" },
      { label: "Multiple times a day", value: "5" }
    ],
    weight: "1"
  },

  {
    category: "stress management",
    label: "Question 82",
    text: "How often do you spend time in nature (without headphones)?",
    type: "select_choice",
    identifier: "q82",
    options: [
      { label: "Multiple times a day", value: "5" },
      { label: "Once a day", value: "4" },
      { label: "Once every couple days", value: "3" },
      { label: "Once a week", value: "2" },
      { label: "Less than once a week", value: "1" }
    ],
    weight: "1"
  },

  {
    category: "stress management",
    label: "Question 83",
    text:
      "How often do you dedicate time to relax (doing something you find stress relieving)?",
    type: "select_choice",
    identifier: "q83",
    options: [
      { label: "Multiple times a day", value: "5" },
      { label: "Once a day", value: "4" },
      { label: "Once every couple days", value: "3" },
      { label: "Once a week", value: "2" },
      { label: "Less than once a week", value: "1" }
    ],
    weight: "1"
  },

  {
    category: "stress management",
    label: "Question 84",
    text: "How often do you spend time with family and/or friends?",
    type: "select_choice",
    identifier: "q84",
    options: [
      { label: "Almost never", value: "1" },
      { label: "Very rarely", value: "2" },
      { label: "Not as much as I would like", value: "3" },
      { label: "Frequently but I could do more often", value: "4" },
      { label: "Whenever I like to do it", value: "5" }
    ],
    weight: "1"
  },

  {
    category: "stress management",
    label: "Question 85",
    text: "How often do you dedicate time to your hobbies?",
    type: "select_choice",
    identifier: "q85",
    options: [
      { label: "Almost never", value: "1" },
      { label: "Very rarely", value: "2" },
      { label: "Not as much as I would like", value: "3" },
      { label: "Frequently but I could do more often", value: "4" },
      { label: "Whenever I like to do it", value: "5" }
    ],
    weight: "1"
  },

  {
    category: "stress management",
    label: "Question 86",
    text: "Do your friends and family support you in achieving your goals?",
    type: "select_choice",
    identifier: "q86",
    options: [
      { label: "No they dont", value: "1" },
      { label: "Probably, but I dont really feel it", value: "3" },
      { label: "Yes absolutely", value: "5" }
    ],
    weight: "1"
  },

  {
    category: "stress management",
    label: "Question 87",
    text: "Do you regularly smoke (at least once a week)?",
    type: "radio",
    identifier: "q87",
    options: { Yes: "1", No: "5" },
    weight: "1"
  },

  {
    category: "stress management",
    label: "Question 88",
    text:
      "Do you regularly use any drugs or addictive substances (at least once a month)?",
    type: "radio",
    identifier: "q88",
    options: { Yes: "1", No: "5" },
    weight: "1"
  },

  {
    category: "medical history",
    label: "Question 89",
    text:
      "Has your doctor told you that you have any medical condition or disease?",
    note: "*If yes, please provide details in the comment section",
    type: "radio",
    identifier: "q89",
    options: { Yes: "1", No: "5" },
    weight: "2"
  },

  {
    category: "medical history",
    label: "Question 90",
    text: "Do you use any prescription medications?",
    note: "*If yes, please provide details in the comment section",
    type: "radio",
    identifier: "q90",
    options: { Yes: "1", No: "5" },
    weight: "1"
  },

  {
    category: "medical history",
    label: "Question 91",
    text:
      "How often are you taking over-the counter remedies for acid reflux, pain, allergies, insomnia or another condition?",
    type: "select_choice",
    identifier: "q91",
    options: [
      { label: "Multiple times a week", value: "1" },
      { label: "Once a week", value: "2" },
      { label: "Once a month", value: "3" },
      { label: "Couple of times a year", value: "4" },
      { label: "Once a year or less", value: "5" }
    ],
    weight: "1"
  },

  {
    category: "medical history",
    label: "Question 92",
    text: "Do you have any allergies?",
    type: "radio",
    identifier: "q92",
    options: { Yes: "1", No: "5" },
    weight: "1"
  },

  {
    category: "medical history",
    label: "Question 93",
    text:
      "Has any of your family members suffered from heart attack or stroke?",
    type: "radio",
    identifier: "q93",
    options: { Yes: "1", No: "5" },
    weight: "2"
  },

  {
    category: "medical history",
    label: "Question 94",
    text: "Has any of your family members suffered from cancer?",
    type: "radio",
    identifier: "q94",
    options: { Yes: "1", No: "5" },
    weight: "1"
  },

  {
    category: "medical history",
    label: "Question 95",
    text: "Has any of your family members suffered from diabetes?",
    type: "radio",
    identifier: "q95",
    options: { Yes: "1", No: "5" },
    weight: "1"
  },

  {
    category: "medical history",
    label: "Question 96",
    text:
      "Has any of your family members suffered from Alzheimers, Parkinsons or Dementia?",
    type: "radio",
    identifier: "q96",
    options: { Yes: "1", No: "5" },
    weight: "1"
  },

  {
    category: "medical history",
    label: "Question 97",
    text: "How often do you get sick or have a cold?",
    type: "select_choice",
    identifier: "q97",
    options: [
      { label: "Once a month or more often", value: "1" },
      { label: "Every other month", value: "2" },
      { label: "Couple of times a year", value: "3" },
      { label: "Less than twice a year", value: "5" }
    ],
    weight: "1"
  },

  {
    category: "medical history",
    label: "Question 98",
    text:
      "From 0 % being the worst and 100 % being the best: How would you rate your health?",
    type: "slider",
    identifier: "q98"
  }
];

export default QuestionList;
