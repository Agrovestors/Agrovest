'use client';

   import { PortableText } from '@portabletext/react';
   import Image from 'next/image';
   import { urlFor } from '@/sanity/lib/image';
   import { TeamMember } from '@/sanity/types';

   interface TeamProps {
     teamMembers: TeamMember[];
   }

   const Team: React.FC<TeamProps> = ({ teamMembers }) => {
     return (
       <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 p-6">
         {teamMembers.map((member) => (
           <div key={member._id} className="border rounded-lg p-4">
             {member.image && (
               <Image
                 src={urlFor(member.image).width(200).height(200).url()}
                 alt={member.image.alt}
                 width={200}
                 height={200}
                 className="rounded-full"
               />
             )}
             <h2 className="text-xl font-bold">{member.name}</h2>
             <p className="text-gray-600">{member.role}</p>
             {member.quote && <p className="italic">&quot;{member.quote}&quot;</p>}
             {member.speech && (
               <div className="prose">
                 <PortableText value={member.speech} />
               </div>
             )}
           </div>
         ))}
       </div>
     );
   };

   export default Team;