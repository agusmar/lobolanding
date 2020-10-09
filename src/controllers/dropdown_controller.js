import { Dropdown } from "tailwindcss-stimulus-components"
application.register('dropdown', Dropdown)

import { Controller } from "stimulus"

export default class extends Controller {


  greet() {
    this.outputTarget.textContent =
      `Hello, ${this.nameTarget.value}!`
  }
}