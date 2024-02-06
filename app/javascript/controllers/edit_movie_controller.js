import { Controller } from "@hotwired/stimulus"

// Connects to data-controller="edit-movie"
export default class extends Controller {
  static targets = ["form", "info", "card"]

  connect() {
    // console.log(this.formTarget);
  }

  displayForm() {
    // hide the info
    this.infoTarget.classList.add("d-none")
    // display the form
    this.formTarget.classList.remove("d-none")
  }

  update(event) {
    event.preventDefault()
    const url = this.formTarget.action
    console.log(new FormData(this.formTarget));
    fetch(url, {
      method: "PATCH",
      headers: { "Accept": "text/plain" },
      body: new FormData(this.formTarget)
    })
      .then(response => response.text())
      .then((data) => {
        // console.log(data)
        this.cardTarget.outerHTML = data
      })

  }
}
