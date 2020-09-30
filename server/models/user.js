const bcrypt = require('bcrypt');
const { Model } = require('sequelize');

module.exports = (sequelize, DataTypes) => {
  class User extends Model {
    static associate(models) {
      // define association here
    }
  }
  User.init(
    {
      id: {
        type: DataTypes.UUID,
        defaultValue: DataTypes.UUIDV4,
        primaryKey: true,
      },
      email: {
        type: DataTypes.STRING,
        allowNull: false,
        unique: true,
      },
      username: {
        type: DataTypes.STRING,
        allowNull: false,
        unique: true,
      },
      password: {
        type: DataTypes.STRING,
        allowNull: false,
        // set(value) {
        //   const hash = bcrypt.hashSync(value, 10);
        //   this.setDataValue('password', hash);
        // },
      },
    },
    {
      sequelize,
      modelName: 'User',
    }
  );

  User.sync()
    .then(() => console.log('User model synced successfully'))
    .catch((err) => console.error(err));

  return User;
};
