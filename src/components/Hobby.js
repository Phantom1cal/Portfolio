// src/components/Dummy.js

import { BadgeCheckIcon, CodeIcon } from "@heroicons/react/solid";
import React from "react";
import { projects } from "../data";

export default function Hobby() {
    return <section id="hobbys" className="text-gray-400 bg-gray-900 body-font">
    <div className="container px-5 py-10 mx-auto text-center lg:px-40">
      <div className="flex flex-col w-full mb-20">
        <BadgeCheckIcon className="text-blue-400 mx-auto inline-block w-10 mb-4" />
        <h1 className="sm:text-4xl text-3xl font-medium title-font mb-4 text-white">
          My Hobbies
          <p className="lg:w-2/3 mx-auto leading-relaxed text-base">
            These are some of the things I do in my spare time that 
            I enjoy and love to do. 
          </p>
        </h1>
        
        <div class="container mx-auto mt-10">
        <div class="grid grid-cols-2 gap-4">
            <div>
      I like to play basketball everyday and I train every tuesday for my school basketball training.
      The games are on saturdays where we compete against other schools to climb the leaderboard. 
                <img src="https://cdn.britannica.com/44/193844-050-11485B18/ball-net-basketball-game-arena.jpg" alt="Image 1" class="w-full h-auto object-cover border-4 border-red-700"/>
            </div>
            <div>
            I really love listenting to music as I listen to it almost everyday. It is something that comforts me. 
            I play drums to comfort myself and play the music I love and express my emotions through music.
                <img src="https://www.wollongongmusic.com.au/wp-content/uploads/2020/10/yamaha-stage-custom-euro-drum-kit-scb22dbs-deep-blue-sunburst.jpg" alt="Image 2" class="w-full h-auto object-cover border-4 border-blue-700"/>
            </div>
            <div>
            Drawing is one of my favourite things to do when I am bored or want to pass time. 
            I also draw because I enjoy sketching pictures I am interested in. Drwing can relieve stress from my head and calm myself. 

                <img src="https://media.istockphoto.com/id/871598016/photo/workplace-of-artist-flat-lay-top-view-desktop.jpg?s=612x612&w=0&k=20&c=9UZ1nq3Ce2kW_kmMy_aXhSr81l7WVE8zV3ZkOMBLcas=" alt="Image 3" class="w-full h-auto object-cover border-4 border-green-700"/>
            </div>
            <div>
            I am very intrigued with the topics that people makein video essays. 
            Most videos I have watched gave me more knowledge about the topic and expand my vocabulary with the words they use in the video.
                <img src="https://studybreaks.com/wp-content/uploads/2022/07/Parsons_Wally_StudyBreaks16_1.jpg" alt="Image 4" class="w-full h-auto object-cover border-4 border-purple-700"/>
            </div>
        </div>
    </div>
        </div>
        </div>
  </section>
}
