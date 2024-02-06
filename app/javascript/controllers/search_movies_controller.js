import { Controller } from "@hotwired/stimulus"

// Connects to data-controller="search-movies"
export default class extends Controller {
  static targets = ["list", "form", "input"]

  connect() {
    // console.log(this.listTarget, this.formTarget, this.inputTarget);
  }

  update(event) {
    const url = `${this.formTarget.action}?query=${this.inputTarget.value}`
    fetch(url, { headers: { "Accept" : "text/plain" }})
    .then(response => response.text())
    .then((data) => {
      // console.log(data)
      // update the DOM with the movies list
      this.listTarget.outerHTML = data
    })
  }
}
