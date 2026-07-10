
document.addEventListener("DOMContentLoaded", function () {

    const postsPerPage = 8;

    const posts = document.querySelectorAll(".recent-post-card");

    const totalPages = Math.ceil(posts.length / postsPerPage);

    const params = new URLSearchParams(window.location.search);

    let currentPage = parseInt(params.get("page")) || 1;

    function showPage(page){

        posts.forEach((post,index)=>{

            const start=(page-1)*postsPerPage;
            const end=start+postsPerPage;

            post.style.display=(index>=start && index<end)
                ? "block"
                : "none";

        });

        document.getElementById("pageInfo").textContent =
            "Page "+page+" of "+totalPages;

        document.getElementById("prevBtn").disabled = page===1;
        document.getElementById("nextBtn").disabled = page===totalPages;
    }

    document.getElementById("prevBtn").addEventListener("click",function(){

        if(currentPage>1){
            currentPage--;
            showPage(currentPage);
        }

    });

    document.getElementById("nextBtn").addEventListener("click",function(){

        if(currentPage<totalPages){
            currentPage++;
            showPage(currentPage);
        }

    });

    showPage(currentPage);

});

