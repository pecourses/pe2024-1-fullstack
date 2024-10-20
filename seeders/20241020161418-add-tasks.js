'use strict';
/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    await queryInterface.bulkInsert(
      'tasks',
      [
        {
          body: 'To do hw',
          deadline: '2025-02-01',
          user_id: 6,
          created_at: new Date(),
          updated_at: new Date(),
        },
        {
          body: 'Walk',
          deadline: '2025-02-01',
          user_id: 6,
          created_at: new Date(),
          updated_at: new Date(),
        },
        {
          body: 'To do hw',
          deadline: '2025-02-01',
          user_id: 8,
          created_at: new Date(),
          updated_at: new Date(),
        },
      ],
      {}
    );
  },
  async down (queryInterface, Sequelize) {
    await queryInterface.bulkDelete('tasks', null, {});
  },
};
