import { Sequelize, Model, DataTypes } from 'sequelize';

export default class Article extends Model {
  public id!: number;
  public title!: string;
  public body!: string;

  public readonly createdAt!: Date;
  public readonly updatedAt!: Date;

  public static initialize(sequelize: Sequelize) {
    this.init(
      {
        id: {
          type: DataTypes.BIGINT.UNSIGNED,
          primaryKey: true,
          autoIncrement: true,
          allowNull: false,
        },
        title: {
          type: DataTypes.STRING(100),
          allowNull: false,
          defaultValue: '',
        },
        body: {
          type: DataTypes.TEXT,
          allowNull: false,
          defaultValue: '',
        }
      }, {
        tableName: 'article',
        sequelize: sequelize,
      }
    );
    return this;
  }
}
