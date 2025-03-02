import React from 'react';

function Intro() {
  return (
    <div className="h-[75vh] w-[100vw] flex flex-col justify-around px-8 sm:px-20" style={{padding:'30px'}}>
      <p className="text-4xl sm:text-8xl sm:text-left">
        This is where bold ideas become iconic
      </p>
      <div className="flex flex-col sm:flex-row w-full justify-evenly gap-4 py-16 space-y-4 sm:space-y-0 sm:space-x-4">
        <p>cumque in aliquid magnam consectetur amet officiis suscipit unde dolor saepe. Nam, nihil voluptates! Optio!</p>
        <p>tate hic quos non vitae voluptatibus minima ipsam maxime quam quo doloribus vero numquam!</p>
        <p>audantium ratione maxime blanditiis magni adipisci aliquam optio illum obcaecati. Tenetur, ratione totam?</p>
        <p>ni eum fugit esse possimus beatae ipsam blanditiis hic cumque nihil voluptates illo dolore impedit!</p>
      </div>
    </div>
  );
}

export default Intro;

