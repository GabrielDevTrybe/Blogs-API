const User = (sequelize, DataTypes) => {
  const User = sequelize.define('User', {
    id:{
      type: DataTypes.INTEGER,
      primaryKey: true,
    },
    displayName: DataTypes.STRING(255),
    email: DataTypes.STRING(255),
    password: DataTypes.STRING(255),
    image: DataTypes.STRING(255)
  },
    {
      tableName: 'users',
      underscored: true,
      timestamps: false,
    },
  );

  // User.associate = (models) => {
  //   User.hasMany(models.BlogPosts, {
  //     as: 'blogPost',
  //     foreignKey: 'user_id',
  //   });
  // }

  return User;
};

module.exports = User;