module.exports = {
  async up(sequelize, DataTypes) {
    await sequelize.createTable(
      "User",
      {
        firstname: {
          type: DataTypes.STRING,
          allowNull: false,
        },
        lastname: {
          type: DataTypes.STRING,
          allowNull: false,
        },
        username: {
          type: DataTypes.STRING,
          allowNull: false,
          unique: true,
        },
        password: {
          type: DataTypes.STRING,
          allowNull: false,
        },
      },
      {
        schema: process.env.DATABASE_SCHEMA,
        timestamps: true,
      }
    );
  },
  async down(sequelize, DataTypes) {
    await sequelize.dropTable("User");
  },
};
