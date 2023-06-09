const { Model, DataTypes } = require("sequelize");
const sequelize = require("../config/connection");

class Comment extends Model {}

Comment.init(
  {
    // id: {
    //   type: DataTypes.INTEGER,
    //   allowNull: false,
    //   primaryKey: true,
    //   autoIncrement: true,
    // },
    comment: {
      type: DataTypes.STRING,
      allowNull: false,
    },
  //   user_id: {
  //     type: DataTypes.INTEGER,
  //     allowNull: false,
  //     references: {
  //       model: "User",
  //       key: "id",
  //     },
  //   },
  //   userPost_id: {
  //     type: DataTypes.INTEGER,
  //     allowNull: false,
  //     references: {
  //       model: "Post",
  //       key: "id",
  //     },
  //   },
  },

  {
    sequelize,
    timestamps: true,
    freezeTableName: true,
    underscored: true,
    modelName: "Comment",
  }
);

module.exports = Comment;
