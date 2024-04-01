let friends = [];
let totalAge = 0;


document.addEventListener('DOMContentLoaded', function() {
    displayFriendCount();
});

function displayFriendCount() {
    const friendCount = Math.floor(Math.random() * 9) + 1;
    const friendCountDiv = document.getElementById('fCount');
    friendCountDiv.innerHTML = `Total Friends: ${friendCount} `;
    
    const friendInputsDiv = document.getElementById('fInputs');
    friendInputsDiv.innerHTML = '';

    friends = []; 
    for (let i = 0; i < friendCount; i++) {
        const ageInput = document.createElement('input');
        ageInput.type = 'number';
        ageInput.placeholder = `AgeFriend ${i + 1}`;
        ageInput.id = `age${i + 1}`;

        const nicknameInput = document.createElement('input');
        nicknameInput.type = 'text';
        nicknameInput.placeholder = `NameFriend ${i + 1}`;
        nicknameInput.id = `nickname${i + 1}`;

        friendInputsDiv.appendChild(nicknameInput);
        friendInputsDiv.appendChild(ageInput);
        

      
        friends.push({
            nickname: '', 
            age: 0 
        });
       
        nicknameInput.addEventListener('input', function() {
            friends[i].nickname = this.value;
        });
       
        ageInput.addEventListener('input', function() {
            friends[i].age = parseInt(this.value);
        });
    }
}

function calTotalAge() {
    totalAge = 0;
    for (let i = 0; i < friends.length; i++) {
        totalAge += parseInt(friends[i].age);
    }
    alert(`Total Age: ${totalAge} `);
}

function calAverageAge() {
    if (friends.length === 0) {
        alert("กรอกข้อมูล");
        return;
    }

    const averageAge = totalAge / friends.length;
    alert(`Average Age ${averageAge} `);
}

function youngFriend() {
    if (friends.length === 0) {
        alert("กรอกข้อมูล");
        return;
    }

    let minAge = Number.MAX_VALUE;
    let youngestFriends = [];

    for (let i = 0; i < friends.length; i++) {
        if (parseInt(friends[i].age) < minAge) {
            minAge = parseInt(friends[i].age);
            youngestFriends = [friends[i]];
        } else if (parseInt(friends[i].age) === minAge) {
            youngestFriends.push(friends[i]);
        }
    }

    let message = "The Youngest Friend \n";
    youngestFriends.forEach(friend => {
        message += `Name: ${friend.nickname}, Old: ${friend.age}\n`;
    });
    alert(message);
}

function oldFriend() {
    if (friends.length === 0) {
        alert("กรอกข้อมูล");
        return;
    }

    let maxAge = Number.MIN_VALUE;
    let oldestFriends = [];

    for (let i = 0; i < friends.length; i++) {
        if (parseInt(friends[i].age) > maxAge) {
            maxAge = parseInt(friends[i].age);
            oldestFriends = [friends[i]];
        } else if (parseInt(friends[i].age) === maxAge) {
            oldestFriends.push(friends[i]);
        }
    }

    let message = "The Oldest Friend \n";
    oldestFriends.forEach(friend => {
        message += `Name: ${friend.nickname} Old: ${friend.age}\n`;
    });
    alert(message);
}

function reset() {
    friends = [];
    totalAge = 0;
    displayFriendCount();
}
