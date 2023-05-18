const signupFormHandler = async function (event) {
  event.preventDefault();

  const usernameEl = document.querySelector("#email-input-signup");
  const passwordEl = document.querySelector("#password-input-signup");

  const response = await fetch("/api/user", {
    method: "POST",
    body: JSON.stringify({
      username: usernameEl.value,
      email: usernameEl.value, // Set email as the username
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
  .querySelector("#signup-form")
  .addEventListener("submit", signupFormHandler);
