document.addEventListener("DOMContentLoaded", function () {

    const postsPerPage = 6;

    const posts = document.querySelectorAll(".recent-post-card");

    const totalPages = Math.ceil(posts.length / postsPerPage);

    const params = new URLSearchParams(window.location.search);

    let currentPage = Number(params.get("page")) || 1;

    if (currentPage < 1) {
        currentPage = 1;
    }

    if (currentPage > totalPages) {
        currentPage = totalPages;
    }


    function showPage(page) {

        posts.forEach((post, index) => {

            const start = (page - 1) * postsPerPage;
            const end = start + postsPerPage;

            if (index >= start && index < end) {
                post.style.display = "block";
            } else {
                post.style.display = "none";
            }

        });

        document.getElementById("pageInfo").textContent =
            `Page ${page} of ${totalPages}`;

        document.getElementById("prevBtn").disabled = page === 1;

        document.getElementById("nextBtn").disabled = page === totalPages;

    }


    document.getElementById("prevBtn").onclick = function () {

        if (currentPage > 1) {

            currentPage--;

            history.pushState(
                null,
                "",
                "?page=" + currentPage
            );

            showPage(currentPage);
        }

    };


    document.getElementById("nextBtn").onclick = function () {

        if (currentPage < totalPages) {

            currentPage++;

            history.pushState(
                null,
                "",
                "?page=" + currentPage
            );

            showPage(currentPage);
        }

    };


    showPage(currentPage);

});
