import React from 'react'

    // const events = [
    //     {
    //         id:1,
    //         month: "Yanvar",
    //         date: "15 Yanvar 2025",
    //         category: 'Matematika',
    //         desc: "Matematika bo'yicha seminar >Lorem ipsum dolor sit amet consectetur adipisicing elit. Officiis sit, eum dolores repudiandae animi a sint. Voluptatem, adipisci! Ab, dolor ",
    //     },
    //     {
    //         id:2,
    //         month: "Fevral",
    //         date: "19 Fevral 2025",
    //         category: 'Matematika',
    //         desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Officiis sit, eum dolores repudiandae animi a sint. Voluptatem, adipisci! Ab, dolor",
    //     },
    //     {
    //         id:3,
    //         month: "Mart",
    //         date: "5 Mart 2025",
    //         category: 'Matematika',
    //         desc: "Fizika bo'yicha >Lorem ipsum dolor sit amet consectetur adipisicing elit. Officiis sit, eum dolores repudiandae animi a sint. Voluptatem, adipisci! Ab, dolor",
    //     },
    //     {
    //         id:4,
    //         month: "Aprel",
    //         date: "23 Aprel 2025",
    //         category: 'Matematika',
    //         desc: "Ydjienc Lorem ipsum dolor sit amet consectetur adipisicing elit. Officiis sit, eum dolores repudiandae animi a sint. Voluptatem, adipisci! Ab, dolor bo'yicha seminar",
    //     },
    //     {
    //         id:5,
    //         month: "May",
    //         date: "25 May 2025",
    //         category: 'Matematika',
    //         desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Officiis sit, eum dolores repudiandae animi a sint. Voluptatem, adipisci! Ab, dolorr",
    //     }
    // ]  

const AboutPage = () => {  

    // const [selectedMonth, setSelectedMonth] = useState("Yanvar");
    // const  filterEvents = events.filter(event => event.month === selectedMonth)

  return (
    // <div className="p-6 max-w-6xl mx-auto">
    //     <div className="flex gap-4 mb-6">
    //         <select value={selectedMonth} onChange={(e) => setSelectedMonth(e.target.value)} className="border rounded-lg px-4 py-2">
    //             <option value="Yanvar">Yanvar</option>
    //             <option value="Fevral">Fevral</option>
    //             <option value="Mart">Mart</option>
    //             <option value="Aprel">Aprel</option>
    //             <option value="May">May</option>
    //             <option value="Iyun">Iyun</option>
    //             <option value="Iyul">Iyul</option>
    //             <option value="Avgust">Avgust</option>
    //         </select>
    //     </div>
    //     <div className="grid md:grid-cols-2 gap-6">
    //         {filterEvents.length > 0 ? 
    //         filterEvents.map((event) => (
    //             <div
    //               key={event.id}
    //               className="border rounded-xl shadow p-6 bg-white"
    //             >
    //               <span className="text-xs font-semibold text-green-600 uppercase">
    //                 {event.category}
    //               </span>
    //               <h2 className="text-xl font-bold mt-2 mb-2">{event.title}</h2>
    //               <p className="text-gray-600 mb-2">{event.desc}</p>
    //               <p className="text-sm text-gray-500">📅 {event.date}</p>
    //               {/* <p className="text-sm text-gray-500">⏰ {event.time}</p> */}
    //               {/* <p className="text-sm text-gray-500">📍 {event.place}</p> */}
    //               <button className="mt-4 bg-green-600 text-white p-2 rounded-lg">
    //                 Ko'proq o'qish
    //               </button>
    //             </div>
    //           )): (
    //             <p>s</p>
    //           )}
              
    //     </div>
    // </div>
    <div className='text-center text-white pt-45'>
      <h1 className='text-2xl py-3 font-[700]'>About The Site</h1>
      <p>Bu saytda davlatlar haqida ma'lumotlar olishingiz mumkin</p>
    </div>
  )
}

export default AboutPage