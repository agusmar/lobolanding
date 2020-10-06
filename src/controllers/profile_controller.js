import { Controller } from "stimulus"

export default class extends Controller {
  static targets = [ "menu" ]

  connect() {
    this.toggleClass = this.data.get("class") || "hidden"
  }

  toggle(event) {
    event.preventDefault()

    this.toggleClass.forEach( target => {
      this.menu.target.classList.toggle(this.toggleClass)
    })
  }
}