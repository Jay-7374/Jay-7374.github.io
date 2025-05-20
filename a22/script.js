document.getElementById("searchBtn").addEventListener("click", async () => {
    const email = document.getElementById("email").value.trim().toLowerCase();
    const result = document.getElementById("result");

    if (!email) {
        result.textContent = "Please enter an email.";
        return;
    }

    try {
        const userResponse = await fetch("https://jsonplaceholder.typicode.com/users");
        const users = await userResponse.json();
        const user = users.find(u => u.email.toLowerCase() === email);

        if (user) {
            const postResponse = await fetch("https://jsonplaceholder.typicode.com/posts");
            const posts = await postResponse.json();
            const userPosts = posts.filter(post => post.userId === user.id);

            result.textContent = `Name: ${user.name} | Posts: ${userPosts.length}`;
        } else {
            result.textContent = "User not found.";
        }
    } catch (error) {
        result.textContent = "Error fetching data. Please try again.";
        console.error(error);
    }
});
