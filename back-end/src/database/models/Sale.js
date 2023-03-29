const SaleModel = (sequelize, DataTypes) => {
  const Sale = sequelize.define(
    'Sale',
    { id: { autoIncrement: true, primaryKey: true, type: DataTypes.INTEGER },
      totalPrice: { type: DataTypes.DOUBLE, field: 'total_price' },
      deliveryAddress: { type: DataTypes.STRING, field: 'delivery_address' },
      deliveryNumber: { type: DataTypes.STRING, field: 'delivery_number' },
      saleDate: { type: DataTypes.DATE, field: 'sale_date' },
      status: { type: DataTypes.INTEGER },
      userId: { type: DataTypes.INTEGER, foreignKey: true, field: 'user_id' },
      sellerId: { type: DataTypes.INTEGER, foreignKey: true, field: 'seller_id' },
    },
    { timestamps: false, tableName: 'sales', underscored: true },
  );
  Sale.associate = (models) => {
    Sale.belongsTo(models.User, { foreignKey: 'user_id', as: 'users' });
    Sale.belongsTo(models.User, { foreignKey: 'seller_id', as: 'seller' });
  }; return Sale; 
};

module.exports = SaleModel;
