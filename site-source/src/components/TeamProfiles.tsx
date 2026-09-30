import {useState} from 'react';
import {Instagram, ArrowUpRight} from 'lucide-react';

const members=[
 {name:'Mehmet Fatih Aydın',role:'Kreatif Direktör & Sinematograf',handle:'00mfa00',initials:'MFA'},
 {name:'Sıla Turan',role:'Editör & İçerik Tasarımcısı',handle:'silaturan._',initials:'ST'},
 {name:'Miraç Aydın',role:'Post-Prodüksiyon Sanatçısı',handle:'_aydnmirac',initials:'MA'}
];
export default function TeamProfiles(){
 const [open,setOpen]=useState<string|null>(null);
 return <div className="team">{members.map(member=>{
 const expanded=open===member.handle;
 const url=`https://www.instagram.com/${member.handle}/`;
 return <div className="team-member" key={member.handle}
 onPointerEnter={event=>{if(event.pointerType==='mouse')setOpen(member.handle)}}
 onPointerLeave={event=>{if(event.pointerType==='mouse')setOpen(null)}}
 onFocus={event=>{if(event.target instanceof HTMLAnchorElement)setOpen(member.handle)}}
 onBlur={event=>{if(!event.currentTarget.contains(event.relatedTarget))setOpen(null)}}
 onKeyDown={event=>{if(event.key==='Escape'){setOpen(null);event.stopPropagation()}}}>
 <div className="team-person"><a className="team-profile-link" href={url} target="_blank" rel="noopener noreferrer" aria-label={`${member.name} Instagram profili (yeni sekme)`}><strong>{member.name}</strong><ArrowUpRight size={17} aria-hidden="true"/></a><button className="team-preview-toggle" aria-label={`${member.name} profil önizlemesi`} aria-expanded={expanded} aria-controls={`profile-${member.handle}`} onClick={()=>setOpen(expanded?null:member.handle)}><Instagram size={19} aria-hidden="true"/></button></div>
 <span>{member.role}</span>
 <div className="team-preview" id={`profile-${member.handle}`} hidden={!expanded}>
 <div className="team-avatar" aria-hidden="true">{member.initials}</div><div className="team-preview-copy"><span className="team-platform">INSTAGRAM</span><strong>{member.name}</strong><span className="team-handle">@{member.handle}</span><a href={url} target="_blank" rel="noopener noreferrer">Profili görüntüle <ArrowUpRight size={15} aria-hidden="true"/></a></div>
 </div></div>
 })}</div>
}

