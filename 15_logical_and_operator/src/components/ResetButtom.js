import React from 'react';

export default function ResetButtom({ count, resetCount, buttonStyle }) {
  return (
    <div>
      {count > 0 && (
        <div>
          <button style={buttonStyle} onClick={resetCount}>
            Reset
          </button>
        </div>
      )}
    </div>
  );
}
