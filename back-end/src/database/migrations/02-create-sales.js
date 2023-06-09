'use strict';

module.exports = {
  async up (queryInterface, Sequelize) {
    await queryInterface.createTable('sales', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      totalPrice: {
        type: Sequelize.DECIMAL(9, 2),
        allowNull: false,
        field: 'total_price',  
      },
      deliveryAddress: {
        type: Sequelize.STRING,
        allowNull: false,
        field: 'delivery_address',  
      },
      deliveryNumber: {
        type: Sequelize.STRING,
        allowNull: false,
        field: 'delivery_number',  
      },
      saleDate: {
        type: Sequelize.DATE,
        allowNull: false,
        field: 'sale_date',
        defaultValue: Sequelize.NOW,
      },
      status: {
        type: Sequelize.STRING,
        allowNull: false,
      },
      userId: {
        type: Sequelize.INTEGER,
        onUpdate: 'CASCADE',
        onDelete: 'CASCADE',
        field: 'user_id',
        references: {
          model: 'users',
          key: 'id',
        },
      },
      sellerId: {
        type: Sequelize.INTEGER,
        onUpdate: 'CASCADE',
        onDelete: 'CASCADE',
        field: 'seller_id',
        references: {
          model: 'users',
          key: 'id',
        },
      },
    });
  },

  async down (queryInterface, Sequelize) {
    await queryInterface.dropTable('sales');
  }
};
