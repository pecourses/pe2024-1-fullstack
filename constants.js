const CONSTANTS = {
  GENDERS: ['male', 'female', 'other'],
  ROLES: ['executor', 'manager'],
  SALT_ROUNDS: Number(process.env.SALT_ROUNDS),
};

module.exports = CONSTANTS;
