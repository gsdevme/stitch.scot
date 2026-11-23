/**
 * Single source of truth for Stitch's basic facts and the walker handover
 * sheet. Both the homepage and `/info` read from here, so editing the sheet
 * means editing only this file. His age is never written down: it is worked
 * out from his date of birth, so it stays right after each birthday.
 *
 * This content is published on a public site: keep it to facts a stranger
 * could safely read. No home address, personal phone numbers or house access
 * details belong here.
 */

/** Basic facts about Stitch, shared by every page. */
export interface Dog {
  name: string;
  breed: string;
  /** ISO date (`YYYY-MM-DD`). His age everywhere on the site derives from this. */
  dateOfBirth: string;
  home: string;
  instagram: {
    handle: string;
    url: string;
  };
}

export const stitch: Dog = {
  name: 'Stitch',
  breed: 'Alaskan Malamute',
  dateOfBirth: '2018-12-06',
  home: 'Scotland',
  instagram: {
    handle: '@stitchmalamute',
    url: 'https://www.instagram.com/stitchmalamute/',
  },
};

const NUMBER_WORDS = [
  'zero', 'one', 'two', 'three', 'four', 'five', 'six', 'seven', 'eight', 'nine',
  'ten', 'eleven', 'twelve', 'thirteen', 'fourteen', 'fifteen', 'sixteen',
  'seventeen', 'eighteen', 'nineteen', 'twenty',
] as const;

/**
 * Spell out a small whole number in English, capitalised ("Seven").
 * Falls back to digits beyond twenty, which comfortably covers a dog's age.
 */
export function numberInWords(n: number): string {
  const word = NUMBER_WORDS[n];
  return word ? word.charAt(0).toUpperCase() + word.slice(1) : String(n);
}

/**
 * Age in whole years on a given day, counting a birthday from the start of
 * that day in the UK regardless of the viewer's or build machine's time zone.
 */
export function ageInYears(dateOfBirth: string, on: Date = new Date()): number {
  const [bornYear = 0, bornMonth = 1, bornDay = 1] = dateOfBirth.split('-').map(Number);
  const [year = 0, month = 1, day = 1] = new Intl.DateTimeFormat('en-CA', {
    timeZone: 'Europe/London',
  })
    .format(on)
    .split('-')
    .map(Number);
  const birthdayPassed = month > bornMonth || (month === bornMonth && day >= bornDay);
  return year - bornYear - (birthdayPassed ? 0 : 1);
}

/** One row of the feeding table. */
export interface Meal {
  name: string;
  /** Loose time window; the sheet presents it as the usual time. */
  time: string;
  /** The amount, set bold and large on the sheet. */
  amount: string;
  /** Anything given with this meal only, such as supplements. */
  extra?: string;
}

/** Content of the printable walker handover sheet, top to bottom. */
export interface Handover {
  food: {
    meals: Meal[];
  };
  walking: string[];
  beach: string[];
  house: string[];
  vet: {
    practice: string;
    phone: string;
  };
}

export const handover: Handover = {
  food: {
    meals: [
      {
        name: 'Breakfast',
        time: '8–9am',
        amount: '90 g kibble + ½ Butternut Box packet',
        extra: 'with 4 YuMove tablets',
      },
      {
        name: 'Evening meal',
        time: '7–8pm',
        amount: '90 g kibble + ½ Butternut Box packet',
      },
    ],
  },
  walking: [
    'We walk him with his harness and head collar.',
    'The head collar is there because he occasionally plays up, and it is good at stopping that.',
    'For his night-time pee we tend to take him out on just his collar, as he knows the routine.',
  ],
  beach: [
    'Digs in the sand and gets the zoomies, so take care while he is on the lead.',
    'Paddles at the water’s edge. He has never gone out of his depth with us.',
  ],
  house: [
    'Sleeps a lot, and likes to be in the same room as you.',
    'Doesn’t really go upstairs.',
    'Usually picks a cold corner to lie in.',
  ],
  vet: {
    practice: 'Hollow Park Veterinary Surgery',
    phone: '01292 445678',
  },
};
