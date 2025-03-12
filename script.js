document.getElementById('loadUsersBtn').addEventListener('click', loadUsers);

function loadUsers() {
  fetch('http://localhost:4500/Users')
    .then(response => response.json())
    .then(data => {
      displayUsers(data);
    })
    .catch(error => {
      console.error('Error fetching Users:', error);
    });
}

function displayUsers(Users) {
  const UsersList = document.getElementById('UsersList');
  UsersList.innerHTML = ''; 

  Users.forEach(person => {
    const personDiv = document.createElement('div');
    personDiv.classList.add('person');
    
    const personName = document.createElement('h3');
    personName.textContent = person.name;
    
    const personEmail = document.createElement('p');
    personEmail.textContent = `Email: ${person.email}`;
    
    const personAge = document.createElement('p');
    personAge.textContent = `Age: ${person.age}`;
    
    const personCity = document.createElement('p');
    personCity.textContent = `City: ${person.city}`;
    
    personDiv.appendChild(personName);
    personDiv.appendChild(personEmail);
    personDiv.appendChild(personAge);
    personDiv.appendChild(personCity);
    
    UsersList.appendChild(personDiv);
  });
}
