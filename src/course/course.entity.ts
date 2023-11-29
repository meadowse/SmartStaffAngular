import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class courseEnptity {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  name: string;

  @Column()
  cardType: string;

  @Column()
  cardHeader: string;

  @Column()
  cardText: string;

  @Column()
  cardV1: string;

  @Column()
  cardV2: string;

  @Column()
  cardV3: string;

  @Column()
  cardV4: string;

  @Column()
  cardV0: number;
}
