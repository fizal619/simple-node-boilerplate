// jest won't error out on DOM calls.
// console.log(document.querySelector('p').innerHTML);

const button = document.getElementById('reserve');

//somehow submitting Null
button.addEventListener('click', async _ => {
  try {
    const response = await fetch('http://localhost:3000/reservations', {
      method: 'post',
      body: {
        name,
      },
    });
    console.log('Completed!', response);
  } catch (err) {
    console.error(`Error: ${err}`);
  }
});
