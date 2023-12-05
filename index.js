class User {
	constructor(firstName, lastName, age, location) {
		this.firstName = firstName;
		this.lastName = lastName;
		this.age = age;
		this.location = location;
	}

	confrontAge(ageToCompare) {
		return ageToCompare.age < this.age
			? this.firstName +
					" " +
					this.lastName +
					" è più grande di " +
					ageToCompare.firstName +
					" " +
					ageToCompare.lastName
			: this.firstName +
					" " +
					this.lastName +
					" è più piccolo di " +
					ageToCompare.firstName +
					" " +
					ageToCompare.lastName;
	}
}

const utente1 = new User("Marco", "Mandolini", 27, "Roma");
const utente2 = new User("Giorgio", "Fumagalli", 20, "Milano");

console.log(utente1.confrontAge(utente2));
console.log(utente2.confrontAge(utente1));

class Pet {
	constructor(petName, ownerName, species, breed) {
		this.petName = petName;
		this.ownerName = ownerName;
		this.species = species;
		this.breed = breed;
	}

	confrontOwner(ownerToCompare) {
		return this.ownerName === ownerToCompare.ownerName;
	}
}

button.addEventListener("click", function () {
	newAnimal();
});

newAnimal = function () {
	const petName = document.getElementById("petName");
	const ownerName = document.getElementById("ownerName");
	const species = document.getElementById("species");
	const breed = document.getElementById("breed");

	const newPet = new Pet(petName.value, ownerName.value, species.value, breed.value);
};
