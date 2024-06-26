import {GenericEntity} from '../generic-entity';
import {
  Column,
  Entity,
  OneToMany
} from 'typeorm';
import {Post} from '../post/post';
import {Comment} from '../comment/comment';
import {
  ApiProperty,
  ApiPropertyOptional
} from '@nestjs/swagger';

export enum EUserRole {
  STAFF = 'STAFF',
  ORGANIZATION = 'ORGANIZATION',
  USER = 'USER',
}

export enum EUserVerification {
  NON_VERIFIED = 'NON_VERIFIED',
  VERIFIED = 'VERIFIED',
  PLUS_VERIFIED = 'PLUS_VERIFIED',
}

@Entity()
export class User extends GenericEntity {
  @Column({unique: true, length: 50})
  @ApiProperty()
  username: string;
  
  @Column({nullable: true, length: 255})
  @ApiPropertyOptional()
  name: string;
  
  @Column({unique: true, length: 255})
  @ApiProperty()
  email: string;
  
  @Column({select: false, length: 60})
  password?: string;
  
  @Column({nullable: true, length: 400})
  @ApiPropertyOptional()
  about: string;
  
  @Column({
    type: 'enum',
    enum: EUserRole,
    default: EUserRole.USER,
  })
  @ApiProperty()
  role?: EUserRole;
  
  @Column({type: 'text', nullable: true})
  @ApiPropertyOptional()
  avatar: string;
  
  @Column({
    type: 'enum',
    enum: EUserVerification,
    default: EUserVerification.NON_VERIFIED,
  })
  @ApiPropertyOptional()
  verified?: EUserVerification;
  
  @OneToMany(
      () => Post,
      post => post.user,
      {
        nullable: true,
        cascade: ['soft-remove', 'remove'],
      }
  )
  @ApiPropertyOptional()
  posts: Post[];
  
  @OneToMany(
      () => Comment,
      comment => comment.user,
      {
        nullable: true,
        cascade: ['soft-remove', 'remove'],
      }
  )
  @ApiPropertyOptional()
  comments: Comment[];
  
  @ApiPropertyOptional()
  token?: string;
}
