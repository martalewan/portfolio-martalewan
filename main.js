function toggleNavList() {
    if (document.getElementById("mainNavList").classList.contains("mobile-show")) {
        document.getElementById("mainNavList").classList.remove("mobile-show");
        document.getElementById("mainNavListClickCatcher").classList.remove("mobile-show");
    } else {
        document.getElementById("mainNavList").classList.add("mobile-show");
        document.getElementById("mainNavListClickCatcher").classList.add("mobile-show");
    }
}