/**
 * Adzoop Official Pricing Function (5 to 300 Autos)
 * Rate calculated per auto per day (in ₹)
 */
export const getDailyRate = (count: number): number => {
  if (count < 20) return 110;
  if (count < 30) return 100;
  if (count < 40) return 96;
  if (count < 50) return 92;
  if (count < 60) return 88;
  if (count < 70) return 84;
  if (count < 80) return 80;
  if (count < 90) return 76;
  if (count < 100) return 72;
  if (count < 110) return 67;
  if (count < 120) return 64;
  if (count < 130) return 61;
  if (count < 140) return 58;
  if (count < 150) return 55;
  if (count < 180) return 56;
  if (count < 210) return 55;
  if (count < 240) return 54;
  if (count < 270) return 53;
  return 52;
};

/**
 * Calculates Potential Customers for a campaign duration
 * Each auto reaches ~30 potential customers per day
 */
export const getPotentialCustomers = (autoCount: number, campaignDays: number): number => {
  return autoCount * campaignDays * 30;
};
