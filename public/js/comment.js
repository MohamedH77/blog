const commentForm = document.querySelector("#add-comment-form");

const commentFormHandler = async function(event) {
  event.preventDefault();

  const userPost_id = commentForm.dataset.userPost_id;
  const comment = document.querySelector('textarea[name="comment-body"]').value;
  

  if (body) {
    await fetch("/api/comment", {
      method: "POST",
      body: JSON.stringify({
        comment,
        userPost_id,
      }),
      headers: {
        "Content-Type": "application/json",
      },
    });

    document.location.reload();
  }

};
console.log(commentFormHandler);


commentForm.addEventListener('submit', commentFormHandler);
