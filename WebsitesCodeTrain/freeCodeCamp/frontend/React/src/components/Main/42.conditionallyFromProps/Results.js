import React from 'react';

const Results = ({ fiftyFifty }) => <h1>{fiftyFifty >= 0.5 ? 'you win' : 'you lose'}</h1>;

export default Results;
