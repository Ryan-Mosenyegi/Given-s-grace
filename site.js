(function () {
  if (window.lucide) { window.lucide.createIcons(); }

  var form = document.getElementById("enquiry");
  if (!form) { return; }
  var status = document.getElementById("status");
  form.addEventListener("submit", function (ev) {
    ev.preventDefault();
    status.className = "form-status";
    if (!form.checkValidity()) {
      form.reportValidity();
      status.textContent = "Check the highlighted fields: name, email, type of repair, symptoms and the agreement are required.";
      status.className = "form-status err";
      return;
    }
    // This form is not connected to a server. Replace this block with a request to your form service or backend.
    status.textContent = "Form checked. Nothing was sent, because this form is not connected to a service yet.";
    status.className = "form-status ok";
  });
})();
