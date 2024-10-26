'use strict';
/** @type {import('sequelize-cli').Migration} */

const { addDays, format } = require('date-fns');

const today = new Date();

module.exports = {
  async up (queryInterface, Sequelize) {
    await queryInterface.bulkInsert(
      'tasks',
      [
        {
          body: 'Complete the project documentation',
          deadline: format(addDays(today, 0), 'yyyy-MM-dd'), // Сьогоднішня дата
          user_id: 3,
          created_at: new Date(),
          updated_at: new Date(),
        },
        {
          body: 'Prepare presentation slides for the meeting',
          deadline: format(addDays(today, 1), 'yyyy-MM-dd'), // Завтра
          user_id: 4,
          created_at: new Date(),
          updated_at: new Date(),
        },
        {
          body: 'Review the code for the new feature',
          deadline: format(addDays(today, 2), 'yyyy-MM-dd'), // Післязавтра
          user_id: 5,
          created_at: new Date(),
          updated_at: new Date(),
        },
        {
          body: 'Fix bugs reported by QA team',
          deadline: format(addDays(today, 0), 'yyyy-MM-dd'),
          user_id: 6,
          created_at: new Date(),
          updated_at: new Date(),
        },
        {
          body: 'Update the user guide with recent changes',
          deadline: format(addDays(today, 1), 'yyyy-MM-dd'),
          user_id: 7,
          created_at: new Date(),
          updated_at: new Date(),
        },
        {
          body: 'Implement authentication module',
          deadline: format(addDays(today, 2), 'yyyy-MM-dd'),
          user_id: 8,
          created_at: new Date(),
          updated_at: new Date(),
        },
        {
          body: 'Organize a team-building event',
          deadline: format(addDays(today, 0), 'yyyy-MM-dd'),
          user_id: 9,
          created_at: new Date(),
          updated_at: new Date(),
        },
        {
          body: 'Create a deployment plan for the new release',
          deadline: format(addDays(today, 1), 'yyyy-MM-dd'),
          user_id: 10,
          created_at: new Date(),
          updated_at: new Date(),
        },
        {
          body: 'Analyze the project requirements',
          deadline: format(addDays(today, 2), 'yyyy-MM-dd'),
          user_id: 3,
          created_at: new Date(),
          updated_at: new Date(),
        },
        {
          body: 'Plan the sprint for next development cycle',
          deadline: format(addDays(today, 0), 'yyyy-MM-dd'),
          user_id: 4,
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
