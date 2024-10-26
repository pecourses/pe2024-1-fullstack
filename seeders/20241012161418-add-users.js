'use strict';
const bcrypt = require('bcrypt');
const { SALT_ROUNDS } = require('../constants');

// шифрування
// 1234 -> ljfdsklfjsdklf4335245пв2а4ипа52піав
// 1234 <- ljfdsklfjsdklf4335245пв2а4ипа52піав

// хешування
// 1234 -> ljfdsklfjsdklf4335245

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    await queryInterface.bulkInsert(
      'users',
      [
        {
          id: 1,
          nickname: 'user1',
          email: 'user1@example.com',
          tel: '+380501234567',
          passw_hash: bcrypt.hashSync('password1', SALT_ROUNDS),
          birthday: '1990-01-15',
          gender: 'male',
          role: 'manager',
          created_at: new Date(),
          updated_at: new Date(),
        },
        {
          id: 2,
          nickname: 'user2',
          email: 'user2@example.com',
          tel: '0501234568',
          passw_hash: bcrypt.hashSync('password2', SALT_ROUNDS),
          birthday: '1985-05-10',
          gender: 'female',
          role: 'manager',
          created_at: new Date(),
          updated_at: new Date(),
        },
        {
          id: 3,
          nickname: 'user3',
          email: 'user3@example.com',
          tel: '+380671234569',
          passw_hash: bcrypt.hashSync('password3', SALT_ROUNDS),
          birthday: '1992-12-20',
          gender: 'male',
          role: 'executor',
          created_at: new Date(),
          updated_at: new Date(),
        },
        {
          id: 4,
          nickname: 'user4',
          email: 'user4@example.com',
          tel: '0671234560',
          passw_hash: bcrypt.hashSync('password4', SALT_ROUNDS),
          birthday: '1978-09-25',
          gender: 'female',
          role: 'executor',
          created_at: new Date(),
          updated_at: new Date(),
        },
        {
          id: 5,
          nickname: 'user5',
          email: 'user5@example.com',
          tel: '+380931234561',
          passw_hash: bcrypt.hashSync('password5', SALT_ROUNDS),
          birthday: '1989-03-18',
          gender: 'other',
          role: 'executor',
          created_at: new Date(),
          updated_at: new Date(),
        },
        {
          id: 6,
          nickname: 'user6',
          email: 'user6@example.com',
          tel: '0931234562',
          passw_hash: bcrypt.hashSync('password6', SALT_ROUNDS),
          birthday: '2000-11-30',
          gender: 'male',
          role: 'executor',
          created_at: new Date(),
          updated_at: new Date(),
        },
        {
          id: 7,
          nickname: 'user7',
          email: 'user7@example.com',
          tel: '+380681234563',
          passw_hash: bcrypt.hashSync('password7', SALT_ROUNDS),
          birthday: '1995-06-08',
          gender: 'female',
          role: 'executor',
          created_at: new Date(),
          updated_at: new Date(),
        },
        {
          id: 8,
          nickname: 'user8',
          email: 'user8@example.com',
          tel: '0681234564',
          passw_hash: bcrypt.hashSync('password8', SALT_ROUNDS),
          birthday: '1980-02-02',
          gender: 'male',
          role: 'executor',
          created_at: new Date(),
          updated_at: new Date(),
        },
        {
          id: 9,
          nickname: 'user9',
          email: 'user9@example.com',
          tel: '+380991234565',
          passw_hash: bcrypt.hashSync('password9', SALT_ROUNDS),
          birthday: '1975-08-14',
          gender: 'female',
          role: 'executor',
          created_at: new Date(),
          updated_at: new Date(),
        },
        {
          id: 10,
          nickname: 'user10',
          email: 'user10@example.com',
          tel: '0991234566',
          passw_hash: bcrypt.hashSync('password10', SALT_ROUNDS),
          birthday: '1993-07-22',
          gender: 'other',
          role: 'executor',
          created_at: new Date(),
          updated_at: new Date(),
        },
      ],
      {}
    );
  },

  async down (queryInterface, Sequelize) {
    await queryInterface.bulkDelete('users', null, {});
  },
};
