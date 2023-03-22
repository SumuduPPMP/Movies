import { IMovieBase } from './imoviebase';
export class Movie implements IMovieBase{
  Id: number;
  Name: string;
  Year: string;
  Image?: string;
}
