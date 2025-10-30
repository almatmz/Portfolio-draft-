$(function () {
  $("main, .hero").hide().fadeIn(800);

  const current = location.pathname.split("/").pop();
  $(".nav-link").each(function () {
    if ($(this).attr("href") === current) $(this).addClass("active");
  });

  $("#contactForm").on("submit", function (e) {
    e.preventDefault();
    const name = $("#name").val().trim();
    const email = $("#email").val().trim();
    const msg = $("#message").val().trim();
    const validEmail = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    if (!name || !email || !msg) return alert("Please fill in all fields.");
    if (!validEmail.test(email)) return alert("Enter a valid email.");
    alert(" Message sent successfully!");
    this.reset();
  });

  $(".card").hover(
    function () {
      $(this).css("transform", "scale(1.02)");
    },
    function () {
      $(this).css("transform", "scale(1)");
    }
  );

  $(".project-card").on("click", function () {
    const title = $(this).find("h5").text();
    $("#projectModal .modal-title").text(title);
  });
});
