const Nav = () => `
<nav>
    <a href="#" class="logo">
        <img src="https://www.instagram.com/static/images/web/mobile_nav_type_logo.png/735145cfe0a4.png" alt="logo" />
    </a>
    <input type="text" placeholder="Search" class="search" />
    <span class="nav-links">
        <a href="#"><i class="fas fa-home"></i></a>
        <a href="#"><i class="fab fa-rocketchat"></i></a>
        <input type="file" name="photo" id="addPhotoInput">
        <label for="addPhotoInput">
            <i class=" add-photo far fa-plus-square"></i>
        </label>
        <a href="#"><i class="far fa-compass"></i></a>
        <a href="#"><i class="far fa-heart"></i></a>
    </span>
</nav>
`
export default Nav