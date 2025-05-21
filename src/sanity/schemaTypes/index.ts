import teamMember from './teamMember';
import siteImage from './siteImage';
import post from './post';
import author from './author';
import category from './category';

export const schema: { types: Array<any> } = {
  types: [teamMember, siteImage, post, author, category],
};