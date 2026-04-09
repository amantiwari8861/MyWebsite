import React, { useState } from "react";
import { motion } from "framer-motion";
import { Search, MapPin, Briefcase } from "lucide-react";

function JobSearchFilter({ onSearch }) {

const [keyword,setKeyword] = useState("");
const [location,setLocation] = useState("");
const [experience,setExperience] = useState("");

const handleSearch = () => {
onSearch({ keyword, location, experience });
};

return (

<section className="py-20 bg-gray-100">

<div className="max-w-6xl mx-auto px-6">

<motion.div
initial={{opacity:0,y:40}}
whileInView={{opacity:1,y:0}}
transition={{duration:0.6}}
className="bg-white shadow-xl rounded-2xl p-8"
>

<h2 className="text-3xl font-bold mb-6 text-center">
Find Your Dream Job
</h2>

<div className="grid md:grid-cols-4 gap-6">

{/* Keyword Search */}

<div className="flex items-center border rounded-lg px-3">

<Search size={18} className="text-gray-500"/>

<input
type="text"
placeholder="Job title..."
value={keyword}
onChange={(e)=>setKeyword(e.target.value)}
className="w-full p-2 outline-none"
/>

</div>


{/* Location */}

<div className="flex items-center border rounded-lg px-3">

<MapPin size={18} className="text-gray-500"/>

<select
value={location}
onChange={(e)=>setLocation(e.target.value)}
className="w-full p-2 outline-none"
>

<option value="">Location</option>
<option>Gurgaon</option>
<option>Delhi</option>
<option>Remote</option>

</select>

</div>


{/* Experience */}

<div className="flex items-center border rounded-lg px-3">

<Briefcase size={18} className="text-gray-500"/>

<select
value={experience}
onChange={(e)=>setExperience(e.target.value)}
className="w-full p-2 outline-none"
>

<option value="">Experience</option>
<option>0-1 Years</option>
<option>1-3 Years</option>
<option>3-5 Years</option>

</select>

</div>


{/* Search Button */}

<button
onClick={handleSearch}
className="bg-purple-600 text-white rounded-lg hover:bg-purple-700 transition"
>

Search Jobs

</button>

</div>

</motion.div>

</div>

</section>

);

}

export default JobSearchFilter;
