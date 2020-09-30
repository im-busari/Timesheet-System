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
        validate: {
          isEmail: {
            args: true,
            msg: 'Invalid email address',
          },
          notNull: {
            msg: 'Please, provide your email address.',
          },
        },
      },
      username: {
        type: DataTypes.STRING,
        allowNull: false,
        unique: true,
        validate: {
          isAlphanumeric: true,
          notEmpty: true,
          notNull: {
            msg:
              'Please, give us a unique username. You will need it to login later.',
          },
          len: {
            args: [5, 50],
            msg: 'Please, mind the allowed min and max number of characters.',
          },
        },
      },
      password: {
        type: DataTypes.STRING,
        allowNull: false,
        set(value) {
          const hash = bcrypt.hashSync(value, 10);
          this.setDataValue('password', hash);
        },
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
