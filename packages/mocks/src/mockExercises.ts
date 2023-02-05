export type ExerciseCategory =
    | 'Arms'
    | 'Legs'
    | 'Back'
    | 'Cardio'
    | 'Chest'
    | 'Core'
    | 'Shoulders'
    | 'Olympic'
    | 'Full Body';

export interface Exercise {
    name: string;
    category: ExerciseCategory;
}

export const MOCK_EXERCISE: Exercise = {
    name: 'Bench Press',
    category: 'Chest',
};

export const MOCK_EXERCISES: Exercise[] = [
    {
        name: 'Ab Wheel',
        category: 'Core',
    },
    {
        name: 'Back Extension',
        category: 'Back',
    },
    {
        name: 'Back Extension (Machine)',
        category: 'Back',
    },
    {
        name: 'Ball Slams',
        category: 'Core',
    },
    {
        name: 'Bench Dip',
        category: 'Arms',
    },
    {
        name: 'Bench Press (Barbell)',
        category: 'Chest',
    },
    {
        name: 'Bench Press (Cable)',
        category: 'Chest',
    },
    {
        name: 'Bench Press (Dumbbell)',
        category: 'Chest',
    },
    {
        name: 'Bench Press (Smith Machine)',
        category: 'Chest',
    },
    {
        name: 'Bent Over Row (Dumbbell, One Arm)',
        category: 'Back',
    },
    {
        name: 'Bent Over Row (Band)',
        category: 'Back',
    },
    {
        name: 'Bent Over Row (Barbell)',
        category: 'Back',
    },
    {
        name: 'Bent Over Row (Dumbbell)',
        category: 'Back',
    },
    {
        name: 'Bicep Curl (Barbell)',
        category: 'Arms',
    },
    {
        name: 'Bicep Curl (Cable)',
        category: 'Arms',
    },
    {
        name: 'Bicep Curl (Dumbbell)',
        category: 'Arms',
    },
    {
        name: 'Bicep Curl (Machine)',
        category: 'Arms',
    },
    {
        name: 'Bicycle Crunch',
        category: 'Core',
    },
    {
        name: 'Box Jump',
        category: 'Legs',
    },
    {
        name: 'Box Squat (Barbell)',
        category: 'Legs',
    },
    {
        name: 'Bulgarian Split Squat',
        category: 'Legs',
    },
    {
        name: 'Burpee',
        category: 'Cardio',
    },
    {
        name: 'Cable Crossover',
        category: 'Chest',
    },
    {
        name: 'Cable Crunch',
        category: 'Core',
    },
    {
        name: 'Cable Kickback',
        category: 'Arms',
    },
    {
        name: 'Cable Pull Through',
        category: 'Legs',
    },
    {
        name: 'Cable Twist',
        category: 'Core',
    },
    {
        name: 'Calf Press (Seated Leg Press)',
        category: 'Legs',
    },
    {
        name: 'Chest Dip',
        category: 'Chest',
    },
    {
        name: 'Chest Dip (Assisted)',
        category: 'Chest',
    },
    {
        name: 'Chest Fly',
        category: 'Chest',
    },
    {
        name: 'Chest Fly (Band)',
        category: 'Chest',
    },
    {
        name: 'Chest Fly (Dumbbell)',
        category: 'Chest',
    },
    {
        name: 'Chest Press (Machine)',
        category: 'Chest',
    },
    {
        name: 'Chin Up',
        category: 'Back',
    },
    {
        name: 'Chin Up (Assisted)',
        category: 'Back',
    },
    {
        name: 'Clean (Barbell)',
        category: 'Olympic',
    },
    {
        name: 'Clean and Jerk (Barbell)',
        category: 'Olympic',
    },
    {
        name: 'Climbing',
        category: 'Cardio',
    },
    {
        name: 'Concentration Curl (Dumbbell)',
        category: 'Arms',
    },
    {
        name: 'Cross Body Crunch',
        category: 'Core',
    },
    {
        name: 'Crunch',
        category: 'Core',
    },
    {
        name: 'Crunch (Machine)',
        category: 'Core',
    },
    {
        name: 'Cycling',
        category: 'Cardio',
    },
    {
        name: 'Cycling (Indoor)',
        category: 'Cardio',
    },
    {
        name: 'Deadlift (Band)',
        category: 'Legs',
    },
    {
        name: 'Deadlift (Barbell)',
        category: 'Back',
    },
    {
        name: 'Deadlift (Dumbbell)',
        category: 'Legs',
    },
    {
        name: 'Deadlift (Smith Machine)',
        category: 'Legs',
    },
    {
        name: 'Deadlift High Pull (Barbell)',
        category: 'Olympic',
    },
    {
        name: 'Decline Bench Press (Barbell)',
        category: 'Chest',
    },
    {
        name: 'Decline Bench Press (Smith Machine)',
        category: 'Chest',
    },
    {
        name: 'Decline Crunch',
        category: 'Core',
    },
    {
        name: 'Elliptical Machine',
        category: 'Cardio',
    },
    {
        name: 'Face Pull (Cable)',
        category: 'Shoulders',
    },
    {
        name: 'Flat Knee Raise',
        category: 'Core',
    },
    {
        name: 'Flat Leg Raise',
        category: 'Core',
    },
    {
        name: 'Floor Press (Dumbbell)',
        category: 'Chest',
    },
    {
        name: 'Front Raise',
        category: 'Shoulders',
    },
    {
        name: 'Front Raise (Cable)',
        category: 'Shoulders',
    },
    {
        name: 'Front Raise (Band)',
        category: 'Shoulders',
    },
    {
        name: 'Front Raise (Barbell)',
        category: 'Shoulders',
    },
    {
        name: 'Front Raise (Dumbbell)',
        category: 'Shoulders',
    },
    {
        name: 'Front Raise (Plate)',
        category: 'Shoulders',
    },
    {
        name: 'Front Squat (Barbell)',
        category: 'Legs',
    },
    {
        name: 'Glute Ham Raise',
        category: 'Legs',
    },
    {
        name: 'Glute Kickback (Machine)',
        category: 'Legs',
    },
    {
        name: 'Goblet Squat (Kettlebell)',
        category: 'Legs',
    },
    {
        name: 'Good Morning (Barbell)',
        category: 'Back',
    },
    {
        name: 'Hack Squat',
        category: 'Legs',
    },
    {
        name: 'Hack Squat (Barbell)',
        category: 'Legs',
    },
    {
        name: 'Hammer Curl (Band)',
        category: 'Arms',
    },
    {
        name: 'Hammer Curl (Cable)',
        category: 'Arms',
    },
    {
        name: 'Hammer Curl (Dumbbell)',
        category: 'Arms',
    },
    {
        name: 'Handstand Push Up',
        category: 'Shoulders',
    },
    {
        name: 'Hang Clean (Barbell)',
        category: 'Olympic',
    },
    {
        name: 'Hang Snatch (Barbell)',
        category: 'Olympic',
    },
    {
        name: 'Hanging Knee Raise',
        category: 'Core',
    },
    {
        name: 'Hanging Leg Raise',
        category: 'Core',
    },
    {
        name: 'High Knees',
        category: 'Cardio',
    },
    {
        name: 'Hiking',
        category: 'Cardio',
    },
    {
        name: 'Hip Abductor (Machine)',
        category: 'Legs',
    },
    {
        name: 'Hip Adductor (Machine)',
        category: 'Legs',
    },
    {
        name: 'Hip Thrust (Barbell)',
        category: 'Legs',
    },
    {
        name: 'Hip Thrust (Bodyweight)',
        category: 'Legs',
    },
    {
        name: 'Hip Thrust (Machine)',
        category: 'Legs',
    },
    {
        name: 'Incline Bench Press (Barbell)',
        category: 'Chest',
    },
    {
        name: 'Incline Bench Press (Cable)',
        category: 'Chest',
    },
    {
        name: 'Incline Bench Press (Dumbbell)',
        category: 'Chest',
    },
    {
        name: 'Incline Bench Press (Smith Machine)',
        category: 'Chest',
    },
    {
        name: 'Incline Chest Fly (Dumbbell)',
        category: 'Chest',
    },
    {
        name: 'Incline Chest Press (Machine)',
        category: 'Chest',
    },
    {
        name: 'Incline Curl (Dumbbell)',
        category: 'Arms',
    },
    {
        name: 'Incline Row (Dumbbell)',
        category: 'Back',
    },
    {
        name: 'Inverted Row (Bodyweight)',
        category: 'Back',
    },
    {
        name: 'Iso-Lateral Chest Press (Machine)',
        category: 'Chest',
    },
    {
        name: 'Iso-Lateral Row (Machine)',
        category: 'Back',
    },
    {
        name: 'Jackknife',
        category: 'Core',
    },
    {
        name: 'Jump Rope',
        category: 'Cardio',
    },
    {
        name: 'Jump Squat',
        category: 'Cardio',
    },
    {
        name: 'Jumping Jack',
        category: 'Cardio',
    },
    {
        name: 'Kettlebell Turkish Get Up',
        category: 'Full Body',
    },
    {
        name: 'Kipping Pull Up',
        category: 'Back',
    },
    {
        name: 'Knee Raise',
        category: 'Core',
    },
    {
        name: 'Kneeling Pulldown (Band)',
        category: 'Back',
    },
    {
        name: 'Knees to Elbows',
        category: 'Core',
    },
    {
        name: 'Lat Pulldown (Cable)',
        category: 'Back',
    },
    {
        name: 'Lat Pulldown (Machine)',
        category: 'Back',
    },
    {
        name: 'Lat Pulldown (Single Arm)',
        category: 'Back',
    },
    {
        name: 'Lat Pulldown (Underhand, Band)',
        category: 'Back',
    },
    {
        name: 'Lat Pulldown (Underhand, Cable)',
        category: 'Back',
    },
    {
        name: 'Lat Pulldown (Wide Grip, Cable)',
        category: 'Back',
    },
    {
        name: 'Lateral Box Jump',
        category: 'Legs',
    },
    {
        name: 'Lateral Raise (Band)',
        category: 'Shoulders',
    },
    {
        name: 'Lateral Raise (Cable)',
        category: 'Shoulders',
    },
    {
        name: 'Lateral Raise (Dumbbell)',
        category: 'Shoulders',
    },
    {
        name: 'Lateral Raise (Machine)',
        category: 'Shoulders',
    },
    {
        name: 'Leg Extension (Machine)',
        category: 'Legs',
    },
    {
        name: 'Leg Press',
        category: 'Legs',
    },
    {
        name: 'Lunge (Barbell)',
        category: 'Legs',
    },
    {
        name: 'Lunge (Bodyweight)',
        category: 'Legs',
    },
    {
        name: 'Lunge (Dumbbell)',
        category: 'Legs',
    },
    {
        name: 'Lying Leg Curl (Machine)',
        category: 'Legs',
    },
    {
        name: 'Mountain Climber',
        category: 'Legs',
    },
    {
        name: 'Muscle Up',
        category: 'Full Body',
    },
    {
        name: 'Oblique Crunch',
        category: 'Core',
    },
    {
        name: 'Overhead Press (Barbell)',
        category: 'Shoulders',
    },
    {
        name: 'Overhead Press (Cable)',
        category: 'Shoulders',
    },
    {
        name: 'Overhead Press (Dumbbell)',
        category: 'Shoulders',
    },
    {
        name: 'Overhead Press (Smith Machine)',
        category: 'Shoulders',
    },
    {
        name: 'Overhead Squat (Barbell)',
        category: 'Olympic',
    },
    {
        name: 'Pec Deck (Machine)',
        category: 'Chest',
    },
    {
        name: 'Pendlay Row (Barbell)',
        category: 'Back',
    },
    {
        name: 'Pistol Squat',
        category: 'Legs',
    },
    {
        name: 'Plank',
        category: 'Core',
    },
    {
        name: 'Power Clean',
        category: 'Olympic',
    },
    {
        name: 'Power Snatch (Barbell)',
        category: 'Olympic',
    },
    {
        name: 'Preacher Curl (Barbell)',
        category: 'Arms',
    },
    {
        name: 'Preacher Curl (Dumbbell)',
        category: 'Arms',
    },
    {
        name: 'Preacher Curl (Machine)',
        category: 'Arms',
    },
    {
        name: 'Pull Up',
        category: 'Back',
    },
    {
        name: 'Pull Up (Assisted)',
        category: 'Back',
    },
    {
        name: 'Pull Up (Band)',
        category: 'Back',
    },
    {
        name: 'Pullover (Dumbbell)',
        category: 'Chest',
    },
    {
        name: 'Pullover (Machine)',
        category: 'Chest',
    },
    {
        name: 'Push Press',
        category: 'Shoulders',
    },
    {
        name: 'Push Up',
        category: 'Chest',
    },
    {
        name: 'Push Up (Band)',
        category: 'Chest',
    },
    {
        name: 'Push Up (Knees)',
        category: 'Chest',
    },
    {
        name: 'Rack Pull (Barbell)',
        category: 'Back',
    },
    {
        name: 'Reverse Crunch',
        category: 'Core',
    },
    {
        name: 'Reverse Curl (Band)',
        category: 'Arms',
    },
    {
        name: 'Reverse Curl (Barbell)',
        category: 'Arms',
    },
    {
        name: 'Reverse Curl (Dumbbell)',
        category: 'Arms',
    },
    {
        name: 'Reverse Fly (Dumbbell)',
        category: 'Shoulders',
    },
    {
        name: 'Reverse Fly (Machine)',
        category: 'Shoulders',
    },
    {
        name: 'Reverse Plank',
        category: 'Core',
    },
    {
        name: 'Romanian Deadlift (Barbell)',
        category: 'Back',
    },
    {
        name: 'Romanian Deadlift (Dumbbell)',
        category: 'Legs',
    },
    {
        name: 'Rowing (Machine)',
        category: 'Cardio',
    },
    {
        name: 'Running',
        category: 'Cardio',
    },
    {
        name: 'Running (Treadmill)',
        category: 'Cardio',
    },
    {
        name: 'Russian Twist',
        category: 'Core',
    },
    {
        name: 'Seated Calf Raise (Machine)',
        category: 'Legs',
    },
    {
        name: 'Seated Calf Raise (Plate Loaded)',
        category: 'Legs',
    },
    {
        name: 'Seated Leg Curl (Machine)',
        category: 'Legs',
    },
    {
        name: 'Seated Leg Press (Machine)',
        category: 'Legs',
    },
    {
        name: 'Seated Overhead Press (Barbell)',
        category: 'Shoulders',
    },
    {
        name: 'Seated Row (Cable)',
        category: 'Back',
    },
    {
        name: 'Seated Row (Machine)',
        category: 'Back',
    },
    {
        name: 'Seated Row (Wide-Grip, Cable)',
        category: 'Back',
    },
    {
        name: 'Shoulder Press (Machine)',
        category: 'Shoulders',
    },
    {
        name: 'Shoulder Press (Plate Loaded)',
        category: 'Shoulders',
    },
    {
        name: 'Shrug (Barbell)',
        category: 'Shoulders',
    },
    {
        name: 'Shrug (Dumbbell)',
        category: 'Shoulders',
    },
    {
        name: 'Shrug (Machine)',
        category: 'Shoulders',
    },
    {
        name: 'Side Bend (Band)',
        category: 'Core',
    },
    {
        name: 'Side Bend (Cable)',
        category: 'Core',
    },
    {
        name: 'Side Bend (Dumbbell)',
        category: 'Core',
    },
    {
        name: 'Side Plank',
        category: 'Core',
    },
    {
        name: 'Single Leg Bridge',
        category: 'Legs',
    },
    {
        name: 'Sit Up',
        category: 'Core',
    },
    {
        name: 'Skullcrusher (Barbell)',
        category: 'Arms',
    },
    {
        name: 'Skullcrusher (Dumbbell)',
        category: 'Arms',
    },
    {
        name: 'Snatch (Barbell)',
        category: 'Olympic',
    },
    {
        name: 'Snatch Pull (Barbell)',
        category: 'Olympic',
    },
    {
        name: 'Split Jerk (Barbell)',
        category: 'Olympic',
    },
    {
        name: 'Squat (Band)',
        category: 'Legs',
    },
    {
        name: 'Squat (Barbell)',
        category: 'Legs',
    },
    {
        name: 'Squat (Bodyweight)',
        category: 'Legs',
    },
    {
        name: 'Squat (Dumbbell)',
        category: 'Legs',
    },
    {
        name: 'Standing Calf Raise (Barbell)',
        category: 'Legs',
    },
    {
        name: 'Standing Calf Raise (Bodyweight)',
        category: 'Legs',
    },
    {
        name: 'Standing Calf Raise (Dumbbell)',
        category: 'Legs',
    },
    {
        name: 'Standing Calf Raise (Machine)',
        category: 'Legs',
    },
    {
        name: 'Standing Calf Raise (Smith Machine)',
        category: 'Legs',
    },
    {
        name: 'Step-up',
        category: 'Legs',
    },
    {
        name: 'Stiff Leg Deadlift (Band)',
        category: 'Legs',
    },
    {
        name: 'Strict Military Press (Barbell)',
        category: 'Shoulders',
    },
    {
        name: 'Sumo Deadlift (Barbell)',
        category: 'Back',
    },
    {
        name: 'Sumo Deadlift High Pull (Barbell)',
        category: 'Full Body',
    },
    {
        name: 'Superman',
        category: 'Core',
    },
    {
        name: 'Swimming',
        category: 'Cardio',
    },
    {
        name: 'T Bar Row',
        category: 'Back',
    },
    {
        name: 'Thruster (Barbell)',
        category: 'Full Body',
    },
    {
        name: 'Thruster (Kettlebell)',
        category: 'Full Body',
    },
    {
        name: 'Toes To Bar',
        category: 'Core',
    },
    {
        name: 'Torso Rotation (Machine)',
        category: 'Core',
    },
    {
        name: 'Deadlift (Trap Bar)',
        category: 'Legs',
    },
    {
        name: 'Triceps Dip',
        category: 'Arms',
    },
    {
        name: 'Triceps Dip (Assisted)',
        category: 'Arms',
    },
    {
        name: 'Triceps Extension',
        category: 'Arms',
    },
    {
        name: 'Triceps Extension (Barbell)',
        category: 'Arms',
    },
    {
        name: 'Triceps Extension (Cable)',
        category: 'Arms',
    },
    {
        name: 'Triceps Extension (Dumbbell)',
        category: 'Arms',
    },
    {
        name: 'Triceps Extension (Machine)',
        category: 'Arms',
    },
    {
        name: 'Triceps Pushdown (Cable)',
        category: 'Arms',
    },
    {
        name: 'Upright Row (Barbell)',
        category: 'Back',
    },
    {
        name: 'Upright Row (Cable)',
        category: 'Arms',
    },
    {
        name: 'Upright Row (Dumbbell)',
        category: 'Shoulders',
    },
    {
        name: 'V Up',
        category: 'Core',
    },
    {
        name: 'Walking',
        category: 'Cardio',
    },
    {
        name: 'Wide Pull Up',
        category: 'Back',
    },
    {
        name: 'Wrist Roller',
        category: 'Arms',
    },
    {
        name: 'Yoga',
        category: 'Cardio',
    },
];

const ALPHABET_ARRAY: string[] = [
    'A',
    'B',
    'C',
    'D',
    'E',
    'F',
    'G',
    'H',
    'I',
    'J',
    'K',
    'L',
    'M',
    'N',
    'O',
    'P',
    'Q',
    'R',
    'S',
    'T',
    'U',
    'V',
    'W',
    'X',
    'Y',
    'Z',
];

export type OrganizedExercises = {
    title: string;
    data: Exercise[];
}[];

export function organizeMockExercises(mockExercises: Exercise[]): OrganizedExercises {
    const sortedExercises: { [key: string]: { title: string; data: Exercise[] } } = {};

    mockExercises.forEach((exercise) => {
        const currentIndex = exercise.name.charAt(0);

        if (!sortedExercises[currentIndex]) {
            sortedExercises[currentIndex] = {
                title: currentIndex,
                data: [],
            };
        }
        sortedExercises[currentIndex]?.data.push(exercise);
    });

    return Object.values(sortedExercises);
}

export const MOCK_EXERCISES_ORGANIZED = organizeMockExercises(MOCK_EXERCISES);
