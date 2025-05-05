import { useState } from 'react'

const MVPCard = () => {
  const [currentMessageIndex, setCurrentMessageIndex] = useState(-1);
  const [showAceMessage, setShowAceMessage] = useState(false);
  const [isBallSpinning, setIsBallSpinning] = useState(true);

  const messages = [
  {
    title: "Your Spike",
    content: "Is as powerful as your determination! 💪"
  },
  {
    title: "Your Serves",
    content: "Always ace my heart! 🎯"
  },
  {
    title: "Your Team Spirit",
    content: "Makes you my ultimate MVP! 🏆"
  }
];

  const handleBallClick = () => {
    setIsBallSpinning(true);
    setCurrentMessageIndex((prev) => (prev + 1) % messages.length);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-pink-100 to-red-200 flex items-center justify-center p-4">
      <div className="relative w-full max-w-md h-96 bg-pink-50 rounded-2xl shadow-xl overflow-hidden">
        
        {/* Court background */}
        <div className="absolute inset-0 bg-cover bg-center opacity-20"
          style={{ backgroundImage: 'url(/volleyball-court.png)' }}></div>

        {/* Floating volleyball SVG */}
        <div 
          onClick={handleBallClick}
          onAnimationEnd={() => setIsBallSpinning(false)}
          className={`absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2
            cursor-pointer transition-transform duration-1000
            ${isBallSpinning ? 'animate-bounce' : 'hover:scale-110'}`}
        >
          <p>🏐 Click Me 🏐</p>
          {/* <svg 
            className="w-24 h-24 text-orange-500 cursor-pointer"
            viewBox="0 0 24 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <circle cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="2"/>
            <path
              d="M12 2a10 10 0 0 1 8.5 15"
              stroke="currentColor"
              strokeWidth="1.5"
            />
            <path
              d="M12 22a10 10 0 0 1-8.5-15"
              stroke="currentColor"
              strokeWidth="1.5"
            />
            <path
              d="M5 7.5c3.5-2 8.5-2 12 0M5 16.5c3.5 2 8.5 2 12 0"
              stroke="currentColor"
              strokeWidth="1.5"
            />
          </svg> */}
        </div>

        {/* Messages */}
        {currentMessageIndex >= 0 && (
          <div className="absolute bottom-8 left-0 right-0 text-center px-4">
            <div className="bg-white/90 backdrop-blur-sm rounded-lg p-4 shadow-lg
              animate-fade-in-up">
              <h3 className="text-xl font-bold text-red-600 mb-2">
                {messages[currentMessageIndex].title}
              </h3>
              <p className="text-gray-700">
                {messages[currentMessageIndex].content}
              </p>
            </div>
          </div>
        )}

        {/* Hidden ACE button */}
        <button
          onClick={() => setShowAceMessage(true)}
          className="absolute top-2 right-2 opacity-0 hover:opacity-100 
            transition-opacity duration-300 text-sm bg-red-500 text-white
            px-2 py-1 rounded-full"
        >
          ACE
        </button>

        {/* ACE message modal */}
        {showAceMessage && (
          <div className="absolute inset-0 bg-black/50 flex items-center justify-center
            animate-fade-in">
            <div className="bg-white p-6 rounded-xl max-w-xs text-center">
              <h2 className="text-2xl font-bold text-red-600 mb-4">You're My Ace!🏐</h2>
              <p className="mb-4">Never forget hore nna ke rata wena fela, lerato laka ❤️</p>
              <p className="mb-4">❤️Lesedi X Itu❤️</p>
              <button
                onClick={() => setShowAceMessage(false)}
                className="bg-red-500 text-white px-4 py-2 rounded-lg hover:bg-red-600"
              >
                Close
              </button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};


export default MVPCard

// const MVPCard = () => {
//   const [currentMessageIndex, setCurrentMessageIndex] = useState(0);
//   const [isBallAnimated, setIsBallAnimated] = useState(true);

//   const messages = [
//     {
//       title: "Your Spike",
//       content: "Is as powerful as your determination! 💪"
//     },
//     {
//       title: "Your Serves",
//       content: "Always ace my heart! 🎯"
//     },
//     {
//       title: "Your Team Spirit",
//       content: "Makes you my ultimate MVP! 🏆"
//     }
//   ];

//   const handleBallClick = () => {
//     setIsBallAnimated(true);
//     setCurrentMessageIndex((prev) => (prev + 1) % messages.length);
//   };

//   return (
//     <div className="min-h-screen bg-gradient-to-br from-pink-100 to-red-100 flex items-center justify-center p-4">
//       <div className="relative w-full max-w-md h-96 bg-white rounded-2xl shadow-xl overflow-hidden">
//         {/* Court background */}
//         <div className="absolute inset-0 bg-cover bg-center opacity-20"
//           style={{ backgroundImage: 'url(/volleyball-court.png)' }}></div>

//         {/* Floating volleyball */}
//         <div 
//           onClick={handleBallClick}
//           onAnimationEnd={() => setIsBallAnimated(false)}
//           className={`absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2
//             cursor-pointer hover:scale-110 transition-transform duration-300
//             ${isBallAnimated ? 'animate-bounce' : ''}`}
//         >
//           <svg 
//             className="w-24 h-24 text-orange-500 cursor-pointer"
//             viewBox="0 0 24 24"
//             fill="none"
//             xmlns="http://www.w3.org/2000/svg"
//           >
//             <circle cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="2"/>
//             <path
//               d="M12 2a10 10 0 0 1 8.5 15"
//               stroke="currentColor"
//               strokeWidth="1.5"
//             />
//             <path
//               d="M12 22a10 10 0 0 1-8.5-15"
//               stroke="currentColor"
//               strokeWidth="1.5"
//             />
//             <path
//               d="M5 7.5c3.5-2 8.5-2 12 0M5 16.5c3.5 2 8.5 2 12 0"
//               stroke="currentColor"
//               strokeWidth="1.5"
//             />
//           </svg>
          


//         </div>

//         {/* Message display */}
//         {currentMessageIndex >= 0 && (
//           <div className="absolute bottom-8 left-0 right-0 text-center px-4">
//             <div className="bg-white/90 backdrop-blur-sm rounded-lg p-4 shadow-lg
//               animate-fade-in-up">
//               <h3 className="text-xl font-bold text-red-600 mb-2">
//                 {messages[currentMessageIndex].title}
//               </h3>
//               <p className="text-gray-700">
//                 {messages[currentMessageIndex].content}
//               </p>
//             </div>
//           </div>
//         )}
//       </div>
//     </div>
//   );
// };

// function App() {
//   const [currentMessage, setCurrentMessage] = useState('');
//   const [isBallAnimated, setIsBallAnimated] = useState(false);

//   return (
//     <div className="min-h-screen bg-gradient-to-br from-pink-100 to-red-200 flex items-center justify-center p-4">
//       <div className="relative w-full max-w-md h-96 bg-white rounded-2xl shadow-xl overflow-hidden">
//         {/* Volleyball court background */}
//         <div 
//           className="absolute inset-0 bg-cover bg-center opacity-20"
//           style={{ backgroundImage: 'url(/volleyball-court.png)' }}
//         ></div>
        
//         {/* Interactive elements go here */}
//         <MVPCard/>
//       </div>
//     </div>
//   );
// }

// export default App


/*
<svg 
            className="w-24 h-24 text-orange-500 cursor-pointer"
            viewBox="0 0 24 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <circle cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="2"/>
            <path
              d="M12 2a10 10 0 0 1 8.5 15"
              stroke="currentColor"
              strokeWidth="1.5"
            />
            <path
              d="M12 22a10 10 0 0 1-8.5-15"
              stroke="currentColor"
              strokeWidth="1.5"
            />
            <path
              d="M5 7.5c3.5-2 8.5-2 12 0M5 16.5c3.5 2 8.5 2 12 0"
              stroke="currentColor"
              strokeWidth="1.5"
            />
          </svg>
*/ 