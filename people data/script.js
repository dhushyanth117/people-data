document.addEventListener("DOMContentLoaded", function () {
    const personInfoElement = document.getElementById("person-info");
    const personTetails = document.getElementById("order-list");
    const description = document.getElementById("description");
    const nextButton = document.getElementById("next-button");
    let currentIndex = 0;
    let count=0
    
    let paragraghThree=document.createElement("p");
    
    paragraghThree.classList.add("updation")
    description.appendChild(paragraghThree);
    let jsonData = [
        {
            "name": "John Smith",
            "location": "New York, NY"
        },
        {
            "name": "Jane Doe",
            "location": "Los Angeles, CA"
        },
        
        {
            "name": "Ashley Sanders",
            "location": "Winnipeg, MB"
        },
        {
            "name": "Emily Davis",
            "location": "Houston, TX"
        },
        {
            "name": "Michael Brown",
            "location": "Phoenix, AZ"
        },
        {
            "name": "Sarah Miller",
            "location": "Philadelphia, PA"
        },
        {
            "name": "David Garcia",
            "location": "San Antonio, TX"
        },
        {
            "name": "Jessica Rodriguez",
            "location": "San Diego, CA"
        },
        {
            "name": "Mark Wilson",
            "location": "Dallas, TX"
        },
        {
            "name": "Elizabeth Martinez",
            "location": "San Jose, CA"
        },
        {
            "name": "Joshua Hernandez",
            "location": "Austin, TX"
        },
        {
            "name": "Karen Moore",
            "location": "Jacksonville, FL"
        },
        {
            "name": "Brian Jackson",
            "location": "Fort Worth, TX"
        },
        {
            "name": "Heather Anderson",
            "location": "Columbus, OH"
        },
        {
            "name": "Teresa Thomas",
            "location": "Charlotte, NC"
        },
        {
            "name": "Dennis Mitchell",
            "location": "Indianapolis, IN"
        },
        {
            "name": "Cynthia Lee",
            "location": "Seattle, WA"
        },
        {
            "name": "Adam Hall",
            "location": "Denver, CO"
        },
        {
            "name": "Nancy Allen",
            "location": "El Paso, TX"
        },
        {
            "name": "Lisa King",
            "location": "Washington, DC"
        },
        {
            "name": "William Wright",
            "location": "Boston, MA"
        },
        {
            "name": "Mary Scott",
            "location": "Nashville, TN"
        },
        {
            "name": "Kathryn Green",
            "location": "Portland, OR"
        },
        {
            "name": "Gerald Baker",
            "location": "Vancouver, BC"
        },
        {
            "name": "Eric Cooper",
            "location": "Sacramento, CA"
        },
        {
            "name": "Stephanie Gomez",
            "location": "Oklahoma City, OK"
        },
        {
            "name": "Edward Kelly",
            "location": "Tulsa, OK"
        },
        {
            "name": "Ashley Sanders",
            "location": "Winnipeg, MB"
        }
    ];


    function displayPerson(index) {
        if (index < jsonData.length) {
            const person = jsonData[index];
            let listMember = document.createElement("li");
            listMember.classList.add("my-class");
            let paragraphone = document.createElement("p");
            paragraphone.classList.add("paragra-class");
            
            let paragraptwo=document.createElement("p");
            paragraptwo.classList.add("paragrap-class");
            paragraphone.textContent ="Name :"+person.name;
            paragraptwo.textContent="Location :"+person.location;
            
            listMember.appendChild(paragraphone);
            listMember.appendChild(paragraptwo);
            personTetails.appendChild(listMember);
            
            count++
            currentIndex = index;
            paragraghThree.textContent="CURRNTLY  "+count+" PEOPLE SHOWING"
        } else {
            alert("No more people!");
        }
    }

    displayPerson(currentIndex);

    nextButton.addEventListener("click", function () {
        currentIndex++;
        displayPerson(currentIndex);
    });
});
