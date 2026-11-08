(function () {
  if (window.lucide) { window.lucide.createIcons(); }

  /* ---------- media loading skeletons ---------- */
  var mediaFrames = document.querySelectorAll(".media-frame, .map");
  for (var m = 0; m < mediaFrames.length; m++) {
    (function (frame) {
      var media = frame.querySelector("iframe,video,img");
      if (!media) { frame.classList.add("is-loaded"); return; }
      frame.setAttribute("aria-busy", "true");
      function markLoaded() {
        frame.classList.add("is-loaded");
        frame.classList.remove("is-error");
        frame.removeAttribute("aria-busy");
      }
      function markError() {
        frame.classList.add("is-error", "is-loaded");
        frame.removeAttribute("aria-busy");
      }
      media.addEventListener("load", markLoaded, { once: true });
      media.addEventListener("loadeddata", markLoaded, { once: true });
      media.addEventListener("error", markError, { once: true });
      if (media.tagName === "IMG" && media.complete && media.naturalWidth) { markLoaded(); }
      if (media.tagName === "VIDEO" && media.readyState >= 2) { markLoaded(); }
    })(mediaFrames[m]);
  }

  /* ---------- subtle decorative parallax ---------- */
  var artIcons = document.querySelectorAll(".ambient-art .art-icon");
  var reduceArtMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
  if (artIcons.length && !reduceArtMotion) {
    var artFrame = null;
    function moveAmbientArt() {
      if (artFrame !== null) { return; }
      artFrame = window.requestAnimationFrame(function () {
        var scrollY = window.pageYOffset || document.documentElement.scrollTop || 0;
        for (var i = 0; i < artIcons.length; i++) {
          var speed = parseFloat(artIcons[i].getAttribute("data-speed")) || 0;
          artIcons[i].style.transform = "translate3d(0," + (scrollY * speed) + "px,0)";
        }
        artFrame = null;
      });
    }
    window.addEventListener("scroll", moveAmbientArt, { passive: true });
    moveAmbientArt();
  }

  /* ---------- mobile menu ---------- */
  var toggle = document.getElementById("nav-toggle");
  var menu = document.getElementById("site-menu");
  var header = document.querySelector(".nav");
  var small = window.matchMedia("(max-width: 900px)");

  function closeSubs() {
    var open = menu.querySelectorAll(".has-menu.open");
    for (var i = 0; i < open.length; i++) {
      open[i].classList.remove("open");
      var b = open[i].querySelector(".sub-toggle");
      if (b) { b.setAttribute("aria-expanded", "false"); }
    }
  }
  function setOpen(isOpen) {
    toggle.setAttribute("aria-expanded", String(isOpen));
    toggle.setAttribute("aria-label", isOpen ? "Close menu" : "Open menu");
    menu.classList.toggle("open", isOpen);
    if (!isOpen) { closeSubs(); }
  }

  if (toggle && menu) {
    toggle.addEventListener("click", function () {
      setOpen(toggle.getAttribute("aria-expanded") !== "true");
    });
    document.addEventListener("keydown", function (ev) {
      if (ev.key === "Escape" && toggle.getAttribute("aria-expanded") === "true") {
        setOpen(false);
        toggle.focus();
      }
    });
    document.addEventListener("click", function (ev) {
      if (toggle.getAttribute("aria-expanded") === "true" && !header.contains(ev.target)) { setOpen(false); }
    });
    menu.addEventListener("click", function (ev) {
      if (small.matches && ev.target.closest && ev.target.closest("a")) { setOpen(false); }
    });
    var subs = menu.querySelectorAll(".sub-toggle");
    for (var i = 0; i < subs.length; i++) {
      subs[i].addEventListener("click", function (ev) {
        var btn = ev.currentTarget;
        var li = btn.closest(".has-menu");
        var open = !li.classList.contains("open");
        li.classList.toggle("open", open);
        btn.setAttribute("aria-expanded", String(open));
      });
    }
    var onChange = function () { setOpen(false); };
    if (small.addEventListener) { small.addEventListener("change", onChange); } else if (small.addListener) { small.addListener(onChange); }
  }

  /* ---------- enquiry form ---------- */
  var form = document.getElementById("enquiry");
  if (!form) { return; }
  var status = document.getElementById("status");
  form.addEventListener("submit", function (ev) {
    ev.preventDefault();
    status.className = "form-status";
    if (!form.checkValidity()) {
      form.reportValidity();
      status.textContent = "Check the highlighted fields: name, email, type of repair and symptoms are required.";
      status.className = "form-status err";
      return;
    }
    // This form is not connected to a server. Replace this block with a request to your form service or backend.
    status.textContent = "Form checked. Nothing was sent, because this form is not connected to a service yet.";
    status.className = "form-status info";
  });
})();
