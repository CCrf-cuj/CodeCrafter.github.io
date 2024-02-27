document.getElementById('membersButton').addEventListener('click', function() {
    document.getElementById('alumniContent').classList.remove('active');
    document.getElementById('membersContent').classList.add('active');
    
    // Remove content from middle-top div
    document.querySelector('.middle-top').innerHTML = '';
  
    // Change text properties of buttons
    document.getElementById('alumniButton').style.textShadow = ''; // Reset text-shadow
    document.getElementById('alumniButton').style.color = ''; // Reset color
    document.getElementById('membersButton').style.textShadow = '0 0 20px rgba(0, 0, 0, 1)'; // Change text-shadow
    document.getElementById('membersButton').style.color = 'rgb(255, 253, 253)'; // Change color
  });
  
  // Function to switch to Alumni content
  document.getElementById('alumniButton').addEventListener('click', function() {
    document.getElementById('membersContent').classList.remove('active');
    document.getElementById('alumniContent').classList.add('active');
    
    // Remove content from middle-top div
    document.querySelector('.middle-top').innerHTML = '';
  
    // Change text properties of buttons
    document.getElementById('membersButton').style.textShadow = ''; // Reset text-shadow
    document.getElementById('membersButton').style.color = ''; // Reset color
    document.getElementById('alumniButton').style.textShadow = '0 0 20px rgba(0, 0, 0, 1)'; // Change text-shadow
    document.getElementById('alumniButton').style.color = 'rgb(255, 253, 253)'; // Change color
  });
  
  
  // Initially hide both contents
  document.getElementById('membersContent').classList.remove('active');
  document.getElementById('alumniContent').classList.remove('active');
  
  // Apply text properties to the Members button by default
  document.getElementById('membersButton').style.textShadow = '';
  document.getElementById('membersButton').style.color = '';
  
  // Apply text properties to the Alumni button by default
  document.getElementById('alumniButton').style.textShadow = '';
  document.getElementById('alumniButton').style.color = '';
  
  