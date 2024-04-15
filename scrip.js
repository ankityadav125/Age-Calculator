document.addEventListener("DOMContentLoaded", function () {
  const date = document.querySelector(".datebox");
  const btn = document.querySelector(".btn");
  const result = document.querySelector(".age-result");

  btn.addEventListener("click", function () {
    const dobString = date.value;
    if (dobString === "") {
      alert("Please enter your date of birth.");
    } else {
      const dobParts = dobString.split("-");
      const dob_day = parseInt(dobParts[0]);
      const dob_month = parseInt(dobParts[1]);
      const dob_year = parseInt(dobParts[2]);

      const dob = new Date(dob_year, dob_month - 1, dob_day);
      const now = new Date();
      const now_year = now.getFullYear();
      const age = now_year - dob_year;
      result.textContent = `Your age is ${age} years old`;
    }
  });
});
