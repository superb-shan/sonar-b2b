// import React, { useState } from "react";
// import Carousel from "react-spring-3d-carousel";
// import { config } from "react-spring";
// import prev1 from "public/prev1.svg";
// import next1 from "public/next1.svg";
// import Image from "next/image";

// function SwiperCustom(props) {

//     const [goToSlide, setGoToSlide] = useState(0);
//     const handlePrevious = () => {
//         setGoToSlide(goToSlide - 1)


//     }
//     const handleNext = () => {
//         setGoToSlide(goToSlide + 1)

//     }

//     const slides = props.content.map((ele, ind) => {
//         return {
//             key: `${ind}`,
//             content: <div className={` border-t-[#0066CD] border-t-[5px] shadow-[0px_10px_20px_#00000014] px-[28px] pb-[30px] rounded-b-[10px]  w-[552px] min-h-[232px] bg-white`}  >
//                 <p className='text-[#0271E7] text-[50px] font-medium leading-0'>“</p>
//                 <p className='text-center text-[14px] text-[#6E6E72] font-medium pb-[20px] mt-[-30px]'>{ele[0]}</p>
//                 <p className='text-center text-[14px] text-[#6E6E72] font-bold pb-[10px] '>{ele[1]}</p>
//                 <p className='text-center text-[14px] text-[#6E6E72] font-medium'>{ele[2]}</p>

//             </div>
//         }
//     }).map((slide, index) => {
//         return { ...slide, onClick: () => setGoToSlide(index) };
//     });



//     return (
//         <div style={{ width: "50%", height: "300px", margin: "0 auto" }}>
//             <Carousel
//                 slides={slides}
//                 goToSlide={goToSlide}
//                 goToSlideDelay={200}
//                 offsetRadius={1}
//                 showNavigation={false}
//                 animationConfig={config.stiff}
//             />
//             <div className="flex justify-center items-center gap-[60px]">
//                 <Image className="cursor-pointer" src={prev1} onClick={handlePrevious} />
//                 <Image className="cursor-pointer" src={next1} onClick={handleNext} />
//             </div>

//         </div>
//     );
// }


import * as React from 'react';
import { Paper, Typography, Button } from '@mui/material';
import Carousel from 'react-material-ui-carousel';

const SwiperCustom = () => (
    <div className='w-[500px]'>
        <Carousel>
            {/* Change above line to <> and it works, maybe some issues in carousel */}
            <Paper>
                <Typography>First Item</Typography>
                <Button variant="outlined">Click me please!</Button>
            </Paper>
            <Paper>
                <Typography>Second Item</Typography>
                <Button variant="outlined">Click me please!</Button>
            </Paper>
            <Paper>
                <Typography>Third Item</Typography>
                <Button variant="outlined">Click me please!</Button>
            </Paper>
        </Carousel>
    </div>

);

export default SwiperCustom;
