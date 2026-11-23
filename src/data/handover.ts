/**
 * Single source of truth for Stitch's basic facts and the walker handover
 * sheet. Both the homepage and `/walker` read from here, so editing the sheet
 * (or Stitch's age) means editing only this file.
 *
 * This content is published on a public site: keep it to facts a stranger
 * could safely read. No home address, personal phone numbers or house access
 * details belong here.
 */

/** Basic facts about Stitch, shared by every page. */
export interface Dog {
  name: string;
  breed: string;
  /** Age in whole years. The only place the age is defined. */
  ageYears: number;
  home: string;
  instagram: {
    handle: string;
    url: string;
  };
}

export const stitch: Dog = {
  name: 'Stitch',
  breed: 'Alaskan Malamute',
  ageYears: 7,
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

/** One row of the feeding table. */
export interface Meal {
  name: string;
  /** Loose time window; the sheet presents it as "normally". */
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
        extra: 'Plus 4 YuMove tablets (joint supplement, mornings only)',
      },
      {
        name: 'Evening meal',
        time: '7–8pm',
        amount: '90 g kibble + ½ Butternut Box packet',
      },
    ],
  },
  walking: [
    'We walk him in his harness and head collar.',
    'He is good 99% of the time, but he can sometimes play up and the head collar is good at preventing that.',
  ],
  beach: [
    'Digs in the sand and gets the zoomies, so take care when he is on the lead.',
    'Will go for a paddle at the water’s edge; he has never gone out of his depth with us.',
  ],
  house: [
    'Sleeps a lot, but likes to be in the same room as you.',
    'Doesn’t really go upstairs.',
    'Tends to pick a cold corner to lie in.',
  ],
  vet: {
    practice: 'Hollow Park Veterinary Surgery Ltd',
    phone: '01292 445678',
  },
};
