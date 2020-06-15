const salon = {
    name:"The Fashion Pet",
    phone:"1234567890",
    address:{
        street:"Av. University",
        number:"219-K"
    },
    counter:function(){
        // alert("A pet was registered");
        petCount.innerHTML = (salon.pets.length);
    },
    pets:[]
}

//object destructuring

let {name,phone,address:{street,number}} = salon;

document.getElementById('footer-info').innerHTML = `
    <p class="text-center"> ${name}, ${phone}, ${street}, ${number}</p>
`;

//object constructor for the pets

// console.log(name);
// console.log(number);

var c=0; //declaration and initialization of the counter
class Pet{
    constructor(name, age, breed, gender, service, ownerName, contactPhone){
        this.name = name;
        this.age = age;
        this.breed = breed;
        this.gender = gender;
        this.service = service;
        this.ownerName = ownerName;
        this.contactPhone = contactPhone;
        this.id="pet " + c;
        c += 1; //updating and increasing the counter per pet
    }
    ownerInfo(){
        console.log(`${this.ownerName} ${this.contactPhone}`);
    }
}

//create two objects

const scooby = new Pet("Scooby",60,"Great Dane", "Male", "Full Service", "Shaggy", "1234567890");
console.log(scooby.ownerInfo());
salon.pets.push(scooby);
displayTable(scooby);


// const roxy = new Pet("Roxy", 5, "Poodle", "Female", "Nails", "Matt", "0918726354");
// console.log(roxy.ownerInfo());
// display(roxy);
// salon.pets.push(roxy);

//get the information from the html form

let txtName = document.getElementById("petName");
let txtAge = document.getElementById("petAge");
let txtBreed = document.getElementById("petBreed");
let txtGender = document.getElementById("petGender");
let txtService = document.getElementById("petService");
let txtOwner = document.getElementById("ownerName");
let txtContactPhone = document.getElementById("contactNumber");

//register function

function register(){
    let thePet = new Pet(txtName.value, txtAge.value, txtBreed.value, txtGender.value, txtService.value, txtOwner.value, txtContactPhone.value);
    console.log(thePet);
    salon.pets.push(thePet);
    displayTable(thePet);

    document.getElementById("petName").value = '';
    document.getElementById("petAge").value = ''; 
    document.getElementById("petBreed").value = '';
    document.getElementById("petGender").value = '';
    document.getElementById("petService").value = '';
    document.getElementById("ownerName").value = '';
    document.getElementById("contactNumber").value = '';
    
}

//display function

// function display(aPet){

//     let listBody = document.getElementById('petList');
//     let item = `<li> ${aPet.name} ${aPet.age} ${aPet.breed} ${aPet.gender} ${aPet.service} ${aPet.ownerName}</li>`

//     listBody.innerHTML += item;
//     salon.counter();
    
// }

// display in a table

function displayTable(aPet){
    var tableBody = document.getElementById('rowPet');
    var row = `
        <tr id="${aPet.id}">
            <td> ${aPet.name} </td>
            <td> ${aPet.age} </td>
            <td> ${aPet.gender} </td>
            <td> ${aPet.breed} </td>
            <td> ${aPet.service} </td>
            <td> ${aPet.ownerName} </td>
            <td> ${aPet.contactPhone} </td>
            <td> <button onclick='deletePet("${aPet.id}")'> Delete </button> </td>
            
        </tr>
    `;
    tableBody.innerHTML += row;
    salon.counter();
}

//delete a pet

function deletePet(petId){
    //search process
    var tr = document.getElementById(petId)
    var indexDelete;
    for(var i = 0; i<salon.pets.length; i++){
        var selectedPet = salon.pets[i];
        if(selectedPet.id==petId){
            indexDelete = i;
        }
    }

    //delete the pet from the array
    console.log(salon.pets[indexDelete]);
    salon.pets.splice(indexDelete,1);
    //delete the pet from html
    console.log(tr);
    tr.remove();
    salon.counter();
}

//search a pet

function searchPet(){
    console.log("search function works");
    var ss = document.getElementById("petSearch").value;
    var searchString = ss.toLowerCase();

    for(var i=0; i < salon.pets.length; i++){
        var theFoundPet = salon.pets[i];

        if(theFoundPet.name.toLowerCase() == searchString){
            document.getElementById('pet ' + i).setAttribute('class','found')
        }
    }

    console.log(searchString);

    document.getElementById('petSearch').value='';
}