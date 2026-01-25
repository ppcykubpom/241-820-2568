function submitData() {

    let firstNameDOM = document.querySelector('input[name="firstname"]');
    let lastNameDOM = document.querySelector('input[name="lastname"]');
    let ageDOM = document.querySelector('input[name="age"]');
    let descriptionDOM = document.querySelector('textarea[name="description"]');


    let genderDOM = document.querySelector('input[name="gender"]:checked');


    let interestsDOM = document.querySelectorAll('input[name="interest"]:checked');
    let interests = [];
    interestsDOM.forEach((item) => {
        interests.push(item.value);
    });
    let userData = {
        firstName: firstNameDOM ? firstNameDOM.value : "",
        lastName: lastNameDOM ? lastNameDOM.value : "",
        age: ageDOM ? ageDOM.value : "",
        gender: genderDOM ? genderDOM.value : "Not Specified",
        interests: interests,
        description: descriptionDOM ? descriptionDOM.value : ""
    };
    console.log("TRANSMITTED_DATA:", userData);
}