let bikes = [];

function addBike() {
    const nameInput = document.getElementById("name");
    const typeInput = document.getElementById("type");
    const weightInput = document.getElementById("weight");
    
    const name = nameInput.value.trim();
    const type = typeInput.value.trim();
    const weight = weightInput.value.trim();
    
    if (name === "" || type === "" || weight === "") {
        alert("Ошибка: заполните все поля");
        return;
    }
    else if (isNaN(weight) || weight <= 0) {
        alert("Ошибка: вес должен быть числом больше 0");
        return;
    }
    else if (/^\d+$/.test(name) || /^\d+$/.test(type)) {
        alert("Ошибка: Название и тип не могут состоять только из цифр");
        return;
    }
    
    const newBike = {
        name: name,
        type: type,
        weight: weight
    };
    
    bikes.push(newBike);
    
    nameInput.value = "";
    typeInput.value = "";
    
    displayBikes();
}

function removeBike(index) {
    bikes.splice(index, 1);
    displayBikes();
}

function editBike(index) {
    const newName = prompt("Введите новое название:");
    const newType = prompt("Введите новый тип:");
    const newWeight = prompt("Введите новый вес:");
    
    if (newName === null || newType === null || newWeight === null || newName.trim() === "" || newType.trim() === "") {
        alert("Ошибка: заполните все поля");
        return;
    }
    else if (isNaN(newWeight) || newWeight <= 0) {
        alert("Ошибка: вес должен быть числом больше 0");
        return;
    }
    else if (/^\d+$/.test(newName) || /^\d+$/.test(newType)) {
        alert("Ошибка: Название и тип не могут состоять только из цифр");
        return;
    }
    
    bikes[index].name = newName.trim();
    bikes[index].type = newType.trim();
    bikes[index].weight = newWeight.trim();
    
    displayBikes();
}

function displayBikes() {
    const bikesList = document.getElementById("bikes-list");
    bikesList.innerHTML = "";
    
    bikes.forEach((bike, index) => {
        const bikeDiv = document.createElement("div");
        bikeDiv.classList.add("bike-item");
        
        const namePara = document.createElement("p");
        namePara.textContent = `Название: ${bike.name}`;
        
        const typePara = document.createElement("p");
        typePara.textContent = `Тип: ${bike.type}`;

        const weightPara = document.createElement("p");
        weightPara.textContent = `Вес: ${bike.weight}`;
        
        const editBtn = document.createElement("button");
        editBtn.textContent = "Изменить";
        editBtn.onclick = () => editBike(index);
        
        const deleteBtn = document.createElement("button");
        deleteBtn.textContent = "Удалить";
        deleteBtn.onclick = () => removeBike(index);
        
        bikeDiv.appendChild(namePara);
        bikeDiv.appendChild(typePara);
        bikeDiv.appendChild(weightPara);
        bikeDiv.appendChild(editBtn);
        bikeDiv.appendChild(deleteBtn);
        
        bikesList.appendChild(bikeDiv);
    });
}

