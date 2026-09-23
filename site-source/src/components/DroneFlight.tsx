import {useEffect,useRef} from 'react';
/** A restrained hero accent, never a page-wide floating overlay. */
export default function DroneFlight(){
 const drone=useRef<HTMLDivElement>(null);
 useEffect(()=>{const el=drone.current,hero=el?.closest<HTMLElement>('.hero');if(!el||!hero)return;const media=matchMedia('(max-width:760px), (prefers-reduced-motion:reduce)');let frame=0,visible=false,disabled=false,start=0,height=1;
 const paint=()=>{frame=0;if(disabled||!visible||document.hidden)return;const p=Math.max(0,Math.min(1,(scrollY-start)/height));el.style.transform=`translate3d(${-12*p}px,${24*p}px,0) rotate(${-4+2*p}deg)`};
 const schedule=()=>{if(!frame&&visible&&!disabled&&!document.hidden)frame=requestAnimationFrame(paint)};
 const measure=()=>{disabled=media.matches||document.documentElement.dataset.motion==='off';start=scrollY+hero.getBoundingClientRect().top;height=Math.max(1,hero.offsetHeight);if(disabled)el.style.transform='none';else schedule()};
 const observer=new IntersectionObserver(([entry])=>{visible=entry.isIntersecting;schedule()});observer.observe(hero);const resize=new ResizeObserver(measure);resize.observe(hero);measure();window.addEventListener('scroll',schedule,{passive:true});window.addEventListener('resize',measure);window.addEventListener('gamma-motion',measure);document.addEventListener('visibilitychange',schedule);media.addEventListener('change',measure);
 return()=>{cancelAnimationFrame(frame);observer.disconnect();resize.disconnect();window.removeEventListener('scroll',schedule);window.removeEventListener('resize',measure);window.removeEventListener('gamma-motion',measure);document.removeEventListener('visibilitychange',schedule);media.removeEventListener('change',measure)};
 },[]);
 return <div ref={drone} className="drone-flight" aria-hidden="true"><img src="/images/drone.webp" alt="" width="900" height="600" decoding="async"/></div>;
}
