import type {
  Activity,
  Badge,
  Course,
  Grade,
  Student,
  StudentAnalysis,
  Subject,
  SubjectProgress,
  Teacher,
} from './types'

export const badges: Badge[] = [
  { id: 'b-first', name: 'Primer paso', description: 'Completaste tu primera actividad', emoji: '🌱' },
  { id: 'b-streak3', name: 'En racha', description: '3 días seguidos aprendiendo', emoji: '🔥' },
  { id: 'b-streak7', name: 'Imparable', description: '7 días seguidos', emoji: '⚡' },
  { id: 'b-perfect', name: 'Perfección', description: '100% de aciertos en una actividad', emoji: '🎯' },
  { id: 'b-words50', name: 'Vocabulario', description: 'Aprendiste 50 palabras nuevas', emoji: '📚' },
  { id: 'b-speed', name: 'Veloz', description: 'Ganaste un quiz contra reloj', emoji: '⏱️' },
  { id: 'b-level5', name: 'Explorador', description: 'Alcanzaste el nivel 5', emoji: '🧭' },
  { id: 'b-champion', name: 'Campeón de la clase', description: '#1 en el ranking semanal', emoji: '👑' },
]

export const courses: Course[] = [
  { id: 'c-4a', name: 'Primaria', grade: 'Primaria', teacherId: 't-1', color: 'primary' },
]

export const subjects: Subject[] = [
  { id: 's-english', name: 'Inglés', emoji: '🇬🇧', courseId: 'c-4a' },
]

export const teachers: Teacher[] = [
  {
    id: 't-1',
    name: 'Miss Laura',
    username: 'laura',
    role: 'profesor',
    avatar: '/avatars/teacher.png',
    courseIds: ['c-4a'],
    grade: '4',
  },
]

export const students: Student[] = [
  {
    id: 'st-1',
    name: 'Sofía Martínez',
    username: 'sofia',
    role: 'alumno',
    avatar: '/avatars/sofia.png',
    courseId: 'c-4a',
    grade: '4',
    level: 6,
    xp: 1580,
    streakDays: 5,
    badgeIds: ['b-first', 'b-streak3', 'b-perfect', 'b-words50', 'b-level5'],
  },
  {
    id: 'st-2',
    name: 'Mateo Gómez',
    username: 'mateo',
    role: 'alumno',
    avatar: '/avatars/mateo.png',
    courseId: 'c-4a',
    grade: '4',
    level: 7,
    xp: 1920,
    streakDays: 8,
    badgeIds: ['b-first', 'b-streak7', 'b-speed', 'b-level5'],
  },
  {
    id: 'st-3',
    name: 'Valentina Ruiz',
    username: 'valentina',
    role: 'alumno',
    avatar: '/avatars/valentina.png',
    courseId: 'c-4a',
    grade: '4',
    level: 8,
    xp: 2350,
    streakDays: 12,
    badgeIds: ['b-first', 'b-streak7', 'b-perfect', 'b-champion', 'b-level5'],
  },
  {
    id: 'st-4',
    name: 'Thiago Díaz',
    username: 'thiago',
    role: 'alumno',
    avatar: '/avatars/thiago.png',
    courseId: 'c-4a',
    grade: '4',
    level: 4,
    xp: 980,
    streakDays: 2,
    badgeIds: ['b-first', 'b-streak3'],
  },
  {
    id: 'st-5',
    name: 'Emma López',
    username: 'emma',
    role: 'alumno',
    avatar: '/avatars/emma.png',
    courseId: 'c-4a',
    grade: '4',
    level: 3,
    xp: 720,
    streakDays: 1,
    badgeIds: ['b-first'],
  },
]

export const subjectProgress: Record<string, SubjectProgress[]> = {
  'st-1': [
    {
      subjectId: 's-english',
      progressPct: 68,
      level: 6,
      activitiesTotal: 9,
      activitiesCompleted: 6,
      xpEarned: 1580,
    },
  ],
}

const baseActivities: Activity[] = [
  // Grade 1: seven games, 10 XP each.
  { id: 'g1-family', title: 'Family', description: 'Listen and choose the correct family member.', type: 'image-question', difficulty: 'facil', subjectId: 's-english', grade: '1', xpReward: 10, questions: [
    { id: 'family-1', prompt: 'Listen and choose: mum.', image: '/games/family-mum.png', options: ['Mum', 'Dad', 'Sister'], answerIndex: 0 }, { id: 'family-2', prompt: 'Listen and choose: dad.', image: '/games/family-dad.png', options: ['Brother', 'Dad', 'Grandma'], answerIndex: 1 }, { id: 'family-3', prompt: 'Listen and choose: sister.', image: '/games/family-sister.png', options: ['Sister', 'Auntie', 'Grandpa'], answerIndex: 0 }, { id: 'family-4', prompt: 'Listen and choose: brother.', image: '/games/family-brother.png', options: ['Grandpa', 'Brother', 'Mum'], answerIndex: 1 }, { id: 'family-5', prompt: 'Listen and choose: grandma.', image: '/games/family-grandma.png', options: ['Grandma', 'Dad', 'Auntie'], answerIndex: 0 },
  ] },
  { id: 'g1-body', title: 'Parts of the Body', description: 'Match the word with the correct part of the body.', type: 'match-concepts', difficulty: 'facil', subjectId: 's-english', grade: '1', xpReward: 10, questions: [{ id: 'body-1', prompt: 'Match the word with the correct part of the body.', pairs: [{ left: 'Head', right: 'Head' }, { left: 'Arms', right: 'Arms' }, { left: 'Hands', right: 'Hands' }, { left: 'Legs', right: 'Legs' }, { left: 'Feet', right: 'Feet' }] }] },
  { id: 'g1-big-small', title: 'Big or Small', description: 'Choose the big or small one.', type: 'image-question', difficulty: 'facil', subjectId: 's-english', grade: '1', xpReward: 10, questions: [{ id: 'size-1', prompt: 'Tap the BIG elephant.', image: '/games/elephant-big.png', options: ['Big', 'Small'], answerIndex: 0 }, { id: 'size-2', prompt: 'Tap the SMALL car.', image: '/games/car-small.png', options: ['Big', 'Small'], answerIndex: 1 }, { id: 'size-3', prompt: 'Tap the BIG ball.', image: '/games/ball-big.png', options: ['Big', 'Small'], answerIndex: 0 }, { id: 'size-4', prompt: 'Tap the SMALL teddy.', image: '/games/teddy-small.png', options: ['Big', 'Small'], answerIndex: 1 }, { id: 'size-5', prompt: 'Tap the BIG tree.', image: '/games/tree-big.png', options: ['Big', 'Small'], answerIndex: 0 }] },
  { id: 'g1-short-long', title: 'Short or Long', description: 'Look at the pictures and choose short or long.', type: 'multiple-choice', difficulty: 'facil', subjectId: 's-english', grade: '1', xpReward: 10, questions: [{ id: 'length-1', prompt: 'Look at the clue and choose the answer.', options: ['Short', 'Long'], answerIndex: 1 }, { id: 'length-2', prompt: 'Look at the clue and choose the answer.', options: ['Short', 'Long'], answerIndex: 0 }, { id: 'length-3', prompt: 'Look at the clue and choose the answer.', options: ['Short', 'Long'], answerIndex: 1 }, { id: 'length-4', prompt: 'Look at the clue and choose the answer.', options: ['Short', 'Long'], answerIndex: 0 }, { id: 'length-5', prompt: 'Look at the clue and choose the answer.', options: ['Short', 'Long'], answerIndex: 1 }] },
  { id: 'g1-food', title: 'Food', description: 'Choose the healthy food.', type: 'multiple-choice', difficulty: 'facil', subjectId: 's-english', grade: '1', xpReward: 10, questions: [{ id: 'food-1', prompt: 'Choose the healthy food.', options: ['Apple', 'Fries', 'Ice cream'], answerIndex: 0 }, { id: 'food-2', prompt: 'Choose the healthy food.', options: ['Burger', 'Broccoli', 'Fries'], answerIndex: 1 }, { id: 'food-3', prompt: 'Choose the healthy food.', options: ['Ice cream', 'Fries', 'Fish'], answerIndex: 2 }] },
  { id: 'g1-pets', title: 'Animals (Pets)', description: 'Match the animal with the correct name.', type: 'image-question', difficulty: 'facil', subjectId: 's-english', grade: '1', xpReward: 10, questions: [{ id: 'pet-cat', prompt: 'Match the animal with the correct name.', image: '/games/cat.png', options: ['Dog', 'Cat', 'Rabbit'], answerIndex: 1 }, { id: 'pet-dog', prompt: 'Match the animal with the correct name.', image: '/games/dog.png', options: ['Dog', 'Cat', 'Bird'], answerIndex: 0 }, { id: 'pet-rabbit', prompt: 'Match the animal with the correct name.', image: '/games/rabbit.png', options: ['Bird', 'Rabbit', 'Dog'], answerIndex: 1 }, { id: 'pet-bird', prompt: 'Match the animal with the correct name.', image: '/games/bird.png', options: ['Cat', 'Dog', 'Bird'], answerIndex: 2 }] },
  { id: 'g1-can', title: "Can / Can't", description: 'Look at the pictures and choose can or can\'t.', type: 'multiple-choice', difficulty: 'facil', subjectId: 's-english', grade: '1', xpReward: 10, questions: [{ id: 'can-1', prompt: 'She can ride a bike.', options: ['Can', "Can't"], answerIndex: 0 }, { id: 'can-2', prompt: "He can't fly.", options: ['Can', "Can't"], answerIndex: 1 }, { id: 'can-3', prompt: 'He can swim.', options: ['Can', "Can't"], answerIndex: 0 }, { id: 'can-4', prompt: "She can't lift a car.", options: ['Can', "Can't"], answerIndex: 1 }, { id: 'can-5', prompt: 'They can play football.', options: ['Can', "Can't"], answerIndex: 0 }] },

  // Grade 3: seven games, 15 XP each.
  { id: 'g3-subjects', title: 'School Subjects', description: 'Look at the images and choose the correct subject.', type: 'multiple-choice', difficulty: 'medio', subjectId: 's-english', grade: '3', xpReward: 15, questions: ['Math', 'English', 'Science', 'Art', 'Music', 'PE', 'History'].map((subject, i) => ({ id: `subject-${i}`, prompt: `Choose ${subject}.`, options: [subject, 'English', 'Math'].filter((v, j, a) => a.indexOf(v) === j), answerIndex: 0 })) },
  { id: 'g3-sports', title: "Sports: Can / Can't", description: "Look at the pictures and choose if they can or can't do the sport.", type: 'multiple-choice', difficulty: 'medio', subjectId: 's-english', grade: '3', xpReward: 15, questions: [{ id: 'sport-1', prompt: 'She can play soccer.', options: ['Can', "Can't"], answerIndex: 0 }, { id: 'sport-2', prompt: 'He can swim.', options: ['Can', "Can't"], answerIndex: 0 }, { id: 'sport-3', prompt: "He can't play tennis.", options: ['Can', "Can't"], answerIndex: 1 }, { id: 'sport-4', prompt: 'She can ride a bike.', options: ['Can', "Can't"], answerIndex: 0 }] },
  { id: 'g3-animals-prepositions', title: 'Animals: Prepositions', description: 'Look at the image and choose the correct option.', type: 'multiple-choice', difficulty: 'medio', subjectId: 's-english', grade: '3', xpReward: 15, questions: [{ id: 'scene-cat', prompt: 'Where is the cat?', options: ['On the table.', 'Under the table.', 'In the bowl.'], answerIndex: 0 }, { id: 'scene-dog', prompt: 'Where is the dog?', options: ['On the table.', 'Under the table.', 'Next to the fish tank.'], answerIndex: 1 }, { id: 'scene-fly', prompt: 'The dog ___ fly.', options: ['can', "can't"], answerIndex: 1 }] },
  { id: 'g3-clothes', title: 'Clothes', description: 'Look at the pictures and choose the correct option.', type: 'multiple-choice', difficulty: 'medio', subjectId: 's-english', grade: '3', xpReward: 15, questions: [{ id: 'clothes-1', prompt: 'She is wearing a dress.', options: ['A dress', 'Shorts', 'A hoodie'], answerIndex: 0 }, { id: 'clothes-2', prompt: 'He is wearing a hoodie.', options: ['A skirt', 'A hoodie', 'A jacket'], answerIndex: 1 }, { id: 'clothes-3', prompt: 'She is wearing a jacket.', options: ['A jacket', 'A dress', 'Shorts'], answerIndex: 0 }, { id: 'clothes-4', prompt: 'He is wearing shorts.', options: ['A t-shirt', 'A jacket', 'Shorts'], answerIndex: 2 }] },
  { id: 'g3-food-preferences', title: 'Food: Like / Don\'t Like', description: 'Look at the food and choose if they like it or not.', type: 'multiple-choice', difficulty: 'medio', subjectId: 's-english', grade: '3', xpReward: 15, questions: [{ id: 'like-1', prompt: 'Look at the food and choose the answer.', options: ['Likes it', "Doesn't like it"], answerIndex: 0 }, { id: 'like-2', prompt: "She doesn't like burgers.", options: ['Likes it', "Doesn't like it"], answerIndex: 1 }, { id: 'like-3', prompt: 'He likes pizza.', options: ['Likes it', "Doesn't like it"], answerIndex: 0 }, { id: 'like-4', prompt: "She doesn't like ice cream.", options: ['Likes it', "Doesn't like it"], answerIndex: 1 }, { id: 'like-5', prompt: 'He likes apples.', options: ['Likes it', "Doesn't like it"], answerIndex: 0 }] },
  { id: 'g3-body-count', title: 'Parts of the Body: Has Got', description: 'Look at the monsters and complete the sentences.', type: 'multiple-choice', difficulty: 'medio', subjectId: 's-english', grade: '3', xpReward: 15, questions: [{ id: 'monster-1', prompt: 'It has got ___ eyes.', options: ['One', 'Two', 'Three'], answerIndex: 1 }, { id: 'monster-2', prompt: "It hasn't got ___ legs.", options: ['Two', 'Four', 'Six'], answerIndex: 0 }, { id: 'monster-3', prompt: 'It has got ___ arms.', options: ['One', 'Two', 'Three'], answerIndex: 2 }] },
  { id: 'g3-beach', title: 'Activities on the Beach', description: "Look at the picture and choose what they want or don't want to do.", type: 'multiple-choice', difficulty: 'medio', subjectId: 's-english', grade: '3', xpReward: 15, questions: [{ id: 'beach-1', prompt: 'I want to build a sandcastle.', options: ['Want to', "Don't want to"], answerIndex: 0 }, { id: 'beach-2', prompt: "She doesn't want to swim.", options: ['Want to', "Doesn't want to"], answerIndex: 1 }, { id: 'beach-3', prompt: 'He wants to surf.', options: ['Wants to', "Doesn't want to"], answerIndex: 0 }, { id: 'beach-4', prompt: 'We want to play with the ball.', options: ['Want to', "Don't want to"], answerIndex: 0 }, { id: 'beach-5', prompt: "I don't want to sunbathe.", options: ['Want to', "Don't want to"], answerIndex: 1 }] },

  // Grade 4: eleven games; the last one awards 20 XP.
  { id: 'g4-subjects', title: 'School Subjects', description: 'Look at the pictures and choose the correct subject.', type: 'multiple-choice', difficulty: 'medio', subjectId: 's-english', grade: '4', xpReward: 15, questions: ['English', 'Math', 'Geography', 'Science', 'Art', 'Music', 'IT', 'History'].map((subject, i) => ({ id: `g4-subject-${i}`, prompt: `Choose ${subject}.`, options: [subject, 'English', 'Math'].filter((v, j, a) => a.indexOf(v) === j), answerIndex: 0 })) },
  { id: 'g4-days', title: 'Days of the Week', description: 'Listen and choose the correct day.', type: 'multiple-choice', difficulty: 'medio', subjectId: 's-english', grade: '4', xpReward: 15, questions: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday'].map((day, i) => ({ id: `day-${i}`, prompt: `It's ${day}.`, options: [day, 'Monday', 'Sunday'].filter((v, j, a) => a.indexOf(v) === j), answerIndex: 0 })) },
  { id: 'g4-time', title: 'The Time', description: 'What time is it? Choose the correct option.', type: 'multiple-choice', difficulty: 'medio', subjectId: 's-english', grade: '4', xpReward: 15, questions: [{ id: 'time-1', prompt: "It's three o'clock.", options: ["It's three o'clock", "It's nine o'clock", "It's six o'clock"], answerIndex: 0 }, { id: 'time-2', prompt: "It's nine o'clock.", options: ["It's three o'clock", "It's nine o'clock", "It's six o'clock"], answerIndex: 1 }, { id: 'time-3', prompt: "It's six o'clock.", options: ["It's three o'clock", "It's nine o'clock", "It's six o'clock"], answerIndex: 2 }, { id: 'time-4', prompt: "It's one o'clock.", options: ["It's one o'clock", "It's five o'clock", "It's ten o'clock"], answerIndex: 0 }, { id: 'time-5', prompt: "It's ten o'clock.", options: ["It's one o'clock", "It's five o'clock", "It's ten o'clock"], answerIndex: 2 }] },
  { id: 'g4-have-has', title: 'Have / Has Got', description: 'Look at the picture and complete the sentences.', type: 'multiple-choice', difficulty: 'medio', subjectId: 's-english', grade: '4', xpReward: 15, questions: [{ id: 'have-1', prompt: 'She ___ a backpack.', options: ['has got', 'have got'], answerIndex: 0 }, { id: 'have-2', prompt: 'I ___ a pencil case.', options: ['has got', 'have got'], answerIndex: 1 }, { id: 'have-3', prompt: 'They ___ books.', options: ['has got', 'have got'], answerIndex: 1 }, { id: 'have-4', prompt: 'He ___ a water bottle.', options: ['has got', 'have got'], answerIndex: 0 }] },
  { id: 'g4-weather', title: 'Weather', description: 'Look at the picture and choose the correct option.', type: 'multiple-choice', difficulty: 'medio', subjectId: 's-english', grade: '4', xpReward: 15, questions: ['sunny', 'rainy', 'cloudy', 'snowy', 'windy', 'stormy'].map((weather, i) => ({ id: `weather-${i}`, prompt: `What's the weather like? ${weather}.`, options: [weather, 'sunny', 'rainy'].filter((v, j, a) => a.indexOf(v) === j), answerIndex: 0 })) },
  { id: 'g4-is-isnt', title: "It Is / Isn't", description: 'Look at the picture and complete the sentences.', type: 'multiple-choice', difficulty: 'medio', subjectId: 's-english', grade: '4', xpReward: 15, questions: [{ id: 'place-park', prompt: 'It ___ a park.', options: ['is', "isn't"], answerIndex: 0 }, { id: 'place-school', prompt: "It ___ a hospital. It is a school.", options: ['is', "isn't"], answerIndex: 1 }, { id: 'place-city', prompt: 'It ___ a city.', options: ['is', "isn't"], answerIndex: 0 }] },
  { id: 'g4-present-simple', title: 'Present Simple', description: 'Look at the picture and choose the correct option.', type: 'multiple-choice', difficulty: 'medio', subjectId: 's-english', grade: '4', xpReward: 15, questions: [{ id: 'present-1', prompt: 'He ___ soccer.', options: ['play', 'plays', 'is playing'], answerIndex: 1 }, { id: 'present-2', prompt: 'I ___ English.', options: ['study', 'studies', 'is studying'], answerIndex: 0 }, { id: 'present-3', prompt: 'They ___ every day.', options: ['run', 'runs', 'is running'], answerIndex: 0 }, { id: 'present-4', prompt: 'She ___ books.', options: ['read', 'reads', 'is reading'], answerIndex: 1 }, { id: 'present-5', prompt: 'We ___ at school.', options: ['learn', 'learns', 'is learning'], answerIndex: 0 }] },
  { id: 'g4-routines', title: 'Routines', description: 'Look at the pictures and put the sentences in order.', type: 'order-elements', difficulty: 'medio', subjectId: 's-english', grade: '4', xpReward: 15, questions: [{ id: 'routine-1', prompt: 'Order: I get up at 7 o\'clock.', sequence: ['I', 'get up', "at 7 o'clock"] }, { id: 'routine-2', prompt: 'Order: I brush my teeth.', sequence: ['I', 'brush', 'my teeth'] }, { id: 'routine-3', prompt: 'Order: I go to school.', sequence: ['I', 'go', 'to school'] }, { id: 'routine-4', prompt: 'Order: I do my homework.', sequence: ['I', 'do', 'my homework'] }] },
  { id: 'g4-present-continuous', title: 'Present Continuous', description: 'Look at the picture and choose the correct option.', type: 'multiple-choice', difficulty: 'medio', subjectId: 's-english', grade: '4', xpReward: 15, questions: [{ id: 'continuous-1', prompt: 'She ___ in the pool.', options: ['swims', 'swim', 'is swimming'], answerIndex: 2 }, { id: 'continuous-2', prompt: 'He ___ a book now.', options: ['reads', 'read', 'is reading'], answerIndex: 2 }, { id: 'continuous-3', prompt: 'They ___ football now.', options: ['play', 'plays', 'are playing'], answerIndex: 2 }, { id: 'continuous-4', prompt: 'I ___ dinner.', options: ['cook', 'cooks', 'am cooking'], answerIndex: 2 }, { id: 'continuous-5', prompt: 'She ___ a song.', options: ['sings', 'sing', 'is singing'], answerIndex: 2 }] },
  { id: 'g4-there', title: 'There Is / There Are', description: 'Look at the picture and complete the sentences.', type: 'multiple-choice', difficulty: 'medio', subjectId: 's-english', grade: '4', xpReward: 15, questions: [{ id: 'there-1', prompt: 'There ___ a sofa.', options: ['is', 'are'], answerIndex: 0 }, { id: 'there-2', prompt: 'There ___ two chairs.', options: ['is', 'are'], answerIndex: 1 }, { id: 'there-3', prompt: 'There ___ a TV.', options: ['is', 'are'], answerIndex: 0 }, { id: 'there-4', prompt: 'There ___ a cat.', options: ['is', 'are'], answerIndex: 0 }] },
  { id: 'g4-places-town', title: 'Places in Town / City', description: 'Look at the map and choose the correct place.', type: 'multiple-choice', difficulty: 'dificil', subjectId: 's-english', grade: '4', xpReward: 20, questions: [{ id: 'town-library', prompt: 'Where is the library?', options: ['Next to the park', 'In front of the school', 'Opposite the hospital'], answerIndex: 0 }, { id: 'town-hospital', prompt: 'Where is the hospital?', options: ['Next to the park', 'In front of the school', 'Opposite the library'], answerIndex: 2 }, { id: 'town-school', prompt: 'Where is the school?', options: ['Next to the supermarket', 'Opposite the hospital', 'Next to the bus station'], answerIndex: 0 }, { id: 'town-park', prompt: 'Where is the park?', options: ['Next to the library', 'In front of the school', 'Opposite the supermarket'], answerIndex: 0 }, { id: 'town-bus', prompt: 'Where is the bus station?', options: ['Next to the school', 'Opposite the park', 'In front of the hospital'], answerIndex: 0 }] },
]

export const questionEmojis: Record<string, string> = {
  'g1-family': '👨‍👩‍👧', 'g1-body': '🧍', 'g1-big-small': '📏', 'g1-short-long': '📐', 'g1-food': '🍎', 'g1-pets': '🐶', 'g1-can': '🏃',
  'g3-subjects': '🎨', 'g3-sports': '⚽', 'g3-animals-prepositions': '🐱', 'g3-clothes': '👕', 'g3-food-preferences': '🍔', 'g3-body-count': '👁️', 'g3-beach': '🏖️',
  'g4-subjects': '🎓', 'g4-days': '📅', 'g4-time': '🕒', 'g4-have-has': '🎒', 'g4-weather': '☀️', 'g4-is-isnt': '🏫', 'g4-present-simple': '⚽', 'g4-routines': '⏰', 'g4-present-continuous': '🏊', 'g4-there': '🏠', 'g4-places-town': '🗺️',
}

const listeningGames = new Set(['g1-family', 'g4-days'])

// Each activity keeps its own interaction model; the shared player only supplies
// the common progress, feedback, and scoring shell.
const activityTypeOverrides: Record<string, Activity['type']> = {
  'g1-family': 'image-question',
  'g1-body': 'match-concepts',
  'g1-big-small': 'image-question',
  'g1-short-long': 'image-question',
  'g1-food': 'image-question',
  'g1-pets': 'image-question',
  'g1-can': 'image-question',
  'g3-subjects': 'image-question',
  'g3-sports': 'image-question',
  'g3-animals-prepositions': 'image-question',
  'g3-clothes': 'image-question',
  'g3-food-preferences': 'image-question',
  'g3-body-count': 'image-question',
  'g3-beach': 'image-question',
  'g4-subjects': 'image-question',
  'g4-days': 'multiple-choice',
  'g4-time': 'image-question',
  'g4-weather': 'image-question',
  'g4-is-isnt': 'image-question',
  'g4-present-simple': 'image-question',
  'g4-routines': 'order-elements',
  'g4-present-continuous': 'image-question',
  'g4-there': 'image-question',
  'g4-places-town': 'image-question',
}

export const activities: Activity[] = baseActivities.map((activity) => {
  const type = activityTypeOverrides[activity.id] ?? activity.type
  return {
    ...activity,
    type,
    questions: activity.questions.map((question) => ({
      ...question,
      prompt: listeningGames.has(activity.id)
        ? 'Listen and choose the answer.'
        : type === 'order-elements'
          ? 'Put the words in the correct order.'
          : type === 'match-concepts'
            ? 'Match each word with its picture.'
            : type === 'image-question'
              ? 'Look at the clue and choose the answer.'
              : 'Choose the correct answer.',
      emoji: questionEmojis[activity.id] ?? '🔎',
      audioText: listeningGames.has(activity.id)
        ? question.options?.[question.answerIndex ?? 0]
        : undefined,
    })),
  }
})

// --- Datos de análisis para el portal del profesor ---
// Simulados para demostrar la vista de análisis detallado por alumno.

function statusForPct(pct: number): 'dominado' | 'en-progreso' | 'necesita-refuerzo' {
  if (pct >= 80) return 'dominado'
  if (pct >= 60) return 'en-progreso'
  return 'necesita-refuerzo'
}

export const studentAnalyses: Record<string, StudentAnalysis> = {
  'st-1': {
    studentId: 'st-1',
    xp: 1580,
    level: 6,
    streakDays: 5,
    overallProgressPct: 68,
    activitiesCompleted: 6,
    activitiesPending: 3,
    correctPct: 78,
    incorrectPct: 22,
    totalAttempts: 14,
    avgTimeSec: 52,
    performance: [
      { date: 'Sem 1', score: 55 },
      { date: 'Sem 2', score: 62 },
      { date: 'Sem 3', score: 70 },
      { date: 'Sem 4', score: 68 },
      { date: 'Sem 5', score: 78 },
    ],
    skills: [
      { skill: 'Vocabulary', pct: 85, status: 'dominado' },
      { skill: 'Grammar', pct: 58, status: 'en-progreso' },
      { skill: 'Reading', pct: 72, status: 'en-progreso' },
      { skill: 'Listening', pct: 80, status: 'dominado' },
      { skill: 'Writing', pct: 54, status: 'necesita-refuerzo' },
    ],
    topics: [
      { topic: 'Present Simple', skill: 'Grammar', pct: 52, status: 'necesita-refuerzo' },
      { topic: 'Verb to be', skill: 'Grammar', pct: 86, status: 'dominado' },
      { topic: 'Have got', skill: 'Grammar', pct: 68, status: 'en-progreso' },
      { topic: 'Animals', skill: 'Vocabulary', pct: 90, status: 'dominado' },
      { topic: 'Colors', skill: 'Vocabulary', pct: 82, status: 'dominado' },
      { topic: 'Numbers', skill: 'Vocabulary', pct: 78, status: 'en-progreso' },
      { topic: 'Short texts', skill: 'Reading', pct: 72, status: 'en-progreso' },
      { topic: 'Instructions', skill: 'Listening', pct: 80, status: 'dominado' },
      { topic: 'Short sentences', skill: 'Writing', pct: 54, status: 'necesita-refuerzo' },
    ],
    recentActivities: [
      { activityId: 'a-1', title: 'Animales / Animals', score: 100, correctCount: 3, totalCount: 3, timeSec: 35, date: '2026-09-24', status: 'completada' },
      { activityId: 'a-2', title: 'Colores / Colors', score: 75, correctCount: 3, totalCount: 4, timeSec: 40, date: '2026-09-22', status: 'completada' },
      { activityId: 'a-3', title: 'Completa la palabra', score: 67, correctCount: 2, totalCount: 3, timeSec: 68, date: '2026-09-20', status: 'completada' },
      { activityId: 'a-4', title: 'Une los conceptos', score: 75, correctCount: 3, totalCount: 4, timeSec: 55, date: '2026-09-18', status: 'completada' },
      { activityId: 'a-5', title: 'Ordena la oración', score: 50, correctCount: 1, totalCount: 2, timeSec: 72, date: '2026-09-15', status: 'completada' },
      { activityId: 'a-6', title: 'Adivina la imagen', score: 100, correctCount: 2, totalCount: 2, timeSec: 30, date: '2026-09-12', status: 'completada' },
      { activityId: 'a-7', title: 'Juego de memoria', score: 0, correctCount: 0, totalCount: 0, timeSec: 0, date: '', status: 'pendiente' },
      { activityId: 'a-8', title: 'Quiz contra reloj', score: 0, correctCount: 0, totalCount: 0, timeSec: 0, date: '', status: 'pendiente' },
    ],
    weakTopics: [
      { topic: 'Present Simple', skill: 'Grammar', pct: 52, status: 'necesita-refuerzo' },
      { topic: 'Short sentences', skill: 'Writing', pct: 54, status: 'necesita-refuerzo' },
      { topic: 'Have got', skill: 'Grammar', pct: 68, status: 'en-progreso' },
    ],
    recommendation:
      'Sofía tiene buen vocabulario y comprensión auditiva. Conviene reforzar Present Simple y escritura de oraciones cortas con ejercicios prácticos guiados.',
  },
  'st-2': {
    studentId: 'st-2',
    xp: 1920,
    level: 7,
    streakDays: 8,
    overallProgressPct: 75,
    activitiesCompleted: 7,
    activitiesPending: 2,
    correctPct: 83,
    incorrectPct: 17,
    totalAttempts: 16,
    avgTimeSec: 44,
    performance: [
      { date: 'Sem 1', score: 68 },
      { date: 'Sem 2', score: 74 },
      { date: 'Sem 3', score: 78 },
      { date: 'Sem 4', score: 82 },
      { date: 'Sem 5', score: 85 },
    ],
    skills: [
      { skill: 'Vocabulary', pct: 88, status: 'dominado' },
      { skill: 'Grammar', pct: 72, status: 'en-progreso' },
      { skill: 'Reading', pct: 80, status: 'dominado' },
      { skill: 'Listening', pct: 75, status: 'en-progreso' },
      { skill: 'Writing', pct: 68, status: 'en-progreso' },
    ],
    topics: [
      { topic: 'Present Simple', skill: 'Grammar', pct: 72, status: 'en-progreso' },
      { topic: 'Verb to be', skill: 'Grammar', pct: 90, status: 'dominado' },
      { topic: 'Have got', skill: 'Grammar', pct: 75, status: 'en-progreso' },
      { topic: 'Animals', skill: 'Vocabulary', pct: 92, status: 'dominado' },
      { topic: 'Colors', skill: 'Vocabulary', pct: 88, status: 'dominado' },
      { topic: 'Numbers', skill: 'Vocabulary', pct: 85, status: 'dominado' },
      { topic: 'Short texts', skill: 'Reading', pct: 80, status: 'dominado' },
      { topic: 'Instructions', skill: 'Listening', pct: 75, status: 'en-progreso' },
      { topic: 'Short sentences', skill: 'Writing', pct: 68, status: 'en-progreso' },
    ],
    recentActivities: [
      { activityId: 'a-1', title: 'Animales / Animals', score: 100, correctCount: 3, totalCount: 3, timeSec: 28, date: '2026-09-24', status: 'completada' },
      { activityId: 'a-2', title: 'Colores / Colors', score: 100, correctCount: 4, totalCount: 4, timeSec: 32, date: '2026-09-23', status: 'completada' },
      { activityId: 'a-3', title: 'Completa la palabra', score: 100, correctCount: 3, totalCount: 3, timeSec: 45, date: '2026-09-21', status: 'completada' },
      { activityId: 'a-4', title: 'Une los conceptos', score: 100, correctCount: 4, totalCount: 4, timeSec: 50, date: '2026-09-19', status: 'completada' },
      { activityId: 'a-5', title: 'Ordena la oración', score: 50, correctCount: 1, totalCount: 2, timeSec: 60, date: '2026-09-17', status: 'completada' },
      { activityId: 'a-6', title: 'Adivina la imagen', score: 100, correctCount: 2, totalCount: 2, timeSec: 25, date: '2026-09-14', status: 'completada' },
      { activityId: 'a-7', title: 'Juego de memoria', score: 75, correctCount: 3, totalCount: 4, timeSec: 48, date: '2026-09-10', status: 'completada' },
      { activityId: 'a-8', title: 'Quiz contra reloj', score: 0, correctCount: 0, totalCount: 0, timeSec: 0, date: '', status: 'pendiente' },
    ],
    weakTopics: [
      { topic: 'Short sentences', skill: 'Writing', pct: 68, status: 'en-progreso' },
      { topic: 'Instructions', skill: 'Listening', pct: 75, status: 'en-progreso' },
      { topic: 'Present Simple', skill: 'Grammar', pct: 72, status: 'en-progreso' },
    ],
    recommendation:
      'Mateo va muy bien en vocabulario y lectura. Para llegar al dominio total, conviene practicar escritura de oraciones cortas y comprensión auditiva con audios más variados.',
  },
  'st-3': {
    studentId: 'st-3',
    xp: 2350,
    level: 8,
    streakDays: 12,
    overallProgressPct: 88,
    activitiesCompleted: 8,
    activitiesPending: 1,
    correctPct: 92,
    incorrectPct: 8,
    totalAttempts: 20,
    avgTimeSec: 38,
    performance: [
      { date: 'Sem 1', score: 80 },
      { date: 'Sem 2', score: 85 },
      { date: 'Sem 3', score: 88 },
      { date: 'Sem 4', score: 90 },
      { date: 'Sem 5', score: 92 },
    ],
    skills: [
      { skill: 'Vocabulary', pct: 95, status: 'dominado' },
      { skill: 'Grammar', pct: 88, status: 'dominado' },
      { skill: 'Reading', pct: 90, status: 'dominado' },
      { skill: 'Listening', pct: 85, status: 'dominado' },
      { skill: 'Writing', pct: 82, status: 'dominado' },
    ],
    topics: [
      { topic: 'Present Simple', skill: 'Grammar', pct: 88, status: 'dominado' },
      { topic: 'Verb to be', skill: 'Grammar', pct: 96, status: 'dominado' },
      { topic: 'Have got', skill: 'Grammar', pct: 90, status: 'dominado' },
      { topic: 'Animals', skill: 'Vocabulary', pct: 98, status: 'dominado' },
      { topic: 'Colors', skill: 'Vocabulary', pct: 95, status: 'dominado' },
      { topic: 'Numbers', skill: 'Vocabulary', pct: 92, status: 'dominado' },
      { topic: 'Short texts', skill: 'Reading', pct: 90, status: 'dominado' },
      { topic: 'Instructions', skill: 'Listening', pct: 85, status: 'dominado' },
      { topic: 'Short sentences', skill: 'Writing', pct: 82, status: 'dominado' },
    ],
    recentActivities: [
      { activityId: 'a-1', title: 'Animales / Animals', score: 100, correctCount: 3, totalCount: 3, timeSec: 22, date: '2026-09-24', status: 'completada' },
      { activityId: 'a-2', title: 'Colores / Colors', score: 100, correctCount: 4, totalCount: 4, timeSec: 25, date: '2026-09-23', status: 'completada' },
      { activityId: 'a-3', title: 'Completa la palabra', score: 100, correctCount: 3, totalCount: 3, timeSec: 35, date: '2026-09-21', status: 'completada' },
      { activityId: 'a-4', title: 'Une los conceptos', score: 100, correctCount: 4, totalCount: 4, timeSec: 40, date: '2026-09-19', status: 'completada' },
      { activityId: 'a-5', title: 'Ordena la oración', score: 100, correctCount: 2, totalCount: 2, timeSec: 45, date: '2026-09-17', status: 'completada' },
      { activityId: 'a-6', title: 'Adivina la imagen', score: 100, correctCount: 2, totalCount: 2, timeSec: 20, date: '2026-09-14', status: 'completada' },
      { activityId: 'a-7', title: 'Juego de memoria', score: 100, correctCount: 4, totalCount: 4, timeSec: 38, date: '2026-09-10', status: 'completada' },
      { activityId: 'a-8', title: 'Quiz contra reloj', score: 80, correctCount: 4, totalCount: 5, timeSec: 38, date: '2026-09-07', status: 'completada' },
    ],
    weakTopics: [
      { topic: 'Short sentences', skill: 'Writing', pct: 82, status: 'dominado' },
      { topic: 'Instructions', skill: 'Listening', pct: 85, status: 'dominado' },
      { topic: 'Present Simple', skill: 'Grammar', pct: 88, status: 'dominado' },
    ],
    recommendation:
      'Valentina domina todas las habilidades. Se sugieren actividades de desafío avanzado y escritura libre para mantenerla motivada.',
  },
  'st-4': {
    studentId: 'st-4',
    xp: 980,
    level: 4,
    streakDays: 2,
    overallProgressPct: 42,
    activitiesCompleted: 4,
    activitiesPending: 5,
    correctPct: 55,
    incorrectPct: 45,
    totalAttempts: 9,
    avgTimeSec: 68,
    performance: [
      { date: 'Sem 1', score: 40 },
      { date: 'Sem 2', score: 45 },
      { date: 'Sem 3', score: 52 },
      { date: 'Sem 4', score: 50 },
      { date: 'Sem 5', score: 55 },
    ],
    skills: [
      { skill: 'Vocabulary', pct: 62, status: 'en-progreso' },
      { skill: 'Grammar', pct: 42, status: 'necesita-refuerzo' },
      { skill: 'Reading', pct: 55, status: 'necesita-refuerzo' },
      { skill: 'Listening', pct: 58, status: 'necesita-refuerzo' },
      { skill: 'Writing', pct: 40, status: 'necesita-refuerzo' },
    ],
    topics: [
      { topic: 'Present Simple', skill: 'Grammar', pct: 38, status: 'necesita-refuerzo' },
      { topic: 'Verb to be', skill: 'Grammar', pct: 55, status: 'necesita-refuerzo' },
      { topic: 'Have got', skill: 'Grammar', pct: 42, status: 'necesita-refuerzo' },
      { topic: 'Animals', skill: 'Vocabulary', pct: 70, status: 'en-progreso' },
      { topic: 'Colors', skill: 'Vocabulary', pct: 60, status: 'en-progreso' },
      { topic: 'Numbers', skill: 'Vocabulary', pct: 55, status: 'necesita-refuerzo' },
      { topic: 'Short texts', skill: 'Reading', pct: 55, status: 'necesita-refuerzo' },
      { topic: 'Instructions', skill: 'Listening', pct: 58, status: 'necesita-refuerzo' },
      { topic: 'Short sentences', skill: 'Writing', pct: 40, status: 'necesita-refuerzo' },
    ],
    recentActivities: [
      { activityId: 'a-1', title: 'Animales / Animals', score: 67, correctCount: 2, totalCount: 3, timeSec: 55, date: '2026-09-22', status: 'completada' },
      { activityId: 'a-2', title: 'Colores / Colors', score: 50, correctCount: 2, totalCount: 4, timeSec: 60, date: '2026-09-20', status: 'completada' },
      { activityId: 'a-3', title: 'Completa la palabra', score: 33, correctCount: 1, totalCount: 3, timeSec: 80, date: '2026-09-18', status: 'completada' },
      { activityId: 'a-6', title: 'Adivina la imagen', score: 100, correctCount: 2, totalCount: 2, timeSec: 40, date: '2026-09-15', status: 'completada' },
      { activityId: 'a-4', title: 'Une los conceptos', score: 0, correctCount: 0, totalCount: 0, timeSec: 0, date: '', status: 'pendiente' },
      { activityId: 'a-5', title: 'Ordena la oración', score: 0, correctCount: 0, totalCount: 0, timeSec: 0, date: '', status: 'pendiente' },
      { activityId: 'a-7', title: 'Juego de memoria', score: 0, correctCount: 0, totalCount: 0, timeSec: 0, date: '', status: 'pendiente' },
      { activityId: 'a-8', title: 'Quiz contra reloj', score: 0, correctCount: 0, totalCount: 0, timeSec: 0, date: '', status: 'pendiente' },
    ],
    weakTopics: [
      { topic: 'Present Simple', skill: 'Grammar', pct: 38, status: 'necesita-refuerzo' },
      { topic: 'Short sentences', skill: 'Writing', pct: 40, status: 'necesita-refuerzo' },
      { topic: 'Have got', skill: 'Grammar', pct: 42, status: 'necesita-refuerzo' },
    ],
    recommendation:
      'Thiago necesita refuerzo general. Se sugiere empezar con actividades de vocabulario visual (animales, colores) y luego introducir Present Simple con ejercicios muy guiados.',
  },
  'st-5': {
    studentId: 'st-5',
    xp: 720,
    level: 3,
    streakDays: 1,
    overallProgressPct: 28,
    activitiesCompleted: 3,
    activitiesPending: 6,
    correctPct: 48,
    incorrectPct: 52,
    totalAttempts: 6,
    avgTimeSec: 75,
    performance: [
      { date: 'Sem 1', score: 30 },
      { date: 'Sem 2', score: 35 },
      { date: 'Sem 3', score: 42 },
      { date: 'Sem 4', score: 45 },
      { date: 'Sem 5', score: 48 },
    ],
    skills: [
      { skill: 'Vocabulary', pct: 52, status: 'necesita-refuerzo' },
      { skill: 'Grammar', pct: 35, status: 'necesita-refuerzo' },
      { skill: 'Reading', pct: 45, status: 'necesita-refuerzo' },
      { skill: 'Listening', pct: 50, status: 'necesita-refuerzo' },
      { skill: 'Writing', pct: 30, status: 'necesita-refuerzo' },
    ],
    topics: [
      { topic: 'Present Simple', skill: 'Grammar', pct: 30, status: 'necesita-refuerzo' },
      { topic: 'Verb to be', skill: 'Grammar', pct: 45, status: 'necesita-refuerzo' },
      { topic: 'Have got', skill: 'Grammar', pct: 38, status: 'necesita-refuerzo' },
      { topic: 'Animals', skill: 'Vocabulary', pct: 60, status: 'en-progreso' },
      { topic: 'Colors', skill: 'Vocabulary', pct: 50, status: 'necesita-refuerzo' },
      { topic: 'Numbers', skill: 'Vocabulary', pct: 45, status: 'necesita-refuerzo' },
      { topic: 'Short texts', skill: 'Reading', pct: 45, status: 'necesita-refuerzo' },
      { topic: 'Instructions', skill: 'Listening', pct: 50, status: 'necesita-refuerzo' },
      { topic: 'Short sentences', skill: 'Writing', pct: 30, status: 'necesita-refuerzo' },
    ],
    recentActivities: [
      { activityId: 'a-1', title: 'Animales / Animals', score: 67, correctCount: 2, totalCount: 3, timeSec: 60, date: '2026-09-21', status: 'completada' },
      { activityId: 'a-2', title: 'Colores / Colors', score: 50, correctCount: 2, totalCount: 4, timeSec: 70, date: '2026-09-19', status: 'completada' },
      { activityId: 'a-6', title: 'Adivina la imagen', score: 50, correctCount: 1, totalCount: 2, timeSec: 45, date: '2026-09-16', status: 'completada' },
      { activityId: 'a-3', title: 'Completa la palabra', score: 0, correctCount: 0, totalCount: 0, timeSec: 0, date: '', status: 'pendiente' },
      { activityId: 'a-4', title: 'Une los conceptos', score: 0, correctCount: 0, totalCount: 0, timeSec: 0, date: '', status: 'pendiente' },
      { activityId: 'a-5', title: 'Ordena la oración', score: 0, correctCount: 0, totalCount: 0, timeSec: 0, date: '', status: 'pendiente' },
      { activityId: 'a-7', title: 'Juego de memoria', score: 0, correctCount: 0, totalCount: 0, timeSec: 0, date: '', status: 'pendiente' },
      { activityId: 'a-8', title: 'Quiz contra reloj', score: 0, correctCount: 0, totalCount: 0, timeSec: 0, date: '', status: 'pendiente' },
    ],
    weakTopics: [
      { topic: 'Present Simple', skill: 'Grammar', pct: 30, status: 'necesita-refuerzo' },
      { topic: 'Short sentences', skill: 'Writing', pct: 30, status: 'necesita-refuerzo' },
      { topic: 'Have got', skill: 'Grammar', pct: 38, status: 'necesita-refuerzo' },
    ],
    recommendation:
      'Emma está comenzando. Conviene priorizar actividades visuales de vocabulario (animales, colores) y reforzar "Verb to be" con ejercicios cortos antes de avanzar a escritura.',
  },
}

// Helpers de acceso (sustituibles por consultas reales a la base de datos).
export function getStudentByUsername(username: string): Student | undefined {
  const normalized = username.trim().toLowerCase()
  const stored = typeof window !== 'undefined'
    ? (JSON.parse(localStorage.getItem('adventure-users') ?? '[]') as Student[])
    : []
  const allStudents = [...students, ...stored.filter((user) => !students.some((item) => item.id === user.id))]
  return allStudents.find((s) => s.username === normalized)
}

export function getTeacherByUsername(username: string): Teacher | undefined {
  return teachers.find((t) => t.username === username.toLowerCase())
}

export function getActivity(id: string): Activity | undefined {
  return activities.find((a) => a.id === id)
}

export function getActivitiesForSubject(subjectId: string): Activity[] {
  return activities.filter((a) => a.subjectId === subjectId)
}

export function getBadge(id: string): Badge | undefined {
  return badges.find((b) => b.id === id)
}

export function getCourseStudents(courseId: string): Student[] {
  return students
    .filter((s) => s.courseId === courseId)
    .sort((a, b) => b.xp - a.xp)
}

export function getStudent(id: string): Student | undefined {
  return students.find((s) => s.id === id)
}

export function getStudentAnalysis(id: string): StudentAnalysis | undefined {
  return studentAnalyses[id]
}

export const GRADE_LABELS: Record<Grade, string> = {
  '1': '1.º grado',
  '2': '2.º grado',
  '3': '3.º grado',
  '4': '4.º grado',
  '5': '5.º grado',
  '6': '6.º grado',
}

export const GRADE_OPTIONS: Grade[] = ['1', '2', '3', '4', '5', '6']

export function getActivitiesForGrade(grade: Grade): Activity[] {
  return activities.filter((activity) => activity.grade === grade)
}

export function getActivityForGrade(id: string, grade: Grade): Activity | undefined {
  return getActivitiesForGrade(grade).find((activity) => activity.id === id)
}

export function addActivity(activity: Activity): void {
  activities.push(activity)
}
