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
  var form = document.querySelector("form[data-web3forms-form]");
  if (!form) { return; }
  var status = document.getElementById("status");
  var accessKey = (form.getAttribute("data-web3forms-key") || "").trim();
  var formReady = form.getAttribute("data-web3forms-ready") === "true" && accessKey.length > 0;
  var submitButton = form.querySelector('button[type="submit"]');
  var formNotice = document.querySelector(".form-notice");
  var isContactForm = form.id === "contact-enquiry";
  var messageLabel = isContactForm ? "message" : "repair enquiry";

  if (formReady) {
    form.action = "https://api.web3forms.com/submit";
    form.method = "post";
    form.querySelector('[name="access_key"]').value = accessKey;
    form.querySelectorAll("fieldset").forEach(function (fieldset) { fieldset.disabled = false; });
    submitButton.disabled = false;
    submitButton.innerHTML = 'Send ' + (isContactForm ? "message" : 'repair enquiry') + ' <i data-lucide="arrow-up-right" class="icon" style="width:16px;height:16px" aria-hidden="true"></i>';
    if (window.lucide) { window.lucide.createIcons(); }

    var captcha = document.getElementById("form-captcha");
    captcha.hidden = false;
    if (!document.querySelector('script[data-web3forms-captcha]')) {
      var captchaScript = document.createElement("script");
      captchaScript.src = "https://web3forms.com/client/script.js";
      captchaScript.async = true;
      captchaScript.defer = true;
      captchaScript.setAttribute("data-web3forms-captcha", "true");
      document.body.appendChild(captchaScript);
    }

    if (formNotice) {
      formNotice.innerHTML = "<strong>Online " + (isContactForm ? "contact" : "enquiries") + " are active.</strong> Your details will be processed by Web3Forms and emailed to the workshop. Please do not include passwords, payment details, or other sensitive information.";
    }
  }

  form.addEventListener("submit", function (ev) {
    ev.preventDefault();
    status.className = "form-status";
    if (!formReady) {
      status.textContent = "Online enquiries are not active yet. Nothing was sent or saved. Please use the phone, WhatsApp, or email links above.";
      status.className = "form-status info";
      return;
    }
    if (!form.checkValidity()) {
      form.reportValidity();
      status.textContent = "Please complete the required fields, including your name, email, and " + messageLabel + ".";
      status.className = "form-status err";
      return;
    }
    var originalButton = submitButton.innerHTML;
    var accessKeyField = form.querySelector('[name="access_key"]');
    submitButton.disabled = true;
    submitButton.textContent = "Sending " + (isContactForm ? "message" : "enquiry") + "…";
    form.setAttribute("aria-busy", "true");
    status.textContent = "Sending your " + (isContactForm ? "message" : "enquiry") + " securely…";
    status.className = "form-status info";

    fetch(form.action, { method: "POST", body: new FormData(form), headers: { Accept: "application/json" } })
      .then(function (response) {
        return response.json().then(function (data) {
          if (!response.ok || !data.success) { throw new Error(data.message || "The form service could not accept the enquiry."); }
          return data;
        });
      })
      .then(function () {
        status.textContent = "Your " + (isContactForm ? "message" : "enquiry") + " was sent. The workshop will contact you using the details you provided.";
        status.className = "form-status ok";
        form.reset();
        accessKeyField.value = accessKey;
        if (window.hcaptcha && typeof window.hcaptcha.reset === "function") { window.hcaptcha.reset(); }
      })
      .catch(function () {
        status.textContent = "We couldn't confirm delivery. Please contact the workshop by phone, WhatsApp, or email instead.";
        status.className = "form-status err";
      })
      .finally(function () {
        submitButton.disabled = false;
        submitButton.innerHTML = originalButton;
        form.removeAttribute("aria-busy");
        if (window.lucide) { window.lucide.createIcons(); }
      });
  });
})();
