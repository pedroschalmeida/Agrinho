const menu = document.querySelector('.menu');
const NavMenu = document.querySelector('.nav-menu');

menu.addEventListener('click', () => {
    menu.classList.toggle('ativo');
    NavMenu.classList.toggle('ativo');
})

function slider (anything){
    document.querySelector ('.one') .src = anything;
};

let menu = document.querySelector ('#menu-icon');
let navbar = document.querySelector ('.navbar');

menu.onclick = () => {
menu.classList.toggle ('bx-x');
navbar.classList.toggle ('open');
}

<script src="https://cdnjs.cloudflare.com/ajax/libs/jquery/3.6.0/jquery.min.js"></script>
<script src="https://cdnjs.cloudflare.com/ajax/libs/waypoints/4.0.1/jquery.waypoints.min.js"></script>
<script src="https://cdnjs.cloudflare.com/ajax/libs/OwlCarousel2/2.3.4/owl.carousel.min.js"></script>
<script>


   function myFunction() {
        var x = document.getElementById("myLinks");
        if (x.style.display === "block") {
            x.style.display = "none";
        } else {
            x.style.display = "block";
        }
}

        var btn = document.querySelector("#back-to-top");
        btn.addEventListener("click", function() {
            window.scrollTo(0, 0);
        });

function addPost() {
            var postContent = document.getElementById('new-post').value;
            if (postContent.trim() !== "") {
                var postList = document.getElementById('posts');
                var newPost = document.createElement('li');
                newPost.className = 'post';
                newPost.innerHTML = '<p>' + postContent + '</p>';
                postList.insertBefore(newPost, postList.firstChild);
                document.getElementById('new-post').value = '';
            }
        }
        