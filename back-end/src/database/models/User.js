const UserModel = (sequelize, DataTypes) => {
  const User = sequelize.define(
  'User', 
  {
    id: { autoIncrement: true, primaryKey: true, type: DataTypes.INTEGER },
    name: { type: DataTypes.STRING },
    email: { type: DataTypes.STRING },
    password: { type: DataTypes.STRING },
    role: { type: DataTypes.STRING, defaultValue: 'customer' },
  },
  { timestamps: false, tableName: 'users', underscored: true },
);
  User.associate = (models) => {
    User.hasMany(
      models.Sale,
      { foreignKey: 'userId', as: 'order' },
      { foreignKey: 'sellerId', as: 'sales' },
    );
  }; return User;
};

module.exports = UserModel;