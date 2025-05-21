import { groq } from 'next-sanity';
import { client } from './client';
import { TeamMember, SiteImage } from '../types';

export const getTeamMembers = async (): Promise<TeamMember[]> => {
  return client.fetch(groq`*[_type == "teamMember"]{
    _id,
    name,
    image { asset->{_ref}, alt },
    role,
    quote,
    speech
  }`);
};

export const getSiteImages = async (): Promise<SiteImage[]> => {
  return client.fetch(groq`*[_type == "siteImage"]{
    _id,
    name,
    image { asset->{_ref}, alt }
  }`);
};

export const getSiteImageByName = async (name: string): Promise<SiteImage | null> => {
  return client.fetch(groq`*[_type == "siteImage" && name == $name][0]{
    _id,
    name,
    image { asset->{_ref}, alt }
  }`, { name });
};