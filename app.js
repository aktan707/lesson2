const input = document.querySelector('input');
const addBtn = document.getElementById('add');
const table = document.querySelector('tbody');

const users = [
    { name: "Aktan",
      id: 1
    },
    { name: "Amina", 
      id: 2
    },
];

function renderTable() {
    table.innerHTML = '';
    for (const user of users) {
        table.innerHTML += `
        <tr>
            <th scope="row">${user.id}</th>
            <td>${user.name}</td>
            <td>
                <button class="btn btn-info" onclick="editUser(${user.id})">Edit</button>
                <button class="btn btn-danger" onclick="deleteUserById(${user.id})">Delete</button>
            </td>
        </tr>`;
    }
}

function deleteUserById(userId) {
    const user = users.filter(user => user.id !== userId);
    users.length = 0;
    users.push(...user);
    renderTable();
}

addBtn.onclick = () => {
    const userInput = input.value.trim();

    if (userInput === '') {
        alert('текст не должен быть пустым');
        return;
    }

    const ids = users.map(user => user.id);
    let maxId = ids.length > 0 ? Math.max(...ids) : 0;
    
    const newUser = {
        name: userInput,
        id: maxId + 1
    };
    
    users.push(newUser);
    renderTable();
    input.value = '';
}

renderTable();

// git add README.md
// git commit -m "first commit"
// git branch -M main
// git remote add origin https://github.com/aktan707/lesson2.git
// git push -u origin main