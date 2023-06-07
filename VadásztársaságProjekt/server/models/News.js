module.exports = (sequelize, DataTypes) => {
    const News = sequelize.define("News", {
      temacim: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      temadatum: {
        type: DataTypes.DATE,
        allowNull: false,
      },
      temaleiras: {
        type: DataTypes.STRING,
        allowNull: false,
      },
    });
  
    return News;
  };
  