import React from 'react'

function Toggle() {
  const button = document.querySelector('.toggle');
  button.addEventListener('click', function() {
  const currentColor = document.body.style.backgroundColor;
  document.body.style.backgroundColor = currentColor === 'white' ? 'blue' : 'white';
});

  return (
    <div>
      <button class="toggle">Toggle</button>
    </div>
  )
}
export default Toggle