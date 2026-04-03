
import { useState } from "react";

export default function App(){

const gallery=[
"1.jpg","2.jpg","3.jpg","4.jpg","5.jpg",
"6.jpg","7.jpg","8.jpg","9.jpg","10.jpg"
];

const [activeImage,setActiveImage]=useState(gallery[0]);

const services=[
{
title:"Luxury Exterior Detailing",
description:"Careful hand washing, wheel cleaning, streak free glass and premium finish."
},
{
title:"Premium Interior Care",
description:"Deep interior cleaning and detailed vacuuming."
},
{
title:"Full Detail Packages",
description:"Complete inside and out vehicle detailing."
}
];

return(
<div className="min-h-screen bg-black text-white">

<section className="max-w-7xl mx-auto px-6 py-16">
<h1 className="text-5xl font-black">A&J Mobile Detailing</h1>
<p className="text-zinc-300 mt-4 max-w-xl">
Premium mobile detailing in Fountain Hills. Service performed at your home.
Access to water and power required.
</p>
</section>

<section className="max-w-7xl mx-auto px-6 py-16">
<h2 className="text-3xl font-bold mb-8">Our Work</h2>

<div className="grid lg:grid-cols-[1.4fr_0.6fr] gap-6">

<div className="border border-zinc-800 rounded-xl overflow-hidden">
<img src={`/gallery/${activeImage}`} className="w-full h-[420px] object-cover"/>
</div>

<div className="grid grid-cols-3 gap-3">
{gallery.map((img,i)=>(
<button key={i} onClick={()=>setActiveImage(img)}>
<img src={`/gallery/${img}`} className="h-24 w-full object-cover border border-zinc-800"/>
</button>
))}
</div>

</div>
</section>

<section className="max-w-7xl mx-auto px-6 py-16">
<h2 className="text-3xl font-bold mb-4">Pricing</h2>
<p className="text-zinc-300 max-w-xl">
Exterior wash and spray wax services start at <strong>$145</strong>. Pricing increases depending on vehicle size and condition.
</p>

<div className="grid md:grid-cols-3 gap-6 mt-8">
{services.map((s)=>(
<div key={s.title} className="border border-zinc-800 p-6 rounded">
<h3 className="font-bold">{s.title}</h3>
<p className="text-sm text-zinc-300 mt-2">{s.description}</p>
</div>
))}
</div>

</section>

</div>
)
}
