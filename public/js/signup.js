const signupFormHandler = async function (event) {
  event.preventDefault();

  const emailEL = document.querySelector("#email-signup");
  const passwordEl = document.querySelector("#password-signup");
  const usernameEL = document.querySelector("#username-input-signup");

  const response = await fetch("/api/user", {
    method: "POST",
    body: JSON.stringify({
      username: usernameEL.value,
      email: emailEL.value, // Set email as the username
      password: passwordEl.value,
    }),
    headers: { "Content-Type": "application/json" },
  });

  if (response.ok) {
    document.location.replace("/dashboard");
  } else {
    alert("Failed to sign up");
  }
};

document
  .querySelector(".signup-form")
  .addEventListener("submit", signupFormHandler);
