// Point costs for character creation
export const ATTRIBUTE_COSTS = {
  base: 0, // 1 dot is free (base)
  additional: 5, // Each dot above 1 costs 5 freebie points
};

export const ABILITY_COSTS = {
  base: 0, // Abilities start at 0
  additional: 2, // Each dot costs 2 freebie points
};

export const ADVANTAGE_COSTS = {
  background: 1, // Each dot costs 1 freebie point
  willpower: 1, // Each dot costs 1 freebie point
  arete: 4, // Each dot costs 4 freebie points
  sphere: 7, // Each dot costs 7 freebie points
};

// Starting points for character creation
export const STARTING_POINTS = {
  attributes: {
    primary: 7,
    secondary: 5,
    tertiary: 3,
  },
  abilities: {
    primary: 13,
    secondary: 9,
    tertiary: 5,
  },
  advantages: {
    backgrounds: 7,
    willpower: 5, // Base willpower
    arete: 1, // Base arete
    spheres: 6,
  },
  freebie: 15, // Bonus/freebie points
};

// XP costs for improving character after creation
export const XP_COSTS = {
  attribute: 4, // Current rating x 4
  ability: 2, // Current rating x 2
  newAbility: 3, // 3 XP for new ability
  background: 3, // 3 XP per dot
  willpower: 1, // 1 XP per dot
  arete: 8, // Current rating x 8
  sphere: 7, // Current rating x 7
  newSphere: 10, // 10 XP for new sphere
};
