import { Column, DataType, Default, IsEmail, Model, Table, Unique } from 'sequelize-typescript';

@Table({ timestamps: true, paranoid: true })
export default class Registration extends Model<Registration> {

    @Column
    ddwId: string;

    @Column
    name: string;

    @IsEmail
    @Column
    email: string;

    @Column
    organization: string;

    @Column
    title: string;

    @Unique
    @Column({ type: DataType.STRING(32), allowNull: false })
    consumerKey: string;

    @Unique
    @Column({ type: DataType.STRING(32), allowNull: false })
    sharedSecret: string;

    @Default(false)
    @Column
    active: boolean;

}