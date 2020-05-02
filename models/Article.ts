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
          type: DataTypes.INTEGER.UNSIGNED,
          autoIncrement: true,
          primaryKey: true
        },
        title: {
          type: DataTypes.STRING(100),
          defaultValue: '',
        },
        body: {
          type: DataTypes.TEXT,
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
