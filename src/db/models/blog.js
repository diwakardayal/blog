/** @format */

// models/BlogPost.js
const { DataTypes } = require("sequelize");
const User = require("./user");

const sequelize = require("../config");

const Blog = sequelize.define(
  "BlogPost",
  {
    id: {
      type: DataTypes.INTEGER,
      autoIncrement: true,
      primaryKey: true,
    },
    title: {
      type: DataTypes.TEXT,
      allowNull: false,
    },
    content: {
      type: DataTypes.TEXT,
      allowNull: false,
    },
    authorId: {
      type: DataTypes.INTEGER,
      references: {
        model: User, // This is a reference to the User model
        key: "id", // This is the column name in the User table
      },
    },
    createdAt: {
      type: DataTypes.DATE,
      defaultValue: DataTypes.NOW,
    },
  },
  {
    tableName: "blog_posts", // The name of the table in your database
    timestamps: false, // Disable Sequelize's automatic timestamp fields
  },
);

// Define the association
User.hasMany(Blog, { foreignKey: "authorId" });
Blog.belongsTo(User, { foreignKey: "authorId" });

module.exports = Blog;
